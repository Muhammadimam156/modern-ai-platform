'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
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
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-white/10 border border-white/20 hover:border-white/30 transition-colors"
            >
              <motion.span
                className="inline-block h-6 w-6 transform rounded-full bg-blue-600"
                animate={{ x: isAnnual ? 28 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm font-semibold text-green-400">Save 17%</span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border transition-all duration-300 h-full flex flex-col overflow-hidden ${
                plan.highlighted
                  ? 'border-blue-500/50 bg-blue-500/10 ring-1 ring-blue-500/20'
                  : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
              }`}
            >
                

              <div className="p-6 sm:p-8 flex flex-col h-full">
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
                      ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
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
                      <span className="text-sm text-gray-300 break-words">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
