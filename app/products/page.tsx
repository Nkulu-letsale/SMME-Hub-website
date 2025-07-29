"use client"

import { motion } from "framer-motion"
import { Search, Filter, ShoppingCart, Star, Heart } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useCart } from "@/contexts/CartContext"
import Image from "next/image"

const products = [
  // Ubuntu Crafts Products
  {
    id: "1",
    name: "Handcrafted African Jewelry Set",
    price: 299.99,
    image: "/images/products/african-jewelry.jpg",
    business: "Ubuntu Crafts",
    location: "Cape Town, South Africa",
    category: "Jewelry",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: "9",
    name: "Beaded Necklace Collection",
    price: 249.99,
    image: "/images/products/beaded-necklaces.jpg",
    business: "Ubuntu Crafts",
    location: "Cape Town, South Africa",
    category: "Jewelry",
    rating: 4.8,
    reviews: 87,
    inStock: true,
  },
  {
    id: "16",
    name: "Traditional African Bowls Set",
    price: 189.99,
    image: "/images/products/african-bowls.jpg",
    business: "Ubuntu Crafts",
    location: "Cape Town, South Africa",
    category: "Jewelry",
    rating: 4.7,
    reviews: 65,
    inStock: true,
  },

  // Rooibos Republic Products
  {
    id: "2",
    name: "Organic Rooibos Tea Blend",
    price: 89.99,
    image: "/images/products/rooibos-tea.jpg",
    business: "Rooibos Republic",
    location: "Cederberg, South Africa",
    category: "Food & Beverages",
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: "11",
    name: "Herbal Tea Mix",
    price: 69.99,
    image: "/images/products/herbal-tea.jpg",
    business: "Rooibos Republic",
    location: "Cederberg, South Africa",
    category: "Food & Beverages",
    rating: 4.8,
    reviews: 123,
    inStock: true,
  },
  {
    id: "17",
    name: "Premium Red Bush Tea",
    price: 119.99,
    image: "/images/products/red-bush-tea.png",
    business: "Rooibos Republic",
    location: "Cederberg, South Africa",
    category: "Food & Beverages",
    rating: 4.9,
    reviews: 156,
    inStock: true,
  },

  // Heritage Textiles Products
  {
    id: "3",
    name: "Traditional Shweshwe Fabric",
    price: 159.99,
    image: "/images/products/shweshwe-fabric.webp",
    business: "Heritage Textiles",
    location: "Johannesburg, South Africa",
    category: "Textiles",
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: "14",
    name: "African Print Headwrap",
    price: 79.99,
    image: "/images/products/head-wrap.jpg",
    business: "Heritage Textiles",
    location: "Johannesburg, South Africa",
    category: "Textiles",
    rating: 4.6,
    reviews: 54,
    inStock: true,
  },
  {
    id: "18",
    name: "Cultural Print Fabric Bundle",
    price: 229.99,
    image: "/images/products/cultural-fabric.webp",
    business: "Heritage Textiles",
    location: "Johannesburg, South Africa",
    category: "Textiles",
    rating: 4.8,
    reviews: 78,
    inStock: true,
  },

  // Baobab Beauty Products
  {
    id: "4",
    name: "Baobab Seed Oil Skincare",
    price: 199.99,
    image: "/images/products/baobab-skincare.webp",
    business: "Baobab Beauty",
    location: "Lagos, Nigeria",
    category: "Beauty",
    rating: 4.9,
    reviews: 203,
    inStock: false,
  },
  {
    id: "8",
    name: "Shea Butter Body Cream",
    price: 89.99,
    image: "/images/products/shea-butter.webp",
    business: "Baobab Beauty",
    location: "Lagos, Nigeria",
    category: "Beauty",
    rating: 4.7,
    reviews: 98,
    inStock: true,
  },
  {
    id: "15",
    name: "Black Soap Bar",
    price: 49.99,
    image: "/images/products/black-soap.jpg",
    business: "Baobab Beauty",
    location: "Lagos, Nigeria",
    category: "Beauty",
    rating: 4.8,
    reviews: 167,
    inStock: true,
  },

  // Maasai Leather Works Products
  {
    id: "5",
    name: "Maasai Leather Handbag",
    price: 449.99,
    image: "/images/products/maasai-leather.webp",
    business: "Maasai Leather Works",
    location: "Arusha, Tanzania",
    category: "Leather Goods",
    rating: 4.6,
    reviews: 67,
    inStock: true,
  },
  {
    id: "10",
    name: "Leather Wallet",
    price: 189.99,
    image: "/images/products/wallet.webp",
    business: "Maasai Leather Works",
    location: "Arusha, Tanzania",
    category: "Leather Goods",
    rating: 4.6,
    reviews: 45,
    inStock: true,
  },
  {
    id: "19",
    name: "Traditional Beaded Belt",
    price: 159.99,
    image: "/images/products/beaded-belts.webp",
    business: "Maasai Leather Works",
    location: "Arusha, Tanzania",
    category: "Leather Goods",
    rating: 4.7,
    reviews: 89,
    inStock: true,
  },

  // Kente Creations Products
  {
    id: "6",
    name: "Kente Cloth Scarf",
    price: 129.99,
    image: "/images/products/kente-scarf.webp",
    business: "Kente Creations",
    location: "Accra, Ghana",
    category: "Textiles",
    rating: 4.8,
    reviews: 92,
    inStock: true,
  },
  {
    id: "12",
    name: "Ankara Print Dress",
    price: 329.99,
    image: "/images/products/dress-ankara.webp",
    business: "Kente Creations",
    location: "Accra, Ghana",
    category: "Textiles",
    rating: 4.9,
    reviews: 76,
    inStock: true,
  },
  {
    id: "20",
    name: "Traditional Kente Stole",
    price: 199.99,
    image: "/images/products/kente-stole.webp",
    business: "Kente Creations",
    location: "Accra, Ghana",
    category: "Textiles",
    rating: 4.8,
    reviews: 134,
    inStock: true,
  },

  // Savanna Spices Products
  {
    id: "7",
    name: "Ethiopian Coffee Beans",
    price: 179.99,
    image: "/images/products/ethiopian-coffee.webp",
    business: "Savanna Spices",
    location: "Nairobi, Kenya",
    category: "Food & Beverages",
    rating: 4.9,
    reviews: 156,
    inStock: true,
  },
  {
    id: "13",
    name: "Moringa Powder",
    price: 119.99,
    image: "/images/products/moringa.webp",
    business: "Savanna Spices",
    location: "Nairobi, Kenya",
    category: "Food & Beverages",
    rating: 4.7,
    reviews: 89,
    inStock: true,
  },
  {
    id: "21",
    name: "Vanilla Extract Premium",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    business: "Savanna Spices",
    location: "Nairobi, Kenya",
    category: "Food & Beverages",
    rating: 4.9,
    reviews: 112,
    inStock: true,
  },
]

