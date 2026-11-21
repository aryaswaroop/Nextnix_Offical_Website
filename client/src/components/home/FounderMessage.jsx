import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Quote, Sparkles } from 'lucide-react';

const FounderMessage = () => {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: 'easeOut' },
        },
    };

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container-shell">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
                >
                    {/* Left: Founder introduction */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <div className="eyebrow mb-5">
                                <Sparkles size={14} />
                                A Note From Our Founder
                            </div>

                            <h2 className="section-heading max-w-lg">
                                Behind every great skill is a
                                <span className="text-brand-navy"> clear beginning.</span>
                            </h2>

                            <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
                                Nextnix started with a simple belief: learning technology
                                should be easier to understand, easier to access, and
                                more practical for everyone.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-4">
                            <div className="h-14 w-14 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-green">
                                <span className="text-xl font-bold">N</span>
                            </div>

                            <div>
                                <p className="font-bold text-gray-900">
                                    Founder, Nextnix
                                </p>
                                <p className="text-sm text-gray-500">
                                    Technology Educator
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Founder message card */}
                    <div className="lg:col-span-7">
                        <div className="relative h-full min-h-[380px] rounded-[2rem] bg-[#F3F6FF] border border-[#E4EAF8] p-7 sm:p-10 lg:p-12 overflow-hidden">
                            {/* Decorative elements */}
                            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-green/15 blur-2xl" />
                            <div className="absolute right-10 bottom-0 h-40 w-40 rounded-full bg-brand-navy/5 blur-2xl" />

                            <div className="relative z-10 flex h-full flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-navy">
                                        <Quote size={23} />
                                    </div>

                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/50">
                                        Our Philosophy
                                    </span>
                                </div>

                                <blockquote className="mt-9 text-xl sm:text-2xl lg:text-[1.8rem] leading-relaxed font-semibold text-[#10245B]">
                                    "I believe learning technology should not feel confusing
                                    or overwhelming. Everyone deserves a clear path to
                                    understand concepts and build real skills."
                                </blockquote>

                                <div className="mt-8 h-1 w-16 rounded-full bg-brand-green" />

                                <p className="mt-7 max-w-xl text-gray-600 leading-relaxed">
                                    Our goal is simple: help beginners take their first
                                    step, learn at their own pace, and turn knowledge
                                    into practical ability — one concept at a time.
                                </p>

                                <div className="mt-auto pt-9">
                                    <a
                                        href="https://www.youtube.com/@Nextnixtech"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 font-semibold text-brand-navy hover:text-blue-700 transition-colors group"
                                    >
                                        Explore the Nextnix journey
                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FounderMessage;