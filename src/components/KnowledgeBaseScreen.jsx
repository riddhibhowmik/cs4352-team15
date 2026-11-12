import { useState } from 'react';
import { ChevronRight, Search, Plus } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import KnowledgeEntryCard from './KnowledgeEntryCard';
import { TOPICS } from '../data/knowledgeBase';

// knowledge base home: topics list, or matching entries while searching
export default function KnowledgeBaseScreen({ navigate, entries, openTopic, openEntry }) {
  const [query, setQuery] = useState('');
  const search = query.trim().toLowerCase();
  // search looks at titles and step text
  const matches = search
    ? entries.filter((entry) => [entry.title, ...entry.steps].some((text) => text.toLowerCase().includes(search)))
    : [];
  const topicName = (topicId) => TOPICS.find((topic) => topic.id === topicId)?.name;

  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('tools')} backLabel="Back to Tools" />
      <h1 className="page-title">Knowledge Base</h1>

      <label className="relative block mb-4">
        <span className="sr-only">Search the knowledge base</span>
        <input className="search-field" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides and steps" />
        <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
      </label>

      {search ? (
        <div className="flex flex-col gap-3">
          <p className="eyebrow mb-0">{matches.length} result{matches.length === 1 ? '' : 's'}</p>
          {matches.map((entry) => (
            <KnowledgeEntryCard key={entry.id} entry={entry} topicName={topicName(entry.topicId)} onOpen={() => openEntry(entry)} />
          ))}
          {matches.length === 0 && <p className="body-text">Nothing matches “{query}”. Try another word, or add a new entry.</p>}
        </div>
      ) : (
        <section className="list-panel pt-1">
          {TOPICS.map((topic) => {
            const count = entries.filter((entry) => entry.topicId === topic.id).length;
            return (
              <button key={topic.id} type="button" onClick={() => openTopic(topic.id)} className="list-panel-row py-3">
                <span className="min-w-0">
                  <span className="block">{topic.name}</span>
                  <span className="card-text block mt-0.5 font-normal">{count} entr{count === 1 ? 'y' : 'ies'}</span>
                </span>
                <ChevronRight className="w-5 h-5 text-ink-muted shrink-0" />
              </button>
            );
          })}
        </section>
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
