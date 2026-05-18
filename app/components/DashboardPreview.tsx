'use client';

import { motion } from 'framer-motion';

export default function DashboardPreview() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Powerful Dashboard</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Intuitive interface designed for modern teams
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-3xl blur-3xl" />

          {/* Dashboard Card */}
          <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500">Dashboard v1.0</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
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
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-40 flex items-end justify-between gap-2">
                  {[65, 45, 70, 50, 80, 55, 90, 60, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t opacity-80 hover:opacity-100 transition-opacity"
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

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 shadow-2xl max-w-xs hidden sm:block"
          >
            <p className="text-white text-xs font-semibold mb-2">Performance</p>
            <p className="text-white text-2xl font-bold">+127%</p>
            <p className="text-blue-200 text-xs mt-1">Efficiency improved</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl p-6 shadow-2xl max-w-xs hidden sm:block"
          >
            <p className="text-white text-xs font-semibold mb-2">AI Status</p>
            <p className="text-white text-lg font-bold">Active</p>
            <p className="text-cyan-200 text-xs mt-1">Processing 1,248 tasks</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
