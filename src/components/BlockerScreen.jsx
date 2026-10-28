import React, { useState } from 'react';
import { X, Check, Wrench, Camera } from 'lucide-react';

const ISSUE_TYPES = [
  { id: 'weather',   label: 'Weather / Heavy Rain' },
  { id: 'equipment', label: 'Equipment Breakdown' },
  { id: 'access',    label: 'Access Blocked / Downed Tree' },
];

// issue reporting bottom-sheet when task has a blocker
export default function BlockerScreen({ navigate }) {
  // track which issue type is selected — default to none
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex-1 px-6 py-1 flex flex-col justify-end pb-12 relative bg-black/50">
      <div className="bg-white rounded-t-[32px] p-5 -mx-6 -mb-12 pb-14 shadow-2xl">
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3"></div>

        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-black text-slate-900">Report Task Blocker</h2>
          {/* X closes the sheet and returns to the checklist */}
          <button
            onClick={() => navigate('checklist')}
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4 text-slate-700" />
          </button>
        </div>
        <p className="text-xs text-slate-700 mb-3 font-semibold">Select the issue type:</p>

        {/* single-select issue type buttons */}
        <div className="space-y-2 mb-3">
          {ISSUE_TYPES.map(({ id, label }) => {
            const isSelected = selected === id;
            return (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`w-full min-h-[46px] px-4 rounded-xl text-xs font-bold flex items-center justify-between transition-colors duration-150 ${
                  isSelected
                    ? 'bg-[#193a20] text-white'
                    : 'border-2 border-slate-300 text-slate-900 bg-slate-50'
                }`}
              >
                <span>{label}</span>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-150 ${
                  isSelected
                    ? 'border-white bg-white/20'
                    : 'border-2 border-slate-400'
                }`}>
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* optional note input */}
        <div className="mb-3">
          <label className="text-[11px] font-bold text-slate-800 block mb-1">
            Brief Note (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. standing water near trail"
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl bg-slate-50 text-slate-900 outline-none focus:border-[#193a20]"
          />
        </div>

        {/* photo upload placeholder */}
        <div className="w-full py-2.5 px-3 border border-dashed border-slate-400 rounded-xl flex items-center justify-center gap-2 text-slate-700 text-xs font-bold mb-4 bg-slate-50 cursor-pointer">
          <Camera className="w-4 h-4 text-slate-800" />
          <span>Attach Photo of Obstacle</span>
        </div>

        {/* submit — enabled only when an issue type is selected */}
        <button
          onClick={() => selected && navigate('checklist')}
          disabled={!selected}
          className={`w-full min-h-[48px] py-3 font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-opacity duration-150 ${
            selected
              ? 'bg-[#193a20] text-white opacity-100'
              : 'bg-[#193a20] text-white opacity-40 cursor-not-allowed'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>Submit & Notify Dispatch</span>
        </button>
      </div>
    </div>
  );
}
