import { useState, useEffect, useRef } from 'react';

export function useScrollAnimation(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Jika elemen terlihat di layar, set state ke true
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Hentikan observasi agar animasi tidak berulang saat di-scroll naik/turun
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options.threshold, options.rootMargin]); // Dependensi pada opsi

    return [ref, isVisible];
}