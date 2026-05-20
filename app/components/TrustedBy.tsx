'use client';

import { motion } from 'framer-motion';

export default function TrustedBy() {
  const companies = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Framer', 'Raycast'];

  return (
    <section className="w-full bg-slate-950 border-b border-white/5 flex justify-center mb-0">
      <div className="w-full max-w-7xl px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-sm sm:text-base text-gray-300 mb-2">Trusted by innovative teams</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white py-2">Built for the world's best teams</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center py-4 px-3 sm:px-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors duration-300 group cursor-pointer"
            >
              <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium text-center">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
