import { useState } from 'react';
import { AlertTriangle, Check } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// reserve equipment screen — choose source to borrow missing tools from other crews
export default function ReserveEquipmentScreen({ navigate, onReserveConfirmed }) {
  const [selectedSource, setSelectedSource] = useState('crewA');

  const handleConfirm = () => {
    if (onReserveConfirmed) onReserveConfirmed();
    navigate('truckInventory');
  };

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('truckInventory')} backLabel="Back to Truck Inventory" rightLabel="Cones - 4 needed" />
      <h1 className="page-title">Reserve Equipment</h1>
      <p className="page-subtitle">Cones - Crew A / Truck 2</p>

      {/* missing item warning */}
      <div className="callout-caution mb-4">
        <AlertTriangle className="w-5 h-5 text-caution shrink-0" />
        <span>4 cones needed to mark the work area in Zone 5.</span>
      </div>

      {/* source selection list */}
      <p className="eyebrow">Available from other crews</p>
      <div className="space-y-3 mb-6">
        <button
          type="button"
          onClick={() => setSelectedSource('crewA')}
          className={`card w-full text-left transition ${selectedSource === 'crewA' ? 'border-2 border-brand bg-brand-tint' : ''}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="card-title">Crew A - Truck 2</h2>
              <p className="card-text">4 cones available - Pickup at depot</p>
            </div>
            {selectedSource === 'crewA' && <Check className="w-5 h-5 text-brand" />}
          </div>
        </button>

        <button
          type="button"
          onClick={() => setSelectedSource('grounds3')}
          className={`card w-full text-left transition ${selectedSource === 'grounds3' ? 'border-2 border-brand bg-brand-tint' : ''}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="card-title">Grounds crew - Truck 3</h2>
              <p className="card-text text-ink-muted">Unavailable - All cones are in use</p>
            </div>
            {selectedSource === 'grounds3' && <Check className="w-5 h-5 text-brand" />}
          </div>
        </button>
      </div>

      {/* source confirmation summary */}
      {selectedSource && (
        <div className="card-notice mb-4">
          <h2 className="section-title text-brand text-[14px]">Source selected</h2>
          <p className="body-text mt-1">
            Reserve 4 cones from Crew A / Truck 2. Crew A will receive the reservation confirmation.
          </p>
        </div>
      )}

      {/* confirm reservation button */}
      <div className="screen-footer">
        <button type="button" onClick={handleConfirm} className="btn-primary">
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}
