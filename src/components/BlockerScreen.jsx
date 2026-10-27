import React from 'react';
import { X, Check, Wrench, Camera } from 'lucide-react';

// issue reporting bottom-sheet when task has a blocker
export default function BlockerScreen({ navigate }) {
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

        {/* list of issue choices with high contrast */}
        <div className="space-y-2 mb-3">
          <div className="w-full min-h-[46px] px-4 rounded-xl text-xs font-bold bg-[#193a20] text-white flex items-center justify-between">
            <span>Weather / Heavy Rain</span>
            <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center bg-white/20">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          <div className="w-full min-h-[46px] px-4 rounded-xl text-xs font-bold border-2 border-slate-300 text-slate-900 flex items-center justify-between bg-slate-50">
            <span>Equipment Breakdown</span>
            <div className="w-5 h-5 rounded-full border-2 border-slate-400"></div>
          </div>

          <div className="w-full min-h-[46px] px-4 rounded-xl text-xs font-bold border-2 border-slate-300 text-slate-900 flex items-center justify-between bg-slate-50">
            <span>Access Blocked / Downed Tree</span>
            <div className="w-5 h-5 rounded-full border-2 border-slate-400"></div>
          </div>
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

        {/* submit — sends report and returns to checklist */}
        <button
          onClick={() => navigate('checklist')}
          className="w-full min-h-[48px] py-3 bg-[#193a20] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Wrench className="w-4 h-4" />
          <span>Submit & Notify Dispatch</span>
        </button>
      </div>
    </div>
  );
}
