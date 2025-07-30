"use client"

import { motion } from "framer-motion"
import { MapPin, Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const businesses = [
  {
    id: 1,
    name: "Kente Creations",
    category: "Textiles & Fashion",
    location: "Accra, Ghana",
    rating: 4.8,
    image: "/images/kente-creations.jpg",
    description: "Authentic Kente cloth and traditional Ghanaian textiles handwoven by skilled artisans.",
    products: 25,
    verified: true,
  },
  {
    id: 2,
    name: "Baobab Beauty",
    category: "Beauty & Wellness",
    location: "Lagos, Nigeria",
    rating: 4.9,
    image: "/images/baobab-beauty.webp",
    description: "Natural skincare products made from African botanicals and traditional recipes.",
    products: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Savanna Spices",
    category: "Food & Beverages",
    location: "Addis Ababa, Ethiopia",
    rating: 4.7,
    image: "/images/savanna-spices.jpg",
    description: "Premium Ethiopian coffee and traditional spices sourced directly from local farmers.",
    products: 32,
    verified: true,
  },
  {
    id: 4,
    name: "Ubuntu Crafts",
    category: "Arts & Crafts",
    location: "Cape Town, South Africa",
    rating: 4.6,
    image: "/images/ubuntu-crafts.webp",
    description: "Handcrafted African art, sculptures, and traditional crafts supporting local communities.",
    products: 45,
    verified: true,
  },
  {
    id: 5,
    name: "Rooibos Republic",
    category: "Food & Beverages",
    location: "Cederberg, South Africa",
    rating: 4.8,
    image: "/images/rooibos-republic.webp",
    description: "Premium rooibos tea and herbal blends from the heart of South Africa.",
    products: 15,
    verified: true,
  },
  {
    id: 6,
    name: "Heritage Textiles",
    category: "Textiles & Fashion",
    location: "Nairobi, Kenya",
    rating: 4.5,
    image: "/images/heritage-textiles.jpg",
    description: "Contemporary African fashion and traditional textiles with modern designs.",
    products: 28,
    verified: true,
  },
]

export default function BusinessShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Businesses</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the amazing entrepreneurs and businesses that make our marketplace special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    {business.verified && (
                      <Badge className="bg-green-500 hover:bg-green-600 text-white">Verified</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{business.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{business.name}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {business.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{business.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{business.description}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {business.products} products available
                    </div>
                  </div>
                  <Link href={`/businesses/${business.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950 bg-transparent"
                    >
                      View Business
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/businesses">
            <Button
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950 bg-transparent"
            >
              View All Businesses
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
