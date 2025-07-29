import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")

    let url = "http://localhost:8080/api/products"
    const params = new URLSearchParams()

    if (category) params.append("category", category)
    if (search) params.append("search", search)

    if (params.toString()) {
      url += "?" + params.toString()
    }

    // Call Java backend API
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    const products = await response.json()

    return NextResponse.json({
      success: true,
      data: products,
    })
  } catch (error) {
    console.error("Fetch products error:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const productData = await request.json()

    // Call Java backend API
    const response = await fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })

    if (!response.ok) {
      throw new Error("Failed to create product")
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      message: "Product created successfully",
      data: result,
    })
  } catch (error) {
    console.error("Create product error:", error)
    return NextResponse.json({ success: false, message: "Failed to create product" }, { status: 500 })
  }
}
