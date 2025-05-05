import { Badge } from "./ui/badge";

interface SpecialtyFilterProps {
  specialties: string[];
  onFilterChange: (specialty: string | null) => void;
  selectedSpecialty: string | null;
}

export default function SpecialtyFilter({ 
  specialties, 
  onFilterChange, 
  selectedSpecialty 
}: SpecialtyFilterProps) {
  return (
    <div className="mb-4 overflow-hidden">
      <div className="flex overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4 sm:flex sm:flex-wrap sm:justify-center">
        <div className="inline-flex gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
          <Badge
            onClick={() => onFilterChange(null)}
            className={`whitespace-nowrap cursor-pointer py-2 px-4 rounded-full ${
              !selectedSpecialty 
              ? 'bg-accent text-white hover:bg-accent/90 hover:text-white border-0' 
              : 'bg-[#e6f7f1] border-0 text-[#1c7261] hover:bg-[#d1f0e6]'
            }`}
          >
            Todas especialidades
          </Badge>
          
          {specialties.map((specialty) => (
            <Badge
              key={specialty}
              onClick={() => onFilterChange(specialty)}
              className={`whitespace-nowrap cursor-pointer py-2 px-4 rounded-full ${
                selectedSpecialty === specialty 
                ? 'bg-accent text-white hover:bg-accent/90 hover:text-white border-0' 
                : 'bg-[#e6f7f1] border-0 text-[#1c7261] hover:bg-[#d1f0e6]'
              } sm:mb-2`}
            >
              {specialty}
            </Badge>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        /* Esconde a scrollbar, mas mantém a funcionalidade */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Em telas maiores, transformamos em um grid de filtros */
        @media (min-width: 640px) {
          .scrollbar-hide {
            overflow-x: visible;
          }
        }
      `}</style>
    </div>
  );
}