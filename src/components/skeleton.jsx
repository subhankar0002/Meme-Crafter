import React from "react";

const MemeGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-[300px] h-[400px] bg-slate-300 rounded-2xl overflow-hidden shadow-lg m-auto animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="w-full h-[250px] bg-gray-400"></div>

          {/* Title Skeleton */}
          <div className="px-4 py-3 text-center">
            <div className="w-3/4 h-6 bg-gray-400 rounded-md mx-auto"></div>
          </div>

          {/* Button Skeleton */}
          <div className="px-4 pb-4 flex justify-center">
            <div className="w-24 h-10 bg-gray-400 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeGridSkeleton;
