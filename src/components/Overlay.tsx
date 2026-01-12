'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Opacity transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center w-full h-full max-w-7xl mx-auto px-6">
      {/* Section 1: Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
          Devansh Singh Rajput
        </h1>
        <p className="text-xl md:text-2xl text-stone-300 font-light tracking-wide">
          Creative Reader. Thinker.
        </p>
      </motion.div>

      {/* Section 2: Left Aligned */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start pl-10 md:pl-20"
      >
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-4 leading-tight">
            Cultivating peace <br/>
            <span className="text-stone-500 italic">through mindfulness.</span>
          </h2>
        </div>
      </motion.div>

      {/* Section 3: Right Aligned */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end pr-10 md:pr-20"
      >
        <div className="max-w-2xl text-right">
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-4 leading-tight">
            Philosophy rooted <br/>
            <span className="text-stone-500 italic">in organic living.</span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
