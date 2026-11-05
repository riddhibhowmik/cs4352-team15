import React, { useState } from 'react';
import { ArrowLeft, BellRing, ImageOff } from 'lucide-react';

// the card uses data inputted in the issuescreen
export default function AlertsScreen({ navigate, issue, status }) {
  const isUrgent = issue?.urgency?.toLowerCase().includes('urgent');
  const zone = issue?.location?.split(' - ').at(-1) || issue?.location;
  const statusLabel = status === 'Dispatched' ? `Dispatched to ${issue?.team}`
    : status === 'In Progress' ? `${issue?.team} is working on it` : `${issue?.team} completed the issue`;

  return (
    <div className="flex-1 min-h-0 overflow-y-auto bg-white px-5 pt-12 pb-24 text-[#202a3a]">
      <div className="flex items-center justify-between mb-5">
        <button type="button" onClick={() => navigate('home')} aria-label="Back to Home"
          className="w-10 h-10 rounded-[14px] border border-[#dce6de] flex items-center justify-center">
          <ArrowLeft className="w-6 h-6" strokeWidth={1.6} />
        </button>
        <span className="text-[12px] font-extrabold tracking-wide">PARKS CREW</span>
      </div>
      <h1 className="text-[31px] font-black leading-tight mb-5">Notifications</h1>
      {!issue ? (
        <div className="rounded-2xl border border-[#dce6de] p-5 space-y-3">
          <p className="font-bold">No issues dispatched yet.</p>
          <p className="text-sm text-slate-600">Create an issue to see its crew assignment and status here.</p>
          <button onClick={() => navigate('issues')} className="rounded-xl bg-[#12371d] text-white px-4 py-3 font-bold">Add Issue</button>
        </div>
      ) : (
        <>
          <div className="rounded-[14px] border-2 border-[#18391f] bg-[#a6bda3] px-4 py-4 mb-4">
            <div className="flex gap-2 items-center text-[#14341d] font-black text-[20px] leading-tight">
              <BellRing className="w-6 h-6 shrink-0" /> New Issue Shared
            </div>
            <p className="mt-2 text-[14px] font-medium">{statusLabel}</p>
          </div>

          <article className="border border-[#dce6de] rounded-[20px] p-4 mb-4">
            <div className="flex justify-between items-center gap-2 mb-4">
              <span className={`text-[13px] font-extrabold rounded-lg px-2 py-1 border ${isUrgent ? 'border-[#d63d50] text-[#cd3349]' : 'border-[#739875] text-[#254c2b]'}`}>
                ● {issue.urgency}
              </span>
              <span className="font-extrabold text-[13px]">{issue.submittedAt}</span>
            </div>
            <h2 className="font-black text-[23px] leading-tight mb-4 break-words">{issue.title}</h2>
            {issue.photo && <img src={issue.photo} alt="Photo attached to the issue" className="w-full h-[126px] object-cover rounded-xl mb-4" />}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-extrabold">
              <span>● {zone}</span><span>● {issue.team}</span>
            </div>
          </article>

          <div className="mt-4">
            <button type="button" onClick={() => navigate(status === 'Resolved' ? 'issueResolved' : status === 'In Progress' ? 'incidentProgress' : 'crewDetail')}
              className="w-full py-3.5 rounded-[14px] bg-[#12371d] text-white text-[17px] font-extrabold flex items-center justify-center">
              View Issue
            </button>
            <p className="text-center text-[13px] font-medium mt-2">Sent to crew dashboard</p>
          </div>
        </>
      )}
    </div>
  );
}
