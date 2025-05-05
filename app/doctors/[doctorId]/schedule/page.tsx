"use client";

import { use, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Header from "@/components/Header";

// Helper function to generate time slots
const generateTimeSlots = (startHour: number, endHour: number, intervalMinutes: number): string[] => {
  const slots: string[] = [];
  const startDate = new Date();
  startDate.setHours(startHour, 0, 0, 0);

  const endDate = new Date();
  endDate.setHours(endHour, 0, 0, 0);

  while (startDate < endDate) {
    slots.push(format(startDate, "HH:mm"));
    startDate.setMinutes(startDate.getMinutes() + intervalMinutes);
  }
  return slots;
};

interface SchedulePageProps {
  params: Promise<{ doctorId: string }>;
}

export default function SchedulePage({ params }: SchedulePageProps) {
  const { doctorId } = use(params);
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const timeSlots = generateTimeSlots(9, 18, 30);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(undefined);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleScheduleClick = () => {
    if (selectedDate && selectedTime) {
      setIsAlertOpen(true);
    }
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    router.push('/appointments');
  };

  return (
    <div className="bg-background min-h-screen p-4">
      <Header />

      <div className="flex items-center mb-6 mt-4">
        <Link href={`/doctors/${doctorId}`} className="mr-4">
          <ChevronLeft className="h-6 w-6 text-primary" />
        </Link>
        <h1 className="text-xl font-bold text-center flex-grow text-primary">Agendar Consulta</h1>
        <div className="w-6"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Calendar Column */}
          <div className="md:w-auto mb-6 flex justify-center md:justify-start md:pr-8">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              locale={ptBR}
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              classNames={{
                root: "border-none p-0",
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium text-primary",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                  "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-primary"
                ),
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-transparent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: cn(
                  "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-full border border-transparent hover:border-accent hover:bg-accent/10",
                  "text-primary"
                ),
                day_selected:
                  "bg-accent text-white hover:bg-accent/90 focus:bg-accent focus:text-white rounded-full border-accent",
                day_today: "bg-accent/20 text-accent-foreground rounded-full",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-white",
                day_hidden: "invisible",
              }}
            />
          </div>

          {/* Time Slots and Summary Column */}
          <div className="flex-1">
            {selectedDate && (
              <div className="mb-6 bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-3 text-primary text-center">
                  Horários disponíveis para {format(selectedDate, "PPP", { locale: ptBR })}
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <Badge
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={cn(
                        "cursor-pointer justify-center py-2 text-sm font-medium rounded-md border transition-colors",
                        selectedTime === time
                          ? "bg-accent text-white border-accent hover:bg-accent/90"
                          : "bg-transparent text-accent border-accent hover:bg-accent/10"
                      )}
                    >
                      {time}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {selectedDate && selectedTime && (
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <h3 className="font-semibold mb-2 text-primary">Resumo do Agendamento</h3>
                <p className="text-muted-foreground text-sm">
                  Data: {format(selectedDate, "PPP", { locale: ptBR })}
                </p>
                <p className="text-muted-foreground text-sm">
                  Horário: {selectedTime}
                </p>
                <Button
                  className="w-full mt-4 bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors h-auto"
                  onClick={handleScheduleClick}
                >
                  Agendar
                </Button>
              </div>
            )}

            {!selectedDate && (
              <div className="hidden md:block bg-white rounded-lg shadow-sm p-6 text-center">
                <p className="text-muted-foreground">Selecione uma data para ver os horários disponíveis</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-primary">Agendamento Confirmado!</AlertDialogTitle>
            <AlertDialogDescription>
              Sua consulta foi agendada com sucesso para{" "}
              {selectedDate && format(selectedDate, "PPP", { locale: ptBR })} às {selectedTime}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={handleAlertClose}
              className="bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}