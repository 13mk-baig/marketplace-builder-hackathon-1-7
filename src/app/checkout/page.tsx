import Image from 'next/image';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Form Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm" style={{ width: '440px', height: '1504px' }}>
          <h2 className="text-xl font-bold mb-6 text-center">How would you like to get your order?</h2>
          
          {/* Paragraph Block */}
          <p className="text-gray-600 text-sm mb-4" 
             style={{
               width: '437.61px',
               height: '192px',
               fontFamily: 'Inter',
               fontWeight: 400,
               fontSize: '15px',
               lineHeight: '24px',
               textDecoration: 'underline'
             }}>
            Customs regulation for India require a copy of the recipient&apos;s KYC.
            The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email 
            to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing
            customs (including sharing it with customs officials) for all orders and returns. If your KYC does not
            match your shipping address, please click the link for more information. Learn More
          </p>

          {/* Deliver It Button */}
          <button 
            className="w-full py-3 border-2 border-gray-300 rounded-md mb-6 hover:border-black" 
            style={{
              width: '440px',
              height: '82px',
              borderRadius: '12px',
              paddingTop: '29px',
              paddingRight: '307px',
              paddingBottom: '29px',
              paddingLeft: '21px',
              gap: '24px'
            }}
          >
            Deliver It
          </button>

          {/* Name & Address Section */}
          <h3 className="text-lg font-bold mb-4">Enter your name and address:</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>
            <select
              className="w-full border border-gray-300 p-3 rounded-md"
              defaultValue="India"
            >
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
              {/* Add more options as needed */}
            </select>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Save this address to my profile
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Make this my preferred address
              </label>
            </div>

            {/* Contact Information */}
            <h3 className="text-lg font-bold mb-4">What&apos;s your contact information?</h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-3 rounded-md"
            />

            {/* PAN Information */}
            <h3 className="text-lg font-bold mb-4">What&apos;s your PAN?</h3>
            <input
              type="text"
              placeholder="PAN"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Save PAN details to Nike&apos;s Profile
            </label>
            <label className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              I have read and consent to sharing my information in accordance with the Privacy
              Statement and Cookie Policy.
            </label>

            <button className="mt-6 w-full bg-gray-200 py-3 rounded-md text-gray-700 font-bold">
              Continue
            </button>
          </form>

          {/* Additional Boxes Below the Continue Button */}
          <div className="mt-6 flex justify-between space-x-4">
            {['Delivery', 'Shipping', 'Billing', 'Payment'].map((item) => (
              <div key={item} className="flex-1 bg-gray-100 p-4 rounded-lg text-center shadow-md">
                <h4 className="font-semibold text-gray-700">{item}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Order Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm" style={{ width: '440px', height: '316px', paddingTop: '28px', gap: '28px' }}>
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>₹20,890.00</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Delivery/Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between text-gray-900 font-bold text-lg">
              <p>Total</p>
              <p>₹20,890.00</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-gray-700">Arrives</h3>
            <p className="text-sm text-gray-600">Mon, 27 Mar - Wed, 12 Apr</p>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <Image
              src="/cart.jpg" // Replace with product image URL
              width={653}
              height={653}
              alt="Product 1"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-sm text-gray-600">Men&apos;s Short-Sleeve Running Top</p>
              <p className="text-sm text-gray-600">Qty: 1, Size: L</p>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <Image
              src="/mens-essentials.png" // Replace with product image URL
              width={440}
              height={540}
              alt="Product 2"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="font-bold">Nike Air Max 97 SE</p>
              <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
              <p className="text-sm text-gray-600">Qty: 1, Size: 8</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Checkout;


