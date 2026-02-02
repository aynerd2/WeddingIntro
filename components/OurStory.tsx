
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
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-purple-accent/50" />
            <Heart className="w-5 h-5 fill-purple-accent text-purple-accent animate-pulse-slow" />
            <div className="w-20 h-px bg-purple-accent/50" />
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
          <div className="bg-pearl p-8 md:p-12 rounded-xl border-t-4 border-black shadow-lg">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-32 h-32 bg-deep-black rounded-2xl flex-shrink-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901009/v30i05s6ehah1ssqgyga.jpg"
                  alt="Jumoke"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-4xl mb-2 text-deep-black">Jumoke</h3>
                <p className="font-elegant italic text-lg mb-4 text-purple-accent">The Bride</p>
                <p className="font-sans text-base leading-relaxed text-deep-black">
                  I met Bankole in 2021 at Easy's Office (My Boss at the time) A handsome, lively, and sweet soul….. from the moment he made his intentions known, my heart felt a deep, unexplainable peace.
                  I knew he was my perfect human. His kindness, humor, and unwavering support continue to show me that true love truly exists.
                  Life with him is an adventure filled with laughter, growth, and endless dreams. He is my best friend, my confidant, and the love of my life. With him, I have found safety, joy, and a love that feels like home.
                  Valentine's Day has always been special, but this year, it becomes the day we promise forever to each other 🥹❤️
                  Dear Lord, we place our home in Your hands. 🙏🏾
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
          <div className="bg-pearl p-8 md:p-12 rounded-xl border-t-4 border-black shadow-lg">
            <div className="flex items-start gap-6 flex-row-reverse">
              <div className="hidden md:block w-32 h-32 bg-soft-white rounded-2xl flex-shrink-0 overflow-hidden ring-2 ring-purple-accent/30">
                <img
                  src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901052/eb0wi9mhny7foyzzre55.jpg"
                  alt="Bankole"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-4xl mb-2 text-deep-black">Bankole</h3>
                <p className="font-elegant italic text-lg mb-4 text-purple-accent">The Groom</p>
                <p className="font-sans text-base leading-relaxed text-deep-black">
                  I met my wife in the most unexpected place my mentor’s office. I had gone there like I always did, with respect, focus, and my usual serious face. I wasn’t searching for love. I wasn’t even thinking about marriage that day. Then she walked in, and somehow the whole atmosphere changed. What started as a simple introduction turned into conversations that flowed effortlessly, filled with laughter, curiosity, and an unexplainable sense of familiarity.

                  My wife will always say I ‘Me ? I Cannot marry you ! I laughed
                  At the time, it sounded like one of those jokes you laugh off and move past. But deep down, something told me that this connection was different.

                  Days turned into weeks, and weeks into something deeper. Conversations became intentional, prayers became shared, and friendship slowly transformed into love. What people joked about, God was quietly working on. What seemed impossible or funny to others became clear and purposeful to us.

                  Today, when I look at my wife, I smile every time I remember that joke. Because here we are growing, learning, building, and loving each other through every season. The same mentor’s office that witnessed our first meeting now stands as a reminder that destiny doesn’t always announce itself loudly. Sometimes it walks in quietly, sits beside you, and changes your life forever.

                  Life has a beautiful way of proving that God’s plans will always override human jokes, opinions, and assumptions. She said  she couldn’t marry me… but love, grace, and God had the final say and here we are now.
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
              <div className="w-24 h-24 bg-gradient-to-br from-royal-purple to-purple-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-accent/30">
                <span className="font-display text-3xl text-soft-white">1</span>
              </div>
              <h4 className="font-elegant text-2xl mb-3 text-deep-black">First Met</h4>
              <p className="font-sans text-smoke">
                We met in his mentor's office, our eyes locked and in that instant, a quiet spark ignited a love we both felt instantly 
              </p>
            </div>
            
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-royal-purple to-purple-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-accent/30">
                <span className="font-display text-3xl text-soft-white">2</span>
              </div>
              <h4 className="font-elegant text-2xl mb-3 text-deep-black">Fell in Love</h4>
              <p className="font-sans text-smoke">
                We fell in love through a series of heartfelt conversations, shared moments filled with laughter and purpose, meaningful activities together, and, above all, the gentle and undeniable intervention of God guiding our hearts.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-royal-purple to-purple-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-accent/30">
                <Heart className="w-10 h-10 fill-soft-white text-soft-white animate-pulse-slow" />
              </div>
              <h4 className="font-elegant text-2xl mb-3 text-deep-black">The Proposal</h4>
              <p className="font-sans text-smoke">
               Our proposal was so beautiful, the night was magical, filled with love and that was the easiest Yes we've ever said in our lives
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



// 'use client'

// import { motion } from 'framer-motion'
// import { Heart } from 'lucide-react'

