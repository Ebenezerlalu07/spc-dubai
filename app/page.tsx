
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  UsersRound,
} from "lucide-react";

const particles = [
  { left: "8%", top: "18%", delay: 0 },
  { left: "18%", top: "72%", delay: 1.2 },
  { left: "27%", top: "35%", delay: 0.8 },
  { left: "78%", top: "12%", delay: 1.5 },
  { left: "88%", top: "68%", delay: 2 },
  { left: "68%", top: "42%", delay: 0.5 },
  { left: "45%", top: "82%", delay: 1.8 },
  { left: "94%", top: "28%", delay: 1.1 },
  { left: "12%", top: "48%", delay: 2.3 },
  { left: "56%", top: "15%", delay: 0.9 },
];

const fadeUp = (delay: number, y = 25) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: "easeOut" as const,
  },
});

export default function Home() {
  return (
    <main className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#062e29] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
      {/* Background image */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
        }}
      />

      {/* Dark cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#031b19]/65" />

      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[#031b19]/65 via-[#062e29]/35 to-[#031b19]/90" />

      {/* Ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-[#d9b877]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0b6952]/20 blur-[140px]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full border border-[#d9b877]/15" />

      <div className="pointer-events-none absolute -bottom-60 -right-40 h-[500px] w-[500px] rounded-full border border-[#d9b877]/10" />

      {/* Golden particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute h-[3px] w-[3px] rounded-full bg-[#f1d49a]"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          initial={{ opacity: 0.15 }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 4 + (index % 3),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Centered main content */}
      <div className="relative z-10 mx-auto w-full max-w-[850px] text-center">


        {/* Animated Church Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative mx-auto mb-7 flex items-center justify-center sm:mb-9"
        >
          <Image
            src="/images/Logo.png"
            alt="SPC Dubai Church Logo"
            width={140}
            height={140}
            className="h-auto w-28 object-contain sm:w-36 lg:w-40"
            priority
          />
        </motion.div>

        {/* Welcome label */}
        <motion.div
          {...fadeUp(0.4)}
          className="mb-4 flex items-center justify-center gap-3 sm:mb-5"
        >
          <span className="h-px w-8 bg-[#d9b877]/70 sm:w-12" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.30em] text-[#e8cc94] sm:text-xs">
            Welcome to our family
          </span>

          <span className="h-px w-8 bg-[#d9b877]/70 sm:w-12" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          {...fadeUp(0.6, 35)}
          className="font-aligra text-[clamp(3.8rem,11vw,8rem)] leading-[1.05] tracking-tight text-white"
        >
          SPC{" "}
          <span className="bg-gradient-to-b from-[#f3d9a5] via-[#d9b877] to-[#b99254] bg-clip-text text-transparent">
            Dubai
          </span>
        </motion.h1>

        {/* Church full name */}
        <motion.p
          {...fadeUp(0.85)}
          className="mx-auto mt-4 max-w-xl text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-white/75 sm:mt-6 sm:text-sm sm:tracking-[0.3em]"
        >
          Satwa Pentecostal Church of God
        </motion.p>

        {/* Golden divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="my-7 flex items-center justify-center gap-4 sm:my-9"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d9b877]/70 sm:w-24" />
          <div className="h-2 w-2 rotate-45 border border-[#d9b877] bg-[#d9b877]/40" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d9b877]/70 sm:w-24" />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(1.2)}
          className="mx-auto max-w-xl px-2 text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
        >
          A place where faith brings us together,
          love strengthens our bonds, and every
          member is part of one beautiful family.
        </motion.p>

        {/* Bible verse glass card */}
        <motion.div
          {...fadeUp(1.35)}
          className="mx-auto mt-8 max-w-[540px] rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-6 shadow-[0_15px_50px_rgba(0,0,0,0.12)] backdrop-blur-lg sm:mt-10 sm:rounded-3xl sm:px-10 sm:py-8"
        >
          <BookOpen
            size={20}
            strokeWidth={1.5}
            className="mx-auto mb-4 text-[#d9b877]"
          />

          <blockquote>
            <p className="font-aligra text-xl leading-relaxed text-white/90 sm:text-2xl">
              &ldquo;Remember those who led you, who
              spoke the word of God to you.&rdquo;
            </p>

            <cite className="mt-4 block text-[10px] font-semibold not-italic uppercase tracking-[0.25em] text-[#e3c994] sm:text-xs">
              Hebrews 13:7
            </cite>
          </blockquote>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          {...fadeUp(1.6)}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          {/* Explore Directory */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/login"
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-4 rounded-full bg-[#d9b877] px-9 py-4 text-sm font-bold text-[#062e29] shadow-[0_10px_35px_rgba(217,184,119,0.22)] transition-all hover:bg-[#f0d39b] hover:shadow-[0_15px_45px_rgba(217,184,119,0.35)] sm:w-auto"
            >
              Explore Directory

              <ArrowRight
                size={19}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Join our family */}
          <Link
            href="/signup"
            className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-9 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-[#d9b877]/60 hover:bg-white/15 sm:w-auto"
          >
            <UsersRound size={18} strokeWidth={1.7} />
            Join Our Family
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
