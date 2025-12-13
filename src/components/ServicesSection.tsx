import { 
  Globe, 
  Layers, 
  Code2, 
  Cloud, 
  Cpu, 
  Monitor 
} from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack application development with modern technologies and best practices",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    description: "Robust server-side solutions using Java, Spring Boot, and Node.js",
  },
  {
    icon: Layers,
    title: "API Design",
    description: "RESTful APIs and GraphQL implementations with Apollo Federation",
  },
  {
    icon: Cpu,
    title: "Microservices",
    description: "Scalable distributed systems architecture with event-driven patterns",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Cloud-native deployments on AWS and GCP with Kubernetes orchestration",
  },
  {
    icon: Monitor,
    title: "UI Integration",
    description: "Modern frontend development with React.js and Angular frameworks",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive development services tailored to build scalable, maintainable, and high-performance applications
          </p>
        </ScrollAnimationWrapper>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ScrollAnimationWrapper 
              key={index} 
              delay={index * 100}
              className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div className="group relative h-full">
                {/* Animated border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                
                <div className="relative h-full bg-card/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-border/30 
                               hover:border-transparent transition-all duration-500 overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon container with unique style */}
                  <div className="relative mb-6">
                    <div className="relative inline-flex">
                      {/* Outer ring */}
                      <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl scale-110 group-hover:scale-125 group-hover:border-primary/40 transition-all duration-500" />
                      
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon */}
                      <div className="relative p-4 md:p-5 bg-gradient-to-br from-card to-secondary/50 rounded-xl border border-border/50 group-hover:border-primary/30 transition-colors">
                        <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-lg md:text-xl mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary/60 transition-colors" />
                    <div className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors delay-75" />
                    <div className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary/20 transition-colors delay-150" />
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;