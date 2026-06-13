import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Zap, Cpu, Globe, ChevronRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);
    const [activeSkill, setActiveSkill] = useState(0);

    const skills = [
        {
            id: 'frontend',
            title: 'FRONTEND',
            subtitle: 'Interface Architecture',
            level: 95,
            tools: ['React', 'Redux', 'JavaScript', 'Tailwind', 'Bootstrap'],
            icon: Globe,
            desc: 'Building fluid, accessible interfaces with surgical precision.'
        },
        {
            id: 'backend',
            title: 'BACKEND',
            subtitle: 'System Logic',
            level: 92,
            tools: ['Go', 'Gin','Fiber', 'PostgreSQL', 'Redis', 'gRPC', 'Docker','MongoDb','GraphQl'],
            icon: Terminal,
            desc: 'High-performance APIs and distributed system orchestration.'
        },
        {
            id: 'devops',
            title: 'DEVOPS',
            subtitle: 'Infrastructure',
            level: 85,
            tools: ['AWS', 'CI/CD', 'Nginx', 'GitHub Actions'],
            icon: Zap,
            desc: 'Automated deployment pipelines and scalable cloud architecture.'
        },
        {
            id: 'core',
            title: 'CORE',
            subtitle: 'Fundamentals',
            level: 88,
            tools: ['System Design', 'Microservices', 'DSA', 'Concurrency', 'Optimization'],
            icon: Cpu,
            desc: 'Deep computer science foundations and algorithmic thinking.'
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Watermark text
            gsap.fromTo('.skills-watermark',
                { x: -40, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.6, ease: 'power3.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
            );

            // Label
            gsap.fromTo('.skills-label',
                { y: 16, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
            );

            // Headline clipped lines
            gsap.fromTo('.skills-headline-line',
                { y: '110%' },
                { y: '0%', stagger: 0.12, duration: 1.1, ease: 'expo.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' } }
            );

            // Cards list slide up / fade in
            gsap.fromTo('.skill-card',
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, stagger: 0.1, duration: 0.8, 
                    ease: 'power3.out',
                    scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' }
                }
            );

            // Active details panel fade/slide in
            gsap.fromTo('.skills-details-panel',
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 0.8, 
                    ease: 'power3.out',
                    scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' }
                }
            );

            // Divider line grow
            gsap.fromTo('.skills-divider',
                { scaleX: 0, transformOrigin: 'left' },
                { scaleX: 1, duration: 1.2, ease: 'expo.out',
                  scrollTrigger: { trigger: '.skills-divider', start: 'top 90%' } }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const currentSkill = skills[activeSkill];

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative bg-brand-dark overflow-hidden selection:bg-brand-accent selection:text-brand-dark"
        >
            {/* Top hairline */}
            <div className="skills-divider w-full h-px bg-white/8" />

            {/* ── Watermark ── */}
            <div className="skills-watermark absolute top-0 left-0 select-none pointer-events-none z-0 overflow-hidden leading-none">
                <span
                    className="text-[22vw] font-black tracking-tighter uppercase"
                    style={{
                        fontFamily: "'Syne', sans-serif",
                        WebkitTextStroke: '1px rgba(255,255,255,0.04)',
                        color: 'transparent',
                        display: 'block',
                        lineHeight: 0.85,
                    }}
                >
                    Skills
                </span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 py-24 md:py-32">

                {/* Section label */}
                <div className="skills-label flex items-center gap-2.5 mb-16">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-[0.65rem] tracking-[0.25em] uppercase text-white/40 font-light">
                        Skills
                    </span>
                    <span className="ml-auto text-[0.65rem] tracking-[0.18em] uppercase text-white/20 font-mono">
                        02 / 04
                    </span>
                </div>

                {/* Headline */}
                <div className="mb-20">
                    <div className="overflow-hidden leading-[0.88]">
                        <h2
                            className="skills-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform text-brand-light"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Technical
                        </h2>
                    </div>
                    <div className="overflow-hidden leading-[0.88]">
                        <h2
                            className="skills-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform"
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                WebkitTextStroke: '1.5px rgba(240,253,244,0.35)',
                                color: 'transparent',
                            }}
                        >
                            Expertise
                        </h2>
                    </div>
                </div>

                {/* Main Layout: LEFT = Cards, RIGHT = Detail */}
                <div className="skills-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* LEFT: Skill Selector Cards */}
                    <div className="lg:col-span-7 space-y-3">
                        {skills.map((skill, idx) => {
                            const isActive = activeSkill === idx;
                            const Icon = skill.icon;
                            
                            return (
                                <div
                                    key={skill.id}
                                    className="skill-card group relative cursor-pointer"
                                    onClick={() => setActiveSkill(idx)}
                                    onMouseEnter={() => setActiveSkill(idx)}
                                >
                                    <div className={`
                                        relative border rounded-lg p-5 sm:p-6 transition-all duration-300 overflow-hidden
                                        ${isActive ? 'border-brand-accent/20 bg-white/[0.02]' : 'border-white/5 bg-transparent hover:border-white/10'}
                                    `}>
                                        <div 
                                            className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300"
                                            style={{ 
                                                backgroundColor: 'var(--color-brand-accent, #4ade80)',
                                                opacity: isActive ? 1 : 0
                                            }}
                                        />

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`
                                                    w-10 h-10 rounded border flex items-center justify-center transition-all duration-300
                                                    ${isActive ? 'border-brand-accent/20' : 'border-white/5'}
                                                `}>
                                                    <Icon 
                                                        size={18} 
                                                        className={`transition-colors duration-300 ${isActive ? 'text-brand-accent' : 'text-white/20'}`}
                                                    />
                                                </div>
                                                
                                                <div>
                                                    <h4 className={`
                                                        text-[1rem] sm:text-[1.25rem] font-bold tracking-tight transition-colors duration-300
                                                        ${isActive ? 'text-white' : 'text-white/40'}
                                                    `}
                                                        style={{ fontFamily: "'Syne', sans-serif" }}>
                                                        {skill.title}
                                                    </h4>
                                                    <span className="text-[0.6rem] tracking-[0.15em] uppercase text-white/30 font-light">
                                                        {skill.subtitle}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="hidden sm:block w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full rounded-full bg-brand-accent transition-all duration-700"
                                                        style={{ 
                                                            width: isActive ? `${skill.level}%` : '0%',
                                                        }}
                                                    />
                                                </div>
                                                <span 
                                                    className={`text-[0.85rem] font-bold transition-colors duration-300 ${isActive ? 'text-brand-accent' : 'text-white/15'}`}
                                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                                >
                                                    {skill.level}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={`
                                            overflow-hidden transition-all duration-500
                                            ${isActive ? 'max-h-24 mt-4 opacity-100' : 'max-h-0 opacity-0'}
                                        `}>
                                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                                {skill.tools.map(tool => (
                                                    <span 
                                                        key={tool}
                                                        className="px-2 py-0.5 text-[0.58rem] tracking-[0.12em] uppercase rounded-full border border-brand-accent/10 text-brand-accent/60 bg-brand-accent/5 font-light"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Active Skill Detail */}
                    <div className="lg:col-span-5 skills-details-panel lg:sticky lg:top-28">
                        <div className="relative border border-white/8 bg-brand-dark/40 backdrop-blur-sm p-6 sm:p-8 rounded-lg overflow-hidden">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-accent/30" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-accent/30" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-accent/30" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-accent/30" />

                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 font-light">
                                    {currentSkill.subtitle}
                                </span>
                                <currentSkill.icon size={18} className="text-brand-accent" />
                            </div>

                            <h3 className="text-[2.5rem] sm:text-[3rem] font-black tracking-tighter leading-none mb-6 text-brand-accent" 
                                style={{ fontFamily: "'Syne', sans-serif" }}>
                                {currentSkill.title}
                            </h3>

                            <p className="text-[0.82rem] text-white/50 leading-relaxed mb-8 font-light">
                                {currentSkill.desc}
                            </p>

                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 font-light">
                                        Proficiency
                                    </span>
                                    <span className="text-[1.1rem] font-bold text-brand-accent" 
                                        style={{ fontFamily: "'Syne', sans-serif" }}>
                                        {currentSkill.level}%
                                    </span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full rounded-full bg-brand-accent transition-all duration-1000 ease-out"
                                        style={{ width: `${currentSkill.level}%` }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {currentSkill.tools.map((tool) => (
                                    <div 
                                        key={tool}
                                        className="flex items-center gap-2 px-3 py-2 rounded border border-white/5 bg-white/[0.01] text-[0.72rem] font-light text-white/45 hover:text-brand-accent hover:border-brand-accent/20 transition-all duration-300"
                                    >
                                        <ChevronRight size={10} className="text-brand-accent" />
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-[0.6rem] text-white/20 font-light tracking-wider">
                            <span className="w-8 h-px bg-white/20" />
                            <span>MODULE_{activeSkill + 1}_OF_{skills.length}</span>
                        </div>
                    </div>

                </div>

                {/* Bottom quote strip */}
                <div className="mt-24 pt-6 border-t border-white/6 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-white/12 text-[0.75rem] font-light italic">
                        "Simplicity is the ultimate sophistication."
                    </p>
                    <a
                        href="#work"
                        className="group inline-flex items-center gap-2.5 text-[0.65rem] tracking-[0.2em] uppercase text-white/30 hover:text-brand-accent transition-colors duration-300"
                    >
                        <span>View My Projects</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                </div>

            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
                @media (prefers-reduced-motion: reduce) {
                    .skills-watermark { display: none !important; }
                    .skill-card, .skills-details-panel { transition: none !important; }
                }
            `}</style>
        </section>
    );
};

export default Skills;