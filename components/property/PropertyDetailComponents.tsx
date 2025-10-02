import { DetailedProperty } from '@/components/property/index.const';
import BookingSection from './BookingSection';
import PropertyDetailBody from './PropertyDetailBody';



// Main Layout Component
interface PropertyDetailMainProps {
  property: DetailedProperty;
}

const PropertyDetailMain: React.FC<PropertyDetailMainProps> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property Detail Body - 2/3 width */}
        <div className="lg:col-span-2">
          <PropertyDetailBody property={property} />
        </div>
        
        {/* Review Section - 1/3 width */}
        <div className="lg:col-span-1">
          <BookingSection property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailMain;