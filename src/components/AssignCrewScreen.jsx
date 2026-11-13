import { ShieldAlert } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// assign crew screen — distribute individual tasks to crew members with safety notes
export default function AssignCrewScreen({ navigate, onSaveAssignments }) {
  const handleSave = () => {
    if (onSaveAssignments) onSaveAssignments();
    navigate('workPlan');
  };

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('workPlan')} backLabel="Back to Work Plan" rightLabel="Zone 5 - 2 tasks" />
      <h1 className="page-title">Assign Crew</h1>
      <p className="page-subtitle">Review and assign tasks to crew members</p>

      {/* task assignments list */}
      <div className="space-y-4 mb-6">
        <div className="card space-y-2">
          <span className="badge-active inline-block">Clear Trail</span>
          <h2 className="card-title text-[18px]">Alex</h2>
          <p className="body-text">Mark the path with cones and clear the trail edge.</p>
        </div>

        <div className="card space-y-2">
          <span className="badge-active inline-block">Remove Invasives</span>
          <h2 className="card-title text-[18px]">Sam</h2>
          <p className="body-text">Use hand tools. Avoid the flagged seedlings.</p>
        </div>

        {/* shared safety note card */}
        <div className="card-notice">
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-brand" />
            <strong className="text-[14px] text-brand uppercase">Shared safety note</strong>
          </div>
          <p className="body-text text-ink">
            Both workers receive the zone caution and the veteran guides with their task, along with guides.
          </p>
        </div>
      </div>

      {/* save assignments button */}
      <div className="screen-footer">
        <button type="button" onClick={handleSave} className="btn-primary">
          Save Assignments
        </button>
      </div>
    </div>
  );
}
