import { useEffect, useState } from "react";
import { MessageSquare, X, Send, ArrowUp, Calendar, Trophy, Sparkles } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);
  const [announceOpen, setAnnounceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setAnnounceOpen(true), 3000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {announceOpen && (
        <div className="fixed bottom-24 left-4 z-40 w-[19rem] animate-in slide-in-from-left-6 fade-in duration-500 md:left-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-crimson-deep/90 p-5 backdrop-blur-xl shadow-2xl">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
            <button
              onClick={() => setAnnounceOpen(false)}
              className="absolute right-3 top-3 text-white/40 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-ink">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">
                  Now training
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-white/70">
                  U10 · U12 · U15 · U18 trial spots.
                </p>
                <a
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-white hover:text-gold"
                >
                  Contact Now <Sparkles className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
        {showTop && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-crimson-deep/80 text-white backdrop-blur-md transition-all hover:bg-gold hover:text-ink"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">Scroll up</TooltipContent>
          </Tooltip>
        )}

        <Popover>
          <PopoverTrigger asChild>
            <button className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-ink shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-transform hover:scale-105 active:scale-95">
              <MessageSquare className="h-7 w-7" />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-crimson-deep bg-white text-[10px] font-black text-black">
                1
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            side="top"
            align="end"
            className="w-80 overflow-hidden rounded-[2rem] border-white/10 bg-crimson-deep p-0 shadow-2xl backdrop-blur-2xl"
          >
            <div className="bg-gold-gradient p-6 text-ink">
              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6" />
                <div>
                  <p className="text-sm font-black uppercase tracking-widest">Talk to us</p>
                  <p className="text-[10px] opacity-70">Coach online now</p>
                </div>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Sent!");
                (e.target as any).reset();
              }}
              className="space-y-3 p-6"
            >
              <Input
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Name"
                required
              />
              <Input
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                type="email"
                placeholder="Email"
                required
              />
              <Textarea
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                placeholder="Message"
                required
              />
              <Button type="submit" className="w-full bg-gold-gradient py-6 font-bold text-ink">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
