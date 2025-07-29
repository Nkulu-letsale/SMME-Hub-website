import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const formData = await request.formData()

    const businessData = {
      businessName: formData.get("businessName"),
      ownerName: formData.get("ownerName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      province: formData.get("province"),
      postalCode: formData.get("postalCode"),
      category: formData.get("category"),
      description: formData.get("description"),
      website: formData.get("website"),
      logo: formData.get("logo"),
    }

    // Call Java backend API
    const response = await fetch("http://localhost:8080/api/businesses/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(businessData),
    })

    if (!response.ok) {
      throw new Error("Failed to register business")
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      message: "Business registered successfully",
      data: result,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ success: false, message: "Registration failed" }, { status: 500 })
  }
}
