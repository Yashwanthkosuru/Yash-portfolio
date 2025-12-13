import { Quote } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const appreciations = [
  {
    badge: "Tower Of The Team",
    badgeImage: "src/assets/Tower Of The Team - Rajitha - 2024.png",
    quote: "Your dedication on the PUMA GraphQL project have been invaluable. You're an asset to any team! Your significant contributions to the development activities have been instrumental in helping the team stay on track. Thanks Yashwanth.",
    name: "Rajitha Raj",
    designation: "Senior Technology Architect",
    organization: "Infosys",
  },
  {
    badge: "Rock Star",
    badgeImage: "src/assets/Rock Star - Minnu - 2023.png",
    quote: "Rock Star:- You are a rock star performer. Thank you for all the contributions and keeping the flag flying despite the odds.",
    name: "Minnu Kurian",
    designation: "Technology Lead",
    organization: "Infosys",
  },
  {
    badge: "Tower Of The Team",
    badgeImage: "src/assets/Tower of the Team - Rajitha - 2023.png",
    quote: "Thank you for always being there to support DirecTV team. You are an exceptional team player, highly brilliant and very much dedicated. Your contributions are highly remarkable for the project. Good Work Yashwanth. Way to go..!!",
    name: "Rajitha Raj",
    designation: "Senior Technology Architect",
    organization: "Infosys",
  },
  {
    badge: "Keep Up The Good Work",
    badgeImage: "src/assets/Keep Up the Good Work - Rajitha - 2023.png",
    quote: "Good Work in finishing last minute production production fixes for DirecTV. You are an valuable asset to the team. Keep up the good work Yashwanth.",
    name: "Rajitha Raj",
    designation: "Technical Architect",
    organization: "Infosys",
  },
  {
    badge: "Learning Champ",
    badgeImage: "src/assets/Learning Champ - Rajitha - 2023.png",
    quote: "Your technical contributions and commitment are awesome Yashwanth. You are always open for taking up any new challenge and ensure its completed with at most perfection. Have seen the talent in you while getting each POC done.",
    name: "Rajitha Raj",
    designation: "Technical Architect",
    organization: "Infosys",
  },
  {
    badge: "Rising Star",
    badgeImage: "src/assets/Rising Star - Rajitha - 2022.png",
    quote: "You are truly a Rising Star and destined for greater things. Keep that energy up and wish you all the best. Thanks for helping team with quick code turnaround, with good quality and ensuring all impacts are properly covered.",
    name: "Rajitha Raj",
    designation: "Technical Architect",
    organization: "Infosys",
  },
];

const AppreciationsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            What People <span className="text-gradient">Say</span>
          </h2>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {appreciations.map((item, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 100}>
              <div
                className="group glass-card p-6 md:p-8 rounded-2xl
               hover:neon-border transition-all duration-500
               h-full grid grid-cols-[auto_1fr] gap-4"
              >
                {/* Accent Bar */}
                <div className="w-1 rounded-full bg-gradient-to-b from-primary to-primary/20" />

                {/* Content */}
                <div className="flex flex-col h-full">

                  {/* ===== Award Header ===== */}
                  <div className="mb-6">
                    <div className="flex items-center gap-4">
                      {/* Badge Image with Glow */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/30 blur-md opacity-60" />
                        <img
                          src={item.badgeImage}
                          alt={item.badge}
                          className="relative w-12 h-12 md:w-14 md:h-14 object-contain"
                        />
                      </div>

                      {/* Badge Text */}
                      <div>
                        <span className="block text-primary font-semibold text-sm md:text-base">
                          {item.badge}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Appreciation Badge
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/20 mb-3" />

                  {/* Quote */}
                  <p className="text-foreground text-sm md:text-lg leading-relaxed italic mb-6">
                    “{item.quote}”
                  </p>

                  {/* ===== Footer (Author) ===== */}
                  <div className="mt-auto flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full
                     bg-gradient-to-br from-primary/20 to-primary/10
                     flex items-center justify-center
                     border border-primary/20"
                    >
                      <span className="text-primary font-semibold text-sm md:text-base">
                        {item.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>

                    {/* Author Info */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm md:text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {item.designation}
                      </p>
                      <p className="text-xs text-primary">
                        {item.organization}
                      </p>
                    </div>
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

export default AppreciationsSection;