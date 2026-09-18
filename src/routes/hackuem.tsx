import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Linkedin, Menu, X, ShieldCheck, BrainCircuit, Globe2, ShieldHalf, Lightbulb } from "lucide-react";
import logo from "@/assets/hackuem-logo-2026.png.asset.json";
import acmLogo from "@/assets/acm-uemj-logo.png.asset.json";
import uemLogo from "@/assets/uem-logo.png.asset.json";
import iicLogo from "@/assets/iic-logo-2.png.asset.json";
import anakinLogo from "@/assets/partners/anakin-full.png.asset.json";
import finlaticsLogo from "@/assets/partners/finlatics.png.asset.json";
import xyzLogo from "@/assets/partners/xyz.svg.asset.json";
import commudleLogo from "@/assets/partners/commudle.png.asset.json";
import interviewBuddyLogo from "@/assets/partners/interviewbuddy.svg.asset.json";
import codeCraftersLogo from "@/assets/partners/codecrafters.svg.asset.json";
import cleanShotLogo from "@/assets/partners/cleanshot.png.asset.json";
import uptoskillsLogo from "@/assets/uptoskills-transparent.png.asset.json";
import track1 from "@/assets/track-1.jpg.asset.json";
import track2 from "@/assets/track-2.jpg.asset.json";
import track3 from "@/assets/track-3.jpg.asset.json";
import track4 from "@/assets/track-4.jpg.asset.json";

