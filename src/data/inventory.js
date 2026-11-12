// Sample equipment in storage (UI demo data)
// lots — how many are in each storage lot right now (these can be reserved)
// inUse — how many are already checked out
export const INVENTORY = [
  { id: 'truck',     singular: 'Truck',          plural: 'Trucks',          inUse: 1, lots: [{ lot: 'Storage Lot 1', qty: 1 }, { lot: 'Storage Lot 3', qty: 2 }] },
  { id: 'gloves',    singular: 'Pair of Gloves', plural: 'Pairs of Gloves', name: 'Gloves', inUse: 3, lots: [{ lot: 'Storage Lot 3', qty: 8 }] },
  { id: 'trimmer',   singular: 'Trimmer',        plural: 'Trimmers',        inUse: 1, lots: [{ lot: 'Storage Lot 2', qty: 3 }, { lot: 'Storage Lot 4', qty: 2 }] },
  { id: 'hose',      singular: 'Hose',           plural: 'Hoses',           inUse: 2, lots: [{ lot: 'Storage Lot 5', qty: 7 }] },
  { id: 'cones',     singular: 'Cone',           plural: 'Cones',           name: 'Cones',         inUse: 6, lots: [{ lot: 'Storage Lot 1', qty: 12 }, { lot: 'Storage Lot 2', qty: 8 }] },
  { id: 'plow',      singular: 'Plow',           plural: 'Plows',           inUse: 0, lots: [{ lot: 'Storage Lot 5', qty: 2 }] },
  { id: 'shovel',    singular: 'Shovel',         plural: 'Shovels',         inUse: 2, lots: [{ lot: 'Storage Lot 2', qty: 6 }, { lot: 'Storage Lot 4', qty: 4 }] },
  { id: 'rake',      singular: 'Rake',           plural: 'Rakes',           inUse: 1, lots: [{ lot: 'Storage Lot 2', qty: 5 }] },
  { id: 'wheelbarrow', singular: 'Wheelbarrow',  plural: 'Wheelbarrows',    inUse: 1, lots: [{ lot: 'Storage Lot 4', qty: 3 }] },
  { id: 'shears',    singular: 'Pruning Shears', plural: 'Pruning Shears',  inUse: 4, lots: [{ lot: 'Storage Lot 3', qty: 10 }] },
  { id: 'blower',    singular: 'Leaf Blower',    plural: 'Leaf Blowers',    inUse: 2, lots: [{ lot: 'Storage Lot 1', qty: 2 }] },
  { id: 'mower',     singular: 'Ride-on Mower',  plural: 'Ride-on Mowers',  inUse: 3, lots: [{ lot: 'Storage Lot 1', qty: 0 }] },
];

// display name for the list ("Gloves" instead of "Pairs of Gloves")
export const itemName = (item) => item.name || item.singular;


export const countLabel = (item, count) => `${count} ${count === 1 ? item.singular : item.plural}`;

// total that can still be reserved
export const inStock = (item) => item.lots.reduce((sum, { qty }) => sum + qty, 0);
