import { useState, useEffect } from "react";

const Loader = ({ 
  type = "default", 
  message = "Loading...", 
  showProgress = false,
  duration = 3000 
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, duration / 100);

      return () => clearInterval(interval);
    }
  }, [showProgress, duration]);

  // Default loading with animated soup bowl
  const DefaultLoader = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
      <div className="text-center">
        {/* Animated Soup Bowl */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Bowl */}
              <ellipse cx="50" cy="75" rx="35" ry="15" fill="#ef4444" className="opacity-20" />
              <path 
                d="M15 60 Q15 75 50 75 Q85 75 85 60" 
                fill="#ef4444" 
                className="animate-pulse"
              />
              
              {/* Steam Animation */}
              <g className="animate-bounce">
                <path d="M35 50 Q35 40 40 45 Q40 35 45 40" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M50 45 Q50 35 55 40 Q55 30 60 35" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.8" />
                <path d="M65 50 Q65 40 70 45 Q70 35 75 40" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-red-600 mb-4 animate-pulse">
          Soupreme
        </h1>

        {/* Loading Message */}
        <p className="text-gray-600 text-lg mb-6">{message}</p>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );

  // Minimal spinner loader
  const SpinnerLoader = () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-red-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );

  // Progress bar loader
  const ProgressLoader = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            {/* Animated Logo */}
            <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-red-600 mb-2">Soupreme</h2>
          <p className="text-gray-600 mb-8">{message}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-red-100 rounded-full h-3 mb-4 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-30 animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500">{progress}% Complete</p>
      </div>
    </div>
  );

  // Skeleton loader for content
  const SkeletonLoader = () => (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Skeleton */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="animate-pulse">
            <div className="h-8 bg-red-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6">
              <div className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 bg-red-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Pulsing loader with brand colors
  const PulseLoader = () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Pulsing Circles */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-2 bg-red-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-4 bg-red-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-red-600 mb-2">Soupreme</h2>
        <p className="text-gray-600 text-lg">{message}</p>
      </div>
    </div>
  );

  // Render based on type
  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return <SpinnerLoader />;
      case 'progress':
        return <ProgressLoader />;
      case 'skeleton':
        return <SkeletonLoader />;
      case 'pulse':
        return <PulseLoader />;
      default:
        return <DefaultLoader />;
    }
  };

  return renderLoader();
};

// Demo component showing all loader types
const LoadingDemo = () => {
  const [currentLoader, setCurrentLoader] = useState('default');
  const loaderTypes = [
    { type: 'default', label: 'Default Bowl Animation', message: 'Preparing your soup...' },
    { type: 'spinner', label: 'Minimal Spinner', message: 'Loading...' },
    { type: 'progress', label: 'Progress Bar', message: 'Setting up your account...', showProgress: true },
    { type: 'skeleton', label: 'Skeleton Screen', message: 'Loading content...' },
    { type: 'pulse', label: 'Pulsing Brand', message: 'Almost ready...' }
  ];

  const current = loaderTypes.find(loader => loader.type === currentLoader);

  return (
    <div className="relative">
      {/* Loader Type Selector */}
      <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold mb-3 text-red-600">Loading Types:</h3>
        <div className="space-y-2">
          {loaderTypes.map(loader => (
            <button
              key={loader.type}
              onClick={() => setCurrentLoader(loader.type)}
              className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                currentLoader === loader.type 
                  ? 'bg-red-100 text-red-700 font-medium' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {loader.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current Loader */}
      <Loader 
        type={currentLoader}
        message={current?.message}
        showProgress={current?.showProgress}
        duration={3000}
      />
    </div>
  );
};

export default LoadingDemo;