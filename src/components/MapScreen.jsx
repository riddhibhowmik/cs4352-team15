import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import parkMap from '../assets/images/park-map.png';
import { ZONES } from '../data/zones';

// Park map with the list of zones, taping a zone opens its details
export default function MapScreen({ navigate, openZone, returnScreen = 'tools' }) {
  const [filter, setFilter] = useState('all');

  const visibleZones = filter === 'protected' 
    ? ZONES.filter((z) => z.id === 'zone-5') 
    : ZONES;

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate(returnScreen)} backLabel="Go back" rightLabel="Parks Crew" />
      <h1 className="page-title">{filter === 'protected' ? 'Protected Zones' : 'All Zones'}</h1>
      <p className="page-subtitle">{filter === 'protected' ? 'Protected areas only' : 'Plan work - 1 of 6'}</p>

      {/* toggle buttons */}
      <div className="segmented mb-4 bg-canvas p-1 rounded-[16px]">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`py-2 text-[14px] font-bold rounded-[12px] transition ${filter === 'all' ? 'bg-surface text-ink shadow-sm' : 'text-ink-muted'}`}
        >
          All zones
        </button>
        <button
          type="button"
          onClick={() => setFilter('protected')}
          className={`py-2 text-[14px] font-bold rounded-[12px] transition ${filter === 'protected' ? 'bg-brand text-white shadow-sm' : 'text-ink-muted'}`}
        >
          Protected
        </button>
      </div>

      {/* park map picture from figma */}
      <img src={parkMap} alt="Park map showing Quad 4, the trail and the pond" className="w-full rounded-[20px] border border-line mb-5" />

      {/* zone list */}
      <section className="list-panel">
        <h2 className="section-title px-4 pt-4 pb-3">Zones</h2>
        {visibleZones.map((zone) => (
          <div key={zone.id} className="bg-surface mb-1 px-4 py-3">
            <button type="button" onClick={() => openZone(zone.id)} className="w-full text-left flex items-center justify-between">
              <div>
                <p className="font-bold text-[16px] text-ink">{zone.name}</p>
                <p className="helper-text mt-0.5">Protected planting area - North Park</p>
                <p className="text-[12px] text-brand font-bold mt-1">Review boundaries before planning work.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
            </button>
            <div className="mt-3">
              <button
                type="button"
                onClick={() => openZone(zone.id)}
                className="btn-primary py-2 text-[14px]"
              >
                Select Zone {zone.id.replace('zone-', '')}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
