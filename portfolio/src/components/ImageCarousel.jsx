import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ImageCarousel = ({ images, urlFor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-3xl min-w-min flex flex-col items-center">
      <div className="w-full overflow-hidden">
        <motion.div
          className="inline-flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={urlFor(image)}
              alt={`Image ${index + 1}`}
              className="w-full object-cover shadow-md"
              onClick={() => openModal(currentIndex)}
            />
          ))}
        </motion.div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <button onClick={prevImage} className="p-4">
          ❮
        </button>

        <div className="flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-secondary"
              }`}
            ></span>
          ))}
        </div>
        <button onClick={nextImage} className="text-black  p-4">
          ❯
        </button>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={urlFor(images[currentIndex])}
                alt="Selected"
                className="w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  urlFor: PropTypes.func.isRequired,
};

export default ImageCarousel;
