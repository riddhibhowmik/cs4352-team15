import { Check } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// issue resolved screen
export default function IssueResolvedScreen({ navigate, issue, resolvedAt }) {
  if (!issue) {
    return (
      <div className="screen">
        <ScreenHeader />
        <p className="body-text">No resolved issue yet.</p>
      </div>
    );
  }

  return (
    <div className="screen">
      <ScreenHeader />
      <div className="flex flex-col items-center text-center pt-4">
        <div className="success-icon"><Check size={76} strokeWidth={2.2} /></div>
        <h1 className="page-title mt-6 mb-2">Issue Resolved &amp; Closed</h1>
        <p className="text-[16px] break-words">{issue.title}</p>
      </div>
      <section className="card mt-6 space-y-3">
        <div className="meta-row border-b border-line pb-3"><span>Closed at</span><strong className="text-right">{resolvedAt || 'Just now'}</strong></div>
        <div className="meta-row"><span>Issue</span><strong className="text-right break-words">{issue.title}</strong></div>
        <div className="meta-row"><span>Resolved by</span><strong className="text-right">{issue.team}</strong></div>
        <div className="meta-row"><span>Location</span><strong className="text-right">{issue.location}</strong></div>
      </section>
      <div className="screen-footer">
        <button onClick={() => navigate('home')} className="btn-primary">Return to Home</button>
        <p className="helper-text text-center mt-3">All changes saved, crew dashboard updated</p>
      </div>
    </div>
  );
}
