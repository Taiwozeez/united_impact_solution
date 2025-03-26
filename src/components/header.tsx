"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="py-5 bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 mx-auto md:px-8">
        {/* Mobile Hamburger Menu */}
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(true)} className="p-1 focus:outline-none">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </button>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
              <div className="w-[250px] bg-white h-full p-5" onClick={(e) => e.stopPropagation()}>
                <button className="mb-5 text-gray-500" onClick={() => setIsOpen(false)}>
                  ✕ Close
                </button>
                <nav className="flex flex-col gap-6">
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]"
                    onClick={() => setIsOpen(false)}
                  >
                    Donations
                  </a>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden space-x-8 md:space-x-12 lg:space-x-20 md:flex">
          <li>
            <a href="#" className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]">
              Donations
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium text-gray-800 transition-colors hover:text-[#4a7e32]">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Center - Logo */}
        <div className="absolute transform -translate-x-1/2 left-1/2">
          <img src="/logo.png" alt="Logo" className="w-auto h-12" />
        </div>

        {/* Right - Donate Button */}
        <button
          className="px-4 py-2 text-sm md:text-lg md:px-6 md:py-3 font-semibold text-white transition-colors rounded-full shadow-md hover:bg-[#4a7e32]"
          style={{ backgroundColor: "#5B913B" }}
        >
          Donate Now
        </button>
      </div>
    </nav>
  )
}

