import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

import awardPhoto from "@/assets/Award Photo.jpg";
import awardEvent from "@/assets/Award Event.jpg";
import rookieManager from "@/assets/Rookie Of the Year - Manager(Dhatchayani) - 2024.png";
import riseRajitha from "@/assets/Rise Insta - Rajitha - 2024.png";
import attClient from "@/assets/AT&T Rise Glory - Client - 2022.png";
import riseSabari2023 from "@/assets/Rise Insta Prod - Manager(Sabari) - 2023.png";
import riseSabari2022 from "@/assets/Rise Insta Rating - Manager(Sabari) - 2022.png";

const awards = [
  {
    title: "Rookie of the Year",
    description: "Recognized for exceptional performance throughout my career at Infosys.",
    images: [awardPhoto, awardEvent, rookieManager],
  },
  {
    title: "Outstanding Contribution: GraphQL Federation",
    description: "Awarded for leading contributions to Puma's GraphQL Federation project using Apollo Federation.",
    images: [riseRajitha],
  },
  {
    title: "Client Appreciation Award - AT&T DirecTV",
    description:
      "Excellence in Client Communication, Exceptional Contribution and Project Delivery.",
    images: [attClient],
  },
  {
    title: "Leadership Excellence",
    description: "Demonstrated leadership qualities and team mentorship.",
    images: [riseSabari2023],
  },
  {
    title: "Performance Badge",
    description: "Consistent high-quality deliverables and contributions.",
    images: [riseSabari2022],
  },
];

const AwardCard = ({
  award,
  index,
}: {
  award: (typeof awards)[0];
  index: number;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % award.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage(
      (prev) => (prev - 1 + award.images.length) % award.images.length
    );
  };

  return (
    <ScrollAnimationWrapper delay={index * 100}>
      <div className="group glass-card rounded-2xl overflow-hidden hover:neon-border transition-all duration-500 h-full">
        {/* Image Carousel */}
        <div className="relative aspect-[4/3] bg-secondary/50 overflow-hidden">
          <img
            src={award.images[currentImage]}
            alt={`${award.title} image`}
            className="w-full h-full object-cover"
          />

          {award.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 rounded-full"
              >
                <ChevronLeft className="w-4 h-4 text-primary" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 rounded-full"
              >
                <ChevronRight className="w-4 h-4 text-primary" />
              </button>
            </>
          )}

          {award.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {award.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${idx === currentImage
                      ? "bg-primary w-4"
                      : "bg-muted-foreground/50 w-2"
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <h3 className="font-semibold text-base md:text-lg mb-2">
            {award.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {award.description}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};

const AwardsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
