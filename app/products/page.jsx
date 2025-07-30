"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Search, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/contexts/CartContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

const products = [
  // Heritage Textiles
  {
    id: 1,
    name: "Traditional Ankara Dress",
    price: 199.99,
    image: "/images/products/dress-ankara.webp",
    business: "Heritage Textiles",
    category: "Clothing",
    rating: 4.8,
    reviews: 45,
    description: "Beautiful handcrafted Ankara dress with traditional patterns",
  },
  {
    id: 2,
    name: "Kente Scarf",
    price: 89.99,
    image: "/images/products/kente-scarf.webp",
    business: "Heritage Textiles",
    category: "Accessories",
    rating: 4.7,
    reviews: 32,
    description: "Authentic Kente scarf woven with traditional techniques",
  },
  {
    id: 3,
    name: "Cultural Fabric Bundle",
    price: 149.99,
    image: "/images/products/cultural-fabric.webp",
    business: "Heritage Textiles",
    category: "Textiles",
    rating: 4.9,
    reviews: 28,
    description: "Collection of authentic African fabrics for crafting",
  },

  // Maasai Leather Co.
  {
    id: 4,
    name: "Handcrafted Leather Wallet",
    price: 79.99,
    image: "/images/products/wallet.webp",
    business: "Maasai Leather Co.",
    category: "Accessories",
    rating: 4.6,
    reviews: 67,
    description: "Premium leather wallet with traditional Maasai craftsmanship",
  },
  {
    id: 5,
    name: "Maasai Leather Sandals",
    price: 129.99,
    image: "/images/products/maasai-leather.webp",
    business: "Maasai Leather Co.",
    category: "Footwear",
    rating: 4.8,
    reviews: 54,
    description: "Comfortable handmade leather sandals",
  },
  {
    id: 6,
    name: "Beaded Leather Belt",
    price: 99.99,
    image: "/images/products/beaded-belts.webp",
    business: "Maasai Leather Co.",
    category: "Accessories",
    rating: 4.7,
    reviews: 41,
    description: "Traditional beaded leather belt with authentic patterns",
  },

  // Savanna Spices
  {
    id: 7,
    name: "Ethiopian Coffee Beans",
    price: 149.99,
    image: "/images/products/ethiopian-coffee.webp",
    business: "Savanna Spices",
    category: "Food & Beverages",
    rating: 4.9,
    reviews: 89,
    description: "Premium single-origin Ethiopian coffee beans",
  },
  {
    id: 8,
    name: "African Herbal Tea",
    price: 59.99,
    image: "/images/products/herbal-tea.jpg",
    business: "Savanna Spices",
    category: "Food & Beverages",
    rating: 4.5,
    reviews: 76,
    description: "Blend of traditional African herbs and spices",
  },
  {
    id: 9,
    name: "Moringa Powder",
    price: 79.99,
    image: "/images/products/moringa.webp",
    business: "Savanna Spices",
    category: "Health",
    rating: 4.8,
    reviews: 63,
    description: "Pure moringa powder packed with nutrients",
  },

  // Kente Creations
  {
    id: 10,
    name: "Kente Graduation Stole",
    price: 119.99,
    image: "/images/products/kente-stole.webp",
    business: "Kente Creations",
    category: "Accessories",
    rating: 4.9,
    reviews: 34,
    description: "Traditional Kente stole for graduation ceremonies",
  },
  {
    id: 11,
    name: "African Head Wrap",
    price: 49.99,
    image: "/images/products/head-wrap.jpg",
    business: "Kente Creations",
    category: "Accessories",
    rating: 4.6,
    reviews: 52,
    description: "Colorful African head wrap with traditional patterns",
  },
  {
    id: 12,
    name: "Handwoven Kente Cloth",
    price: 299.99,
    image: "/images/featured-kente.jpg",
    business: "Kente Creations",
    category: "Textiles",
    rating: 4.8,
    reviews: 124,
    description: "Authentic handwoven Kente cloth from Ghana",
  },

  // Baobab Beauty
  {
    id: 13,
    name: "African Black Soap",
    price: 39.99,
    image: "/images/products/black-soap.jpg",
    business: "Baobab Beauty",
    category: "Beauty",
    rating: 4.7,
    reviews: 98,
    description: "Natural African black soap for all skin types",
  },
  {
    id: 14,
    name: "Shea Butter Cream",
    price: 69.99,
    image: "/images/products/shea-butter.webp",
    business: "Baobab Beauty",
    category: "Beauty",
    rating: 4.8,
    reviews: 87,
    description: "Pure shea butter cream for moisturizing",
  },
  {
    id: 15,
    name: "Baobab Skincare Set",
    price: 159.99,
    image: "/images/products/baobab-skincare.webp",
    business: "Baobab Beauty",
    category: "Beauty",
    rating: 4.9,
    reviews: 45,
    description: "Complete skincare set with baobab oil",
  },

  // Ubuntu Crafts
  {
    id: 16,
    name: "Beaded Necklaces",
    price: 89.99,
    image: "/images/products/beaded-necklaces.jpg",
    business: "Ubuntu Crafts",
    category: "Jewelry",
    rating: 4.6,
    reviews: 73,
    description: "Handcrafted beaded necklaces with traditional designs",
  },
  {
    id: 17,
    name: "African Wooden Bowls",
    price: 119.99,
    image: "/images/products/african-bowls.jpg",
    business: "Ubuntu Crafts",
    category: "Home & Decor",
    rating: 4.8,
    reviews: 56,
    description: "Hand-carved wooden bowls from sustainable wood",
  },
  {
    id: 18,
    name: "Traditional Jewelry Set",
    price: 179.99,
    image: "/images/products/african-jewelry.jpg",
    business: "Ubuntu Crafts",
    category: "Jewelry",
    rating: 4.7,
    reviews: 42,
    description: "Complete set of traditional African jewelry",
  },

  // Rooibos Republic
  {
    id: 19,
    name: "Premium Rooibos Tea",
    price: 79.99,
    image: "/images/products/rooibos-tea.jpg",
    business: "Rooibos Republic",
    category: "Food & Beverages",
    rating: 4.8,
    reviews: 91,
    description: "Premium South African rooibos tea",
  },
  {
    id: 20,
    name: "Red Bush Tea Blend",
    price: 69.99,
    image: "/images/products/red-bush-tea.png",
    business: "Rooibos Republic",
    category: "Food & Beverages",
    rating: 4.6,
    reviews: 68,
    description: "Traditional red bush tea with natural flavors",
  },
  {
    id: 21,
    name: "Shweshwe Fabric",
    price: 119.99,
    image: "/images/products/shweshwe-fabric.webp",
    business: "Rooibos Republic",
    category: "Textiles",
    rating: 4.7,
    reviews: 35,
    description: "Traditional South African Shweshwe fabric",
  },
]

