

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, ChevronDown, Sparkles, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContent = () => {
    const element = document.getElementById('our-story')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-deep-black text-soft-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-royal-purple/20 to-deep-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-accent/30 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-soft-purple/30 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-royal-purple/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [100, -100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-3 h-3 text-purple-accent/40" />
          </motion.div>
        ))}

        {/* Elegant Corner Decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-purple-accent/30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-purple-accent/30"
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-8 sm:space-y-12">
          
          {/* Top Decoration */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border-2 border-purple-accent/30 flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-purple-accent" />
            </motion.div>
          </motion.div>

          {/* Toddler Photos Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
          >
            <div className="flex items-center justify-center gap-6 sm:gap-12 mb-8">
              {/* Jumoke Toddler */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-accent to-royal-purple rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
               <div className="relative w-28 h-36 sm:w-36 sm:h-48 md:w-48 md:h-60 rounded-[100px] overflow-hidden border-4 border-purple-accent shadow-2xl shadow-purple-accent/50">
  <img 
    src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1770034045/y1_k2dfln.jpg" 
    alt="Baby Jumoke"
    className="w-full h-full object-cover object-top" // object-top ensures the face is centered
  />
</div>
                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-purple-accent/30 rounded-full"
                />
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-purple-accent/20 backdrop-blur-sm px-4 py-1 rounded-full border border-purple-accent/30"
                >
                  <span className="text-xs sm:text-sm font-elegant italic">Bride</span>
                </motion.div>
              </motion.div>

              {/* Center Ornament */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 1, type: "spring" }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-accent to-royal-purple rounded-full blur-xl opacity-50" />
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-accent to-royal-purple rounded-full flex items-center justify-center shadow-2xl">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-soft-white text-soft-white" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Bankole Toddler */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-purple to-purple-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
               <div className="relative w-28 h-36 sm:w-36 sm:h-48 md:w-48 md:h-60 rounded-[100px] overflow-hidden border-4 border-purple-accent shadow-2xl shadow-purple-accent/50">
  <img 
    src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1770034037/y2_ptk5n3.jpg" 
    alt="Baby Bankole"
    className="w-full h-full object-cover object-top" // object-top keeps the head in view
  />
</div>
                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-purple-accent/30 rounded-full"
                />
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-purple-accent/20 backdrop-blur-sm px-4 py-1 rounded-full border border-purple-accent/30"
                >
                  <span className="text-xs sm:text-sm font-elegant italic">Groom</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Catchy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="relative mt-16 sm:mt-20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-accent/10 to-transparent blur-xl" />
              <p className="relative font-elegant text-lg sm:text-xl md:text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-purple-accent via-soft-purple to-purple-accent leading-relaxed px-4">
                "From tiny footsteps to forever together"
              </p>
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, delay: 2.2 }}
                className="h-px bg-gradient-to-r from-transparent via-purple-accent to-transparent mt-4 mx-auto max-w-md"
              />
            </motion.div>
          </motion.div>

          {/* Names Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="space-y-6"
          >
            {/* Pre-header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-purple-accent" />
              <span className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-purple-accent/80">
                Celebrating Love
              </span>
              <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-purple-accent" />
            </motion.div>

            {/* Main Names */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#9333EA" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Jumoke
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 2, type: "spring" }}
                className="relative inline-block"
              >
                <motion.span
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="font-elegant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-accent via-soft-purple to-purple-accent italic"
                >
                  &
                </motion.span>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 blur-2xl bg-purple-accent/30 -z-10"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#9333EA" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Bankole
                </motion.span>
              </motion.h1>
            </div>
          </motion.div>

          {/* Date & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="space-y-6"
          >
            {/* Date Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-br from-purple-accent/20 to-royal-purple/20 backdrop-blur-md border border-purple-accent/30 rounded-2xl px-8 py-6 shadow-2xl shadow-purple-accent/20"
            >
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-purple-accent" />
                <div className="text-left">
                  <p className="font-elegant text-2xl sm:text-3xl md:text-4xl italic text-purple-accent">
                    Valentine's Day
                  </p>
                  <p className="font-sans text-base sm:text-lg tracking-wider opacity-90">
                    February 14, 2026
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
              className="font-sans text-sm sm:text-base text-purple-accent/70 tracking-wide"
            >
              Where two souls become one forever ✨
            </motion.p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContent}
              className="px-8 py-4 bg-gradient-to-r from-purple-accent to-royal-purple rounded-full font-sans font-medium tracking-wider shadow-lg shadow-purple-accent/30 hover:shadow-purple-accent/50 transition-all"
            >
              Our Love Story
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs sm:text-sm font-sans tracking-wider text-purple-accent/60 group-hover:text-purple-accent transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 text-purple-accent/60 group-hover:text-purple-accent transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  )
}

