import { FileText, Wrench, AlertTriangle, ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// zone details and review notes before starting daily checklist
export default function NotesScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('location')} backLabel="Back to Location" rightLabel="Zone Details" />

      <h1 className="page-title">Zone 4: Site Notes</h1>
      <p className="page-subtitle">Review boundary rules and recent field logs</p>

      {/* list of site notes */}
      <div className="flex flex-col gap-3">
        <div className="card">
          <div className="flex items-center gap-2 card-title">
            <FileText className="w-5 h-5 text-brand-mid" />
            <span>Boundary Rule</span>
          </div>
          <p className="card-text">Keep a 15ft buffer from the wildflower line near East Trail.</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 card-title">
            <Wrench className="w-5 h-5 text-caution" />
            <span>Required Gear</span>
          </div>
          <p className="card-text">Ride-on mower #4, safety glasses, safety ear protection.</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 card-title">
            <AlertTriangle className="w-5 h-5 text-danger" />
            <span>Grounds Warning</span>
          </div>
          <p className="card-text">Drainage pipe exposed near the north fence line.</p>
        </div>
      </div>

      {/* proceed to checklist — advances to the task checklist */}
      <div className="screen-footer">
        <button onClick={() => navigate('checklist')} className="btn-primary">
          <span>Proceed to Checklist</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
