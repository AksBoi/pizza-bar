import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-red mx-auto p-4">
          <div className="max-w-7xl mx-auto-xl:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="flex-1 flex items-center justify-center-md:items-stretch-md:justify-start text-white">
                <div className="flex-shrink-0">
                  <a href="/" className="font-bold text-3xl">PIZZA-BAR</a>
                </div>
              </div>
              <div className="flex items-center">
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Home</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Cart</a>
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Login</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar