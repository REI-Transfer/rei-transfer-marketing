"use client";

import { useState, useEffect } from "react";
import AdCard from "@/components/AdCard";
import SellerScriptCard from "@/components/SellerScriptCard";
import { videoAds, textAds, retargetingAds, hotAds } from "@/data/ads";
import { vslScripts, thankYouScripts, faqScripts, allSellerScripts } from "@/data/sellerScripts";

type Tab = "all" | "video" | "text" | "retargeting" | "hot" | "seller" | "deploy";

const STORAGE_KEY = "rei-transfer-completed-ads";

const tabs: { id: Tab; label: string; count?: number }[] = [
  { id: "all", label: "All Ads" },
  { id: "video", label: "Video Scripts", count: videoAds.length },
  { id: "text", label: "Text/Image", count: textAds.length },
  { id: "retargeting", label: "Retargeting", count: retargetingAds.length },
  { id: "hot", label: "Hot Retarget", count: hotAds.length },
  { id: "seller", label: "Seller Scripts", count: allSellerScripts.length },
  { id: "deploy", label: "Deployment Guide" },
];

const allAds = [...videoAds, ...textAds, ...retargetingAds, ...hotAds];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [search, setSearch] = useState("");
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [hideCompleted, setHideCompleted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCompletedIds(new Set(parsed));
        }
      } catch {
        // ignore invalid JSON
      }
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedIds]));
    }
  }, [completedIds, hydrated]);

  const toggleComplete = (id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allItems = [...allAds.map(a => a.id), ...allSellerScripts.map(s => s.id)];
  const completedCount = allItems.filter(id => completedIds.has(id)).length;
  const totalCount = allItems.length;
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredAds = allAds.filter((ad) => {
    if (activeTab === "deploy" || activeTab === "seller") return false;
    if (activeTab === "video" && ad.format !== "video") return false;
    if (activeTab === "text" && ad.format !== "text") return false;
    if (activeTab === "retargeting" && ad.layer !== "warm") return false;
    if (activeTab === "hot" && ad.layer !== "hot") return false;

    if (hideCompleted && completedIds.has(ad.id)) return false;

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

  const filteredSellerScripts = allSellerScripts.filter((s) => {
    if (hideCompleted && completedIds.has(s.id)) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        s.title.toLowerCase().includes(q) ||
        s.purpose.toLowerCase().includes(q) ||
        (s.emotionalState?.toLowerCase().includes(q) ?? false) ||
        (s.objectionHandled?.toLowerCase().includes(q) ?? false)
      );
    }
    return true;
  });

  const stats = [
    { label: "Video Scripts", value: videoAds.length, color: "text-purple-400" },
    { label: "Text/Image", value: textAds.length, color: "text-emerald-400" },
    { label: "Retargeting", value: retargetingAds.length + hotAds.length, color: "text-amber-400" },
    { label: "Seller Scripts", value: allSellerScripts.length, color: "text-sky-400" },
  ];

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
                Target: Google Ads Operators &middot; $5K&ndash;$15K/mo PPC
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

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-zinc-400">
                Progress: {completedCount} / {totalCount} completed ({progressPct}%)
              </span>
              <button
                onClick={() => setHideCompleted(!hideCompleted)}
                className={`text-xs font-medium px-2.5 py-1 rounded-md transition-colors ${
                  hideCompleted
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "bg-zinc-800 text-zinc-400 hover:text-zinc-300"
                }`}
              >
                {hideCompleted ? "Showing incomplete only" : "Show all"}
              </button>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
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

        {/* Seller Scripts */}
        {activeTab === "seller" && (
          <div className="space-y-3">
            <SectionHeader title="Landing Page VSL" count={vslScripts.length} color="violet" />
            {vslScripts
              .filter((s) => filteredSellerScripts.includes(s))
              .map((s) => (
                <SellerScriptCard
                  key={s.id}
                  script={s}
                  completed={completedIds.has(s.id)}
                  onToggleComplete={toggleComplete}
                />
              ))}

            <SectionHeader title="Thank You Page Video" count={thankYouScripts.length} color="teal" />
            {thankYouScripts
              .filter((s) => filteredSellerScripts.includes(s))
              .map((s) => (
                <SellerScriptCard
                  key={s.id}
                  script={s}
                  completed={completedIds.has(s.id)}
                  onToggleComplete={toggleComplete}
                />
              ))}

            <SectionHeader title="FAQ Videos" count={faqScripts.length} color="sky" />
            {faqScripts
              .filter((s) => filteredSellerScripts.includes(s))
              .map((s) => (
                <SellerScriptCard
                  key={s.id}
                  script={s}
                  completed={completedIds.has(s.id)}
                  onToggleComplete={toggleComplete}
                />
              ))}

            {filteredSellerScripts.length === 0 && (
              <p className="text-center text-zinc-500 py-12">No scripts match your search.</p>
            )}

            {/* Filming & Production Notes */}
            <div className="mt-8 space-y-6 max-w-4xl">
              <SectionHeader title="Filming & Production Notes" count={0} color="zinc" />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Camera", value: "Phone (iPhone/Samsung) or mirrorless camera. NOT a studio production. Authenticity converts this audience." },
                  { label: "Setting", value: "Real environment — home office, kitchen table, living room. Clean background but NOT staged." },
                  { label: "Lighting", value: "Natural light from a window (best) or simple ring light. Warm tones. Avoid harsh fluorescents." },
                  { label: "Framing", value: "Head and shoulders. Camera at eye level. Look directly into the camera lens, not the screen." },
                  { label: "Wardrobe", value: "Casual professional. Button-down or clean polo. No suits. No branded shirts. Look like a trustworthy neighbor." },
                  { label: "Captions", value: "ALWAYS on. Bold, high-contrast. 65%+ of video is watched with sound off on mobile." },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <p className="text-xs font-semibold text-zinc-400">{item.label}</p>
                    <p className="text-sm text-zinc-300 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <p className="text-sm font-semibold text-white mb-2">Filming Order (Shoot in One Session)</p>
                <div className="space-y-1.5 text-sm text-zinc-400">
                  <p>1. FAQ videos first (shorter, easier to warm up with)</p>
                  <p>2. Thank You page video (medium length, conversational)</p>
                  <p>3. VSL last (longest, most important — you'll be warmed up by this point)</p>
                  <p className="text-zinc-500 mt-2">Total filming time: 3–4 hours with setup and retakes</p>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <p className="text-sm font-semibold text-white mb-2">Expected Impact</p>
                <div className="space-y-1.5 text-sm text-zinc-400">
                  <p>20–30% increase in call answer rates</p>
                  <p>15–25% increase in appointment show rates</p>
                  <p>Shorter sales calls — objections pre-handled</p>
                  <p>Higher close rates — trust built before conversation</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ad Cards */}
        {activeTab !== "deploy" && activeTab !== "seller" && (
          <div className="space-y-3">
            {activeTab === "all" && (
              <>
                <SectionHeader title="Layer 1 — Cold Traffic: Video Ads" count={videoAds.length} color="blue" />
                {videoAds
                  .filter((ad) => {
                    if (hideCompleted && completedIds.has(ad.id)) return false;
                    if (!search) return true;
                    return filteredAds.includes(ad);
                  })
                  .map((ad) => (
                    <AdCard
                      key={ad.id}
                      ad={ad}
                      completed={completedIds.has(ad.id)}
                      onToggleComplete={toggleComplete}
                    />
                  ))}

                <SectionHeader title="Layer 1 — Cold Traffic: Text/Image Ads" count={textAds.length} color="emerald" />
                {textAds
                  .filter((ad) => {
                    if (hideCompleted && completedIds.has(ad.id)) return false;
                    if (!search) return true;
                    return filteredAds.includes(ad);
                  })
                  .map((ad) => (
                    <AdCard
                      key={ad.id}
                      ad={ad}
                      completed={completedIds.has(ad.id)}
                      onToggleComplete={toggleComplete}
                    />
                  ))}

                <SectionHeader title="Layer 2 — Warm Retargeting" count={retargetingAds.length} color="amber" />
                {retargetingAds
                  .filter((ad) => {
                    if (hideCompleted && completedIds.has(ad.id)) return false;
                    if (!search) return true;
                    return filteredAds.includes(ad);
                  })
                  .map((ad) => (
                    <AdCard
                      key={ad.id}
                      ad={ad}
                      completed={completedIds.has(ad.id)}
                      onToggleComplete={toggleComplete}
                    />
                  ))}

                <SectionHeader title="Layer 3 — Hot Retargeting" count={hotAds.length} color="red" />
                {hotAds
                  .filter((ad) => {
                    if (hideCompleted && completedIds.has(ad.id)) return false;
                    if (!search) return true;
                    return filteredAds.includes(ad);
                  })
                  .map((ad) => (
                    <AdCard
                      key={ad.id}
                      ad={ad}
                      completed={completedIds.has(ad.id)}
                      onToggleComplete={toggleComplete}
                    />
                  ))}
              </>
            )}
            {activeTab !== "all" && filteredAds.map((ad) => (
              <AdCard
                key={ad.id}
                ad={ad}
                completed={completedIds.has(ad.id)}
                onToggleComplete={toggleComplete}
              />
            ))}
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
    violet: "border-violet-500/30 text-violet-400",
    teal: "border-teal-500/30 text-teal-400",
    sky: "border-sky-500/30 text-sky-400",
    zinc: "border-zinc-500/30 text-zinc-400",
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
            { pair: 'Video #10 "The Speed Race" + Text #6 "The Split Test Challenge"', note: "Speed-to-lead frustration + data-driven competitive challenge." },
            { pair: 'Video #12 "The 4x Close Rate" + Text #8 "The Close Rate Gap"', note: "Close rate focus. Reframes the problem from lead volume to lead quality." },
          ].map((item, i) => (
            <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <p className="text-sm font-semibold text-white">{i + 1}. {item.pair}</p>
              <p className="text-xs text-zinc-400 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-zinc-900/50 p-4 space-y-1.5 text-sm text-zinc-400">
          <p>6. Launch 3 video + 2 text ads simultaneously</p>
          <p>7. Run 7 days at $50-$100/day per ad set</p>
          <p>8. Kill any ad above 2x target CPL after 1,000+ impressions</p>
          <p>9. Double budget on winner. Launch new variation of winning hook.</p>
          <p>10. Add retargeting layers at Day 7</p>
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
                { metric: "CPM", target: "$15-$40", kill: ">$60 (audience too narrow or ad fatigue)" },
                { metric: "CTR (link)", target: "1.5%+", kill: "<0.8% after 2,000 impressions" },
                { metric: "CPL (lead form)", target: "$30-$75", kill: ">$150" },
                { metric: "Landing page conversion", target: "15-25%", kill: "<8%" },
                { metric: "Cost per booked call", target: "$150-$400", kill: ">$600" },
                { metric: "Show rate", target: "65-80%", kill: "<50% (fix confirmation sequence)" },
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
