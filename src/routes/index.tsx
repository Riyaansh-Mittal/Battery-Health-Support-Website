import { createFileRoute } from "@tanstack/react-router";
import {
  BatteryCharging,
  BellRing,
  HeartPulse,
  ShieldCheck,
  Zap,
  Thermometer,
  Flame,
  Target,
  Siren,
  Smartphone,
  Moon,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  {
    icon: BellRing,
    title: "The 80% Charge Alarm",
    tag: "Free forever",
    desc: "Set a custom charge limit (70–95%) and get alerted the moment you hit it. The alarm loops every 60 seconds until you unplug — so you never wake up to an overcharged battery.",
  },
  {
    icon: BatteryCharging,
    title: "The 20% Low Battery Alarm",
    tag: "Also free",
    desc: "Get warned before you're stranded with a dead phone. Set your own low-battery threshold and never miss the alert.",
  },
  {
    icon: HeartPulse,
    title: "Real Battery Health",
    tag: "No fake scans",
    desc: "Your real health percentage is calculated only after genuine charging sessions — no made-up numbers. Once ready, tap to view a shareable health card, perfect before buying or selling a used phone.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Tracking",
    tag: "100% on-device",
    desc: "We collect nothing and share nothing beyond the ads that keep this app free. No GPS, no hidden background analytics, no data sold.",
  },
  {
    icon: Zap,
    title: "Fake Charger Detector",
    tag: "Rare & free",
    desc: "See your real mA charging output in seconds. Instantly spot unstable, underpowered, or counterfeit chargers before they damage your battery.",
  },
  {
    icon: Thermometer,
    title: "Overheat Protection",
    tag: "°C & °F",
    desc: "Live temperature alerts warn you before silent thermal damage happens while charging, with clear next steps like removing your case.",
  },
  {
    icon: Smartphone,
    title: "Works On Every Major Brand",
    tag: "Setup guides",
    desc: "Samsung, Xiaomi, Oppo, Realme, Vivo, and OnePlus aggressively kill background apps. We built a step-by-step setup guide for every major manufacturer so your alarms actually fire.",
  },
  {
    icon: Moon,
    title: "True Black Dark Mode",
    tag: "Easy on eyes",
    desc: "A genuine true-black theme (not dark gray), easy on your eyes and your screen's battery drain.",
  },
  {
    icon: Flame,
    title: "Charging Streaks",
    tag: "Gamified",
    desc: "Build healthy charging habits with a daily streak counter and milestone rewards for consistent 80% charging.",
  },
  {
    icon: Target,
    title: "Built For You",
    tag: "Adaptive home",
    desc: "Tell us who you are — general user, gamer, gig driver, or power user — and the home screen adapts to show what matters most first.",
  },
  {
    icon: Siren,
    title: "Crisis Mode",
    tag: "Survival screen",
    desc: "One tap activates a stripped-down survival screen with a live drain countdown — built for power outages, load-shedding, and long shifts.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
          <img
            src="/app-icon.png"
            alt="Battery Health Monitor Alarm app icon"
            className="mx-auto mb-8 h-24 w-24 rounded-3xl glow-ring"
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Free forever · No account · No subscription
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
            Stop charging your phone to{" "}
            <span className="text-primary text-glow">100% overnight.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            It silently destroys your battery every single night. Battery Health Monitor Alarm gives
            you real charging protection — a looping charge alarm, honest battery health tracking, and
            a fake charger detector. Completely free, with zero tracking.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <span className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground glow-ring">
              <BatteryCharging className="h-5 w-5" />
              Coming soon to Google Play
            </span>
            <span className="text-sm text-muted-foreground">Currently in closed testing</span>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="mx-auto max-w-5xl px-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["0", "Trackers"],
            ["$0", "Forever"],
            ["60s", "Alarm loop"],
            ["6+", "Brands supported"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-card p-5 text-center">
              <div className="text-3xl font-bold text-primary">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything you need to protect your battery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Lightweight, privacy-first, and built around one idea: keep your battery healthy without
            selling your data.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, tag, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wide text-primary">
                {tag}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
          <h2 className="relative text-3xl font-bold sm:text-4xl">
            Download free. No account. No tricks.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            The 80% charge alarm, low battery alarm, real health tracking, and fake charger detection
            are all free, permanently — with no subscription tier and no ads on the alarm or health
            screens.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
