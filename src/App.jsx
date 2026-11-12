import { useState } from 'react';

// import individual screen components
import HomeScreen from './components/HomeScreen';
import ScheduleScreen from './components/ScheduleScreen';
import LocationScreen from './components/LocationScreen';
import NotesScreen from './components/NotesScreen';
import ChecklistScreen from './components/ChecklistScreen';
import CompleteScreen from './components/CompleteScreen';
import BlockerScreen from './components/BlockerScreen';
import IssuesScreen from './components/IssuesScreen';
import AlertsScreen from './components/AlertsScreen';
import AddNotificationScreen from './components/AddNotificationScreen';
import { NOTIFICATIONS } from './data/notifications';
import CrewDetailScreen from './components/CrewDetailScreen';
import IncidentProgressScreen from './components/IncidentProgressScreen';
import IssueResolvedScreen from './components/IssueResolvedScreen';
import ToolsScreen from './components/ToolsScreen';
import MapScreen from './components/MapScreen';
import ZoneDetailsScreen from './components/ZoneDetailsScreen';
import ZoneResourcesScreen from './components/ZoneResourcesScreen';
import AddResourceScreen from './components/AddResourceScreen';
import InventoryScreen from './components/InventoryScreen';
import InventoryItemScreen from './components/InventoryItemScreen';
import ReserveConfirmScreen from './components/ReserveConfirmScreen';
import ReserveSuccessScreen from './components/ReserveSuccessScreen';
import { INVENTORY, countLabel } from './data/inventory';
import KnowledgeBaseScreen from './components/KnowledgeBaseScreen';
import KnowledgeTopicScreen from './components/KnowledgeTopicScreen';
import KnowledgeEntryScreen from './components/KnowledgeEntryScreen';
import AddEntryScreen from './components/AddEntryScreen';
import { TOPICS, ENTRIES } from './data/knowledgeBase';
import MenuBar from './components/MenuBar';
import { findZone } from './data/zones';

// screens that belong to each bottom menu tab (Home, Alerts, Tasks, Tools)
// location is left out on purpose — its tab depends on where it was opened from
const TAB_SCREENS = {
  home:   ['home'],
  alerts: ['alerts', 'addNotification', 'crewDetail', 'incidentProgress', 'issueResolved'],
  tasks:  ['schedule', 'notes', 'checklist', 'complete', 'issues', 'blocker'],
  tools:  ['tools', 'map', 'zoneDetails', 'zoneResources', 'addResource',
           'inventory', 'inventoryItem', 'reserveConfirm', 'reserveSuccess',
           'knowledgeBase', 'knowledgeTopic', 'knowledgeEntry', 'addEntry'],
};
// screen each tab opens when tapped
const TAB_START_SCREEN = { home: 'home', alerts: 'alerts', tasks: 'schedule', tools: 'tools' };

// screens whose back button returns to whoever opened them, plus their sub-screens

const pruneCart = (cart) => Object.fromEntries(
  Object.entries(cart)
    .map(([itemId, picks]) => [itemId, Object.fromEntries(Object.entries(picks).filter(([, qty]) => qty > 0))])
    .filter(([, picks]) => Object.keys(picks).length > 0),
);

const REMEMBER_OPENER = {
  location: ['notes'],
  map: ['zoneDetails', 'zoneResources', 'addResource'],
  addEntry: [],
};

