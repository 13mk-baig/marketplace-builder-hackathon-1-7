import Image from 'next/image';

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Free Delivery Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-gray-600 text-sm">
            Free Delivery applies to orders of ₹14,000.00 or more.{" "}
            <a href="#" className="underline text-black">View details</a>
          </p>
        </div>

        <h1 className="text-2xl font-bold mb-6">Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2">
            {/* Item 1 */}
            <div className="flex items-start space-x-6 bg-white p-6 rounded-md shadow-sm mb-4">
              <Image
                src="/cart.jpg" // Replace with your product image URL
                width={300}
                height={300}
                alt="Product"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">Nike Dri-FIT ADV TechKnit Ultra</h2>
                <p className="text-gray-600">Men&apos;s Short-Sleeve Running Top</p>
                <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
                <p className="text-gray-600">Size: L</p>
                <p className="text-gray-600">Quantity: 1</p>
                <div className="flex space-x-4 mt-2">
                  <button className="text-gray-600 hover:underline">❤️</button>
                  <button className="text-gray-600 hover:underline">🗑️</button>
                </div>
              </div>
              <p className="text-gray-700 font-bold">MRP: ₹3,895.00</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-6 bg-white p-6 rounded-md shadow-sm">
              <Image
                src="/mens-essentials.png" width={1440} height={5442.36}  // Replace with your product image URL{}
                alt="Product"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">Nike Air Max 97 SE</h2>
                <p className="text-gray-600">Men&apos;s Shoes</p>
                <p className="text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-gray-600">Size: 8</p>
                <p className="text-gray-600">Quantity: 1</p>
                <div className="flex space-x-4 mt-2">
                  <button className="text-gray-600 hover:underline">❤️</button>
                  <button className="text-gray-600 hover:underline">🗑️</button>
                </div>
              </div>
              <p className="text-gray-700 font-bold">MRP: ₹16,995.00</p>
            </div>
          </div>

          {/* Right: Summary Section */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>Subtotal</p>
              <p>₹20,890.00</p>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-gray-900 font-bold text-lg">
              <p>Total</p>
              <p>₹20,890.00</p>
            </div>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
              Member Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
