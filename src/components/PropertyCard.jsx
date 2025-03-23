import { useImageSlider } from "../hooks/useImageSlider";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  MapPin,
  BedDouble,
  Bath,
  Square,
} from "lucide-react";

const PropertyCard = ({ property }) => {
  const { generalInfo, images = [] } = property;
  const {
    name,
    province,
    price,
    type,
    rooms,
    bathrooms,
    size = 0,
  } = generalInfo || {};

  const { currentImage, prevImage, nextImage, currentIndex } =
    useImageSlider(images);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full group">
      {/* Image slider */}
      <div className="relative w-full h-60 overflow-hidden">
        {currentImage ? (
          <img
            src={currentImage.medium}
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No image available</p>
          </div>
        )}

        {/* New label */}
        <div className="absolute top-4 left-4">
          <span className="bg-teal-700 text-white px-4 py-1 rounded-full text-sm font-medium">
            NEW BUILDING
          </span>
        </div>

        {/* Favorite button */}
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200">
          <Heart className="text-gray-500 w-5 h-5" />
        </button>

        {/* Slide indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
            {images.map((_, index) => (
              <div
                key={`indicator-${index}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-white w-4" : "bg-white/60"
                }`}
              ></div>
            ))}
          </div>
        )}

        {/* Slider controls - only visible on hover */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prevImage}
              className="ml-2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transform transition-transform duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="mr-2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transform transition-transform duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        )}
      </div>

      {/* Property details */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {name || "Unnamed Property"}
          </h2>
          <p className="text-xl font-bold text-orange-500">
            ${price?.toLocaleString() || "N/A"}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center mb-4 text-gray-600">
          <MapPin className="w-5 h-5 mr-1" />
          <p className="text-sm">{province || "Location unavailable"}</p>
        </div>

        {/* Property features */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
          {/* Beds */}
          <div className="flex items-center text-gray-600">
            <BedDouble className="w-5 h-5 mr-2" />
            <span className="text-sm">{rooms || "0"} Beds</span>
          </div>

          {/* Baths */}
          <div className="flex items-center text-gray-600">
            <Bath className="w-5 h-5 mr-2" />
            <span className="text-sm">{bathrooms || "0"} Baths</span>
          </div>

          {/* Size */}
          <div className="flex items-center text-gray-600">
            <Square className="w-5 h-5 mr-2" />
            <span className="text-sm">{size || "0"} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
