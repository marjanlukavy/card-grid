import { useState } from "react";

export const useImageSlider = (images = []) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  const currentImage = images[currentIndex] || null;

  return {
    currentIndex,
    currentImage,
    nextImage,
    prevImage,
    goToImage,
    totalImages: images.length,
  };
};
