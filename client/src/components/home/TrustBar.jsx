
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Layers, Users, MonitorSmartphone } from 'lucide-react';

const trustPoints = [
    { icon: GraduationCap, title: 'Beginner First', desc: 'Designed for starting from zero' },
    { icon: Layers, title: 'Step by Step', desc: 'A clear learning approach' },
    { icon: Users, title: 'Multiple Formats', desc: 'Individual and group learning' },
    { icon: MonitorSmartphone, title: 'Accessible Learning', desc: 'Learn with the device you have' },
];

export default function TrustBar() {
    return (
        <section className="py-12">
            <div className="container-shell">
                <div className="rounded-3xl border border-slate-200/70 bg-white/80 px-6 py-8 shadow-sm sm:px-8">
                    <p className="mb-4 pb-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        The Nextnix Learning Approach
                    </p>
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        {trustPoints.map(({ icon: Icon, title, desc }, index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="flex items-center gap-4"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-navy">
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-brand-navy">{title}</h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
