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

          {/* PROGRAMS BUTTON: Creative Glassmorphism Fix */}
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToTraining}
            className="group relative rounded-full border-white/30 bg-white/5 px-10 text-base font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-gold/50 hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
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
    },
    {
      tag: "U12",
      title: "Under 12",
      copy: "Building on the fundamentals. Introducing team shape and passing patterns.",
      focus: ["Passing", "Tactics", "Teamwork"],
    },
    {
      tag: "U15",
      title: "Under 15",
      copy: "Bridging youth football and competitive play. Deeper tactical work.",
      focus: ["Positional roles", "Intelligence", "Fitness"],
    },
    {
      tag: "U18",
      title: "Under 18",
      copy: "Preparing players for adult football. Higher intensity and tactical detail.",
      focus: ["Detail", "Leadership", "Analysis"],
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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <Card
              key={g.tag}
              className="group border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold/40"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <p className="font-display text-5xl text-gold">{g.tag}</p>
                  <p className="font-display text-xs uppercase tracking-widest text-white/40">
                    Academy
                  </p>
                </div>
                <h3 className="mt-4 font-display text-2xl uppercase">{g.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{g.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {g.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold"
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
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 aspect-square bg-zinc-50 flex items-center justify-center shadow-inner">
          <img src={logo} alt="Devsheel" className="h-40 w-auto opacity-20 grayscale" />
          <div className="absolute bottom-6 right-6 rounded-2xl bg-gold-gradient px-6 py-4 text-ink shadow-xl">
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
          alt="Devsheel"
          className="mx-auto h-16 w-auto mb-8 brightness-0 invert opacity-80"
        />
        <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">
          Come and <span className="shine-text">train.</span>
        </h2>
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
