import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BrainCircuit, 
  Bug, 
  GraduationCap, 
  BookOpen, 
  LineChart, 
  ShieldCheck,
  ArrowRight,
  Terminal,
  Zap
} from "lucide-react";
import { Link } from "wouter";
import heroBg from "@/assets/images/hero-bg.png";

const features = [
  {
    title: "Smart Code Assistant",
    description: "Real-time code suggestions, autocomplete with explanations, refactoring recommendations with before/after comparisons.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    title: "Intelligent Debugger",
    description: "Identifies bugs with root cause analysis, suggests fixes with explanations, and visual execution flow tracking.",
    icon: Bug,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Concept Explorer",
    description: "Interactive tutorials for algorithms, data structures, and design patterns with visual animations.",
    icon: GraduationCap,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Documentation Navigator",
    description: "Searches libraries, APIs, and frameworks with contextual examples relevant to your current work.",
    icon: BookOpen,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Progress Tracker",
    description: "Skill tree visualization, achievement badges, and personalized learning recommendations based on gaps.",
    icon: LineChart,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    title: "Code Review Assistant",
    description: "Analyzes code quality, security vulnerabilities, and performance bottlenecks with actionable suggestions.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-500/10"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroBg} alt="Abstract Network" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-8 border-primary/50 text-primary bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <BrainCircuit className="w-4 h-4 mr-2" />
            Next-Gen Context-Aware Intelligence
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Learn, Debug, and Build <br className="hidden md:block" />
            <span className="text-gradient-cyan">Smarter with AI.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Unlike generic assistants, we understand your entire codebase context and learning patterns to provide personalized explanations tailored to your skill level.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg w-full sm:w-auto rounded-xl shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.6)]" data-testid="button-try-demo">
                Launch Interactive Mockup
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto border-white/10 hover:bg-white/5 rounded-xl glass-panel">
              <Terminal className="mr-2 w-5 h-5" />
              View Architecture
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-card/50 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Supercharge Your Productivity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our AI reasoning core acts as a senior pair programmer that actively tracks your growth and adapts its teaching style.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <Card key={i} className="bg-background/40 border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-display">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
