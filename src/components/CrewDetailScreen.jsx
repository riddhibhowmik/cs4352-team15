import { Play } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// crew detail screen
const zoneLabel = (location) => location?.split(' - ').at(-1) || location || 'Location not specified';
const isUrgent = (issue) => issue?.urgency?.toLowerCase().includes('urgent');

export default function CrewDetailScreen({ navigate, issue, onStartWork, status }) {
  if (!issue) {
    return (
      <div className="screen">
        <ScreenHeader onBack={() => navigate('alerts')} backLabel="Back to notifications" />
        <p className="body-text">No dispatched issue yet.</p>
        <button className="btn-secondary mt-4" onClick={() => navigate('issues')}>Add Issue</button>
      </div>
    );
  }

  const buttonAction = status === 'Resolved' ? () => navigate('issueResolved')
    : status === 'In Progress' ? () => navigate('incidentProgress') : onStartWork;
  const buttonLabel = status === 'Resolved' ? 'View Resolution' : status === 'In Progress' ? 'View Progress' : 'Start Work';

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('alerts')} backLabel="Back to notifications" />
      <h1 className="page-title">Crew Detail</h1>
      <article className="card border-2 border-brand space-y-4">
        <span className={isUrgent(issue) ? 'badge-urgent' : 'badge-routine'}>● {issue.urgency}</span>
        <h2 className="section-title break-words">{issue.title}</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-bold text-[13px]"><span>● {zoneLabel(issue.location)}</span><span>● {issue.team}</span></div>
        {issue.photo && <img src={issue.photo} alt="Issue photograph" className="w-full max-h-[170px] object-cover rounded-xl" />}
        {issue.description && <p className="body-text whitespace-pre-wrap">{issue.description}</p>}
        <p className="helper-text">Location: {issue.location}</p>
        {issue.hasRecording && <p className="text-[12px] font-bold">Voice note attached (demo indicator)</p>}
      </article>
      <div className="screen-footer">
        <button onClick={buttonAction} className="btn-primary"><Play size={20} />{buttonLabel}</button>
      </div>
    </div>
  );
}
