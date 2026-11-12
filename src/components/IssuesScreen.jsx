import { useEffect, useRef, useState } from 'react';
import { Camera, ChevronDown, Mic, Send, Square } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// add Issue page
export default function IssuesScreen({ navigate, onDispatch }) {
  const [title, setTitle] = useState('Invasive Plant in Quad 4');
  const [location, setLocation] = useState('North Park - Quad 4');
  const [urgency, setUrgency] = useState('Urgent!');
  const [team, setTeam] = useState('Grounds Crew');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [recording, setRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [message, setMessage] = useState('');
  const photoInputRef = useRef(null);
  const recorderRef = useRef(null);
  const audioStreamRef = useRef(null);

  useEffect(() => {
    return () => {
      if (recorderRef.current?.state === 'recording') recorderRef.current.stop();
      audioStreamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const choosePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { setPhoto(String(reader.result)); setMessage(''); };
    reader.onerror = () => setMessage('Unable to read the selected photo.');
    reader.readAsDataURL(file);
  };

  const toggleRecording = async () => {
    if (recording) {
      recorderRef.current?.stop();
      audioStreamRef.current?.getTracks().forEach((track) => track.stop());
      setRecording(false);
      setHasRecording(true);
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setMessage('Audio recording is not supported by this browser.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.start();
      audioStreamRef.current = stream;
      recorderRef.current = recorder;
      setHasRecording(false);
      setRecording(true);
      setMessage('');
    } catch {
      setMessage('Microphone permission is required to record a voice note.');
    }
  };

  const submitIssue = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      setMessage('Please enter an issue title.');
      return;
    }
    if (recording) {
      setMessage('Please stop the voice recording before dispatching.');
      return;
    }
    // save the submitted fields in App state and show them under alerts.
    onDispatch({ title: title.trim(), location, urgency, team, photo, description: description.trim(), hasRecording });
  };

  const dropdown = (label, value, onChange, options, red = false) => (
    <label className="block">
      <span className="field-label">{label}</span>
      <span className="relative block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`field appearance-none pr-10 ${red ? 'text-danger' : ''}`}
        >
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink" />
      </span>
    </label>
  );

  return (
    <div className="screen">
      <form onSubmit={submitIssue} className="flex flex-col gap-3">
        <ScreenHeader onBack={() => navigate('schedule')} backLabel="Back to Tasks" />

        <h1 className="page-title mb-0">Add Issue</h1>

        <label className="block">
          <span className="field-label">Title</span>
          <input
            className="field"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            aria-label="Issue title"
          />
        </label>

        <div>
          {dropdown('GPS location', location, setLocation,
            ['North Park - Quad 4', 'North Park - Zone 2', 'East Trail', 'South Park'])}
          <p className="status-text mt-2">Current location captured</p>
        </div>

        {dropdown('Urgency', urgency, setUrgency, ['Urgent!', 'Routine'], true)}
        {dropdown('Team assign', team, setTeam,
          ['Grounds Crew', 'Irrigation Crew', 'Tree Crew', 'Maintenance Crew'])}

        <div>
          <span className="field-label">Photo &amp; voice note</span>
          <div className="flex gap-2">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              ref={photoInputRef}
              onChange={choosePhoto}
              className="hidden"
              aria-label="Attach issue photo"
            />
            <button
              type="button"
              aria-label="Add photo"
              onClick={() => photoInputRef.current?.click()}
              className="tile-btn"
            >
              <Camera className="w-5 h-5" strokeWidth={2.6} />
              <span>{photo ? 'Photo Added' : 'Add Photo'}</span>
            </button>
            <button
              type="button"
              onClick={toggleRecording}
              className={`tile-btn ${recording ? 'bg-danger-tint text-danger border-danger' : ''}`}
            >
              {recording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              {recording ? 'Stop' : hasRecording ? 'Recorded' : 'Record'}
            </button>
          </div>
          {photo && <div className="flex items-center gap-2 mt-2"><img src={photo} alt="Your attached issue" className="h-12 w-16 rounded-lg object-cover" /><button type="button" onClick={() => { setPhoto(null); if (photoInputRef.current) photoInputRef.current.value = ''; }} className="text-xs underline">Remove photo</button></div>}
        </div>

        <label className="block">
          <span className="field-label">Description (optional)</span>
          <textarea className="field-textarea" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Describe the issue or any safety notes" />
        </label>

        <button type="submit" className="btn-primary mt-0.5">
          <Send className="w-5 h-5" />
          Submit &amp; Dispatch
        </button>
        {message && <p role="status" className="status-text">{message}</p>}
      </form>
    </div>
  );
}
