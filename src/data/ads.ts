export type AdLayer = "cold" | "warm" | "hot";
export type AdFormat = "video" | "text" | "carousel";

export interface Ad {
  id: string;
  number: number;
  title: string;
  layer: AdLayer;
  format: AdFormat;
  angle: string;
  duration?: string;
  emotionalState: string;
  headline?: string;
  description?: string;
  ctaButton?: string;
  script: string;
  primaryText?: string;
  slides?: string[];
  audience?: string;
}

export const videoAds: Ad[] = [
  {
    id: "video-1",
    number: 1,
    title: "The Google Cliff",
    layer: "cold",
    format: "video",
    angle: "AI search is structurally cannibalizing Google search volume — your PPC costs are rising because the pool of searchers is shrinking",
    duration: "90 seconds",
    emotionalState: "Intellectual anxiety — the trend-line thinker who senses something is wrong but hasn't named it",
    script: `**[VISUAL: Speaker at a desk with a laptop open. Text overlay: "Google PPC investors — this is the number you're not tracking."]**

**[0:00–0:15] HOOK**

If you're running Google PPC for your wholesaling business — "sell my house fast," "cash home buyers," "we buy houses" — let me show you a number that explains why your cost per lead has gone up every single quarter for the last two years.

**[Scroll Stop]** But it has nothing to do with your campaigns. Nothing to do with your landing page. Nothing to do with your bidding strategy.

**[Snapback]** It's happening because the platform itself is shrinking. And nobody in the REI space is talking about it.

---

**[0:15–0:40] THE STRUCTURAL PROBLEM — Agreements 1 & 2**

Here's what's happening.

Gartner — one of the biggest research firms in the world — predicted that search engine volume would drop 25% by 2026. Because of AI.

**[VISUAL: Text overlay — "Search volume: –25% by 2026 (Gartner)"]**

ChatGPT now handles 18% of the query volume that used to go to Google. Perplexity. Gemini. Claude. Every month, millions of people who used to type "sell my house fast" into Google are now asking an AI chatbot instead.

And here's the part that breaks your PPC model:

65% of Google searches now end without a single click. Zero click. The AI Overview answers the question right there on the page. The searcher never visits your landing page. Never sees your ad. Never becomes a lead.

**[VISUAL: Text overlay — "65% of Google searches = zero clicks"]**

Therefore, you're bidding on a shrinking pool of clicks. Same number of advertisers. Fewer clicks to go around. What happens to the price?

It goes up. Every quarter. Without stopping.

That's not a market fluctuation. That's a structural shift in the platform. And it's accelerating.

---

**[0:40–1:05] THE MECHANISM — Agreements 3 & 4**

So let's ask a different question.

What if you didn't need homeowners to search for you? What if you could reach them before they ever typed a single word into Google?

That's what pre-distressed Meta targeting does.

We identify homeowners showing early financial stress signals — behavioral patterns Meta's algorithm captures — 90 to 180 days before they ever Google "sell my house fast."

**[VISUAL: Timeline — "Day 0: Behavioral signals on Meta → Day 60: Brand trust built → Day 120: Homeowner searches Google, but they already know YOU → Day 150: They skip the PPC ads entirely and call you direct"]**

Your brand shows up in their Facebook and Instagram feed. Educational content. Trust. Familiarity. Not a hard sell — a relationship.

Therefore, when they finally do need to sell — they don't search Google. They already know who to call. They call you.

You're not bidding against Opendoor for a $60 click. You're the trusted name that showed up 3 months before anyone else.

Cost per lead on Meta: $30 to $75.
Cost per click on Google for "sell my house fast": $30 to $80 — and that's just the click. Not the lead.

The math isn't close. And the gap is widening every quarter as AI eats more of Google's search volume.

---

**[1:05–1:30] CTA + ANTI-CTA**

If you're spending $5K, $10K, $15K a month on Google PPC and your cost per lead has gone up every quarter — it's not your campaigns. It's the platform.

Tap the link below. We'll run a side-by-side cost analysis — your current Google numbers vs. what pre-distressed Meta targeting would produce in your markets. Free. Fifteen minutes.

**[VISUAL: Text overlay — "Free PPC vs. Meta Cost Analysis → Link Below"]**

Or keep bidding on a platform where 65% of searches don't produce a click and AI is eating the other 35%. The trend line doesn't care if you optimize your ad copy.`,
  },
  {
    id: "video-2",
    number: 2,
    title: "The $80 Click",
    layer: "cold",
    format: "video",
    angle: "The absurd unit economics of Google PPC for 'sell my house fast' keywords — you're in an auction rigged against you",
    duration: "75 seconds",
    emotionalState: "Frustrated buyer — complaint state about rising costs",
    script: `**[VISUAL: Speaker holding phone, showing a Google Ads dashboard (blurred). Text overlay: "$30–$80 per click. For one click."]**

**[0:00–0:12] HOOK**

I want you to think about the last $80 you spent on Google Ads.

Not $80 on leads. Not $80 on a campaign. Eighty dollars. For one click. One person who may or may not have filled out your form.

**[Scroll Stop]** But that's not even the crazy part.

**[Snapback]** The crazy part is that you're bidding against Opendoor, Offerpad, and institutional buyers who have functionally unlimited ad budgets — and Google doesn't care which one of you gets the click, as long as someone pays.

---

**[0:12–0:35] AGITATION — Agreements 1 & 2**

Let's run the real math.

"Sell my house fast" in Phoenix. Dallas. Houston. Atlanta. Any competitive market. You're paying $30 to $80 per click. Not per lead. Per click.

**[VISUAL: Text overlay — "$30–$80/click → 10–15% conversion → $200–$800/lead"]**

Your landing page converts at — let's be generous — 15%. That means you're paying $200 to $800 for a single motivated seller lead.

And that lead? They just Googled "sell my house fast." They're shopping. They filled out your form and three others. Maybe five.

Your team calls them and hears: "Yeah, I'm talking to a few companies." Or worse: "I already went with someone else."

Therefore, your cost per deal on Google PPC is $3,500 to $7,000 in most markets. And it's been climbing.

Meanwhile, Google just added AI Overviews to "sell my house fast" queries in half the country. The homeowner gets their answer without clicking anything. Your ad doesn't even get seen.

You're paying more for fewer clicks from less motivated people on a platform that's actively reducing how many clicks exist.

That's not a marketing strategy. That's a tax.

---

**[0:35–0:55] MECHANISM — Agreements 3 & 4**

Now compare that to this.

Pre-distressed Meta targeting. Cost per lead: $30 to $75. Not per click — per lead. A person who filled out a form, gave you their information, and has been seeing your brand in their feed for weeks.

**[VISUAL: Side-by-side — "Google PPC: $60/click → $400/lead → $5,000/deal" vs. "Pre-Distressed Meta: $50/lead → $1,200/deal"]**

They're not shopping. They're not comparing five companies. They saw your educational content. They trust your brand. They reached out to you.

Your close rate doubles because the lead arrives warm.
Your cost per deal drops by 60 to 70% because you're not in an auction against iBuyers with billion-dollar war chests.

And here's the part Google PPC can never do: the leads that don't convert today stay in your Meta pixel audience. They keep seeing your brand. They convert next month, or the month after. The value compounds.

Google PPC is transactional. You buy a click. It converts or it doesn't. The value evaporates.

Meta is compounding. Every dollar you spend builds brand equity that makes every future lead cheaper and every future conversation warmer.

---

**[0:55–1:15] CTA + ANTI-CTA**

If you're spending $5K or more a month on Google PPC and your cost per lead is above $200 — you're overpaying for worse leads on a platform that's structurally working against you.

Link below. Free side-by-side cost analysis. Your Google numbers vs. what Meta would produce. Fifteen minutes.

Or keep paying $80 for a click that a homeowner shares with four other investors. Your choice.`,
  },
  {
    id: "video-3",
    number: 3,
    title: "The Zero-Click Apocalypse",
    layer: "cold",
    format: "video",
    angle: "Deep-dive on zero-click searches destroying PPC ROI — AI Overviews are answering 'sell my house fast' before anyone clicks your ad",
    duration: "80 seconds",
    emotionalState: "Intellectual alarm — 'I didn't know this was happening'",
    script: `**[VISUAL: Screen recording of a Google search for "sell my house fast" showing an AI Overview. Speaker in corner. Text overlay: "Watch what happens when a homeowner Googles 'sell my house fast' in 2026."]**

**[0:00–0:15] HOOK**

I want to show you something. Go to Google right now and search "sell my house fast."

Look at the top of the page. Before any ad. Before any website link. There's an AI-generated answer. A full paragraph explaining the homeowner's options. Steps to take. Companies to consider.

**[Scroll Stop]** But here's what that means for your PPC campaign —

**[Snapback]** 83% of the people who see that AI Overview never click anything. Not your ad. Not anyone's ad. They got their answer. They're gone.

---

**[0:15–0:35] PROBLEM CRYSTALLIZATION**

Let me put a number on this.

In 2024, about 58% of Google searches ended without a click. Today — February 2026 — it's over 65%. And on queries where Google shows an AI Overview? That number jumps to 83%.

**[VISUAL: Text overlay — "83% zero-click rate on AI Overview queries"]**

Google is deploying AI Overviews on more queries every month. In March 2025, they appeared on 13% of searches — double from January. The trajectory is vertical.

"Sell my house fast." "Cash home buyers." "How to sell my house without a realtor." These are your keywords. And Google is answering them with AI before anyone ever reaches your landing page.

Therefore, you're bidding on a click that — 83% of the time — doesn't exist anymore.

The pool of available clicks is shrinking. The number of advertisers is staying the same. Your CPC goes up. Your volume goes down. Your cost per deal climbs.

This isn't a bad quarter. This is the future of Google search. And it's already here.

---

**[0:35–0:58] MECHANISM — Agreements 3 & 4**

But here's what AI can't do.

AI can answer a search query. It can't build a relationship with a homeowner 90 days before they ever search.

Pre-distressed Meta targeting reaches homeowners showing early financial stress — not when they're searching for solutions, but months before that moment arrives.

**[VISUAL: Text overlay — "Google = captures search intent. Meta = creates intent before search."]**

Your brand appears in their feed. Not as an ad for "We Buy Houses." As educational content. Value. Trust.

Therefore, when the day comes that they need to sell — many of them never search Google at all. They already know who to call.

You're not competing for a zero-click search. You're the reason they don't search in the first place.

That's not a better ad strategy. That's a different game entirely.

---

**[0:58–1:20] CTA + ANTI-CTA**

If your Google PPC cost per lead has gone up and your volume has gone down in the last 12 months — this is why. And it's going to keep getting worse.

Link below. Free analysis. We'll show you the math on shifting from PPC to pre-distressed Meta in your markets.

Or keep optimizing campaigns on a platform where the AI is eating the clicks you're bidding on. The algorithm doesn't owe you a landing page visit.`,
  },
  {
    id: "video-4",
    number: 4,
    title: "Pre-Market vs. In-Market",
    layer: "cold",
    format: "video",
    angle: "Google PPC only captures people already searching — that's 3–5% of your total addressable market. 95% of future deals come from people who haven't searched yet.",
    duration: "70 seconds",
    emotionalState: "Recognition of a blind spot — 'I never thought of it this way'",
    script: `**[VISUAL: Whiteboard or iPad. Speaker draws two circles. Text overlay: "You're fishing in the wrong pond."]**

**[0:00–0:12] HOOK**

Every dollar you spend on Google PPC targets homeowners who are already searching "sell my house fast."

That sounds smart. High intent. Ready to sell.

**[Scroll Stop]** But here's the problem with that logic —

**[Snapback]** Those homeowners represent 3 to 5% of the total motivated sellers in your market. You're ignoring 95% of your future deals.

---

**[0:12–0:30] THE BLIND SPOT**

**[VISUAL: Draws a small circle — "In-Market: 3–5%" — and a large circle — "Pre-Market: 95%"]**

The small circle is Google. Homeowners who are actively searching right now. They know they need to sell. They're comparing options. They filled out 4 forms. Your phone rings — along with 5 others.

The large circle is everyone else. Homeowners who will need to sell in 30, 60, 90, 180 days. They're showing early financial stress signals. They know something is wrong. But they haven't searched yet. They haven't filled out a form. They haven't told anyone.

Right now, nobody is talking to them. Not you. Not your competition. Nobody.

That's where 95% of your future deals live. And Google PPC can't reach them — because they haven't searched yet.

---

**[0:30–0:50] MECHANISM**

Pre-distressed Meta targeting reaches the big circle.

It identifies homeowners in the pre-market stage — showing behavioral signals of financial stress — and puts your brand in front of them months before they ever consider Googling anything.

**[VISUAL: Arrow from "Pre-Market" circle to "Trust Built" to "They Call You"]**

When they're finally ready? They don't search. They already know you. They call you directly. Or they fill out your form — not from a Google ad, but from a Meta ad they've been seeing for 8 weeks.

Therefore, you get the deal at lower cost, with higher trust, and zero competition.

Because nobody else was talking to them at the pre-market stage. The PPC crowd was too busy fighting over the 5% who already searched.

---

**[0:50–1:10] CTA + ANTI-CTA**

You've been fishing in a pond with 30 other investors and a shrinking number of fish. There's an ocean right next to it with no competition. You just need a different rod.

Link below. We'll show you what the pre-market opportunity looks like in your specific markets.

Or keep competing for the 5% of motivated sellers who Google already knows about — along with every other investor running PPC in your zip code.`,
  },
  {
    id: "video-5",
    number: 5,
    title: "The Compounding Problem",
    layer: "cold",
    format: "video",
    angle: "Google PPC is transactional — every dollar spent is gone after the click. Meta builds brand equity that compounds.",
    duration: "75 seconds",
    emotionalState: "Analytical frustration — 'I'm spending money but not building anything'",
    script: `**[VISUAL: Speaker at desk. Two columns drawn on whiteboard or iPad. Text overlay: "One of these builds equity. The other burns cash."]**

**[0:00–0:12] HOOK**

Every dollar you've spent on Google PPC is gone.

I don't mean it didn't produce leads. Maybe it did. But the dollar itself? It bought a click. The click converted or it didn't. And now that dollar is gone. Zero residual value.

**[Scroll Stop]** But what if every dollar you spent on marketing actually built something?

**[Snapback]** Something that made every future lead cheaper, every future conversation warmer, and every future deal easier to close? That's not how PPC works. But it is how this works.

---

**[0:12–0:32] THE TRANSACTIONAL TRAP — Agreements 1 & 2**

**[VISUAL: Column 1 — "Google PPC"]**

Google PPC is transactional. You pay for a click. The click lands on your page. They convert or they bounce. If they bounce? That money is gone. No pixel. No retargeting. No brand impression. Nothing.

Month after month, you pour money in and it produces leads — but the moment you stop paying, the leads stop coming. Nothing compounds. Nothing gets cheaper over time. If anything, it gets more expensive because the auction gets more competitive.

**[VISUAL: Column 2 — "Pre-Distressed Meta"]**

Pre-distressed Meta targeting is compounding. Every dollar you spend does two things simultaneously.

First — it generates leads today. $30 to $75 per lead. That's the immediate return.

Second — it builds brand equity in your market. Every homeowner who sees your ad but doesn't convert today becomes part of your retargeting audience. They see you next week. Next month. Your brand becomes familiar. Trusted.

Therefore, your cost per lead in month 3 is lower than month 1. Your cost per lead in month 6 is lower than month 3. Because the trust you built in month 1 is still working for you.

---

**[0:32–0:55] THE COMPOUNDING MATH**

**[VISUAL: Two line graphs — Google PPC cost per lead trending UP over time. Meta cost per lead trending DOWN over time.]**

With Google — your cost per lead in month 12 is higher than month 1. Because more advertisers enter the auction. AI eats more search volume. CPCs rise.

With Meta — your cost per lead in month 12 is lower than month 1. Because your pixel has data. Your lookalike audiences are refined. Your brand has 12 months of trust in the market. Homeowners recognize your name before they read your ad.

One model charges you rent on someone else's auction.
The other model builds you an asset that appreciates.

Which one makes sense to pour $10K a month into for the next 12 months?

---

**[0:55–1:15] CTA + ANTI-CTA**

If you've been running Google PPC and you feel like you're on a treadmill — spending more, building nothing, getting the same results — you're right. That's how the model works.

Link below. We'll show you what the compounding model looks like with your numbers and your markets.

Or keep renting clicks from Google while AI eats the search volume you're bidding on. In 12 months, you'll have spent $120K and built nothing.`,
  },
  {
    id: "video-6",
    number: 6,
    title: "The iBuyer Tax",
    layer: "cold",
    format: "video",
    angle: "On Google, you compete against Opendoor, Offerpad, and institutional buyers with unlimited budgets. On Meta pre-distressed, they're not even in the room.",
    duration: "60 seconds",
    emotionalState: "Frustrated — 'it's not a fair fight'",
    script: `**[VISUAL: Speaker holds up phone showing Google results for "sell my house fast" — Opendoor, Offerpad, and institutional ads dominate. Text overlay: "You're in an auction against companies with unlimited ad budgets."]**

**[0:00–0:10] HOOK**

Google "sell my house fast" in any major metro. Look at the ads.

Opendoor. Offerpad. HomeVestors. Institutional buyers with nine-figure marketing budgets.

**[Scroll Stop]** You're in the same auction as them.

**[Snapback]** And Google doesn't care if you're a 5-person team or a publicly traded company. Whoever bids highest wins the click. Guess who bids highest?

---

**[0:10–0:28] AGITATION**

Every click on "sell my house fast" is an auction. You bid $40. Opendoor bids $75. You either lose the click or match their bid and destroy your unit economics.

They can afford $75 a click because they're playing a different game. They're acquiring market share. You're trying to turn a profit on each deal.

Therefore, you're structurally disadvantaged on Google PPC. Not because you're bad at it. Because the auction is designed to favor whoever has the deepest pockets. And that's not you.

---

**[0:28–0:45] MECHANISM**

But on Meta?

Opendoor doesn't run pre-distressed targeting on Facebook. Neither does Offerpad. Neither do the institutionals. They run brand awareness campaigns. Retargeting. Top-of-funnel corporate ads.

They're not targeting homeowners showing early financial distress signals 90 to 180 days before they need to sell. That's not their playbook.

Which means when you run pre-distressed Meta targeting — you're in an auction with almost no competition. The iBuyers aren't there. The institutional buyers aren't there. It's you — and maybe a handful of other smart operators.

**[VISUAL: Text overlay — "Google: You vs. billion-dollar iBuyers. Meta pre-distressed: You vs. almost nobody."]**

Cost per lead on Google in a competitive market: $200 to $800.
Cost per lead on Meta pre-distressed in the same market: $30 to $75.

The platform matters.

---

**[0:45–1:00] CTA + ANTI-CTA**

Stop fighting a bidding war against companies with 100x your budget. There's a channel where they can't follow you.

Link below. Free pipeline analysis for your markets.

Or keep paying the iBuyer tax on Google and hoping they don't raise their bids again next quarter. Spoiler: they will.`,
  },
  {
    id: "video-7",
    number: 7,
    title: "The PPC Treadmill",
    layer: "cold",
    format: "video",
    angle: "You've been running Google Ads for 2+ years, spending more every quarter, building nothing — you're paying rent on someone else's platform",
    duration: "80 seconds",
    emotionalState: "Tired recognition, quiet doubt — the operator who privately knows something isn't working but hasn't named it",
    script: `**[VISUAL: Speaker at desk, relaxed but serious. Text overlay: "You've spent $100K+ on Google Ads. What did you build?"]**

**[0:00–0:15] HOOK**

Add up everything you've spent on Google Ads in the last two years. All of it. The ad spend. The agency fees. The landing page builders. The call tracking. The CRM integrations.

$80K? $120K? Maybe more?

**[Scroll Stop]** Now ask yourself one question —

**[Snapback]** If you stopped paying Google tomorrow morning, how many leads would you get tomorrow afternoon? Zero. That's the answer. And that should terrify you.

---

**[0:15–0:35] THE TREADMILL — Agreements 1 & 2**

You've been on this treadmill for two years. Maybe three. You pay Google. Leads come in. Some convert. Most don't. The ones that convert are shopping you against four other investors because they also clicked four other ads.

Every month, the same cycle. Pay. Click. Call. Chase. Close a few. Pay again.

But here's what changed in the last 18 months.

Your CPC went up. Your CPL went up. Your lead volume went down. And you responded the only way Google lets you respond — you spent more money.

**[VISUAL: Text overlay — "Year 1: $5K/mo → 35 leads. Year 2: $8K/mo → 28 leads. Year 3: $12K/mo → 22 leads."]**

You're running faster on the treadmill. It's not taking you anywhere new. And the incline keeps going up.

Therefore, every dollar you've spent didn't build a single thing. No brand equity. No audience. No trust. No asset. It bought a click that evaporated the moment the page loaded.

---

**[0:35–0:55] THE ALTERNATIVE — Agreements 3 & 4**

Now picture a different model.

You spend $7K a month on pre-distressed Meta targeting. Month one: 90 leads at $55 each. Some convert immediately.

But here's the part that matters.

The homeowners who didn't convert? They're still in your pixel audience. They keep seeing your brand. Your cost per lead in month 3 drops to $45. Month 6: $38. Month 12: $30.

**[VISUAL: Text overlay — "PPC: More spend → fewer leads. Meta: Same spend → more leads, cheaper, warmer."]**

Because every month of brand exposure compounds. Homeowners recognize your name before they read your ad. They trust you before your team dials.

Your Google spend builds Google's business. Your Meta spend builds yours.

After 12 months, you own something. An audience. A brand. Trust in your market. That's not a campaign. That's an asset.

---

**[0:55–1:20] CTA + ANTI-CTA**

If you've been spending $5K or more a month on Google and the ROI has gotten worse every year — it's not going to reverse. The platform is structurally declining.

Link below. Free side-by-side analysis. We'll show you what your Google numbers look like stacked against what Meta would produce.

Or keep paying rent on a platform that raises the price every quarter and hands you nothing when you leave. Two years from now, you'll have spent another $120K and built exactly what you built the last two years. Nothing.`,
  },
  {
    id: "video-8",
    number: 8,
    title: "You Can't Scale Past $200K on Google",
    layer: "cold",
    format: "video",
    angle: "Sultanic 'You Can't' trigger — there's a structural ceiling to Google PPC for wholesaling that no amount of budget increase will break",
    duration: "85 seconds",
    emotionalState: "Provoked curiosity, intellectual challenge — can't resist finding out why",
    script: `**[VISUAL: Speaker looks directly into camera. Text overlay: "You can't scale past $200K/month on Google PPC." Pause. Then: "Here's the math."]**

**[0:00–0:15] HOOK — "You Can't" Trigger**

You can't scale past $200K a month on Google PPC.

Not because you're not smart. Not because your campaigns aren't optimized. Not because your landing page isn't converting.

**[Scroll Stop]** But because of a structural problem in Google's auction model that no amount of budget increase will solve.

**[Snapback]** And the operators who broke through that ceiling? None of them did it by spending more on Google.

---

**[0:15–0:40] THE CEILING — Agreements 1 & 2**

Here's the math nobody at your PPC agency will show you.

Google PPC has diminishing returns built into its architecture. When you spend $5K a month, you capture the highest-intent, lowest-competition clicks in your market. Your CPL might be $250. Workable.

When you double to $10K, you don't double your leads. You get maybe 50% more — because you're now bidding on slightly broader, slightly lower-intent keywords. Your CPL jumps to $350.

At $15K? You're buying the bottom of the barrel. Keywords with worse intent. Clicks from people who aren't ready. CPL: $500. Maybe $600.

**[VISUAL: Curve graph — Budget on X axis, leads on Y axis. The curve flattens as budget increases. Text: "Diminishing returns — built into the auction model."]**

Therefore, there's a ceiling. In most markets, it lives between $120K and $200K in monthly revenue. Push your Google budget past that ceiling and you don't get proportionally more deals. You get the same number of deals at a higher cost per deal.

You've felt this. You've increased budget and watched the CPL spike without the lead volume matching. That's not a campaign problem. That's the platform's design.

---

**[0:40–1:05] THE BREAKTHROUGH — Agreements 3 & 4**

The wholesale operators doing $250K, $350K, $500K a month didn't break through by spending $25K on Google.

They broke through by adding a second channel that doesn't have diminishing returns.

Pre-distressed Meta targeting scales linearly. Double your spend, roughly double your leads — because you're not in an auction against every other investor in your zip code. You're reaching homeowners nobody else can see yet.

**[VISUAL: Text overlay — "Google PPC: $15K/mo = ceiling. Meta pre-distressed: $15K/mo = floor."]**

Your cost per lead stays between $30 and $75 whether you spend $3K or $15K. Because the audience pool is 20x larger than Google's in-market searchers. And nobody else is running pre-distressed campaigns in your market.

Therefore, the ceiling isn't your budget. The ceiling isn't your campaigns. The ceiling is Google's auction. And the way through it is a channel that doesn't have one.

---

**[1:05–1:25] CTA + ANTI-CTA**

If you're spending $8K, $10K, $15K a month on Google and revenue has flatlined — you didn't hit a growth wall. You hit Google's structural ceiling.

Link below. Free analysis. We'll show you where the ceiling is in your market and what happens when you add a channel that doesn't have one.

Or keep pouring more money into Google and watching your CPL climb while your lead count stays flat. The auction doesn't reward the hardest worker. It rewards the deepest pocket. And that's not you.`,
  },
  {
    id: "video-9",
    number: 9,
    title: "The Data Hostage",
    layer: "cold",
    format: "video",
    angle: "Google owns your data, your audience, your brand visibility. If you leave, you take nothing with you.",
    duration: "70 seconds",
    emotionalState: "Indignation — 'I didn't realize I was building on rented land'",
    script: `**[VISUAL: Speaker in frame, calm but serious. Text overlay: "Google owns everything you built. Here's what I mean."]**

**[0:00–0:12] HOOK**

Quick question. If you turned off your Google Ads tomorrow — what would you own?

Not your campaign history. Google owns that. Not your keyword data. Google owns that. Not the people who clicked your ads. Google owns those audiences.

**[Scroll Stop]** You spent $100K. And you own nothing.

**[Snapback]** But it gets worse. You can't even take the data and use it somewhere else. Google's system is designed to lock you in. The moment you leave, it's like you were never there.

---

**[0:12–0:30] THE HOSTAGE SITUATION — Agreements 1 & 2**

Think about what Google actually gives you for your money.

You don't get an audience. You get access to an auction. Temporary access. Pay-to-play.

You don't build brand awareness. The homeowner sees your ad, clicks, and never thinks about your company name again. They don't remember you. They remember Google.

You don't accumulate data you can use. Google's conversion tracking feeds Google's algorithm. Not yours. Your "data" lives on Google's servers, optimizing Google's auction for Google's benefit.

Therefore, after two years of spending $8K a month — $192K total — you have exactly zero assets to show for it. No pixel audience. No retargeting pool. No brand recognition. Nothing.

You didn't build on your land. You built on theirs. And they can change the rules anytime they want.

---

**[0:30–0:52] THE OWNERSHIP MODEL — Agreements 3 & 4**

Now here's what changes with pre-distressed Meta targeting.

Your Meta pixel belongs to you. Every person who sees your ad, watches your video, visits your page — that data lives in your account. Forever.

**[VISUAL: Text overlay — "Google: you rent access. Meta: you own the data."]**

After 90 days, you have a custom audience of 50,000 to 100,000 homeowners who've engaged with your brand. After 6 months, your lookalike audiences are refined. After 12 months, you have a proprietary dataset of behavioral signals in your market that no competitor can access.

That's not a campaign. That's intellectual property.

If you pause spending for a month? The audiences are still there. The pixel data is still there. The brand trust is still there. You pick up exactly where you left off.

Try doing that with Google. Turn it off for a month and start from scratch.

---

**[0:52–1:10] CTA + ANTI-CTA**

If you've been spending $5K or more a month on Google, you've been building an asset — just not yours. You've been building Google's.

Link below. We'll show you what it looks like to build your own.

Or keep feeding data to a platform that holds it hostage and charges you more every quarter to access it.`,
  },
  {
    id: "video-10",
    number: 10,
    title: "The Speed Race",
    layer: "cold",
    format: "video",
    angle: "PPC leads fill out 4-5 forms simultaneously. Your team races against 4 other investors to call first. Pre-distressed = you're the only one in the room.",
    duration: "70 seconds",
    emotionalState: "Frustrated recognition — the operator who knows the speed-to-lead game is broken but keeps playing it",
    script: `**[VISUAL: Speaker at desk, phone in hand. Text overlay: "Your Google lead just filled out 4 other forms. You have 90 seconds."]**

**[0:00–0:12] HOOK**

Your phone rings. New lead from Google PPC. "Sell my house fast" search. High intent. You're excited.

But you're already losing.

**[Scroll Stop]** Because that homeowner didn't just fill out your form.

**[Snapback]** They filled out four others. And right now, four other investors are picking up their phones at the same time you are. The deal doesn't go to the best operator. It goes to the fastest dialer.

---

**[0:12–0:30] THE RACE — Agreements 1 & 2**

This is the reality of Google PPC leads. Every single one is shared.

The homeowner typed a query. Saw multiple ads. Clicked 3 to 5 of them. Filled out 3 to 5 forms. And now they're fielding calls from 3 to 5 investors — all saying the same thing.

**[VISUAL: Text overlay — "Google PPC lead → 4.2 average form fills per homeowner"]**

Your close rate isn't determined by your offer, your rapport, or your acquisition skills. It's determined by whether you dialed first. By 90 seconds.

Therefore, you didn't build a lead generation system. You built a speed-dialing competition. And the moment someone gets a faster auto-dialer, your close rate drops.

---

**[0:30–0:50] THE ALTERNATIVE — Agreements 3 & 4**

Pre-distressed Meta leads are different at a structural level.

These homeowners didn't search anything. They didn't fill out multiple forms. They've been seeing your brand in their feed for 6 to 12 weeks. They know your name. They trust your content. When they fill out your form — it's your form. Not one of five.

**[VISUAL: Text overlay — "PPC lead: 1 of 5 calls. Meta lead: the only call."]**

Your team picks up the phone. The homeowner says: "Yeah, I've been seeing your posts. I think I'm ready to talk."

No race. No competition. No speed-to-lead anxiety. Just a warm conversation with someone who chose you.

Therefore, your close rate doubles. Not because your team got better. Because the lead arrived different.

---

**[0:50–1:10] CTA + ANTI-CTA**

If your acquisition team is burning out chasing shared leads and losing deals to whoever dials faster — the problem isn't your team. It's the channel.

Link below. Free analysis. We'll show you what exclusive pre-distressed leads look like in your markets.

Or keep racing four other investors to every lead and hoping you dial fastest. That's not a business model. That's a coin flip.`,
  },
  {
    id: "video-11",
    number: 11,
    title: "Your PPC Agency Won't Tell You This",
    layer: "cold",
    format: "video",
    angle: "Your PPC agency profits when you spend more — they have zero incentive to tell you the platform is declining. Misaligned incentives.",
    duration: "75 seconds",
    emotionalState: "Betrayal realization — 'My agency has been gaslighting me'",
    script: `**[VISUAL: Speaker leans forward, conversational. Text overlay: "Your PPC agency makes more money when your CPC goes up."]**

**[0:00–0:12] HOOK**

Ask your PPC agency a question. A simple one.

"If Google's search volume is declining because of AI — should I be spending more on Google Ads or less?"

**[Scroll Stop]** Watch what happens to their face.

**[Snapback]** They won't tell you the truth. Because the truth costs them money. Here's why.

---

**[0:12–0:32] THE MISALIGNMENT — Agreements 1 & 2**

Most PPC agencies charge a percentage of ad spend. 10%, 15%, sometimes 20%. The more you spend, the more they make.

When your CPC goes up? They make more money. When Google raises the auction floor? They make more money. When AI eats your search volume and you have to increase budget to maintain the same lead count? They make more money.

**[VISUAL: Text overlay — "Your CPC went up 35% this year. Your agency's revenue went up 35% too."]**

Therefore, your agency is financially incentivized to keep you on Google — even as the platform declines. Every structural problem that makes Google worse for you makes Google better for them.

They don't wake up planning to deceive you. But the incentive structure means they'll never be the one to tell you it's time to diversify. Because diversifying off Google means diversifying off their revenue.

---

**[0:32–0:55] THE REALITY CHECK — Agreements 3 & 4**

Here's what an honest assessment looks like.

Google PPC for "sell my house fast" keywords in 2026: CPCs up 40% from 2024. Click volume down 25% due to AI Overviews. Cost per lead: $300 to $800. Getting worse every quarter.

**[VISUAL: Text overlay — "Your agency optimizes campaigns. They can't optimize a shrinking platform."]**

Your agency can optimize your campaigns. They can test headlines. Adjust bidding strategies. Refine landing pages. And all of that matters — inside a healthy platform.

But they can't fix the fact that 65% of searches end without a click. They can't fix AI Overviews stealing your impressions. They can't fix Opendoor bidding $80 a click.

Those are platform problems. Not campaign problems. And your agency profits from you not knowing the difference.

---

**[0:55–1:15] CTA + ANTI-CTA**

I'm not saying fire your agency. I'm saying get a second opinion from someone who doesn't profit from your Google spend.

Link below. Free PPC vs. Meta analysis. We'll show you the real numbers — no percentage of ad spend attached. Fifteen minutes.

Or keep trusting the people whose paycheck depends on you never questioning the platform. That's not advice. That's a subscription.`,
  },
  {
    id: "video-12",
    number: 12,
    title: "The 4x Close Rate",
    layer: "cold",
    format: "video",
    angle: "Pre-distressed Meta leads close at 3-4x the rate of PPC leads because trust is built before the first call",
    duration: "65 seconds",
    emotionalState: "Analytical curiosity — 'If the close rate is really that different, I need to understand why'",
    script: `**[VISUAL: Speaker with a whiteboard. Two columns drawn. Text overlay: "Same acquisition team. 4x the close rate. Here's why."]**

**[0:00–0:10] HOOK**

If I told you there was a lead source where your existing acquisition team — same people, same scripts, same process — could close at 3 to 4 times their current rate, you'd want to know why.

**[Scroll Stop]** It's not a magic script.

**[Snapback]** It's the 8 weeks of trust that happened before your team ever dialed.

---

**[0:10–0:28] THE TRUST GAP — Agreements 1 & 2**

**[VISUAL: Column 1 — "Google PPC Lead"]**

Google PPC lead arrives cold. They searched. They clicked. They filled out a form. They've never heard of your company. Your rep calls — it's a stranger calling a stranger.

Close rate on PPC leads in competitive markets: 3 to 5%.

**[VISUAL: Column 2 — "Pre-Distressed Meta Lead"]**

Pre-distressed Meta lead has been seeing your brand for 6 to 12 weeks. Educational content. Value. Trust signals. When they fill out your form, they already know your company name. They've watched your videos. They feel like they know you.

Your rep calls — it's a follow-up to a relationship, not a cold introduction.

Close rate on pre-distressed Meta leads: 12 to 18%.

**[VISUAL: Text overlay — "PPC: 4% close rate. Meta pre-distressed: 15% close rate. Same team."]**

---

**[0:28–0:48] THE MATH — Agreements 3 & 4**

Therefore, the math shifts dramatically.

100 PPC leads at $400 each = $40,000 spend. 4% close rate = 4 deals. Cost per deal: $10,000.

100 Meta leads at $55 each = $5,500 spend. 15% close rate = 15 deals. Cost per deal: $367.

**[VISUAL: Text overlay — "PPC: $10K/deal. Meta: $367/deal. 27x more efficient."]**

Your team doesn't need more leads. They need better leads. Leads that arrive with trust already built. Leads that don't have four other investors calling at the same time.

---

**[0:48–1:05] CTA + ANTI-CTA**

If your acquisition team's close rate has been stuck between 3 and 5% — it's not the team. It's the lead quality.

Link below. Free analysis. We'll show you what pre-distressed leads look like in your markets and what happens to your close rate when trust arrives before the call.

Or keep giving your team cold leads from a platform where the homeowner filled out four other forms. The team isn't the bottleneck. The channel is.`,
  },
  {
    id: "video-13",
    number: 13,
    title: "The Google Tax",
    layer: "cold",
    format: "video",
    angle: "You're paying a hidden tax on every deal — the Google Tax. It's not in your P&L but it's destroying your margins.",
    duration: "60 seconds",
    emotionalState: "Reframe shock — seeing a cost they never categorized as a 'tax'",
    script: `**[VISUAL: Speaker at desk with a calculator. Text overlay: "There's a tax on every deal you close. It's not from the IRS."]**

**[0:00–0:10] HOOK**

You're paying a tax on every deal you close. It's not federal. It's not state. It doesn't show up on your 1099.

**[Scroll Stop]** But it's the biggest line item on your P&L.

**[Snapback]** It's the Google Tax. And it's been going up every quarter for the last two years.

---

**[0:10–0:28] THE TAX — Agreements 1 & 2**

The Google Tax is the difference between what your cost per deal should be and what Google's auction forces it to be.

Fair market cost to acquire a motivated seller lead: $30 to $75. That's what it costs on pre-distressed Meta targeting.

What Google charges you: $300 to $800 per lead. By the time you convert at 4%, your cost per deal is $5,000 to $7,000.

**[VISUAL: Text overlay — "Fair value: $1,200/deal. Google's price: $5,500/deal. The difference is the Google Tax."]**

Therefore, on every single deal you close through PPC, you're paying a $3,000 to $5,000 tax. Not to the government. To Google's auction.

That's money straight off your margin. Every deal. Every month. Every quarter.

---

**[0:28–0:45] THE ELIMINATION — Agreements 3 & 4**

Pre-distressed Meta targeting eliminates the Google Tax entirely.

You're not in an auction. You're not competing against iBuyers. You're not paying $60 for a click. You're reaching homeowners before they search — at $30 to $75 per lead.

**[VISUAL: Text overlay — "Eliminate the Google Tax: $30-$75/lead. $1,200/deal."]**

Your cost per deal drops from $5,500 to $1,200. That's not a marginal improvement. That's $4,300 back in your pocket. Per deal. Per month. Compounding.

---

**[0:45–1:00] CTA + ANTI-CTA**

How much are you paying in Google Tax this year? $50K? $100K? More?

Link below. Free analysis. We'll calculate your Google Tax and show you what your margins look like without it.

Or keep paying $4,000+ per deal in hidden platform costs and call it "marketing." The IRS doesn't tax you this much. Why does Google?`,
  },
  {
    id: "video-14",
    number: 14,
    title: "The 3AM Dashboard",
    layer: "cold",
    format: "video",
    angle: "The emotional toll of watching Google Ads costs climb while leads decline — the anxiety PPC operators feel but don't talk about",
    duration: "75 seconds",
    emotionalState: "Emotional truth — naming the private anxiety operators won't admit publicly",
    script: `**[VISUAL: Dark room, phone screen glowing. Speaker talks directly to camera, low-key, honest. Text overlay: "3AM. Checking Google Ads dashboard. Again."]**

**[0:00–0:15] HOOK**

It's 3AM. You can't sleep. You pick up your phone. Open Google Ads.

You check the spend. Check the CPL. Check the lead count. Do the math in your head. Realize the numbers are worse than yesterday.

**[Scroll Stop]** Close the app. Try to sleep.

**[Snapback]** You've done this before. Last week. Last month. Every month for the past year. And the numbers keep getting worse. But you don't tell anyone. Because what would you say? "Google Ads is slowly killing my business and I don't know what to do"?

---

**[0:15–0:35] NAMING THE ANXIETY — Agreements 1 & 2**

Nobody talks about this part of running PPC.

The quiet anxiety. The spreadsheet you update every Monday that shows CPL trending up and volume trending down. The agency call where they say "we're optimizing" but the numbers don't change. The pit in your stomach when you realize you spent $12K last month and got fewer leads than you got for $7K a year ago.

**[VISUAL: Text overlay — "Year over year: +40% spend. –25% leads. Same markets."]**

You're not bad at this. The platform changed underneath you. AI ate the search volume. iBuyers ate the auction. And you're left spending more to get less while pretending everything is fine.

Therefore, the 3AM dashboard check isn't a habit. It's a symptom. A symptom of building your business on a platform that's working against you.

---

**[0:35–0:55] THE ALTERNATIVE — Agreements 3 & 4**

Imagine a different 3AM.

You can't sleep. You check your phone. But instead of Google Ads, you check your Meta dashboard. The numbers: 140 leads this month. $48 CPL. Down from $55 last month. Trending in the right direction. Your retargeting audiences are growing. Your brand recognition is building.

**[VISUAL: Text overlay — "PPC: numbers get worse every month. Meta: numbers get better every month."]**

You close the app and actually fall asleep. Because the system is compounding in your favor. Not eroding under your feet.

That's not a fantasy. That's what happens when you build on a channel where your costs decrease over time instead of increase.

---

**[0:55–1:15] CTA + ANTI-CTA**

If you know the 3AM dashboard feeling — that quiet dread when the numbers confirm what you already knew — it's not going to get better on Google. The structural decline is real and it's accelerating.

Link below. Free analysis. Fifteen minutes. Let's see what your numbers look like on a platform where 3AM feels different.

Or keep checking the same dashboard and hoping the lines reverse. They won't. The platform isn't broken. It's working exactly as designed. Just not for you.`,
  },
  {
    id: "video-15",
    number: 15,
    title: "The Attribution Illusion",
    layer: "cold",
    format: "video",
    angle: "Google gets credit for leads that would have called you anyway — you're paying for brand searches that were already yours",
    duration: "70 seconds",
    emotionalState: "Intellectual betrayal — realizing Google is charging you for your own brand equity",
    script: `**[VISUAL: Speaker at computer showing a Google Ads campaign. Text overlay: "Google is charging you for leads you already earned. Here's how."]**

**[0:00–0:12] HOOK**

Pull up your Google Ads search terms report right now. Look at your converting keywords.

How many of them include your company name? Or your brand? Or a variation of your name that means someone already knew you and searched for you specifically?

**[Scroll Stop]** Google charged you $40 to $60 for that click.

**[Snapback]** For a person who was already going to call you. They already knew your name. They just used Google to find your phone number. And Google billed you for the privilege.

---

**[0:12–0:30] THE ILLUSION — Agreements 1 & 2**

This is the attribution illusion. Google takes credit for conversions it didn't create.

A homeowner sees your direct mail. Or hears about you from a neighbor. Or remembers your brand from a Facebook ad they saw 6 weeks ago. They go to Google and search your company name. They click your ad. Google records it as a "Google Ads conversion."

**[VISUAL: Text overlay — "Branded search = Google charging you for leads you already created."]**

Your agency reports it as PPC performance. Your dashboard shows a conversion. But Google didn't create that lead. Your brand did. Your marketing did. Google just charged you $50 for being the middleman.

Therefore, 20 to 40% of your "Google PPC leads" aren't Google leads at all. They're brand leads that Google intercepted and billed you for.

Strip those out, and your real Google CPL is 30 to 50% higher than your dashboard shows.

---

**[0:30–0:50] THE FIX — Agreements 3 & 4**

When you run pre-distressed Meta targeting, you build brand awareness directly. Homeowners see your content, trust your name, and reach out through your form — not through a Google search.

**[VISUAL: Text overlay — "Meta: direct attribution. No middleman. No brand tax."]**

They don't Google you. They don't click a paid ad. They fill out your form directly from the platform where they built trust.

Therefore, every lead is attributable. Every dollar of spend maps to a real outcome. No attribution illusion. No Google skimming your brand equity.

And the 20 to 40% of leads Google was charging you for? Those become free. Because homeowners go directly to you instead of routing through Google's toll booth.

---

**[0:50–1:10] CTA + ANTI-CTA**

Check your search terms report. Count the branded queries. Multiply by your CPC. That's how much Google is charging you for leads your brand already created.

Link below. Free analysis. We'll calculate your attribution illusion and show you what your real CPL looks like once you stop paying Google for your own brand equity.

Or keep paying $50 every time someone types your company name into a search bar. That's not marketing. That's a toll road.`,
  },
];

