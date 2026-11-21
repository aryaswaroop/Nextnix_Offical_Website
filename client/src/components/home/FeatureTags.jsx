
import React from 'react';
import {
    BookOpen,
    Smartphone,
    Lightbulb,
    Code2,
    Target,
} from 'lucide-react';

const features = [
    { icon: BookOpen, label: 'Learn from Zero' },
    { icon: Smartphone, label: 'Phone-Friendly Learning' },
    { icon: Lightbulb, label: 'Concept Clarity' },
    { icon: Code2, label: 'Practical Approach' },
    { icon: Target, label: 'Skill-Focused' },
];

function RibbonTrack({ direction = 'left' }) {
    const isRight = direction === 'right';

    return (
        <div className="w-full overflow-hidden">
            <div
                className={`feature-marquee-track ${isRight
                        ? 'feature-marquee-right'
                        : 'feature-marquee-left'
                    }`}
            >
                {[0, 1].map((group) => (
                    <div
                        key={group}
                        className="flex w-max shrink-0 items-center gap-3 pr-3"
                        aria-hidden={group === 1}
                    >
                        {features.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="
                                    inline-flex shrink-0 items-center gap-2
                                    rounded-full border border-slate-200/80
                                    bg-white/80 px-4 py-3
                                    text-sm font-semibold text-slate-700
                                    shadow-sm
                                "
                            >
                                <Icon
                                    size={16}
                                    className="shrink-0 text-brand-navy"
                                />
                                <span className="whitespace-nowrap">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function FeatureTags() {
    return (
        <section className="pb-12">
            <div className="container-shell">
                <div className="relative flex flex-col gap-3 overflow-hidden py-8">

                    {/* First Ribbon: Left to Right */}
                    <div className="relative z-10 rotate-[-4deg]">
                        <RibbonTrack direction="right" />
                    </div>

                    {/* Second Ribbon: Right to Left */}
                    <div className="relative z-20 rotate-[4deg]">
                        <RibbonTrack direction="left" />
                    </div>

                </div>
            </div>

            {/* Infinite Scrolling Animation */}
            <style>{`
                .feature-marquee-track {
                    display: flex;
                    width: max-content;
                    will-change: transform;
                    animation-duration: 24s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    animation-fill-mode: both;
                }

                .feature-marquee-left {
                    animation-name: feature-scroll-left;
                }

                .feature-marquee-right {
                    animation-name: feature-scroll-right;
                }

                @keyframes feature-scroll-left {
                    from {
                        transform: translate3d(0, 0, 0);
                    }
                    to {
                        transform: translate3d(-50%, 0, 0);
                    }
                }

                @keyframes feature-scroll-right {
                    from {
                        transform: translate3d(-50%, 0, 0);
                    }
                    to {
                        transform: translate3d(0, 0, 0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .feature-marquee-track {
                        animation-play-state: paused;
                    }
                }
            `}</style>
        </section>
    );
}
