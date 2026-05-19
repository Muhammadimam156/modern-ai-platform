'use client';

import { motion } from 'framer-motion';

export default function DashboardPreview() {
  return (
    <section className="w-full bg-slate-950 overflow-x-hidden flex justify-center">
      <div className="relative w-full max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Powerful Dashboard
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Intuitive interface designed for modern teams
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-full"
        >
          {/* Dashboard Card */}
          <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl overflow-hidden w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500">Dashboard v1.0</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-3">
                  <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30 cursor-pointer">
                    <p className="text-xs font-semibold text-blue-300">Dashboard</p>
                  </div>
                  {['Reports', 'Analytics', 'Settings'].map((item) => (
                    <div key={item} className="p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                      <p className="text-xs text-gray-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Users', value: '12,543' },
                    { label: 'Revenue', value: '$245K' },
                    { label: 'Growth', value: '+32%' },
                    { label: 'Active Tasks', value: '348' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors">
                      <p className="text-xs text-gray-400 mb-2">{stat.label}</p>
                      <p className="text-lg sm:text-xl font-bold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-40 flex items-end justify-between gap-2">
                  {[65, 45, 70, 50, 80, 55, 90, 60, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-linear-to-t from-blue-500 to-cyan-400 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Activity List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white">Recent Activity</h4>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                      <span className="text-xs sm:text-sm text-gray-400">✓ Task completed successfully</span>
                      <span className="text-xs text-gray-500">{i} min ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
