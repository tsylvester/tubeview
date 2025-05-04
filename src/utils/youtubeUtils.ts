/**
 * Extract YouTube video ID from various YouTube URL formats
 * 
 * Supports:
 * - youtube.com/watch?v=VIDEO_ID
 * - youtu.be/VIDEO_ID
 * - youtube.com/embed/VIDEO_ID
 * - youtube.com/v/VIDEO_ID
 * - youtube.com/shorts/VIDEO_ID
 */
export function extractVideoId(url: string): string | null {
  if (!url) return null;
  
  // Clean the URL (trim whitespace, etc.)
  url = url.trim();
  
  // Various regex patterns for different YouTube URL formats
  const patterns = [
    // Standard youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.+&v=)([^&]+)/i,
    // Short youtu.be/VIDEO_ID
    /youtu\.be\/([^?&#]+)/i,
    // Embed URL youtube.com/embed/VIDEO_ID
    /youtube\.com\/embed\/([^?&#]+)/i,
    // Old format youtube.com/v/VIDEO_ID
    /youtube\.com\/v\/([^?&#]+)/i,
    // YouTube Shorts youtube.com/shorts/VIDEO_ID
    /youtube\.com\/shorts\/([^?&#]+)/i
  ];
  
  // Try each pattern until a match is found
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // No valid YouTube video ID found
  return null;
}

/**
 * Validates if a string is a YouTube URL
 */
export function isValidYouTubeUrl(url: string): boolean {
  return !!extractVideoId(url);
}

/**
 * Creates a YouTube embed URL from a video ID
 */
export function createYouTubeEmbedUrl(videoId: string, options: Record<string, string> = {}): string {
  const baseUrl = 'https://www.youtube.com/embed/';
  
  // Default parameters for better embedding
  const defaultParams = {
    autoplay: '0',
    rel: '0',
    modestbranding: '1',
    enablejsapi: '1',
  };
  
  // Merge default with provided options
  const queryParams = new URLSearchParams({
    ...defaultParams,
    ...options
  }).toString();
  
  return `${baseUrl}${videoId}?${queryParams}`;
}