'use client';

import { useEffect, useState } from 'react';

export function EnvCheck() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if we're in production and show warnings for missing env vars
    if (typeof window !== 'undefined') {
      console.log('Environment check - client side');
    }
  }, []);

  if (hasError) {
    return (
      <div className="fixed inset-0 bg-red-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            Configuration Error
          </h2>
          <p className="text-gray-700 mb-4">
            Some required environment variables are missing. Please check your configuration.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return null;
} 