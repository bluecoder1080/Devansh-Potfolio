'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Siddarth Singh",
    text: "Devansh has a way of seeing the world that transforms clarity into code. His presence is as grounding as his designs.",
    role: "Collaborator"
  },
  {
    name: "Aditya Singh",
    text: "A thinker who never rushes. He builds not just for the screen, but for the human spirit on the other side of it.",
    role: "Friend"
  },
  {
    name: "Ansh Panwar",
    text: "There is a rare quietude in his work. He bridges complex logic with an organic flow that feels effortless.",
    role: "Developer"
  },
  {
    name: "Ayush Chaudhary",
    text: "He listens more than he speaks, and that wisdom echoes loudly in every project he touches.",
    role: "Creative"
  },
  {
    name: "Prakhar Pandey",
    text: "Philosopher first, developer second. He brings a depth of soul to technology that is essentially missing today.",
    role: "Writer"
  },
  {
    name: "Amarjeet Yadav",
    text: "An aura of peace surrounds him. Working with Devansh is a reminder that great work comes from a calm mind.",
    role: "Designer"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#121212] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-center"
        >
          <span className="text-stone-400 font-mono tracking-wider uppercase text-sm">Reflections</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-100 mt-4">
            Echoes from the <span className="text-stone-500 italic">community.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-stone-900/20 rounded-2xl border border-stone-800/40 hover:bg-stone-800/40 transition-all duration-500"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-stone-600 group-hover:text-stone-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.054 15.331 15.189 16.494 14.733C17.208 14.453 17.6 13.916 17.6 13.292V10.222C17.6 9.652 17.139 9.177 16.591 9.177H15.004C14.004 9.177 13.004 8.761 12.306 8.047C11.608 7.333 11.208 6.368 11.208 5.305V3H19.596L19.596 5.305V8.875C19.596 9.123 19.663 11.332 19.663 12.756C19.663 15.826 17.675 19.467 14.28 20.892L14.017 21ZM5.006 21L5.006 18C5.006 16.054 6.319 15.189 7.482 14.733C8.196 14.453 8.588 13.916 8.588 13.292V10.222C8.588 9.652 8.127 9.177 7.58 9.177H5.992C4.992 9.177 3.992 8.761 3.295 8.047C2.597 7.333 2.197 6.368 2.197 5.305V3H10.585L10.585 5.305V8.875C10.585 9.123 10.652 11.332 10.652 12.756C10.652 15.826 8.664 19.467 5.27 20.892L5.006 21Z" />
                </svg>
              </div>
              <p className="text-stone-300 font-light leading-relaxed mb-6 min-h-[80px]">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 bg-stone-700 rounded-full" />
                <div>
                  <h4 className="text-white font-serif tracking-wide">{t.name}</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
