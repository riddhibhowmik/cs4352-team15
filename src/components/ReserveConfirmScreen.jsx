import ScreenHeader from './ScreenHeader';
import Stepper from './Stepper';

// review picked items before reserving, quantities can still be adjusted
// rows: [{ item, lot, max, qty }]
export default function ReserveConfirmScreen({ navigate, rows, onChangeQty, onReserve }) {
  const total = rows.reduce((sum, row) => sum + row.qty, 0);

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('inventory')} backLabel="Back to Inventory" rightLabel="Inventory" />
      <h1 className="page-title">Confirm Items to Reserve</h1>

      {rows.length === 0 ? (
        <div className="card">
          <p className="card-title">Nothing picked yet</p>
          <p className="card-text">Go back to the inventory and choose the equipment you need.</p>
        </div>
      ) : (
        <>
          <p className="eyebrow">Inventory details</p>
          <section className="list-panel pt-1">
            {rows.map(({ item, lot, max, qty }) => (
              <div key={`${item.id}-${lot}`} className="bg-surface mb-1 px-4 py-3">
                <p className="body-text">{item.plural} in {lot}</p>
                <div className="flex items-center justify-between mt-2">
                  <Stepper value={qty} max={max} onChange={(value) => onChangeQty(item.id, lot, value)} label={`${item.singular} from ${lot}`} />
                  <span className="helper-text">{max} available</span>
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      <div className="screen-footer">
        <button type="button" onClick={onReserve} disabled={total === 0} className="btn-primary">
          Reserve Items{total > 0 ? ` (${total})` : ''}
        </button>
      </div>
    </div>
  );
}
