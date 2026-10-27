import React from 'react';
import { ArrowLeft, FileText, Wrench, AlertTriangle, ChevronRight } from 'lucide-react';

// zone details and review notes before starting daily checklist
export default function NotesScreen() {
  return (
    <div className="flex-1 px-6 py-2 flex flex-col justify-between overflow-y-auto pb-20">
      <div>
        <div className="flex items-center justify-between mb-1">
          <div className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center">
            <ArrowLeft className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-slate-900 uppercase">
            ZONE DETAILS
          </span>
        </div>

        <h1 className="text-xl font-black text-slate-900 mb-1">Zone 4: Site Notes</h1>
        <p className="text-xs text-slate-600 mb-4">Review boundary rules and recent field logs</p>

        {/* lsit of site notes */}
        <div className="space-y-2.5">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2 font-bold text-xs text-slate-800">
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>Boundary Rule</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Keep a 15ft buffer from the wildflower line near East Trail.
            </p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2 font-bold text-xs text-slate-800">
              <Wrench className="w-4 h-4 text-amber-700" />
              <span>Required Gear</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Ride-on mower #4, safety glasses, safety ear protection.
            </p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2 font-bold text-xs text-slate-800">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Grounds Warning</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Drainage pipe exposed near the north fence line.
            </p>
          </div>
        </div>
      </div>

      <button className="w-full py-3 bg-[#193a20] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5">
        <span>Proceed to Checklist</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}