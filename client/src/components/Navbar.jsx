import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Menu,
    X,
    ArrowUpRight,
    GraduationCap,
    ChevronDown,
} from 'lucide-react';

const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Learn', path: '/learn' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsAuthMenuOpen(false);
    };

    const toggleAuthMenu = () => setIsAuthMenuOpen((previous) => !previous);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl">
            <nav
                className="container-shell flex h-19 items-center justify-between gap-4"
                aria-label="Main navigation"
            >
                {/* Brand */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-2.5"
                    aria-label="Nextnix home"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#051D67] text-white">
                        <GraduationCap size={23} strokeWidth={2.2} />
                    </span>

                    <span className="text-[23px] font-extrabold tracking-tight text-[#051D67]">
                        Nextnix<span className="text-[#35BD70]">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden min-w-0 items-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
                    {navigationLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `whitespace-nowrap text-sm font-semibold transition-colors duration-200 xl:text-base ${isActive
                                    ? 'text-[#051D67]'
                                    : 'text-slate-600 hover:text-[#051D67]'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Account Dropdown: Sign-in + Get Started */}
                <div className="relative hidden shrink-0 lg:block">
                    <button
                        type="button"
                        onClick={toggleAuthMenu}
                        aria-haspopup="menu"
                        aria-expanded={isAuthMenuOpen}
                        className="btn btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                        Get Started
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${isAuthMenuOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    <AnimatePresence>
                        {isAuthMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                transition={{ duration: 0.16 }}
                                role="menu"
                                className="absolute right-0 top-[calc(100%+12px)] z-50 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10"
                            >
                                <Link
                                    to="/dashboard"
                                    role="menuitem"
                                    onClick={closeMenu}
                                    className="flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#051D67]"
                                >
                                    Sign-in
                                </Link>
                                <Link
                                    to="/learn"
                                    role="menuitem"
                                    onClick={closeMenu}
                                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-[#051D67] transition hover:bg-green-50"
                                >
                                    Get Started
                                    <ArrowUpRight size={15} />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Compact Navigation Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#051D67] lg:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Tablet and Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
                    >
                        <div className="container-shell flex flex-col gap-1 py-4">
                            {navigationLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `rounded-xl px-4 py-3 text-sm font-semibold ${isActive
                                            ? 'bg-blue-50 text-[#051D67]'
                                            : 'text-slate-600 hover:bg-slate-50'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            {/* Account actions grouped in one dropdown */}
                            <div className="mt-1 border-t border-slate-100 pt-2">
                                <button
                                    type="button"
                                    onClick={toggleAuthMenu}
                                    aria-expanded={isAuthMenuOpen}
                                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#051D67] hover:bg-slate-50"
                                >
                                    Account options
                                    <ChevronDown
                                        size={17}
                                        className={`transition-transform duration-200 ${isAuthMenuOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isAuthMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <Link
                                                to="/dashboard"
                                                onClick={closeMenu}
                                                className="mx-2 flex rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                                            >
                                                Sign-in
                                            </Link>
                                            <Link
                                                to="/learn"
                                                onClick={closeMenu}
                                                className="mx-2 flex items-center justify-between rounded-lg bg-[#051D67] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0b2b85]"
                                            >
                                                Get Started
                                                <ArrowUpRight size={16} />
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
