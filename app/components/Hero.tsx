"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

const stats = [
  {
    label: "Total Users",
    value: "12,543",
    change: "+18.2%",
    up: true,
    icon: "👥",
    color: "text-white",
  },
  {
    label: "Revenue",
    value: "$245K",
    change: "+12.5%",
    up: true,
    icon: "💰",
    color: "text-cyan-400",
  },
  {
    label: "Growth Rate",
    value: "+32%",
    change: "+4.1%",
    up: true,
    icon: "📈",
    color: "text-emerald-400",
  },
  {
    label: "Active Tasks",
    value: "348",
    change: "-3 tasks",
    up: false,
    icon: "✦",
    color: "text-purple-400",
  },
];

const chartBars = [32, 45, 40, 68, 52, 80, 74, 92, 70, 76, 88, 65];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-slate-950 pt-24 lg:pt-28">

      {/* Background Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Main Container */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-20 lg:px-8 lg:py-24">

        {/* GRID */}
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

          {/* ── LEFT SIDE ── */}
          <div className="relative z-10 flex w-full flex-col items-center text-center lg:items-start lg:text-left">

            {/* Badge */}
            <AnimatedSection
              delay={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              <span className="text-xs font-medium text-blue-300">
                AI-Powered SaaS Platform
              </span>
            </AnimatedSection>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, type: "spring", stiffness: 90 }}
              className="mb-6 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              Scale Your Business
             
              with {" "}
               <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Automation
              </span>
            </motion.h1>

            {/* Description */}
            <AnimatedSection
              delay={0.2}
              className="pb-2  max-w-[520px] text-sm leading-relaxed text-slate-400 sm:text-[15px]"
            >
              Automate workflows, unlock actionable insights, and help your
              team move faster with a modern AI platform built for scale.
            </AnimatedSection>

            {/* Buttons */}
            <AnimatedSection
              delay={0.3}
              className="mb-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-7 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-400 hover:to-cyan-400"
              >
                Start Free Trial
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Book a Demo
              </motion.button>
            </AnimatedSection>

            {/* Social Proof */}
            <AnimatedSection
              delay={0.4}
              className="flex flex-col items-center gap-4 lg:flex-row lg:items-center pt-4 "
            >
              <div className="flex -space-x-2">
                {[
                  "from-blue-400 to-cyan-400",
                  "from-purple-400 to-pink-400",
                  "from-amber-400 to-orange-400",
                  "from-emerald-400 to-cyan-400",
                ].map((gradient, index) => (
                  <div
                    key={index}
                    className={`h-7 w-7 rounded-full border-2 border-slate-950 bg-gradient-to-br ${gradient}`}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-white">2,000+</span>{" "}
                teams already using Apex
              </p>
            </AnimatedSection>
          </div>

          {/* ── RIGHT SIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, type: "spring", stiffness: 60 }}
            className="relative flex w-full items-center justify-center"
          >
            {/* Dashboard Wrapper — FIX: overflow-visible so badge is not clipped */}
            <div className="relative w-full max-w-[720px] overflow-visible">

              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
                }}
              />

              {/* FIX: Floating badge moved outside overflow-hidden card */}
              <div className="absolute right-6 top-0 z-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-[10px] font-semibold text-white shadow-lg shadow-blue-500/30">
                ✦ AI Active
              </div>

              {/* Dashboard Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/50 backdrop-blur-md">

                {/* Top Bar */}
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-5 py-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">

                  {/* Header */}
                  <div className="mb-6 flex items-center justify-between ">
                    <div>
                      <p className="text-sm font-semibold text-white">Welcome back 👋</p>
                      <p className="mt-1 text-xs text-slate-500">AI analytics overview</p>
                    </div>
                    <button className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-xs font-medium text-white">
                      Upgrade
                    </button>
                  </div>

                  {/* FIX: Stats grid — always 4 cols inside dashboard, no md: breakpoint dependency */}
                  <div className="mb-5 grid grid-cols-4 gap-2 py-2">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-blue-500/20"
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[10px] text-slate-500">{stat.label}</span>
                          <span className="text-xs">{stat.icon}</span>
                        </div>
                        <p className={`text-base font-bold ${stat.color}`}>{stat.value}</p>
                        <p className={`mt-1.5 text-[10px] ${stat.up ? "text-emerald-400" : "text-red-400"}`}>
                          {stat.change}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Revenue Chart */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">Revenue Overview</p>
                        <p className="mt-0.5 text-xs text-slate-500">Last 30 days performance</p>
                      </div>
                      <div className="text-xs font-medium text-cyan-400">+18.4%</div>
                    </div>

                    {/* FIX: bars use scaleY from bottom, not height % — works reliably */}
                    <div className="flex h-[120px] items-end gap-1.5">
                      {chartBars.map((heightPct, index) => (
                        <div
                          key={index}
                          className="relative flex-1 h-full flex items-end"
                        >
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                              delay: 0.3 + index * 0.04,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            style={{
                              height: `${heightPct}%`,
                              transformOrigin: "bottom",
                            }}
                            className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400"
                          />
                        </div>
                      ))}
                    </div>

                    {/* X-axis labels */}
                    <div className="mt-2 flex justify-between">
                      {["May 1", "May 10", "May 20", "May 29"].map((d) => (
                        <span key={d} className="text-[9px] text-slate-600">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}