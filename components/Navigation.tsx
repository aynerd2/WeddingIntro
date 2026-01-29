'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Our Story', href: '#our-story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Wedding Party', href: '#wedding-party' },
    { name: 'Guest Gallery', href: '#guest-gallery' },
    { name: 'Gift Us', href: '#gift' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-soft-white/98 backdrop-blur-md shadow-lg'
            : 'bg-deep-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="cursor-pointer flex items-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('#')}
            >
              <img 
                src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1769703560/jblog_hvpezh.png" 
                alt="J & B Wedding" 
                className={`h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 ${
                  scrolled ? 'brightness-0' : 'brightness-100'
                }`}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-sans text-sm tracking-wider hover:text-purple-accent transition-all relative group ${
                    scrolled ? 'text-deep-black' : 'text-soft-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-accent transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 transition-colors ${
                scrolled ? 'text-deep-black' : 'text-soft-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-deep-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-deep-black text-soft-white md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="font-sans text-lg tracking-wider py-4 border-b border-white/10 text-left hover:text-purple-accent transition-colors"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}