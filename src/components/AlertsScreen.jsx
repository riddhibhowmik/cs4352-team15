import { BellRing } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// the card uses data inputted in the issuescreen
export default function AlertsScreen({ navigate, issue, status }) {
  const isUrgent = issue?.urgency?.toLowerCase().includes('urgent');
  const zone = issue?.location?.split(' - ').at(-1) || issue?.location;
  const statusLabel = status === 'Dispatched' ? `Dispatched to ${issue?.team}`
    : status === 'In Progress' ? `${issue?.team} is working on it` : `${issue?.team} completed the issue`;

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('home')} backLabel="Back to Home" />
      <h1 className="page-title">Notifications</h1>
      {!issue ? (
        <div className="card space-y-3">
          <p className="card-title">No issues dispatched yet.</p>
          <p className="card-text">Create an issue to see its crew assignment and status here.</p>
          <button onClick={() => navigate('issues')} className="btn-primary">Add Issue</button>
        </div>
      ) : (
        <>
          <div className="card-notice mb-4">
            <div className="flex gap-2 items-center section-title text-brand">
              <BellRing className="w-6 h-6 shrink-0" /> New Issue Shared
            </div>
            <p className="mt-2 text-[14px]">{statusLabel}</p>
          </div>

          <article className="card mb-4">
            <div className="flex justify-between items-center gap-2 mb-4">
              <span className={isUrgent ? 'badge-urgent' : 'badge-routine'}>● {issue.urgency}</span>
              <span className="font-bold text-[13px]">{issue.submittedAt}</span>
            </div>
            <h2 className="section-title mb-4 break-words">{issue.title}</h2>
            {issue.photo && <img src={issue.photo} alt="Photo attached to the issue" className="w-full h-[126px] object-cover rounded-xl mb-4" />}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-bold">
              <span>● {zone}</span><span>● {issue.team}</span>
            </div>
          </article>

          <div className="mt-4">
            <button type="button" onClick={() => navigate(status === 'Resolved' ? 'issueResolved' : status === 'In Progress' ? 'incidentProgress' : 'crewDetail')}
              className="btn-primary">
              View Issue
            </button>
            <p className="helper-text text-center mt-2">Sent to crew dashboard</p>
          </div>
        </>
      )}
    </div>
  );
}
