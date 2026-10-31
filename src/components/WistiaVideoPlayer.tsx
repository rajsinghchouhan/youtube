import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface WistiaVideoPlayerProps {
  wistiaId: string;
  mp4Url: string;
  posterUrl: string;
  title?: string;
}

export const WistiaVideoPlayer: React.FC<WistiaVideoPlayerProps> = ({
  wistiaId,
  mp4Url,
  posterUrl,
  title = 'Cartoon Demo Video',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  const handlePlayClick = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {
        setUseIframeFallback(true);
      });
    } else {
      vid.pause();
    }
  };

  return (
    <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 group shadow-md">
      {useIframeFallback ? (
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${wistiaId}?videoFoam=true&autoPlay=true`}
          title={title}
          allow="autoplay; fullscreen"
          className="w-full h-full border-0"
        />
      ) : (
        <>
          <video
            ref={videoRef}
            src={mp4Url}
            poster={posterUrl}
            controls={isPlaying}
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={() => setUseIframeFallback(true)}
            className="w-full h-full object-cover cursor-pointer"
          />

          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label={`Play ${title}`}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/25 hover:bg-black/15 transition-colors cursor-pointer focus:outline-none"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500 group-hover:bg-amber-400 text-zinc-950 flex items-center justify-center shadow-xl shadow-black/60 transition-transform duration-150 group-hover:scale-105">
                <Play className="w-7 h-7 fill-current ml-0.5" />
              </div>
            </button>
          )}
        </>
      )}
    </div>
  );
};
