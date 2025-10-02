import { DetailedProperty, PropertyReview, PropertyAmenity, PropertyHost } from '@/components/property/index.const';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Star,
  Mountain,
  Waves,
  ChefHat,
  Users2,
  Sparkles,
  Infinity,
  Zap,
  GlassWater,
  UtensilsCrossed,
  Wifi,
} from 'lucide-react';
import Image from 'next/image';

// Property Detail Body Component
interface PropertyDetailBodyProps {
  property: DetailedProperty;
}

type SectionContent = 'description' | 'amenities' | 'reviews';
type SectionTab = SectionContent | 'host';

const PropertyDetailBody: React.FC<PropertyDetailBodyProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<SectionTab>('description');
  const [pendingSection, setPendingSection] = useState<SectionTab | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const amenitiesRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const tabs: { id: SectionTab; label: string }[] = [
    { id: 'description', label: 'Description' },
    { id: 'amenities', label: 'What we offer' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'host', label: 'About host' },
  ];

  const reviews: PropertyReview[] = property.reviews;
  const amenities: PropertyAmenity[] = property.amenities;
  const spaceDetails = property.spaceDetails;
  const host: PropertyHost = property.host as PropertyHost;

  const getAmenityIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      mountain: <Mountain className="w-5 h-5" />,
      beach: <Waves className="w-5 h-5" />,
      chef: <ChefHat className="w-5 h-5" />,
      butler: <Users2 className="w-5 h-5" />,
      cleaning: <Sparkles className="w-5 h-5" />,
      bartender: <GlassWater className="w-5 h-5" />,
      pool: <Infinity className="w-5 h-5" />,
      hottub: <Zap className="w-5 h-5" />,
      kitchen: <UtensilsCrossed className="w-5 h-5" />,
      wifi: <Wifi className="w-5 h-5" />,
    };
    return icons[iconName] || <div className="w-5 h-5 bg-gray-300 rounded" />;
  };

  // Helper function to check if a string is a valid SectionContent
  const isSectionContent = (value: string | null): value is SectionContent => {
    return value === 'description' || value === 'amenities' || value === 'reviews';
  };

  // Helper function to check if activeTab is a content section
  const isContentSection = (tab: SectionTab): tab is SectionContent => {
    return tab !== 'host';
  };

  // Memoized callback to avoid recreating observer on every render
  const intersectionCallback = useCallback<IntersectionObserverCallback>((entries) => {
    // Only process if we're currently viewing a content section (not host)
    if (!isContentSection(activeTab)) return;

    let bestSection: SectionContent | null = null;
    let bestRatio = 0;

    entries.forEach((entry) => {
      const target = entry.target as HTMLElement;
      const sectionId = target.getAttribute('data-section-id');
      
      if (isSectionContent(sectionId)) {
        const ratio = entry.intersectionRatio;
        if (ratio > bestRatio) {
          bestSection = sectionId;
          bestRatio = ratio;
        }
      }
    });

    // Only update if we found a different section with significant visibility
    if (bestSection && bestSection !== activeTab && bestRatio > 0.4) {
      setActiveTab(bestSection);
    }
  }, [activeTab]);

  // Intersection observer: update active section for description/amenities/reviews when scrolling
  useEffect(() => {
    // Only set up observer for content sections, not host section
    if (!isContentSection(activeTab)) return;

    const sections = [
      { ref: descriptionRef },
      { ref: amenitiesRef },
      { ref: reviewsRef },
    ];

    // Clean up previous observer
    observerRef.current?.disconnect();

    // Create new observer
    observerRef.current = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: '0px',
      threshold: [0.4, 0.6, 0.8, 1.0],
    });

    // Observe all sections
    sections.forEach((section) => {
      if (section.ref.current) {
        observerRef.current?.observe(section.ref.current);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [activeTab, intersectionCallback]);

  const scrollToSection = (id: SectionTab) => {
    if (id === 'host') {
      setActiveTab('host');
      setPendingSection(null);
      return;
    }
    
    // For content sections, set active tab and prepare for scrolling
    setActiveTab(id);
    setPendingSection(id);
  };

  // Deferred scroll when switching back from host or when section becomes available
  useEffect(() => {
    if (!pendingSection || activeTab === 'host') return;

    const refMap: Record<SectionContent, React.RefObject<HTMLDivElement | null>> = {
      description: descriptionRef,
      amenities: amenitiesRef,
      reviews: reviewsRef,
    };

    // Only scroll if pendingSection is a content section
    if (isContentSection(pendingSection)) {
      const ref = refMap[pendingSection];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPendingSection(null);
      }
    }
  }, [activeTab, pendingSection]);

  const renderDescription = () => (
    <div className="space-y-6">
      <div ref={descriptionRef} data-section-id="description">
        <p className="text-gray-700 leading-relaxed mb-4">
          {showFullDescription ? property.description.full : property.description.short}
        </p>
        {!showFullDescription && (
          <button
            onClick={() => setShowFullDescription(true)}
            className="text-[#34967C] font-medium hover:underline flex items-center gap-1"
          >
            Read more →
          </button>
        )}
      </div>

      <hr className="border-gray-200" />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">The space</h3>
        <div className="mb-3">
          <h4 className="font-medium text-gray-900 mb-2">
            {spaceDetails.bedrooms} & {spaceDetails.bathrooms}
          </h4>
          <ul className="text-gray-700 space-y-1">
            {spaceDetails.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setShowFullDescription((v) => !v)}
          className="text-[#34967C] font-medium hover:underline flex items-center gap-1"
        >
          Read more →
        </button>
      </div>
    </div>
  );

  const renderAmenities = () => (
    <div ref={amenitiesRef} data-section-id="amenities">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">What this place offer</h3>
      <p className="text-gray-600 mb-6">
        Each home is fully equipped to meet your needs, with ample space and privacy.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3 py-2">
            {getAmenityIcon(amenity.icon)}
            <span className="text-gray-700">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReviews = () => (
    <div ref={reviewsRef} data-section-id="reviews">
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        <span className="text-xl font-semibold">{property.rating}</span>
        <span className="text-gray-600">({property.reviewCount} reviews)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.slice(0, 4).map((review) => (
          <div key={review.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden relative">
                <Image
                  src={review.userAvatar}
                  alt={review.userName}
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority={false}
                />
              </div>

              <div>
                <div className="font-medium text-gray-900">{review.userName}</div>
                <div className="text-sm text-gray-600">
                  {review.yearsOnPlatform} years on ALX
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {review.date} • {review.tripType}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHost = () => (
    <div>
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden relative">
          <Image
            src={host.avatar}
            alt={host.name}
            fill
            className="object-cover"
            sizes="64px"
            priority={false}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            Hosted by {host.name}
          </h3>
          <p className="text-gray-600">{host.yearsHosting} years hosting</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-lg font-semibold text-gray-900">
            {host.responseRate}%
          </div>
          <div className="text-sm text-gray-600">Response rate</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-900">
            {host.responseTime}
          </div>
          <div className="text-sm text-gray-600">Response time</div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">{host.description}</p>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
        <p className="text-gray-700">{host.languages.join(', ')}</p>
      </div>

      <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
        Contact Host
      </button>
    </div>
  );

  return (
    <div>
      {/* Tabs Header */}
      <div className="border-t border-b border-gray-200 mb-6 sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between py-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`pb-2 border-b-2 font-medium transition-colors ${
                    isActive
                      ? 'border-[#34967C] text-[#34967C]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="text-sm text-gray-600">Published {property.publishedDate}</div>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'host' ? (
          renderHost()
        ) : (
          <div className="space-y-10">
            {renderDescription()}
            {renderAmenities()}
            {renderReviews()}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailBody;
