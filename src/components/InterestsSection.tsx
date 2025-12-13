import { BookOpen, ChefHat, Music, Tv, Wrench } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const interests = [
  { name: "Reading", icon: BookOpen },
  { name: "Cooking", icon: ChefHat },
  { name: "Music", icon: Music },
  { name: "Anime & TV", icon: Tv },
  { name: "Side Projects", icon: Wrench },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Beyond Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Interests & <span className="text-gradient">Hobbies</span>
          </h2>
        </ScrollAnimationWrapper>

        {/* Unified Grid Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <ScrollAnimationWrapper key={interest.name} delay={index * 80}>
                  <div className="glass-card p-5 md:p-6 rounded-2xl group hover:neon-border transition-all duration-500 hover:scale-105 cursor-pointer">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(195_100%_50%/0.3)]">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {interest.name}
                      </span>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;