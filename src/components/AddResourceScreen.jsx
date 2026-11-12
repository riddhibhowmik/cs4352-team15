import { useEffect, useState } from 'react';
import { Mic, Square, StickyNote, Plus, RotateCcw } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import AudioPlayer from './AudioPlayer';
import { formatSeconds } from '../utils/time';

const TYPES = [
  { id: 'note',  label: 'Note',       icon: StickyNote },
  { id: 'audio', label: 'Voice memo', icon: Mic },
];
const MAX_RECORDING = 120; // seconds

// add resource form for a zone — note or voice memo (recording is just a demo)
export default function AddResourceScreen({ navigate, zone, onAdd }) {
  const [type, setType] = useState('note');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState('');

  // simulated recording timer
  useEffect(() => {
    if (!recording) return undefined;
    const timer = setInterval(() => setSeconds((prev) => Math.min(prev + 1, MAX_RECORDING)), 1000);
    return () => clearInterval(timer);
  }, [recording]);

  const startRecording = () => {
    setSeconds(0);
    setRecording(true);
    setMessage('');
  };

  const submit = (event) => {
    event.preventDefault();
    if (!title.trim()) return setMessage('Please add a title.');
    if (type === 'note' && !body.trim()) return setMessage('Please write the note.');
    if (type === 'audio' && recording) return setMessage('Stop the recording first.');
    if (type === 'audio' && seconds === 0) return setMessage('Record a voice memo first.');

    onAdd(zone.id, {
      id: `added-${Date.now()}`,
      type,
      title: title.trim(),
      body: type === 'note' ? body.trim() : undefined,
      length: type === 'audio' ? formatSeconds(seconds) : undefined,
      addedBy: 'You',
      isNew: true,
    });
  };

  const zoneShortName = zone.name.split(':')[0];

  return (
    <div className="screen">
      <form onSubmit={submit} className="flex flex-col gap-4 flex-1">
        <ScreenHeader onBack={() => navigate('zoneResources')} backLabel="Back to Zone Resources" rightLabel="Knowledge Base" />
        <div>
          <h1 className="page-title mb-1">Add Resource</h1>
          <p className="section-title">{zone.name}</p>
        </div>

        {/*Resource type */}
        <div>
          <span className="field-label">Type</span>
          <div className="segmented">
            {TYPES.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => { setType(id); setMessage(''); }}
                aria-pressed={type === id}
                className={`option-btn justify-center ${type === id ? 'option-btn-selected' : ''}`}
              >
                <Icon className="w-5 h-5" />{label}
              </button>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="field-label">Title</span>
          <input
            className="field"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={type === 'note' ? 'e.g. Fallen branch near trail' : 'e.g. Update on seedling bed'}
          />
        </label>

        {type === 'note' ? (
          <label className="block">
            <span className="field-label">Note</span>
            <textarea
              className="field-textarea min-h-[120px]"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="What should other crews know about this zone?"
            />
          </label>
        ) : (
          <div>
            <span className="field-label">Voice memo</span>
            {recording ? (
              <button type="button" onClick={() => setRecording(false)} className="btn-danger">
                <Square className="w-5 h-5" />
                Stop recording · {formatSeconds(seconds)}
              </button>
            ) : seconds > 0 ? (
              <div className="space-y-2">
                {/* key resets the preview player when a new memo is recorded */}
                <AudioPlayer key={seconds} length={formatSeconds(seconds)} />
                <button type="button" onClick={startRecording} className="btn-secondary min-h-[44px] text-[14px]">
                  <RotateCcw className="w-4 h-4" />
                  Record again
                </button>
              </div>
            ) : (
              <button type="button" onClick={startRecording} className="tile-btn w-full flex-none">
                <Mic className="w-5 h-5" />
                Tap to record
              </button>
            )}
            <p className="helper-text mt-2">Demo only: no microphone is used and no audio is saved.</p>
          </div>
        )}

        <div className="screen-footer pt-0">
          {message && <p role="status" className="text-[13px] font-bold text-danger mb-2">{message}</p>}
          <button type="submit" className="btn-primary">
            <Plus className="w-5 h-5" />
            Add to {zoneShortName}
          </button>
        </div>
      </form>
    </div>
  );
}
