'use client';

import { motion } from 'framer-motion';

export default function TrustedBy() {
  const companies = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Framer', 'Raycast'];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <p className="text-sm sm:text-base text-gray-400">Trusted by innovative teams</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8"
        >
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center py-4 px-3 sm:px-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors duration-300 group cursor-pointer"
            >
              <span className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors font-medium text-center">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
