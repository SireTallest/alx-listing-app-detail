// Extended Property types with detailed information
export interface PropertyReview {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  tripType: string;
  yearsOnPlatform: number;
  review: string;
}

export interface PropertyAmenity {
  icon: string;
  name: string;
}

export interface PropertyHost {
  name: string;
  avatar: string;
  yearsHosting: number;
  responseRate: number;
  responseTime: string;
  description: string;
  languages: string[];
}

export interface DetailedProperty {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  reviewCount: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  images?: string[];
  publishedDate: string;
  description: {
    short: string;
    full: string;
  };
  spaceDetails: {
    bedrooms: string;
    bathrooms: string;
    features: string[];
  };
  amenities: PropertyAmenity[];
  reviews: PropertyReview[];
  host: PropertyHost;
  weeklyDiscount?: number;
  serviceFee: number;
}



export const sampleDetailedProperty: DetailedProperty = {
  name: "Villa Arrecife Beach House",
  address: {
    state: "Bali",
    city: "Sidemen",
    country: "Indonesia"
  },
  rating: 4.76,
  reviewCount: 345,
  category: ["Beachfront", "Luxury", "Pool"],
  price: 2500,
  offers: {
    bed: "4",
    shower: "2", 
    occupants: "2-4"
  },
  image: "/villa-main.jpg",
  publishedDate: "July 01, 2024",
  description: {
    short: "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you're ready to chill with friends, the beach house pool awaits.",
    full: "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you're ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views. This luxury beachfront villa offers an unparalleled experience with modern amenities and breathtaking natural beauty. The property features expansive outdoor spaces, private beach access, and world-class facilities designed for relaxation and entertainment."
  },
  spaceDetails: {
    bedrooms: "BEDROOM & BATHROOM",
    bathrooms: "2 Bathroom",
    features: [
      "Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower,",
      "Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view"
    ]
  },
  amenities: [
    { icon: 'mountain', name: 'Mountain view' },
    { icon: 'beach', name: 'Shared beach access' },
    { icon: 'chef', name: 'Chef' },
    { icon: 'butler', name: 'Butler' },
    { icon: 'cleaning', name: 'Cleaning available during stay' },
    { icon: 'bartender', name: 'Bartender' },
    { icon: 'pool', name: 'Pool - infinity' },
    { icon: 'hottub', name: 'Hot tub' },
    { icon: 'kitchen', name: 'Kitchen' },
    { icon: 'wifi', name: 'Wifi' }
  ],
  reviews: [
    {
      id: "1",
      userName: "Kerry",
      userAvatar: "/user1.jpg",
      rating: 5,
      date: "March 2024",
      tripType: "Family trip",
      yearsOnPlatform: 3,
      review: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking."
    },
    {
      id: "2",
      userName: "Pooja",
      userAvatar: "/user2.jpg",
      rating: 5,
      date: "March 2024",
      tripType: "Family trip",
      yearsOnPlatform: 1,
      review: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
    },
    {
      id: "3",
      userName: "Cindy & Ben",
      userAvatar: "/user3.jpg",
      rating: 5,
      date: "August 2023",
      tripType: "Family trip",
      yearsOnPlatform: 1,
      review: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking."
    },
    {
      id: "4",
      userName: "Marnie",
      userAvatar: "/user4.jpg",
      rating: 5,
      date: "January 2023",
      tripType: "Family trip",
      yearsOnPlatform: 5,
      review: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures."
    }
  ],
  host: {
    name: "Sarah",
    avatar: "/host.jpg",
    yearsHosting: 5,
    responseRate: 100,
    responseTime: "Within an hour",
    description: "I'm a travel enthusiast who loves sharing beautiful spaces with guests. I've been hosting for over 5 years and take pride in providing exceptional experiences.",
    languages: ["English", "Spanish", "French"]
  },
  weeklyDiscount: 25,
  serviceFee: 33
};