export default function App() {
  // state to choose which screen to show
  const [activeScreen, setActiveScreen] = useState('home');
  // tracks which screen opened the blocker, so X / Submit returns there
  const [issueSource, setIssueSource] = useState('home');
  // The latest submitted issue is shared between the issue form and Alerts.
  const [submittedIssue, setSubmittedIssue] = useState(null);
  const [issueStatus, setIssueStatus] = useState('Dispatched');
  const [startedAt, setStartedAt] = useState(null);
  const [resolvedAt, setResolvedAt] = useState(null);
  // notices and issues on the Alerts tab, newest first
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  // tracks which screen opened location / map, so Back returns there
  const [openedFrom, setOpenedFrom] = useState({ location: 'schedule', map: 'tools' });
  // Zone picked on the Map screen
  const [selectedZoneId, setSelectedZoneId] = useState(null);
  // resources added in the app, by zone id (kept in memory, lost on refresh)
  const [addedResources, setAddedResources] = useState({});
  const baseZone = findZone(selectedZoneId);
  // newest additions, then the zone's built-in resources
  const selectedZone = { ...baseZone, resources: [...(addedResources[baseZone.id] || []), ...baseZone.resources] };

  const addResource = (zoneId, resource) => {
    setAddedResources((prev) => ({ ...prev, [zoneId]: [resource, ...(prev[zoneId] || [])] }));
    setActiveScreen('zoneResources');
  };

  // qEuipment stok (changes after each reservation) and the items picked so far
  const [inventory, setInventory] = useState(INVENTORY);
  // cart looks like { itemId: { 'Storage Lot 1': qty } }
  const [cart, setCart] = useState({});
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [reservation, setReservation] = useState(null);

  // screens call this to switch screens, it also remembers who opened location / map
  const navigate = (screen) => {
    const subScreens = REMEMBER_OPENER[screen];
    if (subScreens && !subScreens.includes(activeScreen)) {
      setOpenedFrom((prev) => ({ ...prev, [screen]: activeScreen }));
    }
    // drop rows set to 0 so the confirm screen only lists picked items
    if (screen === 'reserveConfirm') setCart((prev) => pruneCart(prev));
    setActiveScreen(screen);
  };

  // knowledge base
  const [kbEntries, setKbEntries] = useState(ENTRIES);
  const [selectedTopicId, setSelectedTopicId] = useState(TOPICS[0].id);
  const [selectedEntryId, setSelectedEntryId] = useState(null);
  const selectedTopic = TOPICS.find((topic) => topic.id === selectedTopicId) || TOPICS[0];
  const selectedEntry = kbEntries.find((entry) => entry.id === selectedEntryId) || kbEntries[0];

  const openTopic = (topicId) => {
    setSelectedTopicId(topicId);
    setActiveScreen('knowledgeTopic');
  };

  const openEntry = (entry) => {
    setSelectedTopicId(entry.topicId); // so Back returns to the entry's topic
    setSelectedEntryId(entry.id);
    setActiveScreen('knowledgeEntry');
  };

  // new entries go first, then show the topic they were added to
  const addKbEntry = (entry) => {
    setKbEntries((prev) => [entry, ...prev]);
    setSelectedTopicId(entry.topicId);
    setActiveScreen('knowledgeTopic');
  };

  // inventory
  const openItem = (itemId) => {
    setSelectedItemId(itemId);
    setActiveScreen('inventoryItem');
  };

  // save the quantities picked on an item screen and go back to the list
  const saveItemPicks = (itemId, picks) => {
    setCart((prev) => pruneCart({ ...prev, [itemId]: picks }));
    setActiveScreen('inventory');
  };

  const changeCartQty = (itemId, lot, qty) => {
    setCart((prev) => ({ ...prev, [itemId]: { ...prev[itemId], [lot]: qty } }));
  };

  // Reserve everything in the cart — lowers stock, raises in use, shows the summary
  const reserveItems = () => {
    const lines = [];
    const nextInventory = inventory.map((item) => {
      const picks = cart[item.id] || {};
      const total = Object.values(picks).reduce((sum, qty) => sum + qty, 0);
      if (total === 0) return item;
      lines.push({
        id: item.id,
        label: countLabel(item, total),
        lots: Object.entries(picks).filter(([, qty]) => qty > 0).map(([lot, qty]) => `${qty} from ${lot}`),
      });
      return {
        ...item,
        inUse: item.inUse + total,
        lots: item.lots.map((entry) => ({ ...entry, qty: entry.qty - (picks[entry.lot] || 0) })),
      };
    });
    setInventory(nextInventory);
    setCart({});
    setReservation({
      lines,
      reservedBy: 'Crew 5',
      date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
    });
    setActiveScreen('reserveSuccess');
  };

  // cart flattened into rows for the confirm screen
  const confirmRows = inventory.flatMap((item) =>
    Object.entries(cart[item.id] || {}).map(([lot, qty]) => ({
      item,
      lot,
      qty,
      max: item.lots.find((entry) => entry.lot === lot)?.qty || 0,
    })));
  const selectedItem = inventory.find((item) => item.id === selectedItemId) || inventory[0];

  // open the details page for a zone from the Map
  const openZone = (zoneId) => {
    setSelectedZoneId(zoneId);
    setActiveScreen('zoneDetails');
  };

  // posts a notification from the add notification form
  const addNotification = (notification) => {
    setNotifications((prev) => [notification, ...prev]);
    setActiveScreen('alerts');
  };

  const submitDispatch = (issue) => {
    const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    setSubmittedIssue({ ...issue, submittedAt: time });
    // the dispatched issue also goes on the notifications list, only the newest one links to the crew flow
    setNotifications((prev) => [{
      id: `n-issue-${Date.now()}`,
      kind: 'issue',
      urgency: issue.urgency,
      title: issue.title,
      text: issue.description || `${issue.location} — assigned to ${issue.team}`,
      from: 'You',
      time,
      linkedIssue: true,
    }, ...prev.map((item) => ({ ...item, linkedIssue: false }))]);
    setIssueStatus('Dispatched');
    setStartedAt(null);
    setResolvedAt(null);
    setActiveScreen('alerts');
  };

  // simulated crew progress, timestamps  from user actions
  const startWork = () => {
    setStartedAt(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setIssueStatus('In Progress');
    setActiveScreen('incidentProgress');
  };

  const resolveIssue = () => {
    setResolvedAt(new Date().toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }));
    setIssueStatus('Resolved');
    setActiveScreen('issueResolved');
  };

  // opens the blocker sheet and remembers where to return on close
  const openIssue = (source) => {
    setIssueSource(source);
    setActiveScreen('blocker');
  };

  // derive which bottom menu tab should appear active
  
  const tabScreen = activeScreen === 'location'
    ? (TAB_SCREENS.tasks.includes(openedFrom.location) ? 'schedule' : 'tools')
    : activeScreen;
  const activeTab = Object.keys(TAB_SCREENS).find((tab) => TAB_SCREENS[tab].includes(tabScreen)) || 'home';

  // choose which screen component to display, passing navigate so screens can trigger transitions
  const renderCurrentScreen = () => {
    switch (activeScreen) {
      case 'home':      return <HomeScreen     navigate={navigate} openIssue={openIssue} />;
      case 'schedule':  return <ScheduleScreen  navigate={navigate} />;
      case 'location':  return <LocationScreen  navigate={navigate} returnScreen={openedFrom.location} />;
      case 'tools':     return <ToolsScreen     navigate={navigate} />;
      case 'map':       return <MapScreen       navigate={navigate} openZone={openZone} returnScreen={openedFrom.map} />;
      case 'zoneDetails':   return <ZoneDetailsScreen   navigate={navigate} zone={selectedZone} />;
      case 'zoneResources': return <ZoneResourcesScreen navigate={navigate} zone={selectedZone} />;
      case 'addResource':   return <AddResourceScreen   navigate={navigate} zone={selectedZone} onAdd={addResource} />;
      case 'inventory':      return <InventoryScreen      navigate={navigate} inventory={inventory} cart={cart} openItem={openItem} />;
      case 'inventoryItem':  return <InventoryItemScreen  navigate={navigate} item={selectedItem} picked={cart[selectedItem.id] || {}} onSave={saveItemPicks} />;
      case 'reserveConfirm': return <ReserveConfirmScreen navigate={navigate} rows={confirmRows} onChangeQty={changeCartQty} onReserve={reserveItems} />;
      case 'reserveSuccess': return <ReserveSuccessScreen navigate={navigate} summary={reservation} />;
      case 'knowledgeBase':  return <KnowledgeBaseScreen  navigate={navigate} entries={kbEntries} openTopic={openTopic} openEntry={openEntry} />;
      case 'knowledgeTopic': return <KnowledgeTopicScreen navigate={navigate} topic={selectedTopic} entries={kbEntries.filter((entry) => entry.topicId === selectedTopic.id)} openEntry={openEntry} />;
      case 'knowledgeEntry': return <KnowledgeEntryScreen navigate={navigate} entry={selectedEntry} topic={selectedTopic} />;
      case 'addEntry':       return <AddEntryScreen       navigate={navigate} returnScreen={openedFrom.addEntry || 'knowledgeBase'} defaultTopicId={openedFrom.addEntry === 'knowledgeTopic' ? selectedTopic.id : null} onAdd={addKbEntry} />;
      case 'notes':     return <NotesScreen     navigate={navigate} />;
      case 'checklist': return <ChecklistScreen navigate={navigate} openIssue={openIssue} />;
      case 'complete':  return <CompleteScreen  navigate={navigate} />;
      case 'issues':    return <IssuesScreen navigate={navigate} onDispatch={submitDispatch} />;
      case 'alerts':    return <AlertsScreen navigate={navigate} notifications={notifications} issue={submittedIssue} status={issueStatus} />;
      case 'addNotification': return <AddNotificationScreen navigate={navigate} onAdd={addNotification} />;
      case 'crewDetail': return <CrewDetailScreen navigate={navigate} issue={submittedIssue} onStartWork={startWork} status={issueStatus} />;
      case 'incidentProgress': return <IncidentProgressScreen navigate={navigate} issue={submittedIssue} startedAt={startedAt} onResolve={resolveIssue} />;
      case 'issueResolved': return <IssueResolvedScreen navigate={navigate} issue={submittedIssue} resolvedAt={resolvedAt} />;
      case 'blocker':   return <BlockerScreen   navigate={navigate} returnScreen={issueSource} />;
      default:          return <HomeScreen      navigate={navigate} openIssue={openIssue} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-3">

      {/* make it fit in smartphone screen size with rounded corners */}
      <div className="w-[375px] h-[780px] bg-surface rounded-[40px] border-8 border-black shadow-2xl flex flex-col overflow-hidden relative">

        {/* render active screen component, each screen draws its own header */}
        {renderCurrentScreen()}

        {/* bottom menu bar from Figma: Home, Alerts, Tasks, Tools */}
        <MenuBar activeTab={activeTab} onSelect={(tab) => setActiveScreen(TAB_START_SCREEN[tab])} />

      </div>
    </div>
  );
}
