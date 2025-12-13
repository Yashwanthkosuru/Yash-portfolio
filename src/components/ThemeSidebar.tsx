import { useState, useEffect, useRef } from 'react';
import { Palette, Sun, Moon, Monitor } from 'lucide-react';

type ThemeMode = 'light' | 'dark' | 'system';

interface Theme {
  name: string;
  mode: ThemeMode;
  icon: React.ReactNode;
  description: string;
}

const themes: Theme[] = [
  {
    name: 'Light',
    mode: 'light',
    icon: <Sun className="w-4 h-4" />,
    description: 'Clean bright theme',
  },
  {
    name: 'Dark',
    mode: 'dark',
    icon: <Moon className="w-4 h-4" />,
    description: 'Dark neon theme',
  },
  {
    name: 'System',
    mode: 'system',
    icon: <Monitor className="w-4 h-4" />,
    description: 'Match system preference',
  },
];

const ThemeSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ThemeMode>('system');
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check system preference and apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode') as ThemeMode | null;
    if (savedTheme) {
      setActiveTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    const effectiveTheme = mode === 'system' ? getSystemTheme() : mode;

    if (effectiveTheme === 'light') {
      // Light theme
      root.style.setProperty('--background', '0 0% 98%');
      root.style.setProperty('--foreground', '220 30% 10%');
      root.style.setProperty('--card', '0 0% 100%');
      root.style.setProperty('--card-foreground', '220 30% 10%');
      root.style.setProperty('--popover', '0 0% 100%');
      root.style.setProperty('--popover-foreground', '220 30% 10%');
      root.style.setProperty('--primary', '195 100% 40%');
      root.style.setProperty('--primary-foreground', '0 0% 100%');
      root.style.setProperty('--secondary', '220 15% 92%');
      root.style.setProperty('--secondary-foreground', '220 30% 10%');
      root.style.setProperty('--muted', '220 15% 92%');
      root.style.setProperty('--muted-foreground', '220 15% 40%');
      root.style.setProperty('--accent', '195 100% 40%');
      root.style.setProperty('--accent-foreground', '0 0% 100%');
      root.style.setProperty('--border', '220 15% 85%');
      root.style.setProperty('--input', '220 15% 85%');
      root.style.setProperty('--ring', '195 100% 40%');
      root.style.setProperty('--glow-primary', '0 0 20px hsl(195 100% 40% / 0.3)');
      root.style.setProperty('--glow-primary-lg', '0 0 40px hsl(195 100% 40% / 0.2), 0 0 80px hsl(195 100% 40% / 0.1)');
      root.style.setProperty('--gradient-dark', 'linear-gradient(180deg, hsl(0 0% 98%) 0%, hsl(220 15% 95%) 100%)');
      root.style.setProperty('--gradient-card', 'linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(220 15% 97%) 100%)');
      root.style.setProperty('--gradient-neon', 'linear-gradient(135deg, hsl(195 100% 40%) 0%, hsl(210 100% 50%) 100%)');
      root.style.setProperty('--gradient-hero', 'radial-gradient(ellipse at 50% 0%, hsl(195 100% 40% / 0.1) 0%, transparent 60%)');
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else {
      // Dark theme
      root.style.setProperty('--background', '220 30% 6%');
      root.style.setProperty('--foreground', '210 40% 98%');
      root.style.setProperty('--card', '220 25% 10%');
      root.style.setProperty('--card-foreground', '210 40% 98%');
      root.style.setProperty('--popover', '220 25% 10%');
      root.style.setProperty('--popover-foreground', '210 40% 98%');
      root.style.setProperty('--primary', '195 100% 50%');
      root.style.setProperty('--primary-foreground', '220 30% 6%');
      root.style.setProperty('--secondary', '220 20% 14%');
      root.style.setProperty('--secondary-foreground', '210 40% 98%');
      root.style.setProperty('--muted', '220 20% 14%');
      root.style.setProperty('--muted-foreground', '215 20% 65%');
      root.style.setProperty('--accent', '195 100% 50%');
      root.style.setProperty('--accent-foreground', '220 30% 6%');
      root.style.setProperty('--border', '220 20% 18%');
      root.style.setProperty('--input', '220 20% 18%');
      root.style.setProperty('--ring', '195 100% 50%');
      root.style.setProperty('--glow-primary', '0 0 20px hsl(195 100% 50% / 0.5)');
      root.style.setProperty('--glow-primary-lg', '0 0 40px hsl(195 100% 50% / 0.3), 0 0 80px hsl(195 100% 50% / 0.1)');
      root.style.setProperty('--gradient-dark', 'linear-gradient(180deg, hsl(220 30% 6%) 0%, hsl(220 35% 4%) 100%)');
      root.style.setProperty('--gradient-card', 'linear-gradient(135deg, hsl(220 25% 12%) 0%, hsl(220 25% 8%) 100%)');
      root.style.setProperty('--gradient-neon', 'linear-gradient(135deg, hsl(195 100% 50%) 0%, hsl(210 100% 60%) 100%)');
      root.style.setProperty('--gradient-hero', 'radial-gradient(ellipse at 50% 0%, hsl(195 100% 50% / 0.15) 0%, transparent 60%)');
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    }
    
    localStorage.setItem('theme-mode', mode);
    setActiveTheme(mode);
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (activeTheme === 'system') {
        applyTheme('system');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [activeTheme]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
      onMouseLeave={handleMouseLeave}
    >
      {/* Theme Button with Glow - only triggers on exact hover */}
      <div
        className={`relative p-3 glass-card rounded-xl cursor-pointer transition-all duration-300 ease-out
                    hover:scale-110 group`}
        onMouseEnter={handleMouseEnter}
        style={{
          boxShadow: '0 0 20px hsl(195 100% 50% / 0.25)',
        }}
      >
        <Palette className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
        {/* Animated glow ring */}
        <div 
          className="absolute inset-0 rounded-xl border border-primary/30 transition-all duration-300"
          style={{
            animation: 'pulse-glow-continuous 5s ease-in-out infinite',
          }}
        />
        {/* Inner glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>

      {/* Expanded Panel - Slides up with scale animation */}
      <div
        className={`absolute right-0 bottom-full mb-3 glass-card rounded-xl overflow-hidden transition-all duration-300 ease-out origin-bottom-right
                    ${isOpen 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-90 translate-y-2 pointer-events-none'}`}
        onMouseEnter={handleMouseEnter}
        style={{
          boxShadow: isOpen ? '0 0 30px hsl(195 100% 50% / 0.2)' : 'none',
        }}
      >
        <div className="p-2 min-w-[180px]">
          <div className="text-xs text-muted-foreground px-3 py-2 font-medium uppercase tracking-wider">
            Theme
          </div>
          <div className="flex flex-col gap-1">
            {themes.map((theme) => (
              <button
                key={theme.mode}
                onClick={() => applyTheme(theme.mode)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                           ${activeTheme === theme.mode 
                             ? 'bg-primary/20 text-primary' 
                             : 'hover:bg-primary/10 text-muted-foreground hover:text-foreground'}`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                             ${activeTheme === theme.mode ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}
                >
                  {theme.icon}
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{theme.name}</div>
                  <div className="text-xs text-muted-foreground">{theme.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSidebar;