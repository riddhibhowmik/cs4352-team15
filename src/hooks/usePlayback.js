import { useEffect, useState } from 'react';

// fake playback for demo media 
export default function usePlayback(totalSeconds) {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const finished = elapsed >= totalSeconds;
  const isPlaying = playing && !finished;

  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = setInterval(() => setElapsed((prev) => Math.min(prev + 1, totalSeconds)), 1000);
    return () => clearInterval(timer);
  }, [isPlaying, totalSeconds]);

  const toggle = () => {
    if (isPlaying) {
      setPlaying(false);
      return;
    }
    if (finished) setElapsed(0); // Start over after reaching the end
    setPlaying(true);
  };

  return { isPlaying, elapsed, progress: totalSeconds ? elapsed / totalSeconds : 0, toggle };
}
