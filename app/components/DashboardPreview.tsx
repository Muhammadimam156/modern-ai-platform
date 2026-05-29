"use client";

import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Users', value: '12,543', change: '↑ 18.2%', up: true,  icon: '👥', color: 'text-white' },
  { label: 'Revenue',     value: '$245K',  change: '↑ 12.5%', up: true,  icon: '💰', color: 'text-blue-400' },
  { label: 'Growth Rate', value: '+32%',   change: '↑ 4.1%',  up: true,  icon: '📈', color: 'text-green-400' },
  { label: 'Active Tasks',value: '348',    change: '↓ 3 tasks',up: false, icon: '✦', color: 'text-purple-400' },
];

const bars = [22, 40, 30, 60, 52, 80, 70, 90, 62, 75, 85, 65];
const projBars = [37, 54, 45, 70, 60, 85, 78, 98, 70, 82, 90, 75];

const navMain = [
  { label: 'Overview',    icon: '⊞', active: true,  badge: null },
  { label: 'Analytics',   icon: '↗', active: false, badge: 'New' },
  { label: 'Automations', icon: '⚡', active: false, badge: null },
];
const navConfig = [
  { label: 'Integrations', icon: '⊕' },
  { label: 'Settings',     icon: '◎' },
];

const activities = [
  { dot: 'bg-green-400', text: 'Email Digest automation deployed', time: '2m ago' },
  { dot: 'bg-blue-400',  text: '156 users joined via referral',    time: '14m ago' },
  { dot: 'bg-amber-400', text: 'Revenue milestone $200K reached',  time: '1h ago' },
];

export default function DashboardPreview() {
  return (
    <div className="w-full flex justify-center items-center py-12 lg:py-20">
      {/* Outer glow */}
      <div
        className="absolute -inset-3 pointer-events-none rounded-2xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(37,99,235,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative rounded-2xl overflow-hidden border border-blue-500/[0.14] bg-slate-900 shadow-2xl shadow-black/50">

        {/* ── Title bar ── */}
        <h1 className="text-5xl font-bold text-white px-4 py-3 mt-3 text-center ">Productive analytics, simplified</h1>
        <p className=" text-slate-400 px-4 py-2">Monitor performance, automate work, and get predictive insights powered by AI.</p>
        <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.025] border-b border-white/[0.055]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>

        {/* ── Body: sidebar + main ── */}
        <div className="flex">

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col w-[168px] shrink-0 border-r border-white/[0.055] bg-white/[0.018] p-3">

            {/* Brand */}
            <div className="flex items-center gap-2.5 px-2 py-1.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shrink-0">
                A
              </div>
              <div>
                <p className="text-[12px] font-semibold text-white leading-none">Apex</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Workspace</p>
              </div>
            </div>

            {/* Nav — Main */}
            <p className="text-[9px] font-semibold text-slate-600 uppercase tracking-widest px-2 mb-1">
              Main
            </p>
            {navMain.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-[6px] rounded-lg text-[11px] mb-0.5 transition-colors ${
                  item.active
                    ? 'bg-blue-500/15 text-blue-300 font-medium'
                    : 'text-slate-500 hover:bg-white/5 hover:text-slate-300'
                }`}
              >
                <span className="text-[13px] w-4 text-center">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-[8px] font-semibold bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}

            {/* Nav — Config */}
            <p className="text-[9px] font-semibold text-slate-600 uppercase tracking-widest px-2 mt-3 mb-1">
              Config
            </p>
            {navConfig.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-2.5 py-[6px] rounded-lg text-[11px] text-slate-500 hover:bg-white/5 hover:text-slate-300 transition-colors mb-0.5"
              >
                <span className="text-[13px] w-4 text-center">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}

            {/* AI Usage meter */}
            <div className="mt-auto pt-4 px-1">
              <p className="text-[9px] text-slate-600 mb-1.5">AI Usage</p>
              <div className="h-1 bg-white/[0.07] rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              </div>
              <p className="text-[9px] text-slate-600 mt-1">72% of 1000 credits</p>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 p-4 lg:p-5 flex flex-col gap-4">

            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] font-semibold text-white">Good morning, Sarah 👋</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Here's what's happening today</p>
              </div>
              <div className="flex gap-2">
                <button className="text-[10px] px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-slate-400 font-medium">
                  Export
                </button>
                <button className="text-[10px] px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold">
                  + New
                </button>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-3 cursor-pointer hover:border-blue-500/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] text-slate-500 font-medium uppercase tracking-wide">
                      {s.label}
                    </span>
                    <span className="text-[11px] opacity-60">{s.icon}</span>
                  </div>
                  <p className={`text-[17px] font-bold mb-1.5 ${s.color}`}>{s.value}</p>
                  <span
                    className={`text-[9px] font-semibold px-1.5 py-0.5 rounded inline-block ${
                      s.up
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-red-500/10 text-red-400'
                    }`}
                  >
                    {s.change}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

              {/* Bar chart */}
              <div className="lg:col-span-2 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[11px] font-semibold text-white">Revenue Overview</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">Last 30 days · Actual vs Projected</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1 text-[8px] text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                      Actual
                    </span>
                    <span className="flex items-center gap-1 text-[8px] text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/25 inline-block" />
                      Projected
                    </span>
                  </div>
                </div>

                {/* Bars */}
                <div className="flex items-end gap-1 h-[72px]">
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                      <div
                        className="w-full bg-blue-500/[0.18] rounded-t-sm"
                        style={{ height: `${projBars[i]}%` }}
                      />
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Axis */}
                <div className="flex justify-between mt-1.5">
                  {['May 1', 'May 10', 'May 20', 'May 29'].map((d) => (
                    <span key={d} className="text-[8px] text-slate-600">{d}</span>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col gap-3">
                {/* AI Insights */}
                <div className="flex-1 bg-blue-500/[0.06] border border-blue-500/[0.16] rounded-xl p-3">
                  <div className="text-base mb-2">🤖</div>
                  <p className="text-[11px] font-semibold text-white">AI Insights</p>
                  <p className="text-[9px] text-slate-500 mt-0.5 mb-2">Powered by GPT-4</p>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    Save{' '}
                    <span className="text-blue-400 font-semibold">~6 hrs/week</span>{' '}
                    with automations. Revenue is{' '}
                    <span className="text-blue-400 font-semibold">+18%</span>{' '}
                    above forecast.
                  </p>
                </div>

                {/* Monthly Goal */}
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-3">
                  <div className="flex justify-between items-center mb-1.5">
                    <p className="text-[10px] font-semibold text-white">Monthly Goal</p>
                    <p className="text-[11px] font-bold text-blue-400">84%</p>
                  </div>
                  <div className="h-1 bg-white/[0.07] rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  </div>
                  <p className="text-[9px] text-slate-600 mt-1.5">$205K of $245K target</p>
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
              <p className="text-[11px] font-semibold text-white mb-2.5">Recent Activity</p>
              <div className="space-y-0">
                {activities.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 py-2 border-b border-white/[0.04] last:border-0 last:pb-0"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                    <span className="text-[10px] text-slate-400 flex-1">{a.text}</span>
                    <span className="text-[9px] text-slate-600 shrink-0">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}