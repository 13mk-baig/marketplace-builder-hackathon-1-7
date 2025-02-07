
import Link from 'next/link';


const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div>
            <h1 className="text-lg font-bold">Nike</h1>
          </div>
          <nav className="space-x-6">
            <Link href="#" className="text-gray-600 hover:text-black">New & Featured</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Men</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Women</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Kids</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Sale</Link>
            <Link href="#" className="text-gray-600 hover:text-black">SNKRS</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">GET HELP</h1>
        <div className="relative w-full mb-10">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <section className="flex flex-col lg:flex-row lg:space-x-10">
          {/* Left Section */}
          <div className="lg:w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="text-gray-700 mb-6">
              We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.</li>
              <li>Apple Pay</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member,{" "}
              <a href="#" className="text-blue-500 underline">join us today</a>.
            </p>
            <div className="space-x-4 mb-10">
              <button className="bg-black text-white px-6 py-2 rounded-md">JOIN US</button>
              <button className="border px-6 py-2 rounded-md">SHOP NIKE</button>
            </div>
            <h3 className="text-lg font-semibold mb-4">FAQs</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Does my card need international purchases enabled?</h4>
                <p className="text-gray-700">Yes, we recommend asking your bank to enable international purchases on your card.</p>
              </li>
              <li>
                <h4 className="font-medium">Can I pay for my order with multiple methods?</h4>
                <p className="text-gray-700">No, payment for Nike orders cannot be split between multiple payment methods.</p>
              </li>
              <li>
                <h4 className="font-medium">Why donot I see Apple Pay as an option?</h4>
                <p className="text-gray-700">To see Apple Pay as an option, you will need a compatible Apple device running the latest OS.</p>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <aside className="lg:w-1/3 mt-10 lg:mt-0">
            <h3 className="text-xl font-semibold mb-6">CONTACT US</h3>
            <div className="space-y-6 text-gray-700">
              <p>
                <strong>000 800 919 0566</strong><br />
                Products & Orders: 24 hours a day, 7 days a week<br />
                Company Info & Enquiries: 07:30 to 16:30, Monday to Friday
              </p>
              <div>
                <p>24 hours a day</p>
                <p>7 days a week</p>
              </div>
              <div>
                <p>We will reply within five business days</p>
              </div>
              <div>
                <p>Find Nike retail stores near you</p>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-4">FIND A STORE</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Become a Member</Link></li>
              <li><Link href="#" className="hover:underline">Sign up for Email</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">GET HELP</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Order Status</Link></li>
              <li><Link href="#" className="hover:underline">Delivery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">ABOUT NIKE</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">News</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;