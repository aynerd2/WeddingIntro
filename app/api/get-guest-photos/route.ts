import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  try {
    // Fetch all images from the guest photos folder
    const result = await cloudinary.search
      .expression('folder:jumoke-bankole-wedding/guest-photos')
      .sort_by('created_at', 'desc')
      .max_results(500)
      .execute()

    // Transform the results to include optimized URLs
    const photos = result.resources.map((photo: any) => ({
      publicId: photo.public_id,
      url: photo.secure_url,
      width: photo.width,
      height: photo.height,
      format: photo.format,
      createdAt: photo.created_at,
      // Generate optimized thumbnail
      thumbnail: cloudinary.url(photo.public_id, {
        width: 400,
        height: 400,
        crop: 'fill',
        gravity: 'auto',
        quality: 'auto:good',
        fetch_format: 'auto',
      }),
    }))

    return NextResponse.json({
      success: true,
      photos,
      total: result.total_count,
    })
  } catch (error) {
    console.error('Fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    )
  }
}