export const textAds: Ad[] = [
  {
    id: "text-1",
    number: 1,
    title: "The AI Cliff",
    layer: "cold",
    format: "text",
    angle: "AI search disruption — Google PPC is a depreciating asset",
    emotionalState: "Education + Alarm",
    headline: "Google's AI is eating your PPC clicks. Here's the data.",
    description: "65% of searches end without a click. Free PPC vs. Meta cost analysis.",
    ctaButton: "Learn More",
    primaryText: `Gartner predicted search engine volume would drop 25% by 2026.

They were right.

ChatGPT now handles 18% of Google's daily search volume. Perplexity, Gemini, and Claude are growing 300%+ year over year. And 65% of Google searches now end without a single click — the AI Overview answers the question before anyone visits a website.

On queries with AI Overviews? That zero-click rate jumps to 83%.

Here's what that means for your Google PPC campaigns:

→ Fewer people searching "sell my house fast" (AI handles the query)
→ Fewer clicks available on the searches that remain (zero-click)
→ Same number of advertisers bidding on fewer clicks (price goes up)
→ Your CPC climbs. Your CPL climbs. Your volume drops.

This isn't a bad month. This is a structural shift in how people find information. And it's accelerating.

Meanwhile, the homeowners you're trying to reach? They're still on Facebook and Instagram for 2+ hours a day. They're still scrolling. They're still reachable.

Pre-distressed Meta targeting identifies those homeowners 90–180 days before they'd ever Google anything — and puts your brand in front of them when nobody else is.

Cost per lead: $30–$75 (not per click — per lead).
Zero-click rate: 0%. Because they're not searching. They're being found.

If you're spending $5K+ a month on Google PPC and the ROI has been declining →

→ Free PPC vs. Meta Cost Analysis [LINK]

Or keep optimizing ad copy on a platform where the AI is eating the clicks you're bidding on. The math doesn't fix itself.`,
    script: "",
  },
  {
    id: "text-2",
    number: 2,
    title: "The 95% Blind Spot",
    layer: "cold",
    format: "text",
    angle: "Google PPC captures 3–5% of motivated sellers. 95% of future deals are pre-market people who haven't searched yet.",
    emotionalState: "Strategic Reframe",
    headline: "Google shows you 5% of motivated sellers. Here's how to reach the other 95%.",
    description: "Pre-market targeting for wholesalers tired of fighting over the same in-market leads.",
    ctaButton: "Learn More",
    primaryText: `There are roughly 500 motivated sellers in your market right now who will need to sell in the next 6 months.

How many of them are currently Googling "sell my house fast"?

Maybe 25.

That's 5%. And those 25 people are being targeted by every investor running PPC, every PPL company, every iBuyer with a Google Ads budget.

The other 475? They're showing early signs of financial stress. They know something is off. But they haven't searched. They haven't told anyone. They haven't filled out a form.

Nobody is talking to them.

If you could reach those 475 homeowners today — put your brand in their feed, build trust, become the name they recognize — what happens in 90 days when they're ready to sell?

They don't Google it. They already know who to call.

That's what pre-distressed Meta targeting does. It reaches the 95% that Google PPC can't touch.

→ $30–$75 per lead (not per click)
→ Zero competition at the pre-market stage
→ Higher trust = higher close rates = lower cost per deal
→ Brand equity that compounds over time

Google PPC: fighting over 5% of the market with every other investor.
Pre-distressed Meta: alone with the other 95%.

If you want to see what the 95% looks like in your specific markets →

→ Free Market Analysis [LINK]

Or keep fighting over the 5% that everyone else is already bidding on.`,
    script: "",
  },
  {
    id: "text-3",
    number: 3,
    title: "The Compounding Asset",
    layer: "cold",
    format: "text",
    angle: "Google PPC is rent. Meta pre-distressed is equity. One depreciates, the other appreciates.",
    emotionalState: "Long-Form Comparison",
    headline: "$120K on Google PPC vs. $120K on pre-distressed Meta. Here's the 12-month math.",
    description: "One depreciates. The other compounds. See the projection for your markets.",
    ctaButton: "Learn More",
    primaryText: `Two investors both spend $120,000 on marketing this year.

Investor A puts it into Google PPC.

Month 1: $10K spend → $350 CPL → 29 leads → 2 deals.
Month 6: $10K spend → $420 CPL → 24 leads → 1.5 deals. (CPCs went up. AI took more clicks.)
Month 12: $10K spend → $500 CPL → 20 leads → 1.3 deals. (Fewer clicks exist. More advertisers.)

After 12 months: $120K spent. 276 leads total. Maybe 20 deals. Cost per deal trending UP. Zero brand equity built. Stop paying → leads stop coming.

Investor B puts it into pre-distressed Meta targeting.

Month 1: $10K spend → $65 CPL → 154 leads → 4 deals.
Month 6: $10K spend → $50 CPL → 200 leads → 6 deals. (Pixel optimized. Lookalikes refined. Brand recognized.)
Month 12: $10K spend → $40 CPL → 250 leads → 8 deals. (12 months of brand equity compounding. Homeowners recognize the name before they see the ad.)

After 12 months: $120K spent. 2,400+ leads total. 70+ deals. Cost per deal trending DOWN. Brand equity built across every target market. Retargeting audiences growing. Even if you pause — the trust stays.

Same $120K. Different model. One rents clicks in someone else's auction. The other builds an asset you own.

Which one do you want to pour money into for the next 12 months?

→ Free 12-Month ROI Projection: Your PPC vs. Meta [LINK]`,
    script: "",
  },
  {
    id: "text-4",
    number: 4,
    title: "The Platform Shift",
    layer: "cold",
    format: "text",
    angle: "The platform you built your business on is fundamentally changing. This isn't about optimization — it's about migration.",
    emotionalState: "Sultanic Awareness Bridge — Destroy Old Belief",
    headline: "Google lost 25% of its search volume to AI. Your PPC campaigns felt it.",
    description: "The platform shift is here. Free migration analysis for wholesalers spending $5K+/month on Google.",
    ctaButton: "Learn More",
    primaryText: `Google in 2020:
→ 3.5 billion searches per day
→ Organic CTR on position 1: 31%
→ "Sell my house fast" CPC: $15–$30
→ AI search market share: 0%

Google in 2026:
→ Search volume declining for the first time in company history
→ 65% of searches end without a click
→ "Sell my house fast" CPC: $30–$80+
→ AI Overviews appear on 13%+ of queries (doubling every 2 months)
→ ChatGPT processes 18% of what used to be Google search volume

Read that again slowly.

The platform you built your lead generation on is being eaten by AI. Not slowly. Not in some hypothetical future. Right now. In real time. With numbers you can verify.

This isn't a call to optimize your Google campaigns. It's a call to diversify off a platform with a structurally declining asset base.

The wholesale operators who will dominate the next 3–5 years are the ones who build their pipeline on a channel that isn't being cannibalized by AI.

Pre-distressed Meta targeting reaches motivated homeowners 90–180 days before they'd ever search Google — and AI can't eat a Facebook feed.

→ Your brand builds trust in their feed for months
→ They reach out to you when they're ready
→ Zero competition. No auction. No AI Overview stealing the click.
→ $30–$75 per lead vs. $200–$800 on Google

If you're spending $5K+ a month on Google PPC, this isn't about "trying something new." This is about not being the last one standing on a shrinking platform.

→ Free PPC Migration Analysis [LINK]

The shift is already happening. The only question is whether you lead it or get left behind.`,
    script: "",
  },
  {
    id: "text-5",
    number: 5,
    title: "The Auction You Can't Win",
    layer: "cold",
    format: "text",
    angle: "The Google Ads auction is structurally rigged against independent operators",
    emotionalState: "Sultanic 'You Can't' Style",
    headline: "You can't win Google's auction. Here's why — and what to do instead.",
    description: "iBuyers bid $75/click. You can't match them. There's a channel where they don't show up.",
    ctaButton: "Learn More",
    primaryText: `You can't win Google's auction.

Not because your campaigns are bad. Because the game is designed for you to lose.

Google's auction has three players:

Player 1: Opendoor and the iBuyers.
They bid $75–$100 per click. They don't need positive unit economics on the ad — they're buying market share. They can lose money on every click and still win because their model subsidizes acquisition costs across millions of transactions.

Player 2: Google.
Google makes money whether you get a lead or not. They make money when you increase your bid. They make money when you lose the auction and try again. Their incentive is to keep you bidding. Not to keep you profitable.

Player 3: You.
You need every lead to produce ROI. You can't subsidize losses. You can't bid $80 for a click that converts 12% of the time. You're playing a profitability game in a market-share auction.

Therefore, the auction is structurally rigged against you. Every quarter, the iBuyers bid higher. Google raises the floor. And your cost per deal climbs while theirs stays flat.

You didn't get worse at Google Ads. The game changed. And the new game wasn't designed for you to win.

But here's what nobody in Google's ecosystem will tell you:

Pre-distressed Meta targeting is a different game entirely. No iBuyers. No institutional bidders. No platform incentive to raise your costs.

→ $30–$75 per lead vs. $200–$800 on Google
→ You compete against a handful of smart operators — not billion-dollar corporations
→ Your costs go DOWN over time as your pixel optimizes — the opposite of Google
→ You own the data, the audience, and the brand equity

If you're spending $5K+ a month on Google and your cost per deal is above $3,500 →

→ Free PPC vs. Meta Cost Analysis [LINK]

Or keep playing an auction game against opponents who can afford to lose indefinitely. The house always wins. And you're not the house.`,
    script: "",
  },
  {
    id: "text-6",
    number: 6,
    title: "The Split Test Challenge",
    layer: "cold",
    format: "text",
    angle: "Direct challenge — run both channels side-by-side for 90 days and let the data decide. No risk, just math.",
    emotionalState: "Competitive curiosity — the data-driven operator who can't resist a test",
    headline: "Run Google PPC and Meta side-by-side for 90 days. Let the data decide.",
    description: "No commitment. No risk. Just math. Free analysis to set up the test.",
    ctaButton: "Learn More",
    primaryText: `Here's a challenge for every wholesale operator spending $5K+ a month on Google PPC.

Don't take my word for it. Don't trust the data I show you. Don't believe a single claim I make.

Instead — test it.

Take $3K of your current Google budget. Move it to pre-distressed Meta targeting. Run both channels side-by-side for 90 days. Same markets. Same acquisition team. Same CRM.

After 90 days, compare:

→ Cost per lead: Google vs. Meta
→ Cost per deal: Google vs. Meta
→ Close rate: Google vs. Meta
→ Lead quality (1-call close rate): Google vs. Meta
→ Time to close: Google vs. Meta

That's it. No commitment. No contract. Just a data-driven test.

Here's what happens every single time an operator runs this test:

Month 1: "The Meta leads are cheaper but I'm not sure about quality."
Month 2: "Wait — the Meta leads are closing faster than PPC leads."
Month 3: "I'm shifting 70% of my budget to Meta. The data isn't close."

We've seen this play out with dozens of operators. Not because we're great salespeople. Because the math is the math.

If you're confident in your Google campaigns — prove it. Run the test. If Google wins, you'll know for certain and you'll have lost nothing.

If Meta wins? You just found the channel that breaks your revenue ceiling.

→ Free PPC vs. Meta Analysis to Set Up the Test [LINK]

Or don't test it. Keep spending $10K a month on Google without ever measuring it against an alternative. That's not confidence. That's avoidance.`,
    script: "",
  },
  {
    id: "text-7",
    number: 7,
    title: "The Agency's Dirty Secret",
    layer: "cold",
    format: "text",
    angle: "PPC agencies profit from your rising CPCs — their incentive is to keep you spending, not to tell you the platform is dying",
    emotionalState: "Distrust awakening — 'Wait, my agency benefits from my costs going up?'",
    headline: "Your PPC agency makes more money when your CPC goes up. Think about that.",
    description: "Misaligned incentives are costing you thousands. Free second opinion.",
    ctaButton: "Learn More",
    primaryText: `Your PPC agency charges a percentage of your ad spend. Usually 10 to 20%.

Think about what that means.

When Google raises your CPC from $40 to $60? Your agency's revenue goes up 50%. Same work. Same results. More money.

When AI Overviews eat your click volume and you have to increase budget to maintain lead count? Your agency's revenue goes up. Your ROI goes down.

When you ask "Should I diversify off Google?" — the honest answer might cost them 50% of their revenue from your account. What do you think they'll say?

This isn't a conspiracy. It's incentive alignment. Or rather, misalignment.

Your agency profits when you spend more on Google.
You profit when your cost per deal goes down.

Those two things are increasingly opposed — because Google's platform is structurally declining.

→ Your CPC: up 35-50% year over year
→ Your click volume: down 20-30% due to AI
→ Your cost per deal: up every quarter
→ Your agency's revenue from your account: up every quarter

See the problem?

A PPC agency will never be the one to tell you it's time to leave Google. Not because they're dishonest — because their mortgage payment depends on you staying.

We don't charge a percentage of ad spend. We don't profit when your costs go up. We profit when you get deals. Full stop.

→ Free Second Opinion: Your PPC Numbers vs. Reality [LINK]

Or keep getting advice from people whose income goes up when yours goes down. That's not a partnership. That's a conflict of interest.`,
    script: "",
  },
  {
    id: "text-8",
    number: 8,
    title: "The Close Rate Gap",
    layer: "cold",
    format: "text",
    angle: "The hidden difference — PPC leads close at 3-5% because they're cold and shared. Pre-distressed leads close at 12-18% because trust is pre-built.",
    emotionalState: "Mathematical revelation — 'If I could 4x my close rate with the same team...'",
    headline: "Your team closes PPC leads at 4%. Same team closes Meta leads at 15%. Here's why.",
    description: "The lead source changes the close rate. Not the team. Free analysis.",
    ctaButton: "Learn More",
    primaryText: `Your acquisition team closes Google PPC leads at 3 to 5%.

You've tried new scripts. New training. New tools. New CRMs. The close rate barely moves.

Here's why: the problem isn't your team.

A Google PPC lead arrives cold. They searched a keyword. They clicked the first ad. They filled out a form — yours and 3 others. They don't know your company name. They don't trust you. They're comparison shopping.

Your rep calls. It's stranger calling stranger. The conversation starts at zero trust. Your rep has to build rapport, establish credibility, overcome skepticism, and compete against 4 other offers — all in one call.

3 to 5% close rate on those conditions? That's not bad. That's actually impressive.

Now change one variable: the lead source.

A pre-distressed Meta lead has been seeing your brand for 6 to 12 weeks. Educational content. Trust-building videos. Your name in their feed alongside content that helped them understand their situation.

When they fill out your form, it's only your form. When your rep calls, the homeowner says "Oh yeah, I've been seeing your stuff. I think we should talk."

→ The conversation starts at trust level 7 instead of trust level 0
→ No competition on the call — they only contacted you
→ Higher motivation — they've been processing for weeks
→ Faster decision — the relationship is already established

Close rate: 12 to 18%. Same team. Same scripts. Same process.

Your team isn't the bottleneck. The channel is.

100 PPC leads × 4% close = 4 deals at $40K spend = $10,000/deal
100 Meta leads × 15% close = 15 deals at $5,500 spend = $367/deal

→ Free Close Rate Analysis for Your Markets [LINK]

Or keep blaming the team and buying more training courses. The team is fine. The leads are the problem.`,
    script: "",
  },
];

