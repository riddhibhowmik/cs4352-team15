import { ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import parkMap from '../assets/images/park-map.png';
import { ZONES } from '../data/zones';

// Park map with the list of zones, taping a zone opens its details
// returnScreen is where the map was opened from (tools or home)
export default function MapScreen({ navigate, openZone, returnScreen = 'tools' }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate(returnScreen)} backLabel="Go back" />
      <h1 className="page-title">Map</h1>

      {/* park map picture from figma */}
      <img src={parkMap} alt="Park map showing Quad 4, the trail and the pond" className="w-full rounded-[20px] border border-line mb-5" />

      {/* zone list */}
      <section className="list-panel">
        <h2 className="section-title px-4 pt-4 pb-3">Zones</h2>
        {ZONES.map((zone) => (
          <button key={zone.id} type="button" onClick={() => openZone(zone.id)} className="list-panel-row">
            <span>{zone.name}</span>
            <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
          </button>
        ))}
      </section>
    </div>
  );
}
