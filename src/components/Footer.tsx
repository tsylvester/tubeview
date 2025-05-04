import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm p-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TubeView • Drop any YouTube link to embed
        </p>
      </div>
    </footer>
  );
};

export default Footer;