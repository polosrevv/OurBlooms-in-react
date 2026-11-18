// Simple script to get screen Width to use for the navbar
import { useState, useEffect } from 'react';

export function useScreenSize() {
const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
    const handleResize = () => {
    setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
        return () => {
    window.removeEventListener('resize', handleResize);
    };
}, []);

return width;
}
