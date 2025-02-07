import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      {/* Center Container */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Nike Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/nike-logo.png" // Replace with the path to your Nike logo image
            alt="Nike Logo"
            width={100} // Adjust width as needed
            height={50} // Adjust height as needed
          />
        </div>

        {/* Heading */}
        <h1 className="text-center font-bold text-2xl mb-6">
          YOUR ACCOUNT<br/> 
          FOR EVERYTHING<br/>
          NIKE
        </h1>

        {/* Email and Password Inputs */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="••••••••"
            />
          </div>

          {/* Keep Me Logged In & Forgot Password */}
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Keep me logged in
            </label>
            <Link href="/forgot-password" className="text-black text-sm underline">
              Forgot your password?
            </Link>
          </div>

          {/* Privacy Policy & Terms */}
          <p className="text-center text-xs text-gray-600 mt-4">
            By logging in, you agree to Nike&apos;s{' '}
            <Link href="/privacy-policy" className="underline text-black">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms-of-use" className="underline text-black">
              Terms of Use
            </Link>.
          </p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition mt-6"
          >
            Sign In
          </button>

          {/* Not a Member? Join Us */}
          <p className="text-center text-xs text-gray-600 mt-4">
            Not a Member?{' '}
            <Link href="/signup" className="underline text-black">
              Join Us.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;