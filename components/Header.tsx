import React from 'react';
import { Terminal } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-neo-bg text-black shadow-neo-sm">
            <Terminal size={20} />
          </div>
          <span className="text-xl font-bold uppercase tracking-tight text-black">Kulim Co-Work</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#amenities" className="text-sm font-bold uppercase text-gray-600 hover:text-black hover:underline decoration-2 underline-offset-4">Amenities</a>
          <a href="#pricing" className="text-sm font-bold uppercase text-gray-600 hover:text-black hover:underline decoration-2 underline-offset-4">Membership</a>
          <a href="#location" className="text-sm font-bold uppercase text-gray-600 hover:text-black hover:underline decoration-2 underline-offset-4">Location</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 border-2 border-black bg-green-300 px-3 py-1 text-xs font-bold uppercase text-black sm:flex shadow-neo-sm">
            <div className="h-2 w-2 rounded-full bg-black animate-pulse"></div>
            Open Now
          </div>
          <button className="text-sm font-bold uppercase text-black hover:underline decoration-2 underline-offset-4">Log in</button>
        </div>
      </div>
    </header>
  );
};