const categories = ["All Categories", "Jewelry", "Food & Beverages", "Textiles", "Beauty", "Leather Goods"]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
]

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [favorites, setFavorites] = useState<string[]>([])
  const { addItem } = useCart()

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterAndSortProducts(term, selectedCategory, sortBy)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterAndSortProducts(searchTerm, category, sortBy)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    filterAndSortProducts(searchTerm, selectedCategory, sort)
  }

  const filterAndSortProducts = (term: string, category: string, sort: string) => {
    let filtered = products

    // Filter by search term
    if (term) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.business.toLowerCase().includes(term.toLowerCase()) ||
          product.category.toLowerCase().includes(term.toLowerCase()),
      )
    }

    // Filter by category
    if (category !== "All Categories") {
      filtered = filtered.filter((product) => product.category === category)
    }

    // Sort products
    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))
        break
      default:
        // Featured - keep original order
        break
    }

    setFilteredProducts(filtered)
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Browse Products</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover unique products from registered African businesses
          </p>
        </motion.div>

        {/* Search, Filter, and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products or businesses..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="pl-10 pr-8 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-slate-600 dark:text-slate-400 text-center">
            Showing {filteredProducts.length} authentic African products
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(product.id) ? "text-red-500 fill-current" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{product.rating}</span>
                  </div>
                </div>

                {/* Business Badge */}
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {product.business}
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">by {product.business}</p>
                <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">{product.location}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">R{product.price.toFixed(2)}</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{product.reviews} reviews</p>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg transform hover:-translate-y-1"
                      : "bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="text-6xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">No products found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search terms or filters</p>
          </motion.div>
        )}
      </main>

      <Footer />
    </>
  )
}
