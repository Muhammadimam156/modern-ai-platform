'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 sm:space-y-10"
        >
          {/* Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 text-white leading-tight">
              Start Scaling With AI Today
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
              Join thousands of teams already using Apex. Get started with a 14-day free trial—no credit card required.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 group text-base sm:text-lg">
              Start Your Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-200 text-base sm:text-lg">
              Schedule Demo Call
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
              Trusted by 5000+ companies and teams
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
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
          </motion.div>
        </motion.div>
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
