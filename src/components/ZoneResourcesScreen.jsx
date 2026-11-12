import { PlayCircle, Mic, FileText, StickyNote, Plus } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import AudioPlayer from './AudioPlayer';

// how each resource type is labeled and which icon it gets
const RESOURCE_TYPES = {
  video:   { label: 'Video guide', icon: PlayCircle },
  audio:   { label: 'Audio note',  icon: Mic },
  article: { label: 'Article',     icon: FileText },
  note:    { label: 'Field note',  icon: StickyNote },
};

// knowledge base resources (videos, voice memos, notes) people added for one zone
export default function ZoneResourcesScreen({ navigate, zone }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('zoneDetails')} backLabel="Back to Zone Details" rightLabel="Knowledge Base" />
      <h1 className="page-title mb-1">Zone Resources</h1>
      <p className="section-title mb-5">{zone.name}</p>

      {zone.resources.length === 0 ? (
        <div className="card">
          <p className="card-title">No resources yet</p>
          <p className="card-text">Guides, voice memos and notes added for this zone will show up here.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {zone.resources.map((resource) => {
            const { label, icon: Icon } = RESOURCE_TYPES[resource.type];
            return (
              <article key={resource.id} className={`card list-row items-start min-h-0 ${resource.isNew ? 'border-brand-mid' : ''}`}>
                <span className="tool-icon"><Icon className="w-6 h-6" /></span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="card-title break-words">{resource.title}</h2>
                    {resource.isNew && <span className="badge-active shrink-0">New</span>}
                  </div>
                  {resource.detail && <p className="text-[14px] font-bold mt-1">{resource.detail}</p>}
                  <p className="card-text">{label}{resource.length ? ` - ${resource.length}` : ''}</p>
                  {resource.body && <p className="body-text mt-2 whitespace-pre-wrap break-words">{resource.body}</p>}
                  {resource.type === 'audio' && <div className="mt-3"><AudioPlayer length={resource.length} /></div>}
                  <p className="helper-text mt-2">Added by {resource.addedBy}</p>
                </div>
              </article>
            );
          })}
        </div>
      )}

      <div className="screen-footer">
        <button type="button" onClick={() => navigate('addResource')} className="btn-primary">
          <Plus className="w-5 h-5" />
          Add Resource
        </button>
      </div>
    </div>
  );
}
