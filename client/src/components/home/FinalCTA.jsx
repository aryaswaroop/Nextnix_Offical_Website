
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
    ArrowRight,
    ArrowUpRight,
    Sparkles,
    Play,
    GraduationCap,
    BookOpen,
    Code2,
    Rocket,
    Mail,
} from 'lucide-react';

export default function FinalCTA() {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 16,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="py-10 sm:py-12 lg:py-14">
            <div className="container-shell">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative isolate overflow-hidden rounded-[30px] border border-[#16377F] bg-[#051D67] text-white shadow-[0_25px_70px_-30px_rgba(5,29,103,0.45)]"
                >

                    {/* BACKGROUND BRAND DECORATIONS */}

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                    >
                        {/* NEXTNIX Watermark */}

                        <span className="absolute -right-8 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[100px] font-black leading-none tracking-[-0.09em] text-white/[0.045] sm:text-[160px] lg:text-[220px]">
                            NEXTNIX
                        </span>

                        {/* Green Glow */}

                        <div className="absolute -left-32 -top-36 h-96 w-96 rounded-full bg-[#5EE587]/15 blur-3xl" />

                        <div className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-3xl" />

                        {/* Circular Pattern */}

                        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full border-[35px] border-[#5EE587]/[0.07] sm:h-96 sm:w-96" />

                        <div className="absolute -bottom-24 left-[25%] h-64 w-64 rounded-full border-[25px] border-white/[0.035]" />

                        {/* Dotted Pattern */}

                        <div className="absolute right-10 top-10 hidden grid-cols-6 gap-3 opacity-30 sm:grid">
                            {Array.from({ length: 36 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="h-1.5 w-1.5 rounded-full bg-[#5EE587]"
                                />
                            ))}
                        </div>

                        {/* Decorative Line */}

                        <div className="absolute bottom-12 left-10 h-px w-28 bg-gradient-to-r from-transparent via-[#5EE587]/40 to-transparent" />
                    </div>

                    {/* MAIN CTA CONTENT */}

                    <div className="relative mx-auto max-w-4xl px-6 py-8 text-center flex flex-col items-center justify-center sm:px-12 sm:py-10 lg:py-12">

                        <motion.div variants={fadeUp}>

                            {/* Brand Icon */}

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#5EE587] shadow-lg shadow-black/10 backdrop-blur-sm">
                                <GraduationCap size={24} />
                            </div>

                            {/* Eyebrow */}

                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#5EE587]/30 bg-[#5EE587]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5EE587] sm:text-xs">
                                <Sparkles size={13} />
                                YOUR NEXT CHAPTER STARTS HERE
                            </div>

                            {/* Heading */}

                            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-wider text-white sm:text-3xl lg:text-4xl">
                                Your Next Chapter
                                <span className="mt-1 block text-[#5EE587]">
                                    Starts With Nextnix.
                                </span>
                            </h2>

                            {/* Description */}

                            <p className="mx-auto mt-4 max-w-2xl text-sm text-center leading-6 tracking-wide text-blue-100/80 sm:text-base sm:leading-7">
                                You don't need to know everything to get started.
                                You just need the right direction. Learn technology
                                step by step, practice with confidence, and turn
                                your knowledge into real-world skills.
                            </p>

                            {/* CTA Buttons */}

                            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

                                <Link
                                    to="/pricing"
                                    className="btn btn-accent inline-flex items-center justify-center gap-3"
                                >
                                    Start Your Journey
                                    <ArrowRight size={18} />
                                </Link>

                                <a
                                    href="https://www.youtube.com/@Nextnixtech"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-6 py-3 font-semibold text-white transition duration-300 hover:border-[#5EE587]/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EE587]"
                                >
                                    <Play size={17} />
                                    Explore YouTube
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </motion.div>

                        {/* LEARNING PILLARS */}

                        <motion.div
                            variants={fadeUp}
                            className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-5 sm:mt-9 sm:gap-8 sm:pt-6"
                        >
                            <div className="flex flex-col items-center gap-1.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#5EE587]">
                                    <BookOpen size={18} />
                                </div>

                                <p className="text-xs font-bold text-white sm:text-sm">
                                    Learn
                                </p>

                                <p className="text-[10px] text-blue-100/60 sm:text-xs">
                                    Understand concepts
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-1.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#5EE587]">
                                    <Code2 size={18} />
                                </div>

                                <p className="text-xs font-bold text-white sm:text-sm">
                                    Practice
                                </p>

                                <p className="text-[10px] text-blue-100/60 sm:text-xs">
                                    Build your skills
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-1.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#5EE587]">
                                    <Rocket size={18} />
                                </div>

                                <p className="text-xs font-bold text-white sm:text-sm">
                                    Build
                                </p>

                                <p className="text-[10px] text-blue-100/60 sm:text-xs">
                                    Create something real
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* BOTTOM NEWSLETTER STRIP */}

                    <div className="relative border-t border-white/10 bg-white/[0.055] px-6 py-3.5 sm:px-10 sm:py-4">
                        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">

                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#5EE587]/20 bg-[#5EE587]/10 text-[#5EE587]">
                                    <Mail size={17} />
                                </div>

                                <div className="text-center sm:text-left">
                                    <p className="text-sm font-bold text-white">
                                        Stay connected with Nextnix
                                    </p>

                                    <p className="mt-0.5 text-xs text-blue-100/60">
                                        Discover new lessons and learning resources.
                                    </p>
                                </div>
                            </div>

                            <Link
                                to="/blog"
                                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-[#5EE587]/50 hover:bg-white/10"
                            >
                                Explore Resources
                                <ArrowUpRight size={15} />
                            </Link>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
