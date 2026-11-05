import React from 'react';
import { Check, Trees } from 'lucide-react';

// issue resolved screen
export default function IssueResolvedScreen({ navigate, issue, resolvedAt }) {
  if (!issue) return <div className="p-6">No resolved issue yet.</div>;
  return <div className="flex-1 min-h-0 overflow-y-auto bg-white px-5 pt-7 pb-24 text-[#202a3a] flex flex-col">
    <div className="flex items-center justify-between mb-8"><div className="flex items-center gap-2 font-black text-[16px]"><Trees className="w-5 h-5" />BioTracker</div><span className="text-[12px] font-extrabold">PARKS CREW</span></div>
    <div className="flex flex-col items-center text-center"><div className="w-[112px] h-[112px] rounded-full bg-[#a5baa1] border-2 border-[#193a20] flex items-center justify-center text-[#12371d]"><Check size={76} strokeWidth={2.2}/></div><h1 className="text-[30px] font-black leading-tight mt-6">Issue Resolved &amp; Closed</h1><p className="text-[16px] mt-3 break-words">{issue.title}</p></div>
    <section className="border border-[#dce6de] rounded-2xl p-4 mt-6 space-y-3 text-[13px]">
      <div className="flex justify-between gap-3 border-b border-[#dce6de] pb-3"><span>Closed at</span><strong className="text-right">{resolvedAt || 'Just now'}</strong></div>
      <div className="flex justify-between gap-3"><span>Issue</span><strong className="text-right break-words">{issue.title}</strong></div>
      <div className="flex justify-between gap-3"><span>Resolved by</span><strong className="text-right">{issue.team}</strong></div>
      <div className="flex justify-between gap-3"><span>Location</span><strong className="text-right">{issue.location}</strong></div>
    </section>
    <div className="mt-auto pt-6"><button onClick={() => navigate('home')} className="w-full rounded-xl bg-[#12371d] text-white py-4 font-extrabold text-[18px]">Return to Home</button><p className="text-center mt-3 text-[12px]">All changes saved, crew dashboard updated</p></div>
  </div>;
}
