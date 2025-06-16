import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Reviews from '@/components/Reviews'
import Newsletter from '@/components/Newsletter'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Reviews />
      <Newsletter />
      <CallToAction />
      <Footer />
    </main>
  )
}
