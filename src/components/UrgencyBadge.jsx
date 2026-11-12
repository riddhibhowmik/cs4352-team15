import { Info, TriangleAlert, Siren } from 'lucide-react';
import { urgencyOf } from '../data/notifications';

const ICONS = { fyi: Info, attention: TriangleAlert, actNow: Siren };

// urgency label — FYI, Needs Attention or Act Now
export default function UrgencyBadge({ level }) {
  const { id, label, badge } = urgencyOf(level);
  const Icon = ICONS[id];
  return (
    <span className={badge}>
      <Icon className="w-3.5 h-3.5" strokeWidth={2.6} aria-hidden="true" />
      {label}
    </span>
  );
}
