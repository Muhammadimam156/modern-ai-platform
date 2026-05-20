'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to set up Apex?',
      answer:
        'You can get started in minutes. Our intuitive setup wizard guides you through the process, and most users have their first automation running within 15 minutes of signing up.',
    },
    {
      question: 'Do I need technical skills to use Apex?',
      answer:
        'Not at all! Apex is designed for non-technical users. Our visual workflow builder makes it easy to create complex automations without writing a single line of code.',
    },
    {
      question: 'Can Apex integrate with my existing tools?',
      answer:
        'Yes! Apex integrates with 500+ popular applications including Slack, Salesforce, HubSpot, Stripe, and more. We also provide API access for custom integrations.',
    },
    {
      question: 'What happens to my data?',
      answer:
        'Your data is encrypted end-to-end and stored in secure, redundant data centers. We comply with GDPR, CCPA, SOC 2, and other major compliance standards.',
    },
    {
      question: 'Can I try Apex before buying?',
      answer:
        'Absolutely! We offer a 14-day free trial with full access to all Pro features. No credit card required to get started.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We provide email support for all plans, 24/7 chat support for Pro plans, and dedicated account managers for Enterprise customers.',
    },
  ];

  return (
    <section id="faq" className="w-full bg-slate-950 flex justify-center mb-0">
      <div className="w-full max-w-4xl px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 py-2">
            Everything you need to know about Apex
          </p>
        </motion.div>

        <div className="space-y-5 lg:space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full px-6 sm:px-8 py-5 sm:py-6 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-left"
              >
                <span className="font-semibold text-white text-sm sm:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={20}
                    className="text-gray-300 shrink-0"
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 sm:px-8 py-5 sm:py-6 bg-white/5 border-t border-white/10 overflow-hidden">
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base pt-2">
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
