import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/app-icon.png" alt="Battery Health Monitor Alarm icon" className="h-9 w-9 rounded-xl" />
          <span className="hidden text-sm font-semibold sm:block">Battery Health Monitor Alarm</span>
          <span className="text-sm font-semibold sm:hidden">BHM Alarm</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/privacy"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 text-foreground" }}
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 text-foreground" }}
          >
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/app-icon.png" alt="" className="h-7 w-7 rounded-lg" />
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Battery Health Monitor Alarm
          </span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="transition-colors hover:text-foreground">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
