import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Compass,
  Trees
} from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// location check screen showing the park site map and caution zones
// returnScreen is where the map was opened from (tools, schedule or home)
export default function LocationScreen({ navigate, returnScreen = 'schedule' }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate(returnScreen)} backLabel="Go back" rightLabel="01 / 02 • Location" />

      <h1 className="page-title">Zone 4: North Park</h1>

      {/* park site map */}
      <div className="w-full bg-brand-tint rounded-[20px] border-2 border-brand-soft p-2 relative flex flex-col items-center justify-between h-[230px] overflow-hidden mb-3">

        {/* pan up arrow */}
        <ChevronUp className="w-4 h-4 text-ink-muted z-20 cursor-pointer" />

        {/* main park terrain layer */}
        <div className="w-full flex-1 relative flex items-center justify-center">

          {/* pan left arrow */}
          <ChevronLeft className="w-4 h-4 text-ink-muted absolute left-0 z-20 cursor-pointer" />

          {/* park land boundary (Zone 4 work area) */}
          <div className="w-[88%] h-[88%] bg-brand-mid rounded-[36px] border-2 border-dashed border-brand-soft relative shadow-md overflow-hidden flex items-center justify-center">

            {/* winding dirt trail running through the park */}
            <div className="absolute -top-4 left-1/3 w-8 h-48 border-r-4 border-dashed border-canvas opacity-60 rotate-12 pointer-events-none"></div>

            {/* small tree grove on the northwest corner */}
            <div className="absolute top-2.5 left-3 flex items-center gap-0.5 text-brand pointer-events-none">
              <Trees className="w-4 h-4" />
              <Trees className="w-3 h-3 -ml-1.5 mt-1" />
            </div>

            {/* zone label right in the middle */}
            <div className="text-center z-10 select-none">
              <span className="font-heading text-[16px] text-white">Zone 4</span>
              <p className="text-[10px] text-white font-bold">Turf Mowing Area</p>
            </div>

            {/* the pond nestled inside the southeast slope of the land */}
            <div className="absolute -bottom-1 -right-1 w-24 h-16 bg-teal rounded-tl-[40px] border-2 border-white flex items-center justify-center">
              <span className="text-[10px] font-black text-white pl-3 pt-2">North Pond</span>
            </div>

            {/* GPS location marker placed squarely on the turf */}
            <div className="absolute bottom-5 left-7 flex items-center gap-1.5 z-10 bg-surface px-2 py-0.5 rounded-full shadow-md border border-line">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-danger"></span>
              </span>
              <span className="text-[10px] font-bold text-ink">You are here</span>
            </div>

          </div>

          {/* pan right arrow */}
          <ChevronRight className="w-4 h-4 text-ink-muted absolute right-0 z-20 cursor-pointer" />
        </div>

        {/* bottom map controls & metadata */}
        <div className="w-full flex flex-col items-center z-20">
          <ChevronDown className="w-4 h-4 text-ink-muted cursor-pointer" />
          <div className="w-full flex justify-between items-center text-[10px] font-bold text-ink px-2 mt-0.5">
            <span>Assigned area - 5 acres</span>
            <span className="text-brand bg-brand-soft px-1.5 rounded font-black">GPS ACTIVE</span>
          </div>
        </div>
      </div>

      {/* caution banner */}
      <div className="bg-caution text-white p-4 rounded-[20px]">
        <div className="flex items-center gap-1 text-[12px] font-black uppercase mb-1">
          <AlertTriangle className="w-4 h-4" />
          <span>Caution</span>
        </div>
        <p className="text-[14px] font-bold">Warning: Large Puddles / Wet Slope near Pond</p>
        <p className="text-[12px] mt-1">Check your surroundings before confirming.</p>
      </div>

      {/* confirm location — advances to site notes */}
      <div className="screen-footer">
        <button onClick={() => navigate('notes')} className="btn-primary">
          <Compass className="w-5 h-5" />
          <span>Confirm Location</span>
        </button>
      </div>
    </div>
  );
}
