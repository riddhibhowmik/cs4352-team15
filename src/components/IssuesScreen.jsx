import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Camera, ChevronDown, Mic, Plus, Send, Square } from 'lucide-react';

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

  const fieldClass = 'w-full h-[54px] rounded-[14px] border border-[#dce6de] bg-white px-3 text-[14px] font-bold text-[#202a3a] outline-none focus:border-[#577b50] focus:ring-1 focus:ring-[#577b50]';

  const dropdown = (label, value, onChange, options, red = false) => (
    <label className="block">
      <span className="block mb-2 text-[13px] font-extrabold text-[#202a3a]">{label}</span>
      <span className="relative block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClass} appearance-none pr-10 ${red ? 'text-[#c93449]' : ''}`}
        >
          {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#202a3a]" />
      </span>
    </label>
  );

  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white px-5 pt-12 pb-20 text-[#202a3a]">
      <form onSubmit={submitIssue} className="flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <button
            type="button"
            onClick={() => navigate('home')}
            aria-label="Back to Home"
            className="w-10 h-10 rounded-[14px] border border-[#dce6de] flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={1.6} />
          </button>
          <span className="text-[12px] font-extrabold tracking-wide">PARKS CREW</span>
        </div>

        <h1 className="text-[34px] leading-tight font-black mt-1 mb-0">Add Issue</h1>

        <label className="block">
          <span className="block mb-2 text-[13px] font-extrabold">Title</span>
          <input
            className={fieldClass}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            aria-label="Issue title"
          />
        </label>

        <div>
          {dropdown('GPS location', location, setLocation,
            ['North Park - Quad 4', 'North Park - Zone 2', 'East Trail', 'South Park'])}
          <p className="text-[12px] font-extrabold text-[#193c27] mt-2">Current location captured</p>
        </div>

        {dropdown('Urgency', urgency, setUrgency, ['Urgent!', 'Routine'], true)}
        {dropdown('Team assign', team, setTeam,
          ['Grounds Crew', 'Irrigation Crew', 'Tree Crew', 'Maintenance Crew'])}

        <div>
          <span className="block mb-2 text-[13px] font-extrabold">Photo &amp; voice note</span>
          <div className="flex gap-2 h-[66px]">
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
              className="min-w-0 flex-1 h-full rounded-xl border border-[#dce6de] flex items-center justify-center gap-2 text-[#193c27] font-extrabold text-[14px]"
            >
              <Camera className="w-5 h-5" strokeWidth={2.6} />
              <span>{photo ? 'Photo Added' : 'Add Photo'}</span>
            </button>
            <button
              type="button"
              onClick={toggleRecording}
              className={`min-w-0 flex-1 h-full rounded-xl border border-[#dce6de] flex items-center justify-center gap-2 font-extrabold text-[14px] ${recording ? 'bg-red-50 text-[#c93449]' : 'text-[#202a3a]'}`}
            >
              {recording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5 text-[#193c27]" />}
              {recording ? 'Stop' : hasRecording ? 'Recorded' : 'Record'}
            </button>
          </div>
          {photo && <div className="flex items-center gap-2 mt-2"><img src={photo} alt="Your attached issue" className="h-12 w-16 rounded-lg object-cover" /><button type="button" onClick={() => { setPhoto(null); if (photoInputRef.current) photoInputRef.current.value = ''; }} className="text-xs underline">Remove photo</button></div>}
        </div>

        <label className="block">
          <span className="block mb-2 text-[13px] font-extrabold">Description (optional)</span>
          <textarea className="w-full min-h-[68px] rounded-[14px] border border-[#dce6de] bg-white p-3 text-[13px] text-[#202a3a] outline-none focus:border-[#577b50]" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Describe the issue or any safety notes" />
        </label>

        <button
          type="submit"
          className="h-[53px] rounded-[14px] bg-[#12371d] text-white font-extrabold text-[17px] flex items-center justify-center gap-3 mt-0.5"
        >
          <Send className="w-5 h-5" />
          Submit &amp; Dispatch
        </button>
        {message && <p role="status" className="text-[12px] font-semibold text-[#193c27]">{message}</p>}
      </form>
    </div>
  );
}
