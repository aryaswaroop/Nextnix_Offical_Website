import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ArrowUpRight,
    GraduationCap,
    CheckCircle2,
    Play,
    ChartNoAxesCombined,
    Camera,
    Sparkles,
} from 'lucide-react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('form');

    const handleSubscribe = (event) => {
        event.preventDefault();

        // Newsletter backend is not connected yet.
        // Do not display a false subscription confirmation.
        setStatus('preview');
    };

    const resetForm = () => {
        setStatus('form');
        setEmail('');
    };

    const footerLinks = [
        {
            title: 'Explore',
            links: [
                { label: 'Home', to: '/' },
                { label: 'About Nextnix', to: '/about' },
                { label: 'Our Services', to: '/pricing' },
                { label: 'Learning Resources', to: '/blog' },
                { label: 'Blog', to: '/blog' },
            ],
        },
        {
            title: 'Learning',
            links: [
                { label: 'Programming', to: '/blog' },
                { label: 'Web Development', to: '/blog' },
                { label: 'Database Concepts', to: '/blog' },
                { label: 'Explore Topics', to: '/blog' },
                {
                    label: 'YouTube Playlists',
                    external: true,
                    to: 'https://www.youtube.com/@Nextnixtech/playlists',
                },
            ],
        },
        {
            title: 'Our Services',
            links: [
                { label: 'Beginner Tech Learning', to: '/pricing' },
                { label: 'Offline Learning Batches', to: '/pricing' },
                { label: 'Corporate Training', to: '/pricing' },
                { label: 'College Workshops', to: '/pricing' },
                { label: 'Contact Us', to: '/contact' },
            ],
        },
    ];

    return (
        <footer
            id="site-footer"
            className="bg-transparent px-4 sm:px-6 lg:px-8"
        >
            <div className="container-shell pt-14 sm:pt-16">

                {/* =====================================
                    NEWSLETTER SECTION
                ====================================== */}

                <div className="relative isolate grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-green-200/80 bg-green-200/25 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16">

                    {/* Background brand identity */}

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                    >
                        {/* Large Nextnix watermark */}

                        <span className="absolute -right-8 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[100px] font-black leading-none tracking-[-0.09em] text-green-700/[0.055] sm:-right-5 sm:text-[150px] lg:text-[190px]">
                            NEXTNIX
                        </span>

                        {/* Decorative circular shapes */}

                        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-green-500/[0.07] sm:h-80 sm:w-80" />

                        <div className="absolute -bottom-28 left-[38%] h-64 w-64 rounded-full border-[30px] border-green-500/[0.06]" />

                        <div className="absolute right-[12%] top-[15%] h-3 w-3 rounded-full bg-green-600/20" />

                        <div className="absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-green-600/25" />

                        <div className="absolute bottom-[15%] right-[42%] h-2.5 w-2.5 rounded-full bg-green-600/20" />

                        {/* Subtle dotted pattern */}

                        <div className="absolute bottom-7 right-8 grid grid-cols-5 gap-2 opacity-20">
                            {Array.from({ length: 25 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="h-1.5 w-1.5 rounded-full bg-green-700"
                                />
                            ))}
                        </div>

                        {/* Decorative N brand mark */}

                        <span className="absolute -bottom-10 left-[42%] select-none text-[180px] font-black leading-none text-green-700/[0.025]">
                            N
                        </span>
                    </div>

                    {/* Newsletter heading */}

                    <div className="relative z-10">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300/70 bg-white/50 px-3 py-1.5 text-xs font-semibold text-green-700">
                            <Sparkles size={14} />
                            STAY CONNECTED WITH NEXTNIX
                        </div>

                        <h2 className="max-w-lg text-2xl font-extrabold tracking-tight text-[#051D67] sm:text-3xl">
                            Keep learning. Keep growing.
                        </h2>

                        <p className="pt-3.5 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
                            Get updates about beginner-friendly tech lessons,
                            practical learning resources, new playlists, and
                            opportunities to build real skills.
                        </p>

                        {/* Brand signature */}

                        <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-wide text-[#051D67]">
                            <span className="h-px w-7 bg-green-600" />
                            LEARN TECH. BUILD REAL SKILLS.
                        </div>
                    </div>

                    {/* Newsletter form */}

                    <div className="relative z-10">
                        {status === 'form' ? (
                            <form onSubmit={handleSubscribe}>
                                <label
                                    htmlFor="footer-email"
                                    className="mb-2 block text-sm font-semibold text-[#051D67]"
                                >
                                    Email address
                                </label>

                                <div className="flex h-12 items-center rounded-md border border-gray-200 bg-white p-1 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
                                    <input
                                        id="footer-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        placeholder="you@example.com"
                                        className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                    />

                                    <button
                                        type="submit"
                                        className="inline-flex h-full shrink-0 items-center gap-2 rounded-md bg-[#051D67] px-4 text-sm font-semibold text-white transition hover:bg-[#0b2b85] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#051D67]"
                                    >
                                        Subscribe
                                        <ArrowRight size={16} />
                                    </button>
                                </div>

                                <p className="mt-3 pt-2.5 text-xs leading-5 text-gray-500">
                                    No spam. Just useful learning updates and
                                    resources from Nextnix.
                                </p>
                            </form>
                        ) : (
                            <div
                                role="status"
                                className="rounded-xl border border-green-200 bg-white/70 p-5"
                            >
                                <div className="flex items-center gap-2 text-[#051D67]">
                                    <CheckCircle2
                                        size={20}
                                        className="text-green-600"
                                    />

                                    <p className="font-bold">
                                        Newsletter signup is coming soon!
                                    </p>
                                </div>

                                <p className="mt-2 break-all text-sm leading-6 text-gray-600">
                                    Your email is not being submitted or stored
                                    yet. Newsletter integration will be added
                                    in a future update.
                                </p>

                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="mt-3 text-sm font-semibold text-green-700 hover:text-green-800"
                                >
                                    Use a different email
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* =====================================
                    MAIN FOOTER CONTENT
                ====================================== */}

                <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">

                    {/* Brand information */}

                    <div className="footer-brand-info flex flex-col items-center text-center lg:col-span-4 xl:items-start xl:text-left">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#051D67]"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#051D67] text-white">
                                <GraduationCap size={23} />
                            </span>

                            <span className="text-xl font-extrabold tracking-tight text-[#051D67]">
                                Nextnix<span className="text-green-500">.</span>
                            </span>
                        </Link>

                        <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-gray-600 xl:mx-0">
                            Learn Tech. Build Real Skills.
                            We make technology easier to understand through
                            clear concepts, practical learning, and
                            beginner-friendly education.
                        </p>

                        {/* Social links */}

                        <div className="mt-6 flex items-center justify-center gap-2 xl:justify-start">

                            <a
                                href="https://www.youtube.com/@Nextnixtech"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Nextnix on YouTube"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#051D67]"
                            >
                                <Play size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#051D67]"
                            >
                                <ChartNoAxesCombined size={18} />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#051D67]"
                            >
                                <Camera size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Footer navigation */}

                    <nav
                        aria-label="Footer navigation"
                        className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8"
                    >
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-md mb-4 font-bold text-[#051D67]">
                                    {section.title}
                                </h3>

                                <ul className="mt-5 flex flex-col gap-3.5 font-bold text-xl tracking-wide">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            {link.external ? (
                                                <a
                                                    href={link.to}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm text-gray-600 transition hover:text-green-700"
                                                >
                                                    {link.label}
                                                    <ArrowUpRight size={13} />
                                                </a>
                                            ) : (
                                                <Link
                                                    to={link.to}
                                                    className="text-sm text-gray-600 transition hover:text-green-700"
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* =====================================
                    BOTTOM FOOTER BAR
                ====================================== */}

                <div className="mt-14 flex flex-col items-center gap-4 border-t border-gray-200 py-7 text-center text-sm text-gray-500 sm:mt-16 sm:gap-5 xl:flex-row xl:items-center xl:justify-between xl:text-left">

                    <p className="text-center">
                        © {new Date().getFullYear()} Nextnix. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                        <Link
                            to="/"
                            className="transition hover:text-[#051D67]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/blog"
                            className="transition hover:text-[#051D67]"
                        >
                            Learning Resources
                        </Link>

                        <a
                            href="https://www.youtube.com/@Nextnixtech"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 transition hover:text-[#051D67]"
                        >
                            YouTube
                            <ArrowUpRight size={13} />
                        </a>
                    </div>

                    <p className="text-center font-medium text-[#051D67]">
                        Learn Tech. Build Real Skills.
                    </p>
                </div>
            </div>
        </footer>
    );
}
