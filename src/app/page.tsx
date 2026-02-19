"use client";

import { useState } from "react";
import AdCard from "@/components/AdCard";
import { videoAds, textAds, retargetingAds, hotAds, type AdLayer, type AdFormat } from "@/data/ads";

type Tab = "all" | "video" | "text" | "retargeting" | "hot" | "deploy";

const tabs: { id: Tab; label: string; count?: number }[] = [
  { id: "all", label: "All Ads" },
  { id: "video", label: "Video Scripts", count: videoAds.length },
  { id: "text", label: "Text/Image", count: textAds.length },
  { id: "retargeting", label: "Retargeting", count: retargetingAds.length },
  { id: "hot", label: "Hot Retarget", count: hotAds.length },
  { id: "deploy", label: "Deployment Guide" },
];

const stats = [
  { label: "Video Scripts", value: videoAds.length, color: "text-purple-400" },
  { label: "Text/Image Ads", value: textAds.length, color: "text-emerald-400" },
  { label: "Retargeting", value: retargetingAds.length, color: "text-amber-400" },
  { label: "Hot Retarget", value: hotAds.length, color: "text-red-400" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [search, setSearch] = useState("");

  const allAds = [...videoAds, ...textAds, ...retargetingAds, ...hotAds];

  const filteredAds = allAds.filter((ad) => {
    if (activeTab === "deploy") return false;
    if (activeTab === "video" && ad.format !== "video") return false;
    if (activeTab === "text" && ad.format !== "text") return false;
    if (activeTab === "retargeting" && ad.layer !== "warm") return false;
    if (activeTab === "hot" && ad.layer !== "hot") return false;

    if (search) {
      const q = search.toLowerCase();
      return (
        ad.title.toLowerCase().includes(q) ||
        ad.angle.toLowerCase().includes(q) ||
        ad.emotionalState.toLowerCase().includes(q) ||
        (ad.headline?.toLowerCase().includes(q) ?? false)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                REI Transfer <span className="text-zinc-500">Marketing Materials</span>
              </h1>
              <p className="text-xs text-zinc-500 mt-0.5">
                Target: Google Ads Operators &middot; $5K–$15K/mo PPC
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        {/* Tabs + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-zinc-900"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <span className={`ml-1.5 text-xs ${activeTab === tab.id ? "text-zinc-500" : "text-zinc-600"}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
          {activeTab !== "deploy" && (
            <div className="sm:ml-auto relative">
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ads..."
                className="w-full sm:w-64 rounded-lg border border-zinc-800 bg-zinc-900 pl-9 pr-4 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600"
              />
            </div>
          )}
        </div>

        {/* Ad Cards */}
        {activeTab !== "deploy" && (
          <div className="space-y-3">
            {activeTab === "all" && (
              <>
                <SectionHeader title="Layer 1 — Cold Traffic: Video Ads" count={videoAds.length} color="blue" />
                {videoAds
                  .filter((ad) => !search || filteredAds.includes(ad))
                  .map((ad) => <AdCard key={ad.id} ad={ad} />)}

                <SectionHeader title="Layer 1 — Cold Traffic: Text/Image Ads" count={textAds.length} color="emerald" />
                {textAds
                  .filter((ad) => !search || filteredAds.includes(ad))
                  .map((ad) => <AdCard key={ad.id} ad={ad} />)}

                <SectionHeader title="Layer 2 — Warm Retargeting" count={retargetingAds.length} color="amber" />
                {retargetingAds
                  .filter((ad) => !search || filteredAds.includes(ad))
                  .map((ad) => <AdCard key={ad.id} ad={ad} />)}

                <SectionHeader title="Layer 3 — Hot Retargeting" count={hotAds.length} color="red" />
                {hotAds
                  .filter((ad) => !search || filteredAds.includes(ad))
                  .map((ad) => <AdCard key={ad.id} ad={ad} />)}
              </>
            )}
            {activeTab !== "all" && filteredAds.map((ad) => <AdCard key={ad.id} ad={ad} />)}
            {filteredAds.length === 0 && activeTab !== "all" && (
              <p className="text-center text-zinc-500 py-12">No ads match your search.</p>
            )}
          </div>
        )}

        {/* Deployment Guide */}
        {activeTab === "deploy" && <DeploymentGuide />}
      </div>
    </div>
  );
}

function SectionHeader({ title, count, color }: { title: string; count: number; color: string }) {
  const colors: Record<string, string> = {
    blue: "border-blue-500/30 text-blue-400",
    emerald: "border-emerald-500/30 text-emerald-400",
    amber: "border-amber-500/30 text-amber-400",
    red: "border-red-500/30 text-red-400",
  };
  return (
    <div className={`mt-8 mb-3 flex items-center gap-3 border-b ${colors[color]?.split(" ")[0] || "border-zinc-800"} pb-2`}>
      <h2 className={`text-sm font-semibold uppercase tracking-wider ${colors[color]?.split(" ")[1] || "text-zinc-400"}`}>
        {title}
      </h2>
      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">{count}</span>
    </div>
  );
}

function DeploymentGuide() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Testing Sequence */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-xs font-bold text-blue-400">1</span>
          Testing Sequence
        </h2>
        <div className="space-y-2">
          {[
            { pair: 'Video #1 "The Google Cliff" + Text #1 "The AI Cliff"', note: "Lead with AI disruption. Novel, data-backed, creates urgency." },
            { pair: 'Video #2 "The $80 Click" + Text #3 "The Compounding Asset"', note: "Unit economics comparison. Let the math sell." },
            { pair: 'Video #7 "The PPC Treadmill" + Text #5 "The Auction You Can\'t Win"', note: "Emotional + structural. Hits operators who feel it but can't name it." },
          ].map((item, i) => (
            <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <p className="text-sm font-semibold text-white">{i + 1}. {item.pair}</p>
              <p className="text-xs text-zinc-400 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-zinc-900/50 p-4 space-y-1.5 text-sm text-zinc-400">
          <p>4. Launch 3 video + 2 text ads simultaneously</p>
          <p>5. Run 7 days at $50–$100/day per ad set</p>
          <p>6. Kill any ad above 2x target CPL after 1,000+ impressions</p>
          <p>7. Double budget on winner. Launch new variation of winning hook.</p>
          <p>8. Add retargeting layers at Day 7</p>
        </div>
      </section>

      {/* Audience Targeting */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20 text-xs font-bold text-purple-400">2</span>
          Audience Targeting (PPC-Specific)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "Interest Stacking", value: "Google Ads, PPC, pay-per-click, digital marketing, SEO + BiggerPockets, PropStream, BatchLeads, Carrot, REISkip, DealMachine, real estate investing, wholesaling, house flipping" },
            { label: "Behavioral", value: "Business owners, high-income ($150K+), real estate industry" },
            { label: "Custom Audiences", value: "Upload email lists of operators known to run Google PPC (CRM, event attendees, coaching groups, REI mastermind lists)" },
            { label: "Lookalike", value: "1% lookalike from converted PPC-switcher clients" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">{item.label}</p>
              <p className="text-sm text-zinc-300">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agreement Chain */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-xs font-bold text-amber-400">3</span>
          Messaging Hierarchy (Agreement Chain)
        </h2>
        <div className="space-y-1">
          {[
            { num: 1, text: '"My PPC costs have been going up"', note: "they already know this" },
            { num: 2, text: '"It\'s not my campaigns — it\'s the platform"', note: "the AI/zero-click data" },
            { num: 3, text: '"Google\'s structural decline means PPC will only get worse"', note: "the trend" },
            { num: 4, text: '"There\'s a channel where competition is lower and costs are falling"', note: "mechanism" },
            { num: 5, text: '"Other operators like me have already made this shift"', note: "proof" },
            { num: 6, text: '"The cost of waiting is higher than the cost of switching"', note: "urgency" },
            { num: 7, text: '"A free analysis is low-risk — I should at least see the numbers"', note: "CTA" },
          ].map((item, i, arr) => (
            <div key={item.num} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-white">
                  {item.num}
                </div>
                {i < arr.length - 1 && <div className="h-4 w-px bg-zinc-700" />}
              </div>
              <div className="pt-1.5">
                <p className="text-sm font-medium text-white">{item.text}</p>
                <p className="text-xs text-zinc-500">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language Rules */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-xs font-bold text-emerald-400">4</span>
          Language Rules for Google Ads Operators
        </h2>
        <div className="space-y-2">
          {[
            { rule: 'Never say "Facebook ads"', detail: 'Always qualify as "pre-distressed Meta targeting" — these operators have already dismissed "Facebook leads" as low-quality' },
            { rule: "Always lead with data", detail: "This audience is analytical. Stats and math convert them. Emotion alone won't." },
            { rule: "Respect their intelligence", detail: "They've been running PPC for years. Don't talk down. Acknowledge PPC worked. The argument is the platform changed." },
            { rule: "Two CTAs always", detail: "Include anti-CTA showing cost of staying on PPC. Make inaction feel expensive." },
            { rule: 'Position as "add, then shift"', detail: "Don't ask them to kill PPC overnight. Offer side-by-side test. Let data make the argument." },
            { rule: "Use their language", detail: "CPC, CPL, ROAS, conversion rate, quality score, search terms, ad rank, impression share." },
            { rule: "Never oversell Meta", detail: "Position as supplement first, replacement later. Let data drive the shift." },
          ].map((item) => (
            <div key={item.rule} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <p className="text-sm font-semibold text-white">{item.rule}</p>
              <p className="text-xs text-zinc-400 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/20 text-xs font-bold text-red-400">5</span>
          Metrics to Track
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Metric</th>
                <th className="py-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-emerald-500">Target</th>
                <th className="py-2 text-left text-xs font-semibold uppercase tracking-wider text-red-500">Kill Threshold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {[
                { metric: "CPM", target: "$15–$40", kill: ">$60 (audience too narrow or ad fatigue)" },
                { metric: "CTR (link)", target: "1.5%+", kill: "<0.8% after 2,000 impressions" },
                { metric: "CPL (lead form)", target: "$30–$75", kill: ">$150" },
                { metric: "Landing page conversion", target: "15–25%", kill: "<8%" },
                { metric: "Cost per booked call", target: "$150–$400", kill: ">$600" },
                { metric: "Show rate", target: "65–80%", kill: "<50% (fix confirmation sequence)" },
              ].map((row) => (
                <tr key={row.metric}>
                  <td className="py-2.5 pr-4 font-medium text-white">{row.metric}</td>
                  <td className="py-2.5 pr-4 text-emerald-400">{row.target}</td>
                  <td className="py-2.5 text-red-400">{row.kill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Creative Guidelines */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-xs font-bold text-cyan-400">6</span>
          Creative Guidelines
        </h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { label: "Video", value: "Phone or mirrorless in real environment. NOT studio. NOT stock footage." },
            { label: "Lighting", value: "Natural or ring light. Warm tones." },
            { label: "Captions", value: "Always on. 65%+ watch with sound off. Bold, high-contrast." },
            { label: "Thumbnails", value: "Hook text visible at small size. Face in frame." },
            { label: "Static Images", value: "Clean, high contrast, one focal point. Stats in large type." },
            { label: "Data Viz", value: "Charts, graphs, side-by-side comparisons. This audience responds to data." },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-zinc-900/50 p-3">
              <p className="text-xs font-semibold text-zinc-400">{item.label}</p>
              <p className="text-sm text-zinc-300 mt-0.5">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Copy Rules */}
      <section className="pb-12">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 text-xs font-bold text-violet-400">7</span>
          Copy Rules
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Hook first — 3-Step Formula",
            "But/Therefore — never 'and then'",
            "Jagged edge — vary sentence lengths",
            "One friend — talk to one person",
            "Specificity — dollars, %, timeframes",
            "Two CTAs — always CTA + anti-CTA",
            "Dimensional copy — sensory detail",
            "Conversational authority — no hype",
          ].map((rule) => (
            <span key={rule} className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-300">
              {rule}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
