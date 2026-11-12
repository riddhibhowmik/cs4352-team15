import { useState } from 'react';
import { ChevronRight, Search, ClipboardCheck } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import { itemName, inStock } from '../data/inventory';

// List of all equipment with stock counts, tap an item to pick quantities
export default function InventoryScreen({ navigate, inventory, cart, openItem }) {
  const [query, setQuery] = useState('');
  const visible = inventory.filter((item) => itemName(item).toLowerCase().includes(query.trim().toLowerCase()));

  // how many of each item are already picked for reservation
  const pickedCount = (itemId) => Object.values(cart[itemId] || {}).reduce((sum, qty) => sum + qty, 0);
  const totalPicked = inventory.reduce((sum, item) => sum + pickedCount(item.id), 0);

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('tools')} backLabel="Back to Tools" />
      <h1 className="page-title">Inventory</h1>

      <label className="relative block mb-4">
        <span className="sr-only">Search equipment</span>
        <input className="search-field" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search equipment" />
        <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
      </label>

      {/* equipment list — tap  to pick quantities */}
      <section className="list-panel pt-1">
        {visible.length === 0 && <p className="body-text px-4 py-4">No equipment matches “{query}”.</p>}
        {visible.map((item) => {
          const available = inStock(item);
          const picked = pickedCount(item.id);
          return (
            <button key={item.id} type="button" onClick={() => openItem(item.id)} className="list-panel-row py-3">
              <span className="min-w-0">
                <span className="block">{itemName(item)}</span>
                <span className="card-text block mt-0.5 font-normal">{available} in stock, {item.inUse} in use</span>
              </span>
              <span className="flex items-center gap-2 shrink-0">
                {picked > 0 && <span className="badge-active">{picked} picked</span>}
                {available === 0 && <span className="badge-pending">None available</span>}
                <ChevronRight className="w-5 h-5 text-ink-muted" />
              </span>
            </button>
          );
        })}
      </section>

      {/* review button  */}
      {totalPicked > 0 && (
        <div className="screen-footer">
          <button type="button" onClick={() => navigate('reserveConfirm')} className="btn-primary">
            <ClipboardCheck className="w-5 h-5" />
            Review Reservation ({totalPicked})
          </button>
        </div>
      )}
    </div>
  );
}
