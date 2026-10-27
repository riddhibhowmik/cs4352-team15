import React from 'react';
import { ArrowLeft, Check, AlertTriangle } from 'lucide-react';

// task checklist screen
export default function ChecklistScreen() {
  return (
    <div className="flex-1 px-6 py-2 flex flex-col justify-between overflow-y-auto pb-20">
      <div>
        <div className="flex items-center justify-between mb-1">
          <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-slate-800" />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-slate-900 uppercase">
            02 / 02 • CHECKLIST
          </span>
        </div>

        <h1 className="text-xl font-black text-slate-900 mb-2">Zone 4: Routine Mowing</h1>

        {/* timestamp for when checklist is started */}
        <div className="flex items-center justify-between text-xs pb-1">
          <span className="text-emerald-900 font-extrabold text-[11px] bg-emerald-100 px-2 py-0.5 rounded-full">
            ● IN PROGRESS
          </span>
          <span className="text-slate-800 font-bold text-[11px]">Started 07:32</span>
        </div>

        {/* progress bar */}
        <div className="flex justify-between text-[11px] font-bold text-slate-900 mb-1 mt-2">
          <span>Checklist progress</span>
          <span>2 / 3 complete</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-4">
          <div className="bg-[#193a20] h-full w-[66%]"></div>
        </div>

        <p className="text-[10px] font-black text-slate-900 tracking-wider mb-2">
          REQUIRED FIELD STEPS
        </p>

        {/* task list items */}
        <div className="space-y-2 mb-4">
          {/* step 1 - completed */}
          <div className="w-full p-3.5 rounded-2xl bg-[#cfded0] border border-[#bcd0be] flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#193a20] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-slate-900 line-through">
                Inspect perimeter & clear debris
              </h3>
              <p className="text-[10px] font-medium text-slate-700">Completed at 07:45</p>
            </div>
          </div>

          {/* step 2 - completed */}
          <div className="w-full p-3.5 rounded-2xl bg-[#cfded0] border border-[#bcd0be] flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#193a20] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div>
              <h3 className="font-bold text-xs text-slate-900 line-through">
                Mow 5-acre central turf area
              </h3>
              <p className="text-[10px] font-medium text-slate-700">Completed at 09:20</p>
            </div>
          </div>

          {/* step 3 - active pending */}
          <div className="w-full p-3.5 rounded-2xl bg-white border-2 border-slate-300 flex items-center gap-3 shadow-xs">
            <div className="w-7 h-7 rounded-lg border-2 border-slate-400 flex items-center justify-center shrink-0"></div>
            <div>
              <h3 className="font-extrabold text-xs text-slate-900">
                Secure equipment & latch gate
              </h3>
              <p className="text-[10px] font-medium text-slate-600">Final mandatory step</p>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-700 leading-relaxed mb-3">
          Check off all items before completing your shift to sync with the supervisor dashboard.
        </p>
      </div>

      {/* action buttons */}
      <div className="space-y-2">
        <button className="w-full min-h-[48px] py-3 bg-amber-50 border-2 border-amber-600 text-amber-900 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          <span>Report Issue / Blocker</span>
        </button>

        <button className="w-full min-h-[48px] py-3 bg-[#193a20] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Mark Complete</span>
        </button>
      </div>
    </div>
  );
}