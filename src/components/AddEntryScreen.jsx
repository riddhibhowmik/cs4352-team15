import { useRef, useState } from 'react';
import { ChevronDown, Plus, Upload, X, Send } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import { TOPICS } from '../data/knowledgeBase';
import { formatSeconds } from '../utils/time';

// form to share a new knowledge base entry: title, topic, optional video and numbered steps
export default function AddEntryScreen({ navigate, returnScreen, defaultTopicId, onAdd }) {
  const [topicId, setTopicId] = useState(defaultTopicId || TOPICS[0].id);
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null); // { src, name, length }
  const [steps, setSteps] = useState([{ id: 1, text: '' }]);
  const [message, setMessage] = useState('');
  const videoInputRef = useRef(null);

  // ----- video (optional) -----
  const chooseVideo = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setVideo({ src: URL.createObjectURL(file), name: file.name, length: null });
    setMessage('');
  };

  const removeVideo = () => {
    if (video) URL.revokeObjectURL(video.src);
    setVideo(null);
    if (videoInputRef.current) videoInputRef.current.value = '';
  };

  // read the real length once the browser loads the file
  const saveVideoLength = (event) => {
    const seconds = Math.round(event.currentTarget.duration);
    if (Number.isFinite(seconds)) setVideo((prev) => prev && { ...prev, length: formatSeconds(seconds) });
  };

  // ----- steps -----
  const updateStep = (id, text) => setSteps((prev) => prev.map((step) => (step.id === id ? { ...step, text } : step)));
  const addStep = () => setSteps((prev) => [...prev, { id: Math.max(...prev.map((step) => step.id)) + 1, text: '' }]);
  const removeStep = (id) => setSteps((prev) => prev.filter((step) => step.id !== id));

  const submit = (event) => {
    event.preventDefault();
    const filledSteps = steps.map((step) => step.text.trim()).filter(Boolean);
    if (!title.trim()) return setMessage('Please add a title.');
    if (filledSteps.length === 0) return setMessage('Please add at least one step.');

    onAdd({
      id: `kb-added-${Date.now()}`,
      topicId,
      title: title.trim(),
      video: video ? { src: video.src, length: video.length } : null,
      steps: filledSteps,
      addedBy: 'You',
      isNew: true,
    });
  };

  return (
    <div className="screen">
      <form onSubmit={submit} className="flex flex-col gap-4 flex-1">
        <ScreenHeader onBack={() => navigate(returnScreen)} backLabel="Go back" rightLabel="Knowledge Base" />
        <h1 className="page-title mb-0">Add Entry</h1>

        <label className="block">
          <span className="field-label">Title</span>
          <input className="field" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g. Mulching new plantings" />
        </label>

        <label className="block">
          <span className="field-label">Topic</span>
          <span className="relative block">
            <select value={topicId} onChange={(event) => setTopicId(event.target.value)} className="field appearance-none pr-10">
              {TOPICS.map((topic) => <option key={topic.id} value={topic.id}>{topic.name}</option>)}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink" />
          </span>
        </label>

        {/* optional video */}
        <div>
          <span className="field-label">Video (optional)</span>
          <input ref={videoInputRef} type="file" accept="video/*" onChange={chooseVideo} className="hidden" aria-label="Choose a video" />
          {video ? (
            <div className="space-y-2">
              <video src={video.src} controls onLoadedMetadata={saveVideoLength} className="w-full rounded-[20px] bg-black aspect-video" />
              <div className="flex items-center justify-between gap-2">
                <span className="helper-text truncate">{video.name}{video.length ? ` - ${video.length}` : ''}</span>
                <button type="button" onClick={removeVideo} className="text-[13px] font-bold text-danger underline shrink-0">Remove video</button>
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => videoInputRef.current?.click()} className="tile-btn w-full flex-none border-dashed">
              <Upload className="w-5 h-5" />
              Upload a video
            </button>
          )}
        </div>

        {/* numbered steps */}
        <div>
          <span className="field-label">Steps</span>
          <ol className="space-y-2">
            {steps.map((step, index) => (
              <li key={step.id} className="step-item items-start">
                <span className="step-number mt-3">{index + 1}</span>
                <textarea
                  value={step.text}
                  onChange={(event) => updateStep(step.id, event.target.value)}
                  placeholder={index === 0 ? 'Describe the first step' : 'Describe this step'}
                  aria-label={`Step ${index + 1}`}
                  className="field-textarea min-h-[56px] flex-1"
                />
                {steps.length > 1 && (
                  <button type="button" onClick={() => removeStep(step.id)} aria-label={`Remove step ${index + 1}`} className="back-btn w-9 h-9 mt-2">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </li>
            ))}
          </ol>
          <button type="button" onClick={addStep} className="btn-secondary min-h-[44px] text-[14px] mt-3">
            <Plus className="w-4 h-4" />
            Add step
          </button>
        </div>

        <div className="screen-footer pt-0">
          {message && <p role="status" className="text-[13px] font-bold text-danger mb-2">{message}</p>}
          <button type="submit" className="btn-primary">
            <Send className="w-5 h-5" />
            Publish Entry
          </button>
        </div>
      </form>
    </div>
  );
}
