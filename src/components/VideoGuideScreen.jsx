import { Play, CheckCircle } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

// video guide screen — preview player and step-by-step instructions for working in the zone
export default function VideoGuideScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('veteranKnowledge')} backLabel="Back to Veteran Knowledge" rightLabel="Zone 5 - Veteran knowledge" />
      <h1 className="page-title">Video Guide</h1>
      <p className="page-subtitle">Working Around Wildflower Sprouts</p>

      {/* video player preview box */}
      <div className="video-player mb-5">
        <button type="button" className="video-play-btn" aria-label="Play video">
          <Play className="w-8 h-8 text-brand fill-brand ml-1" />
        </button>
        <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[12px] px-2 py-1 rounded-md">
          1:30
        </span>
      </div>

      {/* step list card */}
      <section className="card space-y-3 mb-6">
        <h2 className="eyebrow">Guide steps</h2>
        <div className="step-item">
          <span className="step-number">1</span>
          <p className="body-text">Check the flagged boundary before starting work.</p>
        </div>
        <div className="step-item">
          <span className="step-number">2</span>
          <p className="body-text">Stay on the trail with your tools at all times.</p>
        </div>
        <div className="step-item">
          <span className="step-number">3</span>
          <p className="body-text">Remove invasives by hand near seedlings.</p>
        </div>
        <p className="helper-text mt-2">This guide will stay linked to Zone 5 and the work plan for future reference.</p>
      </section>

      {/* done reviewing button */}
      <div className="screen-footer">
        <button type="button" onClick={() => navigate('veteranKnowledge')} className="btn-primary">
          Done Reviewing
        </button>
      </div>
    </div>
  );
}
