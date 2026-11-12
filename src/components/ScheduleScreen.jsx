import { ChevronRight, Plus } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// daily schedule view with tasks
export default function ScheduleScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('home')} backLabel="Back to Home" />

      <p className="helper-text">Monday, October 12</p>
      <h1 className="page-title mt-1">Daily Shift Schedule</h1>
      <p className="page-subtitle">2 assigned tasks, 07:00 – 15:00</p>

      {/* scheduled task — tapping the arrow starts the Zone 4 flow */}
      <div className="card-featured mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="badge-active bg-surface">● Scheduled</span>
          <span className="font-bold text-[13px]">07:30</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="card-title">Zone 4 - Routine Mowing</h3>
            <p className="text-[13px] mt-0.5">North Park</p>
            <p className="text-[12px]">5 acres - Est. 2 hours</p>
          </div>
          {/* navigate to location confirmation for this task */}
          <button onClick={() => navigate('location')} aria-label="Start Zone 4 task" className="icon-btn">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* pending task — locked until Zone 4 is complete */}
      <div className="card opacity-60 cursor-not-allowed mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="badge-pending">● Pending</span>
          <span className="font-bold text-[13px]">10:00</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="card-title">Zone 2 - Trash Run</h3>
            <p className="text-[13px] mt-0.5">East Trail & Picnic Area</p>
            <p className="text-[12px]">12 stations - Est. 45 minutes</p>
            <p className="text-[12px] font-bold text-caution mt-1">Unlocks after Zone 4 is complete</p>
          </div>
          {/* plain div — not a button, not interactive */}
          <div className="icon-btn bg-ink-muted pointer-events-none">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* log a new issue — opens the Add Issue form (used to be its own tab) */}
      <div className="screen-footer">
        <button onClick={() => navigate('issues')} className="btn-secondary">
          <Plus className="w-5 h-5" />
          Log New Issue
        </button>
        <p className="helper-text text-center mt-2">Connected to Crew Dashboard</p>
      </div>
    </div>
  );
}
