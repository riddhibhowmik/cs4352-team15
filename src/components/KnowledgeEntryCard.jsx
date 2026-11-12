import { PlayCircle, ListChecks, ChevronRight } from 'lucide-react';

// one knowledge base entry in a list: shows whether it has a video and how many steps
export default function KnowledgeEntryCard({ entry, topicName, onOpen }) {
  const Icon = entry.video ? PlayCircle : ListChecks;
  const stepsLabel = `${entry.steps.length} step${entry.steps.length === 1 ? '' : 's'}`;
  const meta = entry.video
    ? `Video${entry.video.length ? ` - ${entry.video.length}` : ''} + ${stepsLabel}`
    : `Steps only - ${stepsLabel}`;

  return (
    <button type="button" onClick={onOpen} className={`card-button list-row min-h-0 ${entry.isNew ? 'border-brand-mid' : ''}`}>
      <span className="tool-icon"><Icon className="w-6 h-6" /></span>
      <span className="flex-1 min-w-0">
        <span className="flex items-start justify-between gap-2">
          <span className="card-title break-words">{entry.title}</span>
          {entry.isNew && <span className="badge-active shrink-0">New</span>}
        </span>
        <span className="card-text block">{meta}</span>
        {topicName && <span className="helper-text block mt-1">{topicName}</span>}
        <span className="helper-text block mt-1">Added by {entry.addedBy}</span>
      </span>
      <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
    </button>
  );
}
