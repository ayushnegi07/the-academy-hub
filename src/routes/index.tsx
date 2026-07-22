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
import logo from "@/assets/devsheel-logo-transparent.png";
import soldiersImg from "@/assets/tribute-soldiers.jpg";
import u10Img from "@/assets/group-u10.jpg";
import u12Img from "@/assets/group-u12.jpg";
import u15Img from "@/assets/group-u15.jpg";
import u18Img from "@/assets/group-u18.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devsheel Football Academy — Grassroots football, done properly" },
      {
        name: "description",
        content:
          "A new football academy training across four age groups: U10, U12, U15 and U18. Sessions built on fundamentals and discipline.",
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

/* ---------------- HERO (ORIGINAL STYLE + CREATIVE VISIBILITY) ---------------- */
function Hero() {
  const scrollToTraining = () => {
    const el = document.getElementById("training");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[76px] text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
        />

        {/* PRO OVERLAY: Balanced darkness to make text pop while keeping image clear */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 pitch-lines opacity-30" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        {/* HEADING: Original style with subtle shadow */}
        <h1 className="font-display text-5xl uppercase leading-[0.95] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] md:text-7xl lg:text-8xl">
          Where the <span className="shine-text">game</span>
          <br />
          begins.
        </h1>

        {/* PARAGRAPH: High-contrast fix for 100% visibility */}
        <p className="mt-6 max-w-2xl text-lg font-medium text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)] md:text-xl">
          Devsheel Football Academy is a young grassroots academy focused on the fundamentals —
          first touch, movement, decision-making and the discipline that turns players into
          teammates. We train four age groups, one session at a time.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* CONTACT BUTTON */}
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gold-gradient px-10 text-base font-black uppercase tracking-widest text-ink shadow-gold hover:scale-105 transition-all"
          >
            <Link to={"/contact" as any}>
              Contact <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* PROGRAMS BUTTON: High-contrast gold outline */}
          <Button
            size="lg"
            onClick={scrollToTraining}
            className="group relative rounded-full border-2 border-gold bg-white/95 px-10 text-base font-black uppercase tracking-widest text-ink shadow-gold transition-all hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
          >
            <span className="flex items-center gap-2">
              Programs
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS ---------------- */
function Pillars() {
  const pillars = [
    {
      icon: Target,
      title: "Technical",
      desc: "Ball mastery, first touch and 1v1s built through consistent, focused repetition.",
    },
    {
      icon: Zap,
      title: "Tactical",
      desc: "Simple, age-appropriate principles of play — positioning, decisions, and reading the game.",
    },
    {
      icon: Heart,
      title: "Physical",
      desc: "Age-appropriate movement, coordination and conditioning — never overloaded.",
    },
    {
      icon: Shield,
      title: "Mental",
      desc: "Confidence, focus and respect for teammates, opponents and the game itself.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15 uppercase tracking-widest">
            Our approach
          </Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl text-zinc-950">
            Four pillars.
            <br />
            <span className="text-primary">One footballer.</span>
          </h2>
        </div>
        <p className="max-w-xl text-muted-foreground font-medium">
          Every session is designed to develop the whole player — not just the athlete on the ball,
          but the person off it.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <HoverCard key={title} openDelay={80}>
            <HoverCardTrigger asChild>
              <Card className="group cursor-pointer overflow-hidden border-zinc-100 transition hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="relative p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-zinc-950 text-white transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase text-zinc-950">{title}</h3>
                  <p className="mt-2 text-sm text-zinc-500 font-medium">{desc}</p>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-72 bg-zinc-950 text-white border-zinc-800">
              <p className="font-display text-lg uppercase text-gold">{title}</p>
              <p className="mt-1 text-xs text-white/60">
                Woven into every session across all four age groups.
              </p>
            </HoverCardContent>
          </HoverCard>
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
      copy: "First steps in structured football. Coordination and ball familiarity.",
      focus: ["First touch", "Coordination", "Fun-led"],
      img: u10Img,
    },
    {
      tag: "U12",
      title: "Under 12",
      copy: "Building on the fundamentals. Introducing team shape and passing patterns.",
      focus: ["Passing", "Tactics", "Teamwork"],
      img: u12Img,
    },
    {
      tag: "U15",
      title: "Under 15",
      copy: "Bridging youth football and competitive play. Deeper tactical work.",
      focus: ["Positional roles", "Intelligence", "Fitness"],
      img: u15Img,
    },
    {
      tag: "U18",
      title: "Under 18",
      copy: "Preparing players for adult football. Higher intensity and tactical detail.",
      focus: ["Detail", "Leadership", "Analysis"],
      img: u18Img,
    },
  ];

  return (
    <section
      id="training"
      className="relative overflow-hidden bg-hero-gradient py-24 text-white scroll-mt-24"
    >
      <div className="absolute inset-0 pitch-lines opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl">
          Four age groups.
          <br />
          <span className="shine-text">One standard.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <Card
              key={g.tag}
              className="group overflow-hidden border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:-translate-y-2 hover:border-gold/60 hover:shadow-gold"
            >
              <div className="relative h-64 overflow-hidden md:h-72">
                <img
                  src={g.img}
                  alt={`${g.title} training`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crimson-deep via-crimson-deep/40 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink shadow-gold">
                  Academy
                </div>
                <p className="absolute bottom-4 left-6 font-display text-6xl text-gold drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                  {g.tag}
                </p>
              </div>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl uppercase">{g.title}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{g.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {g.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-gold/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold"
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
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] aspect-square bg-hero-gradient flex items-center justify-center shadow-lift">
          <div className="absolute inset-0 pitch-lines opacity-30" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-gold/10" aria-hidden />
          <img src={logo} alt="Devsheel Football Academy" className="relative z-10 w-4/5 max-w-md drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
          <div className="absolute bottom-6 right-6 z-10 rounded-2xl bg-gold-gradient px-6 py-4 text-ink shadow-xl">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] font-black">
              Founder
            </p>
            <p className="font-display text-2xl uppercase">Head Coach</p>
          </div>
        </div>
        <div>
          <Badge className="mb-4 bg-zinc-950 text-white">Elite Coaching</Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl text-zinc-950">
            One coach.
            <br />
            <span className="text-primary">Every session.</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-zinc-500 leading-relaxed">
            The academy is run personally by the founder. That means every player is seen, every
            session is led with intent, and no group is passed off to an assistant.
          </p>
          <Button
            asChild
            className="mt-8 rounded-full h-14 px-10 bg-zinc-950 text-white hover:bg-zinc-800"
          >
            <Link to={"/contact" as any}>
              Get in touch <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 text-center text-white">
      <img src={pitchImg} alt="" className="absolute inset-0 h-full w-full object-cover -z-10" />
      <div className="absolute inset-0 bg-hero-gradient opacity-95 -z-10" />
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        <img
          src={logo}
          alt="Devsheel Football Academy"
          className="mx-auto mb-10 h-32 w-auto md:h-40 drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
        />
        <h2 className="font-display text-5xl uppercase leading-[0.95] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] md:text-7xl">
          Come and <span className="shine-text">train.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-lg">
          Reach out and we'll share session times, location and how to get your player involved.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gold-gradient px-12 h-16 text-lg font-black uppercase tracking-widest text-ink shadow-gold hover:scale-105 transition-transform"
          >
            <Link to={"/contact" as any}>Contact us now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
