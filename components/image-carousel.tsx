"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: any[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    // Auto-advance the carousel every 5 seconds
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full  mx-auto bg-[#1a1a1a] rounded-2xl shadow-xl shadow-pink-100">
      <div className="overflow-hidden rounded-2xl aspect-[4/3]">
        <img
          src={images[currentIndex]?.src}
          alt={`Celebration moment ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              currentIndex === index ? "bg-[#62002C]" : "bg-white"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
