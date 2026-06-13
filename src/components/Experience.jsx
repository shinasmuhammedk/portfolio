import React, { useRef, useEffect } from 'react';
import { GraduationCap, Code2, MapPin, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        id: 1,
        index: '01',
        type: 'Internship',
        title: 'Software',
        titleOutline: 'Developer',
        institution: 'Bridgeon Solutions',
        location: 'On-site / Remote',
        period: '2025 — Present',
        description: 'Working with Golang and React to build enterprise-grade applications. Contributing to backend microservices and modern frontend interfaces.',
        Icon: Code2,
        current: true,
    },
    {
        id: 2,
        index: '02',
        type: 'Education',
        title: 'B.Sc. Computer',
        titleOutline: 'Science',
        institution: 'Farook College, University of Calicut',
        location: 'Kerala, India',
        period: '2022 — 2025',
        description: 'Comprehensive foundation in software engineering, algorithms, data structures, and computer systems.',
        Icon: GraduationCap,
        current: false,
    },
];

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.exp-label',
                { y: 14, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } }
            );
            gsap.fromTo('.exp-headline-line',
                { y: '110%' },
                { y: '0%', stagger: 0.11, duration: 1.1, ease: 'expo.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
            );
            gsap.fromTo('.exp-row',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.14, duration: 0.9, ease: 'power3.out',
                  scrollTrigger: { trigger: '.exp-rows', start: 'top 82%' } }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="relative bg-brand-dark overflow-hidden selection:bg-brand-accent selection:text-brand-dark"
        >
            <div className="w-full h-px bg-white/8" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 py-24 md:py-32">

                {/* Label */}
                <div className="exp-label flex items-center gap-2.5 mb-14">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-[0.65rem] tracking-[0.25em] uppercase text-white/40 font-light">
                        Journey
                    </span>
                    <span className="ml-auto text-[0.65rem] tracking-[0.18em] uppercase text-white/20 font-mono">
                        03 / 04
                    </span>
                </div>

                {/* Headline */}
                <div className="mb-20">
                    <div className="overflow-hidden leading-[0.88]">
                        <h2 className="exp-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform text-brand-light"
                            style={{ fontFamily: "'Syne', sans-serif" }}>
                            Experience &
                        </h2>
                    </div>
                    <div className="overflow-hidden leading-[0.88]">
                        <h2 className="exp-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform"
                            style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: '1.5px rgba(240,253,244,0.3)', color: 'transparent' }}>
                            Education
                        </h2>
                    </div>
                </div>

                {/* ── Table rows ── */}
                <div className="exp-rows flex flex-col">

                    {/* Column header — desktop only */}
                    <div className="hidden lg:grid grid-cols-12 gap-6 pb-4 border-b border-white/8 mb-2">
                        <div className="col-span-2">
                            <span className="text-[0.58rem] tracking-[0.25em] uppercase text-white/20">Period</span>
                        </div>
                        <div className="col-span-5">
                            <span className="text-[0.58rem] tracking-[0.25em] uppercase text-white/20">Role</span>
                        </div>
                        <div className="col-span-5">
                            <span className="text-[0.58rem] tracking-[0.25em] uppercase text-white/20">Details</span>
                        </div>
                    </div>

                    {timelineData.map((item) => {
                        const Icon = item.Icon;
                        return (
                            <div key={item.id} className="exp-row group relative">
                                <div className="w-full h-px bg-white/8" />

                                {/* Hover left accent */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 py-10 pl-4 lg:pl-5">

                                    {/* DATE — col 1-2 */}
                                    <div className="lg:col-span-2 flex flex-row lg:flex-col justify-between lg:justify-start gap-3 lg:gap-4">
                                        <span className="font-mono text-[0.72rem] text-white/30 tracking-wider leading-relaxed">
                                            {item.period}
                                        </span>
                                        {item.current && (
                                            <div className="inline-flex items-center gap-1.5 self-start">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                                                <span className="text-[0.58rem] tracking-[0.2em] uppercase text-brand-accent">Now</span>
                                            </div>
                                        )}
                                        {/* Index number ghost */}
                                        <span
                                            className="hidden lg:block text-[4rem] font-black tracking-tighter leading-none mt-auto"
                                            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.06)', color: 'transparent', fontFamily: "'Syne', sans-serif" }}
                                        >
                                            {item.index}
                                        </span>
                                    </div>

                                    {/* ROLE — col 3-7, dominant */}
                                    <div className="lg:col-span-5 flex flex-col justify-center gap-1">
                                        {/* Big title */}
                                        <div className="overflow-hidden leading-[0.85]">
                                            <h3
                                                className="text-[9vw] sm:text-[5.5vw] lg:text-[3.6vw] font-black tracking-tighter uppercase text-brand-light group-hover:text-brand-accent transition-colors duration-300 will-change-transform"
                                                style={{ fontFamily: "'Syne', sans-serif" }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="overflow-hidden leading-[0.85]">
                                            <h3
                                                className="text-[9vw] sm:text-[5.5vw] lg:text-[3.6vw] font-black tracking-tighter uppercase will-change-transform"
                                                style={{
                                                    fontFamily: "'Syne', sans-serif",
                                                    WebkitTextStroke: '1.5px rgba(240,253,244,0.25)',
                                                    color: 'transparent',
                                                }}
                                            >
                                                {item.titleOutline}
                                            </h3>
                                        </div>

                                        {/* Type pill */}
                                        <div className="mt-3 flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full border border-white/8 flex items-center justify-center group-hover:border-brand-accent/30 transition-colors duration-300">
                                                <Icon size={12} className="text-white/20 group-hover:text-brand-accent/70 transition-colors duration-300" />
                                            </div>
                                            <span className="px-2.5 py-0.5 border border-white/8 rounded-full text-[0.58rem] tracking-[0.15em] uppercase text-white/25">
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* DESCRIPTION — col 8-12 */}
                                    <div className="lg:col-span-5 lg:border-l lg:border-white/8 lg:pl-8 flex flex-col justify-center gap-4">
                                        <div>
                                            <p className="text-white/60 text-[0.88rem] font-light mb-1.5">
                                                {item.institution}
                                            </p>
                                            <div className="flex items-center gap-1.5 text-white/25 text-[0.62rem] tracking-widest uppercase">
                                                <MapPin size={11} className="text-brand-accent/50" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-white/30 text-[0.82rem] leading-relaxed font-light border-l-2 border-white/8 pl-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover arrow */}
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowUpRight size={14} className="text-brand-accent" />
                                </div>
                            </div>
                        );
                    })}

                    <div className="w-full h-px bg-white/8" />
                </div>

                {/* Bottom strip */}
                <div className="mt-16 pt-6 border-t border-white/6 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-white/12 text-[0.75rem] font-light italic">
                        "The best way to predict the future is to build it."
                    </p>
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/30 hover:text-brand-accent transition-colors duration-300"
                    >
                        <span>Get in Touch</span>
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
                @media (prefers-reduced-motion: reduce) {
                    .exp-row * { transition: none !important; }
                }
            `}</style>
        </section>
    );
};

export default Experience;