"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container max-w-7xl mx-auto relative py-5 flex justify-between items-center px-2 md:px-0">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/images/logo.PNG" height={20} style={{height: "40px"}} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><Link href="/" className="hover:text-green-600">Home</Link></li>
          <li><Link href="/products" className="hover:text-green-600">Products</Link></li>
          <li><Link href="/about" className="hover:text-green-600">About Us</Link></li>
          <li><Link href="/contact-us" className="hover:text-green-600">Contact Us</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col text-gray-700 font-medium md:hidden z-50">
            <li className="border-b px-6 py-3 hover:bg-gray-100">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b px-6 py-3 hover:bg-gray-100">
              <Link href="/products">Products</Link>
            </li>
            <li className="border-b px-6 py-3 hover:bg-gray-100">
              <Link href="/about">About Us</Link>
            </li>
            <li className="px-6 py-3 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}
