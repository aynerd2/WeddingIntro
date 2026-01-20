'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 px-4 bg-soft-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-deep-black">
            Our Love Story
          </h2>
          <div className="flex items-center justify-center gap-4 opacity-40">
            <div className="w-20 h-px bg-deep-black" />
            <Heart className="w-5 h-5 fill-deep-black text-deep-black" />
            <div className="w-20 h-px bg-deep-black" />
          </div>
        </motion.div>

        {/* Jumoke's Statement */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-pearl p-8 md:p-12 rounded-sm">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-32 h-32 bg-deep-black rounded-sm flex-shrink-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901009/v30i05s6ehah1ssqgyga.jpg"
                  alt="Jumoke"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-4xl mb-2 text-deep-black">Jumoke</h3>
                <p className="font-elegant italic text-lg mb-4 text-smoke">The Bride</p>
                <p className="font-sans text-base leading-relaxed text-deep-black">
                  From the moment I met Bankole, I knew my life would never be the same. 
                  His kindness, humor, and unwavering support have shown me what true love means. 
                  Every day with him is an adventure, and I cannot wait to spend forever laughing, 
                  dreaming, and building our future together. He is my best friend, my confidant, 
                  and the love of my life. Valentine's Day has always been special, but this year, 
                  it becomes the day we promise forever to each other.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bankole's Statement */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-deep-black text-soft-white p-8 md:p-12 rounded-sm">
            <div className="flex items-start gap-6 flex-row-reverse">
              <div className="hidden md:block w-32 h-32 bg-soft-white rounded-sm flex-shrink-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901052/eb0wi9mhny7foyzzre55.jpg"
                  alt="Bankole"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right">
                <h3 className="font-display text-4xl mb-2">Bankole</h3>
                <p className="font-elegant italic text-lg mb-4 opacity-70">The Groom</p>
                <p className="font-sans text-base leading-relaxed">
                  Jumoke walked into my life and changed everything. Her smile brightens my darkest days, 
                  her strength inspires me to be better, and her love has taught me what it means to truly 
                  be seen and accepted. She is my anchor, my joy, and my greatest blessing. As we prepare 
                  to say "I do" on the most romantic day of the year, I am filled with gratitude for every 
                  moment that led us here. I promise to cherish her, honor her, and love her with everything 
                  I have, today and always.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <h3 className="font-display text-4xl md:text-5xl mb-16 text-deep-black">
            Our Journey Together
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="w-24 h-24 bg-deep-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-3xl text-soft-white">1</span>
              </div>
              <h4 className="font-elegant text-2xl mb-3 text-deep-black">First Met</h4>
              <p className="font-sans text-smoke">
                Our eyes met across a crowded room, and we both knew something magical was about to begin.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-24 h-24 bg-deep-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-3xl text-soft-white">2</span>
              </div>
              <h4 className="font-elegant text-2xl mb-3 text-deep-black">Fell in Love</h4>
              <p className="font-sans text-smoke">
                Through countless conversations and shared dreams, our friendship blossomed into an unbreakable bond.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-24 h-24 bg-deep-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 fill-soft-white text-soft-white" />
              </div>
              <h4 className="font-elegant text-2xl mb-3 text-deep-black">The Proposal</h4>
              <p className="font-sans text-smoke">
                A perfect moment under the stars when one question changed our lives forever: "Will you marry me?"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
