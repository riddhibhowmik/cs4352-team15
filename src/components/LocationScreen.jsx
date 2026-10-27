import React from 'react';
import { 
  ArrowLeft, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  Compass, 
  MapPin,
  Trees
} from 'lucide-react';

// location check screen showing the park site map and caution zones
export default function LocationScreen() {
  return (
    <div className="flex-1 px-6 py-2 flex flex-col justify-between overflow-y-auto pb-20">
      <div>
        {/* Top navigation row */}
        <div className="flex items-center justify-between mb-1">
          <div className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center">
            <ArrowLeft className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-slate-900 uppercase">
            01 / 02 • LOCATION
          </span>
        </div>

        <h1 className="text-xl font-black text-slate-900 mb-2">Zone 4: North Park</h1>

        {/* realistic park site map */}
        <div className="w-full bg-[#d8ecd5] rounded-2xl border-2 border-[#b5d6b0] p-2 relative flex flex-col items-center justify-between h-[230px] overflow-hidden mb-3 shadow-inner">
          
          {/* pan up arrow */}
          <ChevronUp className="w-4 h-4 text-slate-600 z-20 cursor-pointer" />
          
          {/* main park terrain layer */}
          <div className="w-full flex-1 relative flex items-center justify-center">
            
            {/* pan left arrow */}
            <ChevronLeft className="w-4 h-4 text-slate-600 absolute left-0 z-20 cursor-pointer" />

            {/* park land boundary (Zone 4 work area) */}
            <div className="w-[88%] h-[88%] bg-[#507d4b] rounded-[36px] border-2 border-dashed border-[#a3cca0] relative shadow-md overflow-hidden flex items-center justify-center">
              
              {/* winding dirt trail running through the park */}
              <div className="absolute -top-4 left-1/3 w-8 h-48 border-r-4 border-dashed border-[#c2b280]/60 rotate-12 pointer-events-none"></div>

              {/* small tree grove on the northwest corner */}
              <div className="absolute top-2.5 left-3 flex items-center gap-0.5 text-[#2d4d29]/70 pointer-events-none">
                <Trees className="w-4 h-4" />
                <Trees className="w-3 h-3 -ml-1.5 mt-1" />
              </div>

              {/* zone label right in the middle */}
              <div className="text-center z-10 select-none">
                <span className="text-sm font-black text-white/90 tracking-wide drop-shadow-xs">
                  Zone 4
                </span>
                <p className="text-[9px] text-emerald-100 font-semibold">Turf Mowing Area</p>
              </div>

              {/* the pond nestled inside the southeast slope of the land */}
              <div className="absolute -bottom-1 -right-1 w-24 h-16 bg-[#3a7ca5] rounded-tl-[40px] border-2 border-[#62a4cf] flex items-center justify-center shadow-inner">
                <span className="text-[10px] font-black text-sky-100 tracking-tight pl-3 pt-2">
                  North Pond
                </span>
              </div>

              {/* GPS location marker placed squarely on the turf */}
              <div className="absolute bottom-5 left-7 flex items-center gap-1.5 z-10 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-md border border-slate-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="text-[9px] font-extrabold text-slate-900 tracking-tight">
                  You are here
                </span>
              </div>

            </div>

            {/* pan right arrow */}
            <ChevronRight className="w-4 h-4 text-slate-600 absolute right-0 z-20 cursor-pointer" />
          </div>

          {/* bottom map controls & metadata */}
          <div className="w-full flex flex-col items-center z-20">
            <ChevronDown className="w-4 h-4 text-slate-600 cursor-pointer" />
            <div className="w-full flex justify-between items-center text-[9px] font-bold text-slate-700 px-2 mt-0.5">
              <span>Assigned area - 5 acres</span>
              <span className="text-emerald-900 bg-[#c5e4c1] px-1.5 py-0.2 rounded font-extrabold">GPS ACTIVE</span>
            </div>
          </div>
        </div>

        {/* caution banner */}
        <div className="bg-[#e2690b] text-white p-3.5 rounded-2xl mb-3 shadow-xs">
          <div className="flex items-center gap-1 text-[10px] font-black uppercase mb-0.5">
            <AlertTriangle className="w-3.5 h-3.5 fill-white text-[#e2690b]" />
            <span>CAUTION</span>
          </div>
          <p className="text-xs font-black">
            Warning: Large Puddles / Wet Slope near Pond
          </p>
          <p className="text-[10px] text-amber-100 mt-1">
            Check your surroundings before confirming.
          </p>
        </div>
      </div>

      {/* confirm button */}
      <button className="w-full py-3 bg-[#193a20] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm">
        <Compass className="w-4 h-4" />
        <span>Confirm Location</span>
      </button>
    </div>
  );
}