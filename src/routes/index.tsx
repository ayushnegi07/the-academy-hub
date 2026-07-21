import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Target, Heart, Zap, Shield, ChevronRight, Users, Mail,
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
      { name: "description", content: "A new football academy training the next generation across four age groups: U10, U12, U15 and U18. Sessions built on fundamentals, discipline, and a love of the game." },
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

/* ---------------- HERO ---------------- */
function Hero() {
  const scrollToTraining = () => {
    document.getElementById("training")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[76px] text-white">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" width={1920} height={1200} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-95" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 pitch-lines opacity-30" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        <h1 className="font-display text-5xl uppercase leading-[0.95] text-white drop-shadow-lg md:text-7xl lg:text-8xl">
          Where the <span className="shine-text">game</span><br />
          begins.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/95 drop-shadow-md">
          Devsheel Football Academy is a young grassroots academy focused on the fundamentals — first touch, movement, decision-making and the discipline that turns players into teammates. We train four age groups, one session at a time.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-gold-gradient text-ink shadow-gold hover:brightness-110">
            <Link to="/contact">Contact <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToTraining}
            className="rounded-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
          >
            Programs
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS ---------------- */
function Pillars() {
  const pillars = [
    { icon: Target, title: "Technical", desc: "Ball mastery, first touch and 1v1s built through consistent, focused repetition." },
    { icon: Zap, title: "Tactical", desc: "Simple, age-appropriate principles of play — positioning, decisions, and reading the game." },
    { icon: Heart, title: "Physical", desc: "Age-appropriate movement, coordination and conditioning — never overloaded." },
    { icon: Shield, title: "Mental", desc: "Confidence, focus and respect for teammates, opponents and the game itself." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">Our approach</Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl">
            Four pillars.<br /><span className="text-primary">One footballer.</span>
          </h2>
        </div>
        <p className="max-w-xl text-muted-foreground">
          Every session is designed to develop the whole player — not just the athlete on the ball, but the person off it. Hover any pillar to read a little more.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <HoverCard key={title} openDelay={80}>
            <HoverCardTrigger asChild>
              <Card className="group cursor-pointer overflow-hidden border-border transition hover:-translate-y-2 hover:border-primary/40 hover:shadow-lift">
                <CardContent className="relative p-6">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    More <ChevronRight className="h-3 w-3 transition group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <p className="font-display text-lg uppercase text-primary">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">Woven into every session across all four age groups — nothing flashy, just done well and done often.</p>
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
      copy: "First steps in structured football. Coordination, ball familiarity and small-sided games — the age where the love of the ball is set.",
      focus: ["First touch & dribbling", "Small-sided games", "Basic positioning", "Fun-led sessions"],
    },
    {
      tag: "U12",
      title: "Under 12",
      copy: "Building on the fundamentals. Introducing simple team shape, passing patterns and the responsibility that comes with a shirt.",
      focus: ["Passing & receiving", "Introductory tactics", "Two-footed play", "Teamwork & respect"],
    },
    {
      tag: "U15",
      title: "Under 15",
      copy: "Bridging youth football and competitive age-group play. Deeper tactical work, positional roles and physical development within safe limits.",
      focus: ["Positional roles", "Game intelligence", "Fitness fundamentals", "Occasional tournaments"],
    },
    {
      tag: "U18",
      title: "Under 18",
      copy: "Preparing players for adult football. Higher intensity, tactical detail and personal accountability on and off the pitch.",
      focus: ["Tactical detail", "Strength & conditioning", "Match analysis", "Leadership on the pitch"],
    },
  ];

  return (
    <section id="training" className="relative overflow-hidden bg-hero-gradient py-24 text-white scroll-mt-24">
      <div className="absolute inset-0 pitch-lines opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <Badge className="mb-4 border-gold/40 bg-white/10 text-gold">Training groups</Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl">
            Four age groups.<br /><span className="shine-text">One standard.</span>
          </h2>
          <p className="mt-4 text-white/90">
            We currently train four age groups. Sessions are kept small, structured and age-appropriate — no shortcuts, no over-promising.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((g) => (
            <Card key={g.tag} className="group border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold/40">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-baseline justify-between">
                  <p className="font-display text-5xl text-gold">{g.tag}</p>
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-white/70">Age group</p>
                </div>
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

        <p className="mt-10 max-w-2xl text-sm text-white/70">
          We take part in local tournaments from time to time when the fixture suits the group — competitive football has its place, but development comes first.
        </p>
      </div>
    </section>
  );
}

/* ---------------- THE COACH ---------------- */
function TheCoach() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift">
            <div className="aspect-[4/5] w-full bg-hero-gradient">
              <div className="grid h-full w-full place-items-center">
                <img src={logo} alt="Devsheel" className="h-32 w-auto opacity-90" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-gold-gradient px-5 py-3 text-ink shadow-gold md:block">
            <p className="font-display text-xs uppercase tracking-widest">Founder</p>
            <p className="font-display text-xl">Head Coach</p>
          </div>
        </div>

        <div>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">The coach</Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-5xl">
            One coach.<br /><span className="text-primary">Every session.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            The academy is currently run by a single coach — the founder. That means every player is seen, every session is led with intent, and no group is passed off to an assistant. It also means the roster is deliberately small.
          </p>
          <p className="mt-4 text-muted-foreground">
            The focus is honest: teach the game properly, respect the age group in front of you, and give every player a fair share of the ball.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">Groups</p>
                  <p className="mt-1 font-display text-2xl text-primary">4</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>U10, U12, U15, U18</TooltipContent>
            </Tooltip>
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">Coach</p>
              <p className="mt-1 flex items-center gap-2 font-display text-2xl text-primary"><Users className="h-5 w-5" /> 1</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">Focus</p>
              <p className="mt-1 font-display text-lg text-primary">Fundamentals</p>
            </div>
          </div>

          <div className="mt-8">
            <Button asChild className="rounded-full">
              <Link to="/contact">Get in touch <Mail className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={pitchImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center text-white md:px-6">
        <img src={logo} alt="Devsheel" width={260} height={132} className="mx-auto h-16 w-auto" loading="lazy" />
        <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] md:text-6xl">
          Come and <span className="shine-text">train with us.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          If you'd like to know more about session times, age groups or how to get involved, get in touch — a short message is all it takes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-gold-gradient text-ink shadow-gold hover:brightness-110">
            <Link to="/contact">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
