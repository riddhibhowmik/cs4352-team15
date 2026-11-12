import { Play, Pause, Video } from 'lucide-react';
import { formatSeconds, parseLength } from '../utils/time';
import usePlayback from '../hooks/usePlayback';

// plays an uploaded video (video.src), or shows a demo player for sample entries with no file
export default function VideoPlayer({ video, title }) {
  if (video.src) {
    return <video src={video.src} controls className="w-full rounded-[20px] bg-black aspect-video" aria-label={`${title} video`} />;
  }
  return <DemoVideo length={video.length} title={title} />;
}

// fake player: play/pause and a progress bar that fills over the video length
function DemoVideo({ length, title }) {
  const { isPlaying, elapsed, progress, toggle } = usePlayback(parseLength(length));

  return (
    <div className="video-player">
      <div className="absolute top-3 left-4 right-4 flex items-center gap-2 text-[13px] font-bold">
        <Video className="w-4 h-4 shrink-0" />
        <span className="truncate">{title}</span>
      </div>
      <button type="button" onClick={toggle} aria-label={isPlaying ? 'Pause video' : 'Play video'} className="video-play-btn">
        {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
      </button>
      <div className="absolute bottom-3 left-4 right-4">
        <div className="h-1.5 rounded-full bg-brand-mid overflow-hidden">
          <div className="h-full bg-white transition-all duration-300" style={{ width: `${progress * 100}%` }} />
        </div>
        <div className="flex justify-between text-[12px] mt-1">
          <span>{formatSeconds(elapsed)}</span>
          <span>{length}</span>
        </div>
      </div>
    </div>
  );
}
