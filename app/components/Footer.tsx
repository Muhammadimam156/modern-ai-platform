'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import { Mail, Share2, FileText, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState<'idle' | 'success'>('idle');
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API Docs', 'Community', 'Support'],
    Legal: ['Privacy', 'Terms', 'Compliance', 'Cookies'],
  };

  const socialIcons = [
    { Icon: Mail, href: 'mailto:hello@apex.ai', label: 'Email' },
    { Icon: Share2, href: '#', label: 'Share' },
    { Icon: FileText, href: '#', label: 'Blog' },
    { Icon: Heart, href: '#', label: 'Support' },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    setSubmitState('success');
    setEmail('');
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 flex justify-center">
      <div className="w-full max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        <div className="soft-card p-6 md:p-8 bg-white/2 border border-white/6 rounded-3xl">
          {/* Main Footer */}
          <div className="py-8 md:py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Brand */}
          <AnimatedSection className="col-span-2 sm:col-span-1" delay={0}>
            <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Apex
            </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              Premium AI automation for modern teams.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href, label }, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  title={label}
                  className="p-2 rounded-lg bg-white/3 hover:bg-blue-500/16 border border-white/8 hover:border-blue-500/30 transition-all duration-200"
                >
                  <Icon size={16} className="text-gray-300 hover:text-blue-400" />
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIdx) => (
            <AnimatedSection key={category} className="" delay={0.06 * categoryIdx}>
              <h4 className="text-white font-semibold text-sm lg:text-base mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter */}
        <AnimatedSection className="py-6 border-t border-white/5 mt-6" delay={0.12}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Stay updated</h3>
              <p className="text-sm text-gray-300">Get the latest updates on features and AI insights.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full flex-col sm:flex-row lg:w-auto max-w-lg gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-white/4 border border-white/8 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-shadow"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-3 bg-linear-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white rounded-lg font-semibold transition-transform hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
            {submitState === 'success' && (
              <p className="mt-3 text-xs sm:text-sm text-emerald-400">
                Thanks. We&apos;ll send updates to your inbox.
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Bottom */}
        <AnimatedSection className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400" delay={0.18}>
          <p className="text-xs sm:text-sm text-gray-400">© {currentYear} Apex AI. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </AnimatedSection>
        </div>
      </div>
    </footer>
  );
}
