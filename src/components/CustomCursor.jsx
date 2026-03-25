import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };
        
        const handleMouseOver = (e) => {
            const isClickable = e.target.tagName.toLowerCase() === 'a' || 
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') || 
                e.target.closest('button') ||
                window.getComputedStyle(e.target).cursor === 'pointer';
                
            setIsHovering(isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    useEffect(() => {
        // Only apply cursor hiding on desktop
        if (window.matchMedia('(min-width: 768px)').matches) {
            document.body.style.cursor = 'none';
            
            const style = document.createElement('style');
            style.innerHTML = `
                * {
                    cursor: none !important;
                }
            `;
            document.head.appendChild(style);
            
            return () => {
                document.body.style.cursor = 'auto';
                if(document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            };
        }
    }, []);

    // Don't render on mobile devices
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
        return null;
    }

    if (!isVisible) return null;

    return (
        <>
            {/* Small inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00bfff] rounded-full pointer-events-none z-[9999]"
                animate={{ 
                    x: mousePosition.x - 3, 
                    y: mousePosition.y - 3,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Larger outer ring/glow */}
            <motion.div
                className="fixed top-0 left-0 w-5 h-5 rounded-full border border-[#00bfff]/50 bg-[#00bfff]/10 pointer-events-none z-[9998]"
                animate={{ 
                    x: mousePosition.x - 10, 
                    y: mousePosition.y - 10,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(0,191,255,0.2)' : 'rgba(0,191,255,0.1)'
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            />
        </>
    );
};

export default CustomCursor;
