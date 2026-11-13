import { AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// work plan screen — drafting or reviewing tasks, cautions, and assigned crew members
export default function WorkPlanScreen({ navigate, isReadyToPublish }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('truckInventory')} backLabel="Back to Truck Inventory" rightLabel={isReadyToPublish ? "Zone 5 - Ready - High priority" : "Zone 5 - Draft - High priority"} />
      <h1 className="page-title">{isReadyToPublish ? "Review Work Plan" : "Work Plan"}</h1>
      <p className="page-subtitle">Zone 5 - {isReadyToPublish ? "Ready" : "Draft"} - High priority</p>

      {/* work plan details card */}
      <div className="card space-y-4 mb-6">
        <div>
          <h2 className="eyebrow">{isReadyToPublish ? "Zone 5 - 2 workers assigned" : "Zone 5 - Work plan draft"}</h2>
          <div className="mt-2">
            <h3 className="section-title text-[16px]">Work to do</h3>
            <p className="body-text mt-1 font-bold">Clear trail and remove invasives</p>
          </div>
        </div>

        {/* caution banner */}
        <div className="callout-caution bg-amber-50 border-caution">
          <AlertTriangle className="w-5 h-5 text-caution shrink-0" />
          <span className="text-[13px] font-normal">
            <strong>Wildlife & planting caution:</strong> Avoid the marked habitat and seedlings. Please use precise hand tools around the planting bed.
          </span>
        </div>

        {/* assigned workers or task assignment link */}
        {isReadyToPublish ? (
          <div>
            <h3 className="section-title text-[16px]">Alex + Sam assigned</h3>
            <p className="helper-text mt-1">Alex: clear trail - Sam: remove invasives</p>
          </div>
        ) : (
          <button type="button" onClick={() => navigate('assignCrew')} className="card-button list-row min-h-[64px] bg-canvas">
            <span className="flex-1 body-text font-bold">Assign individual tasks</span>
            <span className="helper-text">Pick workers before publishing</span>
            <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
          </button>
        )}

        {/* equipment and guidance summary */}
        <div>
          <h3 className="section-title text-[16px]">Equipment & guidance</h3>
          <p className="helper-text mt-1">4 cones reserved - Crew A / Truck 2</p>
          <p className="helper-text">Zone records, video, and audio note linked</p>
        </div>
      </div>

      {/* footer buttons to assign crew or publish plan */}
      <div className="screen-footer">
        {isReadyToPublish ? (
          <button type="button" onClick={() => navigate('planPublished')} className="btn-primary">
            Publish Plan
          </button>
        ) : (
          <button type="button" onClick={() => navigate('assignCrew')} className="btn-primary">
            Assign Crew
          </button>
        )}
      </div>
    </div>
  );
}
