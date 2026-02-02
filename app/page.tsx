import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import OurStory from '@/components/OurStory'
import Gallery from '@/components/Gallery'
import WeddingParty from '@/components/WeddingParty'
import GuestGallery from '@/components/GuestGallery'
import GiftSection from '@/components/GiftSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <Gallery />
      <WeddingParty />
      <GuestGallery />
      <GiftSection />
      <Footer />
    </main>
  )
}
