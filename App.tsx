import React, { useState } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { ChatBot } from './components/ChatBot';
import { ProposalModal } from './components/ProposalModal';
import { Wifi, Coffee, Moon, Clock, MapPin, CheckCircle2, Zap } from 'lucide-react';

export default function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neo-offwhite text-black selection:bg-neo-bg selection:text-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b-2 border-black bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center border-2 border-black bg-neo-accent px-4 py-1 text-sm font-bold uppercase text-white shadow-neo mb-8 rotate-[-2deg]">
              <Zap size={16} className="mr-2 fill-current" />
              Live in Kulim
            </div>
            <h1 className="mx-auto max-w-5xl text-5xl font-black uppercase tracking-tight sm:text-7xl mb-6">
              Boring weekend? <br/>
              <span className="bg-neo-bg px-2 shadow-neo-sm">Come cowork.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl font-medium text-gray-600 leading-relaxed mb-10 font-mono">
              We’re opening up our office space. Bring your laptop. We’ve got the AC, the WiFi, and the vibes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                GET MEMBERSHIP
              </Button>
              <Button variant="secondary" size="lg" onClick={() => window.location.href = '#location'}>
                BOOK A TOUR
              </Button>
            </div>
          </div>
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </section>

        {/* Features / Amenities */}
        <section id="amenities" className="py-24 bg-neo-bg border-b-2 border-black">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black uppercase text-black border-2 border-black bg-white inline-block px-4 py-2 shadow-neo">Focus Mode: ON</h2>
              <p className="mt-6 text-lg font-bold">No distractions. Just pure productivity.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Wifi className="text-black" />, title: "Unifi 300Mbps", desc: "Blazing fast internet. No lag." },
                { icon: <Clock className="text-black" />, title: "Flexible Hours", desc: "9:30am - 6:00pm. 24/7 for pros." },
                { icon: <Coffee className="text-black" />, title: "Free Flow Pantry", desc: "Coffee, tea, snacks. Unlimited." },
                { icon: <Moon className="text-black" />, title: "Surau Available", desc: "Dedicated quiet space." },
                { icon: <CheckCircle2 className="text-black" />, title: "Comfy Workspace", desc: "Ergonomic chairs. Big desks." },
                { icon: <MapPin className="text-black" />, title: "Kulim, Kedah", desc: "Easy parking. Good food nearby." },
              ].map((item, i) => (
                <div key={i} className="group relative border-2 border-black bg-white p-6 shadow-neo transition-transform hover:-translate-y-1 hover:-translate-x-1">
                  <div className="mb-4 inline-block border-2 border-black bg-neo-accent text-white p-3 shadow-neo-sm">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold uppercase">{item.title}</h3>
                  <p className="text-gray-600 font-mono text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-white border-b-2 border-black">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black uppercase">Simple Pricing</h2>
              <p className="mt-4 text-lg font-medium text-gray-500 font-mono">NO HIDDEN FEES. CANCEL ANYTIME.</p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 items-start">
              {/* Daily Pass */}
              <div className="relative border-2 border-black bg-white p-8 shadow-neo-lg hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase">Daily Pass</h3>
                  <p className="mt-2 text-gray-500 font-mono text-sm">Just visiting?</p>
                </div>
                <div className="mb-6 flex items-baseline border-b-2 border-black pb-6">
                  <span className="text-5xl font-black">RM 25</span>
                  <span className="ml-2 font-mono text-gray-500">/day</span>
                </div>
                <ul className="mb-8 space-y-4 font-medium">
                  <li className="flex items-center gap-3"><div className="h-4 w-4 bg-black"></div> 9:30am - 6:00pm</li>
                  <li className="flex items-center gap-3"><div className="h-4 w-4 bg-black"></div> High-speed WiFi</li>
                  <li className="flex items-center gap-3"><div className="h-4 w-4 bg-black"></div> Pantry Access</li>
                </ul>
                <Button variant="outline" className="w-full">BUY PASS</Button>
              </div>

              {/* Monthly Pass */}
              <div className="relative border-2 border-black bg-neo-accent p-8 shadow-neo-lg text-white hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                <div className="absolute top-0 right-0 -mt-5 mr-4 border-2 border-black bg-neo-bg px-4 py-1 text-sm font-bold text-black shadow-neo uppercase">
                  Best Value
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase">Monthly Pass</h3>
                  <p className="mt-2 text-white/80 font-mono text-sm">For the builders.</p>
                </div>
                <div className="mb-6 flex items-baseline border-b-2 border-white/30 pb-6">
                  <span className="text-5xl font-black">RM 350</span>
                  <span className="ml-2 font-mono text-white/80">/month</span>
                </div>
                <ul className="mb-8 space-y-4 font-bold">
                  <li className="flex items-center gap-3"><div className="h-4 w-4 bg-white"></div> 24/7 Keycard Access</li>
                  <li className="flex items-center gap-3"><div className="h-4 w-4 bg-white"></div> Dedicated Desk</li>
                  <li className="flex items-center gap-3"><div className="h-4 w-4 bg-white"></div> Meeting Room Credits</li>
                  <li className="flex items-center gap-3"><div className="h-4 w-4 bg-white"></div> Locker Included</li>
                </ul>
                <Button className="w-full bg-white text-black border-2 border-black shadow-neo hover:bg-gray-100">JOIN NOW</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location / Footer CTA */}
        <section id="location" className="bg-black py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-black uppercase">Find us in Kulim</h2>
            <p className="mx-auto mb-10 max-w-xl text-gray-400 font-mono">
              Located in the heart of Kulim, Kedah. Good internet. Good vibes.
            </p>
            <div className="flex justify-center">
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 font-bold hover:bg-white hover:text-black transition-colors uppercase">
                  <MapPin size={20} />
                  <span>View on Maps</span>
               </a>
            </div>
            
            <div className="mt-20 border-t-2 border-white/20 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 font-mono">
                <p>&copy; 2024 KULIM CO-WORK.</p>
                <div className="flex gap-6 items-center">
                    <a href="#" className="hover:text-white uppercase font-bold">Twitter</a>
                    <a href="#" className="hover:text-white uppercase font-bold">Instagram</a>
                    <button 
                      onClick={() => setIsProposalOpen(true)}
                      className="text-neo-bg hover:text-white transition-colors uppercase font-bold border-b border-neo-bg hover:border-white"
                    >
                      Investor Relations
                    </button>
                </div>
            </div>
          </div>
        </section>
      </main>

      <ChatBot />
      {isProposalOpen && <ProposalModal onClose={() => setIsProposalOpen(false)} />}
    </div>
  );
}