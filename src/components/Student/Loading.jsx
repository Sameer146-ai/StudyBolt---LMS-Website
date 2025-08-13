import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-blue-800">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <h1 className="mt-4 text-lg tracking-wider animate-pulse">Loading...</h1>
    </div>
  );
}

export default Loading;
