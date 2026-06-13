import React, { useRef, useEffect } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePhoto from '../assets/about.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Watermark text
            gsap.fromTo('.about-watermark',
                { x: -40, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.6, ease: 'power3.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
            );

            // Label
            gsap.fromTo('.about-label',
                { y: 16, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
            );

            // Headline clipped lines
            gsap.fromTo('.about-headline-line',
                { y: '110%' },
                { y: '0%', stagger: 0.12, duration: 1.1, ease: 'expo.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' } }
            );

            // Body items
            gsap.fromTo('.about-body-item',
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.09, duration: 0.8, ease: 'power3.out',
                  scrollTrigger: { trigger: '.about-content', start: 'top 80%' } }
            );

            // Image reveal
            gsap.fromTo('.about-image-wrap',
                { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
                { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1.4, ease: 'expo.out',
                  scrollTrigger: { trigger: '.about-image-wrap', start: 'top 85%' } }
            );

            // Stats
            gsap.fromTo('.about-stat',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: '.about-stats-row', start: 'top 88%' } }
            );

            // Divider line grow
            gsap.fromTo('.about-divider',
                { scaleX: 0, transformOrigin: 'left' },
                { scaleX: 1, duration: 1.2, ease: 'expo.out',
                  scrollTrigger: { trigger: '.about-divider', start: 'top 90%' } }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { value: '1+',  label: 'Years of Experience' },
        { value: '2+', label: 'Projects Shipped' },
        { value: '∞',   label: 'Cups of Tea' },
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative bg-brand-dark overflow-hidden selection:bg-brand-accent selection:text-brand-dark"
        >
            {/* Top hairline */}
            <div className="about-divider w-full h-px bg-white/8" />

            {/* ── Watermark ── */}
            <div className="about-watermark absolute top-0 left-0 select-none pointer-events-none z-0 overflow-hidden leading-none">
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
                    About
                </span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 py-24 md:py-32">

                {/* Section label — same style as Hero topbar */}
                <div className="about-label flex items-center gap-2.5 mb-16">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-[0.65rem] tracking-[0.25em] uppercase text-white/40 font-light">
                        About Me
                    </span>
                    <span className="ml-auto text-[0.65rem] tracking-[0.18em] uppercase text-white/20 font-mono">
                        01 / 04
                    </span>
                </div>

                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* LEFT — image column */}
                    <div className="about-image-wrap mb-12 md:mb-0 md:pr-8 md:col-span-1 transform md:scale-105">
                        <div className="relative">
                            {/* Image */}
                            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white/5">
                                <img
                                    src={profilePhoto}
                                    alt="Shinas Muhammed"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Bottom fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating status pill — bottom left */}
                            {/* <div className="absolute bottom-5 left-5 flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-white/10 bg-brand-dark/80 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                                <span className="text-[0.65rem] tracking-[0.18em] uppercase text-white/50 font-light">
                                    Available for work
                                </span>
                            </div> */}

                            {/* Location tag — top right */}
                            {/* <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-brand-dark/70 backdrop-blur-sm">
                                <MapPin size={11} className="text-brand-accent" />
                                <span className="text-[0.62rem] tracking-widest uppercase text-white/40">
                                    Kerala, India
                                </span>
                            </div> */}

                            {/* Decorative outline ring */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-white/6 pointer-events-none" />
                        </div>
                    
                        <div className="about-stats-row flex gap-0 divide-x divide-white/8 mt-12">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="about-stat group cursor-default px-8 first:pl-0 last:pr-0">
                                    <div className="text-[2.4rem] font-black tracking-tighter text-brand-light group-hover:text-brand-accent transition-colors duration-300 leading-none mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-[0.58rem] tracking-[0.22em] uppercase text-white/25 leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>

                    {/* RIGHT — content column */}
                    <div className="about-content md:pl-8 md:border-l md:border-white/8 flex flex-col md:col-span-2">

                        {/* Headline — mirrors Hero name treatment */}
                        <div className="mb-10">
                            <div className="overflow-hidden leading-[0.88]">
                                <h2
                                    className="about-headline-line text-[13vw] sm:text-[9vw] lg:text-[6.5vw] font-black tracking-tighter uppercase will-change-transform text-brand-light"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    Building
                                </h2>
                            </div>
                            <div className="overflow-hidden leading-[0.88]">
                                <h2
                                    className="about-headline-line text-[13vw] sm:text-[9vw] lg:text-[6.5vw] font-black tracking-tighter uppercase will-change-transform"
                                    style={{
                                        fontFamily: "'Syne', sans-serif",
                                        WebkitTextStroke: '1.5px rgba(240,253,244,0.35)',
                                        color: 'transparent',
                                    }}
                                >
                                    Things That
                                </h2>
                            </div>
                            <div className="overflow-hidden leading-[0.88]">
                                <h2
                                    className="about-headline-line text-[13vw] sm:text-[9vw] lg:text-[6.5vw] font-black tracking-tighter uppercase will-change-transform text-brand-accent"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    Matter.
                                </h2>
                            </div>
                        </div>

                        {/* Bio — left-border like Hero bottom row description */}
                        <div className="about-body-item border-l-2 border-brand-accent/30 pl-5 mb-10 space-y-3 max-w-md">
                            <p className="text-white/55 text-[0.88rem] leading-relaxed font-light">
                                I'm a Full Stack Developer specializing in{' '}
                                <span className="text-white/80 font-normal">React ecosystems</span> and{' '}
                                <span className="text-white/80 font-normal">Go backends</span>. I bridge the gap
                                between pixel-perfect interfaces and rock-solid infrastructure.
                            </p>
                            <p className="text-white/30 text-[0.82rem] leading-relaxed font-light">
                                Focused on scalable, high-performance applications
                                that solve real problems — and feel great to use.
                            </p>
                        </div>

                        {/* Skills tags */}
                        <div className="about-body-item flex flex-wrap gap-2 mb-12">
                            {['React', 'Go', 'Fiber', 'Gin', 'Redux', 'PostgreSQL', 'Docker', 'AWS'].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase border border-white/10 rounded-full text-white/35 hover:border-brand-accent/50 hover:text-brand-accent transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="about-divider w-full h-px bg-white/8 mb-8" />

                        {/* View My Work CTA */}
                        <div className="about-body-item">
                            <a
                                href="#work"
                                onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className="group inline-flex items-center gap-3 text-[0.72rem] tracking-[0.2em] uppercase text-white/40 hover:text-brand-accent transition-colors duration-300"
                            >
                                <span>View My Work</span>
                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom quote strip — same as original but tighter */}
                <div className="mt-24 pt-6 border-t border-white/6 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-white/12 text-[0.75rem] font-light italic">
                        "Good code is like a good joke — it needs no explanation."
                    </p>
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/12">SMK © 2025</span>
                </div>

            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
                @media (prefers-reduced-motion: reduce) {
                    .about-image-wrap { clip-path: none !important; }
                }
            `}</style>
        </section>
    );
};

export default About;