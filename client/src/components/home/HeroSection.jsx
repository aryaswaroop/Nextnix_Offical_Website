import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import {
    ArrowRight,
    ArrowUpRight,
    Award,
    BookOpen,
    Check,
    Code2,
    Database,
    GraduationCap,
    Lightbulb,
    Monitor,
    Play,
    Rocket,
    Sparkles,
    Smartphone,
    Target,
    Users,
    Zap,
    Braces,
    Terminal,
    CircleCheck,
    ChartNoAxesCombined,
} from 'lucide-react';

// =========================================
// HERO FEATURE TAGS
// =========================================

const featureTags = [
    { icon: GraduationCap, label: 'Learn From Zero' },
    { icon: Smartphone, label: 'Phone-Friendly Learning' },
    { icon: Lightbulb, label: 'Concept Clarity' },
    { icon: Code2, label: 'Practical Approach' },
];

// =========================================
// HERO CHECKLIST
// =========================================

const learningPoints = [
    'Beginner-friendly learning approach',
    'Learn concepts step by step',
    'Practical, skill-focused education',
    'Learn with a laptop or smartphone',
];

// =========================================
// DECORATIVE BACKGROUND
// =========================================

const VisualBackground = () => (
    <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 720 620"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        {/* Green organic shapes */}
        <path
            d="M500 30 C570 -5 650 30 680 100 C710 165 665 220 600 205 C545 192 510 150 480 105 C460 75 470 45 500 30Z"
            fill="#5EE587"
            fillOpacity=".17"
        />

        <path
            d="M20 210 C70 155 145 175 160 245 C175 315 125 355 75 340 C20 325 -15 260 20 210Z"
            fill="#5EE587"
            fillOpacity=".19"
        />

        <path
            d="M520 390 C580 345 665 380 675 445 C685 505 625 550 565 530 C500 510 475 430 520 390Z"
            fill="#5EE587"
            fillOpacity=".15"
        />

        <path
            d="M70 480 C120 430 190 455 205 510 C220 565 165 600 115 585 C65 570 35 515 70 480Z"
            fill="#5EE587"
            fillOpacity=".13"
        />

        {/* Dotted circular orbit */}
        <ellipse
            cx="360"
            cy="300"
            rx="310"
            ry="220"
            fill="none"
            stroke="#16A34A"
            strokeOpacity=".30"
            strokeWidth="1.5"
            strokeDasharray="4 7"
        />

        {/* Top right dotted pattern */}
        {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
                <circle
                    key={`top-${row}-${col}`}
                    cx={615 + col * 12}
                    cy={100 + row * 12}
                    r="2"
                    fill="#16A34A"
                    fillOpacity=".35"
                />
            ))
        )}

        {/* Bottom left dotted pattern */}
        {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
                <circle
                    key={`bottom-${row}-${col}`}
                    cx={70 + col * 12}
                    cy={510 + row * 12}
                    r="2"
                    fill="#16A34A"
                    fillOpacity=".30"
                />
            ))
        )}
    </svg>
);

// =========================================
// SMALL FLOATING ICON
// =========================================

const FloatingIcon = ({ icon: Icon, className = '' }) => (
    <div
        className={`pointer-events-none absolute z-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg sm:flex ${className}`}
    >
        <Icon size={22} className="text-green-600" />
    </div>
);

// =========================================
// LEARNING JOURNEY STEPS
// =========================================

const journeySteps = [
    {
        number: '01',
        icon: BookOpen,
        title: 'Learn',
        subtitle: 'Understand the fundamentals',
        description: 'Start with simple explanations and clear concepts.',
        color: 'text-green-600',
        background: 'bg-green-50',
        status: 'Start here',
    },
    {
        number: '02',
        icon: Code2,
        title: 'Practice',
        subtitle: 'Turn knowledge into skills',
        description: 'Practice what you learn with real examples.',
        color: 'text-blue-600',
        background: 'bg-blue-50',
        status: 'Keep learning',
    },
    {
        number: '03',
        icon: Rocket,
        title: 'Build',
        subtitle: 'Create something real',
        description: 'Apply your skills through practical projects.',
        color: 'text-purple-600',
        background: 'bg-purple-50',
        status: 'Make it real',
    },
];

// =========================================
// LEARNING JOURNEY CARD
// =========================================

