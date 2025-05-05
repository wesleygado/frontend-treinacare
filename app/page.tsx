"use client";

import Header from "../components/Header";
import SpecialtyFilter from "../components/SpecialtyFilter";
import SectionHeader from "../components/SectionHeader";
import DoctorCard from "../components/DoctorCard";
import AppointmentCard from "../components/AppointmentCard";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

const doctors = [
  { 
    id: "1", 
    name: "Dra. Márcia Santos", 
    specialty: "Neurologista", 
    rating: 5.0, 
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "2", 
    name: "Dr. Carlos Lima", 
    specialty: "Cardiologista", 
    rating: 4.9, 
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "3", 
    name: "Dra. Ana Costa", 
    specialty: "Dermatologista", 
    rating: 4.8, 
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "4", 
    name: "Dr. Pedro Alves", 
    specialty: "Ortopedista", 
    rating: 5.0, 
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "5", 
    name: "Dra. Juliana Mendes", 
    specialty: "Pediatra", 
    rating: 4.9, 
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "6", 
    name: "Dr. Roberto Silva", 
    specialty: "Oftalmologista", 
    rating: 4.7, 
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "7", 
    name: "Dra. Camila Rocha", 
    specialty: "Ginecologista", 
    rating: 4.8, 
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "8", 
    name: "Dr. Marcelo Nunes", 
    specialty: "Psiquiatra", 
    rating: 4.9, 
    imageUrl: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "9", 
    name: "Dra. Fernanda Lima", 
    specialty: "Endocrinologista", 
    rating: 4.7, 
    imageUrl: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "10", 
    name: "Dr. Eduardo Santos", 
    specialty: "Urologista", 
    rating: 4.8, 
    imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "11", 
    name: "Dra. Renata Oliveira", 
    specialty: "Nutricionista", 
    rating: 4.6, 
    imageUrl: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "12", 
    name: "Dr. Gustavo Pereira", 
    specialty: "Fisioterapeuta", 
    rating: 4.9, 
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "13", 
    name: "Dra. Bianca Castro", 
    specialty: "Otorrinolaringologista", 
    rating: 4.8, 
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "14", 
    name: "Dr. Ricardo Gomes", 
    specialty: "Pneumologista", 
    rating: 4.7, 
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "15", 
    name: "Dra. Paula Martins", 
    specialty: "Geriatra", 
    rating: 5.0, 
    imageUrl: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "16", 
    name: "Dr. Felipe Sousa", 
    specialty: "Infectologista", 
    rating: 4.8, 
    imageUrl: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "17", 
    name: "Dra. Larissa Campos", 
    specialty: "Pneumologista", 
    rating: 4.9, 
    imageUrl: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "18", 
    name: "Dr. Alexandre Ferreira", 
    specialty: "Anestesista", 
    rating: 4.7, 
    imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "19", 
    name: "Dra. Carolina Dias", 
    specialty: "Hematologista", 
    rating: 4.8, 
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  { 
    id: "20", 
    name: "Dr. Rafael Moura", 
    specialty: "Oncologista", 
    rating: 5.0, 
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
];

const appointments = [
  { 
    id: "a1", 
    doctor: doctors[0],
    date: "15 de Maio", 
    time: "14:00", 
    status: "aberto",
    specialty: doctors[0].specialty
  },
  { 
    id: "a2", 
    doctor: doctors[2],
    date: "22 de Abril", 
    time: "10:30", 
    status: "finalizado",
    specialty: doctors[2].specialty
  }
];

export default function Home() {
  const [visibleDoctorsCount, setVisibleDoctorsCount] = useState(4);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Detect if we're on desktop view
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Check on initial load
    checkIfDesktop();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfDesktop);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);
  
  // Extract unique specialties from doctors array
  const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));
  
  const handleFilterChange = (specialty: string | null) => {
    setSelectedSpecialty(specialty);
    // Reset visible count when changing filter
    setVisibleDoctorsCount(4);
  };
  
  // Filter doctors based on selected specialty
  const filteredDoctors = selectedSpecialty 
    ? doctors.filter(doctor => doctor.specialty === selectedSpecialty)
    : doctors;
  
  const visibleDoctors = filteredDoctors.slice(0, visibleDoctorsCount);
  const hasMoreDoctors = visibleDoctorsCount < filteredDoctors.length;

  const loadMoreDoctors = () => {
    // Sempre carregar 4 médicos por vez, independente do tamanho da tela
    const incrementAmount = 4;
    const newCount = Math.min(visibleDoctorsCount + incrementAmount, filteredDoctors.length);
    setVisibleDoctorsCount(newCount);
  };

  return (
    <div className="bg-background min-h-screen py-6">
      <Header />

      <SectionHeader title="Consultas Agendadas" linkText="Ver todas" linkHref="/appointments" />

      <div className="mt-4 mb-8 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            id={appointment.id}
            doctor={appointment.doctor}
            date={appointment.date}
            time={appointment.time}
            status={appointment.status as 'aberto' | 'finalizado'}
          />
        ))}
      </div>

      <SectionHeader title="Médicos disponíveis" linkText="" linkHref="#"/>

      <SpecialtyFilter 
        specialties={specialties}
        onFilterChange={handleFilterChange}
        selectedSpecialty={selectedSpecialty}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"> 
        {visibleDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id} 
            id={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            rating={doctor.rating}
            imageUrl={doctor.imageUrl}
          />
        ))}
      </div>
      
      {hasMoreDoctors && (
        <div className="mt-8 flex justify-center">
          <Button 
            onClick={loadMoreDoctors} 
            variant="outline" 
            className="bg-accent text-white hover:bg-accent/80 hover:text-white"
          >
            Carregar mais médicos
          </Button>
        </div>
      )}
    </div>
  );
}
