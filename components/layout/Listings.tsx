'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Bed, Bath, Users } from 'lucide-react';

// Types
interface PropertyOffer {
  bed: string;
  shower: string;
  occupants: string;
}

interface PropertyAddress {
  state: string;
  city: string;
  country: string;
}

interface Property {
  name: string;
  address: PropertyAddress;
  rating: number;
  category: string[];
  price: number;
  offers: PropertyOffer;
  image: string;
  discount?: string;
}

// Property Card Component
interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
      {/* Property Image */}
      <div className="relative h-64 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-gray-800">{property.rating}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {property.category.map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Property Name */}
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
          {property.name}
        </h3>

        {/* Address */}
        <p className="text-gray-600 text-sm mb-4">
          {property.address.city}, {property.address.country}
        </p>

        {/* Bottom Row - Amenities and Price */}
        <div className="flex items-center justify-between">
          {/* Amenities */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">{property.offers.bed}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">{property.offers.shower}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">{property.offers.occupants}</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="font-bold text-gray-900">
              ${property.price}
              <span className="font-normal text-gray-600 text-sm">/n</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Listing Section Component
interface ListingSectionProps {
  properties: Property[];
  title?: string;
}

const ListingSection: React.FC<ListingSectionProps> = ({ 
  properties, 
  title = "Featured Properties" 
}) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">Discover amazing places to stay</p>
          </div>
        )}

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#34967C] text-white rounded-lg hover:bg-[#2d7a63] transition-colors">
            Show more properties
          </button>
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
const sampleProperties: Property[] = [
  {
    name: "Entire cabin",
    address: {
      state: "Nova Friburgo",
      city: "Nova Friburgo",
      country: "Brazil"
    },
    rating: 4.76,
    category: ["Top Villa", "Self Checkin", "Free Reschedule"],
    price: 62,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "3"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  },
  {
    name: "Luxury Beach Villa",
    address: {
      state: "Bali",
      city: "Ubud",
      country: "Indonesia"
    },
    rating: 4.92,
    category: ["Beachfront", "Pool", "Luxury"],
    price: 150,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "6"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  },
  {
    name: "Cozy Mountain Retreat",
    address: {
      state: "Colorado",
      city: "Aspen",
      country: "USA"
    },
    rating: 4.65,
    category: ["Mountain View", "Fireplace", "Ski Access"],
    price: 180,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  },
  {
    name: "Modern Loft",
    address: {
      state: "New York",
      city: "Manhattan",
      country: "USA"
    },
    rating: 4.73,
    category: ["City Center", "Modern", "High-Speed WiFi"],
    price: 320,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  },
  {
    name: "Seaside Cottage",
    address: {
      state: "Cornwall",
      city: "St. Ives",
      country: "UK"
    },
    rating: 4.88,
    category: ["Ocean View", "Pet Friendly", "Garden"],
    price: 95,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  },
  {
    name: "Desert Oasis",
    address: {
      state: "Arizona",
      city: "Scottsdale",
      country: "USA"
    },
    rating: 4.70,
    category: ["Pool", "Desert View", "Hot Tub"],
    price: 110,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "4"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  },
  {
    name: "Historic Townhouse",
    address: {
      state: "Tuscany",
      city: "Florence",
      country: "Italy"
    },
    rating: 4.84,
    category: ["Historic", "City Center", "Rooftop Terrace"],
    price: 140,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "6"
    },
    image: "/api/placeholder/400/300",
    discount: ""
  }
];

// Main Component for Demo
const PropertyListingDemo: React.FC = () => {
  return (
    <div>
      <ListingSection 
        properties={sampleProperties} 
        title="Discover Amazing Places to Stay"
      />
    </div>
  );
};

export default PropertyListingDemo;
export { PropertyCard, ListingSection };
export type { Property, PropertyCardProps, ListingSectionProps };