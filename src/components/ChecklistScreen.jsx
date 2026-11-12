import { useState } from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

const STEPS = [
  { id: 1, label: 'Inspect perimeter & clear debris',  completedAt: '07:45' },
  { id: 2, label: 'Mow 5-acre central turf area',      completedAt: '09:20' },
  { id: 3, label: 'Secure equipment & latch gate',     completedAt: null },
];

// task checklist screen
export default function ChecklistScreen({ navigate, openIssue }) {
  // track which steps are checked off
  const [checked, setChecked] = useState({ 1: true, 2: true, 3: false });

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const totalDone  = Object.values(checked).filter(Boolean).length;
  const allDone    = totalDone === STEPS.length;
  const pct        = Math.round((totalDone / STEPS.length) * 100);

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('notes')} backLabel="Back to Site Notes" rightLabel="02 / 02 • Checklist" />

      <h1 className="page-title">Zone 4: Routine Mowing</h1>

      {/* timestamp for when checklist is started */}
      <div className="flex items-center justify-between">
        <span className="badge-active">● In Progress</span>
        <span className="font-bold text-[13px]">Started 07:32</span>
      </div>

      {/* progress bar */}
      <div className="flex justify-between text-[13px] font-bold mb-1 mt-4">
        <span>Checklist progress</span>
        <span>{totalDone} / {STEPS.length} complete</span>
      </div>
      <div className="progress-track mb-5">
        <div className="progress-fill" style={{ width: `${pct}%` }}></div>
      </div>

      <p className="eyebrow">Required field steps</p>

      {/* task list items — each one toggles on tap */}
      <div className="flex flex-col gap-2 mb-4">
        {STEPS.map((step) => {
          const done = checked[step.id];
          return (
            <button
              key={step.id}
              onClick={() => toggle(step.id)}
              className={`card-button flex items-center gap-3 ${done ? 'bg-brand-tint border-brand-mid' : 'border-2'}`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                done ? 'bg-brand text-white' : 'border-2 border-ink-muted'
              }`}>
                {done && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <h3 className={`text-[14px] font-bold ${done ? 'line-through' : ''}`}>{step.label}</h3>
                <p className="helper-text">
                  {done && step.completedAt
                    ? `Completed at ${step.completedAt}`
                    : done
                    ? 'Completed'
                    : 'Final mandatory step'}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <p className="helper-text leading-relaxed">
        Check off all items before completing your shift to sync with the supervisor dashboard.
      </p>

      {/* action buttons */}
      <div className="screen-footer space-y-2">
        <button onClick={() => openIssue('checklist')} className="btn-danger">
          <AlertTriangle className="w-5 h-5" />
          <span>Report Issue / Blocker</span>
        </button>

        {/* mark complete — only active when all steps are checked */}
        <button onClick={() => allDone && navigate('complete')} disabled={!allDone} className="btn-primary">
          <Check className="w-5 h-5 stroke-[3]" />
          <span>Mark Complete</span>
        </button>
      </div>
    </div>
  );
}
