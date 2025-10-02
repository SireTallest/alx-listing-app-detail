'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';

// Types
interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

interface PillProps {
  filter: FilterOption;
  onClick: (filterId: string) => void;
}

interface FilterComponentProps {
  filters: FilterOption[];
  sortBy: string;
  onFilterChange: (filterId: string) => void;
  onSortChange: (sortValue: string) => void;
}

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

// Pill Component
const Pill: React.FC<PillProps> = ({ filter, onClick }) => {
  return (
    <button
      onClick={() => onClick(filter.id)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
        filter.active
          ? 'bg-[#34967C] text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      {filter.label}
    </button>
  );
};

// Filter Component
const FilterComponent: React.FC<FilterComponentProps> = ({
  filters,
  sortBy,
  onFilterChange,
  onSortChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Split filters for responsive display
  const allFilter = filters.find(f => f.id === 'all');
  const otherFilters = filters.filter(f => f.id !== 'all');
  const visibleFilters = otherFilters.slice(0, 2);
  const hiddenFilters = otherFilters.slice(2);

  const sortOptions = [
    { value: 'highest-price', label: 'Highest Price' },
    { value: 'lowest-price', label: 'Lowest Price' },
    { value: 'rating', label: 'Rating' },
    { value: 'popularity', label: 'Popularity' }
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSortDropdown = () => setIsSortDropdownOpen(!isSortDropdownOpen);

  return (
    <div className="bg-white py-4 sticky top-0 z-30 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Filters */}
          <div className="flex items-center gap-3 flex-1">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center gap-3">
              {allFilter && (
                <Pill filter={allFilter} onClick={onFilterChange} />
              )}
              {otherFilters.map((filter) => (
                <Pill key={filter.id} filter={filter} onClick={onFilterChange} />
              ))}
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden items-center gap-3">
              {allFilter && (
                <Pill filter={allFilter} onClick={onFilterChange} />
              )}
              {visibleFilters.map((filter) => (
                <Pill key={filter.id} filter={filter} onClick={onFilterChange} />
              ))}
              
              {hiddenFilters.length > 0 && (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-sm font-medium"
                  >
                    More
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[150px] z-40">
                      <div className="py-2">
                        {hiddenFilters.map((filter) => (
                          <button
                            key={filter.id}
                            onClick={() => {
                              onFilterChange(filter.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                              filter.active ? 'text-[#34967C] font-medium' : 'text-gray-700'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden items-center gap-3">
              <button className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200">
                <SlidersHorizontal className="w-4 h-4" />
              </button>
              
              {allFilter && (
                <Pill filter={allFilter} onClick={onFilterChange} />
              )}
              {/* {visibleFilters.map((filter) => (
                <Pill key={filter.id} filter={filter} onClick={onFilterChange} />
              ))} */}
              
              {hiddenFilters.length > 0 && (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-1 px-3 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-sm font-medium"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[150px] z-40">
                      <div className="py-2">
                        {hiddenFilters.map((filter) => (
                          <button
                            key={filter.id}
                            onClick={() => {
                              onFilterChange(filter.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                              filter.active ? 'text-[#34967C] font-medium' : 'text-gray-700'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right side - Filter and Sort */}
          <div className="flex items-center gap-3">
            {/* Filter Button - Desktop/Tablet */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-sm font-medium">
              <Filter className="w-4 h-4" />
              Filter
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={toggleSortDropdown}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-sm font-medium"
              >
                <span className="hidden sm:inline">Sort by:</span>
                <span className="font-medium">
                  {sortOptions.find(opt => opt.value === sortBy)?.label || 'Highest Price'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[160px] z-40">
                  <div className="py-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          onSortChange(option.value);
                          setIsSortDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                          sortBy === option.value ? 'text-[#34967C] font-medium' : 'text-gray-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for dropdowns */}
      {(isDropdownOpen || isSortDropdownOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsDropdownOpen(false);
            setIsSortDropdownOpen(false);
          }}
        />
      )}
    </div>
  );
};

// Hero Section Component
const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Find your favorite place here!",
  subtitle = "The best prices for over 2 million properties worldwide.",
  backgroundImage = "/hero_large.png"
}) => {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mx-4 my-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />      
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 bg-opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

// Demo Component showing both components together
const HeroFilterDemo: React.FC = () => {
  const [filters, setFilters] = useState<FilterOption[]>([
    { id: 'all', label: 'All', active: true },
    { id: 'top-villa', label: 'Top Villa', active: false },
    { id: 'free-reschedule', label: 'Free Reschedule', active: false },
    { id: 'book-now-pay-later', label: 'Book Now, Pay Later', active: false },
    { id: 'self-checkin', label: 'Self Checkin', active: false },
    { id: 'instant-book', label: 'Instant Book', active: false },
    { id: 'luxury', label: 'Luxury', active: false },
    { id: 'budget-friendly', label: 'Budget Friendly', active: false }
  ]);

  const [sortBy, setSortBy] = useState('highest-price');

  const handleFilterChange = (filterId: string) => {
    setFilters(prevFilters =>
      prevFilters.map(filter => ({
        ...filter,
        active: filter.id === filterId ? true : filter.id === 'all' ? filterId === 'all' : false
      }))
    );
  };

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile: Filter first, then Hero */}
      <div className="md:hidden">
        <FilterComponent
          filters={filters}
          sortBy={sortBy}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        <HeroSection />
      </div>

      {/* Desktop/Tablet: Hero first, then Filter */}
      <div className="hidden md:block">
        <div className="container mx-auto">
          <HeroSection />
        </div>
        <FilterComponent
          filters={filters}
          sortBy={sortBy}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default HeroFilterDemo;
export { HeroSection, FilterComponent, Pill };
export type { FilterOption, HeroSectionProps, FilterComponentProps, PillProps };