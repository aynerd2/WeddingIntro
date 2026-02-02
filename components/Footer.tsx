

'use client'

import { motion } from 'framer-motion'
import { Heart, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-soft-white text-deep-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Names */}
          

        

          {/* Date */}
          <p className="font-elegant text-xl italic mb-8 text-smoke">
            Valentine's Day • February 14, 2026
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-deep-black opacity-30" />
            <Heart className="w-5 h-5 fill-purple-accent/50 text-purple-accent/50 animate-pulse-slow" />
            <div className="w-16 h-px bg-deep-black opacity-30" />
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/olaa_jumoke_mi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-deep-black text-soft-white rounded-full hover:bg-charcoal transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.instagram.com/mr_fbj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-deep-black text-soft-white rounded-full hover:bg-charcoal transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:hello@jumokeandbankole.com"
              className="p-3 bg-deep-black text-soft-white rounded-full hover:bg-charcoal transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-sm text-smoke">
            © 2026 Jumoke & Bankole. Made with love.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