export const retargetingAds: Ad[] = [
  {
    id: "retarget-1",
    number: 1,
    title: "The Side-by-Side",
    layer: "warm",
    format: "text",
    angle: "Proof for PPC Operators — actual client numbers comparing PPC to Meta",
    emotionalState: "Proof-seeking — wants validation before acting",
    headline: "PPC cost per deal: $5,700. Meta cost per deal: $1,400. Same operator.",
    ctaButton: "Apply Now",
    audience: "Video viewers from ads #1–9, landing page visitors who didn't book",
    primaryText: `You saw the argument. Now here's the proof.

Client A: Nationwide novation operator. Was spending $7K/month on Google PPC.
→ Cost per lead on Google: $380
→ Cost per deal on Google: $5,700
→ Monthly deals from PPC: 2–3

After adding pre-distressed Meta targeting ($5K/month total):
→ Cost per lead on Meta: $52
→ Cost per deal on Meta: $1,400
→ Monthly deals from Meta: 4–6
→ Total monthly deals (PPC + Meta): 6–9

They didn't kill Google overnight. They added Meta. The inbound leads were warmer, cheaper, and closed faster. Within 90 days, they shifted 70% of their budget to Meta.

Their cost per deal dropped 62%. Their deal volume doubled.

Same team. Same markets. Different channel.

If you want to see what these numbers look like for your markets →

→ Free PPC vs. Meta Comparison [LINK]`,
    script: "",
  },
  {
    id: "retarget-2",
    number: 2,
    title: "The Objection Killer — PPC Edition",
    layer: "warm",
    format: "carousel",
    angle: "Handle every PPC-specific objection with data and reframes",
    emotionalState: "Skeptical but engaged — needs answers to commit",
    headline: "Every PPC objection. Answered.",
    ctaButton: "Book Now",
    audience: "Landing page visitors who didn't convert",
    slides: [
      '"Google PPC leads have higher intent than Facebook leads." → Higher intent, yes. But also higher competition, higher cost, and a homeowner comparing 5 offers simultaneously. Your "high-intent" lead just filled out 4 other forms. Pre-distressed inbound leads have ONE point of contact: you.',
      '"I\'ve already invested in optimizing my Google campaigns." → You optimized the ad. You can\'t optimize the platform. AI Overviews, zero-click, declining search volume — those aren\'t campaign problems. They\'re structural platform problems.',
      '"Facebook leads are tire-kickers who aren\'t ready to sell." → Pre-distressed targeting reaches homeowners 90 days before they\'re ready — and builds trust during that window. By the time they raise their hand, they\'re more motivated and more trusting than any PPC lead. Because you were there first.',
      '"I don\'t want to stop Google entirely." → You don\'t have to. Most of our clients run both for 60–90 days and let the data decide. The data always tells the same story: Meta produces more deals at lower cost. Then they shift budget organically.',
      '"What if this doesn\'t work for my markets?" → We run a free market analysis before you spend a dollar. If your markets don\'t fit the targeting model, we\'ll tell you. We\'d rather lose a prospect than onboard a client we can\'t deliver for.',
    ],
    primaryText: `You're thinking about it. Good. Here are the questions you haven't asked yet:

→ Book Your Free PPC vs. Meta Analysis [LINK]`,
    script: "",
  },
  {
    id: "retarget-3",
    number: 3,
    title: "The Clock",
    layer: "warm",
    format: "text",
    angle: "Cost of Inaction — what your PPC looks like in 12 months if you change nothing",
    emotionalState: "Urgency without scarcity — cost of inaction",
    headline: "What your Google PPC looks like in 12 months if you change nothing.",
    ctaButton: "Book Now",
    audience: "High-intent visitors who didn't book",
    primaryText: `Here's what happens to your Google PPC over the next 12 months if you change nothing.

Quarter 1 (Now): Google deploys AI Overviews on 15–20% of real estate queries. Your impressions drop 8%. CPC rises to offset declining volume. You spend the same. Get fewer leads.

Quarter 2: ChatGPT and Perplexity capture another 3–5% of search volume from Google. Zero-click rate passes 70%. Your landing page gets fewer visitors even though your budget went up. Cost per lead passes $450.

Quarter 3: Two more institutional buyers enter the PPC auction in your markets. They bid $90/click because they're playing for market share, not profitability. Your CPC jumps. You either match or lose the clicks.

Quarter 4: You've spent $120K+ on Google this year. Your cost per deal is 30% higher than it was in January. Your volume is flat or down. You've built zero brand equity. And the operators who shifted to Meta 12 months ago? They've built a year of brand trust, refined audiences, and compounding ROI in your markets.

The cost of switching to Meta today: $5K to start.
The cost of waiting 12 months: $120K+ in declining PPC returns and zero compounding equity.

→ Free PPC Migration Analysis [LINK]

The math gets worse every quarter. Not because of your campaigns. Because of the platform.`,
    script: "",
  },
  {
    id: "retarget-4",
    number: 4,
    title: "The Testimonial",
    layer: "warm",
    format: "video",
    angle: "Client voice — PPC switcher telling their story with real numbers",
    emotionalState: "Social proof — hearing from a peer who made the switch",
    headline: "$5,000/deal on Google → $1,600/deal on Meta. Same team. Same markets.",
    ctaButton: "Apply Now",
    audience: "50%+ video viewers, landing page visitors",
    primaryText: `"I wish someone had shown me this two years ago."

That's what most PPC operators say after 90 days of running pre-distressed Meta alongside their Google campaigns.

Not because Meta is magic. Because the math is clear — and Google's math is getting worse every quarter.

If you're spending $5K+ on Google PPC →

→ Free Side-by-Side Analysis [LINK]`,
    script: `**[CLIENT ON CAMERA]**

"I was spending $9K a month on Google PPC. Cost per lead was around $350. I was getting 25, maybe 30 leads a month. And my cost per deal was somewhere around $5,000 — which, you know, I thought was just what it cost.

Then someone showed me the pre-distressed Meta numbers and I was like — there's no way. $50 per lead? That's the click price on Google, not the lead price.

But we ran it side-by-side for 90 days. Same markets. Same team.

Google: $9K spend, 26 leads, 2 deals. Meta: $5K spend, 94 leads, 5 deals.

That was the end of the conversation. I didn't cut Google immediately — I shifted $4K over and kept $5K on PPC. Within 6 months I was running $2K on Google for branded search and $12K on Meta.

My cost per deal went from $5,000 to $1,600. My deal volume went from 3 a month to 7. Same acquisition team.

The leads are warmer. They already know who we are. My reps aren't competing with four other investors on every call. It's a different business.

I wish someone had shown me this two years ago. I would've saved $150K."`,
  },
  {
    id: "retarget-5",
    number: 5,
    title: "The Migration Timeline",
    layer: "warm",
    format: "text",
    angle: "Step-by-step migration plan — shows exactly how the transition from PPC to Meta works over 90 days",
    emotionalState: "Planning mode — wants to see the roadmap before committing",
    headline: "The 90-day PPC-to-Meta migration plan. Step by step.",
    ctaButton: "Book Now",
    audience: "Video viewers from ads #1-15, landing page visitors who engaged but didn't book",
    primaryText: `You've seen the data. You know the math. But you're wondering: "How does this actually work? What does the migration look like?"

Here's the exact 90-day timeline:

**Days 1-7: Foundation**
→ We analyze your current PPC data (CPL, close rate, cost per deal, markets)
→ Set up your pre-distressed Meta targeting campaigns
→ Launch alongside your existing PPC — don't turn anything off

**Days 8-30: First Data**
→ First Meta leads arrive within 48 hours of launch
→ Your team works Meta leads alongside PPC leads — same process
→ End of month 1: you have real side-by-side data

**Days 31-60: Optimization**
→ Meta pixel has 30 days of conversion data — targeting sharpens
→ Retargeting audiences start building from video views and page visits
→ Your CPL starts dropping as the algorithm learns your ideal seller
→ Most operators see Meta outperforming PPC by Day 45

**Days 61-90: Shift**
→ The data is clear. Meta produces more deals at lower cost.
→ You decide how much to shift — 50%, 70%, or 90% of budget
→ Keep branded search on Google ($1-2K) for the people who search your name
→ Reallocate the rest to Meta where it compounds

After 90 days:
→ Lower cost per deal
→ Higher close rate
→ Growing brand equity
→ Compounding returns

You don't have to decide everything today. You just have to see the numbers.

→ Book Your Free PPC vs. Meta Analysis [LINK]`,
    script: "",
  },
  {
    id: "retarget-6",
    number: 6,
    title: "The Calculator",
    layer: "warm",
    format: "text",
    angle: "Make them do the math with their own numbers — interactive-style ad that walks through the calculation",
    emotionalState: "Self-discovery — arriving at the conclusion using their own data",
    headline: "Grab your Google Ads dashboard. Let's do the math together.",
    ctaButton: "Book Now",
    audience: "50%+ video viewers, landing page visitors who didn't convert",
    primaryText: `Open your Google Ads dashboard. I'll wait.

Got it? Good. Now let's do the math together.

Step 1: What's your monthly PPC spend?
(Most operators reading this: $5K to $15K)

Step 2: How many leads did you get last month?
(Divide spend by lead count = your CPL)

Step 3: How many of those leads became deals?
(Divide deals by leads = your close rate)

Step 4: What's your cost per deal?
(Divide total spend by deals closed)

Now let me give you the comparison numbers:

→ Average CPL on pre-distressed Meta: $45
→ Average close rate on Meta leads: 14%
→ Average cost per deal on Meta: $1,200

Take your monthly PPC spend and divide it by $45. That's how many Meta leads that same budget would produce.

Multiply by 14%. That's how many deals.

Divide your spend by that deal count. That's your new cost per deal.

Is it lower than what you just calculated from Google?

(It is. Every single time. For every operator who's run this exercise.)

The math isn't complicated. It's just uncomfortable — because it shows you what you've been overpaying.

→ Book a Free Analysis — We'll Run the Full Comparison for Your Markets [LINK]

Or close your Google Ads dashboard and don't think about it until 3AM. Your call.`,
    script: "",
  },
];

