"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero/hero-1.jpg", alt: "Workspace ergonomique SamaDesk" },
  { src: "/images/hero/hero-2.jpg", alt: "Bureau standing desk SamaDesk" },
  { src: "/images/hero/hero-3.jpg", alt: "Setup professionnel SamaDesk" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </>
  );
}

