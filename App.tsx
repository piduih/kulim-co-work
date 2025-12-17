import React, { useState } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { ChatBot } from './components/ChatBot';
import { ProposalModal } from './components/ProposalModal';
import { Wifi, Coffee, Moon, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f8] text-gray-900 selection:bg-brand-200">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center rounded-full border border-brand-200 bg-white px-3 py-1 text-sm text-brand-600 shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Open for business in Kulim
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
              Boring weekend? <br/>
              <span className="text-brand-600">Come cowork with us.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed mb-10">
              We’re opening up our office space for anyone who wants to get some work done, chill, or just vibe with fellow devs. Bring your laptop. We’ve got the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                Get Membership
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '#location'}>
                Book a Tour
              </Button>
            </div>
          </div>
          
          {/* Abstract background blobs */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-100 blur-[100px] opacity-50"></div>
        </section>

        {/* Features / Amenities */}
        <section id="amenities" className="py-24 bg-white border-y border-brand-100">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything you need to focus.</h2>
              <p className="mt-4 text-gray-500">No distractions. Just pure productivity.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Wifi className="text-brand-600" />, title: "Unifi 300Mbps", desc: "Blazing fast internet for uploads & downloads." },
                { icon: <Clock className="text-brand-600" />, title: "Flexible Hours", desc: "9:30am - 6:00pm daily. 24/7 for monthly members." },
                { icon: <Coffee className="text-brand-600" />, title: "Free Flow Pantry", desc: "Unlimited coffee, tea, and snacks to keep you going." },
                { icon: <Moon className="text-brand-600" />, title: "Surau Available", desc: "Dedicated quiet space for prayers and reflection." },
                { icon: <CheckCircle2 className="text-brand-600" />, title: "Comfy Workspace", desc: "Ergonomic chairs and spacious desks." },
                { icon: <MapPin className="text-brand-600" />, title: "Kulim, Kedah", desc: "Strategic location with ample parking." },
              ].map((item, i) => (
                <div key={i} className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:border-brand-200 hover:bg-white hover:shadow-lg">
                  <div className="mb-4 inline-block rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100 group-hover:bg-brand-50">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple Pricing.</h2>
              <p className="mt-4 text-gray-500">Choose the pass that fits your schedule.</p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
              {/* Daily Pass */}
              <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Daily Pass</h3>
                  <p className="mt-2 text-gray-500">Perfect for the occasional escape.</p>
                </div>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">RM 25</span>
                  <span className="ml-2 text-gray-500">/day</span>
                </div>
                <ul className="mb-8 space-y-4 text-gray-600">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-green-500"/> Access 9:30am - 6:00pm</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-green-500"/> High-speed WiFi</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-green-500"/> Pantry Access</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-green-500"/> Walk-ins welcome</li>
                </ul>
                <Button variant="outline" className="w-full">Get Daily Pass</Button>
              </div>

              {/* Monthly Pass */}
              <div className="relative rounded-3xl border border-brand-200 bg-brand-50/50 p-8 shadow-md ring-1 ring-brand-100 transition-transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 -mt-3 -mr-3 rounded-full bg-brand-900 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  BEST VALUE
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Monthly Pass</h3>
                  <p className="mt-2 text-gray-500">For the dedicated hustler.</p>
                </div>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">RM 350</span>
                  <span className="ml-2 text-gray-500">/month</span>
                </div>
                <ul className="mb-8 space-y-4 text-gray-600">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-900"/> <strong>24/7 Access via Keycard</strong></li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-900"/> Dedicated Desk Option</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-900"/> Meeting Room Credits</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-brand-900"/> Locker Access</li>
                </ul>
                <Button variant="primary" className="w-full">Get Monthly Pass</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location / Footer CTA */}
        <section id="location" className="bg-gray-900 py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">Find us in Kulim</h2>
            <p className="mx-auto mb-10 max-w-xl text-gray-400">
              We are located in the heart of Kulim, Kedah. Surrounded by good food and easy parking.
            </p>
            <div className="flex justify-center">
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-200 hover:text-white transition-colors">
                  <MapPin size={20} />
                  <span className="underline decoration-1 underline-offset-4">View on Google Maps</span>
               </a>
            </div>
            
            <div className="mt-20 border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; 2024 Kulim Co-Work. All rights reserved.</p>
                <div className="flex gap-6 items-center">
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                    <button 
                      onClick={() => setIsProposalOpen(true)}
                      className="text-brand-200 hover:text-white transition-colors font-medium"
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