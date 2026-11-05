import React from 'react';
import { ArrowLeft } from 'lucide-react';

// crew detal screen
const zoneLabel = (location) => location?.split(' - ').at(-1) || location || 'Location not specified';
const isUrgent = (issue) => issue?.urgency?.toLowerCase().includes('urgent');
const badgeClass = (issue) => isUrgent(issue) ? 'text-[#ce3447] border-[#ce3447]' : 'text-[#275e38] border-[#739875]';
import { Play } from 'lucide-react';

export default function CrewDetailScreen({ navigate, issue, onStartWork, status }) {
  if (!issue) return <div className="p-6"><p>No dispatched issue yet.</p><button className="mt-4 underline" onClick={() => navigate('issues')}>Add Issue</button></div>;
  return <div className="flex-1 min-h-0 overflow-y-auto bg-white px-5 pt-12 pb-24 text-[#202a3a] flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <button onClick={() => navigate('alerts')} aria-label="Back to notifications" className="w-11 h-11 rounded-xl border border-[#dce6de] flex items-center justify-center"><ArrowLeft /></button>
      <span className="text-[12px] font-extrabold">PARKS CREW</span>
    </div>
    <h1 className="text-[34px] font-black mb-4">Crew Detail</h1>
    <article className="border-2 border-[#153b22] rounded-[19px] p-4 space-y-4">
      <span className={`inline-flex border rounded-lg px-2.5 py-1.5 text-[13px] font-extrabold ${badgeClass(issue)}`}>● {issue.urgency}</span>
      <h2 className="text-[24px] font-black leading-tight break-words">{issue.title}</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2 font-extrabold text-[13px]"><span>● {zoneLabel(issue.location)}</span><span>● {issue.team}</span></div>
      {issue.photo && <img src={issue.photo} alt="Issue photograph" className="w-full max-h-[170px] object-cover rounded-xl" />}
      {issue.description && <p className="text-[14px] leading-relaxed whitespace-pre-wrap">{issue.description}</p>}
      <p className="text-xs text-slate-600">Location: {issue.location}</p>
      {issue.hasRecording && <p className="text-xs font-semibold">Voice note attached (demo indicator)</p>}
    </article>
    <div className="mt-auto pt-5">
      <button onClick={status === 'Resolved' ? () => navigate('issueResolved') : status === 'In Progress' ? () => navigate('incidentProgress') : onStartWork} className="w-full rounded-xl bg-[#12371d] text-white py-4 font-extrabold text-[18px] flex items-center justify-center gap-3"><Play size={20}/>{status === 'Resolved' ? 'View Resolution' : status === 'In Progress' ? 'View Progress' : 'Start Work'}</button>
    </div>
  </div>;
}
