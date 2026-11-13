import { CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// truck inventory screen — checks readiness of tools and equipment required for the zone
export default function TruckInventoryScreen({ navigate, hasReservedCones }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('veteranKnowledge')} backLabel="Back to Veteran Knowledge" rightLabel="Truck 1 - Grounds crew" />
      <h1 className="page-title">Truck Inventory</h1>
      <p className="page-subtitle">Truck 1 - Ready for Zone 5</p>

      {/* status banner indicating readiness or missing items */}
      {hasReservedCones ? (
        <div className="card-notice mb-4">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-5 h-5 text-brand" />
            <h2 className="section-title text-brand text-[15px]">All required tools accounted for</h2>
          </div>
          <p className="body-text">Collect the 4 reserved cones from Crew A / Truck 2 before going to Zone 5.</p>
        </div>
      ) : (
        <div className="callout-caution mb-4">
          <AlertTriangle className="w-5 h-5 text-caution shrink-0" />
          <span>2 READY - 1 TOOL MISSING</span>
        </div>
      )}

      {/* itemized tool checklist */}
      <div className="list-panel pt-1 mb-6">
        <div className="bg-surface px-4 py-3 mb-1">
          <p className="font-bold text-[15px]">Gloves</p>
          <p className="helper-text">Ready - Truck 1 - 2 pairs</p>
        </div>
        <div className="bg-surface px-4 py-3 mb-1">
          <p className="font-bold text-[15px]">Trimmer</p>
          <p className="helper-text">Ready - Truck 1 - Trail edge only</p>
        </div>
        <div className="bg-surface px-4 py-3 mb-1 border-l-4 border-caution">
          <p className="font-bold text-[15px]">Cones</p>
          <p className="helper-text text-caution font-medium">
            {hasReservedCones ? 'Reserved - Crew A / Truck 2 - 4 cones' : 'Missing - Need 4 to mark work area'}
          </p>
        </div>
        <div className="bg-surface px-4 py-3 mb-1">
          <p className="font-bold text-[15px]">Hose</p>
          <p className="helper-text">Ready - Truck 1 - 1 hose</p>
        </div>
      </div>

      {/* footer button to reserve tools or create work plan */}
      <div className="screen-footer">
        {hasReservedCones ? (
          <button type="button" onClick={() => navigate('workPlan')} className="btn-primary">
            Create Work Plan
          </button>
        ) : (
          <button type="button" onClick={() => navigate('reserveEquipment')} className="btn-primary">
            Reserve Missing Tools
          </button>
        )}
      </div>
    </div>
  );
}
