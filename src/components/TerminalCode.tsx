import { useEffect, useState, useCallback } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const codeLines = [
  { text: 'const ', class: 'text-primary' },
  { text: 'developer', class: 'text-foreground' },
  { text: ' = {', class: 'text-foreground' },
  { text: '\n  name', class: 'text-primary' },
  { text: ': ', class: 'text-foreground' },
  { text: '"Yashwanth"', class: 'text-green-400' },
  { text: ',', class: 'text-foreground' },
  { text: '\n  passion', class: 'text-primary' },
  { text: ': ', class: 'text-foreground' },
  { text: '"Building scalable systems"', class: 'text-green-400' },
  { text: ',', class: 'text-foreground' },
  { text: '\n  status', class: 'text-primary' },
  { text: ': ', class: 'text-foreground' },
  { text: '"Ready for challenges"', class: 'text-green-400' },
  { text: '\n};', class: 'text-foreground' },
];

const TerminalCode = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [displayedCode, setDisplayedCode] = useState<{ text: string; class: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Reset and restart animation
  const resetAnimation = useCallback(() => {
    // Fade out
    setOpacity(0);
    
    setTimeout(() => {
      // Reset state
      setDisplayedCode([]);
      setCurrentIndex(0);
      setCurrentCharIndex(0);
      setIsTyping(true);
      
      // Fade in
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }, 300);
  }, []);

  // Initial start
  useEffect(() => {
    if (isVisible && !isTyping && displayedCode.length === 0) {
      setIsTyping(true);
    }
  }, [isVisible, isTyping, displayedCode.length]);

  // Typing animation
  useEffect(() => {
    if (!isTyping) return;

    const interval = setInterval(() => {
      if (currentIndex < codeLines.length) {
        const currentLine = codeLines[currentIndex];
        if (currentCharIndex < currentLine.text.length) {
          setDisplayedCode((prev) => {
            const newCode = [...prev];
            newCode[currentIndex] = {
              ...currentLine,
              text: currentLine.text.slice(0, currentCharIndex + 1),
            };
            return newCode;
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setCurrentIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        // Animation complete - schedule restart after 6 seconds
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isTyping, currentIndex, currentCharIndex]);

  // Loop animation every 7 seconds
  useEffect(() => {
    if (!isTyping && displayedCode.length > 0 && isVisible) {
      const loopTimeout = setTimeout(() => {
        resetAnimation();
      }, 6000); // Wait 6 seconds after typing completes

      return () => clearTimeout(loopTimeout);
    }
  }, [isTyping, displayedCode.length, isVisible, resetAnimation]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div ref={ref} className="glass-card rounded-2xl max-w-2xl mx-auto overflow-hidden border border-border/50">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/70 hover:bg-destructive transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-muted-foreground font-mono">developer.js — bash</span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 bg-background/80">
        <div className="flex items-start gap-3">
          <span className="text-muted-foreground font-mono text-sm select-none">❯</span>
          <pre 
            className="font-mono text-sm overflow-x-auto flex-1 transition-opacity duration-300"
            style={{ opacity }}
          >
            <code>
              {displayedCode.map((segment, index) => (
                <span key={index} className={segment.class}>
                  {segment.text}
                </span>
              ))}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-primary transition-opacity`}>▋</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TerminalCode;