import { Mic } from 'lucide-react';
import ScreenHeader from './ScreenHeader';
import AudioPlayer from './AudioPlayer';

// audio note preview screen — supervisor voice note playback and transcript
export default function AudioNoteScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader onBack={() => navigate('veteranKnowledge')} backLabel="Back to Veteran Knowledge" rightLabel="Zone 5 - Veteran knowledge" />
      <h1 className="page-title">Supervisor Note</h1>
      <p className="page-subtitle">Field supervisor audio guide</p>

      {/* audio player card */}
      <section className="card-notice space-y-3 mb-6">
        <div className="flex items-center gap-2">
          <Mic className="w-5 h-5 text-brand" />
          <h2 className="section-title text-brand text-[16px]">Field supervisor - 0:30</h2>
        </div>
        <AudioPlayer length="0:30" />
      </section>

      {/* supervisor transcript card */}
      <section className="card mb-6 space-y-2">
        <h2 className="eyebrow">Supervisor note</h2>
        <p className="body-text">
          Keep everyone on the marked trail. Avoid the seedlings beside the east path, and make sure check the flagged area before unloading tools!
        </p>
        <p className="helper-text pt-2">Saved to Zone 5. Available to the next crew.</p>
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
