'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import { Zap, BarChart3, Users, Workflow, Lightbulb, Cloud } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate repetitive tasks with intelligent agents that learn from your workflows.',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Get deep insights with real-time dashboards and actionable intelligence.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with built-in collaboration tools and permissions.',
    },
    {
      icon: Workflow,
      title: 'Visual Workflows',
      description: 'Create complex automations with intuitive drag-and-drop builders.',
    },
    {
      icon: Lightbulb,
      title: 'Real-Time Insights',
      description: 'Get instant notifications and live data updates as they happen.',
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Connect seamlessly with 500+ apps and custom APIs.',
    },
  ];

  return (
    <section id="features" className="w-full bg-slate-950 flex justify-center mb-0">
      <div className="w-full max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        <AnimatedSection className="text-center mb-16 lg:mb-24" delay={0}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white pb-2">Premium Features</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto py-3">Everything you need to scale your business with intelligent automation</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full min-h-65 flex flex-col relative bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-9 lg:p-10 hover:border-blue-500/40 hover:bg-blue-500/5 transition-transform duration-300 soft-card overflow-hidden"
              >
                <div className="mb-7 inline-flex p-3.5 bg-blue-500/20 rounded-2xl border border-blue-500/30 group-hover:border-blue-500/50 transition-all w-fit">
                  <Icon className="text-blue-400 group-hover:text-blue-300 transition-colors pb-2" size={24} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight py-2">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition-colors leading-7 flex-1 max-w-[32ch]">
                  {feature.description}
                </p>

                <div className="mt-8 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1">
                  <span className="text-sm font-semibold">Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
