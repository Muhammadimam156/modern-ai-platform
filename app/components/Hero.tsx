'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full relative bg-slate-950 overflow-x-hidden flex justify-center pt-24 lg:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      
      <div className="relative w-full max-w-7xl px-6 lg:px-8 py-16 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 w-fit"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-xs sm:text-sm font-medium text-blue-300">AI-Powered Platform</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-2xl"
            >
              Scale Your Business with <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Automation</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Unlock the power of intelligent automation. Streamline workflows, boost productivity, gain real-time insights, and optimize operations with cutting-edge AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                View Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center w-full"
          >
            <div className="w-full max-w-md relative">
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                {/* Window controls */}
                <div className="flex items-center gap-2 mb-6 pb-6 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Dashboard content */}
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-xs text-gray-400 mb-2">Revenue</p>
                      <p className="text-xl font-bold text-white">$24.5K</p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <p className="text-xs text-blue-300 mb-2">Growth</p>
                      <p className="text-xl font-bold text-blue-300">+32%</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 h-24 flex items-end justify-center gap-1">
                    {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-linear-to-t from-blue-500 to-cyan-400 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  {/* Activity */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-300">Recent Activity</p>
                    <p className="text-sm text-gray-400">✓ Task automated 2m ago</p>
                    <p className="text-sm text-gray-400">✓ Report generated 5m ago</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg px-3 py-1 text-white text-xs font-semibold shadow-xl">
                  AI Active
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
