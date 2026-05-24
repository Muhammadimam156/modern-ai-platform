"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const avatarStyles = [
  'from-blue-500 to-cyan-400',
  'from-indigo-500 to-blue-500',
  'from-cyan-500 to-teal-400',
  'from-sky-500 to-blue-400',
  'from-violet-500 to-fuchsia-500',
  'from-emerald-500 to-cyan-500',
];

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
    <section id="testimonials" className="w-full bg-slate-950 flex justify-center mb-0">
      <div className="w-full max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        <AnimatedSection className="text-center mb-16 lg:mb-20" delay={0}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white ">
            Loved by Teams
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            See what customers say about Apex
          </p>
        </AnimatedSection>

        {/* Large screens: grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 py-2">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="soft-card bg-white/4 border border-white/6 rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm line-clamp-4">"{testimonial.content}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-linear-to-br ${avatarStyles[idx % avatarStyles.length]} flex items-center justify-center shrink-0 shadow-lg`}>
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-300 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small screens: single-item fade carousel */}
        <div className="lg:hidden py-2">
          <MobileCarousel items={testimonials} />
        </div>
      </div>
    </section>
  );
}

function MobileCarousel({ items }: { items: any[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <div className="relative">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={i === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6 }}
          className={`${i === index ? 'block' : 'hidden'} soft-card bg-white/4 border border-white/6 rounded-2xl p-6`}
        >
          <div className="flex gap-2 mb-3">
            {[...Array(item.rating)].map((_, s) => (
              <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{item.content}"</p>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-linear-to-br ${avatarStyles[i % avatarStyles.length]} flex items-center justify-center shrink-0 shadow-lg`}>
              <span className="text-white font-semibold text-xs">{item.avatar}</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{item.name}</p>
              <p className="text-gray-300 text-xs">{item.role}</p>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/20'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
