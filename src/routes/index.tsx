import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Heart, Zap, Shield, ChevronRight, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

// Make sure these images exist in your src/assets folder!
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
          "A new football academy training the next generation across four age groups: U10, U12, U15 and U18. Sessions built on fundamentals, discipline, and a love of the game.",
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

/* ---------------- HERO ---------------- */
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
        <div className="absolute inset-0 bg-black/60" /> {/* Darkened overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 pitch-lines opacity-30" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        {/* Added drop-shadow for visibility */}
        <h1 className="font-display text-5xl uppercase leading-[0.95] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] md:text-7xl lg:text-8xl">
          Where the <span className="shine-text">game</span>
          <br />
          begins.
        </h1>

        {/* Added strong drop-shadow to make this visible on the image */}
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
            <Link to="/contact">
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
          but the person off it. Hover any pillar to read a little more.
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
                  <h3 className="mt-5 font-display text-2xl uppercase text-zinc-950">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <p className="font-display text-lg uppercase text-primary">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">
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
  return (
    <section
      id="training"
      className="relative overflow-hidden bg-hero-gradient py-24 text-white scroll-mt-24 text-center"
    >
      <h2 className="font-display text-4xl uppercase md:text-6xl">Four age groups.</h2>
      <p className="mt-4">U10, U12, U15 and U18.</p>
    </section>
  );
}

/* ---------------- THE COACH ---------------- */
function TheCoach() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 flex flex-col items-center">
      <h2 className="font-display text-4xl uppercase text-zinc-950">One coach. Every session.</h2>
      <img src={logo} alt="" className="h-20 w-auto opacity-20 mt-8" />
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
        <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl">
          Come and <span className="shine-text">train with us.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="rounded-full bg-gold-gradient text-ink shadow-gold">
            <Link to="/contact">
              Contact us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
