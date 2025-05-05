"use client";

import { useState } from "react";
import Header from "../../components/Header";
import AppointmentCard from "../../components/AppointmentCard";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Compartilhamos os dados dos médicos com a página principal
// Na prática, isso deveria vir de uma API ou contexto central
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
];

// Criamos uma lista mais completa de agendamentos para a página dedicada
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
  },
  { 
    id: "a3", 
    doctor: doctors[1],
    date: "10 de Maio", 
    time: "09:00", 
    status: "aberto",
    specialty: doctors[1].specialty
  },
  { 
    id: "a4", 
    doctor: doctors[3],
    date: "05 de Maio", 
    time: "16:45", 
    status: "aberto",
    specialty: doctors[3].specialty
  },
  { 
    id: "a5", 
    doctor: doctors[0],
    date: "30 de Março", 
    time: "11:15", 
    status: "finalizado",
    specialty: doctors[0].specialty
  },
  { 
    id: "a6", 
    doctor: doctors[2],
    date: "28 de Abril", 
    time: "08:30", 
    status: "finalizado",
    specialty: doctors[2].specialty
  },
  { 
    id: "a7", 
    doctor: doctors[1],
    date: "20 de Maio", 
    time: "13:45", 
    status: "aberto",
    specialty: doctors[1].specialty
  }
];

type FilterStatus = "todos" | "aberto" | "finalizado";

export default function AppointmentsPage() {
  // Estado para filtrar os agendamentos por status
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("todos");
  
  // Filtragem dos agendamentos com base no status selecionado
  const filteredAppointments = filterStatus === "todos" 
    ? appointments 
    : appointments.filter(appointment => appointment.status === filterStatus);
  
  return (
    <div className="bg-background min-h-screen py-6">
      <Header />
      
      <div className="flex items-center gap-2 mb-4 mt-2">
        <Link href="/" className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-xl font-semibold">Todas as Consultas</h1>
      </div>
            
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 mb-4">
        <h2 className="text-lg font-medium mb-3 sm:mb-0">Consultas ({filteredAppointments.length})</h2>
        <div className="flex gap-2">
          <Button 
            onClick={() => setFilterStatus("todos")} 
            variant={filterStatus === "todos" ? "default" : "outline"}
            size="sm"
            className={filterStatus === "todos" ? "bg-accent text-white hover:text-white" : "hover:text-white"}
          >
            Todas
          </Button>
          <Button 
            onClick={() => setFilterStatus("aberto")} 
            variant={filterStatus === "aberto" ? "default" : "outline"}
            size="sm"
            className={filterStatus === "aberto" ? "bg-accent text-white hover:text-white" : "hover:text-white"}
          >
            Abertas
          </Button>
          <Button 
            onClick={() => setFilterStatus("finalizado")} 
            variant={filterStatus === "finalizado" ? "default" : "outline"}
            size="sm"
            className={filterStatus === "finalizado" ? "bg-gray-600 text-white hover:text-white" : "hover:text-white"}
          >
            Finalizadas
          </Button>
        </div>
      </div>
      
      <div className="mt-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              id={appointment.id}
              doctor={appointment.doctor}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status as 'aberto' | 'finalizado'}
            />
          ))
        ) : (
          <div className="text-center py-10 col-span-full">
            <p className="text-gray-500">Nenhuma consulta encontrada com o filtro selecionado.</p>
          </div>
        )}
      </div>
    </div>
  );
}