import React from 'react';
import { Heart, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative border-t border-white/10 bg-[#0a0a0a] py-12">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    <div className="text-center md:text-left">
                        <p className="text-white/60 text-sm">
                            &copy; {new Date().getFullYear()} Shinas Muhammed K
                        </p>
                        <p className="text-white/30 text-xs mt-1">
                            All rights reserved
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a 
                            href="https://github.com/shinasmuhammedk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                        >
                            <Github size={18} />
                        </a>
                        <a 
                            href="https://linkedin.com/in/shnsmk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a 
                            href="https://instagram.com/shinaasmuhammed" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                        >
                            <Instagram size={18} />
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <p className="flex items-center gap-2 text-white/40 text-sm">
                            Built with 
                            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> 
                            React & Tailwind
                        </p>
                        
                        <button 
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-lime-400 hover:border-lime-400/50 hover:bg-lime-400/10 transition-all duration-300 group"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;