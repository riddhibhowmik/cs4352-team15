import React from 'react';

// home screen showing shift greeting and task choices
export default function HomeScreen({ navigate }) {
  return (
    <div className="flex-1 px-6 py-2 flex flex-col justify-between overflow-y-auto pb-20">
      <div>
        <p className="text-xs text-slate-800">Monday, October 12</p>
        <h1 className="text-2xl font-black text-slate-900 mt-1 mb-3">
          Field Operations Hub
        </h1>

        {/* officer greeting card */}
        <div className="bg-[#a2bca0] rounded-2xl p-4 border border-[#8ea88d] mb-4">
          <h2 className="text-base font-bold text-slate-900">Welcome back, Officer!</h2>
          <p className="text-xs text-slate-800 mt-1">3 active tasks today.</p>
        </div>

        <p className="text-[11px] font-black text-slate-900 tracking-wider mb-2">
          CHOOSE A WORKFLOW TASK
        </p>

        {/* Zone 4 mowing card — tappable, starts the main workflow */}
        <button
          onClick={() => navigate('schedule')}
          className="w-full bg-[#cfded0] border border-[#bcd0be] rounded-2xl p-3.5 mb-2.5 text-left active:brightness-95 transition-all duration-100"
        >
          <h3 className="font-extrabold text-[13px] text-slate-900">
            Zone 4 - Routine Mowing and Inspection
          </h3>
          <p className="text-[11px] text-slate-700 mt-0.5">
            Confirm location, execute, and report any blockers
          </p>
        </button>

        {/* Report Incident card — static for now, not yet wired */}
        <div className="bg-[#ddd9d7] border border-[#cfcbc9] rounded-2xl p-3.5 mb-2.5 opacity-60">
          <h3 className="font-extrabold text-[13px] text-slate-900">
            Report Incident/Log New Issue
          </h3>
          <p className="text-[11px] text-slate-700 mt-0.5">
            Log an invasive species, equipment breakage, or get crews dispatched
          </p>
        </div>

        {/* Protected Zones card — static for now, not yet wired */}
        <div className="bg-[#ddd9d7] border border-[#cfcbc9] rounded-2xl p-3.5 opacity-60">
          <h3 className="font-extrabold text-[13px] text-slate-900">
            Identify Protected Zones and Check Equipment
          </h3>
          <p className="text-[11px] text-slate-700 mt-0.5">
            Check maps, inspect boundaries, and reserve tools
          </p>
        </div>
      </div>

      {/* start shift button — also navigates to the daily schedule */}
      <button
        onClick={() => navigate('schedule')}
        className="w-full py-3 bg-[#193a20] text-white font-bold text-sm rounded-xl"
      >
        Start Shift
      </button>
    </div>
  );
}
