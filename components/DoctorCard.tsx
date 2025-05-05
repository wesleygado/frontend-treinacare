import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface DoctorCardProps {
  id: string; 
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
}

export default function DoctorCard({ id, name, specialty, rating, imageUrl }: DoctorCardProps) {
  return (
    <Link href={`/doctors/${id}`} className="block"> 
      <div className="bg-white rounded-3xl p-3 mb-3 relative">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={`Dr. ${name}`}
            width={200}
            height={200}
            className="w-full h-40 object-cover rounded-2xl"
            unoptimized
          />
          <div className="absolute bottom-3 right-2 bg-white rounded-full py-1 px-3 flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="px-4 pt-2 pb-4 text-center mb-3">
          <h3 className="text-h3 mb-1 truncate overflow-hidden whitespace-nowrap">{name}</h3>
          <p className="text-body2">{specialty}</p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
          <button className="bg-accent text-white p-2 rounded-full">
            <ArrowUpRight className="h-11 w-11" />
          </button>
        </div>
      </div>
    </Link>
  );
}
