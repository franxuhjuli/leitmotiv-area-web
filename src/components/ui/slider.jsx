import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["./globo_terraqueo.jpg","./grafiti.jpg", "./gente.jpg", "./gente2.jpg","./insignias.jpg","./punto_vista.jpg",];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000); // 10000 ms = 10 segundos

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={images[currentSlide]}
          alt={`Cultural Image ${currentSlide + 1}`}
          className="w-full h-auto"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white text-teal-800 px-2 py-2 rounded-md"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white text-teal-800 px-2 py-2 rounded-md"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
