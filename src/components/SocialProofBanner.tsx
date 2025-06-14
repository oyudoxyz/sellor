'use client';
import { BadgeCheck, Users, Star } from 'lucide-react';

export default function SocialProofBanner() {
  return (
    <div className="w-full bg-white py-4 flex flex-col md:flex-row items-center justify-center gap-4 border-t border-b border-gray-200 font-manrope">
      <div className="flex items-center gap-2 text-black/80 text-sm font-medium">
        <BadgeCheck
          size={18}
          className="text-green-500"
        />
        Trusted by 1,200+ sales teams
      </div>
      <div className="flex items-center gap-2 text-black/80 text-sm font-medium">
        <Users
          size={18}
          className="text-blue-500"
        />
        15,000+ reps onboarded
      </div>
      <div className="flex items-center gap-2 text-black/80 text-sm font-medium">
        <Star
          size={18}
          className="text-yellow-500"
        />
        4.9/5 average rating
      </div>
    </div>
  );
}
