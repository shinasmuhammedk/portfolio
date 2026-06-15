import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);
    const sectionLabelRef = useRef(null);
    const cardsRef = useRef([]);
    const [currentCard, setCurrentCard] = useState(0);

    const projects = [
        {
            index: '01',
            title: 'Org',
            titleOutline: 'Workflow',
            subtitle: 'Workflow Automation Platform',
            year: '2024',
            stack: ['Node.js', 'React', 'Docker', 'PostgreSQL'],
            desc: 'A workflow automation platform connecting apps and services seamlessly. Supports 500+ integrations with real-time event processing.',
            github: 'https://github.com/shinasmuhammedk/Org',
            live: 'https://org-frontend-rho.vercel.app/',
        },
        {
            index: '02',
            title: 'VESTRA',
            titleOutline: 'Commerce',
            subtitle: 'Premium E-Commerce Store',
            year: '2024',
            stack: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
            desc: 'Premium jersey store with real-time inventory management and seamless checkout. Handles 10K+ daily users at peak.',
            github: 'https://github.com/shinasmuhammedk/vestra_backend',
            live: 'https://github.com/shinasmuhammedk/vestra',
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Header reveal
            gsap.fromTo('.projects-label',
                { y: 14, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
            );
            gsap.fromTo('.projects-headline-line',
                { y: '110%' },
                { y: '0%', stagger: 0.11, duration: 1.1, ease: 'expo.out',
                  scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
            );

            const mm = gsap.matchMedia();

            // Desktop-only (min-width: 1024px) scroll stack animation
            mm.add("(min-width: 1024px)", () => {
                // Initial card stack state
                cardsRef.current.forEach((card, i) => {
                    if (!card) return;
                    gsap.set(card, {
                        y: i * 18,
                        scale: 1 - i * 0.04,
                        opacity: i === 0 ? 1 : Math.max(0.35, 0.8 - i * 0.25),
                        zIndex: projects.length - i,
                        transformOrigin: 'center top',
                    });
                });

                // Scroll-pinned stack
                ScrollTrigger.create({
                    trigger: '.projects-stack-zone',
                    start: 'top top',
                    end: `+=${projects.length * 120}%`,
                    pin: true,
                    scrub: 0.9,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const activeIndex = Math.min(
                            Math.floor(progress * projects.length),
                            projects.length - 1
                        );
                        setCurrentCard(activeIndex);

                        cardsRef.current.forEach((card, i) => {
                            if (!card) return;
                            const cardProgress = progress * projects.length - i;

                            if (cardProgress > 0) {
                                const exit = Math.min(cardProgress, 1.3);
                                gsap.to(card, {
                                    y: -120 * exit,
                                    rotateX: -18 * exit,
                                    opacity: Math.max(0, 1 - exit * 1.1),
                                    scale: 1 - exit * 0.025,
                                    duration: 0.15,
                                    overwrite: 'auto',
                                });
                            } else {
                                const stackPos = Math.abs(cardProgress);
                                gsap.to(card, {
                                    y: stackPos * 18,
                                    rotateX: 0,
                                    opacity: stackPos === 0 ? 1 : Math.max(0.25, 0.75 - stackPos * 0.25),
                                    scale: 1 - stackPos * 0.04,
                                    duration: 0.15,
                                    overwrite: 'auto',
                                });
                            }
                        });
                    },
                });
            });

            // Mobile/Tablet-only (max-width: 1023px) scroll reveal list animations
            mm.add("(max-width: 1023px)", () => {
                cardsRef.current.forEach((card, i) => {
                    if (!card) return;
                    gsap.set(card, {
                        y: 0,
                        scale: 1,
                        opacity: 0,
                        zIndex: 1,
                    });

                    gsap.fromTo(card,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 85%',
                            }
                        }
                    );
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            {/* ── Section header (outside the pinned zone) ── */}
            <div className="relative bg-brand-dark overflow-hidden">
                <div className="w-full h-px bg-white/8" />

                {/* Watermark */}
                <div className="absolute top-0 left-0 select-none pointer-events-none z-0 overflow-hidden leading-none">
                    <span
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: '18vw',
                            fontWeight: 900,
                            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
                            color: 'transparent',
                            display: 'block',
                            lineHeight: 0.85,
                        }}
                        className="md:!text-[22vw]"
                    >
                        Work
                    </span>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 pt-24 md:pt-32 pb-16">

                    {/* Label */}
                    <div className="projects-label flex items-center gap-2.5 mb-16">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                        <span className="text-[0.65rem] tracking-[0.25em] uppercase text-white/40 font-light">
                            Selected Work
                        </span>
                        <span className="ml-auto text-[0.65rem] tracking-[0.18em] uppercase text-white/20 font-mono">
                            03 / 04
                        </span>
                    </div>

                    {/* Headline */}
                    <div>
                        <div className="overflow-hidden leading-[0.88]">
                            <h2
                                className="projects-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform text-brand-light"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                Selected
                            </h2>
                        </div>
                        <div className="overflow-hidden leading-[0.88]">
                            <h2
                                className="projects-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform"
                                style={{
                                    fontFamily: "'Syne', sans-serif",
                                    WebkitTextStroke: '1.5px rgba(240,253,244,0.35)',
                                    color: 'transparent',
                                }}
                            >
                                Projects
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Pinned stack zone ── */}
            <div
                className="projects-stack-zone relative bg-brand-dark overflow-hidden h-auto lg:h-screen"
                id="work"
            >
                {/* Top-left live counter */}
                <div className="absolute top-10 left-6 sm:left-10 xl:left-16 z-30 hidden lg:block">
                    <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                        <span className="text-[0.62rem] tracking-[0.25em] uppercase text-white/30 font-light">
                            Project
                        </span>
                    </div>
                    <div
                        className="text-[4rem] font-black tracking-tighter leading-none text-brand-light transition-all duration-300"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {String(currentCard + 1).padStart(2, '0')}
                        <span
                            className="text-[1.8rem] ml-1"
                            style={{ WebkitTextStroke: '1.5px rgba(240,253,244,0.2)', color: 'transparent' }}
                        >
                            / {String(projects.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Bottom scroll hint */}
                <div className="absolute bottom-10 right-6 sm:right-10 xl:right-16 z-30 hidden lg:flex items-center gap-2.5 text-white/20">
                    <span className="text-[0.6rem] tracking-[0.25em] uppercase">Scroll to explore</span>
                    <div className="w-px h-6 bg-white/15" />
                </div>

                {/* Card stack */}
                <div
                    className="relative lg:absolute lg:inset-0 flex flex-col lg:items-center lg:justify-center py-20 lg:py-0 px-6 sm:px-10 xl:px-16"
                    style={{ perspective: '1200px' }}
                >
                    <div className="projects-cards-wrapper relative w-full max-w-2xl flex flex-col lg:block gap-8 lg:gap-0">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                ref={el => cardsRef.current[i] = el}
                                className="relative lg:absolute lg:inset-0 w-full h-auto lg:h-full rounded-2xl border border-white/8 overflow-hidden min-h-[380px] lg:min-h-0"
                                style={{
                                    background: 'rgba(10,10,10,0.97)',
                                    willChange: 'transform, opacity',
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                {/* Accent top stripe */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-brand-accent/40" />

                                <div className="relative h-full flex flex-col justify-between p-7 sm:p-10">

                                    {/* Top row: subtitle + year */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-[0.62rem] tracking-[0.22em] uppercase text-white/30 font-light">
                                            {project.subtitle}
                                        </span>
                                        <span className="text-[0.62rem] tracking-[0.18em] uppercase text-white/20 font-mono">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Main title — Hero name treatment */}
                                    <div className="my-6 lg:-mt-2 lg:my-0">
                                        <div className="overflow-hidden leading-[0.85]">
                                            <h3
                                                className="text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] font-black tracking-tighter uppercase text-brand-light will-change-transform"
                                                style={{ fontFamily: "'Syne', sans-serif" }}
                                            >
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="overflow-hidden leading-[0.85]">
                                            <h3
                                                className="text-[2rem] sm:text-[2.8rem] md:text-[3.4rem] font-black tracking-tighter uppercase will-change-transform"
                                                style={{
                                                    fontFamily: "'Syne', sans-serif",
                                                    WebkitTextStroke: '1.5px rgba(240,253,244,0.22)',
                                                    color: 'transparent',
                                                }}
                                            >
                                                {project.titleOutline}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Bottom section */}
                                    <div className="flex flex-col gap-4 pt-5 border-t border-white/8">

                                        {/* Description */}
                                        <p className="text-white/40 text-[0.8rem] leading-relaxed font-light max-w-sm">
                                            {project.desc}
                                        </p>

                                        {/* Bottom row: stack tags + links */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">

                                            {/* Stack tags */}
                                            <div className="flex flex-wrap gap-1.5 max-w-xs sm:max-w-sm">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 text-[0.58rem] tracking-[0.12em] uppercase border border-white/8 rounded-full text-white/25"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center justify-center gap-2 px-3.5 py-1.5 border border-white/10 rounded-full text-white/35 hover:text-white hover:border-white/25 transition-all duration-300 flex-1 sm:flex-initial"
                                                >
                                                    <Github size={12} />
                                                    <span className="text-[0.6rem] tracking-[0.15em] uppercase">Code</span>
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center justify-center gap-2 px-3.5 py-1.5 border border-brand-accent/30 rounded-full text-brand-accent/60 hover:text-brand-accent hover:border-brand-accent/60 transition-all duration-300 flex-1 sm:flex-initial"
                                                >
                                                    <Globe size={12} />
                                                    <span className="text-[0.6rem] tracking-[0.15em] uppercase">Live</span>
                                                    <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
                
                @media (min-width: 1024px) {
                    .projects-cards-wrapper {
                        height: 460px;
                    }
                }
                
                @media (max-width: 1023px) {
                    .projects-stack-zone {
                        height: auto !important;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .projects-stack-zone * { transition: none !important; }
                }
            `}</style>
        </div>
    );
};

export default Projects;