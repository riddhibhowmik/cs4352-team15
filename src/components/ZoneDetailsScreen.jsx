import { ChevronRight, AlertTriangle } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// details for one zone: warning, recent maintenance and a link to its resources
export default function ZoneDetailsScreen({ navigate, zone }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('map')} backLabel="Back to Map" rightLabel="Zone Details" />
      <h1 className="page-title">{zone.name}</h1>

      <section className="card space-y-4 mb-5">
        <div className="callout-caution">
          <AlertTriangle className="w-5 h-5 text-caution shrink-0" />
          <span>{zone.warning}</span>
        </div>

        <div>
          <h2 className="eyebrow">Recent maintenance</h2>
          <ul className="space-y-2">
            {zone.maintenance.map((item) => (
              <li key={item} className="body-text flex gap-2">
                <span className="text-brand-mid">●</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="eyebrow">Access zone resources</p>
      <button type="button" onClick={() => navigate('zoneResources')} className="card-button list-row min-h-[80px]">
        <span className="flex-1 body-text font-bold">
          View Knowledge Base resources specific to {zone.name.split(':')[0]}
        </span>
        <span className="badge-routine">{zone.resources.length}</span>
        <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
      </button>
    </div>
  );
}
