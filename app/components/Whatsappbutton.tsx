"use client"

export default function WhatsAppButton() {

  const phoneNumber = "+923001178792" // Use country code without +
  const message = "Hello! I want to order from FruitsOnline."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
    >
      💬
    </a>
  )
}
