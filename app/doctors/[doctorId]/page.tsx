import Image from 'next/image';
import { Star, Phone, Mail, MapPin, Clock, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button'; // Import Button

// Dados de médicos com imagens reais do Unsplash
const doctors = [
  { 
    id: "1", 
    name: "Dra. Márcia Santos", 
    specialty: "Neurologista", 
    rating: 5.0, 
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    bio: "Dra. Márcia é especialista em distúrbios neurológicos, com mais de 10 anos de experiência.", 
    location: "Rua Exemplo, 123, São Paulo", 
    phone: "(11) 99999-1111", 
    email: "marcia.santos@email.com", 
    hours: "Seg-Sex: 09:00 - 18:00" 
  },
  { 
    id: "2", 
    name: "Dr. Carlos Lima", 
    specialty: "Cardiologista", 
    rating: 4.9, 
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    bio: "Dr. Carlos dedica-se ao tratamento de doenças cardíacas, oferecendo cuidados preventivos e terapêuticos.", 
    location: "Av. Principal, 456, Rio de Janeiro", 
    phone: "(21) 99999-2222", 
    email: "carlos.lima@email.com", 
    hours: "Seg-Qui: 08:00 - 17:00" 
  },
  { 
    id: "3", 
    name: "Dra. Ana Costa", 
    specialty: "Dermatologista", 
    rating: 4.8, 
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    bio: "Dra. Ana é especialista em cuidados com a pele, tratando desde acne até condições mais complexas.", 
    location: "Praça Central, 789, Belo Horizonte", 
    phone: "(31) 99999-3333", 
    email: "ana.costa@email.com", 
    hours: "Ter-Sab: 10:00 - 19:00" 
  },
  { 
    id: "4", 
    name: "Dr. Pedro Alves", 
    specialty: "Ortopedista", 
    rating: 5.0, 
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    bio: "Dr. Pedro foca em lesões musculoesqueléticas e reabilitação, ajudando pacientes a recuperar a mobilidade.", 
    location: "Rua Secundária, 101, Curitiba", 
    phone: "(41) 99999-4444", 
    email: "pedro.alves@email.com", 
    hours: "Seg-Sex: 08:30 - 17:30" 
  },
];

interface DoctorProfilePageProps {
  params: {
    doctorId: string;
  };
}

export default async function DoctorProfilePage({ params }: DoctorProfilePageProps) {
  const { doctorId } = await params;
  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return <div>Médico não encontrado.</div>;
  }

  return (
    <div className="bg-background min-h-screen py-4">
      <Header />

      <div className="flex items-center mb-6 mt-4">
        <Link href="/" className="mr-4">
          <ChevronLeft className="h-6 w-6 text-primary" />
        </Link>
        <h1 className="text-h1 text-center flex-grow">Perfil do Médico</h1>
        <div className="w-6"></div>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-4 mb-6 flex md:flex-col items-center md:items-center space-x-4 md:space-x-0 md:space-y-4">
            <div className="h-16 w-16 md:h-32 md:w-32 flex-shrink-0 rounded-full overflow-hidden">
              <Image
                src={doctor.imageUrl}
                alt={`Foto de ${doctor.name}`}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="md:text-center">
              <h2 className="text-h2">{doctor.name}</h2>
              <p className="text-body2">{doctor.specialty}</p>
              <div className="flex items-center mt-1 md:justify-center">
                <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                <span className="font-medium">{doctor.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 mb-6 space-y-3 md:mb-0">
            <h3 className="text-h3 mb-2">Contato e Localização</h3>
            <div className="flex items-center text-body2">
              <MapPin className="h-4 w-4 mr-2 text-accent" />
              <span>{doctor.location}</span>
            </div>
            <div className="flex items-center text-body2">
              <Phone className="h-4 w-4 mr-2 text-accent" />
              <span>{doctor.phone}</span>
            </div>
            <div className="flex items-center text-body2">
              <Mail className="h-4 w-4 mr-2 text-accent" />
              <span>{doctor.email}</span>
            </div>
            <div className="flex items-center text-body2">
              <Clock className="h-4 w-4 mr-2 text-accent" />
              <span>{doctor.hours}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h3 className="text-h3 mb-2">Sobre</h3>
            <p className="text-body1">{doctor.bio}</p>
          </div>

          <Link href={`/doctors/${doctorId}/schedule`} passHref>
            <Button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors h-auto">
              Agendar Consulta
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
