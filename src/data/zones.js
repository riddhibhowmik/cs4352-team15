// park zones shown on the Map screen
// zone 4 matches the figma design, zones 5-7 are just sample data for now
// resource types — video, audio, article, note
export const ZONES = [
  {
    id: 'zone-4',
    name: 'Zone 4: North Park',
    warning: 'Protected Area: Stay on marked trail',
    maintenance: [
      'Oct 10: Trail edge cleared',
      'Oct 12: New seedlings flagged',
    ],
    resources: [
      { id: 'z4-flood', type: 'video', title: 'Mitigating flooding in Zone 4', length: '1:30', addedBy: 'Parks Training Team' },
      { id: 'z4-supervisor', type: 'audio', title: 'Field Supervisor Note: Zone 4', detail: 'Avoid Marked Bed', length: '0:30', addedBy: 'Field Supervisor' },
      {
        id: 'z4-puddle',
        type: 'note',
        title: 'Standing water by the north bench',
        body: 'Water pools along the trail edge for about a day after heavy rain. Walk around on the gravel side and keep mowers off the soft ground until it dries.',
        addedBy: 'Riley, Crew 5',
      },
    ],
  },
  {
    id: 'zone-5',
    name: 'Zone 5: Wildflower Meadow',
    warning: 'Pollinator habitat: no mowing past the flag line',
    maintenance: [
      'Oct 8: Invasive thistle removed',
      'Oct 11: Seed bank watered',
    ],
    resources: [
      { id: 'z5-id', type: 'article', title: 'Identifying native wildflowers', addedBy: 'Parks Training Team' },
      { id: 'z5-thistle', type: 'note', title: 'Thistle regrowth near east fence', detail: 'Check again after the next rain', addedBy: 'Riley' },
    ],
  },
  {
    id: 'zone-6',
    name: 'Zone 6: Grassfield',
    warning: 'Open turf: watch for irrigation heads',
    maintenance: [
      'Oct 9: Turf mowed',
      'Oct 12: Sprinkler head replaced',
    ],
    resources: [
      { id: 'z6-mow', type: 'video', title: 'Mowing pattern for Grassfield', length: '4:10', addedBy: 'Crew 5' },
    ],
  },
  {
    id: 'zone-7',
    name: 'Zone 7: Rest Area',
    warning: 'Public area: post signs before using equipment',
    maintenance: [
      'Oct 11: Trash cans emptied',
    ],
    resources: [],
  },
];

export const findZone = (id) => ZONES.find((zone) => zone.id === id) || ZONES[0];
