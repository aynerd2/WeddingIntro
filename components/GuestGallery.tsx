'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Upload, Camera, Heart, X, Loader2 } from 'lucide-react'

interface GuestPhoto {
  publicId: string
  url: string
  thumbnail: string
  createdAt: string
}

export default function GuestGallery() {
  const [photos, setPhotos] = useState<GuestPhoto[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [uploadProgress, setUploadProgress] = useState<string>('')

  // Fetch existing photos on component mount
  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/get-guest-photos')
      const data = await response.json()
      
      if (data.success) {
        setPhotos(data.photos)
      }
    } catch (error) {
      console.error('Error fetching photos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch('/api/upload-guest-photo', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    return response.json()
  }

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setIsUploading(true)
    const uploadedPhotos: GuestPhoto[] = []

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        
        if (!file.type.startsWith('image/')) {
          console.warn(`Skipping non-image file: ${file.name}`)
          continue
        }

        setUploadProgress(`Uploading ${i + 1} of ${files.length}...`)
        
        const result = await uploadToCloudinary(file)
        
        if (result.success) {
          uploadedPhotos.push({
            publicId: result.publicId,
            url: result.url,
            thumbnail: result.url,
            createdAt: new Date().toISOString(),
          })
        }
      }

      // Add new photos to the beginning of the list
      setPhotos(prev => [...uploadedPhotos, ...prev])
      setUploadProgress('Upload complete!')
      
      setTimeout(() => {
        setUploadProgress('')
      }, 2000)
    } catch (error) {
      console.error('Upload error:', error)
      setUploadProgress('Upload failed. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <section id="guest-gallery" className="py-24 px-4 bg-soft-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-deep-black">
            Guest Gallery
          </h2>
          <p className="font-sans text-lg text-smoke max-w-2xl mx-auto">
            Share your favorite moments from our special day. Upload your photos and see what others have captured!
          </p>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-sm p-12 text-center transition-all ${
              isDragging
                ? 'border-deep-black bg-pearl scale-105'
                : 'border-smoke/30 hover:border-deep-black hover:bg-pearl'
            } ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
          >
            {isUploading ? (
              <>
                <Loader2 className="w-16 h-16 mx-auto mb-6 text-deep-black animate-spin" />
                <h3 className="font-display text-3xl mb-4 text-deep-black">
                  Uploading...
                </h3>
                <p className="font-sans text-smoke">{uploadProgress}</p>
              </>
            ) : (
              <>
                <Camera className="w-16 h-16 mx-auto mb-6 text-deep-black opacity-40" />
                
                <h3 className="font-display text-3xl mb-4 text-deep-black">
                  Share Your Photos
                </h3>
                
                <p className="font-sans text-smoke mb-6 max-w-md mx-auto">
                  Drag and drop your images here, or click to browse your files. 
                  Images are automatically optimized and stored securely.
                </p>

                <label className="inline-flex items-center gap-2 px-8 py-4 bg-deep-black text-soft-white rounded-sm cursor-pointer hover:bg-charcoal transition-colors btn-primary">
                  <Upload size={20} />
                  <span className="font-sans font-medium">Choose Files</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    disabled={isUploading}
                  />
                </label>

                <p className="font-sans text-xs text-smoke mt-4 opacity-60">
                  Maximum file size: 10MB per image
                </p>
              </>
            )}
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16">
            <Loader2 className="w-12 h-12 mx-auto text-deep-black animate-spin mb-4" />
            <p className="font-sans text-smoke">Loading gallery...</p>
          </div>
        )}

        {/* Gallery Grid */}
        {!isLoading && photos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-deep-black opacity-20" />
                <p className="font-elegant text-2xl italic text-smoke">
                  {photos.length} {photos.length === 1 ? 'memory' : 'memories'} shared
                </p>
                <div className="w-12 h-px bg-deep-black opacity-20" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.publicId}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="image-wrapper cursor-pointer aspect-square bg-pearl rounded-sm overflow-hidden relative group"
                  onClick={() => setSelectedImage(photo.url)}
                >
                  <img
                    src={photo.thumbnail}
                    alt={`Guest photo ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-deep-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Heart className="w-8 h-8 text-soft-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && photos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <Camera className="w-16 h-16 mx-auto mb-4 text-smoke opacity-30" />
            <p className="font-elegant text-2xl italic text-smoke mb-2">
              Be the first to share a memory...
            </p>
            <p className="font-sans text-smoke opacity-60">
              Upload your photos to create our shared wedding gallery
            </p>
          </motion.div>
        )}

        {/* Lightbox for viewing uploaded images */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} className="text-soft-white" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Guest photo"
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
