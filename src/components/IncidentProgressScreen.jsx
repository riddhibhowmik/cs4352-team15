import React from 'react';
import { ArrowLeft } from 'lucide-react';

// incidentprogress screen
const zoneLabel = (location) => location?.split(' - ').at(-1) || location || 'Location not specified';
const isUrgent = (issue) => issue?.urgency?.toLowerCase().includes('urgent');
const badgeClass = (issue) => isUrgent(issue) ? 'text-[#ce3447] border-[#ce3447]' : 'text-[#275e38] border-[#739875]';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function IncidentProgressScreen({ navigate, issue, startedAt, onResolve }) {
  if (!issue) return <div className="p-6">No dispatched issue yet.</div>;
  return <div className="flex-1 min-h-0 overflow-y-auto bg-white px-5 pt-12 pb-24 text-[#202a3a] flex flex-col">
    <div className="flex items-center justify-between mb-5"><button onClick={() => navigate('crewDetail')} aria-label="Back to crew detail" className="w-11 h-11 rounded-xl border border-[#dce6de] flex items-center justify-center"><ArrowLeft /></button><span className="text-[12px] font-extrabold">PARKS CREW</span></div>
    <div className="flex items-start justify-between gap-2 mb-4"><h1 className="text-[27px] font-black leading-tight">Incident Progress</h1><span className="shrink-0 bg-[#527d4b] text-[#142f19] rounded-lg px-2 py-1 font-extrabold text-[12px]">● In Progress</span></div>
    <h2 className="text-[23px] font-black leading-tight break-words">{issue.title}</h2>
    <p className="text-[14px] mt-2 mb-4">{issue.team} - Started {startedAt || 'recently'}</p>
    <section className="border border-[#dce6de] rounded-[20px] p-4 space-y-4">
      <div className="flex items-center justify-between font-black text-[13px]"><span>UPDATE LOG</span></div>
      <div><h3 className="font-black text-[#143b21]">Work underway</h3><p className="text-[13px] mt-1">{issue.team} is responding at {issue.location}.</p></div>
      {issue.photo && <img src={issue.photo} className="rounded-xl w-full max-h-[170px] object-cover" alt="Submitted incident photograph" />}
      <div className="rounded-xl bg-[#e3f0e0] border border-[#bfd6b9] px-4 py-5 text-center text-[#183a20]"><MapPin className="mx-auto mb-1" /><span className="font-bold text-[13px]">{issue.location}</span><p className="text-[11px] mt-1">Selected zone</p></div>
      <div className="border-t border-[#dce6de] pt-3"><h3 className="font-black">Work started <span className="float-right font-bold text-[12px]">{startedAt || 'Now'}</span></h3><p className="text-[13px] mt-1">Assigned to {issue.team}.</p></div>
      {issue.description && <p className="text-[13px] whitespace-pre-wrap"><strong>Reported notes:</strong> {issue.description}</p>}
    </section>
    <button onClick={onResolve} className="mt-auto w-full rounded-xl bg-[#12371d] py-4 text-white font-extrabold text-[18px] mt-5">Mark as Resolved</button>
  </div>;
}
