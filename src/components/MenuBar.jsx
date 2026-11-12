import homeIcon from '../assets/icons/nav-home.png';
import alertsIcon from '../assets/icons/nav-alerts.png';
import tasksIcon from '../assets/icons/nav-tasks.png';
import toolsIcon from '../assets/icons/nav-tools.png';

// the four tabs from the Figma menu bar, in figma order
const MENU_TABS = [
  { id: 'home',   label: 'Home',   icon: homeIcon },
  { id: 'alerts', label: 'Alerts', icon: alertsIcon },
  { id: 'tasks',  label: 'Tasks',  icon: tasksIcon },
  { id: 'tools',  label: 'Tools',  icon: toolsIcon },
];

// bottom menu bar, the active tab gets a white background behind its icon
export default function MenuBar({ activeTab, onSelect }) {
  return (
    <nav className="menu-dock" aria-label="Main menu">
      <div className="menu-bar">
        {MENU_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelect(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`menu-tab ${isActive ? 'menu-tab-active' : ''}`}
            >
              <span className="menu-tab-icon">
                <img src={tab.icon} alt="" className="w-[30px] h-[30px]" />
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