const LearningJourneyCard = () => (
    <div className="relative rounded-[24px] border border-gray-200 bg-white p-4 shadow-[0_20px_60px_-25px_rgba(5,29,103,0.20)] sm:p-6">

        {/* Card header */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-5">

            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#051D67] text-white">
                    <GraduationCap size={24} />
                </div>

                <div>
                    <p className="text-sm font-extrabold text-[#051D67]">
                        Nextnix
                    </p>
                    <p className="mt-1 text-[10px] text-gray-500">
                        Your Learning Journey
                    </p>
                </div>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-green-200 px-3 py-1.5 text-[10px] font-bold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Learn at your pace
            </div>
        </div>

        {/* Journey introduction */}
        <div className="mb-5 mt-5">
            <div className="mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-green-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">
                    Your path to real skills
                </span>
            </div>

            <h3 className="text-xl font-extrabold tracking-tight text-[#051D67] sm:text-2xl">
                From Zero to <span className="text-green-600">Skilled.</span>
            </h3>

            <p className="mt-2 max-w-md text-xs leading-6 text-gray-500 sm:text-sm">
                A clear learning path to help you understand technology
                and build practical skills with confidence.
            </p>
        </div>

        {/* Journey steps */}
        <div className="relative space-y-3">

            {/* Connecting line */}
            <div className="absolute bottom-10 left-[23px] top-10 w-px border-l-2 border-dashed border-green-200" />

            {journeySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                    <div
                        key={step.number}
                        className="relative flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 transition-shadow duration-300 hover:shadow-md sm:gap-4 sm:p-4"
                    >
                        {/* Step icon */}
                        <div
                            className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${step.background}`}
                        >
                            <Icon size={22} className={step.color} />
                        </div>

                        {/* Step details */}
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[9px] font-bold text-gray-400">
                                    STEP {step.number}
                                </span>

                                {index === 0 && (
                                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-[8px] font-bold text-green-700">
                                        START HERE
                                    </span>
                                )}
                            </div>

                            <h4 className="mt-1 text-sm font-extrabold text-[#051D67] sm:text-base">
                                {step.title}
                            </h4>

                            <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                                {step.subtitle}
                            </p>
                        </div>

                        {/* Step number */}
                        <span className="hidden text-xl font-extrabold text-gray-100 sm:block">
                            {step.number}
                        </span>
                    </div>
                );
            })}
        </div>

        {/* Bottom message */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-100 bg-white p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <Target size={18} className="text-green-600" />
            </div>

            <div>
                <p className="text-xs font-bold text-[#051D67]">
                    No confusion. Just clear learning.
                </p>
                <p className="mt-1 text-[10px] text-gray-500">
                    One concept, one step, one skill at a time.
                </p>
            </div>
        </div>
    </div>
);

// =========================================
// CODE EDITOR PREVIEW
// =========================================

const CodePreviewCard = () => (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_15px_40px_-20px_rgba(5,29,103,0.22)]">

        {/* Editor top bar */}
        <div className="flex items-center justify-between border-b border-gray-100 px-3 py-3">
            <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>

            <span className="text-[9px] font-semibold text-gray-500">
                practice.jsx
            </span>

            <Braces size={15} className="text-green-600" />
        </div>

        {/* Editor content */}
        <div className="space-y-3 p-3 sm:p-4">

            <div className="flex items-center gap-2">
                <Terminal size={15} className="text-green-600" />
                <span className="text-[10px] font-bold text-[#051D67]">
                    Learn by Doing
                </span>
            </div>

            <div className="overflow-hidden rounded-xl bg-[#051D67] p-3 sm:p-4">
                <div className="space-y-2 font-mono text-[9px] leading-5 sm:text-[10px]">
                    <p className="text-gray-400">
                        <span className="text-purple-300">01</span>
                        {'  '}
                        <span className="text-purple-300">function</span>
                        {' '}
                        <span className="text-green-300">learn</span>
                        <span className="text-white">() {'{'}</span>
                    </p>

                    <p className="pl-5 text-gray-300">
                        <span className="text-purple-300">const</span>
                        {' '}
                        <span className="text-blue-200">skill</span>
                        {' = '}
                        <span className="text-amber-200">'Technology'</span>
                        <span className="text-white">;</span>
                    </p>

                    <p className="pl-5 text-gray-300">
                        <span className="text-purple-300">return</span>
                        {' '}
                        <span className="text-green-300">practice</span>
                        <span className="text-white">(skill);</span>
                    </p>

                    <p className="text-white">{'}'}</p>

                    <p className="text-gray-500">
                        <span className="text-purple-300">05</span>
                        {'  '}
                        <span className="text-green-300">// Keep building!</span>
                    </p>
                </div>
            </div>

            {/* Editor footer */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                    <CircleCheck size={13} className="text-green-600" />
                    Concepts first
                </div>

                <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-bold text-green-700">
                    Practice
                </span>
            </div>
        </div>
    </div>
);

// =========================================
// SKILL CARD
// =========================================

const SkillCard = ({ icon: Icon, title, subtitle, color }) => (
    <div className="flex min-w-0 items-center gap-2 rounded-xl border border-gray-200 bg-white p-2.5 sm:p-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-50">
            <Icon size={17} className={color} />
        </div>

        <div className="min-w-0">
            <p className="truncate text-[10px] font-bold text-[#051D67] sm:text-xs">
                {title}
            </p>
            <p className="mt-1 truncate text-[9px] text-gray-500">
                {subtitle}
            </p>
        </div>
    </div>
);

// =========================================
// NEW RIGHT-SIDE VISUAL
// =========================================

const LearningJourneyVisual = () => (
    <div className="relative mx-auto w-full max-w-4xl min-w-0 px-1 pb-7 pt-7 sm:px-4 sm:pb-10 sm:pt-9">

        {/* Decorative background */}
        <VisualBackground />

        {/* Floating decorations */}
        <FloatingIcon
            icon={GraduationCap}
            className="left-[16%] top-0"
        />

        <FloatingIcon
            icon={Users}
            className="right-[18%] top-1"
        />

        <FloatingIcon
            icon={Database}
            className="right-0 top-[48%]"
        />

        {/* Main composition */}
        <div className="relative z-10 grid items-start gap-4 md:grid-cols-[1.12fr_0.88fr]">

            {/* Main learning journey card */}
            <div className="min-w-0">
                <LearningJourneyCard />
            </div>

            {/* Side visual cards */}
            <div className="flex min-w-0 flex-col gap-4 md:pt-16">

                {/* Code preview */}
                <CodePreviewCard />

                {/* Skill cards */}
                <div className="space-y-2">
                    <SkillCard
                        icon={Monitor}
                        title="Web Development"
                        subtitle="Create for the web"
                        color="text-blue-600"
                    />

                    <SkillCard
                        icon={Database}
                        title="Programming"
                        subtitle="Understand the logic"
                        color="text-green-600"
                    />

                    <SkillCard
                        icon={Award}
                        title="Real Projects"
                        subtitle="Build your portfolio"
                        color="text-purple-600"
                    />
                </div>

                {/* Progress highlight */}
                <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                        <ChartNoAxesCombined size={20} className="text-green-600" />
                    </div>

                    <div>
                        <p className="text-xs font-extrabold text-[#051D67]">
                            Grow with confidence
                        </p>
                        <p className="mt-1 text-[10px] text-gray-500">
                            Learn. Practice. Build.
                        </p>
                    </div>

                    <Sparkles size={17} className="ml-auto text-green-600" />
                </div>
            </div>
        </div>

        {/* Bottom floating badge */}
        <div className="pointer-events-none absolute -bottom-1 left-[8%] z-20 hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-lg sm:flex">
            <Zap size={16} className="text-green-600" />
            <span className="text-[10px] font-bold text-[#051D67]">
                Skills over shortcuts
            </span>
        </div>
    </div>
);

// =========================================
// MAIN HERO SECTION
// =========================================

const HeroSection = () => {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 22,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.65,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="hero-grid-pattern relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pt-24">

            <div className="container-shell relative z-10">

                {/* Main hero layout */}
                <div className="grid min-w-0 grid-cols-1 items-start gap-8 2xl:grid-cols-[0.82fr_1.18fr] 2xl:items-center 2xl:gap-4">

                    {/* =================================
                        LEFT SIDE - HERO CONTENT
                    ================================= */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center 2xl:mx-0 2xl:max-w-none 2xl:items-start 2xl:text-left"
                    >

                        {/* Eyebrow */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 px-4 py-2 text-xs font-bold tracking-wide text-green-700">
                            <span className="h-2 w-2 rounded-full bg-green-600" />
                            LEARN TECH. BUILD REAL SKILLS.
                        </div>

                        {/* Main heading */}
                        <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-[#051D67] sm:text-6xl lg:text-[4.5rem]">
                            Learn
                            <span className="text-green-600"> Tech.</span>
                            <br />

                            Build
                            <span className="text-green-600"> Real</span>
                            <br />

                            Skills.
                        </h1>

                        {/* Green underline */}
                        <div className="mx-auto mt-5 h-[3px] w-20 rounded-full bg-green-600 2xl:mx-0" />

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 2xl:mx-0 2xl:max-w-xl">
                            Technology doesn't have to be complicated.
                            Start from zero, understand concepts step by step,
                            and develop practical skills that help you move forward.
                        </p>

                        {/* Checklist */}
                        <div className="mt-6 flex w-full flex-col items-center space-y-3 2xl:items-start">
                            {learningPoints.map((point) => (
                                <div
                                    key={point}
                                    className="flex w-fit max-w-full items-center gap-3 text-left text-sm font-medium text-gray-800 sm:text-base"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-green-600 text-green-700">
                                        <Check size={14} strokeWidth={3} />
                                    </span>

                                    {point}
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row 2xl:justify-start">

                            <Link
                                to="/learn"
                                className="btn btn-primary inline-flex items-center justify-center gap-2"
                            >
                                <GraduationCap size={17} />
                                Start Learning
                                <ArrowRight size={17} />
                            </Link>

                            <a
                                href="https://www.youtube.com/@Nextnixtech"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                <Play size={16} />
                                Learn More
                                <ArrowUpRight size={16} />
                            </a>
                        </div>

                        {/* Feature Tags */}
                        <div className="mt-7 flex w-full flex-wrap justify-center gap-2 2xl:justify-start">
                            {featureTags.map((tag) => {
                                const Icon = tag.icon;

                                return (
                                    <div
                                        key={tag.label}
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-[10px] font-semibold text-gray-600 sm:text-xs"
                                    >
                                        <Icon size={14} className="text-green-600" />
                                        {tag.label}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* =================================
              RIGHT SIDE - NEW VISUAL
          ================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: shouldReduceMotion ? 0 : 25,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                        }}
                        className="relative mx-auto mt-2 min-w-0 w-full max-w-5xl 2xl:mt-0 2xl:max-w-none"
                    >
                        <LearningJourneyVisual />
                    </motion.div>
                </div>

                {/* =================================
            BOTTOM HIGHLIGHTS
        ================================= */}

                <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_12px_45px_-25px_rgba(5,29,103,0.18)] min-[420px]:grid-cols-2 xl:mt-14 xl:grid-cols-4">

                    {[
                        {
                            icon: Users,
                            title: 'Beginner First',
                            subtitle: 'Start from any level',
                            color: 'text-green-600',
                        },
                        {
                            icon: GraduationCap,
                            title: 'Clear Learning',
                            subtitle: 'Understand concepts',
                            color: 'text-purple-600',
                        },
                        {
                            icon: Code2,
                            title: 'Practical Skills',
                            subtitle: 'Learn by doing',
                            color: 'text-blue-600',
                        },
                        {
                            icon: ChartNoAxesCombined,
                            title: 'Keep Growing',
                            subtitle: 'Build your confidence',
                            color: 'text-amber-600',
                        },
                    ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className={`flex min-w-0 items-center gap-3 border-b border-gray-200 px-3 py-4 sm:px-4 sm:py-5 xl:border-b-0 xl:px-5 ${index % 2 === 0 ? 'min-[420px]:border-r' : ''} ${index === 1 ? 'min-[420px]:border-r-0 xl:border-r' : ''} ${index === 2 ? 'min-[420px]:border-r-0 xl:border-r' : ''} ${index === 3 ? 'border-b-0 min-[420px]:border-b-0' : ''} ${index === 2 ? 'min-[420px]:border-b-0 xl:border-b-0' : ''}`}
                            >
                                <Icon
                                    size={24}
                                    className={`shrink-0 ${item.color}`}
                                />

                                <div className="min-w-0">
                                    <p className="break-words text-xs font-extrabold text-[#051D67] sm:text-sm">
                                        {item.title}
                                    </p>

                                    <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;