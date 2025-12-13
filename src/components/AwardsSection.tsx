import { useState } from "react";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const awards = [
  {
    title: "Rookie of the Year",
    description: "Recognized for exceptional performance through out my career at Infosys.",
    images: ["src/assets/Award Photo.jpg", "src/assets/Award Event.jpg", "src/assets/Rookie Of the Year - Manager(Dhatchayani) - 2024.png"],
  },
  {
    title: "Outstanding Contribution: GraphQL Federation",
    description: "Awarded for leading contributions to Puma's GraphQL Federation project using Apollo Federation, GraphQL, NX tools, and TypeScript.",
    images: ["src/assets/Rise Insta - Rajitha - 2024.png"],
  },
  {
    title: "Client Appreciation Award - AT&T DirecTV",
    description: "Excellence in Client Communication, Exceptional Contribution and Project Delivery Excellence.",
    images: ["src/assets/AT&T Rise Glory - Client - 2022.png"],
  },
  {
    title: "Leadership Excellence",
    description: "Demonstrated leadership qualities and team mentorship",
    images: ["/src/assets/Rise Insta Prod - Manager(Sabari) - 2023.png"],
  },
  {
    title: "Performance Badge",
    description: "Consistent high-quality deliverables and contributions",
    images: ["src/assets/Rise Insta Rating - Manager(Sabari) - 2022.png"],
  },
];

const AwardCard = ({ award, index }: { award: typeof awards[0]; index: number }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % award.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + award.images.length) % award.images.length);
  };

  return (
    <ScrollAnimationWrapper delay={index * 100}>
      <div className="group glass-card rounded-2xl overflow-hidden hover:neon-border transition-all duration-500 hover:-translate-y-2 h-full">
        {/* Image Carousel */}
        <div className="relative aspect-[4/3] bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={award.images[currentImage]}
              alt={`${award.title} - Image ${currentImage + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80">
              <Image className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/50 mb-2" />
              <span className="text-muted-foreground/50 text-xs md:text-sm">Award Image</span>
            </div> */}
          </div>

          {/* Carousel Controls */}
          {award.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronLeft className="w-4 h-4 text-primary" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronRight className="w-4 h-4 text-primary" />
              </button>
            </>
          )}

          {/* Indicators */}
          {award.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {award.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImage
                      ? "bg-primary w-4"
                      : "bg-muted-foreground/50 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <h3 className="font-display font-semibold text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
            {award.title}
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">
            {award.description}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};

const AwardsSection = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const nextSlide = () => {
    setFeaturedIndex((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setFeaturedIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <section id="awards" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Recognition
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
        </ScrollAnimationWrapper>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} index={index} />
          ))}
        </div>

        {/* Featured Award Slider */}
        <ScrollAnimationWrapper delay={600} className="mt-8 md:mt-12 max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl neon-border overflow-hidden">
            <div className="flex items-center">
              <button
                onClick={prevSlide}
                className="p-2 md:p-4 hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </button>

              <div className="flex-1 flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6">
                {/* Featured Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl bg-secondary/50 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Image className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground/50" />
                  </div>
                </div>

                {/* Featured Content */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-display text-lg md:text-2xl font-bold mb-2">
                    {awards[featuredIndex].title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {awards[featuredIndex].description}
                  </p>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="p-2 md:p-4 hover:bg-primary/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 pb-4">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setFeaturedIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === featuredIndex
                      ? "bg-primary w-6"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default AwardsSection;