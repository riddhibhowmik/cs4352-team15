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

export default function App() {
  // simple state to choose which screen to show
  const [activeScreen, setActiveScreen] = useState('home');

  // choose which screen component to display
  const renderCurrentScreen = () => {
    switch (activeScreen) {
      case 'home': return <HomeScreen />;
      case 'schedule': return <ScheduleScreen />;
      case 'location': return <LocationScreen />;
      case 'notes': return <NotesScreen />;
      case 'checklist': return <ChecklistScreen />;
      case 'complete': return <CompleteScreen />;
      case 'blocker': return <BlockerScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-3 font-sans text-slate-800">
      
      {/* screen selector buttons at top of browser for previewing */}
      <div className="mb-4 bg-slate-800 border border-slate-700 p-2 rounded-xl flex flex-wrap gap-1.5 justify-center max-w-lg text-xs">
        <button onClick={() => setActiveScreen('home')} className="px-2.5 py-1 bg-slate-700 text-white rounded">1. Home</button>
        <button onClick={() => setActiveScreen('schedule')} className="px-2.5 py-1 bg-slate-700 text-white rounded">2. Schedule</button>
        <button onClick={() => setActiveScreen('location')} className="px-2.5 py-1 bg-slate-700 text-white rounded">3. Location</button>
        <button onClick={() => setActiveScreen('notes')} className="px-2.5 py-1 bg-emerald-800 text-white rounded">3B. Notes</button>
        <button onClick={() => setActiveScreen('checklist')} className="px-2.5 py-1 bg-slate-700 text-white rounded">4. Checklist</button>
        <button onClick={() => setActiveScreen('complete')} className="px-2.5 py-1 bg-slate-700 text-white rounded">5. Complete</button>
        <button onClick={() => setActiveScreen('blocker')} className="px-2.5 py-1 bg-amber-700 text-white rounded">6. Blocker</button>
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

        {/* bottom navigation bar with clear active indicator on Shift */}
        <nav className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white px-6 py-2 flex justify-between items-center z-10">
          <div className="flex flex-col items-center gap-0.5 text-[#193a20] cursor-pointer">
            <div className="w-12 h-7 rounded-full bg-[#193a20] text-white flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold">Shift</span>
          </div>

          <div className="flex flex-col items-center gap-0.5 text-slate-700 cursor-pointer">
            <Trash2 className="w-4 h-4" />
            <span className="text-[10px] font-bold">Issues</span>
          </div>

          <div className="flex flex-col items-center gap-0.5 text-slate-700 cursor-pointer">
            <Map className="w-4 h-4" />
            <span className="text-[10px] font-bold">Map</span>
          </div>

          <div className="flex flex-col items-center gap-0.5 text-slate-700 cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="text-[10px] font-bold">Alerts</span>
          </div>
        </nav>

      </div>
    </div>
  );
}