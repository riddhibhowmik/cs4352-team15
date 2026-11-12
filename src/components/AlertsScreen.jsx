import { useState } from 'react';
import { Bell, CircleAlert, Plus, ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import UrgencyBadge from './UrgencyBadge';

const FILTERS = [
  { id: 'all',    label: 'All' },
  { id: 'issue',  label: 'Issues' },
  { id: 'notice', label: 'Notices' },
];

const KINDS = {
  issue:  { label: 'Issue',  icon: CircleAlert },
  notice: { label: 'Notice', icon: Bell },
};

// notifications screen — notices and issues with their urgency, newest first
// the issue sent from the Add Issue form also shows its crew status and a View Issue button
export default function AlertsScreen({ navigate, notifications, issue, status }) {
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? notifications : notifications.filter((item) => item.kind === filter);

  const statusLabel = status === 'Dispatched' ? `Dispatched to ${issue?.team}`
    : status === 'In Progress' ? `${issue?.team} is working on it` : `${issue?.team} completed the issue`;
  const issueScreen = status === 'Resolved' ? 'issueResolved' : status === 'In Progress' ? 'incidentProgress' : 'crewDetail';

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('home')} backLabel="Back to Home" />
      <h1 className="page-title">Notifications</h1>

      {/* filter chips */}
      <div className="flex gap-2 mb-4" role="group" aria-label="Filter notifications">
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
            className={`chip ${filter === id ? 'chip-selected' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* notification list */}
      {shown.length === 0 ? (
        <div className="card">
          <p className="card-title">Nothing here yet</p>
          <p className="card-text">New {filter === 'issue' ? 'issues' : 'notices'} will show up here.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {shown.map((item) => {
            const { label, icon: KindIcon } = KINDS[item.kind];
            const isLive = item.linkedIssue && issue;
            return (
              <article key={item.id} className={`card ${item.urgency === 'actNow' ? 'border-2 border-danger' : ''}`}>
                <div className="flex justify-between items-center gap-2 mb-3">
                  <UrgencyBadge level={item.urgency} />
                  <span className="helper-text font-bold shrink-0">{item.time}</span>
                </div>
                <span className="tag mb-1"><KindIcon className="w-3.5 h-3.5" aria-hidden="true" />{label}</span>
                <h2 className="card-title break-words">{item.title}</h2>
                <p className="card-text mt-1 whitespace-pre-wrap">{item.text}</p>
                <p className="helper-text mt-3">From {item.from}</p>

                {/* the dispatched issue — shows crew status and opens the crew flow */}
                {isLive && (
                  <div className="divider mt-3 pt-3">
                    <p className="status-text mb-2">{statusLabel}</p>
                    <button type="button" onClick={() => navigate(issueScreen)} className="btn-secondary min-h-[44px] text-[14px]">
                      View Issue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* add notification — opens the add notification form */}
      <div className="screen-footer">
        <button type="button" onClick={() => navigate('addNotification')} className="btn-primary">
          <Plus className="w-5 h-5" />
          Add Notification
        </button>
      </div>
    </div>
  );
}
