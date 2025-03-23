const PropertyCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full animate-pulse">
      {/* Image skeleton */}
      <div className="relative w-full h-60 bg-gray-200"></div>

      {/* Content skeleton */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-3">
          {/* Title skeleton */}
          <div className="h-6 bg-gray-200 rounded w-3/5 mb-1"></div>
          {/* Price skeleton */}
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        </div>

        {/* Location skeleton */}
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 rounded-full bg-gray-200 mr-1"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Property features skeleton */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
          {/* Beds */}
          <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-gray-200 mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>

          {/* Baths */}
          <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-gray-200 mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-14"></div>
          </div>

          {/* Size */}
          <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-gray-200 mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
