'use client';

import { motion } from 'framer-motion';
import { Mail, Share2, FileText, Heart } from 'lucide-react';

export default function Footer() {
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

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1"
          >
            <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Apex
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
              Intelligent automation platform for modern teams.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href, label }, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  title={label}
                  className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 transition-all duration-200"
                >
                  <Icon size={16} className="text-gray-400 hover:text-blue-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIdx * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-sm lg:text-base mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-y border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Stay updated
              </h3>
              <p className="text-sm text-gray-400">
                Get the latest updates on new features and AI automation insights.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs sm:text-sm text-gray-500">
            © {currentYear} Apex AI. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Status
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
