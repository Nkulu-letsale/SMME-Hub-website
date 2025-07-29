"use client"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import BusinessShowcase from "@/components/BusinessShowcase"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <BusinessShowcase />
      </main>
      <Footer />
    </>
  )
}
