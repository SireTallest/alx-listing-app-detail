
// import React, { useState } from 'react';
// import { Calendar } from 'lucide-react';
// import { DetailedProperty } from '@/components/property/index.const';

// // Booking Section Component
// interface BookingSectionProps {
//   property: DetailedProperty;
// }

// const BookingSection: React.FC<BookingSectionProps> = ({ property }) => {
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [nights, setNights] = useState(7);

//   const baseTotal = property.price * nights;
//   const weeklyDiscount = property.weeklyDiscount ? (baseTotal * property.weeklyDiscount / 100) : 0;
//   const serviceFee = property.serviceFee;
//   const total = baseTotal - weeklyDiscount + serviceFee;

//   return (
//     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-6 h-fit">
//       <div className="mb-6">
//         <div className="text-2xl font-bold text-gray-900">
//           ${property.price.toLocaleString()}
//           <span className="text-base font-normal text-gray-600">/night</span>
//         </div>
//       </div>

//       <div className="space-y-4 mb-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Check in</label>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="DD/MM/YY"
//               value={checkIn}
//               onChange={(e) => setCheckIn(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34967C] focus:border-transparent"
//             />
//             <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Check out</label>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="DD/MM/YY"
//               value={checkOut}
//               onChange={(e) => setCheckOut(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34967C] focus:border-transparent"
//             />
//             <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       <div className="space-y-3 mb-6 text-sm">
//         <div className="flex justify-between">
//           <span className="text-gray-600">${property.price} x {nights} nights</span>
//           <span className="text-gray-900">${baseTotal.toLocaleString()}</span>
//         </div>
//         {weeklyDiscount > 0 && (
//           <div className="flex justify-between">
//             <span className="text-gray-600">Weekly discounts</span>
//             <span className="text-green-600">-${weeklyDiscount.toLocaleString()}</span>
//           </div>
//         )}
//         <div className="flex justify-between">
//           <span className="text-gray-600">Service fee</span>
//           <span className="text-gray-900">${serviceFee}</span>
//         </div>
//         <hr className="my-3" />
//         <div className="flex justify-between text-base font-semibold">
//           <span>Total payment</span>
//           <span className="text-[#34967C]">${total.toLocaleString()}</span>
//         </div>
//       </div>

//       <button className="w-full bg-[#34967C] text-white py-3 rounded-lg font-medium hover:bg-[#2d7a63] transition-colors">
//         Reserve now
//       </button>
//     </div>
//   );
// };

// export default BookingSection;

import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { DetailedProperty } from '@/components/property/index.const';

// Booking Section Component
interface BookingSectionProps {
  property: DetailedProperty;
}

const BookingSection: React.FC<BookingSectionProps> = ({ property }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const nights = 7; // fixed for now

  const baseTotal = property.price * nights;
  const weeklyDiscount = property.weeklyDiscount
    ? (baseTotal * property.weeklyDiscount) / 100
    : 0;
  const serviceFee = property.serviceFee;
  const total = baseTotal - weeklyDiscount + serviceFee;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-6 h-fit">
      <div className="mb-6">
        <div className="text-2xl font-bold text-gray-900">
          ${property.price.toLocaleString()}
          <span className="text-base font-normal text-gray-600">/night</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check in</label>
          <div className="relative">
            <input
              type="text"
              placeholder="DD/MM/YY"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34967C] focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check out</label>
          <div className="relative">
            <input
              type="text"
              placeholder="DD/MM/YY"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34967C] focus:border-transparent"
            />
            <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">
            ${property.price.toLocaleString()} x {nights} nights
          </span>
          <span className="text-gray-900">${baseTotal.toLocaleString()}</span>
        </div>
        {weeklyDiscount > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Weekly discounts</span>
            <span className="text-green-600">-${weeklyDiscount.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-600">Service fee</span>
          <span className="text-gray-900">${serviceFee.toLocaleString()}</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between text-base font-semibold">
          <span>Total payment</span>
          <span className="text-[#34967C]">${total.toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full bg-[#34967C] text-white py-3 rounded-lg font-medium hover:bg-[#2d7a63] transition-colors">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
