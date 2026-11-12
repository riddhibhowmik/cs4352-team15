import { useState, useRef } from 'react';
import { X, Check, Wrench, Camera } from 'lucide-react';

const ISSUE_TYPES = [
  { id: 'weather',   label: 'Weather / Heavy Rain' },
  { id: 'equipment', label: 'Equipment Breakdown' },
  { id: 'access',    label: 'Access Blocked / Downed Tree' },
];

// issue reporting bottom-sheet when task has a blocker
export default function BlockerScreen({ navigate, returnScreen }) {
  // track which issue type is selected — default to none
  const [selected, setSelected]   = useState(null);
  // track the name of any attached photo file
  const [photoName, setPhotoName] = useState(null);
  // ref to the hidden file input element
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoName(file.name);
  };

  return (
    <div className="flex-1 flex flex-col justify-end bg-black/50 text-ink">
      <div className="bg-surface rounded-t-[32px] px-5 pt-4 pb-28 shadow-2xl">
        <div className="w-12 h-1.5 bg-line rounded-full mx-auto mb-4"></div>

        <div className="flex items-center justify-between mb-1">
          <h2 className="section-title">Report Task Blocker</h2>
          {/* X closes the sheet and returns to the previous screen */}
          <button onClick={() => navigate(returnScreen)} aria-label="Close" className="back-btn">
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="field-label mt-2">Select the issue type:</p>

        {/* single-select issue type buttons */}
        <div className="space-y-2 mb-4">
          {ISSUE_TYPES.map(({ id, label }) => {
            const isSelected = selected === id;
            return (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`option-btn ${isSelected ? 'option-btn-selected' : ''}`}
              >
                <span>{label}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? 'border-white' : 'border-ink-muted'
                }`}>
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* optional note input */}
        <label className="block mb-4">
          <span className="field-label">Brief Note (Optional)</span>
          <input type="text" placeholder="e.g. standing water near trail" className="field font-normal" />
        </label>

        {/* hidden file input — accepts images, prefers camera on mobile */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handlePhotoChange}
        />

        {/* visible photo attach button — triggers the hidden input */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className={`tile-btn w-full flex-none h-[54px] border-dashed mb-4 ${photoName ? 'border-brand bg-brand-tint' : 'border-ink-muted'}`}
        >
          <Camera className="w-5 h-5" />
          <span className="truncate max-w-[200px]">{photoName ? photoName : 'Attach Photo of Obstacle'}</span>
          {photoName && <Check className="w-4 h-4 stroke-[3] shrink-0" />}
        </button>

        {/* submit — enabled only when an issue type is selected */}
        <button onClick={() => selected && navigate(returnScreen)} disabled={!selected} className="btn-primary">
          <Wrench className="w-5 h-5" />
          <span>Submit & Notify Dispatch</span>
        </button>
      </div>
    </div>
  );
}
