import React from 'react';
import { Terminal } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-brand-900 text-white">
            <Terminal size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-brand-900">Kulim Co-Work</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#amenities" className="text-sm font-medium text-gray-600 hover:text-brand-900">Amenities</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-brand-900">Membership</a>
          <a href="#location" className="text-sm font-medium text-gray-600 hover:text-brand-900">Location</a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden text-xs font-medium text-green-600 sm:inline-block">● Open Now</span>
          <button className="text-sm font-semibold text-brand-900 hover:underline">Log in</button>
        </div>
      </div>
    </header>
  );
};