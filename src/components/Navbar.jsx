import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [currentTime, setCurrentTime] = useState('');
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const mobileMenuRef = useRef(null);
    const lastScrollYRef = useRef(0);

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    // Update time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                timeZone: 'Asia/Kolkata'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Entry animation
    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.3, ease: 'power3.out' });
        
        tl.fromTo(navRef.current, 
            { y: -30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(linksRef.current, 
            { y: -10, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.6 }, 
            '-=0.4'
        );

        return () => tl.kill();
    }, []);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            if (isOpen) return;

            if (currentScrollY > lastScrollYRef.current && currentScrollY > 120) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollYRef.current) {
                setIsVisible(true);
            }
            
            lastScrollYRef.current = currentScrollY;
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // Mobile menu animation
    useEffect(() => {
        if (!mobileMenuRef.current) return;
        
        if (isOpen) {
            gsap.fromTo(mobileMenuRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
            );
            gsap.fromTo('.mobile-link',
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.08, duration: 0.4, delay: 0.1, ease: 'power3.out' }
            );
        }
    }, [isOpen]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleLinkHover = (e, entering) => {
        gsap.to(e.currentTarget.querySelector('.link-line'), {
            scaleX: entering ? 1 : 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    return (
        <>
            {/* Floating Centered Navbar */}
            <header 
                ref={navRef}
                className={`fixed ${
                    isVisible ? 'top-6' : 'top-[-80px]'
                } left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 md:px-8 py-3 md:py-4 ${
                    isScrolled 
                        ? 'bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50' 
                        : 'bg-[#0a0a0a]/40 backdrop-blur-sm border border-white/5'
                } w-[calc(100%-2rem)] md:w-auto md:min-w-[500px]`}
            >
                <div className="flex justify-between items-center gap-4 md:gap-12">
                    
                    {/* Logo */}
                    <a 
                        ref={logoRef}
                        href="#home"
                        className="text-white font-bold tracking-[0.2em] uppercase text-xs hover:text-lime-400 transition-colors duration-300 whitespace-nowrap"
                    >
                        SMK
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                ref={el => linksRef.current[i] = el}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-[11px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-300 py-1 group whitespace-nowrap"
                                onMouseEnter={(e) => handleLinkHover(e, true)}
                                onMouseLeave={(e) => handleLinkHover(e, false)}
                            >
                                {link.name}
                                <span className="link-line absolute bottom-0 left-0 w-full h-px bg-lime-400 origin-left scale-x-0" />
                            </a>
                        ))}
                    </nav>

                    {/* Time Display */}
                    <div className="hidden lg:block text-[10px] font-light text-white/50 tracking-wider pl-6 border-l border-white/10 whitespace-nowrap">
                        {currentTime}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white p-2 hover:text-lime-400 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div 
                    ref={mobileMenuRef}
                    className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-8 md:hidden"
                >
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { handleNavClick(e, link.href); setIsOpen(false); }}
                                className="mobile-link text-3xl font-light text-white tracking-tight hover:text-lime-400 transition-colors border-b border-white/10 pb-4"
                            >
                                {link.name}
                            </a>
                        ))}
                        
                        <div className="mobile-link mt-8 pt-8 border-t border-white/10">
                            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Current Time</p>
                            <p className="text-lg font-light text-white">{currentTime} IST</p>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;