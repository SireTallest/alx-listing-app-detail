'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Heart, Share2, Star, Bed, Bath, Users } from 'lucide-react';

// Types (matching your existing structure)
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
  images?: string[]; // Additional images for the gallery
  reviewCount?: number;
  propertyType?: string;
  discount?: string;
}

interface PropertyDetailHeroProps {
  property: Property;
  onReturn?: () => void;
  onSave?: () => void;
  onShare?: () => void;
}

const PropertyDetailHero: React.FC<PropertyDetailHeroProps> = ({
  property,
  onReturn,
  onSave,
  onShare
}) => {
  const extras = property.images ?? [];
  const mainImage = property.image;

  // InfoBadge: shrinks, prevents wrap, ellipses if too tight, subtle hover border highlight,
// and scales down on very small screens to preserve space.
const InfoBadge: React.FC<{ icon: React.ReactNode; children: React.ReactNode; active?: boolean }> = ({
  icon,
  children,
  active = false,
}) => (
  <div
    className={`
      flex items-center gap-2
      rounded-2xl border border-gray-400 cursor-default
      hover:border-[#34967C]
      min-w-0
      text-sm max-[375px]:text-xs
      px-4 py-2 max-[375px]:px-2 max-[375px]:py-1
      ${active ? 'text-[#34967C] font-medium' : 'text-gray-800'}
    `}
  >
    {icon}
    <span className="font-medium truncate">{children}</span>
  </div>
);



  // Helper flags
  // const extraCount = 4;
  const extraCount = extras.length;
  const hasExtras = extraCount > 0;
  const showAllPhotosButton = extraCount > 3;

  // Pick up to first 3 extras for layout (cases with >=3)
  const rightTop = extras[0] || mainImage;
  const rightBottomLeft = extras[1] || mainImage;
  const rightBottomRight = extras[2] || mainImage;

  return (
    <div className="w-full">
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:block">
        {/* Top Row - Property Info and Actions */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {property.name}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{property.rating}</span>
                <span>({property.reviewCount || 345} reviews)</span>
              </div>
              <span>•</span>
              <span>{property.address.city}, {property.address.country}</span>
              <span>•</span>
              <span className="capitalize">{property.propertyType || 'Mainstream'}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onSave}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={onShare}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Middle Row - Image Gallery */}
        <div className="grid grid-cols-2 gap-2 mb-6 h-96 lg:h-[500px] rounded-xl overflow-hidden">
          {/* Main Image - Left Column (or full width if no extras) */}
          { !hasExtras ? (
            <div className="relative col-span-2 border-2 border-amber-300">
              <Image
                src={mainImage}
                alt={property.name}
                fill
                className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                sizes="100vw"
              />
            </div>
          ) : (
            <div className="relative border-2 border-amber-300">
              <Image
                src={mainImage}
                alt={property.name}
                fill
                className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                sizes="50vw"
              />
            </div>
          )}

          {/* Right-hand column variants when extras exist */}
          {hasExtras && (
            <>
              {extraCount === 1 && (
                // Single extra image fills right column
                <div className="relative border-2 border-amber-300">
                  <Image
                    src={extras[0]}
                    alt={`${property.name} extra view`}
                    fill
                    className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                    sizes="25vw"
                  />
                </div>
              )}

              {extraCount === 2 && (
                // Two extras stacked vertically
                <div className="grid grid-rows-2 gap-2 border-2 border-amber-300">
                  <div className="relative overflow-hidden rounded-md border-2 border-amber-300">
                    <Image
                      src={extras[0]}
                      alt={`${property.name} extra top`}
                      fill
                      className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-md border-2 border-amber-300">
                    <Image
                      src={extras[1]}
                      alt={`${property.name} extra bottom`}
                      fill
                      className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                      sizes="25vw"
                    />
                  </div>
                </div>
              )}

              {extraCount >= 3 && (
                // Current desired layout: top + two bottom
                <div className="grid grid-rows-2 gap-2">
                  {/* Top */}
                  <div className="relative overflow-hidden rounded-md border-2 border-amber-300">
                    <Image
                      src={rightTop}
                      alt={`${property.name} top view`}
                      fill
                      className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                      sizes="25vw"
                    />
                  </div>

                  {/* Bottom row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative overflow-hidden rounded-md border-2 border-amber-300">
                      <Image
                        src={rightBottomLeft}
                        alt={`${property.name} bottom left view`}
                        fill
                        className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                        sizes="12vw"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-md border-2 border-amber-300">
                      <Image
                        src={rightBottomRight}
                        alt={`${property.name} bottom right view`}
                        fill
                        className="object-cover hover:brightness-110 transition-all duration-300 cursor-pointer"
                        sizes="12vw"
                      />
                      {showAllPhotosButton && (
                        <div className="absolute inset-0 flex items-end justify-center pb-3">
                          <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow">
                            Show all photos
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>       
        <div className="flex gap-6">
          <InfoBadge icon={<Bed className="w-4 h-4 text-gray-600" />}>
            {property.offers.bed} Bedroom{property.offers.bed !== '1' ? 's' : ''}
          </InfoBadge>
          <InfoBadge icon={<Bath className="w-4 h-4 text-gray-600" />}>
            {property.offers.shower} Bathroom{property.offers.shower !== '1' ? 's' : ''}
          </InfoBadge>
          <InfoBadge icon={<Users className="w-4 h-4 text-gray-600" />}>
            {property.offers.occupants} guest{property.offers.occupants !== '1' ? 's' : ''}
          </InfoBadge>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Top Row - Navigation and Actions */}
        <div className="flex justify-between items-center mb-4 px-4">
          <button
            onClick={onReturn}
            className="flex items-center gap-2 text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Return</span>
          </button>

          <div className="flex items-center gap-3">
            <button onClick={onSave} className="p-2">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={onShare} className="p-2">
              <Share2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-80 mb-4 border-2 border-amber-300">
          <Image
            src={mainImage}
            alt={property.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-lg text-sm">
            1/12
          </div>
        </div>

        {/* Property Info and Details */}
        <div className="px-4">
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            {property.name}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{property.rating}</span>
              <span>({property.reviewCount || 345} reviews)</span>
            </div>
            <span>•</span>
            <span>{property.address.city}, {property.address.country}</span>
            <span>•</span>
            <span className="capitalize">{property.propertyType || 'Mainstream'}</span>
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-4">            
            <div className="flex gap-4 overflow-x-auto max-w-full" style={{ WebkitOverflowScrolling: 'touch' }}>
              <InfoBadge icon={<Bed className="w-4 h-4 text-gray-600" />}>
                {property.offers.bed} Bedroom{property.offers.bed !== '1' ? 's' : ''}
              </InfoBadge>
              <InfoBadge icon={<Bath className="w-4 h-4 text-gray-600" />}>
                {property.offers.shower} Bathroom{property.offers.shower !== '1' ? 's' : ''}
              </InfoBadge>
              <InfoBadge icon={<Users className="w-4 h-4 text-gray-600" />}>
                {property.offers.occupants}-{parseInt(property.offers.occupants) + 2} guests
              </InfoBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailHero;
export type { PropertyDetailHeroProps };

