import React, { useState } from 'react';
import LinkInput from './LinkInput';
import VideoPlayer from './VideoPlayer';
import { extractVideoId } from '../utils/youtubeUtils';

const VideoEmbedder = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleValidLink = (link: string) => {
    const id = extractVideoId(link);
    if (id) {
      setVideoId(id);
      setError(null);
    } else {
      setError('Invalid YouTube link. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Embed YouTube Videos Instantly
        </h2>
        <p className="text-gray-600 mb-6">
          Drag & drop or paste any YouTube link to preview the video
        </p>

        <LinkInput onValidLink={handleValidLink} onError={setError} />

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 animate-fade-in">
            {error}
          </div>
        )}

        <VideoPlayer videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoEmbedder;