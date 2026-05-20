"use client";

import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

export default function DashboardPreview() {
  return (
    <section className="w-full bg-slate-950 overflow-x-hidden flex justify-center mb-0">
      <div className="relative w-full max-w-7xl px-6 lg:px-8 py-12 lg:py-24">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/6 via-transparent to-cyan-500/6 pointer-events-none" />

        <AnimatedSection className="relative z-10 text-center mb-12 lg:mb-16" delay={0}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white">Productive analytics, simplified</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto prose-wide">Monitor performance, automate work, and get predictive insights powered by AI.</p>
        </AnimatedSection>

        <AnimatedSection className="relative z-10 w-full" delay={0.12}>
          <div className="w-full soft-card p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Side nav */}
              <aside className="lg:col-span-3 xl:col-span-2 hidden lg:block">
                <nav className="space-y-3">
                  <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/6 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold">A</div>
                    <div>
                      <p className="text-sm font-semibold text-white">Apex</p>
                      <p className="text-xs text-gray-400">Workspace</p>
                    </div>
                  </div>

                  {[
                    ['Overview', true],
                    ['Analytics', false],
                    ['Automations', false],
                    ['Integrations', false],
                    ['Settings', false],
                  ].map(([label, active], i) => (
                    <div
                      key={String(i)}
                      className={`px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        active ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-sm' : 'hover:bg-white/5 text-gray-300'
                      }`}
                    >
                      <span className="text-sm font-medium">{label}</span>
                      {active && <span className="text-xs text-white/90">●</span>}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main area */}
              <main className="lg:col-span-9 xl:col-span-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Users', value: '12,543', tone: 'white' },
                    { label: 'Revenue', value: '$245K', tone: 'blue' },
                    { label: 'Growth', value: '+32%', tone: 'green' },
                    { label: 'Active Tasks', value: '348', tone: 'white' },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6 }}
                      className="rounded-lg p-4 bg-white/5 border border-white/8"
                    >
                      <p className="text-xs text-gray-400 mb-2">{s.label}</p>
                      <p className={`text-lg sm:text-xl font-bold ${s.tone === 'blue' ? 'text-blue-300' : s.tone === 'green' ? 'text-green-300' : 'text-white'}`}>
                        {s.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-lg p-4 h-64 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-sm font-semibold text-white">Revenue (30d)</p>
                        <p className="text-xs text-gray-400">Projected revenue and churn</p>
                      </div>
                      <div className="text-xs text-gray-400">Last 30 days</div>
                    </div>

                    <div className="flex-1 flex items-end gap-2">
                      {[20, 40, 30, 60, 50, 80, 70, 90, 60, 75, 85].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-linear-to-t from-blue-500 to-cyan-400 rounded-t transition-all"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <aside className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-xs text-gray-400">AI Insights</p>
                      <p className="text-sm font-semibold text-white mt-2">Automations predicted to save 6h/week</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-xs text-gray-400">Health</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <p className="text-sm text-white">All systems operational</p>
                      </div>
                    </div>
                  </aside>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-white">Recent Activity</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      <li>✓ Workflow deployed (2m ago)</li>
                      <li>✓ Integration synced (5m ago)</li>
                      <li>✓ Report exported (20m ago)</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-white">Top Integrations</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Slack','Stripe','GitHub','Notion'].map((i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/3 rounded text-gray-200">{i}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-white">Quick Actions</p>
                    <div className="mt-3 flex flex-col gap-2">
                      <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">Create Workflow</button>
                      <button className="text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded">Connect Integration</button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            </div>
          </AnimatedSection>
      </div>
    </section>
  );
}
