import { ChevronRight, AlertTriangle, BookOpen, FileText, Package, Users } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// zone details screen 
export default function ZoneDetailsScreen({ navigate, zone }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('map')} backLabel="Back to Map" rightLabel="Zone Details" />
      <h1 className="page-title">{zone.name}</h1>

      {/* warning and recent maintenance */}
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

      {/* zone records & complex workflow links available for all zones */}
      <div className="space-y-3 mb-5">
        <button type="button" onClick={() => navigate('zoneRecords')} className="card-button list-row min-h-[72px]">
          <FileText className="w-6 h-6 text-brand" />
          <span className="flex-1 body-text font-bold">View zone records &amp; boundaries</span>
          <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
        </button>

        <button type="button" onClick={() => navigate('veteranKnowledge')} className="card-button list-row min-h-[72px]">
          <BookOpen className="w-6 h-6 text-brand" />
          <span className="flex-1 body-text font-bold">Knowledge Library &amp; Veteran Guidance</span>
          <span className="badge-routine">{zone.resources.length}</span>
          <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
        </button>

        <button type="button" onClick={() => navigate('truckInventory')} className="card-button list-row min-h-[72px]">
          <Package className="w-6 h-6 text-brand" />
          <span className="flex-1 body-text font-bold">Check Truck Inventory &amp; Reserve Tools</span>
          <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
        </button>

        <button type="button" onClick={() => navigate('crewBoard')} className="card-button list-row min-h-[72px]">
          <Users className="w-6 h-6 text-brand" />
          <span className="flex-1 body-text font-bold">Open Shared Crew Board</span>
          <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
        </button>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={() => navigate('map')} className="btn-secondary">
          Back to Zone Selection
        </button>
      </div>
    </div>
  );
}

