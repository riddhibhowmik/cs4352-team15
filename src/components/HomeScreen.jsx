import ScreenHeader from './ScreenHeader';

// home screen showing shift greeting and core tasks
export default function HomeScreen({ navigate }) {
  return (
    <div className="screen">
      <ScreenHeader />

      <p className="helper-text">Monday, October 12</p>
      <h1 className="page-title mt-1">Field Operations Hub</h1>

      {/* officer greeting card */}
      <div className="card-featured mb-4">
        <h2 className="section-title">Welcome back, Officer!</h2>
        <p className="text-[14px] mt-1">Core tasks &amp; shared crew board ready.</p>
      </div>

      <p className="eyebrow">Select task or board</p>

      <div className="flex flex-col gap-3">
        {/* Quick status signoff */}
        <button onClick={() => navigate('schedule')} className="card-button border-2 border-brand-mid bg-brand-tint">
          <h3 className="card-title">Quick Status Signoff and Zone Check</h3>
          <p className="card-text">Confirm location, execute checklist, and sign off shift status</p>
        </button>

        {/* On-site incident logging */}
        <button onClick={() => navigate('issues')} className="card-button">
          <h3 className="card-title">On-Site Incident Logging and Crew Dispatch</h3>
          <p className="card-text">Log incident, attach photo/voice note, and dispatch crew</p>
        </button>

        {/* Protected zone work planning */}
        <button onClick={() => navigate('map')} className="card-button">
          <h3 className="card-title">Protected Zone Work Planning &amp; Veteran Knowledge</h3>
          <p className="card-text">Zone records, video/audio guides, equipment reservation, and crew board</p>
        </button>

        {/* Shared Crew Board button */}
        <button onClick={() => navigate('crewBoard')} className="card-button border border-brand-mid bg-brand-tint">
          <h3 className="card-title text-brand">Shared Crew Board</h3>
          <p className="card-text">View active team tasks, in progress items, and completed work</p>
        </button>
      </div>

      <div className="screen-footer">
        <button onClick={() => navigate('schedule')} className="btn-primary">
          Start Shift Schedule
        </button>
      </div>
    </div>
  );
}




