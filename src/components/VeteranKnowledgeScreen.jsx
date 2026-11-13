import { PlayCircle, Mic, AlertCircle, ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// veteran knowledge screen — lists field guides, video/audio notes, and supervisor tips for the zone
export default function VeteranKnowledgeScreen({ navigate, zone }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('zoneDetails')} backLabel="Back to Zone Details" rightLabel="Zone 5 - 2 field guides" />
      <h1 className="page-title">Veteran Knowledge</h1>
      <p className="page-subtitle">Zone 5 - Guidance linked to this plan</p>

      {/* list of guides and veteran tips */}
      <div className="space-y-3 mb-6">
        {/* video guide */}
        <button type="button" onClick={() => navigate('videoGuide')} className="card-button flex items-start gap-3">
          <div className="tool-icon shrink-0"><PlayCircle className="w-6 h-6" /></div>
          <div className="flex-1 min-w-0 text-left">
            <h2 className="card-title">Video guide - 1:30</h2>
            <p className="body-text mt-1">Working around wildflower sprouts.</p>
          </div>
          <ChevronRight className="w-5 h-5 text-ink-muted shrink-0 mt-2" />
        </button>

        {/* audio note */}
        <button type="button" onClick={() => navigate('audioNote')} className="card-button flex items-start gap-3">
          <div className="tool-icon shrink-0"><Mic className="w-6 h-6" /></div>
          <div className="flex-1 min-w-0 text-left">
            <h2 className="card-title">Audio note - 0:30</h2>
            <p className="body-text mt-1">Field supervisor: avoid the marked bed.</p>
          </div>
          <ChevronRight className="w-5 h-5 text-ink-muted shrink-0 mt-2" />
        </button>

        {/* veteran tip card */}
        <div className="card-notice">
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle className="w-5 h-5 text-brand" />
            <h2 className="section-title text-brand text-[15px]">Veteran tip</h2>
          </div>
          <p className="body-text text-ink">
            Avoid trampling seedlings. Use precise hand tools near the flagged planting area.
          </p>
        </div>
      </div>

      {/* check truck inventory button */}
      <div className="screen-footer">
        <button type="button" onClick={() => navigate('truckInventory')} className="btn-primary">
          Check Truck Inventory
        </button>
      </div>
    </div>
  );
}
