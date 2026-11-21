
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Code2, Globe, Database, Palette, BrainCircuit,
    Terminal, ArrowUpRight
} from 'lucide-react';

const topics = [
    { icon: Code2, title: 'Programming', desc: 'Understand coding fundamentals', tag: 'Build logic', tone: 'bg-blue-50 text-blue-700' },
    { icon: Globe, title: 'Web Development', desc: 'Explore how websites are built', tag: 'Build for web', tone: 'bg-green-50 text-green-700' },
    { icon: Database, title: 'Databases', desc: 'Learn how data is organised', tag: 'Work with data', tone: 'bg-violet-50 text-violet-700' },
    { icon: Palette, title: 'UI & Design', desc: 'Discover digital design basics', tag: 'Design better', tone: 'bg-orange-50 text-orange-700' },
    { icon: BrainCircuit, title: 'Emerging Tech', desc: 'Explore new technology concepts', tag: 'Stay curious', tone: 'bg-pink-50 text-pink-700' },
    { icon: Terminal, title: 'Developer Tools', desc: 'Get familiar with essential tools', tag: 'Work smarter', tone: 'bg-cyan-50 text-cyan-700' },
];

export default function ExploreTopics() {
    return (
        <section className="py-20 sm:py-24">
            <div className="container-shell">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="eyebrow">EXPLORE & DISCOVER</span>
                        <h2 className="section-heading mt-4">Explore topics. Find your <br/> direction.</h2>
                        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                            Get familiar with different areas of technology and discover
                            what you would like to learn next.
                        </p>
                    </div>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-green-700">
                        Explore learning resources <ArrowUpRight size={17} />
                    </Link>
                </div>

                <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {topics.map(({ icon: Icon, title, desc, tag, tone }, index) => (
                        <motion.article
                            key={title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="surface-card-hover group rounded-2xl p-6 sm:p-7 bg-[255,230,240,0.03] dark:bg-[25,30,25,0.03] transition-shadow"
                        >
                            <div className="flex items-center justify-between">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone}`}>
                                    <Icon size={23} />
                                </div>
                                <ArrowUpRight size={19} className="text-slate-300 transition-colors group-hover:text-brand-navy" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold text-brand-navy">{title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
                            <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                                {tag}
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
