import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const languages = [
  { name: "English", level: "Professional", proficiency: 90 },
  { name: "Hindi", level: "Proficient", proficiency: 75 },
  { name: "Telugu", level: "Native", proficiency: 100 },
  { name: "Kannada", level: "Beginner", proficiency: 30 },
];

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Communication
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Languages I <span className="text-gradient">Speak</span>
          </h2>
        </ScrollAnimationWrapper>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {languages.map((lang, index) => (
              <ScrollAnimationWrapper key={lang.name} delay={index * 100}>
                <div className="glass-card p-5 md:p-6 rounded-2xl group hover:neon-border transition-all duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg">{lang.name}</h3>
                    <span className="text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${lang.proficiency}%`,
                        background: 'var(--gradient-neon)'
                      }}
                    />
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;