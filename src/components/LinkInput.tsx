import React, { useState, useRef, DragEvent, ClipboardEvent } from 'react';
import { Link, Import } from 'lucide-react';

interface LinkInputProps {
  onValidLink: (link: string) => void;
  onError: (message: string | null) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ onValidLink, onError }) => {
  const [link, setLink] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedText = e.dataTransfer.getData('text/plain');
    if (droppedText) {
      processLink(droppedText);
    } else {
      onError('No link was detected. Try copying the YouTube URL first.');
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData('text/plain');
    if (pastedText) {
      e.preventDefault();
      processLink(pastedText);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processLink(link);
  };

  const processLink = (inputLink: string) => {
    if (isYouTubeLink(inputLink)) {
      setLink(inputLink);
      onValidLink(inputLink);
    } else {
      setLink(inputLink);
      onError('Please enter a valid YouTube link');
    }
  };

  const isYouTubeLink = (url: string): boolean => {
    // Simple validation - we'll do more thorough validation in the utils
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <div
      className={`relative mb-6 ${
        isDragging ? 'ring-2 ring-indigo-500' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Link size={20} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={link}
          onChange={handleChange}
          onPaste={handlePaste}
          onFocus={handleFocus}
          placeholder="Paste or drop YouTube link here..."
          className={`w-full pl-12 pr-20 py-4 border ${
            isDragging
              ? 'border-indigo-500 bg-indigo-50'
              : 'border-gray-200 focus:border-indigo-500'
          } rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-200`}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
        >
          <Import size={16} />
          <span className="hidden sm:inline">Embed</span>
        </button>
      </form>

      {isDragging && (
        <div className="absolute inset-0 bg-indigo-50/90 border-2 border-dashed border-indigo-500 rounded-lg flex items-center justify-center z-10">
          <p className="text-indigo-700 font-medium">Drop YouTube link here</p>
        </div>
      )}
    </div>
  );
};

export default LinkInput;