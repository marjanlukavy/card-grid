import { useState, useEffect, useRef, useCallback } from "react";
import { fetchProperties } from "../api/propertiesApi";
import PropertyCard from "./PropertyCard";
import PropertyCardSkeleton from "./PropertyCardSkeleton";
import Pagination from "./Pagination";
import ErrorDisplay from "./ErrorDisplay";

const PropertyGrid = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 6;
  const gridRef = useRef(null);

  const totalPages = Math.max(
    Math.ceil(totalCount / itemsPerPage),
    hasMore ? currentPage + 2 : currentPage + 1
  );

  const loadProperties = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchProperties(currentPage, itemsPerPage);

      if (!data || !data.projects || !Array.isArray(data.projects)) {
        throw new Error("Invalid data received from server");
      }

      setProperties(data.projects);
      setTotalCount(data.totalCount);
      setHasMore(data.hasMore);
    } catch (err) {
      setError(err);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const renderSkeletons = () => {
    return Array(itemsPerPage)
      .fill(0)
      .map((_, index) => <PropertyCardSkeleton key={`skeleton-${index}`} />);
  };

  const renderPropertyCards = () => {
    return properties.map((property) => (
      <PropertyCard key={property._id} property={property} />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8" ref={gridRef}>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Featured Properties
      </h1>

      {error ? (
        <ErrorDisplay error={error} onRetry={loadProperties} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? renderSkeletons() : renderPropertyCards()}
          </div>

          {!loading && properties.length === 0 && (
            <div className="w-full py-16 text-center text-gray-600">
              <p className="text-xl">No properties found.</p>
            </div>
          )}

          {(properties.length > 0 || hasMore) && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              goToPage={goToPage}
              nextPage={nextPage}
              prevPage={prevPage}
              loading={loading}
            />
          )}

          <div className="mt-2 text-center text-xs text-gray-400">
            Showing {properties.length} items on page {currentPage + 1}
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyGrid;
