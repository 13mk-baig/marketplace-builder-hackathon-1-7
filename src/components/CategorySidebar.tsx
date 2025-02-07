// components/Sidebar.js
import Link from 'next/link';
export default function Sidebar() {
  return (
    <div className="bg-white w-64 p-6">
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <ul className="space-y-2">
        <li><Link href="#" className="text-gray-600 hover:text-black">Shoes</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Sport Bras</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Tops & T-shirts</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Hoodies & Sweatshirts</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Jackets</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Trousers</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Tights</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Shorts</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Tracksuits</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Jumpsuits & Rompers</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Skirts & Dresses</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Socks</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Accessories & Equipment</Link></li>
      </ul>

      <h2 className="font-bold text-lg mt-6 mb-4">Shop by Price</h2>
      <ul className="space-y-2">
        <li><Link href="#" className="text-gray-600 hover:text-black">Under $50</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">$50 - $100</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">$100 - $200</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">$200+</Link></li>
      </ul>

      <h2 className="font-bold text-lg mt-6 mb-4">Gender</h2>
      <ul className="space-y-2">
        <li><Link href="#" className="text-gray-600 hover:text-black">Men</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Women</Link></li>
        <li><Link href="#" className="text-gray-600 hover:text-black">Kids</Link></li>
      </ul>
    </div>
  )
}


