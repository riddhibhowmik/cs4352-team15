import { useState } from 'react';
import ScreenHeader from './ScreenHeader';
import Stepper from './Stepper';
import { itemName, countLabel, inStock } from '../data/inventory';

// inventory item screen — pick how many to reserve from each storage lot (capped at what's in it)
export default function InventoryItemScreen({ navigate, item, picked, onSave }) {
  // local copy of the picks so Back discards changes
  const [draft, setDraft] = useState(() => ({ ...picked }));
  const setLotQty = (lot, qty) => setDraft((prev) => ({ ...prev, [lot]: qty }));
  const available = inStock(item);
  const draftTotal = Object.values(draft).reduce((sum, qty) => sum + qty, 0);
  const hadPicks = Object.values(picked).some((qty) => qty > 0);

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('inventory')} backLabel="Back to Inventory" rightLabel="Inventory" />
      <h1 className="page-title mb-1">{itemName(item)}</h1>
      <p className="page-subtitle mt-0">{available} in stock, {item.inUse} in use</p>

      <p className="eyebrow">Inventory details</p>
      {/* storage lots — each stepper stops at that lot's count */}
      <section className="list-panel pt-1">
        {item.lots.map(({ lot, qty }) => (
          <div key={lot} className="bg-surface mb-1 px-4 py-3">
            <p className="body-text">{countLabel(item, qty)} in {lot}</p>
            {qty > 0 ? (
              <div className="flex items-center justify-between mt-2">
                <Stepper value={draft[lot] || 0} max={qty} onChange={(value) => setLotQty(lot, value)} label={`${item.singular} from ${lot}`} />
                {(draft[lot] || 0) === qty && <span className="helper-text">Max available</span>}
              </div>
            ) : (
              <p className="helper-text mt-1">None left in this lot</p>
            )}
          </div>
  ))}
      </section>

      <div className="screen-footer">
        <button
          type="button"
          onClick={() => onSave(item.id, draft)}
          disabled={draftTotal === 0 && !hadPicks}
          className="btn-primary"
        >
          {draftTotal === 0 && hadPicks ? 'Remove from Reservation' : 'Add Items for Reserve'}
        </button>
      </div>
    </div>
  );
}
