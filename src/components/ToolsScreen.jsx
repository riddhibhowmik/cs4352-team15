import { Map as MapIcon, Package, BookOpen, ChevronRight } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// the three tools from the Figma "Tools" screen, screen is null until that screen is built
const TOOLS = [
  { id: 'map',       label: 'Map',            text: 'Zones, boundaries and site warnings', icon: MapIcon,  screen: 'map' },
  { id: 'inventory', label: 'Inventory',      text: 'Check stock and reserve equipment',   icon: Package,  screen: 'inventory' },
  { id: 'knowledge', label: 'Knowledge Base', text: 'Guides for planting, pests and more', icon: BookOpen, screen: 'knowledgeBase' },
];

// tools hub opened from the Tools tab
export default function ToolsScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader />
      <h1 className="page-title">Tools</h1>

      <div className="flex flex-col gap-3">
        {TOOLS.map(({ id, label, text, icon: Icon, screen }) => (
          <button
            key={id}
            type="button"
            onClick={() => screen && navigate(screen)}
            disabled={!screen}
            className="card-button list-row disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="tool-icon"><Icon className="w-7 h-7" /></span>
            <span className="flex-1 min-w-0">
              <span className="section-title block">{label}</span>
              <span className="card-text block">{screen ? text : 'Coming soon'}</span>
            </span>
            {screen && <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />}
          </button>
        ))}
      </div>
    </div>
  );
}
