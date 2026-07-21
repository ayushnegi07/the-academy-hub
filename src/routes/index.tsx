import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Heart, Zap, Shield, ChevronRight, Users, Mail } from "lucide-react";
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
    <>
      <Hero />
      <Pillars />
      <TrainingGroups />
      <TheCoach />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO (VISIBLE TEXT VERSION) ---------------- */
function Hero() {
  const scrollToTraining = () => {
    document.getElementById("training")?.scrollIntoView({ behavior: "smooth" });
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 pitch-lines opacity-30" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        <h1 className="font-display text-5xl uppercase leading-[0.95] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] md:text-7xl lg:text-8xl">
          Where the <span className="shine-text">game</span>
          <br />
          begins.
        </h1>
        {/* FIXED: Added high-contrast shadow so you can read it clearly */}
        <p className="mt-6 max-w-2xl text-lg font-medium text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)] md:text-xl">
          Devsheel Football Academy is a young grassroots academy focused on the fundamentals —
          first touch, movement, decision-making and the discipline that turns players into
          teammates. We train four age groups, one session at a time.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gold-gradient text-ink shadow-gold hover:brightness-110"
          >
            <Link to={"/contact" as any}>
              Contact <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToTraining}
            className="rounded-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white font-bold"
          >
            Programs
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS (RESTORED) ---------------- */
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
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Our approach
          </Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl text-zinc-950">
            Four pillars.
            <br />
            <span className="text-primary">One footballer.</span>
          </h2>
        </div>
        <p className="max-w-xl text-muted-foreground">
          Every session is designed to develop the whole player — not just the athlete on the ball,
          but the person off it.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <Card
            key={title}
            className="group cursor-pointer overflow-hidden border-border transition hover:-translate-y-2 hover:border-primary/40"
          >
            <CardContent className="relative p-6">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase text-zinc-950">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TRAINING GROUPS (RESTORED) ---------------- */
function TrainingGroups() {
  const groups = [
    {
      tag: "U10",
      title: "Under 10",
      copy: "First steps in structured football. Coordination, ball familiarity and small-sided games.",
      focus: ["First touch", "Coordination", "Basic positioning", "Fun-led"],
    },
    {
      tag: "U12",
      title: "Under 12",
      copy: "Building on the fundamentals. Introducing team shape and passing patterns.",
      focus: ["Passing", "Tactics", "Two-footed play", "Teamwork"],
    },
    {
      tag: "U15",
      title: "Under 15",
      copy: "Bridging youth football and competitive play. Deeper tactical work.",
      focus: ["Positional roles", "Game intelligence", "Fitness", "Tournaments"],
    },
    {
      tag: "U18",
      title: "Under 18",
      copy: "Preparing players for adult football. Higher intensity and tactical detail.",
      focus: ["Tactical detail", "Conditioning", "Analysis", "Leadership"],
    },
  ];

  return (
    <section
      id="training"
      className="relative overflow-hidden bg-hero-gradient py-24 text-white scroll-mt-24"
    >
      <div className="absolute inset-0 pitch-lines opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-display text-4xl uppercase md:text-6xl">
          Four age groups.
          <br />
          <span className="shine-text">One standard.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <Card
              key={g.tag}
              className="group border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:-translate-y-1"
            >
              <CardContent className="p-6 md:p-8">
                <p className="font-display text-5xl text-gold">{g.tag}</p>
                <h3 className="mt-3 font-display text-2xl uppercase">{g.title}</h3>
                <p className="mt-3 text-sm text-white/80">{g.copy}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {g.focus.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- THE COACH (RESTORED) ---------------- */
function TheCoach() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift aspect-[4/5] bg-zinc-100 flex items-center justify-center">
          <img src={logo} alt="Devsheel" className="h-32 w-auto opacity-20 grayscale" />
        </div>
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary">The coach</Badge>
          <h2 className="font-display text-4xl uppercase text-zinc-950 md:text-5xl">
            One coach.
            <br />
            <span className="text-primary">Every session.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            The academy is run by the founder. That means every player is seen and every session is
            led with intent.
          </p>
          <Button asChild className="mt-8 rounded-full">
            <Link to={"/contact" as any}>
              Get in touch <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA (RESTORED) ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 text-center text-white">
      <img src={pitchImg} alt="" className="absolute inset-0 h-full w-full object-cover -z-10" />
      <div className="absolute inset-0 bg-hero-gradient opacity-95 -z-10" />
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <img src={logo} alt="Devsheel" className="mx-auto h-16 w-auto mb-6" />
      <h2 className="font-display text-4xl uppercase md:text-6xl">
        Come and <span className="shine-text">train with us.</span>
      </h2>
      <Button asChild size="lg" className="mt-8 rounded-full bg-gold-gradient text-ink shadow-gold">
        <Link to={"/contact" as any}>
          Contact us <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}
