import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white w-[1440px] h-[331px] top-[5594.36px]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0">
          {/* Links Section */}
          <div className="flex flex-wrap justify-between space-x-4">
            {/* First Link Section */}
            <div className="w-[245.25px] h-[169.63px]">
              <ul className="space-y-1">
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]"><b>FIND A STORE</b></li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]"><b>BECOME A MEMBER</b></li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]"><b>SIGN UP FOR EMAIL</b></li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]"><b>SEND US FEEDBACK</b></li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]"><b>STUDENT DISCOUNTS</b></li>
              </ul>
            </div>

            {/* Second Link Section */}
            <div className="w-[245.25px] h-[213px]">
              <ul className="space-y-1">
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]"><b>GET HELP</b></li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Order Status</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Delivery</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Returns</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Payment Options</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Contact Us on Nike.com inquiries</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Contact Us on All inquiries</li>
              </ul>
            </div>

            {/* Third Link Section */}
            <div className="w-[245.25px] h-[151px] ml-[520.2px]">
              <ul className="space-y-1">
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]"><b>ABOUT NIKE</b></li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">News</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Careers</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Investors</li>
                <li className="text-[10px] font-[Helvetica Neue] leading-[32.67px]">Sustainability</li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 items-center w-[337px] h-[37px] ml-[1029px]">
            <Link href="#" className="hover:text-gray-400">
              <FaFacebookF className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaYoutube className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-wrap justify-between items-center text-sm space-y-4 lg:space-y-0">
          {/* Footer Note */}
          <div className="text-gray-400 text-xs">
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-end space-x-4 text-gray-400 text-xs">
            <Link href="#" className="hover:text-white">Guides</Link>
            <Link href="#" className="hover:text-white">Terms of Sale</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Nike Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
