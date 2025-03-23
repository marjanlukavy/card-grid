import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
