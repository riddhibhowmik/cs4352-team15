// knowledge base topics and sample entries (UI demo data)
// each entry has steps and maybe a video — { length } for samples or { src, length } for uploads
export const TOPICS = [
  { id: 'planting',  name: 'Planting Guides' },
  { id: 'invasive',  name: 'Dealing with Invasive Plants' },
  { id: 'irrigation', name: 'Irrigation Issues' },
  { id: 'flooding',  name: 'Flooding' },
  { id: 'pests',     name: 'Pests' },
  { id: 'drought',   name: 'Drought' },
];

export const ENTRIES = [
  {
    id: 'kb-seedlings',
    topicId: 'planting',
    title: 'Planting Seedlings',
    video: { length: '10:40' },
    steps: [
      'Check the plant’s planting time and make sure it is the right season to plant.',
      'Prepare seed beds by marking boundaries and tilling where seeds will go, keeping each line at least 5 inches apart.',
      'Drop 3–4 seeds every 3 inches in the tilled lines.',
      'Cover with a thin layer of soil and water thoroughly.',
    ],
    addedBy: 'Parks Training Team',
  },
  {
    id: 'kb-native-zones',
    topicId: 'planting',
    title: 'Native Plant Zones and Planting Times',
    video: null,
    steps: [
      'Look up the zone on the park map before choosing plants.',
      'Use spring planting (March–May) for wildflowers and grasses.',
      'Use fall planting (September–October) for shrubs and trees.',
      'Log what was planted and where in the zone notes.',
    ],
    addedBy: 'Field Supervisor',
  },
  {
    id: 'kb-growing-seedlings',
    topicId: 'planting',
    title: 'Caring for Growing Seedlings',
    video: { length: '15:20' },
    steps: [
      'Water early in the morning so leaves dry during the day.',
      'Thin seedlings to one every 3 inches once they have two true leaves.',
      'Pull weeds by hand around the bed every week.',
    ],
    addedBy: 'Parks Training Team',
  },
  {
    id: 'kb-waterlogged',
    topicId: 'planting',
    title: 'Caring for Waterlogged Seedlings',
    video: null,
    steps: [
      'Stop watering until the top inch of soil is dry.',
      'Dig a shallow trench beside the bed to drain standing water.',
      'Replant any seedlings with brown, mushy stems.',
    ],
    addedBy: 'Riley, Crew 5',
  },
  {
    id: 'kb-thistle',
    topicId: 'invasive',
    title: 'Removing Canada Thistle',
    video: { length: '6:05' },
    steps: [
      'Wear thick gloves and long sleeves.',
      'Cut stems at the base before the plant flowers.',
      'Bag all cuttings, do not compost them.',
      'Flag the area and check for regrowth in two weeks.',
    ],
    addedBy: 'Parks Training Team',
  },
  {
    id: 'kb-leak',
    topicId: 'irrigation',
    title: 'Finding and Fixing a Leaking Pipe',
    video: { length: '8:30' },
    steps: [
      'Shut off the zone valve at the control box.',
      'Follow the wet ground to find the leak and dig around it carefully.',
      'Cut out the damaged section and fit a slip coupling.',
      'Turn the water back on and check for drips before backfilling.',
    ],
    addedBy: 'Irrigation Crew',
  },
  {
    id: 'kb-sprinkler',
    topicId: 'irrigation',
    title: 'Replacing a Sprinkler Head',
    video: null,
    steps: [
      'Dig around the head and unscrew it from the riser.',
      'Flush the riser for a few seconds to clear dirt.',
      'Screw on the new head and set the spray direction.',
    ],
    addedBy: 'Crew 5',
  },
  {
    id: 'kb-flood-trail',
    topicId: 'flooding',
    title: 'Closing a Flooded Trail',
    video: null,
    steps: [
      'Place cones and a “Trail Closed” sign at both ends.',
      'Report the closure as an issue so dispatch is notified.',
      'Check the trail again 24 hours after the rain stops.',
    ],
    addedBy: 'Field Supervisor',
  },
  {
    id: 'kb-aphids',
    topicId: 'pests',
    title: 'Controlling Aphids Without Chemicals',
    video: { length: '4:45' },
    steps: [
      'Spray affected leaves with a strong stream of water.',
      'Wipe remaining clusters off with a damp cloth.',
      'Repeat every 2–3 days for a week.',
    ],
    addedBy: 'Parks Training Team',
  },
  {
    id: 'kb-drought-water',
    topicId: 'drought',
    title: 'Watering During a Drought',
    video: null,
    steps: [
      'Water new plantings first, established plants last.',
      'Water deeply once a week instead of a little every day.',
      'Add 2 inches of mulch around plants to hold moisture.',
    ],
    addedBy: 'Field Supervisor',
  },
];
