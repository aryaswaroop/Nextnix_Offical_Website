
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    GraduationCap, Building2, Users, Monitor,
    ArrowUpRight
} from 'lucide-react';

const services = [
    {
        icon: GraduationCap,
        number: '01',
        title: 'Beginner Tech Learning',
        description: 'Learn technology from the fundamentals with a clear and structured approach designed for beginners.',
        audience: 'Students & Beginners',
    },
    {
        icon: Monitor,
        number: '02',
        title: 'Offline Learning Batches',
        description: 'Learn in a guided environment with structured offline learning sessions and practical understanding.',
        audience: 'Offline Learners',
    },
    {
        icon: Building2,
        number: '03',
        title: 'Corporate Training',
        description: 'Technology-focused training programs designed around organisational and team learning needs.',
        audience: 'Businesses & Teams',
    },
    {
        icon: Users,
        number: '04',
        title: 'College Workshops',
        description: 'Learning sessions and workshops that introduce students to practical technology concepts.',
        audience: 'Colleges & Institutions',
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 sm:py-24">
            <div className="container-shell">
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <span className="eyebrow">WHAT WE OFFER</span>
                        <h2 className="section-heading mt-4">
                            Learning opportunities for every stage.
                        </h2>
                    </div>
                    <p className="max-w-xl leading-8 text-slate-600 lg:justify-self-end">
                        From individual learning journeys to institutional training,
                        Nextnix aims to make technology education more accessible and practical.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                    {services.map(({ icon: Icon, number, title, description, audience }, index) => (
                        <motion.article
                            key={number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className="surface-card-hover rounded-3xl p-7 sm:p-8"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-navy">
                                    <Icon size={26} />
                                </div>
                                <span className="text-sm font-bold tracking-widest text-slate-300">{number}</span>
                            </div>
                            <h3 className="mt-7 text-xl font-bold text-brand-navy">{title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                                <span className="text-xs font-semibold text-slate-500">{audience}</span>
                                <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-green-700">
                                    Learn more <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
