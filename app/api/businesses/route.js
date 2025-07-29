import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Call Java backend API
    const response = await fetch("http://localhost:8080/api/businesses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch businesses")
    }

    const businesses = await response.json()

    return NextResponse.json({
      success: true,
      data: businesses,
    })
  } catch (error) {
    console.error("Fetch businesses error:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch businesses" }, { status: 500 })
  }
}