export const Route = createFileRoute("/hackuem")({
  component: HackUEMPage,
  head: () => ({
    meta: [
      { title: "HackUEM 6.0 — 12-Hour Flagship Hackathon | UEM Jaipur ACM" },
      {
        name: "description",
        content:
          "HackUEM 6.0 was a 12-hour flagship hackathon organized by the UEM Jaipur ACM Student Chapter on 11th September 2026 at UEM Jaipur. The event is now closed.",
      },
      { property: "og:title", content: "HackUEM 6.0 — 12-Hour Flagship Hackathon" },
      {
        property: "og:description",
        content:
          "HackUEM 6.0 brought twelve hours of building and innovation to UEM Jaipur. The event is now closed.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hackuem" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hackuem" }],
  }),
});

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/acm.uemj_", Icon: Instagram },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/uem-jaipur-acm-student-chapter/",
    Icon: Linkedin,
  },
  { label: "X", href: "https://x.com/Acm_Uemj", Icon: XIcon },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const NAV = [
  ["About", "about"],
  ["Tracks", "tracks"],
  ["Timeline", "timeline"],
  ["Prizes", "prizes"],
  ["Sponsors", "sponsors"],
  ["FAQ", "faq"],
];

const STATS = [
  ["12", "Hours of build time"],
  ["6.0", "Flagship edition"],
  ["1–4", "Team size"],
  ["₹0", "Entry fee"],
];

const TRACKS = [
  {
    tag: "01",
    title: "AI & Machine Learning",
    copy: "Agents, vision, RAG, on-device models — ship something that thinks.",
    img: track1.url,
    accent: "#ff2fd0",
    Icon: BrainCircuit,
    tags: ["LLMs", "Computer vision", "RAG"],
  },
  {
    tag: "02",
    title: "Web & App Dev",
    copy: "Full-stack products, PWAs and mobile builds that solve a real problem.",
    img: track2.url,
    accent: "#35e6ff",
    Icon: Globe2,
    tags: ["Full-stack", "PWA", "Mobile"],
  },
  {
    tag: "03",
    title: "Cybersecurity",
    copy: "Offensive tooling, defensive dashboards, privacy-first architecture.",
    img: track3.url,
    accent: "#8b5cf6",
    Icon: ShieldHalf,
    tags: ["Red team", "Blue team", "Privacy"],
  },
  {
    tag: "04",
    title: "Open Innovation",
    copy: "IoT, blockchain, dev tooling, games — anything you can demo in 12 hours.",
    img: track4.url,
    accent: "#facc15",
    Icon: Lightbulb,
    tags: ["IoT", "Web3", "Dev tools"],
  },
];


const TIMELINE = [
  ["09:00 AM", "Opening Ceremony", "Check-in, tracks and rules explained, mentors introduced."],
  ["09:30 AM", "Hackathon in Full Swing", "The 12-hour clock starts. Problem statements drop and teams dive in."],
  ["12:30 PM", "Mentor Round 1", "Domain leads review architecture and unblock teams."],
  ["02:00 PM", "Fuel Break + Mini Games", "Food, refreshments, and a chaotic side quest."],
  ["04:00 PM", "Mentor Round 2", "Scope-cut clinic — ship a demo, not a dream."],
  ["06:00 PM", "Code Freeze", "Submissions lock. Deploy links and repos in."],
  ["07:00 PM", "Final Pitches & Awards", "Judging, demos, and the HackUEM 6.0 champions — event over by 7 PM."],
];

type Prize = { place: string; amount: string; note: string };

const PRIZES: Prize[] = [
  { place: "Champions", amount: "Grand Prize Pool", note: "1st Place" },
  { place: "Runner Up", amount: "Cash Prize + Goodies", note: "2nd Place" },
  { place: "Second Runner Up", amount: "Cash Prize + Swag", note: "3rd Place" },
];

const JUNIOR_PRIZES: Prize[] = [
  { place: "1st Prize", amount: "Cash Prize + Goodies", note: "1st Place" },
  { place: "Runner Up", amount: "Cash Prize + Swag", note: "2nd Place" },
  { place: "2nd Runner Up", amount: "Cash Prize + Swag", note: "3rd Place" },
];



const PERKS = [
  ["Faculty mentorship", "College faculty members will be available throughout the hackathon to mentor teams, provide guidance, and offer valuable feedback as participants build and refine their solutions."],
  ["Certificates for all", "Verified participation certificates for all eligible participants from the ACM Student Chapter."],
  ["Food & refreshments", "Snacks and refreshments will be provided throughout the 12-hour hackathon."],
  ["Track-wise prizes", "Special awards for outstanding projects across different challenge tracks."],
  ["Project showcase", "Get the opportunity to present your project, ideas, and solutions to mentors, judges, and fellow innovators."],
  ["Zero entry cost", "Free to participate for every UEM Jaipur student."],
];

const ORGANIZERS = [
  { name: "UEM Jaipur ACM Student Chapter", role: "Organized By", src: acmLogo.url, dark: true },
  { name: "UEM Jaipur", role: "Organized By", src: uemLogo.url, dark: false },
  { name: "Institution's Innovation Council", role: "Organized By", src: iicLogo.url, dark: false },
];

const PARTNERS = [
  { name: "Anakin", role: "Presented to You By", src: anakinLogo.url },
  { name: "Finlatics", role: "Supported By", src: finlaticsLogo.url },
  { name: "UptoSkills", role: "Platform & Hiring Partner", src: uptoskillsLogo.url },
  { name: ".xyz", role: "In-Kind", src: xyzLogo.url },
  { name: "Commudle", role: "Developer & Community Partner", src: commudleLogo.url },
  { name: "InterviewBuddy", role: "In-Kind", src: interviewBuddyLogo.url },
  { name: "Code Crafter", role: "In-Kind", src: codeCraftersLogo.url },
  { name: "CleanShot", role: "In-Kind", src: cleanShotLogo.url },
];

const FAQ = [
  ["Who can participate?", "Any student of UEM Jaipur across all years and branches. Beginners are genuinely welcome — mentors are on the floor for all 12 hours."],
  ["What is the team size?", "Teams of 1 to 4 members. Solo hackers are welcome, but we recommend a squad — find one at the team-formation mixer."],
  ["When and where is it?", "11th September 2026, starting 9:30 AM on the UEM Jaipur campus. It's a single 12-hour sprint — check-in in the morning, pitches by night."],
  ["What should I bring?", "Your laptop, chargers, a college ID, an extension board and any hardware your idea needs. We handle the rest."],
  ["Can we start coding before?", "Ideation and research yes, code no. All repositories must be created after the opening ceremony."],
  ["How is judging done?", "Idea and originality, technical execution, real-world impact, and the quality of your live demo."],
];

function RegisterButton({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="HackUEM 6.0 registrations are closed"
      className={`inline-flex cursor-not-allowed items-center justify-center rounded-full border border-cream/20 bg-cream/10 font-wide uppercase tracking-[0.2em] text-cream/55 ${className}`}
    >
      Event Closed
    </span>
  );
}



function Countdown() {
  return (
    <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl border border-hack-magenta/50 bg-hack-magenta/10 px-6 py-4">
      <span className="h-2.5 w-2.5 rounded-full bg-hack-magenta" />
      <span className="font-wide text-sm uppercase tracking-[0.3em] text-hack-magenta">
        Event Closed
      </span>
    </div>
  );
}

function HackUEMPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-hack-void text-cream">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#241067_0%,#0a0620_55%,#050318_100%)]" />
        <div className="absolute inset-0 hack-grid opacity-40" />
        <div className="absolute -left-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-hack-violet/25 blur-[140px] animate-hack-pulse" />
        <div className="absolute -right-40 top-1/2 h-[30rem] w-[30rem] rounded-full bg-hack-magenta/20 blur-[140px] animate-hack-pulse" />
        <div className="absolute bottom-0 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-hack-cyan/10 blur-[150px]" />
      </div>

      {/* nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menu ? "border-b border-hack-cyan/15 bg-hack-void/90 backdrop-blur-xl" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="HackUEM 6.0" className="h-8 w-auto sm:h-9" />
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-mono-poly text-[11px] uppercase tracking-[0.22em] text-cream/60 transition hover:text-hack-cyan"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <RegisterButton className="hidden px-5 py-2 text-[10px] sm:inline-flex sm:text-[11px]" />
            <button
              onClick={() => setMenu((m) => !m)}
              aria-label="Toggle menu"
              aria-expanded={menu}
              className="rounded-xl border border-hack-cyan/30 p-2 text-hack-cyan transition hover:border-hack-cyan lg:hidden"
            >
              {menu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {menu && (
          <div className="border-t border-hack-cyan/10 bg-hack-void/95 px-5 pb-6 pt-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2">
              {NAV.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenu(false)}
                  className="rounded-xl border border-cream/10 bg-hack-deep/40 px-5 py-3 font-wide text-xs uppercase tracking-[0.2em] text-cream/80 transition hover:border-hack-cyan/50 hover:text-hack-cyan"
                >
                  {label}
                </a>
              ))}
              <RegisterButton className="mt-2 w-full px-5 py-3.5 text-[11px]" />
            </div>
          </div>
        )}
      </header>

      {/* hero */}
      <section id="top" className="relative z-10 flex min-h-[100vh] items-center justify-center px-5 pt-28 pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-hack-cyan/10 to-transparent animate-hack-scan" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-mono-poly text-[10px] uppercase tracking-[0.4em] text-hack-cyan/90 sm:text-[11px]">
            UEM Jaipur ACM Student Chapter presents
          </p>

          <img
            src={logo.url}
            alt="HackUEM 6.0 hackathon logo — 11th September 2026"
            width={695}
            height={279}
            className="mx-auto mt-7 w-full max-w-2xl drop-shadow-[0_0_80px_rgba(255,47,208,0.5)]"
          />

          <div className="mt-9">
            <Countdown />
          </div>

          <h1 className="mt-11 font-wide text-3xl leading-[1] uppercase sm:text-5xl lg:text-6xl hack-glow">
            12 Hours.
            <span className="block bg-gradient-to-r from-hack-cyan via-white to-hack-magenta bg-clip-text text-transparent">
              One Flagship Sprint.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base">
            HackUEM 6.0 is the 12-hour flagship hackathon of the UEM Jaipur ACM Student Chapter,
            hosted on campus at UEM Jaipur. Assemble a squad, pick a track, and turn an idea into a
            working demo before the clock runs out.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <RegisterButton className="px-8 py-3.5 text-xs" />
            <a
              href="#tracks"
              className="rounded-full border border-hack-cyan/40 px-8 py-3.5 font-wide text-xs uppercase tracking-[0.22em] text-cream/85 transition hover:border-hack-cyan hover:text-hack-cyan"
            >
              Explore tracks
            </a>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hack-cyan/15 bg-hack-cyan/5 sm:grid-cols-4">
            {STATS.map(([value, label]) => (
              <div key={label} className="bg-hack-void/60 px-4 py-6 backdrop-blur-sm">
                <dt className="font-wide text-2xl text-hack-cyan sm:text-3xl">{value}</dt>
                <dd className="mt-1 font-mono-poly text-[10px] uppercase tracking-[0.16em] text-cream/55">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* marquee */}
      <div className="relative z-10 border-y border-hack-violet/25 bg-hack-deep/40 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              {["Build all day", "Ship by night", "HackUEM 6.0", "UEM Jaipur", "ACM Student Chapter", "12 hours"].map(
                (word) => (
                  <span
                    key={word}
                    className="font-wide text-lg uppercase tracking-[0.18em] text-cream/35 sm:text-2xl"
                  >
                    {word} <span className="text-hack-magenta">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* about */}
      <Section id="about" kicker="01 / About" title="A single day that ships real products">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-sm leading-relaxed text-cream/70 sm:text-base">
            <p>
              HackUEM is the flagship hackathon of the{" "}
              <span className="text-cream">UEM Jaipur ACM Student Chapter</span> — and the sixth
              edition compresses everything into one relentless 12-hour sprint at UEM Jaipur on 11th
              September 2026.
            </p>
            <p>
              No month-long timelines, no half-finished slide decks. You get problem statements at the
              opening ceremony, mentors on the floor all day, and a hard code freeze at night. What you
              demo is what you built.
            </p>
            <p>
              Whether this is your first hackathon or your fifteenth, HackUEM 6.0 is built to be the
              most intense — and most fun — twelve hours of your semester.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Beginner friendly", "On-campus", "12 hours", "Free entry"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hack-cyan/25 px-4 py-1.5 font-mono-poly text-[10px] uppercase tracking-[0.18em] text-hack-cyan/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-hack-violet/25 bg-hack-deep/40 p-8 hack-ring">
            <div className="font-mono-poly text-[11px] uppercase tracking-[0.2em] text-hack-magenta">
              Event card
            </div>
            <div className="mt-6 space-y-5">
              {[
                ["Date", "11 September 2026"],
                ["Start", "9:30 AM IST"],
                ["Format", "12-hour hackathon"],
                ["Venue", "UEM Jaipur campus"],
                ["Team size", "1 – 4 members"],
                ["Entry", "Free for all UEM Jaipur students"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-3">
                  <span className="font-mono-poly text-[10px] uppercase tracking-[0.18em] text-cream/45">{k}</span>
                  <span className="text-right font-wide text-xs uppercase tracking-[0.1em] text-cream">{v}</span>
                </div>
              ))}
            </div>
            <RegisterButton className="mt-8 w-full px-6 py-3 text-[11px]" />
          </div>
        </div>
      </Section>

      {/* tracks */}
      <Section id="tracks" kicker="02 / Tracks" title="Pick your battlefield">
        <div className="grid gap-5 sm:grid-cols-2">
          {TRACKS.map((t) => (
            <article
              key={t.tag}
              className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-hack-deep/30 transition duration-500 hover:-translate-y-1 hover:border-hack-cyan/50 hover:shadow-[0_25px_70px_-30px_rgba(53,230,255,0.55)]"
            >
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src={t.img}
                  alt={`${t.title} track illustration`}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hack-void via-hack-void/55 to-transparent" />
                <div
                  className="absolute inset-0 opacity-45 mix-blend-screen transition duration-700 group-hover:opacity-70"
                  style={{ background: `radial-gradient(120% 90% at 15% 100%, ${t.accent}55, transparent 70%)` }}
                />
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "34px 34px",
                  }}
                />
                <span className="absolute right-5 top-4 font-wide text-4xl text-cream/25">{t.tag}</span>
                <div
                  className="absolute bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-md"
                  style={{ borderColor: `${t.accent}66`, background: `${t.accent}22`, color: t.accent }}
                >
                  <t.Icon size={22} />
                </div>
              </div>
              <div className="relative p-8 pt-6">
                <h3 className="font-wide text-xl uppercase tracking-[0.06em] text-cream sm:text-2xl">
                  {t.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/65">{t.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cream/15 px-3 py-1 font-mono-poly text-[10px] uppercase tracking-[0.16em] text-cream/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="mt-6 h-px w-full"
                  style={{ background: `linear-gradient(90deg, ${t.accent}, transparent)` }}
                />
              </div>
            </article>
          ))}
        </div>

      </Section>

      {/* timeline */}
      <Section id="timeline" kicker="03 / Timeline" title="The twelve-hour clock">
        <div className="relative border-l border-hack-cyan/20 pl-8 sm:pl-12">
          {TIMELINE.map(([time, title, copy]) => (
            <div key={time} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-hack-magenta shadow-[0_0_18px_3px_rgba(255,47,208,0.6)] sm:-left-[57px]" />
              <div className="font-mono-poly text-[11px] uppercase tracking-[0.24em] text-hack-cyan">{time}</div>
              <h3 className="mt-2 font-wide text-lg uppercase tracking-[0.04em] text-cream">{title}</h3>
              <p className="mt-2 max-w-xl text-sm text-cream/60">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* prizes */}
      <Section id="prizes" kicker="04 / Prizes" title="Glory, cash and bragging rights">
        <PrizeGrid label="Open Category" prizes={PRIZES} highlight />
        <div className="mt-16">
          <PrizeGrid label="Junior Category · 1st Year Only" prizes={JUNIOR_PRIZES} />
        </div>
        <p className="mt-10 text-center font-mono-poly text-[10px] uppercase tracking-[0.2em] text-cream/40">
          Plus track-wise awards, swag kits and certificates for every participant
        </p>
      </Section>


      {/* perks */}
      <Section id="perks" kicker="05 / Perks" title="What you get for showing up">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map(([title, copy]) => (
            <div key={title} className="bg-hack-deep/30 p-7">
              <h3 className="font-wide text-sm uppercase tracking-[0.12em] text-hack-cyan">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* code of conduct */}
      <Section id="conduct" kicker="06 / Code of Conduct" title="Build hard. Stay respectful.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-hack-magenta/40 bg-hack-deep/35 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-hack-magenta" size={22} />
              <h3 className="font-wide text-lg uppercase tracking-[0.08em] text-hack-magenta">
                Code of Conduct
              </h3>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              HackUEM 6.0 is committed to a welcoming, inclusive and harassment-free experience for
              everyone, regardless of gender, branch, year, experience level or background. All
              participants, mentors, judges and volunteers must follow this code of conduct to keep the
              floor safe and professional for all twelve hours.
            </p>
            <a
              href="mailto:uemj.acm@uem.edu.in?subject=HackUEM%206.0%20Code%20of%20Conduct%20Concern"
              className="mt-6 inline-flex items-center gap-2 font-wide text-xs uppercase tracking-[0.2em] text-hack-cyan transition hover:text-white"
            >
              Report a concern →
            </a>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-cream/10">
            {[
              ["Zero harassment", "No harassment, discrimination or intimidation of any kind — on or off the floor."],
              ["Original work only", "All code must be written during the event. Plagiarised submissions are disqualified."],
              ["Respect the venue", "Keep benches clean, follow campus rules and listen to volunteers."],
              ["Fair play", "Collaborate, share knowledge, and never sabotage another team's build."],
            ].map(([t, c]) => (
              <div key={t} className="bg-hack-deep/30 p-6">
                <h4 className="font-wide text-sm uppercase tracking-[0.12em] text-hack-cyan">{t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* sponsors */}
      <Section id="sponsors" kicker="07 / Partners" title="The partners behind HackUEM 6.0">
        <div>
          <p className="text-center font-mono-poly text-[11px] uppercase tracking-[0.3em] text-hack-cyan">
            Organized By
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-2.5 sm:gap-5">
            {ORGANIZERS.map((o) => (
              <div
                key={o.name}
                className="flex min-w-0 flex-col items-center gap-3 rounded-2xl border border-hack-violet/25 bg-hack-deep/35 p-2.5 sm:gap-4 sm:rounded-3xl sm:p-5"
              >
                <div
                  className={`flex aspect-square w-full max-w-[168px] items-center justify-center rounded-xl p-2.5 sm:max-w-[184px] sm:rounded-2xl sm:p-5 ${
                    o.dark ? "bg-hack-void/70" : "bg-white"
                  }`}
                >
                  <img
                    src={o.src}
                    alt={`${o.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="min-h-[3.25rem] text-center">
                  <p className="font-wide text-[8px] uppercase leading-snug tracking-[0.03em] text-cream/85 sm:text-[11px] sm:tracking-[0.05em]">{o.name}</p>
                  <p className="mt-1 font-mono-poly text-[7px] uppercase tracking-[0.16em] text-hack-cyan/70 sm:text-[9px]">{o.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <p className="text-center font-mono-poly text-[11px] uppercase tracking-[0.3em] text-hack-magenta">
              Sponsors &amp; Partners
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5">
              {PARTNERS.map((partner) => (
                <div key={partner.name} className="flex w-[calc(50%-0.375rem)] min-w-0 flex-col items-center rounded-2xl border border-hack-cyan/20 bg-hack-deep/35 p-3 transition hover:-translate-y-1 hover:border-hack-cyan/60 sm:w-[calc(33.333%-0.875rem)] sm:p-5 lg:w-[calc(25%-0.9375rem)]">
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-white p-4 sm:p-6">
                    <img src={partner.src} alt={`${partner.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex min-h-[4.5rem] flex-col items-center justify-center text-center">
                    <p className="font-wide text-[10px] uppercase tracking-[0.05em] text-cream/90 sm:text-xs">{partner.name}</p>
                    <p className="mt-1.5 font-mono-poly text-[7px] uppercase leading-relaxed tracking-[0.12em] text-hack-magenta sm:text-[9px]">{partner.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-hack-magenta/35 bg-hack-magenta/10 px-6 py-5 text-center">
            <p className="font-wide text-sm uppercase tracking-[0.16em] text-hack-magenta">HackUEM 6.0 is closed</p>
            <p className="mt-2 text-sm text-cream/60">Thank you to every participant, partner, mentor, and volunteer.</p>
          </div>
        </div>
      </Section>

      {/* faq */}
      <Section id="faq" kicker="08 / FAQ" title="Everything you're about to ask">
        <div className="divide-y divide-cream/10 overflow-hidden rounded-3xl border border-cream/10 bg-hack-deep/25">
          {FAQ.map(([q, a], i) => (
            <div key={q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition hover:bg-hack-violet/10"
                aria-expanded={open === i}
              >
                <span className="font-wide text-sm uppercase tracking-[0.08em] text-cream sm:text-base">{q}</span>
                <span
                  className={`shrink-0 font-mono-poly text-lg text-hack-magenta transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="px-7 pb-7 text-sm leading-relaxed text-cream/65">{a}</p>
              )}
            </div>
          ))}
        </div>
      </Section>




      {/* footer */}
      <footer className="relative z-10 border-t border-cream/10 px-5 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center">
            <img src={logo.url} alt="HackUEM 6.0" className="h-9 w-auto" />
            <div className="mt-8 w-full max-w-2xl border-t border-hack-magenta/50 pt-7 text-center">
              <h2 className="font-wide text-sm uppercase tracking-[0.14em] text-hack-cyan">Contact Us</h2>
              <div className="mt-4 space-y-2 font-mono-poly text-xs leading-relaxed text-cream/65">
                <p><span className="text-cream/90">E-Mail ID:</span> <a href="mailto:uemj.acm@uem.edu.in" className="transition hover:text-hack-cyan">uemj.acm@uem.edu.in</a></p>
                <p><span className="text-cream/90">Phone:</span> <a href="tel:+918292726444" className="transition hover:text-hack-cyan">+91 8292726444</a></p>
                <p><span className="text-cream/90">Address:</span> UEM Jaipur, Gurukul Campus, Sikar Road,<br className="hidden sm:block" /> Rajasthan · 303807</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="rounded-full border border-cream/15 p-2.5 text-cream/65 transition hover:border-hack-cyan hover:text-hack-cyan"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <div className="flex gap-6 font-mono-poly text-[10px] uppercase tracking-[0.18em] text-cream/45">
              <a href="https://acm-uemj.uem.edu.in/" target="_blank" rel="noopener noreferrer external" className="transition hover:text-hack-cyan">UEMJ ACM Chapter</a>
              <a href="#about" className="transition hover:text-hack-cyan">About</a>
              <span className="text-cream/30">Event Closed</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="page-section relative z-10 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono-poly text-[11px] uppercase tracking-[0.35em] text-hack-magenta">{kicker}</p>
        <h2 className="mt-4 max-w-3xl font-wide text-3xl uppercase leading-[1.05] sm:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function PrizeGrid({
  label,
  prizes,
  highlight = false,
}: {
  label: string;
  prizes: { place: string; amount: string; note: string }[];
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="text-center font-mono-poly text-[11px] uppercase tracking-[0.3em] text-hack-cyan">
        {label}
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {prizes.map((p) => {
          const first = p.note === "1st Place";
          return (
            <div
              key={`${label}-${p.place}`}
              className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border p-8 text-center transition hover:-translate-y-1 ${
                first && highlight
                  ? "border-hack-magenta/50 bg-gradient-to-b from-hack-violet/25 to-hack-deep/40 hack-ring"
                  : first
                    ? "border-hack-cyan/40 bg-hack-deep/40"
                    : "border-cream/10 bg-hack-deep/30"
              }`}
            >
              <div className="font-mono-poly text-[10px] uppercase tracking-[0.24em] text-hack-cyan">
                {p.note}
              </div>
              <h3
                className={`mt-4 font-wide text-xl uppercase leading-tight sm:text-2xl ${
                  first && highlight ? "text-hack-magenta hack-glow" : "text-cream"
                }`}
              >
                {p.place}
              </h3>
              <p className="mt-3 text-sm text-cream/65">{p.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
