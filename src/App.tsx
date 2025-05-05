import React, { useEffect, useState } from 'react';
import VideoEmbedder from './components/VideoEmbedder';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsCard from './components/ProjectsCard';
import SeoContent from './components/SeoContent';
import { extractVideoId } from './utils/youtubeUtils';

function App() {
  const [urlVideoId, setUrlVideoId] = useState<string | null>(null);

  useEffect(() => {
    // Check for YouTube URL in query parameters
    const searchParams = new URLSearchParams(window.location.search);
    const youtubeUrl = searchParams.get('v');
    
    if (youtubeUrl) {
      const videoId = extractVideoId(youtubeUrl);
      if (videoId) {
        setUrlVideoId(videoId);
        return;
      }
    }
    
    // Check for YouTube URL in path
    const path = window.location.pathname;
    if (path.length > 1) { // If path is not just "/"
      // Remove the leading slash and decode the URL
      const pathWithoutSlash = decodeURIComponent(path.substring(1));
      
      // Handle various URL formats (with or without protocol, with or without www)
      let processedPath = pathWithoutSlash;
      
      // Check if it's a YouTube URL (regardless of protocol/www format)
      const youtubeUrlPattern = /(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be).*/i;
      if (youtubeUrlPattern.test(processedPath)) {
        // Ensure the URL has a protocol
        let fullYoutubeUrl = processedPath;
        if (!fullYoutubeUrl.startsWith('http://') && !fullYoutubeUrl.startsWith('https://')) {
          fullYoutubeUrl = `https://${fullYoutubeUrl}`;
        }
        
        // Extract video ID
        const videoId = extractVideoId(fullYoutubeUrl);
        if (videoId) {
          setUrlVideoId(videoId);
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex items-center justify-center">
            <VideoEmbedder initialVideoId={urlVideoId} />
          </div>
          <div className="lg:col-span-4">
            <ProjectsCard />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12">
          <SeoContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;