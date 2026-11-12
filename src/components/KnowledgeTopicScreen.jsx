import { Plus } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import KnowledgeEntryCard from './KnowledgeEntryCard';

// all entries for one topic
export default function KnowledgeTopicScreen({ navigate, topic, entries, openEntry }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('knowledgeBase')} backLabel="Back to Knowledge Base" rightLabel="Knowledge Base" />
      <h1 className="page-title">{topic.name}</h1>

      {entries.length === 0 ? (
        <div className="card">
          <p className="card-title">No entries yet</p>
          <p className="card-text">Be the first to share what you know about this topic.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {entries.map((entry) => (
            <KnowledgeEntryCard key={entry.id} entry={entry} onOpen={() => openEntry(entry)} />
          ))}
        </div>
      )}

      <div className="screen-footer">
        <button type="button" onClick={() => navigate('addEntry')} className="btn-primary">
          <Plus className="w-5 h-5" />
          Add Entry
        </button>
      </div>
    </div>
  );
}
