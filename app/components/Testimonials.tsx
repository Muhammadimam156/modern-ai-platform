'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      content:
        'Apex transformed our workflow completely. We saved 40 hours per week and increased productivity by 3x.',
      avatar: 'SJ',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director at DataCorp',
      content:
        'The best investment we made this year. Apex eliminated manual data entry entirely.',
      avatar: 'MC',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder at CreativeStudio',
      content:
        'Simple, elegant, and incredibly powerful. No coding required. Highly recommend.',
      avatar: 'ER',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Head of Operations at InnovateCo',
      content:
        'The analytics dashboard is phenomenal. Real-time insights help us make better decisions instantly.',
      avatar: 'DT',
      rating: 5,
    },
    {
      name: 'Jessica Lee',
      role: 'Project Manager at Velocity',
      content:
        'Apex is a productivity superpower. My team was skeptical at first, but now everyone loves it.',
      avatar: 'JL',
      rating: 5,
    },
    {
      name: 'Alex Patel',
      role: 'CTO at DigitalFirst',
      content:
        'The API integrations are seamless. Apex connects with all our tools perfectly.',
      avatar: 'AP',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-32 px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Loved by Teams</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            See what customers say about Apex
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