const businesses = [
  "All Businesses",
  "Heritage Textiles",
  "Maasai Leather Co.",
  "Savanna Spices",
  "Kente Creations",
  "Baobab Beauty",
  "Ubuntu Crafts",
  "Rooibos Republic",
]

const categories = [
  "All Categories",
  "Clothing",
  "Accessories",
  "Textiles",
  "Footwear",
  "Food & Beverages",
  "Health",
  "Beauty",
  "Jewelry",
  "Home & Decor",
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBusiness, setSelectedBusiness] = useState("All Businesses")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("name")
  const [favorites, setFavorites] = useState(new Set())
  const { addItem } = useCart()

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      business: product.business,
    })
  }

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.business.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBusiness = selectedBusiness === "All Businesses" || product.business === selectedBusiness
      const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory
      return matchesSearch && matchesBusiness && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.business]) {
      acc[product.business] = []
    }
    acc[product.business].push(product)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover authentic African products from local businesses across the continent
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedBusiness} onValueChange={setSelectedBusiness}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Business" />
                </SelectTrigger>
                <SelectContent>
                  {businesses.map((business) => (
                    <SelectItem key={business} value={business}>
                      {business}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Products grouped by business */}
          <div className="space-y-12">
            {Object.entries(groupedProducts).map(([businessName, businessProducts], businessIndex) => (
              <motion.div
                key={businessName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: businessIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-orange-500 pb-2">
                  {businessName}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {businessProducts.map((product, productIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: businessIndex * 0.1 + productIndex * 0.05 }}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg">
                        <div className="relative overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleFavorite(product.id)}
                              className={`h-8 w-8 p-0 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white ${
                                favorites.has(product.id) ? "text-red-500" : "text-gray-600"
                              }`}
                            >
                              <Heart className={`h-4 w-4 ${favorites.has(product.id) ? "fill-current" : ""}`} />
                            </Button>
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                            {product.description}
                          </p>
                          <p className="text-sm text-orange-500 font-medium mb-2">{product.business}</p>

                          <div className="flex items-center mb-3">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600 dark:text-gray-300 ml-1">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">R{product.price}</span>
                            <Button
                              onClick={() => handleAddToCart(product)}
                              size="sm"
                              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 text-sm"
                            >
                              <ShoppingCart className="h-3 w-3 mr-1" />
                              Add
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-300">No products found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
