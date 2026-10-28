import React from 'react';
import { ChevronRight } from 'lucide-react';

// daily schedule view with tasks
export default function ScheduleScreen({ navigate }) {
  return (
    <div className="flex-1 px-6 py-2 flex flex-col justify-between overflow-y-auto pb-20">
      <div>
        <p className="text-xs text-slate-800">Monday, October 12</p>
        <h1 className="text-2xl font-black text-slate-900 mt-1 mb-1">
          Daily Shift Schedule
        </h1>
        <p className="text-xs text-slate-700 mb-4">2 assigned tasks, 07:00 – 15:00</p>

        {/* scheduled task — tapping the arrow starts the Zone 4 flow */}
        <div className="bg-[#9db59a] rounded-2xl p-4 text-slate-900 mb-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-white text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Scheduled
            </span>
            <span className="font-bold text-xs">07:30</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div>
              <h3 className="font-black text-base">Zone 4 - Routine Mowing</h3>
              <p className="text-xs text-slate-800 mt-0.5">North Park</p>
              <p className="text-[11px] text-slate-700">5 acres - Est. 2 hours</p>
            </div>
            {/* navigate to location confirmation for this task */}
            <button
              onClick={() => navigate('location')}
              className="w-8 h-8 rounded-full bg-[#193a20] text-white flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* pending task — locked until Zone 4 is complete; pointer-events-none prevents any interaction */}
        <div className="bg-[#9db59a] rounded-2xl p-4 text-slate-900 mb-4 shadow-sm opacity-60 cursor-not-allowed">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-white text-amber-700 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              Pending
            </span>
            <span className="font-bold text-xs">10:00</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div>
              <h3 className="font-black text-base">Zone 2 - Trash Run</h3>
              <p className="text-xs text-slate-800 mt-0.5">East Trail & Picnic Area</p>
              <p className="text-[11px] text-slate-700">12 stations - Est. 45 minutes</p>
              <p className="text-[10px] text-amber-800 font-bold mt-1">Unlocks after Zone 4 is complete</p>
            </div>
            {/* plain div — not a button, not interactive */}
            <div className="w-8 h-8 rounded-full bg-slate-400 text-white flex items-center justify-center pointer-events-none">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-center text-slate-800">
        Connected to Crew Dashboard
      </p>
    </div>
  );
}
