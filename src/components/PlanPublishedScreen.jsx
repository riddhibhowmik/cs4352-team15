import { Check } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// plan published screen — confirmation view after publishing the work plan to the team board
export default function PlanPublishedScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('workPlan')} backLabel="Back to Work Plan" rightLabel="Zone 5 - Shared with crew" />
      <div className="flex flex-col items-center text-center mt-4">
        <div className="success-icon"><Check size={64} strokeWidth={2.4} /></div>
        <h1 className="page-title mt-4 mb-1">Plan Published</h1>
        <p className="page-subtitle">Zone 5 - Shared with crew</p>
      </div>

      {/* confirmation notice summary */}
      <section className="card-notice my-4 space-y-3">
        <h2 className="section-title text-brand text-[16px]">Plan is on the team board</h2>
        <p className="body-text">2 tasks added to To do</p>
        <div className="divider pt-2 space-y-1">
          <p className="eyebrow text-brand">Zone 5 - Protected Area</p>
          <p className="body-text font-bold">4 cones reserved - Crew A / Truck 2</p>
          <p className="helper-text">Veteran guidance linked to both tasks</p>
        </div>
      </section>

      {/* open crew board button */}
      <div className="screen-footer space-y-2">
        <button type="button" onClick={() => navigate('crewBoard')} className="btn-primary">
          Open Crew Board
        </button>
      </div>
    </div>
  );
}
