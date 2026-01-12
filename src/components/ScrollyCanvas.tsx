'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { frameNames } from '@/lib/frames';
import { cn } from '@/lib/utils';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll (0 to 1) to frame index (0 to frameCount - 1)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameNames.length - 1]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    frameNames.forEach((name) => {
      const img = new Image();
      img.src = `/sequences/${name}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameNames.length) {
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    });
    setImages(imgs);
  }, []);

  // Render on canvas
  const render = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !isLoaded || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[Math.round(index)];
    if (!img) return;

    // Canvas sizing (handle resize)
    // We set internal canvas resolution matches window size, or fixed high res?
    // Let's match window size for sharpness, but keep aspect ratio logic.
    const width = window.innerWidth;
    const height = window.innerHeight;

    // If canvas size mismatches window, resize it
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Update canvas on scroll
  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(latest);
  });

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded) {
       render(currentIndex.get());
    }
  }, [isLoaded, images]);
  
  // Handle resize rerender
  useEffect(() => {
    const handleResize = () => render(currentIndex.get());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded]);


  return (
    <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover"
        />
        <Overlay scrollYProgress={scrollYProgress} />
        {!isLoaded && (
             <div className="absolute inset-0 flex items-center justify-center text-white bg-[#121212] z-50">
                 <p className="animate-pulse text-sm uppercase tracking-widest text-neutral-500">Loading Sequence...</p>
             </div>
        )}
      </div>
    </div>
  );
}
