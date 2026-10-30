import React, { useState } from 'react';
import { Layers, Play, CheckCircle2, AlertCircle, RefreshCw, FolderGit2, Terminal, Code, Globe, Shield, ExternalLink } from 'lucide-react';

interface EcosystemTool {
  id: string;
  name: string;
  tagline: string;
  status: 'Ready' | 'In Development' | 'Installed';
  version: string;
  icon: any;
  repo: string;
}

export function App() {
  const [tools] = useState<EcosystemTool[]>([
    { id: 'forge-ide', name: 'Forge IDE', tagline: 'Monaco Editor ergonomics with Go concurrency daemon', status: 'Installed', version: 'v0.2.1', icon: Code, repo: 'https://github.com/ForgeNexa/forge-ide' },
    { id: 'forge-api', name: 'Forge API', tagline: 'Local-first API workbench with Go execution engine', status: 'Ready', version: 'v0.1.0', icon: Globe, repo: 'https://github.com/ForgeNexa/forge-api' },
    { id: 'forge-terminal', name: 'Forge Terminal', tagline: 'Authentic OS PTY supervisor with split multiplexing', status: 'Ready', version: 'v0.1.0', icon: Terminal, repo: 'https://github.com/ForgeNexa/forge-terminal' },
    { id: 'forge-git', name: 'Forge Git', tagline: 'Interactive visual commit topology & staging manager', status: 'Ready', version: 'v0.1.0', icon: FolderGit2, repo: 'https://github.com/ForgeNexa/forge-git' },
  ]);

  const [activeProject, setActiveProject] = useState<string>('gode-oss');

  return (
    <div className="flex h-screen bg-[#0F1115] text-[#C9D1D9] font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-[#30363D] bg-[#161B22] flex flex-col">
        <div className="p-4 border-b border-[#30363D] flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-[#58A6FF]" />
          <div>
            <div className="font-bold text-sm text-white">Forge Hub</div>
            <div className="text-[10px] text-gray-400">Ecosystem Launcher v0.1.0</div>
          </div>
        </div>

        <div className="p-3 text-xs text-gray-400 font-semibold uppercase tracking-wider">
          Recent Projects
        </div>
        <div className="flex-1 px-2 space-y-1 overflow-y-auto">
          {['gode-oss', 'forgenexa-site', 'forge-daemon', 'api-specs'].map((proj) => (
            <button
              key={proj}
              onClick={() => setActiveProject(proj)}
              className={`w-full text-left p-2 rounded text-xs font-mono truncate flex items-center justify-between ${
                activeProject === proj
                  ? 'bg-[#21262D] text-white border border-[#30363D]'
                  : 'text-gray-400 hover:bg-[#1C2128] hover:text-gray-200'
              }`}
            >
              <span>{proj}</span>
              <span className="text-[10px] text-gray-500">Go/TS</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Launcher Dashboard */}
      <div className="flex-1 flex flex-col overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto w-full space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">ForgeNexa Developer Suite</h1>
            <p className="text-gray-400 text-sm">
              Discover, launch, and configure independent local developer applications from one unified dashboard.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="p-5 rounded-lg bg-[#161B22] border border-[#30363D] hover:border-[#58A6FF] transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-md bg-[#21262D] text-[#58A6FF]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm flex items-center gap-2">
                          {tool.name}
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#21262D] text-gray-400">
                            {tool.version}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">{tool.tagline}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#21262D] mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-[#3FB950] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {tool.status}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={tool.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded hover:bg-[#21262D] text-gray-400 hover:text-white"
                        title="GitHub Repository"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button className="flex items-center gap-1.5 bg-[#58A6FF] hover:bg-[#4A92E6] text-black font-semibold text-xs px-3 py-1.5 rounded transition-colors">
                        <Play className="w-3 h-3 fill-current" />
                        <span>Launch</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* System Health */}
          <div className="p-4 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-between text-xs">
            <div className="flex items-center gap-3 text-gray-300">
              <Shield className="w-4 h-4 text-[#3FB950]" />
              <span>Forge Core IPC Daemon: Loopback active on port 59441</span>
            </div>
            <span className="text-[#58A6FF] font-mono">Zero Cloud Leakage Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}
