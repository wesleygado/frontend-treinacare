import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <input
        type="text"
        placeholder="Start typing"
        className="w-full bg-white py-4 pl-12 pr-4 rounded-full text-muted-foreground"
      />
    </div>
  );
}
