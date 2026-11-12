import { MapPin } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// incident progress screen
export default function IncidentProgressScreen({ navigate, issue, startedAt, onResolve }) {
  if (!issue) {
    return (
      <div className="screen">
        <ScreenHeader onBack={() => navigate('alerts')} backLabel="Back to notifications" />
        <p className="body-text">No dispatched issue yet.</p>
      </div>
    );
  }

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('crewDetail')} backLabel="Back to crew detail" />
      <div className="flex items-start justify-between gap-2">
        <h1 className="page-title">Incident Progress</h1>
        <span className="badge-active shrink-0 mt-2">● In Progress</span>
      </div>
      <h2 className="section-title break-words">{issue.title}</h2>
      <p className="text-[14px] mt-2 mb-4">{issue.team} - Started {startedAt || 'recently'}</p>
      <section className="card space-y-4">
        <p className="eyebrow mb-0">Update log</p>
        <div>
          <h3 className="card-title text-brand">Work underway</h3>
          <p className="text-[13px] mt-1">{issue.team} is responding at {issue.location}.</p>
        </div>
        {issue.photo && <img src={issue.photo} className="rounded-xl w-full max-h-[170px] object-cover" alt="Submitted incident photograph" />}
        <div className="rounded-xl bg-brand-tint border border-brand-soft px-4 py-5 text-center text-brand">
          <MapPin className="mx-auto mb-1" />
          <span className="font-bold text-[13px]">{issue.location}</span>
          <p className="text-[12px] mt-1">Selected zone</p>
        </div>
        <div className="divider pt-3">
          <h3 className="card-title flex justify-between">Work started <span className="font-bold text-[12px]">{startedAt || 'Now'}</span></h3>
          <p className="text-[13px] mt-1">Assigned to {issue.team}.</p>
        </div>
        {issue.description && <p className="text-[13px] whitespace-pre-wrap"><strong>Reported notes:</strong> {issue.description}</p>}
      </section>
      <div className="screen-footer">
        <button onClick={onResolve} className="btn-primary">Mark as Resolved</button>
      </div>
    </div>
  );
}
