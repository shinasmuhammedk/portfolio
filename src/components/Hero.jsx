import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profilePhoto from '../assets/profile.jpeg';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.1 });

            // Photo fades in first, slow
            tl.fromTo('.hero-bg-photo',
                { opacity: 0, scale: 1.06 },
                { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' }
            )
                // Overlay fades in
                .fromTo('.hero-overlay',
                    { opacity: 0 },
                    { opacity: 1, duration: 1.2, ease: 'power2.out' },
                    '-=1.2'
                )
                // Top bar
                .fromTo('.hero-topbar-item',
                    { y: -14, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out' },
                    '-=0.6'
                )
                // Name lines clip up
                .fromTo('.hero-name-line',
                    { y: '110%' },
                    { y: '0%', stagger: 0.12, duration: 1.1, ease: 'expo.out' },
                    '-=0.4'
                )
                // Bottom row
                .fromTo('.hero-bottom-item',
                    { y: 16, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out' },
                    '-=0.5'
                )
                // Side socials
                .fromTo('.hero-social-item',
                    { x: 16, opacity: 0 },
                    { x: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out' },
                    '-=0.6'
                );

            // Slow Ken Burns
            gsap.to('.hero-bg-photo', {
                scale: 1.08,
                duration: 14,
                ease: 'none',
                repeat: -1,
                yoyo: true,
            });

            // Parallax on scroll
            gsap.to('.hero-bg-photo', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
                y: 80,
            });
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen overflow-hidden bg-brand-dark selection:bg-brand-accent selection:text-brand-dark"
        >
            {/* ── Profile background photo ── */}
            <img
                src={profilePhoto}
                alt=""
                aria-hidden="true"
                className="hero-bg-photo absolute inset-0 w-[110%] h-full max-w-none object-cover z-0 will-change-transform"
                style={{ objectPosition: '10% 5%', left: '5%' }}
            />

            {/* ── Dark gradient overlay ── */}
            <div className="hero-bg-gradient absolute inset-0 z-[1]" style={{
                background: `linear-gradient(to bottom,
                    rgba(10,10,10,0.60) 0%,
                    rgba(10,10,10,0.30) 30%,
                    rgba(10,10,10,0.30) 60%,
                    rgba(10,10,10,0.92) 100%
                )`,
            }} />

            {/* ── Gradient overlay ── */}
            <div
                className="hero-overlay absolute inset-0 z-[2]"
                style={{
                    background: `
                        linear-gradient(to bottom,
                            rgba(10,10,10,0.75) 0%,
                            rgba(10,10,10,0.08) 28%,
                            rgba(10,10,10,0.08) 58%,
                            rgba(10,10,10,0.92) 100%
                        )
                    `,
                }}
            />

            {/* ── Fixed side socials ── */}
            <div className="fixed right-6 bottom-0 hidden xl:flex flex-col items-center gap-4 z-50 pb-8">
                <div className="w-px h-10 bg-white/20" />
                {[
                    { Icon: Github, href: 'https://github.com/shinasmuhammedk', label: 'GitHub' },
                    { Icon: Linkedin, href: 'https://linkedin.com/in/shnsmk', label: 'LinkedIn' },
                    { Icon: Mail, href: 'mailto:shinascontact@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="hero-social-item text-white/30 hover:text-brand-accent transition-colors duration-300 p-1.5"
                    >
                        <Icon size={16} strokeWidth={1.5} />
                    </a>
                ))}
                <div className="w-px h-10 bg-white/20" />
            </div>

            {/* ── Main layout ── */}
            <div className="relative z-20 min-h-screen flex flex-col justify-between px-6 sm:px-10 xl:px-16 pt-28 pb-10">

                {/* TOP BAR */}
                <div className="flex items-center justify-center">
                    <div className="hero-topbar-item hidden sm:flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full backdrop-blur-sm">
                        <span className="text-[0.65rem] tracking-[0.18em] uppercase text-white/40 font-light">
                            Full Stack Developer
                        </span>
                    </div>
                </div>

                {/* CENTER — big name clipped */}
                <div className="flex flex-col items-start w-full">
                    <div className="overflow-hidden w-full -mt-4 sm:-mt-6 md:-mt-8">
                        <h1
                            className="hero-name-line text-[11vw] sm:text-[9.5vw] md:text-[8.2vw] pr-4 font-black tracking-tighter leading-[0.88] text-white uppercase whitespace-nowrap will-change-transform"
                        >
                            Shinas
                        </h1>
                    </div>
                    <div className="overflow-hidden w-full">
                        <h1
                            className="hero-name-line text-[11vw] sm:text-[9.5vw] md:text-[8.2vw] pr-4 font-black tracking-tighter leading-[0.88] uppercase whitespace-nowrap will-change-transform"
                            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.45)', color: 'transparent' }}
                        >
                            Muhammed
                        </h1>
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 pt-5 border-t border-white/10">

                    <p className="hero-bottom-item max-w-[260px] text-[0.78rem] text-white/40 font-light leading-relaxed">
                        Specializing in{' '}
                        <span className="text-white/70 font-normal">scalable architectures</span>{' '}
                        and{' '}
                        <span className="text-white/70 font-normal">refined digital experiences</span>.
                    </p>

                    <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                        <div className="hero-bottom-item flex items-center gap-2 text-white/30 text-[0.65rem] tracking-widest uppercase">
                            <MapPin size={12} className="text-brand-accent" />
                            <span>Kerala, India</span>
                        </div>
                        <div className="hero-bottom-item flex items-center gap-2 text-white/30 text-[0.65rem] tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                            <span>Available for work</span>
                        </div>
                    </div>

                    <div className="hero-bottom-item hidden sm:flex flex-col items-center gap-1.5 text-white/20">
                        <span className="text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
                        <ArrowDown size={12} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
                #home .hero-name-line {
                    font-family: 'Syne', sans-serif;
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-bg-photo { animation: none !important; transform: none !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;