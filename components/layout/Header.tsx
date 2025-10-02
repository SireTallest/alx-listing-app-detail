'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, Calendar} from 'lucide-react';
import { usePathname } from 'next/navigation';
// import { Search, User, Calendar, MapPin, Users } from 'lucide-react';

interface AccommodationType {
  id: string;
  name: string;
  icon: React.ReactNode; // Replace with your actual icon components
}

const Header: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    people: ''
  });
  const pathname = usePathname();
  console.log('Current Pathname:', pathname);

  // Mock accommodation types - replace icons with your actual icon components
  const accommodationTypes: AccommodationType[] = [
    { id: 'apartment', name: 'Apartment', icon: '🏠' },
    { id: 'hotel', name: 'Hotel', icon: '🏨' },
    { id: 'camping', name: 'Camping', icon: '⛺' },
    { id: 'villa', name: 'Villa', icon: '🏖️' },
    { id: 'treehouse', name: 'Treehouse', icon: '🌳' },
    { id: 'flight', name: 'Flight', icon: '✈️' },
    { id: 'heritage', name: 'Heritage Pool', icon: '🏛️' },
    { id: 'beach', name: 'Beach House', icon: '🏖️' },
    { id: 'island', name: 'Island', icon: '🏝️' },
    { id: 'camping2', name: 'Camping', icon: '🏕️' },
    { id: 'apartment2', name: 'Apartment', icon: '🏢' },
    { id: 'house', name: 'House', icon: '🏠' },
    { id: 'cabin', name: 'Cabin', icon: '🛖' },
    { id: 'farm', name: 'Farm House', icon: '🚜' },
    { id: 'treehouse2', name: 'Treehouse', icon: '🌲' },
    { id: 'castle', name: 'Castle', icon: '🏰' },
    { id: 'guesthouse', name: 'Guesthouse', icon: '🏡' },
    { id: 'mansion', name: 'Mansion', icon: '🏛️' }
  ];

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="w-full">
      {/* First Layer - Green Strip */}
      <div className="bg-[#34967C] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-center">
                <span className="hidden sm:inline">Overseas trip? Get the latest information on travel guides</span>
                <span className="sm:hidden">Overseas trip? Get the latest information on travel guides</span>
              </span>
            </div>
            <button className="bg-[#161117] text-white px-4 py-1.5 rounded text-xs hover:bg-gray-800 transition-colors whitespace-nowrap">
              More info
            </button>
          </div>
        </div>
      </div>

      {/* Second Layer - Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Hidden on mobile */}
            <div className="hidden md:block">
              <Link href="/" className="text-2xl font-bold text-black">
                alx
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-4xl">
              <div className="flex items-center bg-white border-2 border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                {/* Location */}
                <div className="flex-1 px-4 py-3 border-r border-gray-200">
                  <div className="text-xs font-medium text-gray-700 mb-1">Location</div>
                  <input
                    type="text"
                    placeholder="Where to"
                    value={searchData.location}
                    onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                    className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                  />
                </div>

                {/* Check In */}
                <div className="hidden sm:block flex-1 px-4 py-3 border-r border-gray-200">
                  <div className="text-xs font-medium text-gray-700 mb-1">Check in</div>
                  <input
                    type="text"
                    placeholder="Add dates"
                    value={searchData.checkIn}
                    onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                    className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                  />
                </div>

                {/* Check Out */}
                <div className="hidden sm:block flex-1 px-4 py-3 border-r border-gray-200">
                  <div className="text-xs font-medium text-gray-700 mb-1">Check out</div>
                  <input
                    type="text"
                    placeholder="Add dates"
                    value={searchData.checkOut}
                    onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                    className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                  />
                </div>

                {/* People */}
                <div className="hidden sm:block flex-1 px-4 py-3">
                  <div className="text-xs font-medium text-gray-700 mb-1">People</div>
                  <input
                    type="text"
                    placeholder="Add guests"
                    value={searchData.people}
                    onChange={(e) => setSearchData({ ...searchData, people: e.target.value })}
                    className="w-full text-sm text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                  />
                </div>

                {/* Search Button */}
                <button className="bg-[#34967C] text-white p-3 rounded-full mr-2 hover:bg-[#2d7a63] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Sign in
              </button>
              <button className="px-4 py-2 bg-[#34967C] text-white rounded-lg hover:bg-[#2d7a63] transition-colors">
                Sign up
              </button>
            </div>

            {/* User Avatar - Tablet & Mobile */}
            <div className="md:hidden relative">
              <button
                onClick={toggleUserMenu}
                className="w-10 h-10 bg-[#34967C] rounded-full flex items-center justify-center text-white hover:bg-[#2d7a63] transition-colors"
              >
                <User className="w-5 h-5" />
              </button>
              
              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
                      Sign in
                    </button>
                    <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
                      Sign up
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Third Layer - Accommodation Types */}
      { !pathname?.includes('/property/') &&
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            {/* Desktop - Show all icons */}
            <div className="hidden lg:flex justify-center items-center gap-8 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
              {accommodationTypes.map((type) => (
                <button
                  key={type.id}
                  className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-gray-800">
                    {type.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Tablet & Mobile - Horizontal scroll */}
            <div className="lg:hidden">
              <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {accommodationTypes.map((type) => (
                  <button
                    key={type.id}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group flex-shrink-0"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {type.icon}
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-gray-800 whitespace-nowrap">
                      {type.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      {/* Overlay to close user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
};

export default Header;