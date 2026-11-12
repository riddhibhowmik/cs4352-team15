import { Check } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// task finished confirmation screen
export default function CompleteScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader />

      <div className="flex flex-col items-center text-center pt-4">
        {/* big green checkmark */}
        <div className="success-icon">
          <Check size={76} strokeWidth={2.2} />
        </div>
        <h1 className="page-title mt-6 mb-2">Task Completed!</h1>
        <p className="text-[14px]">Zone 4: Mowing Completed - Synced to Crew Dashboard</p>
      </div>

      {/* summary card */}
      <section className="card mt-6 space-y-3">
        <div className="meta-row border-b border-line pb-3">
          <span>Completed at</span>
          <strong>09:41</strong>
        </div>
        <div>
          <p className="eyebrow text-ink-muted mb-0">Up next @ 10:00 (in 19 minutes)</p>
          <p className="card-title mt-0.5">Zone 2 - Trash Run</p>
        </div>
      </section>

      {/* return to home — brings user back to the start */}
      <div className="screen-footer">
        <button onClick={() => navigate('home')} className="btn-primary">Return to Home</button>
        <p className="helper-text text-center mt-3">All changes saved, crew dashboard updated</p>
      </div>
    </div>
  );
}
