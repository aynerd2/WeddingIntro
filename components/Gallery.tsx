'use client'
// https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901007/ljf8r1yu8okb0htc0guq.jpg
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder images - replace with actual photo URLs
//   const images = Array.from({ length: 30 }, (_, i) => ({
//     id: i + 1,
//     url: `https://picsum.photos/800/1000?random=${i + 1}`,
//     alt: `Pre-wedding photo ${i + 1}`,
//   },
// ))


const images = [
  { 
    id: 1, 
    url: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901010/dkbn0tuog4srfptvvnyw.jpg',
    alt: 'Our engagement day' 
  },
  { 
    id: 2, 
    url: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901011/m4xua8f0hjwnzjhyth52.jpg',
    alt: 'Our engagement day' 
  },

  { 
    id: 3, 
    url: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901007/lktepgaxe5egbrad8v6k.jpg',
    alt: 'Our engagement day' 
  },

  { 
    id: 4, 
    url: 'https://res.cloudinary.com/dq8jo2bf7/image/upload/v1768901009/akxythom9qmzzflr9ydo.jpg',
    alt: 'Our engagement day' 
  },
]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-24 px-4 bg-deep-black text-soft-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            Our Memories
          </h2>
          <p className="font-sans text-lg opacity-70 max-w-2xl mx-auto">
            A collection of our most cherished moments together, captured in time
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
              className="image-wrapper cursor-pointer aspect-[3/4] bg-charcoal rounded-sm overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-sans text-sm bg-white/10 px-4 py-2 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