// export default function OurStory() {
//   return (
//     <section id="our-story" className="py-24 px-4 bg-soft-white">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="font-display text-5xl md:text-7xl mb-6 text-deep-black">
//             Our Love Story
//           </h2>
//           <div className="flex items-center justify-center gap-4 opacity-40">
//             <div className="w-20 h-px bg-deep-black" />
//             <Heart className="w-5 h-5 fill-deep-black text-deep-black" />
//             <div className="w-20 h-px bg-deep-black" />
//           </div>
//         </motion.div>

//         {/* Jumoke's Statement */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <div className="bg-pearl p-8 md:p-12 rounded-sm">
//             <div className="flex items-start gap-6">
//               <div className="hidden md:block w-32 h-32 bg-deep-black rounded-sm flex-shrink-0 overflow-hidden">
//                 <img
//                   src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901009/v30i05s6ehah1ssqgyga.jpg"
//                   alt="Jumoke"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-display text-4xl mb-2 text-deep-black">Jumoke</h3>
//                 <p className="font-elegant italic text-lg mb-4 text-smoke">The Bride</p>
//                 <p className="font-sans text-base leading-relaxed text-deep-black">
//                   I met Bankole in 2021 at Easy’s Office (My Boss at the time) A handsome, lively, and sweet soul….. from the moment he made his intentions known, my heart felt a deep, unexplainable peace.
//                   I knew he was my perfect human. His kindness, humor, and unwavering support continue to show me that true love truly exists.
//                   Life with him is an adventure filled with laughter, growth, and endless dreams. He is my best friend, my confidant, and the love of my life. With him, I have found safety, joy, and a love that feels like home.
//                   Valentine’s Day has always been special, but this year, it becomes the day we promise forever to each other 🥹❤️
//                   Dear Lord, we place our home in Your hands. 🙏🏾
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Bankole's Statement */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="bg-deep-black text-soft-white p-8 md:p-12 rounded-sm">
//             <div className="flex items-start gap-6 flex-row-reverse">
//               <div className="hidden md:block w-32 h-32 bg-soft-white rounded-sm flex-shrink-0 overflow-hidden">
//                 <img
//                   src="https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901052/eb0wi9mhny7foyzzre55.jpg"
//                   alt="Bankole"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="text-right">
//                 <h3 className="font-display text-4xl mb-2">Bankole</h3>
//                 <p className="font-elegant italic text-lg mb-4 opacity-70">The Groom</p>
//                 <p className="font-sans text-base leading-relaxed">
//                   Jumoke walked into my life and changed everything. Her smile brightens my darkest days, 
//                   her strength inspires me to be better, and her love has taught me what it means to truly 
//                   be seen and accepted. She is my anchor, my joy, and my greatest blessing. As we prepare 
//                   to say "I do" on the most romantic day of the year, I am filled with gratitude for every 
//                   moment that led us here. I promise to cherish her, honor her, and love her with everything 
//                   I have, today and always.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Timeline */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-32 text-center"
//         >
//           <h3 className="font-display text-4xl md:text-5xl mb-16 text-deep-black">
//             Our Journey Together
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="relative">
//               <div className="w-24 h-24 bg-deep-black rounded-full mx-auto mb-6 flex items-center justify-center">
//                 <span className="font-display text-3xl text-soft-white">1</span>
//               </div>
//               <h4 className="font-elegant text-2xl mb-3 text-deep-black">First Met</h4>
//               <p className="font-sans text-smoke">
//                 We met in his mentor’s office, our eyes locked and in that instant, a quiet spark ignited a love we both felt instantly 
//               </p>
//             </div>
            
//             <div className="relative">
//               <div className="w-24 h-24 bg-deep-black rounded-full mx-auto mb-6 flex items-center justify-center">
//                 <span className="font-display text-3xl text-soft-white">2</span>
//               </div>
//               <h4 className="font-elegant text-2xl mb-3 text-deep-black">Fell in Love</h4>
//               <p className="font-sans text-smoke">
//                 We fell in love through a series of heartfelt conversations, shared moments filled with laughter and purpose, meaningful activities together, and, above all, the gentle and undeniable intervention of God guiding our hearts.
//               </p>
//             </div>
            
//             <div className="relative">
//               <div className="w-24 h-24 bg-deep-black rounded-full mx-auto mb-6 flex items-center justify-center">
//                 <Heart className="w-10 h-10 fill-soft-white text-soft-white" />
//               </div>
//               <h4 className="font-elegant text-2xl mb-3 text-deep-black">The Proposal</h4>
//               <p className="font-sans text-smoke">
//                Our proposal was so beautiful, the night was magical, filled with love and that was the easiest Yes we’ve ever said in our lives
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// node node_modules/next/dist/bin/next dev