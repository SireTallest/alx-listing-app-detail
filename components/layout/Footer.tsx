import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-white">
      {/* Green strip */}
      <div className="h-4 bg-[#34967C]"></div>
      
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Logo and description */}
          <div className="mb-8">
            <div className="mb-4">
              {/* Placeholder for logo - replace with your actual logo component */}
              <div className="text-2xl font-bold text-white">alx</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              ALX is a platform where travelers can discover and book unique, 
              comfortable, and affordable lodging options worldwide. From cozy city 
              apartments and tranquil countryside retreats to exotic beachside villas, 
              ALX connects you with the perfect place to stay for any trip.
            </p>
          </div>

          {/* Navigation sections - stacked vertically */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/apartments-dubai" className="text-gray-300 text-sm hover:text-white transition-colors">Apartments in Dubai</Link></li>
                <li><Link href="/hotels-new-york" className="text-gray-300 text-sm hover:text-white transition-colors">Hotels in New York</Link></li>
                <li><Link href="/villa-spain" className="text-gray-300 text-sm hover:text-white transition-colors">Villa in Spain</Link></li>
                <li><Link href="/mansion-indonesia" className="text-gray-300 text-sm hover:text-white transition-colors">Mansion in Indonesia</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 text-sm hover:text-white transition-colors">About us</Link></li>
                <li><Link href="/blog" className="text-gray-300 text-sm hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/career" className="text-gray-300 text-sm hover:text-white transition-colors">Career</Link></li>
                <li><Link href="/customers" className="text-gray-300 text-sm hover:text-white transition-colors">Customers</Link></li>
                <li><Link href="/brand" className="text-gray-300 text-sm hover:text-white transition-colors">Brand</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Help</h3>
              <ul className="space-y-3">
                <li><Link href="/support" className="text-gray-300 text-sm hover:text-white transition-colors">Support</Link></li>
                <li><Link href="/cancel-booking" className="text-gray-300 text-sm hover:text-white transition-colors">Cancel booking</Link></li>
                <li><Link href="/refunds" className="text-gray-300 text-sm hover:text-white transition-colors">Refunds Process</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden lg:hidden md:block">
          {/* Logo and description */}
          <div className="mb-8">
            <div className="mb-4">
              {/* Placeholder for logo - replace with your actual logo component */}
              <div className="text-2xl font-bold text-white">alx</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              ALX is a platform where travelers can discover and book unique, comfortable, and 
              affordable lodging options worldwide. From cozy city apartments and tranquil 
              countryside retreats to exotic beachside villas, ALX connects you with the perfect 
              place to stay for any trip.
            </p>
          </div>

          {/* Navigation sections - 3 columns */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <ul className="space-y-3">
                <li><Link href="/apartments-dubai" className="text-gray-300 text-sm hover:text-white transition-colors">Apartments in Dubai</Link></li>
                <li><Link href="/hotels-new-york" className="text-gray-300 text-sm hover:text-white transition-colors">Hotels in New York</Link></li>
                <li><Link href="/villa-spain" className="text-gray-300 text-sm hover:text-white transition-colors">Villa in Spain</Link></li>
                <li><Link href="/mansion-indonesia" className="text-gray-300 text-sm hover:text-white transition-colors">Mansion in Indonesia</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 text-sm hover:text-white transition-colors">About us</Link></li>
                <li><Link href="/blog" className="text-gray-300 text-sm hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/career" className="text-gray-300 text-sm hover:text-white transition-colors">Career</Link></li>
                <li><Link href="/customers" className="text-gray-300 text-sm hover:text-white transition-colors">Customers</Link></li>
                <li><Link href="/brand" className="text-gray-300 text-sm hover:text-white transition-colors">Brand</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Help</h3>
              <ul className="space-y-3">
                <li><Link href="/support" className="text-gray-300 text-sm hover:text-white transition-colors">Support</Link></li>
                <li><Link href="/cancel-booking" className="text-gray-300 text-sm hover:text-white transition-colors">Cancel booking</Link></li>
                <li><Link href="/refunds" className="text-gray-300 text-sm hover:text-white transition-colors">Refunds Process</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-start">
            {/* Logo and description */}
            <div className="max-w-md">
              <div className="mb-4">
                {/* Placeholder for logo - replace with your actual logo component */}
                <div className="text-2xl font-bold text-white">alx</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                ALX is a platform where travelers can discover and book unique, comfortable, and 
                affordable lodging options worldwide. From cozy city apartments and tranquil 
                countryside retreats to exotic beachside villas, ALX connects you with the perfect 
                place to stay for any trip.
              </p>
            </div>

            {/* Navigation sections - horizontal layout */}
            <div className="flex space-x-16">
              <div>
                <h3 className="text-white font-semibold mb-4">Explore</h3>
                <ul className="space-y-3">
                  <li><Link href="/apartments-dubai" className="text-gray-300 text-sm hover:text-white transition-colors">Apartments in Dubai</Link></li>
                  <li><Link href="/hotels-new-york" className="text-gray-300 text-sm hover:text-white transition-colors">Hotels in New York</Link></li>
                  <li><Link href="/villa-spain" className="text-gray-300 text-sm hover:text-white transition-colors">Villa in Spain</Link></li>
                  <li><Link href="/mansion-indonesia" className="text-gray-300 text-sm hover:text-white transition-colors">Mansion in Indonesia</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-gray-300 text-sm hover:text-white transition-colors">About us</Link></li>
                  <li><Link href="/blog" className="text-gray-300 text-sm hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/career" className="text-gray-300 text-sm hover:text-white transition-colors">Career</Link></li>
                  <li><Link href="/customers" className="text-gray-300 text-sm hover:text-white transition-colors">Customers</Link></li>
                  <li><Link href="/brand" className="text-gray-300 text-sm hover:text-white transition-colors">Brand</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Help</h3>
                <ul className="space-y-3">
                  <li><Link href="/support" className="text-gray-300 text-sm hover:text-white transition-colors">Support</Link></li>
                  <li><Link href="/cancel-booking" className="text-gray-300 text-sm hover:text-white transition-colors">Cancel booking</Link></li>
                  <li><Link href="/refunds" className="text-gray-300 text-sm hover:text-white transition-colors">Refunds Process</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with cancellation notice and legal links */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="mb-6">
            <p className="text-gray-400 text-xs">
              Some hotel requires you to cancel more than 24 hours before check-in. Details{' '}
              <Link href="/cancellation-details" className="text-[#34967C] hover:underline">
                here
              </Link>
            </p>
          </div>

          {/* Legal links - responsive layout */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-6">
              <Link href="/terms" className="text-gray-400 text-xs hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/policy" className="text-gray-400 text-xs hover:text-white transition-colors">
                Policy service
              </Link>
              <Link href="/cookies" className="text-gray-400 text-xs hover:text-white transition-colors">
                Cookies Policy
              </Link>
              <Link href="/partners" className="text-gray-400 text-xs hover:text-white transition-colors hidden lg:inline">
                Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;