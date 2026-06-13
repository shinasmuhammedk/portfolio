import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageLoader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const counterRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Slide the entire loader up
                gsap.to(loaderRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power4.inOut',
                    onComplete: () => {
                        if (loaderRef.current) loaderRef.current.style.display = 'none';
                        onComplete && onComplete();
                    }
                });
            }
        });

        // Fast counter count up
        const obj = { val: 0 };
        tl.to(obj, {
            val: 100,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.textContent = String(Math.round(obj.val)).padStart(3, '0');
                }
            }
        });

        // Progress bar fill parallel
        tl.to(progressBarRef.current, {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.out'
        }, '<');

    }, [onComplete]);

    return (
        <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-xs flex flex-col items-center gap-6">
                <div className="flex items-baseline gap-1">
                    <span
                        ref={counterRef}
                        className="text-4xl sm:text-5xl font-black text-brand-accent font-mono tabular-nums leading-none"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        000
                    </span>
                    <span className="text-sm text-white/25 font-bold">%</span>
                </div>
                
                {/* Minimal Track */}
                <div className="w-full h-px bg-white/10 overflow-hidden">
                    <div
                        ref={progressBarRef}
                        className="h-full bg-brand-accent origin-left"
                        style={{ transform: 'scaleX(0)' }}
                    />
                </div>
            </div>
            
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');
            `}</style>
        </div>
    );
};

export default PageLoader;  