export const hotAds: Ad[] = [
  {
    id: "hot-1",
    number: 1,
    title: "The Direct Ask",
    layer: "hot",
    format: "text",
    angle: "Address specific hesitations head-on",
    emotionalState: "On the fence — needs a nudge, not a push",
    headline: "You came this close. What's holding you back?",
    ctaButton: "Book Now",
    audience: "Landing page visitors who started but didn't complete the form",
    primaryText: `You visited the page. You read the numbers. You didn't book.

Something stopped you. Probably one of these:

"Will Meta leads actually work in my market?"
"What if I spend the money and get nothing?"
"I've been burned by 'Facebook lead' companies before."

All fair questions. All answered in a 15-minute call. No pitch. Just your current Google numbers stacked against what Meta would produce in your markets.

You're already thinking about it. The analysis is free. The worst that happens is you get clarity on whether your PPC spend is where it should be.

→ Book Your Free PPC vs. Meta Analysis [LINK]`,
    script: "",
  },
  {
    id: "hot-2",
    number: 2,
    title: "The Two Paths",
    layer: "hot",
    format: "text",
    angle: "CTA vs anti-CTA framed as two clear paths",
    emotionalState: "Decision point — make inaction feel expensive",
    headline: "15 minutes or 12 more months of rising CPCs. Your call.",
    ctaButton: "Book Now",
    audience: "Calendar page visitors who didn't book",
    primaryText: `You've got two paths from here.

Path A: Book the 15-minute analysis. See your Google numbers stacked against what Meta would produce in your markets. Decide with data, not guesswork. If it's not a fit, you'll know in 15 minutes and you'll have lost nothing.

Path B: Close this tab. Open Google Ads tomorrow morning. Watch your CPC tick up another $3. Watch AI Overviews eat another 2% of your click volume. Watch your cost per deal climb while your lead count stays flat. Hope next quarter is different.

Path A costs you 15 minutes.
Path B costs you another quarter of rising CPCs and declining ROI.

→ Book the Analysis [LINK]`,
    script: "",
  },
  {
    id: "hot-3",
    number: 3,
    title: "The Quiet Guarantee",
    layer: "hot",
    format: "text",
    angle: "Low-risk commitment — leads in 7 days, conversations in 21",
    emotionalState: "Risk-averse — needs certainty before acting",
    headline: "Leads in 7 days. Conversations in 21. See the math in 15 minutes.",
    ctaButton: "Book Now",
    audience: "Landing page visitors who started but didn't complete the form",
    primaryText: `Here's what I can promise:

I can't guarantee you'll close 10 deals next month. Nobody honest can.

But I can guarantee this:

→ You'll see leads in your CRM within 7 days.
→ You'll have qualified conversations within 21 days.
→ You'll have a clear, data-backed picture of what your PPC spend looks like stacked against Meta — within 15 minutes on this call.

If the numbers don't make sense for your business, I'll tell you. I'd rather lose a prospect than gain a client I can't deliver for.

This is built for wholesale operators spending $5K+ a month on Google PPC. If that's you, the analysis is free and the call is 15 minutes.

→ Book Your Free Analysis [LINK]

No pressure. No pitch. Just math.`,
    script: "",
  },
  {
    id: "hot-4",
    number: 4,
    title: "The One Question",
    layer: "hot",
    format: "text",
    angle: "Single powerful question that reframes inaction as the riskier choice",
    emotionalState: "Decision crystallization — one question that tips the scale",
    headline: "One question. Then I'll stop.",
    ctaButton: "Book Now",
    audience: "Landing page visitors who started but didn't complete the form, repeat visitors",
    primaryText: `One question. Then I'll stop showing you these ads.

If your Google PPC cost per deal is $4,000 today — and the platform's structural decline means it'll be $5,500 next year and $7,000 the year after —

At what price do you finally look at an alternative?

$6,000 per deal? $8,000? $10,000?

Or do you just keep paying whatever Google charges and call it "the cost of doing business"?

There's a number where it stops making sense. For most operators, that number was two quarters ago. They just haven't done the math yet.

We'll do the math for you. Free. Fifteen minutes.

→ Book Your Free Analysis [LINK]

That's it. One call. If the numbers don't work, you'll know in 15 minutes and I'll stop asking.`,
    script: "",
  },
  {
    id: "hot-5",
    number: 5,
    title: "Last Chance Math",
    layer: "hot",
    format: "text",
    angle: "Final push — calculate exactly what they'll waste in the next 90 days if they don't act now",
    emotionalState: "Loss aversion — seeing the exact dollar amount they'll waste by waiting",
    headline: "In the next 90 days, you'll spend $____ on Google PPC. How much will you keep?",
    ctaButton: "Book Now",
    audience: "Calendar page visitors who didn't book, form abandoners, 3+ page views",
    primaryText: `Let's do quick math on the next 90 days.

You're spending roughly $8K to $12K a month on Google PPC. That's $24K to $36K over the next 90 days.

At your current CPL of $350 to $500, that produces 50 to 100 leads.

At your current close rate of 3 to 5%, that produces 2 to 5 deals.

Your cost per deal: $5,000 to $12,000.

Now here's the same 90 days on pre-distressed Meta:

Same $8K to $12K per month. CPL: $45. That produces 530 to 800 leads over 90 days.

Close rate of 14%: 74 to 112 deals.

Cost per deal: $320 to $490.

The difference over 90 days:

→ Google: 2-5 deals. $24K-$36K spent.
→ Meta: 74-112 deals. Same spend.

Every day you wait costs you roughly the difference between those two numbers, divided by 90.

That's hundreds of dollars a day. In deals you're not closing. From leads you're not getting. On a platform you're overpaying for.

The call is free. It takes 15 minutes. And it could save you $20K+ in the next quarter alone.

→ Book Now [LINK]

Or wait another 90 days. That's your right. It's also $24K to $36K you won't get back.`,
    script: "",
  },
];

export const allAds = [...videoAds, ...textAds, ...retargetingAds, ...hotAds];
