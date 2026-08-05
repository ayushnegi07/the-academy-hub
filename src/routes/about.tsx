import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Compass, Users, Trophy, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import matchWide from "@/assets/match-wide.jpg";
import duelBall from "@/assets/duel-ball.jpg";
import runningPair from "@/assets/running-pair.jpg";
import sessionGround from "@/assets/session-ground.jpg";
import playerKit from "@/assets/player-kit.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Academy — Devsheel Football Academy" },
      {
        name: "description",
        content:
          "A young grassroots football academy training U10 to U18 — our approach, our values and photos from real sessions and matches.",
      },
      { property: "og:title", content: "The Academy — Devsheel Football Academy" },
      {
        property: "og:description",
        content: "Our approach, our values and photos from real Devsheel sessions and matches.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const gallery = [
  { src: matchWide, alt: "Devsheel players in a match on the main ground", caption: "Match day on the main ground" },
  { src: duelBall, alt: "Two players contesting the ball mid-air", caption: "Duels — every ball is competed for" },
  { src: runningPair, alt: "Two young players running side by side", caption: "Pressing and recovery runs" },
  { src: sessionGround, alt: "Training session with several balls in play", caption: "Small-group technical work" },
  { src: playerKit, alt: "Player in Devsheel academy kit during a session", caption: "The Devsheel kit" },
];

function AboutPage() {
  return (
    <>
      {/* HERO WITH PHOTO */}
      <section className="relative overflow-hidden py-28 text-white">
        <img src={matchWide} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" aria-hidden />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="absolute inset-0 pitch-lines opacity-25" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Badge className="mb-4 border-gold/40 bg-white/10 text-gold uppercase tracking-widest">
            The Academy
          </Badge>
          <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] md:text-7xl">
            Built on grit.
            <br />
            <span className="shine-text">Powered by belief.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            A young grassroots academy training four age groups — U10, U12, U15 and U18. No shortcuts,
            no gimmicks: just sessions, matches and steady work on the basics.
          </p>
        </div>
      </section>

      {/* STORY + PHOTO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={duelBall}
            alt="Devsheel players contesting the ball during a match"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold-gradient p-5 text-ink shadow-gold md:block">
            <p className="font-display text-4xl">4</p>
            <p className="text-xs font-black uppercase tracking-widest">Age groups</p>
          </div>
        </div>
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15 uppercase tracking-widest">
            Our story
          </Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-5xl">
            A young academy, done properly.
          </h2>
          <p className="mt-4 text-muted-foreground font-medium">
            Devsheel is new. We don't claim trophies we haven't won or facilities we don't have. What we
            do have is a proper ground, a full session plan and a coach who is at every training.
          </p>
          <p className="mt-3 text-muted-foreground font-medium">
            We play friendlies and local tournaments when they come up, and the rest of the time we work
            on first touch, movement, decisions and behaviour.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="rounded-full">
              <Link to="/programs">
                See our programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15 uppercase tracking-widest">
              Our values
            </Badge>
            <h2 className="font-display text-4xl uppercase md:text-5xl">The Devsheel Code.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, t: "Passion", d: "Love the ball. Love the process." },
              { icon: Compass, t: "Discipline", d: "On time, in kit, and in effort — every session." },
              { icon: Users, t: "Team", d: "Respect for teammates, opponents and the game." },
              { icon: Trophy, t: "Excellence", d: "Chase mastery, not just the scoreline." },
            ].map(({ icon: Icon, t, d }) => (
              <HoverCard key={t}>
                <HoverCardTrigger asChild>
                  <Card className="group cursor-pointer border-border transition hover:-translate-y-1 hover:shadow-lift">
                    <CardContent className="p-6">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="mt-4 font-display text-2xl uppercase">{t}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-sm">
                    Built into every session — small daily habits that compound into{" "}
                    <span className="font-semibold text-primary">{t.toLowerCase()}</span>.
                  </p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY (click to enlarge) */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 text-white">
        <div className="absolute inset-0 pitch-lines opacity-25" aria-hidden />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <Badge className="mb-4 border-gold/40 bg-white/10 text-gold uppercase tracking-widest">
              From the ground
            </Badge>
            <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-5xl">
              Real sessions.
              <br />
              <span className="shine-text">Real matches.</span>
            </h2>
            <p className="mt-4 text-white/85 font-medium">
              Photos from our own training and matches — tap any image to see it full size.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Dialog key={g.caption}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-lift transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold ${
                      i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-12 text-left">
                      <p className="text-xs font-black uppercase tracking-widest text-gold">
                        {g.caption}
                      </p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl border-white/10 bg-zinc-950 p-2 text-white">
                  <DialogTitle className="sr-only">{g.caption}</DialogTitle>
                  <DialogDescription className="sr-only">{g.alt}</DialogDescription>
                  <img src={g.src} alt={g.alt} className="w-full rounded-lg object-contain" />
                  <p className="px-3 pb-2 pt-1 text-xs font-black uppercase tracking-widest text-gold">
                    {g.caption}
                  </p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* GROUND / SETUP */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15 uppercase tracking-widest">
              Where we train
            </Badge>
            <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-5xl">
              One good ground is enough.
            </h2>
            <p className="mt-4 text-muted-foreground font-medium">
              We train on a full grass pitch with proper goals and space for small-sided work. Simple
              setup, well used — cones, balls, bibs and a session that starts on time.
            </p>
            <Button asChild className="mt-6 rounded-full">
              <Link to="/contact">
                Come and see a session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            <img
              src={sessionGround}
              alt="Devsheel training session on the grass pitch"
              className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover shadow-lift"
            />
            <img
              src={runningPair}
              alt="Two Devsheel players running during a match"
              className="aspect-square w-full rounded-2xl object-cover shadow-lift"
            />
            <img
              src={playerKit}
              alt="Player wearing the Devsheel academy kit"
              className="aspect-square w-full rounded-2xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>
    </>
  );
}
