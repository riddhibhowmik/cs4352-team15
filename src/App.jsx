import React, { useState } from 'react';
import { Trees, Calendar, Trash2, Map, Bell } from 'lucide-react';

// import individual screen components
import HomeScreen from './components/HomeScreen';
import ScheduleScreen from './components/ScheduleScreen';
import LocationScreen from './components/LocationScreen';
import NotesScreen from './components/NotesScreen';
import ChecklistScreen from './components/ChecklistScreen';
import CompleteScreen from './components/CompleteScreen';
import BlockerScreen from './components/BlockerScreen';

// screens that belong to the Shift workflow (Calendar tab active)
const SHIFT_SCREENS  = ['home', 'schedule', 'notes', 'checklist', 'complete'];
// screens that belong to Issues (Trash2 tab active)
const ISSUES_SCREENS = ['blocker'];
// screens that belong to Map (Map tab active)
const MAP_SCREENS    = ['location'];

export default function App() {
  const openIssue = (source) => {
  setIssueSource(source);
  setActiveScreen('blocker');
};
  // simple state to choose which screen to show
  const [activeScreen, setActiveScreen] = useState('home');
  const [issueSource, setIssueSource] = useState('home');

  // derive which bottom-nav tab should appear active
  const navTab = SHIFT_SCREENS.includes(activeScreen)
    ? 'shift'
    : ISSUES_SCREENS.includes(activeScreen)
    ? 'issues'
    : MAP_SCREENS.includes(activeScreen)
    ? 'map'
    : 'shift'; // fallback

  // choose which screen component to display, passing navigate so screens can trigger transitions
  const renderCurrentScreen = () => {
    switch (activeScreen) {
      case 'home':      return <HomeScreen     navigate={setActiveScreen} openIssue={openIssue} />;
      case 'schedule':  return <ScheduleScreen  navigate={setActiveScreen} />;
      case 'location':  return <LocationScreen  navigate={setActiveScreen} />;
      case 'notes':     return <NotesScreen     navigate={setActiveScreen} />;
      case 'checklist': return <ChecklistScreen navigate={setActiveScreen} openIssue={openIssue} />;
      case 'complete':  return <CompleteScreen  navigate={setActiveScreen} />;
      case 'blocker':
  return (
    <BlockerScreen
      navigate={setActiveScreen}
      returnScreen={issueSource}
    />
  );
      default:          return <HomeScreen      navigate={setActiveScreen} openIssue={openIssue} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-3 font-sans text-slate-800">

      {/* screen selector buttons at top of browser for previewing */}
      <div className="mb-4 bg-slate-800 border border-slate-700 p-2 rounded-xl flex flex-wrap gap-1.5 justify-center max-w-lg text-xs">
        <button onClick={() => setActiveScreen('home')}      className="px-2.5 py-1 bg-slate-700 text-white rounded">1. Home</button>
        <button onClick={() => setActiveScreen('schedule')}  className="px-2.5 py-1 bg-slate-700 text-white rounded">2. Schedule</button>
        <button onClick={() => setActiveScreen('location')}  className="px-2.5 py-1 bg-slate-700 text-white rounded">3. Location</button>
        <button onClick={() => setActiveScreen('notes')}     className="px-2.5 py-1 bg-emerald-800 text-white rounded">3B. Notes</button>
        <button onClick={() => setActiveScreen('checklist')} className="px-2.5 py-1 bg-slate-700 text-white rounded">4. Checklist</button>
        <button onClick={() => setActiveScreen('complete')}  className="px-2.5 py-1 bg-slate-700 text-white rounded">5. Complete</button>
        <button onClick={() => setActiveScreen('blocker')}   className="px-2.5 py-1 bg-amber-700 text-white rounded">6. Blocker</button>
      </div>

      {/* make it fit in smartphone screen size with rounded corners */}
      <div className="w-[375px] h-[780px] bg-white rounded-[40px] border-8 border-black shadow-2xl flex flex-col overflow-hidden relative">

        {/* permanent top header with tree icon */}
        <div className="px-6 pt-5 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 text-base">
            <Trees className="w-5 h-5 text-slate-900" />
            <span>BioTracker</span>
          </div>
          <span className="text-[10px] font-black text-slate-900 tracking-wider">
            PARKS CREW
          </span>
        </div>

        {/* render active screen component */}
        {renderCurrentScreen()}

        {/* bottom navigation bar — active tab highlighted with pill, updates with activeScreen */}
        <nav className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white px-6 py-2 flex justify-between items-center z-10">

          {/* Shift tab — navigates to home (start of shift flow) */}
          <button
            onClick={() => setActiveScreen('home')}
            className={`flex flex-col items-center gap-0.5 ${navTab === 'shift' ? 'text-[#193a20]' : 'text-slate-500'}`}
          >
            {navTab === 'shift' ? (
              <div className="w-12 h-7 rounded-full bg-[#193a20] text-white flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            ) : (
              <Calendar className="w-4 h-4" />
            )}
            <span className={`text-[10px] ${navTab === 'shift' ? 'font-extrabold' : 'font-bold'}`}>Shift</span>
          </button>

          {/* Issues tab — navigates to the blocker / issue-reporting screen */}
          <button
            onClick={() => openIssue('home')}
            className={`flex flex-col items-center gap-0.5 ${navTab === 'issues' ? 'text-[#193a20]' : 'text-slate-500'}`}
          >
            {navTab === 'issues' ? (
              <div className="w-12 h-7 rounded-full bg-[#193a20] text-white flex items-center justify-center">
                <Trash2 className="w-4 h-4" />
              </div>
            ) : (
              <Trash2 className="w-4 h-4" />
            )}
            <span className={`text-[10px] ${navTab === 'issues' ? 'font-extrabold' : 'font-bold'}`}>Issues</span>
          </button>

          {/* Map tab — navigates to the location / map screen */}
          <button
            onClick={() => setActiveScreen('location')}
            className={`flex flex-col items-center gap-0.5 ${navTab === 'map' ? 'text-[#193a20]' : 'text-slate-500'}`}
          >
            {navTab === 'map' ? (
              <div className="w-12 h-7 rounded-full bg-[#193a20] text-white flex items-center justify-center">
                <Map className="w-4 h-4" />
              </div>
            ) : (
              <Map className="w-4 h-4" />
            )}
            <span className={`text-[10px] ${navTab === 'map' ? 'font-extrabold' : 'font-bold'}`}>Map</span>
          </button>

          {/* Alerts tab — placeholder, no screen yet; returns user to home */}
          <button
            onClick={() => setActiveScreen('home')}
            className="flex flex-col items-center gap-0.5 text-slate-500"
          >
            <Bell className="w-4 h-4" />
            <span className="text-[10px] font-bold">Alerts</span>
          </button>

        </nav>

      </div>
    </div>
  );
}
