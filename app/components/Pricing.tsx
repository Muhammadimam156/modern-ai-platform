"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for getting started',
      features: [
        'Up to 5 team members',
        '100 AI automation tasks/month',
        'Basic analytics',
        'Email support',
        'Community access',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Pro',
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: 'For growing teams',
      features: [
        'Up to 50 team members',
        'Unlimited AI automation',
        'Advanced analytics & reporting',
        'Priority email & chat support',
        'Custom integrations',
        'API access',
        'Advanced security',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone & email support',
        'Advanced security features',
        'SLA guarantee',
        'Custom training',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="pricing" className="w-full bg-slate-950 flex justify-center mb-0">
      <div className="w-full max-w-7xl px-6 lg:px-8 py-12 lg:py-24">
        <AnimatedSection className="text-center mb-16 lg:mb-20" delay={0}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Simple Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 py-2">
            Choose the perfect plan for your team. Flexible and transparent.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 py-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-pressed={isAnnual}
              className="inline-flex h-8 w-16 items-center rounded-full bg-white/6 border border-white/10 p-1 transition-colors"
            >
              <div className={`flex w-full items-center ${isAnnual ? 'justify-end' : 'justify-start'} px-1`}> 
                <span className="h-6 w-6 rounded-full bg-blue-600 shadow-sm" />
              </div>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm font-semibold text-emerald-400">Save 17%</span>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" delay={0.12}>
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl transition-all duration-300 h-full flex flex-col overflow-hidden soft-card shadow-md ${
                plan.highlighted
                  ? 'ring-2 ring-offset-2 ring-blue-500/30 bg-gradient-to-br from-slate-900/60 to-slate-900/40'
                  : 'border border-white/10 bg-white/5 hover:scale-[1.01]'
              }`}
            >


              <div className="p-6 sm:p-8 flex flex-col h-full">
                {plan.highlighted && (
                  <div className="absolute -top-3 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white shadow-sm">
                    Most popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-2 py-2">
                        <span className="text-3xl sm:text-4xl font-bold text-white">
                          ${isAnnual ? (plan.yearlyPrice! / 12).toFixed(0) : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-300 text-sm">/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-xs text-gray-300">
                          ${plan.yearlyPrice}/year billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-lg font-semibold text-white">Custom pricing</p>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4 flex-1">
                  <p className="text-xs font-semibold text-gray-300 uppercase py-2  ">Includes</p>
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
