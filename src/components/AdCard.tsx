"use client";

import { useState } from "react";
import type { Ad } from "@/data/ads";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
    >
      {copied ? (
        <>
          <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}

const layerColors = {
  cold: "border-blue-500/30 bg-blue-500/5",
  warm: "border-amber-500/30 bg-amber-500/5",
  hot: "border-red-500/30 bg-red-500/5",
};

const layerBadge = {
  cold: "bg-blue-500/20 text-blue-300",
  warm: "bg-amber-500/20 text-amber-300",
  hot: "bg-red-500/20 text-red-300",
};

const formatBadge = {
  video: "bg-purple-500/20 text-purple-300",
  text: "bg-emerald-500/20 text-emerald-300",
  carousel: "bg-cyan-500/20 text-cyan-300",
};

export default function AdCard({ ad }: { ad: Ad }) {
  const [expanded, setExpanded] = useState(false);

  const mainContent = ad.script || ad.primaryText || "";
  const plainText = mainContent.replace(/\*\*\[?[^\]]*\]?\*\*/g, "").replace(/\*\*/g, "").replace(/---/g, "").trim();

  return (
    <div className={`rounded-xl border ${layerColors[ad.layer]} transition-all`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 font-mono text-sm font-bold text-zinc-300">
          {ad.format === "video" ? `V${ad.number}` : ad.format === "text" ? `T${ad.number}` : ad.layer === "hot" ? `H${ad.number}` : `R${ad.number}`}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${layerBadge[ad.layer]}`}>
              {ad.layer}
            </span>
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${formatBadge[ad.format]}`}>
              {ad.format}
            </span>
            {ad.duration && (
              <span className="inline-block rounded-full bg-zinc-800 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400">
                {ad.duration}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-white">
            {ad.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{ad.angle}</p>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t border-zinc-800 px-5 pb-5">
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-zinc-900/50 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Emotional State Target</p>
              <p className="text-sm text-zinc-300">{ad.emotionalState}</p>
            </div>
            {ad.headline && (
              <div className="rounded-lg bg-zinc-900/50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Headline</p>
                <p className="text-sm font-medium text-white">{ad.headline}</p>
              </div>
            )}
            {ad.description && (
              <div className="rounded-lg bg-zinc-900/50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Description</p>
                <p className="text-sm text-zinc-300">{ad.description}</p>
              </div>
            )}
            {ad.audience && (
              <div className="rounded-lg bg-zinc-900/50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Audience</p>
                <p className="text-sm text-zinc-300">{ad.audience}</p>
              </div>
            )}
          </div>

          {ad.slides && ad.slides.length > 0 && (
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">Carousel Slides</p>
              <div className="space-y-2">
                {ad.slides.map((slide, i) => (
                  <div key={i} className="rounded-lg bg-zinc-900/50 p-3">
                    <p className="text-xs font-semibold text-zinc-400 mb-1">Slide {i + 1}</p>
                    <p className="text-sm text-zinc-300">{slide}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ad.script && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  {ad.format === "video" ? "Video Script" : "Script"}
                </p>
                <CopyButton text={plainText} label="Copy Script" />
              </div>
              <div className="rounded-lg bg-zinc-900/80 p-4 max-h-[500px] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-300 font-sans">
                  {ad.script}
                </pre>
              </div>
            </div>
          )}

          {ad.primaryText && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Primary Text</p>
                <CopyButton text={ad.primaryText} label="Copy Text" />
              </div>
              <div className="rounded-lg bg-zinc-900/80 p-4 max-h-[500px] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-300 font-sans">
                  {ad.primaryText}
                </pre>
              </div>
            </div>
          )}

          {(ad.headline || ad.ctaButton) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {ad.headline && <CopyButton text={ad.headline} label="Copy Headline" />}
              {ad.description && <CopyButton text={ad.description} label="Copy Description" />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
