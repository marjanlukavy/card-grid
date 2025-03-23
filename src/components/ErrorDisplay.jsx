import { AlertTriangle } from "lucide-react";

const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 text-center">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-6">
        {error.message || "Failed to load properties. Please try again."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;
