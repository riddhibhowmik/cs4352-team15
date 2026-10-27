import React from 'react';
import { Check } from 'lucide-react';

// task finished confirmation screen
export default function CompleteScreen({ navigate }) {
  return (
    <div className="flex-1 px-6 py-4 flex flex-col justify-between items-center text-center overflow-y-auto pb-20">
      <div className="w-full flex flex-col items-center pt-6">
        {/* big green checkmark */}
        <div className="w-24 h-24 rounded-full bg-[#9bb59a] border-2 border-[#769172] flex items-center justify-center text-slate-900 mb-5">
          <Check className="w-12 h-12 stroke-[2.5]" />
        </div>

        <h1 className="text-2xl font-black text-slate-900">Task Completed!</h1>
        <p className="text-xs text-slate-700 mt-1">
          Zone 4: Mowing Completed - Synced to Crew Dashboard
        </p>

        {/* summary card */}
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-8 text-left space-y-2">
          <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
            <span className="text-slate-600">Completed at</span>
            <span className="font-extrabold text-slate-900">09:41</span>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase">
              UP NEXT @ 10:00 (in 19 minutes)
            </p>
            <p className="text-xs font-black text-slate-900 mt-0.5">
              Zone 2 - Trash Run
            </p>
          </div>
        </div>
      </div>

      <div className="w-full space-y-2">
        {/* return to home — brings user back to the start */}
        <button
          onClick={() => navigate('home')}
          className="w-full py-3 bg-[#193a20] text-white font-bold text-xs rounded-xl"
        >
          Return to Home
        </button>
        <p className="text-[10px] text-slate-500">
          All changes saved, crew dashboard updated
        </p>
      </div>
    </div>
  );
}
