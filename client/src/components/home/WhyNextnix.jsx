
import React from 'react';
import { motion } from 'framer-motion';
import {
    Compass, MessageCircle, Smartphone, BookOpen,
    ArrowUpRight, Check
} from 'lucide-react';

const differences = [
    {
        number: '01',
        icon: Compass,
        title: 'A Clear Starting Point',
        description: 'No confusion about where to begin. We focus on making the learning journey easier to understand.',
    },
    {
        number: '02',
        icon: MessageCircle,
        title: 'Concepts Before Shortcuts',
        description: 'Understand why something works instead of simply memorising steps or copying code.',
    },
    {
        number: '03',
        icon: Smartphone,
        title: 'Learning Without Barriers',
        description: 'Your learning journey can begin even if you currently have access to only a smartphone.',
    },
    {
        number: '04',
        icon: BookOpen,
        title: 'Skills That Matter',
        description: 'Focus on practical understanding and building skills, not just collecting information.',
    },
];

export default function WhyNextnix() {
    return (
        <section className="py-20 sm:py-24">
            <div className="container-shell">
                <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.65fr]">
                    <div>
                        <span className="eyebrow">WHY NEXTNIX</span>
                        <h2 className="section-heading mt-4 max-w-2xl">
                            Learning tech should feel <span className="text-brand-navy">clear, not complicated.</span>
                        </h2>
                    </div>
                    <p className="max-w-lg text-base leading-8 text-slate-600 lg:justify-self-end">
                        We believe anyone can start learning technology when the concepts
                        are explained in the right way, at the right pace.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                    {differences.map(({ number, icon: Icon, title, description }, index) => (
                        <motion.article
                            key={number}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="surface-card group relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-navy">
                                    <Icon size={23} />
                                </div>
                                <span className="text-sm font-bold tracking-widest text-slate-300">{number}</span>
                            </div>
                            <h3 className="mt-7 text-xl font-bold text-brand-navy">{title}</h3>
                            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">{description}</p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-green-700">
                                <Check size={15} /> The Nextnix Approach
                            </div>
                            <ArrowUpRight className="absolute bottom-7 right-7 text-slate-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-navy" size={20} />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
