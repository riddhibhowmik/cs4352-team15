import { Minus, Plus } from 'lucide-react';

// − count + control, never goes below 0 or above max
export default function Stepper({ value, max, onChange, label }) {
  return (
    <div className="stepper">
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= 0} aria-label={`Remove one ${label}`} className="stepper-btn">
        <Minus className="w-5 h-5" />
      </button>
      <span className="stepper-value" aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`Add one ${label}`} className="stepper-btn">
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}
