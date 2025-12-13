import { ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const projects = [
  {
    title: "Building Permits (Benayat) - Bahrain",
    subtitle: "Enterprise Workflow System",
    tech: ["Java", "Spring Boot", "GraphQL", "PostgreSQL", "Angular", "AWS", "Camunda"],
    highlights: [
      "Designed & optimized GraphQL APIs (25% faster responses)",
      "Built backend + UI modules across 5 applications",
      "Integrated Camunda workflow automation",
      "Implemented AWS Lambda schedulers + SES notifications",
      "Modernized legacy Java application",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    image: "src/assets/Home-Benayat-bh.png",
    url: "https://www.benayat.bh/",
  },
  {
    title: "AT&T DirecTV - Telecom Order Processing",
    subtitle: "High-Volume Transaction System",
    tech: ["Java", "Spring Boot", "Redis", "Kafka", "AWS EKS", "Jenkins"],
    highlights: [
      "Delivered features contributing to 50% sales increase",
      "Implemented JWT/OAuth2 authentication",
      "Kafka retry automation for failed orders",
      "Improved CI/CD pipelines and deployments",
      "Modernized legacy modules",
    ],
    color: "from-purple-500/20 to-pink-500/20",
    image: "src/assets/DirecTV-home.png",
    url: "https://www.directv.com/",
  },
  {
    title: "PUMA - Federated GraphQL E-Commerce Platform",
    subtitle: "Microservices Architecture & Performance Optimization",
    tech: ["Node.js", "GraphQL", "Apollo Federation", "React.js", "GCP", "Firestore", "PubSub", "OpenTelemetry", "Stellate", "JMeter"],
    highlights: [
      "Migrated monolith → federated subgraphs (20% boost)",
      "Designed LLD for GraphQL Authorization Coprocessor",
      "Implemented Apollo Router + schema publication",
      "Firestore caching and Cloud Run deployments",
      "GKE pipelines with GitHub Actions + Helm",
      "Added observability & distributed tracing with OpenTelemetry",
      "Improved cache strategy with Stellate for performance",
      "Load-tested microservices under heavy scale using JMeter & Vegeta",
    ],
    color: "from-orange-500/20 to-yellow-500/20",
    image: "src/assets/Puma-products.png",
    url: "https://us.puma.com/us/en",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A showcase of enterprise-grade solutions I've architected and developed
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 150}>
              <div className="group glass-card rounded-2xl overflow-hidden hover:neon-border transition-all duration-500 h-full">
                {/* Project Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full 
                               hover:bg-primary hover:text-primary-foreground transition-all duration-300
                               opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="p-5 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 md:mb-6">
                    <div>
                      <h3 className="font-display text-lg md:text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base mt-1">{project.subtitle}</p>
                    </div>
                    {project.url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-primary hover:text-primary-foreground hover:bg-primary self-start"
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 md:px-3 py-1 bg-primary/10 rounded-full text-[10px] md:text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 md:space-y-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;