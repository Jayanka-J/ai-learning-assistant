import { Link, useLocation } from "wouter";
import { Code2, Sparkles, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer" data-testid="link-home">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              AI<span className="text-muted-foreground">-learning-assistant</span>
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">
            <a className={`transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}>
              Overview
            </a>
          </Link>
          <a href="#features" className="text-muted-foreground transition-colors hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-primary">
            Architecture
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant={location === "/dashboard" ? "secondary" : "default"} className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-dashboard">
              <LayoutDashboard className="w-4 h-4" />
              Launch Mockup
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
