import ScreenHeader from './ScreenHeader';

// home screen showing shift greeting and task choices
export default function HomeScreen({ navigate, openIssue }) {
  return (
    <div className="screen">
      <ScreenHeader />

      <p className="helper-text">Monday, October 12</p>
      <h1 className="page-title mt-1">Field Operations Hub</h1>

      {/* officer greeting card */}
      <div className="card-featured mb-5">
        <h2 className="section-title">Welcome back, Officer!</h2>
        <p className="text-[14px] mt-1">3 active tasks today.</p>
      </div>

      <p className="eyebrow">Choose a workflow task</p>

      <div className="flex flex-col gap-3">
        {/* Zone 4 mowing card — starts the main shift workflow */}
        <button onClick={() => navigate('schedule')} className="card-button border-2 border-brand-mid bg-brand-tint">
          <h3 className="card-title">Zone 4 - Routine Mowing and Inspection</h3>
          <p className="card-text">Confirm location, execute, and report any blockers</p>
        </button>

        {/* Report Incident card — navigates directly to the issue reporting screen */}
        <button onClick={() => openIssue('home')} className="card-button">
          <h3 className="card-title">Report Incident/Log New Issue</h3>
          <p className="card-text">Log an invasive species, equipment breakage, or get crews dispatched</p>
        </button>

        {/* Protected Zones card — navigates to the map / location screen */}
        <button onClick={() => navigate('map')} className="card-button">
          <h3 className="card-title">Identify Protected Zones and Check Equipment</h3>
          <p className="card-text">Check maps, inspect boundaries, and reserve tools</p>
        </button>
      </div>

      {/* start shift button — navigates to the daily schedule */}
      <div className="screen-footer">
        <button onClick={() => navigate('schedule')} className="btn-primary">
          Start Shift
        </button>
      </div>
    </div>
  );
}
