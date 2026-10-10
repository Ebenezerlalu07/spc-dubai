
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const particles = [
  { left: "10%", top: "20%", delay: 0 },
  { left: "25%", top: "65%", delay: 1.2 },
  { left: "75%", top: "15%", delay: 0.8 },
  { left: "85%", top: "70%", delay: 2 },
  { left: "45%", top: "85%", delay: 1.5 },
  { left: "65%", top: "40%", delay: 2.5 },
  { left: "15%", top: "80%", delay: 0.5 },
  { left: "90%", top: "35%", delay: 1.8 },
  { left: "35%", top: "12%", delay: 1.1 },
  { left: "55%", top: "75%", delay: 2.3 },
  { left: "5%", top: "48%", delay: 1.7 },
  { left: "95%", top: "55%", delay: 0.9 },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = reduceMotion === false;

  const fadeUp = (delay: number, y = 20) => ({
    initial: shouldAnimate
      ? { opacity: 0, y }
      : false,
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.85,
      delay: shouldAnimate ? delay : 0,
      ease: "easeOut" as const,
    },
  });

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#062e29] px-5 py-20 text-white sm:px-6">

      {/* Background image with zoom entrance */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
        initial={shouldAnimate ? { scale: 1.15, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2.2,
          ease: "easeOut",
        }}
      />

      {/* Dark emerald overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#062e29]/75" />

      {/* Gradient for text readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#031b19]/50 via-[#062e29]/20 to-[#031b19]/90" />

      {/* Animated ambient glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#d9b877]/10 blur-[110px]"
        animate={
          shouldAnimate
            ? {
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.25, 1],
            }
            : undefined
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border border-[#d9b877]/15" />

      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full border border-[#d9b877]/10" />

      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full border border-[#d9b877]/10" />

      {/* Floating golden particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#e8ca90]"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={
            shouldAnimate
              ? {
                y: [0, -45, 0],
                opacity: [0.15, 0.8, 0.15],
                scale: [0.6, 1.4, 0.6],
              }
              : { opacity: 0.35 }
          }
          transition={{
            duration: 4 + (index % 3),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-xl text-center"
        {...fadeUp(0.1, 35)}
      >
        {/* Church emblem */}
        <motion.div
          className="relative mx-auto mb-9 flex h-28 w-28 items-center justify-center rounded-full border border-[#d9b877]/40 bg-white/5 backdrop-blur-sm sm:mb-10"
          initial={
            shouldAnimate
              ? { opacity: 0, scale: 0.65 }
              : false
          }
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: shouldAnimate
              ? [
                "0 0 15px rgba(217,184,119,0.1)",
                "0 0 55px rgba(217,184,119,0.3)",
                "0 0 15px rgba(217,184,119,0.1)",
              ]
              : "0 0 20px rgba(217,184,119,0.15)",
          }}
          transition={{
            opacity: { duration: 0.9 },
            scale: { duration: 0.9 },
            boxShadow: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="absolute inset-2 rounded-full border border-[#d9b877]/20" />

          {/* Cross and Bible emblem */}
          <svg
            viewBox="0 0 64 64"
            className="h-16 w-16 text-[#d9b877]"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M32 5V47M19 19H45"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={
                shouldAnimate
                  ? { pathLength: 0 }
                  : false
              }
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.8,
                delay: shouldAnimate ? 0.5 : 0,
              }}
            />

            <motion.path
              d="M12 45Q22 39 32 45Q42 39 52 45V54Q42 48 32 54Q22 48 12 54V45Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              initial={
                shouldAnimate
                  ? { pathLength: 0 }
                  : false
              }
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: shouldAnimate ? 1 : 0,
              }}
            />
          </svg>
        </motion.div>

        {/* Welcome label */}
        <motion.div
          className="mb-5 flex items-center justify-center gap-3"
          {...fadeUp(0.5, 10)}
        >
          <span className="h-px w-8 bg-[#d9b877]/60" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d9b877] sm:text-xs">
            Welcome To
          </span>

          <span className="h-px w-8 bg-[#d9b877]/60" />
        </motion.div>

        {/* SPC Dubai - Aligra font */}
        <motion.h1
          className="font-aligra text-6xl leading-tight tracking-tight text-white sm:text-7xl md:text-8xl"
          {...fadeUp(0.7, 25)}
        >
          SPC{" "}
          <span className="text-[#d9b877]">
            Dubai
          </span>
        </motion.h1>

        {/* Church name */}
        <motion.p
          className="mx-auto mt-5 max-w-sm text-xs font-medium uppercase leading-6 tracking-[0.2em] text-white/75 sm:text-sm"
          {...fadeUp(1.1)}
        >
          Satwa Pentecostal
          <span className="block">Church of God</span>
        </motion.p>

        {/* Golden divider */}
        <motion.div
          className="my-9 flex items-center justify-center gap-3"
          initial={
            shouldAnimate
              ? { opacity: 0, scaleX: 0 }
              : false
          }
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: shouldAnimate ? 1.3 : 0,
            duration: 0.9,
          }}
        >
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#d9b877]/50" />

          <motion.span
            className="h-1.5 w-1.5 rotate-45 bg-[#d9b877]"
            animate={
              shouldAnimate
                ? { scale: [1, 1.5, 1] }
                : undefined
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#d9b877]/50" />
        </motion.div>

        {/* Bible verse */}
        <motion.blockquote
          className="mx-auto max-w-md"
          {...fadeUp(1.5, 15)}
        >
          <p className="font-aligra text-xl leading-relaxed text-white/90 sm:text-2xl">
            &ldquo;Remember those who led you, who spoke
            the word of God to you.&rdquo;
          </p>

          <cite className="mt-5 block text-xs font-semibold not-italic tracking-widest text-[#d9b877]">
            HEBREWS 13:7
          </cite>
        </motion.blockquote>

        {/* Directory button */}
        <motion.div
          className="mt-11"
          {...fadeUp(1.8)}
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Church Member Directory
          </p>

          <motion.div
            className="inline-block"
            whileHover={
              shouldAnimate ? { scale: 1.05 } : undefined
            }
            whileTap={
              shouldAnimate ? { scale: 0.97 } : undefined
            }
          >
            <Link
              href="/login"
              className="group inline-flex min-w-56 items-center justify-center gap-4 rounded-full bg-[#d9b877] px-9 py-4 text-sm font-bold tracking-wide text-[#092c26] shadow-[0_10px_40px_rgba(217,184,119,0.25)] transition-colors duration-300 hover:bg-[#ecd09a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9b877]"
            >
              Explore Directory

              <ArrowRight
                size={19}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-5 left-0 right-0 z-10 px-3 text-center"
        {...fadeUp(2.4, 0)}
      >
        <p className="text-[9px] tracking-[0.2em] text-white/50 sm:text-[10px]">
          UNITED IN FAITH · CONNECTED IN CHRIST
        </p>
      </motion.footer>
    </main>
  );
}
