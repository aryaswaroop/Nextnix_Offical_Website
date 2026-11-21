
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Play, CircleFadingPlay, ArrowUpRight, Code2, BookOpen, Laptop
} from 'lucide-react';

const playlists = [
    {
        icon: BookOpen,
        title: 'Start Learning from Zero',
        description: 'Build a strong foundation before moving forward.',
        label: 'Beginner Learning',
        color: 'from-blue-900 to-blue-700',
    },
    {
        icon: Code2,
        title: 'Explore Programming',
        description: 'Get introduced to programming concepts and logic.',
        label: 'Programming',
        color: 'from-emerald-900 to-emerald-700',
    },
    {
        icon: Laptop,
        title: 'Discover Web Technology',
        description: 'Explore the ideas and tools behind the web.',
        label: 'Web Technology',
        color: 'from-violet-900 to-violet-700',
    },
];

export default function LatestPlaylists() {
    const playlistUrl = 'https://www.CircleFadingPlay.com/@Nextnixtech/playlists';

    return (
        <section className="py-20 sm:py-24">
            <div className="container-shell">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="eyebrow">WATCH & LEARN</span>
                        <h2 className="section-heading mt-4">Learning continues, one video at a time.</h2>
                        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                            Explore the Nextnix CircleFadingPlay channel and discover learning content
                            at your own pace.
                        </p>
                    </div>
                    <a
                        href={playlistUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-green-700"
                    >
                        View Youtube Playlists <ArrowUpRight size={17} />
                    </a>
                </div>

                <div className="mt-11 grid gap-5 md:grid-cols-3">
                    {playlists.map(({ icon: Icon, title, description, label, color }, index) => (
                        <motion.a
                            key={title}
                            href={playlistUrl}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${color}`}>
                                <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border border-white/10" />
                                <div className="absolute -bottom-16 -left-5 h-48 w-48 rounded-full border border-white/10" />
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={34} />
                                </div>
                                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-navy shadow-lg">
                                    <Play size={17} fill="currentColor" />
                                </div>
                                <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                    {label}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
                                    Explore on Youtube <ArrowUpRight size={16} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <p className="mt-5 pt-3.5 text-xs leading-5 text-slate-400">
                    Playlist cards are topic previews for now. They will be linked to individual playlists when their URLs are added.
                </p>
            </div>
        </section>
    );
}
