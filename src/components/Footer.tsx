import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm p-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TubeView • Use as tubeview.xyz/youtube.com/watch?v=videoId or tubeview.xyz/?v=youtube-link
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Works with any YouTube URL format: http://, https://, www., or plain domain
        </p>
      </div>
    </footer>
  );
};

export default Footer;