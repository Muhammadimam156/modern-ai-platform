'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Zap, BarChart3 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate 80% of routine tasks and reclaim 10+ hours per week.',
    },
    {
      icon: TrendingUp,
      title: 'Boost Productivity',
      description: 'Increase team output by 3x with intelligent workflow optimization.',
    },
    {
      icon: Zap,
      title: 'Automate Instantly',
      description: 'Set up complex automations in minutes without any coding.',
    },
    {
      icon: BarChart3,
      title: 'Optimize Operations',
      description: 'Monitor metrics and get AI-driven recommendations in real-time.',
    },
  ];

  return (
    <section id="solutions" className="w-full bg-slate-950 flex justify-center mb-0">
      <div className="w-full max-w-7xl px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Powerful Benefits for Your Team
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-12 leading-relaxed">
              Transform how your team works. Streamline operations, reduce manual work, and focus on what matters most.
            </p>

            <div className="space-y-6 py-2">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex gap-4 py-2"
                  >
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20 border border-blue-500/30">
                        <Icon className="text-blue-400" size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Comparison Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 gap-8"
          >
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 sm:p-8 overflow-hidden   ">
              <p className="text-xs font-semibold text-red-300 mb-4">Without Apex</p>
              <div className="space-y-3 ">
                <p className="text-white font-semibold text-sm sm:text-base break-words py-1">❌ Manual data entry 8 hours/day</p>
                <p className="text-white font-semibold text-sm sm:text-base break-words py-1">❌ Error rates 15-20%</p>
                <p className="text-white font-semibold text-sm sm:text-base break-words py-1">❌ Delayed reporting</p>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl  sm:p-8 overflow-hidden gap-4 mt-4">   
              <p className="text-xs font-semibold text-green-300 mb-4">With Apex</p>
              <div className="space-y-3">
                <p className="text-white font-semibold text-sm sm:text-base break-words py-1">✅ Fully automated workflows</p>
                <p className="text-white font-semibold text-sm sm:text-base break-words  py-1">✅ 99.9% accuracy</p>
                <p className="text-white font-semibold text-sm sm:text-base break-words py-1">✅ Real-time insights</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-3xl font-bold text-blue-400">10x</p>
                <p className="text-xs text-gray-400 mt-2">Faster Execution</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-3xl font-bold text-cyan-400">80%</p>
                <p className="text-xs text-gray-400 mt-2">Cost Reduction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
