import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll-triggered fade-up animation.
 * @param {object} options - options: { y, duration, stagger, delay }
 */
export function useScrollReveal(ref, selector, options = {}) {
    const { y = 40, duration = 0.8, stagger = 0.12, delay = 0 } = options;
    useEffect(() => {
        if (!ref.current) return;
        const elements = ref.current.querySelectorAll(selector);
        if (!elements.length) return;

        gsap.fromTo(
            elements,
            { y, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration,
                stagger,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    }, []);
}

/**
 * Custom hook for GSAP scroll-triggered horizontal slide animation.
 */
export function useScrollSlide(ref, selector, options = {}) {
    const { x = -60, duration = 0.8, stagger = 0.15, delay = 0 } = options;
    useEffect(() => {
        if (!ref.current) return;
        const elements = ref.current.querySelectorAll(selector);
        if (!elements.length) return;

        gsap.fromTo(
            elements,
            { x, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration,
                stagger,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    }, []);
}
