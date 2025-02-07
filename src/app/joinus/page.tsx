import Image from 'next/image';
import Link from 'next/link';

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-4">
      {/* Nike Logo */}
      <div className="mb-6">
        <Image
          src="/nike-logo.png" // Replace with your logo path
          alt="Nike Logo"
          width={100} // Adjust width as needed
          height={50} // Adjust height as needed
        />
      </div>

      {/* Main Heading */}
      <h1 className="font-inter font-bold text-2xl mb-4 text-center">
        BECOME A NIKE MEMBER
      </h1>

      {/* Paragraph */}
      <p className="font-inter font-normal text-sm text-center mb-6 px-4">
        Create your Nike Member profile and get<br/> 
        first access to the very best of Nike <br/>
        products, inspiration and community.
      </p>

      {/* Form */}
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        {/* Input Fields */}
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Email address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="First Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Last Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700"></label>
            <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>

        {/* Birthday Reward */}
        <p className="text-center text-xs font-inter font-normal mb-4">Get a Nike Member Reward every year on your Birthday</p>

        {/* Country Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700"></label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm">
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="gb">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Gender Selection */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-[153.89px] h-[43px] border border-gray-300 rounded-md bg-gray-100">
              <input type="radio" id="male" name="gender" className="mr-2" />
              <label htmlFor="male" className="text-sm font-medium text-gray-700">Male</label>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center w-[153.89px] h-[43px] border border-gray-300 rounded-md bg-gray-100">
              <input type="radio" id="female" name="gender" className="mr-2" />
              <label htmlFor="female" className="text-sm font-medium text-gray-700">Female</label>
            </div>
          </div>
        </div>

        {/* Email Updates Checkbox */}
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-xs font-inter font-normal">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</label>
        </div>

        {/* Privacy Policy */}
        <p className="text-center text-xs font-inter font-normal mb-4">
  By creating an account, you agree to Nike&apos;s{' '}
  <Link href="/privacy-policy" className="underline text-black">Privacy Policy</Link> and{' '}
  <Link href="/terms-of-use" className="underline text-black">Terms of Use</Link>.
</p>


        {/* Join Us Button */}
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
          JOIN US
        </button>

        {/* Already a Member? Sign In */}
        <p className="text-center text-xs font-inter font-normal mt-4">
          Already a Member?{' '}
          <Link href="/login" className="underline text-black">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default JoinUs;

