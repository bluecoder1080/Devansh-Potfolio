'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#121212] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-stone-400 font-mono tracking-wider uppercase text-sm">The Journey Within</span>
          <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-stone-100">
            Seeking truth in silence. <br />
            <span className="text-stone-500 italic">Embracing the organic flow of life.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-lg text-neutral-400 leading-relaxed font-light">
            <p>
              In a world of constant noise, I find my sanctuary in <span className="text-stone-200 font-normal">meditation and deep reading</span>. My path is one of slowing down, understanding the human condition through <span className="text-stone-200 font-normal">Sociology</span>, and exploring the intricate tapestries of philosophy.
            </p>
            <p>
              I believe that true creativity stems from a peaceful mind. Whether it's dissecting complex social theories or writing about the nuances of existence, my work is an extension of my pursuit for <span className="text-stone-200 font-normal">inner peace and organic living</span>.
            </p>
          </div>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Meditation", icon: "🧘", desc: "Finding stillness in chaos." },
            { title: "Philosophy", icon: "🌿", desc: "Questioning the essence of being." },
            { title: "Sociology", icon: "📖", desc: "Understanding our collective soul." }
          ].map((item, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 bg-stone-900/30 rounded-2xl border border-stone-800/50 hover:bg-stone-800/50 transition-all duration-500 group"
             >
               <div className="text-4xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
               <h3 className="text-xl font-serif text-stone-200 mb-3">{item.title}</h3>
               <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
             </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-20 border-t border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's start a conversation.</h2>
          <a 
            href="mailto:rajsingh163310@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-transform hover:scale-105"
          >
            <span>rajsingh163310@gmail.com</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
