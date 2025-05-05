import Link from 'next/link';
import React from 'react';

interface Doctor  {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
};

interface AppointmentProps  {
  id: string;
  doctor: Doctor;
  date: string;
  time: string;
  status: 'aberto' | 'finalizado';
};

export default function AppointmentCard({ id, doctor, date, time, status }: AppointmentProps) {
  return (
    <div key={id} className="flex bg-white rounded-lg p-3 mb-3 shadow-sm">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <Link href={`/doctors/${doctor.id}`}>
          <img 
            src={doctor.imageUrl} 
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h3 className="font-medium">
          <Link href={`/doctors/${doctor.id}`}>{doctor.name}</Link>
        </h3>
        <p className="text-sm text-gray-600">
          {doctor.specialty}
        </p>
        <p className="text-sm text-gray-600">
          {date} às {time}
        </p>
      </div>
      <div className="flex items-center">
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === "aberto" 
            ? "bg-green-100 text-green-800" 
            : "bg-gray-100 text-gray-800"
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
}