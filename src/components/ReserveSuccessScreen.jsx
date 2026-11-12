import { Check } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// confirmation after reserving, summary: { lines: [{ id, label, lots }], reservedBy, date }
export default function ReserveSuccessScreen({ navigate, summary }) {
  if (!summary) {
    return (
      <div className="screen">
        <ScreenHeader onBack={() => navigate('inventory')} backLabel="Back to Inventory" />
        <p className="body-text">No reservation yet.</p>
      </div>
    );
  }

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('inventory')} backLabel="Back to Inventory" />
      <div className="flex flex-col items-center text-center">
        <div className="success-icon"><Check size={76} strokeWidth={2.2} /></div>
        <h1 className="page-title mt-6 mb-0">Items Successfully Reserved</h1>
      </div>

      <section className="card-notice mt-6">
        <h2 className="section-title text-brand mb-3">Reserved Items</h2>
        <ul className="space-y-2 mb-4">
          {summary.lines.map((line) => (
            <li key={line.id}>
              <p className="body-text font-bold">{line.label}</p>
              <p className="helper-text">{line.lots.join(', ')}</p>
            </li>
          ))}
        </ul>
        <div className="divider pt-3 space-y-2">
          <div className="meta-row"><span className="uppercase">Reserved by</span><strong className="uppercase">{summary.reservedBy}</strong></div>
          <div className="meta-row"><span className="uppercase">Date</span><strong className="uppercase">{summary.date}</strong></div>
        </div>
      </section>

      <div className="screen-footer space-y-2">
        <button type="button" onClick={() => navigate('schedule')} className="btn-primary">Back to Tasks</button>
        <button type="button" onClick={() => navigate('inventory')} className="btn-secondary">Back to Inventory</button>
      </div>
    </div>
  );
}
