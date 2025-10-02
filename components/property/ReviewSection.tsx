import { PropertyReview } from '@/components/property/index.const';
import Image from 'next/image';



const ReviewSection: React.FC<{ reviews: PropertyReview[] }> = ({ reviews }) => {  
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={review.userAvatar}
                alt={review.userName}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-bold">{review.userName}</p>
              <p className="text-yellow-500">{review.rating} stars</p>
            </div>
          </div>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;