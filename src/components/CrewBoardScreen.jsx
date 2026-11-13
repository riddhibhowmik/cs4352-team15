import { ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// crew board screen — shared team status board displaying To Do, In Progress, and Done task columns
export default function CrewBoardScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('home')} backLabel="Back to Home" rightLabel="North Park - Shared work" />
      <h1 className="page-title">Crew Board</h1>
      <p className="page-subtitle">Zone 5 - Plan shared with the crew</p>

      {/* active tasks list */}
      <section className="card space-y-4 mb-6">
        <h2 className="eyebrow">To Do (2 tasks)</h2>
        <div className="bg-canvas p-3 rounded-[14px] space-y-1">
          <p className="font-bold text-[15px]">Clear trail</p>
          <p className="helper-text">Sam • Zone 5</p>
        </div>
        <div className="bg-canvas p-3 rounded-[14px] space-y-1">
          <p className="font-bold text-[15px]">Remove invasives</p>
          <p className="helper-text">Luis • Zone 5</p>
        </div>
      </section>

      {/* task status metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="card text-center py-4">
          <span className="text-[24px] font-bold text-ink-muted block">0</span>
          <span className="helper-text font-bold">In Progress</span>
        </div>
        <div className="card text-center py-4">
          <span className="text-[24px] font-bold text-ink-muted block">0</span>
          <span className="helper-text font-bold">Done</span>
        </div>
      </div>

      {/* footer navigation */}
      <div className="screen-footer space-y-2">
        <button type="button" onClick={() => navigate('workPlan')} className="btn-primary">
          Review Published Plan
        </button>
        <button type="button" onClick={() => navigate('home')} className="btn-secondary">
          Back to Home
        </button>
      </div>
    </div>
  );
}
