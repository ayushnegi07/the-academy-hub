import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Heart, Compass, Users, ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import heroImg from "@/assets/hero-training.jpg";
import pitchImg from "@/assets/pitch-aerial.jpg";
import celebrateImg from "@/assets/celebrate.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Academy — Devsheel Football Academy" },
      { name: "description", content: "Discover Devsheel's story, philosophy, world-class facilities, and the values that shape our footballers on and off the pitch." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient py-24 text-white">
        <div className="absolute inset-0 pitch-lines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Badge className="mb-4 border-gold/40 bg-white/10 text-gold">The Academy</Badge>
          <h1 className="max-w-3xl font-display text-5xl uppercase leading-[0.95] md:text-7xl">
            Built on grit.<br /><span className="shine-text">Powered by belief.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Founded in 2008 by former professionals who wanted a smarter path for the next generation, Devsheel has grown from a single pitch to one of the country's most respected youth academies.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img src={heroImg} alt="Training" className="rounded-3xl object-cover shadow-lift" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold-gradient p-5 text-ink shadow-gold md:block">
            <p className="font-display text-4xl">18</p>
            <p className="text-xs uppercase tracking-widest">Years developing talent</p>
          </div>
        </div>
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">Our story</Badge>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-5xl">A different kind of academy.</h2>
          <p className="mt-4 text-muted-foreground">
            We reject the "sink or swim" model. At Devsheel, players don't just survive the grind — they thrive because of the environment. Modern coaching, cutting-edge analytics, and old-school work ethic combine to produce complete footballers.
          </p>
          <p className="mt-3 text-muted-foreground">
            Whether a player is bound for the Premier League or simply falling in love with the game, they receive the same standard of care, curriculum, and community.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="rounded-full">
              <Link to="/programs">See our programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">Our values</Badge>
            <h2 className="font-display text-4xl uppercase md:text-5xl">The Devsheel Code.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, t: "Passion", d: "Love the ball. Love the process. Love the badge." },
              { icon: Compass, t: "Discipline", d: "Standards on time, in kit, and in effort — every session." },
              { icon: Users, t: "Team", d: "The badge on the front matters more than the name on the back." },
              { icon: Trophy, t: "Excellence", d: "Chase mastery, not just victory." },
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
                  <p className="text-sm">Every training block includes a <span className="font-semibold text-primary">{t.toLowerCase()}</span> ritual — small daily habits that compound into character.</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">Facilities</Badge>
            <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-5xl">A ground built for greatness.</h2>
            <p className="mt-4 text-muted-foreground">Two full-size 3G pitches, a covered indoor arena, performance gym, sports-science lab, and video analysis suite — all on one 12-acre site.</p>
            <div className="mt-6 flex gap-2 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm text-muted-foreground">FA Category A rated</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            <img src={pitchImg} alt="Pitch" className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover shadow-lift" loading="lazy" />
            <img src={celebrateImg} alt="Celebration" className="aspect-square w-full rounded-2xl object-cover shadow-lift" loading="lazy" />
            <img src={heroImg} alt="Training" className="aspect-square w-full rounded-2xl object-cover shadow-lift" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
