"use client";

import { useState } from "react";
import type { SellerScript } from "@/data/sellerScripts";

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

const categoryColors = {
  vsl: "border-violet-500/30 bg-violet-500/5",
  thankyou: "border-teal-500/30 bg-teal-500/5",
  faq: "border-sky-500/30 bg-sky-500/5",
  production: "border-zinc-500/30 bg-zinc-500/5",
};

const categoryBadge = {
  vsl: "bg-violet-500/20 text-violet-300",
  thankyou: "bg-teal-500/20 text-teal-300",
  faq: "bg-sky-500/20 text-sky-300",
  production: "bg-zinc-500/20 text-zinc-300",
};

const categoryLabel = {
  vsl: "Landing Page VSL",
  thankyou: "Thank You Page",
  faq: "FAQ Video",
  production: "Production",
};

interface SellerScriptCardProps {
  script: SellerScript;
  completed: boolean;
  onToggleComplete: (id: string) => void;
}

export default function SellerScriptCard({ script, completed, onToggleComplete }: SellerScriptCardProps) {
  const [expanded, setExpanded] = useState(false);

  const plainText = script.script
    .replace(/\*\*\[?[^\]]*\]?\*\*/g, "")
    .replace(/\*\*/g, "")
    .replace(/---/g, "")
    .replace(/> /g, "")
    .trim();

  return (
    <div className={`rounded-xl border ${completed ? "border-emerald-500/30 bg-emerald-500/5" : categoryColors[script.category]} transition-all ${completed ? "opacity-60" : ""}`}>
      <div className="flex items-start">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex flex-1 items-start gap-4 p-5 text-left"
        >
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${completed ? "bg-emerald-900/50" : "bg-zinc-800"} font-mono text-sm font-bold ${completed ? "text-emerald-400" : "text-zinc-300"}`}>
            {script.category === "faq" ? `F${script.number}` : script.category === "vsl" ? "VSL" : "TY"}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${categoryBadge[script.category]}`}>
                {categoryLabel[script.category]}
              </span>
              {script.duration && (
                <span className="inline-block rounded-full bg-zinc-800 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400">
                  {script.duration}
                </span>
              )}
              {completed && (
                <span className="inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  Completed
                </span>
              )}
            </div>
            <h3 className={`text-lg font-semibold ${completed ? "text-zinc-400 line-through" : "text-white"}`}>
              {script.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{script.purpose}</p>
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleComplete(script.id);
          }}
          className={`mt-5 mr-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 transition-all ${
            completed
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-zinc-600 bg-transparent text-transparent hover:border-zinc-400"
          }`}
          title={completed ? "Mark as incomplete" : "Mark as completed"}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className="border-t border-zinc-800 px-5 pb-5">
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {script.emotionalState && (
              <div className="rounded-lg bg-zinc-900/50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Emotional State Target</p>
                <p className="text-sm text-zinc-300">{script.emotionalState}</p>
              </div>
            )}
            {script.objectionHandled && (
              <div className="rounded-lg bg-zinc-900/50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">Objection Handled</p>
                <p className="text-sm text-zinc-300">{script.objectionHandled}</p>
              </div>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Full Script</p>
              <CopyButton text={plainText} label="Copy Script" />
            </div>
            <div className="rounded-lg bg-zinc-900/80 p-4 max-h-[600px] overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-300 font-sans">
                {script.script}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
