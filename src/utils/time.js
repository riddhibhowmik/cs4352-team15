// 75 -> "1:15"
export const formatSeconds = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

// "1:15" -> 75
export const parseLength = (length = '0:00') => {
  const [minutes, seconds] = length.split(':').map(Number);
  return minutes * 60 + seconds;
};
