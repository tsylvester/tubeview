import React from 'react';

interface VideoPlayerProps {
  videoId: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  if (!videoId) {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 p-4 rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M19 9l-7 4-7-4V6l7 4 7-4v3z" />
            <path d="M19 15v3l-7 4-7-4v-3" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Video Selected</h3>
        <p className="text-gray-500 max-w-md">
          Drop a YouTube link above or paste the URL to see the video appear here
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="animate-fade-in rounded-lg overflow-hidden shadow-lg relative z-10 aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;