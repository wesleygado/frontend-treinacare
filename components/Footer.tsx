export default function Footer() {
  return (
    <footer className="py-6 mt-8 border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="flex items-center justify-center">
          Criada com 
          <svg className="w-4 h-4 mx-1 text-[#2b6f71]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18s-6-4.35-6-9.14C4 5.61 6.24 4 8.09 4c1.13 0 2.13.62 2.66 1.57C11.78 4.62 12.78 4 13.91 4 15.76 4 18 5.61 18 8.86 18 13.65 10 18 10 18z"/>
          </svg>
          pela TreinaWeb
        </p>
      </div>
    </footer>
  );
}