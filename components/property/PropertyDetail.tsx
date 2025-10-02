import { PropertyProps } from "@/interfaces/index";
import PropertyDetailHero, { PropertyDetailHeroProps } from "@/components/property/PropertyDetailHero";
import PropertyDetailMain from './PropertyDetailComponents';
import { sampleDetailedProperty } from "./index.const";


const sampleProperty: PropertyDetailHeroProps["property"] = {
  name: "Luxury Beachfront Villa",
  address: {
    state: "Lagos",
    city: "Lekki",
    country: "Nigeria",
  },
  rating: 4.8,
  category: ["Villa", "Luxury", "Beachfront"],
  price: 120000,
  offers: {
    bed: "4",
    shower: "3",
    occupants: "6",
  },
  image: "/images/villa-main.png", // replace with a real image in your public folder
  images: [
    "/images/villa-1.png",
    "/images/villa-2.png",
    "/images/villa-3.png",
    "/images/villa-4.png",
    "/images/villa-5.jpg",
  ],
  reviewCount: 128,
  propertyType: "Villa",
  discount: "10%",
};


const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  console.log(property);
  return (
    <div className="container mx-auto p-6">      
      {/* Hero */}
      <PropertyDetailHero
        property={sampleProperty}
        onReturn={() => alert("Return clicked")}
        onSave={() => alert("Save clicked")}
        onShare={() => alert("Share clicked")}
      />
      <PropertyDetailMain property={sampleDetailedProperty} />      
    </div>
  );
};

export default PropertyDetail;