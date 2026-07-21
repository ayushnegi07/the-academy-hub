import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Heart,
  Zap,
  Shield,
  ChevronRight,
  Users,
  Mail,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import heroImg from "@/assets/hero-training.jpg";
import pitchImg from "@/assets/pitch-aerial.jpg";
import logo from "@/assets/devsheel-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devsheel Football Academy — Grassroots football, done properly" },
      {
        name: "description",
        content:
          "A new football academy training the next generation across four age groups: U10, U12, U15 and U18.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <Hero />
      <Pillars />
      <TrainingGroups />
      <TheCoach />
      <FinalCTA />
    </main>
  );
}

/* ---------------- HERO (SAME BACKGROUND - MAXIMUM VISIBILITY) ---------------- */
function Hero() {
  const scrollToTraining = () => {
    document.getElementById("training")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative -mt-[76px] flex min-h-[85vh] items-center overflow-hidden pt-[76px] text-white">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />

        {/* THE "VISIBILITY" OVERLAYS */}
        {/* 1. Global Darkener */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 2. Left-to-Right Fade (Darker behind the text) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* 3. Your custom brand lines */}
        <div className="absolute inset-0 pitch-lines opacity-20" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-24 md:px-6">
        <div className="max-w-4xl">
          {/* Headline - Added Strong Drop Shadow */}
          <h1 className="font-display text-6xl font-black uppercase italic leading-[0.9] tracking-tighter text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] md:text-8xl lg:text-9xl">
            Where the{" "}
            <span className="text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">game</span>
            <br />
            begins<span className="text-gold">.</span>
          </h1>

          {/* Subtext - High Contrast White */}
          <p className="mt-8 max-w-2xl text-lg font-bold leading-relaxed text-white drop-shadow-md md:text-xl">
            Devsheel Football Academy is a young grassroots academy focused on the fundamentals —
            first touch, movement, decision-making and the discipline that turns players into
            teammates.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-gold-gradient px-10 text-sm font-black uppercase tracking-widest text-ink shadow-2xl hover:scale-105 transition-transform"
            >
              <Link to={"/contact" as any}>
                Join Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToTraining}
              className="h-14 rounded-full border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            >
              View Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS (CLEAN & PRO) ---------------- */
function Pillars() {
  const pillars = [
    {
      icon: Target,
      title: "Technical",
      desc: "Ball mastery and first touch built through consistent, focused repetition.",
    },
    {
      icon: Zap,
      title: "Tactical",
      desc: "Simple principles of play — positioning, decisions, and reading the game.",
    },
    {
      icon: Heart,
      title: "Physical",
      desc: "Age-appropriate movement and coordination — never overloaded.",
    },
    {
      icon: Shield,
      title: "Mental",
      desc: "Confidence, focus and respect for teammates and the game itself.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <Badge className="mb-4 bg-zinc-100 text-zinc-900 font-bold uppercase tracking-widest">
            Our approach
          </Badge>
          <h2 className="font-display text-5xl font-black uppercase italic leading-none tracking-tighter text-zinc-950 md:text-7xl">
            Four pillars.
            <br />
            <span className="text-zinc-400">One footballer.</span>
          </h2>
        </div>
        <p className="max-w-md text-zinc-500 font-medium">
          Every session is designed to develop the whole player — the athlete on the ball, and the
          person off it.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <Card
            key={title}
            className="group border-zinc-100 bg-zinc-50/50 transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <CardContent className="p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-black uppercase italic text-zinc-950">
                {title}
              </h3>
              <p className="mt-3 text-sm font-medium text-zinc-500">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TRAINING GROUPS ---------------- */
function TrainingGroups() {
  const groups = [
    {
      tag: "U10",
      title: "Under 10",
      copy: "Coordination, ball familiarity and the love of the ball.",
      focus: ["First touch", "Coordination", "Fun-led"],
    },
    {
      tag: "U12",
      title: "Under 12",
      copy: "Team shape, passing patterns and shirt responsibility.",
      focus: ["Passing", "Tactics", "Teamwork"],
    },
    {
      tag: "U15",
      title: "Under 15",
      copy: "Tactical work, positional roles and physical development.",
      focus: ["Positional", "Intelligence", "Fitness"],
    },
    {
      tag: "U18",
      title: "Under 18",
      copy: "High intensity, tactical detail and adult football prep.",
      focus: ["Detail", "Leadership", "Analysis"],
    },
  ];

  return (
    <section
      id="training"
      className="relative overflow-hidden bg-crimson-deep py-24 text-white scroll-mt-24"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-display text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
          Four age groups.
          <br />
          <span className="text-gold">One standard.</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <Card
              key={g.tag}
              className="group border-white/10 bg-white/5 backdrop-blur-2xl transition-all hover:bg-white/10"
            >
              <CardContent className="p-10">
                <div className="flex items-center justify-between">
                  <p className="font-display text-6xl font-black text-gold">{g.tag}</p>
                  <Badge variant="outline" className="border-gold/50 text-gold">
                    Age Group
                  </Badge>
                </div>
                <h3 className="mt-6 font-display text-3xl font-black uppercase italic">
                  {g.title}
                </h3>
                <p className="mt-4 text-white/60 font-medium">{g.copy}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {g.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- THE COACH ---------------- */
function TheCoach() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-[3rem] bg-zinc-100 p-12">
            <img
              src={logo}
              alt="Devsheel"
              className="h-full w-full object-contain opacity-20 grayscale"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-3xl bg-gold-gradient p-8 text-ink shadow-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">Founder</p>
            <p className="font-display text-3xl font-black uppercase italic">Head Coach</p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-5xl font-black uppercase italic tracking-tighter text-zinc-950 md:text-7xl">
            One coach.
            <br />
            <span className="text-zinc-400">Every session.</span>
          </h2>
          <p className="mt-8 text-lg font-medium leading-relaxed text-zinc-500">
            The academy is run by a single coach — the founder. Every player is seen, every session
            is led with intent, and no group is passed off to an assistant.
          </p>
          <div className="mt-10">
            <Button
              asChild
              className="h-14 rounded-full bg-zinc-950 px-10 text-white hover:bg-zinc-800"
            >
              <Link to={"/contact" as any}>Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <img src={pitchImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white md:px-6">
        <h2 className="font-display text-6xl font-black uppercase italic tracking-tighter md:text-8xl">
          Come and <span className="text-gold">train.</span>
        </h2>
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-16 rounded-full bg-gold-gradient px-12 text-lg font-black uppercase tracking-widest text-ink shadow-2xl"
          >
            <Link to={"/contact" as any}>Contact us now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
