"use client";

import { Menu, Home, Calendar, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  
  const userData = {
    name: "Marcos Silva",
    email: "marcos.silva@example.com",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80"
  };

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Calendar, label: "Meus Agendamentos", href: "/appointments" },
  ];

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-h1 font-extrabold select-none drop-shadow-sm">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow bg-[#e6f7f1] text-[#2b6f71] font-bold text-lg tracking-tight" style={{fontFamily: 'Syne, sans-serif'}}>
          <a href="/">TreinaCare</a>
          <svg className="w-5 h-5 ml-1 text-[#2b6f71]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18s-6-4.35-6-9.14C4 5.61 6.24 4 8.09 4c1.13 0 2.13.62 2.66 1.57C11.78 4.62 12.78 4 13.91 4 15.76 4 18 5.61 18 8.86 18 13.65 10 18 10 18z"/></svg>
        </span>
      </h1>
       <div className="bg-white p-3 rounded-full">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="flex items-center justify-center">
              <Menu className="h-6 w-6 text-primary" />
            </button>
          </SheetTrigger>
          <SheetContent className="border-l-accent">
            <SheetHeader>
              <SheetTitle className="text-primary">Menu</SheetTitle>
            </SheetHeader>
            
            <div className="flex items-center gap-4 mt-6 border-b border-border pb-6">
              <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={userData.avatar}
                  alt="Foto do usuário"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-full"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">{userData.name}</span>
                <span className="text-sm text-muted-foreground">{userData.email}</span>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col gap-5">
              {menuItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className="flex items-center gap-3 text-lg text-primary hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  {item.label}
                </Link>
              ))}
              <button 
                className="flex items-center gap-3 text-lg text-red-500 hover:text-red-600 transition-colors mt-auto"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <LogOut className="h-5 w-5" />
                Sair
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
