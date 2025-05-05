import React from 'react';

const SeoContent = () => {
  return (
    <section className="py-8 px-4 bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          The Easiest Way to Embed YouTube Videos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              How to Use TubeView
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600 font-bold">1.</span>
                <span>Copy any YouTube video URL (youtube.com, youtu.be, or YouTube Shorts)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600 font-bold">2.</span>
                <span>Paste it into the input field above or simply drag and drop the link</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600 font-bold">3.</span>
                <span>Instantly view the embedded video with clean controls</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600 font-bold">4.</span>
                <span>Share the TubeView link with others for easy viewing</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Direct Link Embedding
            </h3>
            <p className="text-gray-600 mb-3">
              You can now directly embed YouTube videos in two easy ways:
            </p>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-gray-500">Method 1: Using the path (works with any YouTube URL format)</p>
                <code className="block bg-gray-100 p-3 rounded-md text-sm break-all">
                  tubeview.xyz/youtube.com/watch?v=dQw4w9WgXcQ
                </code>
                <code className="block bg-gray-100 p-3 rounded-md text-sm break-all mt-2">
                  tubeview.xyz/https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </code>
              </div>
              <div>
                <p className="text-xs text-gray-500">Method 2: Using a query parameter</p>
                <code className="block bg-gray-100 p-3 rounded-md text-sm break-all">
                  tubeview.xyz/?v=https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </code>
              </div>
            </div>
            <p className="text-gray-600 mt-3">
              Simply append any YouTube URL to our domain or use our query parameter for instant embedding!
            </p>
          </div>
        </div>
        
        <div className="space-y-4 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-700">
            Supported YouTube Link Formats
          </h3>
          <p>
            TubeView supports all major YouTube URL formats, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Standard watch URLs (youtube.com/watch?v=VIDEO_ID)</li>
            <li>Shortened youtu.be links (youtu.be/VIDEO_ID)</li>
            <li>Embed links (youtube.com/embed/VIDEO_ID)</li>
            <li>YouTube Shorts (youtube.com/shorts/VIDEO_ID)</li>
            <li>URLs with or without https:// prefix</li>
            <li>URLs with or without www. subdomain</li>
          </ul>
          <p className="mt-2">
            Our intelligent link parser automatically extracts the video ID from any valid YouTube URL format.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-700 mt-6">
            Why Use TubeView?
          </h3>
          <p>
            TubeView offers a clean, distraction-free way to watch YouTube videos without the 
            clutter of comments, suggested videos, and other distractions. It's perfect for sharing 
            videos in professional contexts, educational settings, or when you simply want to focus 
            on the content.
          </p>
          
          <p>
            With our instant embedding feature, you can preview how a YouTube video will appear when 
            embedded on your website, blog, or presentation. TubeView loads faster than traditional 
            YouTube embeds and provides a smoother viewing experience.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-700 mt-6">
            Privacy and Security
          </h3>
          <p>
            TubeView respects your privacy. We don't track which videos you watch or store any 
            personal data. Our clean interface removes unnecessary tracking elements from standard 
            YouTube embeds while still maintaining all the functionality you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;