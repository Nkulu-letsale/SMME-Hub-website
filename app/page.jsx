import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import BusinessShowcase from "@/components/BusinessShowcase"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <BusinessShowcase />
      </main>
      <Footer />
    </div>
  )
}
