"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function FinalCTA() {
  return (
    <section id="contact" className="w-full bg-slate-950 relative overflow-x-hidden flex justify-center mb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-700/10 via-transparent to-cyan-500/8 pointer-events-none" />

      <div className="relative w-full max-w-5xl px-6 lg:px-8 py-12 lg:py-20 mx-auto">
        <div className="mx-auto max-w-5xl soft-card p-8 sm:p-10 md:p-12 bg-linear-to-br from-slate-900/60 to-slate-900/40 border border-white/6">
          <AnimatedSection className="text-center space-y-6 sm:space-y-8" delay={0}>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                Start Scaling With AI Today
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Join thousands of teams already using Apex. Get started with a 14-day free trial—no credit card required.
              </p>
            </div>

            <AnimatedSection className="flex flex-col sm:flex-row gap-4 justify-center py-4" delay={0.12}>
                    <button className="bg-linear-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white px-8 sm:px-10 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/30 hover:scale-[1.02]">
                <span>Start Your Free Trial</span>
                <ArrowRight size={20} className="opacity-90" />
              </button>

              <button className="bg-white/6 hover:bg-white/12 border border-white/10 text-white px-8 sm:px-10 py-4 rounded-lg font-medium transition-all duration-200 text-base sm:text-lg flex items-center justify-center gap-2">
                Schedule Demo Call
              </button>
            </AnimatedSection>

            <AnimatedSection className="pt-8 border-t border-white/10" delay={0.24}>
              <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
                Trusted by teams at startups and enterprises
              </p>
              <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-white">4.9/5</p>
                  <p className="text-xs text-gray-400 mt-1">Average rating</p>
                </div>
                <div className="h-8 border-l border-white/10 hidden sm:block" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-white">10,000+</p>
                  <p className="text-xs text-gray-400 mt-1">Workflows automated</p>
                </div>
                <div className="h-8 border-l border-white/10 hidden sm:block" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-white">99.9%</p>
                  <p className="text-xs text-gray-400 mt-1">Uptime SLA</p>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, delay: 1, repeat: Infinity }}
        className="absolute bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-30 pointer-events-none"
      />
    </section>
  );
}
