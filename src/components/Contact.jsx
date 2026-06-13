import React, { useRef, useEffect, useState } from 'react';
import { Mail, Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-label',
                { y: 14, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } }
            );
            gsap.fromTo('.contact-headline-line',
                { y: '110%' },
                { y: '0%', stagger: 0.11, duration: 1.1, ease: 'expo.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
            );
            gsap.fromTo('.contact-item',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
                  scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative bg-brand-dark overflow-hidden selection:bg-brand-accent selection:text-brand-dark"
        >
            <div className="w-full h-px bg-white/8" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 py-24 md:py-32">
                
                {/* Label */}
                <div className="contact-label flex items-center gap-2.5 mb-14">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-[0.65rem] tracking-[0.25em] uppercase text-white/40 font-light">
                        Contact
                    </span>
                    <span className="ml-auto text-[0.65rem] tracking-[0.18em] uppercase text-white/20 font-mono">
                        04 / 04
                    </span>
                </div>

                {/* Headline */}
                <div className="mb-20">
                    <div className="overflow-hidden leading-[0.88]">
                        <h2 className="contact-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform text-brand-light"
                            style={{ fontFamily: "'Syne', sans-serif" }}>
                            Let&apos;s
                        </h2>
                    </div>
                    <div className="overflow-hidden leading-[0.88]">
                        <h2 className="contact-headline-line text-[9vw] sm:text-[6.5vw] lg:text-[4.5vw] font-black tracking-tighter uppercase will-change-transform"
                            style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: '1.5px rgba(240,253,244,0.3)', color: 'transparent' }}>
                            Connect
                        </h2>
                    </div>
                    <p className="contact-item mt-8 text-white/50 max-w-md font-light">
                        Have a project in mind? I&apos;m currently available for freelance work and open to opportunities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Contact Info */}
                    <div className="space-y-6">
                        <a 
                            href="mailto:shinascontact@gmail.com" 
                            className="contact-item group flex items-center gap-5 p-6 rounded-2xl border border-white/8 hover:border-brand-accent/50 hover:bg-white/[0.02] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-brand-accent/30 flex items-center justify-center text-white/50 group-hover:text-brand-accent transition-colors">
                                <Mail size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em] mb-1.5 font-light">Email</div>
                                <div className="text-white group-hover:text-brand-accent transition-colors font-light tracking-wide">shinascontact@gmail.com</div>
                            </div>
                            <ArrowUpRight size={18} className="text-white/20 group-hover:text-brand-accent transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <a 
                            href="tel:+917306554182" 
                            className="contact-item group flex items-center gap-5 p-6 rounded-2xl border border-white/8 hover:border-brand-accent/50 hover:bg-white/[0.02] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-brand-accent/30 flex items-center justify-center text-white/50 group-hover:text-brand-accent transition-colors">
                                <Phone size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em] mb-1.5 font-light">Phone</div>
                                <div className="text-white group-hover:text-brand-accent transition-colors font-light tracking-wide">+91 73065 54182</div>
                            </div>
                            <ArrowUpRight size={18} className="text-white/20 group-hover:text-brand-accent transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>

                        <div className="contact-item group flex items-center gap-5 p-6 rounded-2xl border border-white/8">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50">
                                <MapPin size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em] mb-1.5 font-light">Location</div>
                                <div className="text-white font-light tracking-wide">Kerala, India</div>
                            </div>
                        </div>

                        <div className="contact-item flex items-center gap-3 px-6 py-4 rounded-full border border-white/8 w-fit bg-white/[0.01]">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                            <span className="text-sm text-white/60 font-light tracking-wide">Available for new opportunities</span>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-item">
                        <form onSubmit={handleSubmit} ref={formRef} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-[0.65rem] text-white/40 uppercase tracking-[0.2em] mb-3 font-light transition-colors group-focus-within:text-brand-accent">Name</label>
                                    <input 
                                        type="text" 
                                        value={formState.name}
                                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                                        className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors font-light tracking-wide"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-[0.65rem] text-white/40 uppercase tracking-[0.2em] mb-3 font-light transition-colors group-focus-within:text-brand-accent">Email</label>
                                    <input 
                                        type="email" 
                                        value={formState.email}
                                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                                        className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors font-light tracking-wide"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-[0.65rem] text-white/40 uppercase tracking-[0.2em] mb-3 font-light transition-colors group-focus-within:text-brand-accent">Message</label>
                                <textarea 
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    rows="4"
                                    className="w-full bg-transparent border-b border-white/15 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors resize-none font-light tracking-wide"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-accent text-brand-dark font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
            `}</style>
        </section>
    );
};

export default Contact;