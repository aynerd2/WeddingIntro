'use client'

import { motion } from 'framer-motion'
import { Heart, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById('our-story')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-deep-black text-soft-white overflow-hidden">
      {/* Animated purple background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="romantic-blur bg-gradient-to-br from-soft-purple to-purple-accent"
          style={{ width: '400px', height: '400px', top: '10%', left: '10%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="romantic-blur bg-gradient-to-br from-purple-accent to-royal-purple"
          style={{ width: '500px', height: '500px', bottom: '10%', right: '10%' }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating purple hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-heart"
          style={{
            left: `${15 + i * 15}%`,
            animationDelay: `${i * 2.5}s`,
            fontSize: `${20 + Math.random() * 20}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 2.5,
          }}
        >
          <Heart className="fill-purple-accent/40 text-purple-accent/40" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-70">
            We're Getting Married
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 leading-tight"
        >
          Jumoke
          <span className="block text-5xl md:text-6xl lg:text-7xl text-purple-accent my-4 font-elegant italic drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            &
          </span>
          Bankole
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <p className="font-elegant text-2xl md:text-3xl mb-2 italic">
            Valentine's Day
          </p>
          <p className="font-sans text-lg md:text-xl tracking-wider opacity-80">
            February 14, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <Heart className="inline-block fill-purple-accent/60 text-purple-accent/60 w-8 h-8 animate-pulse-slow drop-shadow-[0_0_20px_rgba(147,51,234,0.6)]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ChevronDown className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity text-purple-accent" />
      </motion.button>
    </section>
  )
}



// 'use client'

// import { motion } from 'framer-motion'
// import { Heart, ChevronDown } from 'lucide-react'

// export default function Hero() {
//   const scrollToContent = () => {
//     const element = document.getElementById('our-story')
//     element?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-deep-black text-soft-white overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="romantic-blur bg-white"
//           style={{ width: '400px', height: '400px', top: '10%', left: '10%' }}
//           animate={{
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="romantic-blur bg-white"
//           style={{ width: '500px', height: '500px', bottom: '10%', right: '10%' }}
//           animate={{
//             x: [0, -40, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
//         />
//       </div>

//       {/* Floating hearts */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="floating-heart"
//           style={{
//             left: `${15 + i * 15}%`,
//             animationDelay: `${i * 2.5}s`,
//             fontSize: `${20 + Math.random() * 20}px`,
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0, 1, 1, 0] }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             delay: i * 2.5,
//           }}
//         >
//           <Heart className="fill-white/20 text-white/20" />
//         </motion.div>
//       ))}

//       {/* Main content */}
//       <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="mb-8"
//         >
//           <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-70">
//             We're Getting Married
//           </p>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, delay: 0.5 }}
//           className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 leading-tight"
//         >
//           Jumoke
//           <span className="block text-5xl md:text-6xl lg:text-7xl opacity-40 my-4 font-elegant italic">
//             &
//           </span>
//           Bankole
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="mt-12"
//         >
//           <p className="font-elegant text-2xl md:text-3xl mb-2 italic">
//             Valentine's Day
//           </p>
//           <p className="font-sans text-lg md:text-xl tracking-wider opacity-80">
//             February 14, 2026
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.5 }}
//           className="mt-16"
//         >
//           <Heart className="inline-block fill-white/30 text-white/30 w-8 h-8 animate-pulse-slow" />
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.button
//         onClick={scrollToContent}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <ChevronDown className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
//       </motion.button>
//     </section>
//   )
// }
