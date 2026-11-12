import { Play, Pause } from 'lucide-react';
import { formatSeconds, parseLength } from '../utils/time';
import usePlayback from '../hooks/usePlayback';

// fixed bar heights (in %) so the waveform looks the same every time
const BARS = Array.from({ length: 36 }, (_, i) => 25 + ((i * 37) % 75));

// demo voice memo player: no real audio, the timer and waveform just simulate playback
export default function AudioPlayer({ length }) {
  const { isPlaying, elapsed, progress, toggle } = usePlayback(parseLength(length));

  return (
    <div className="audio-player">
      <button type="button" onClick={toggle} aria-label={isPlaying ? 'Pause voice memo' : 'Play voice memo'} className="audio-play-btn">
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
      </button>
      <div className="flex-1 min-w-0">
        <div className="waveform" aria-hidden="true">
          {BARS.map((height, i) => (
            <span
              key={i}
              className={`waveform-bar ${i / BARS.length < progress ? 'bg-brand' : 'bg-brand-soft'}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between helper-text mt-1">
          <span>{formatSeconds(elapsed)}</span>
          <span>{length}</span>
        </div>
      </div>
    </div>
  );
}
