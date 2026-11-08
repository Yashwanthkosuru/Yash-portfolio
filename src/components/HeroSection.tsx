import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.png";

// Only 3 minimal code icons around profile - positioned at 120° intervals
const codeIcons = [
  { symbol: '{ }', angle: -30 }, // Top right
  { symbol: '</>', angle: 90 }, // Bottom
  { symbol: '>_', angle: 210 }, // Top left
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-32 md:pt-40 px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-continuous" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-continuous" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-continuous" />
              Available for opportunities
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hello, I'm
              <br />
              <span className="text-gradient">Yashwanth A Kosuru</span>
            </h1>

            <h2 className="font-display text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer
              <span className="text-primary"> | </span>
              <span className="hidden sm:inline">Java • Spring Boot • GraphQL • Microservices</span>
              <span className="sm:hidden">Java • Spring Boot</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              Full Stack Developer specialized in building scalable distributed systems, 
              cloud-native architectures, and high-performance backend services.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://www.linkedin.com/in/yashwanth-a-kosuru/', '_blank')}
              >
                View LinkedIn
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group" onClick={() => window.open('https://github.com/Yashwanthkosuru', '_blank')}>
                  View Github
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Experience Badge */}
            <div className="flex items-center gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="glass-card px-4 py-3 md:px-6 md:py-4 rounded-2xl">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card px-4 py-3 md:px-6 md:py-4 rounded-2xl">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">8+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image with 3 Code Icons at 120° spacing */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              
              {/* Layer 1: Soft outer glow behind everything */}
              <div 
                className="absolute inset-0 rounded-full animate-pulse-glow-continuous"
                style={{ 
                  background: 'radial-gradient(circle, hsl(195 100% 50% / 0.25) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                  zIndex: 0
                }}
              />
              
              {/* Layer 2: Circle outline with reduced brightness */}
              <div 
                className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border-2 border-primary/50"
                style={{ 
                  boxShadow: '0 0 20px hsl(195 100% 50% / 0.3), inset 0 0 40px hsl(195 100% 50% / 0.1)',
                  zIndex: 1
                }}
              />
              
              {/* Layer 3: Inner vignette/depth effect */}
              <div 
                className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full overflow-hidden"
                style={{ 
                  background: 'radial-gradient(circle at center, transparent 50%, hsl(195 100% 50% / 0.08) 100%)',
                  zIndex: 2
                }}
              />
              
              {/* Layer 4: Avatar image - contained inside circle */}
              <div 
                className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full overflow-hidden flex items-center justify-center"
                style={{ zIndex: 3 }}
              >
                <img 
                  src={developerAvatar}
                  alt="Developer Avatar"
                  className="w-[90%] h-[90%] object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              
              {/* Layer 5: 3 Code Icons positioned at 120° intervals - ABOVE circle */}
              {codeIcons.map(({ symbol, angle }, index) => {
                const radius = 180; // Distance from center (responsive)
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute hidden md:flex w-12 h-12 lg:w-14 lg:h-14 glass-card rounded-xl items-center justify-center animate-float-continuous"
                    style={{ 
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                      animationDelay: `${index * -2.5}s`,
                      boxShadow: '0 0 25px hsl(195 100% 50% / 0.4)',
                      zIndex: 10
                    }}
                  >
                    <span className="text-primary font-mono font-bold text-sm lg:text-base">{symbol}</span>
                  </div>
                );
              })}
              
              {/* Decorative ring - top right */}
              <div 
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 border border-primary/20 rounded-full"
                style={{ zIndex: 0 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-sm hidden md:block">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
