import React from 'react';
import { Play } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm p-4 md:p-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-2">
            <Play size={24} className="text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            TubeView
          </h1>
        </div>
        <p className="text-sm md:text-base text-gray-600 hidden sm:block">
          Embed YouTube videos in seconds
        </p>
      </div>
    </header>
  );
};

export default Header;