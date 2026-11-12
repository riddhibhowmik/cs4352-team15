import ScreenHeader from './ScreenHeader';
import VideoPlayer from './VideoPlayer';

// Knowledge entry screen —  video, then the numbered steps
export default function KnowledgeEntryScreen({ navigate, entry, topic }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('knowledgeTopic')} backLabel={`Back to ${topic.name}`} rightLabel="Knowledge Base" />
      <p className="eyebrow text-ink-muted mb-1">{topic.name}</p>
      <h1 className="page-title mb-1">{entry.title}</h1>
      <p className="page-subtitle mt-0">
        {entry.video ? `Video guide${entry.video.length ? ` - ${entry.video.length}` : ''} and steps` : 'Step-by-step guide'}
      </p>

      {entry.video && (
        <div className="mb-5">
          <VideoPlayer video={entry.video} title={entry.title} />
        </div>
      )}

      {/* guide steps */}
      <section className="card">
        <h2 className="section-title mb-4">Guide Steps</h2>
        <ol className="space-y-3">
          {entry.steps.map((step, index) => (
            <li key={index} className="step-item">
              <span className="step-number">{index + 1}</span>
              <span className="body-text pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <p className="helper-text mt-4">Added by {entry.addedBy}</p>
    </div>
  );
}
