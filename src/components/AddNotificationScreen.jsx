import { useState } from 'react';
import { Bell, CircleAlert, Check, Send } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import UrgencyBadge from './UrgencyBadge';
import { URGENCY } from '../data/notifications';

const KINDS = [
  { id: 'notice', label: 'Notice', icon: Bell },
  { id: 'issue',  label: 'Issue',  icon: CircleAlert },
];

// add notification form — type, title, description and urgency level
export default function AddNotificationScreen({ navigate, onAdd }) {
  const [kind, setKind] = useState('notice');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [urgency, setUrgency] = useState('fyi');
  const [message, setMessage] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!title.trim()) return setMessage('Please add a title.');
    if (!text.trim()) return setMessage('Please add a description.');

    onAdd({
      id: `n-added-${Date.now()}`,
      kind,
      urgency,
      title: title.trim(),
      text: text.trim(),
      from: 'You',
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    });
  };

  return (
    <div className="screen">
      <form onSubmit={submit} className="flex flex-col gap-4 flex-1">
        <ScreenHeader onBack={() => navigate('alerts')} backLabel="Back to Notifications" rightLabel="Notifications" />
        <h1 className="page-title mb-0">Add Notification</h1>

        {/* notice or issue */}
        <div>
          <span className="field-label">Type</span>
          <div className="segmented">
            {KINDS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setKind(id)}
                aria-pressed={kind === id}
                className={`option-btn justify-center ${kind === id ? 'option-btn-selected' : ''}`}
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
            onChange={(event) => { setTitle(event.target.value); setMessage(''); }}
            placeholder={kind === 'issue' ? 'e.g. Fallen branch on North Trail' : 'e.g. Crew meeting moved to 2 PM'}
          />
        </label>

        <label className="block">
          <span className="field-label">Description</span>
          <textarea
            className="field-textarea min-h-[100px]"
            value={text}
            onChange={(event) => { setText(event.target.value); setMessage(''); }}
            placeholder="What should the crew know?"
          />
        </label>

        {/* urgency level — one choice, lowest to highest */}
        <div role="radiogroup" aria-label="Urgency">
          <span className="field-label">Urgency</span>
          <div className="flex flex-col gap-2">
            {URGENCY.map((level) => {
              const selected = urgency === level.id;
              return (
                <button
                  key={level.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setUrgency(level.id)}
                  className={`option-btn h-auto py-3 text-left ${selected ? 'border-2 border-brand bg-brand-tint' : ''}`}
                >
                  <span className="flex flex-col items-start gap-1.5">
                    <UrgencyBadge level={level.id} />
                    <span className="card-text font-normal">{level.hint}</span>
                  </span>
                  {selected && <Check className="w-5 h-5 text-brand shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="screen-footer pt-0">
          {message && <p role="status" className="text-[13px] font-bold text-danger mb-2">{message}</p>}
          <button type="submit" className="btn-primary">
            <Send className="w-5 h-5" />
            Post Notification
          </button>
        </div>
      </form>
    </div>
  );
}
