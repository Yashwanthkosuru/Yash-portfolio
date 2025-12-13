import { 
  Server, 
  Cloud, 
  Database, 
  Layout, 
  Settings,
} from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import TerminalCode from "./TerminalCode";

const skillCategories = [
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Java", "Spring Boot", "Microservices", "Hibernate", "JPA", "REST", "SOAP", "GraphQL", "Apollo", "Node.js"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "Kubernetes", "Docker", "Helm", "GitHub Actions", "Jenkins", "CloudWatch", "Dynatrace", "OpenSearch"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firestore", "Redis Cache"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Angular", "JavaScript", "TypeScript"],
  },
  {
    title: "Developer Tools",
    icon: Settings,
    skills: ["Git", "Swagger", "Postman", "JMeter", "Vegeta", "OpenTelemetry", "Sonar", "Kafka", "Zookeeper", "JUnit", "Jest", "Maven", "Python"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Technical Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A comprehensive toolkit built over years of hands-on experience with enterprise applications
          </p>
        </ScrollAnimationWrapper>

        {/* Hexagon-inspired grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {skillCategories.map((category, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 100}>
              <div className="group relative">
                {/* Card with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative glass-card p-5 md:p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-500 h-full">
                  {/* Icon with floating effect */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors">
                        <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-base md:text-lg">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills as floating tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-gradient-to-r from-secondary/80 to-secondary/40 rounded-full text-xs md:text-sm text-muted-foreground 
                                 border border-border/30 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)]
                                 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors" />
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Terminal Code */}
        <ScrollAnimationWrapper delay={600}>
          <TerminalCode />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default SkillsSection;