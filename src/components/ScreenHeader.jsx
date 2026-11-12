import { ArrowLeft, Trees } from 'lucide-react';

// top row on every screen — back button (or app name) on the left, crew tag on the right
export default function ScreenHeader({ onBack, backLabel = 'Go back', rightLabel = 'Parks Crew' }) {
  return (
    <div className="screen-header">
      {onBack ? (
        <button type="button" onClick={onBack} aria-label={backLabel} className="back-btn">
          <ArrowLeft className="w-6 h-6" strokeWidth={1.6} />
        </button> ) : (
        <div className="brand-mark">
          <Trees className="w-5 h-5" />
          <span>BioTracker</span>
        </div>
      )}
      
      <span className="crew-tag">{rightLabel}</span>
    </div>
  );
}
