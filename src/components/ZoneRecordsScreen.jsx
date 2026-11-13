import { ChevronRight, ShieldAlert, BookOpen, ChevronLeft } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// zone records screen — shows boundaries, history, and past maintenance for the zone
export default function ZoneRecordsScreen({ navigate, zone }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('zoneDetails')} backLabel="Back to Zone Details" rightLabel="Zone records" />
      <h1 className="page-title">Zone Records</h1>
      <p className="page-subtitle">{zone.name} - Boundaries & history</p>

      {/* protected boundary notice and past maintenance logs */}
      <section className="card space-y-4 mb-5">
        <div className="callout-caution">
          <ShieldAlert className="w-5 h-5 text-caution shrink-0" />
          <span>Protected boundary — Work only along the marked trail. The flagged wildflower bed is a no-entry area!</span>
        </div>
        <div>
          <h2 className="eyebrow">Past maintenance</h2>
          <ul className="space-y-2">
            {zone.maintenance.map((item) => (
              <li key={item} className="body-text flex gap-2">
                <span className="text-brand-mid">●</span>{item}
              </li>
            ))}
            <li className="body-text flex gap-2">
              <span className="text-brand-mid">●</span>Oct 10 - Grounds crew: Cleared trail edges with hand tools.
            </li>
            <li className="body-text flex gap-2">
              <span className="text-brand-mid">●</span>Oct 12 - Supervisor walk-through: New seedlings marked beside East path.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">Recent log & native plants</h2>
          <p className="body-text">Keep the marked habitat clear of traffic. Check plant labels before removing growth.</p>
        </div>
      </section>

      {/* footer buttons to jump back or to knowledge library */}
      <div className="screen-footer space-y-2">
        <button type="button" onClick={() => navigate('zoneDetails')} className="btn-primary">
          Back to Zone Details
        </button>
        <button type="button" onClick={() => navigate('veteranKnowledge')} className="btn-secondary">
          Knowledge Library
        </button>
      </div>
    </div>
  );
}
