import { useLocation } from "wouter";
import { useState } from "react";
import { 
  FolderTree, 
  FileCode2, 
  TerminalSquare, 
  MessageSquare, 
  Play, 
  Bug, 
  GitBranch, 
  Settings,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Search
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import skillTreeImg from "@/assets/images/skill-tree.png";

const MOCK_CODE = `import { APIGatewayProxyHandler } from 'aws-lambda';
import { analyzeCodeContext } from './ai-core';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const { code, cursorPosition, language } = JSON.parse(event.body || '{}');
    
    // AI analyzes codebase architecture and style
    const context = await analyzeCodeContext({
      currentFile: code,
      position: cursorPosition,
      userId: event.requestContext.authorizer?.claims.sub
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ suggestions: context.recommendations })
    };
  } catch (error) {
    // BUG: Unhandled edge case when event.body is null
    console.error('Error analyzing context:', error);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};`;

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'editor' | 'progress'>('editor');

  return (
    <div className="h-[calc(100vh-4rem)] flex overflow-hidden bg-background">
      {/* Sidebar - File Explorer */}
      <div className="w-64 border-r border-white/5 bg-[#0a0a0f] flex flex-col shrink-0">
        <div className="p-3 border-b border-white/5 flex items-center justify-between text-xs font-medium text-muted-foreground tracking-wider uppercase">
          <span>Explorer</span>
          <Settings className="w-3.5 h-3.5" />
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-white/5 text-sm cursor-pointer text-white/90">
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
              <FolderTree className="w-4 h-4 text-blue-400" />
              <span>backend-services</span>
            </div>
            <div className="ml-4 pl-2 border-l border-white/10 space-y-1">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-sm cursor-pointer text-muted-foreground">
                <FileCode2 className="w-4 h-4 text-yellow-400" />
                <span>ai-core.ts</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-primary/10 text-primary text-sm cursor-pointer border border-primary/20">
                <FileCode2 className="w-4 h-4 text-primary" />
                <span>analyzer.ts</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-sm cursor-pointer text-muted-foreground">
                <FileCode2 className="w-4 h-4 text-blue-400" />
                <span>types.ts</span>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="p-3 border-t border-white/5 text-xs text-muted-foreground flex items-center gap-2">
          <GitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Editor Tabs */}
        <div className="flex items-center h-10 border-b border-white/5 bg-[#0a0a0f] overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveTab('editor')}
            className={`px-4 h-full flex items-center gap-2 text-sm border-r border-white/5 transition-colors ${activeTab === 'editor' ? 'bg-background text-primary border-t-2 border-t-primary' : 'text-muted-foreground hover:bg-white/5'}`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            analyzer.ts
          </button>
          <button 
            onClick={() => setActiveTab('progress')}
            className={`px-4 h-full flex items-center gap-2 text-sm border-r border-white/5 transition-colors ${activeTab === 'progress' ? 'bg-background text-secondary border-t-2 border-t-secondary' : 'text-muted-foreground hover:bg-white/5'}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Learning Path
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {activeTab === 'editor' ? (
            <>
              {/* Editor */}
              <ScrollArea className="flex-1 bg-[#0d0d12]">
                <div className="p-4 font-mono text-[13px] leading-relaxed">
                  <pre className="text-white/80">
                    <code className="code-block-glow rounded-md block">
                      {MOCK_CODE.split('\n').map((line, i) => (
                        <div key={i} className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors group">
                          <span className="w-8 shrink-0 text-muted-foreground/50 select-none text-right pr-4">{i + 1}</span>
                          <span className={line.includes('BUG') ? "text-destructive font-bold bg-destructive/10 -mx-1 px-1 rounded" : ""}>
                            {line}
                          </span>
                          {line.includes('BUG') && (
                            <span className="ml-auto opacity-0 group-hover:opacity-100 flex items-center gap-1 text-xs text-destructive bg-destructive/20 px-2 py-0.5 rounded cursor-pointer transition-opacity">
                              <Bug className="w-3 h-3" /> Fix Issue
                            </span>
                          )}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </ScrollArea>

              {/* Terminal/Debugger Panel */}
              <div className="h-48 border-t border-white/5 bg-[#0a0a0f] flex flex-col shrink-0">
                <div className="flex items-center gap-4 px-3 border-b border-white/5 h-8 text-xs font-medium">
                  <button className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5"><TerminalSquare className="w-3.5 h-3.5"/> Terminal</button>
                  <button className="text-destructive border-b-2 border-destructive flex items-center gap-1.5 h-full"><Bug className="w-3.5 h-3.5"/> Debug Console</button>
                </div>
                <ScrollArea className="flex-1 p-2 font-mono text-[11px]">
                  <div className="text-muted-foreground mb-1">Debugger attached.</div>
                  <div className="text-destructive flex gap-2">
                    <span className="shrink-0">[ERROR]</span>
                    <span>TypeError: Cannot read properties of null (reading 'body')<br/>
                    at handler (analyzer.ts:18:28)</span>
                  </div>
                  <div className="text-primary mt-2 flex gap-2 items-start bg-primary/5 p-2 rounded border border-primary/20">
                    <Sparkles className="w-3 h-3 shrink-0 mt-0.5" />
                    <span><strong>AI Suggestion:</strong> The error occurs because <code>event.body</code> might be null. You should provide a fallback or early return. Click 'Fix Issue' in the editor to apply a safe parsing wrapper.</span>
                  </div>
                </ScrollArea>
              </div>
            </>
          ) : (
            /* Progress Tracker Tab */
            <div className="flex-1 p-8 bg-background overflow-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="text-secondary w-6 h-6" />
                  Your Skill Progression
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-panel p-6 rounded-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img src={skillTreeImg} alt="Skill Tree" className="w-full h-auto rounded border border-white/5 mb-4" />
                    <h3 className="font-semibold mb-2">AWS Serverless Patterns</h3>
                    <div className="w-full bg-white/5 rounded-full h-2 mb-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground text-right">65% Mastered</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b border-white/5 pb-2">Recommended Lessons</h3>
                    {[
                      { title: "Handling Edge Cases in Lambdas", time: "15 min", type: "Fixing your recent bugs", color: "text-red-400" },
                      { title: "Optimizing AST Parsers", time: "45 min", type: "Next level up", color: "text-primary" },
                      { title: "Vector Embeddings Basics", time: "30 min", type: "Related to current project", color: "text-secondary" }
                    ].map((lesson, i) => (
                      <div key={i} className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer flex items-center justify-between group">
                        <div>
                          <div className="font-medium text-sm text-white/90">{lesson.title}</div>
                          <div className={`text-xs mt-1 ${lesson.color}`}>{lesson.type}</div>
                        </div>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - AI Assistant */}
      <div className="w-80 border-l border-white/5 bg-[#0a0a0f] flex flex-col shrink-0">
        <div className="p-3 border-b border-white/5 flex items-center gap-2">
          <div className="bg-primary/20 p-1.5 rounded text-primary">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-medium text-sm">AI Tutor</span>
        </div>
        
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                <Sparkles className="w-3 h-3 text-primary" />
              </div>
              <div className="text-sm">
                <p className="text-white/90 leading-relaxed mb-2">
                  I noticed you're working on the AST analysis lambda. I see a potential bug on line 18. Would you like me to walk through the root cause visually?
                </p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="h-7 text-xs bg-primary/10 border-primary/20 text-primary hover:bg-primary/20">Explain like I'm 5</Button>
                  <Button size="sm" variant="outline" className="h-7 text-xs border-white/10 hover:bg-white/5">Ignore</Button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 border border-secondary/30">
                <span className="text-[10px] text-secondary">ME</span>
              </div>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg rounded-tr-none p-3 text-sm text-white/90 max-w-[85%]">
                Yes, please show me the visual call stack for this error.
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="p-3 border-t border-white/5 bg-background/50">
          <div className="relative">
            <Input 
              placeholder="Ask about your code..." 
              className="bg-black/50 border-white/10 pr-8 text-sm focus-visible:ring-primary h-9"
            />
            <MessageSquare className="w-4 h-4 absolute right-2.5 top-2.5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
