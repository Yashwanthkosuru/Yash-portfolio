import { MapPin, GraduationCap, CheckCircle2, Code2, Database, Server, Cloud, Terminal, Braces } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { useState } from "react";

const highlights = [
  "4+ years in enterprise software development",
  "Expert in scalable distributed systems",
  "Cloud-native architecture specialist",
  "Legacy modernization experience",
  "DevOps and CI/CD proficiency",
  "Open to relocation",
];

// Only 6 icons total - 3 left, 3 right - pushed MUCH further outward
const leftIcons = [
  { Icon: Code2, tooltip: "Clean Code" },
  { Icon: Database, tooltip: "Databases" },
  { Icon: Server, tooltip: "Backend" },
];

const rightIcons = [
  { Icon: Cloud, tooltip: "Cloud" },
  { Icon: Terminal, tooltip: "DevOps" },
  { Icon: Braces, tooltip: "APIs" },
];

interface FloatingIconProps {
  Icon: React.ComponentType<{ className?: string }>;
  tooltip: string;
  index: number;
  side: 'left' | 'right';
}

const FloatingIcon = ({ Icon, tooltip, index, side }: FloatingIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // More spread out vertical positions
  const topPositions = ['top-[5%]', 'top-[45%]', 'top-[85%]'];
  
  return (
    <div 
      className={`absolute ${topPositions[index]} ${side === 'left' ? '-left-16 lg:-left-32 xl:-left-48 2xl:-left-56' : '-right-16 lg:-right-32 xl:-right-48 2xl:-right-56'} hidden lg:block`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`relative w-10 h-10 lg:w-12 lg:h-12 glass-card rounded-xl flex items-center justify-center cursor-pointer
                    transition-all duration-500 ease-out animate-float-continuous opacity-50 hover:opacity-100
                    ${isHovered ? 'scale-125 neon-border opacity-100' : 'hover:scale-110'}`}
        style={{
          animationDelay: `${index * -2.5}s`,
        }}
      >
        <Icon className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
        
        {/* Tooltip */}
        <div 
          className={`absolute ${side === 'left' ? 'left-full ml-3' : 'right-full mr-3'} 
                      whitespace-nowrap glass-card px-3 py-1.5 rounded-lg text-xs font-medium
                      transition-all duration-300 z-10
                      ${isHovered ? 'opacity-100 translate-x-0' : `opacity-0 ${side === 'left' ? '-translate-x-2' : 'translate-x-2'}`}`}
        >
          <span className="text-primary">{tooltip}</span>
        </div>
        
        {/* Subtle glow on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-primary/15 rounded-xl blur-xl" />
        )}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">About Me</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Building Solutions, Not
            <br />
            <span className="text-gradient">Just Code</span>
          </h2>
        </ScrollAnimationWrapper>

        <div className="relative max-w-2xl mx-auto">
          {/* Left Side Icons - Pushed MUCH further out */}
          {leftIcons.map((icon, index) => (
            <FloatingIcon 
              key={`left-${index}`} 
              {...icon} 
              index={index} 
              side="left" 
            />
          ))}

          {/* Right Side Icons - Pushed MUCH further out */}
          {rightIcons.map((icon, index) => (
            <FloatingIcon 
              key={`right-${index}`} 
              {...icon} 
              index={index} 
              side="right" 
            />
          ))}

          {/* Center Content */}
          <div className="space-y-6 md:space-y-8">
            <ScrollAnimationWrapper delay={100}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                I'm a passionate Full Stack Developer with over 4 years of experience 
                in designing and implementing enterprise-grade applications. My expertise 
                spans from building microservices architectures to developing cloud-native 
                solutions on AWS and GCP platforms.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={200}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                I specialize in Java ecosystem technologies including Spring Boot, GraphQL, 
                and Hibernate, while also being proficient in modern frontend frameworks 
                like React.js and Angular. My experience includes legacy system modernization 
                and implementing DevOps best practices.
              </p>
            </ScrollAnimationWrapper>

            {/* Highlights Grid */}
            <ScrollAnimationWrapper delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>

            {/* Education Card */}
            <ScrollAnimationWrapper delay={400}>
              <div className="glass-card p-4 md:p-6 rounded-2xl neon-border">
                <div className="flex items-start gap-4">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base md:text-lg">
                      B.Tech in Electronics & Communications
                    </h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      JNTU Kakinada • 2017 - 2021
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Location */}
            <ScrollAnimationWrapper delay={500}>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bahrain • Open to Relocation</span>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;