// the three urgency levels, lowest to highest
// hint is the short explanation shown in the add notification form
export const URGENCY = [
  { id: 'fyi',       label: 'FYI',             hint: 'Just so you know — no action needed',   badge: 'badge-fyi' },
  { id: 'attention', label: 'Needs Attention', hint: 'Read it and plan for it today',          badge: 'badge-attention' },
  { id: 'actNow',    label: 'Act Now',         hint: 'Urgent — respond right away',            badge: 'badge-act-now' },
];

export const urgencyOf = (id) => URGENCY.find((level) => level.id === id) || URGENCY[0];

// sample notifications (UI demo data), newest first
// kind — 'notice' for general updates, 'issue' for problems reported in the field
export const NOTIFICATIONS = [
  {
    id: 'n-1',
    kind: 'issue',
    urgency: 'actNow',
    title: 'Downed tree blocking East Trail',
    text: 'A large oak fell across the trail after last night\'s storm. The trail is closed until Tree Crew clears it.',
    from: 'Tree Crew',
    time: '8:05 AM',
  },
  {
    id: 'n-2',
    kind: 'notice',
    urgency: 'attention',
    title: 'Heat advisory this afternoon',
    text: 'Temperatures reach 98°F after 1 PM. Take a water break every 30 minutes and avoid heavy mowing midday.',
    from: 'Field Supervisor',
    time: '7:30 AM',
  },
  {
    id: 'n-3',
    kind: 'issue',
    urgency: 'attention',
    title: 'Broken sprinkler head in Zone 2',
    text: 'Water is pooling near the playground path. Irrigation Crew will check it today.',
    from: 'Irrigation Crew',
    time: '7:10 AM',
  },
  {
    id: 'n-4',
    kind: 'notice',
    urgency: 'fyi',
    title: 'New gloves in Storage Lot 2',
    text: 'A fresh box of work gloves arrived. Reserve a pair from Inventory under Tools.',
    from: 'Equipment Office',
    time: 'Yesterday',
  },
  {
    id: 'n-5',
    kind: 'notice',
    urgency: 'fyi',
    title: 'Zone 4 mowing days changed',
    text: 'Starting next week, Zone 4 is mowed on Tuesdays and Fridays.',
    from: 'Field Supervisor',
    time: 'Yesterday',
  },
];
