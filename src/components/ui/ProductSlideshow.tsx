import { useEffect, useState } from "react";

export const ProductSlideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="object-contain w-full h-full transition-opacity duration-500 ease-in-out"
      />
    </div>
  );
};
