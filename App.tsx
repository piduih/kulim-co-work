import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { ChatBot } from './components/ChatBot';
import { ProposalModal } from './components/ProposalModal';
import { Wifi, Coffee, Moon, Clock, MapPin, CheckCircle2, Zap, ArrowRight, Star, Users } from 'lucide-react';

export default function App() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  // SEO Optimization
  useEffect(() => {
    document.title = "Kulim Co-Work | Coworking Space Paling Padu Di Utara";
    
    // Inject meta description for SEO
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Coworking space di Kulim. Internet laju 300Mbps, kopi free flow, RM25 sehari. Tingkatkan produktiviti 10x ganda. Jaminan wang dikembalikan.');
  }, []);

  return (
    <div className="min-h-screen bg-neo-offwhite text-black selection:bg-neo-bg selection:text-black">
      <Header />
      
      <main>
        {/* Hero Section - The Hook */}
        <section className="relative overflow-hidden border-b-2 border-black bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Scarcity Tag */}
            <div className="inline-flex items-center border-2 border-black bg-red-500 px-4 py-1 text-sm font-bold uppercase text-white shadow-neo mb-8 rotate-[-2deg]">
              <Zap size={16} className="mr-2 fill-current" />
              HANYA 3 MEJA KOSONG TINGGAL
            </div>
            
            <h1 className="mx-auto max-w-5xl text-5xl font-black uppercase tracking-tight sm:text-7xl mb-6 leading-none">
              JANGAN BAZIR MASA <br/>
              <span className="bg-neo-bg px-2 shadow-neo-sm">DI KAFE BISING.</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-xl font-bold text-gray-700 leading-relaxed mb-10 font-mono">
              Internet 300Mbps. Kopi Free Flow. Aircond Sejuk Beku. 
              <span className="block mt-2 bg-black text-white inline-block px-1">Tingkatkan produktiviti anda 10x ganda hari ini.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="w-full sm:w-auto bg-neo-green hover:bg-green-400 text-black border-black" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                DAPATKAN PAS (RM25)
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = '#location'}>
                LIHAT LOKASI
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-2 text-sm font-bold uppercase">
              <Star className="fill-black" size={16} />
              <span>Jaminan Wang Dikembalikan Jika WiFi Slow</span>
              <Star className="fill-black" size={16} />
            </div>
          </div>
          
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </section>

        {/* Features - The Value Stack */}
        <section id="amenities" className="py-24 bg-neo-bg border-b-2 border-black">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black uppercase text-black border-2 border-black bg-white inline-block px-4 py-2 shadow-neo">APA YANG ANDA DAPAT?</h2>
              <p className="mt-6 text-lg font-bold">Kami sediakan segalanya supaya anda boleh fokus buat duit.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Wifi className="text-black" />, title: "Unifi 300Mbps", desc: "Zero Lag. Upload video seminit siap. (Nilai: RM200/bulan)" },
                { icon: <Clock className="text-black" />, title: "Akses Fleksibel", desc: "Buka 9:30am - 6:00pm. Member dapat kunci 24/7." },
                { icon: <Coffee className="text-black" />, title: "Kopi Tanpa Had", desc: "Tak payah bayar RM15 di Starbucks. (Jimat: RM450/bulan)" },
                { icon: <Moon className="text-black" />, title: "Surau Selesa", desc: "Ruang solat yang bersih dan wangi disediakan." },
                { icon: <CheckCircle2 className="text-black" />, title: "Meja 'Deep Work'", desc: "Kerusi ergonomik. Meja luas. Belakang tak sakit." },
                { icon: <Users className="text-black" />, title: "Network Padu", desc: "Duduk sebelah founder & programmer lain. Deal business jadi mudah." },
              ].map((item, i) => (
                <div key={i} className="group relative border-2 border-black bg-white p-6 shadow-neo transition-transform hover:-translate-y-1 hover:-translate-x-1">
                  <div className="mb-4 inline-block border-2 border-black bg-neo-accent text-white p-3 shadow-neo-sm">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold uppercase">{item.title}</h3>
                  <p className="text-gray-600 font-mono text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing - Grand Slam Offer */}
        <section id="pricing" className="py-24 bg-white border-b-2 border-black">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black uppercase">PILIH PAKEJ ANDA</h2>
              <p className="mt-4 text-lg font-medium text-gray-500 font-mono">TIADA KONTRAK PELIK-PELIK. CANCEL BILA-BILA MASA.</p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 items-start">
              {/* Daily Pass */}
              <div className="relative border-2 border-black bg-white p-8 shadow-neo-lg hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase">Pas Harian</h3>
                  <p className="mt-2 text-gray-500 font-mono text-sm">Nak test drive dulu? Boleh.</p>
                </div>
                <div className="mb-6 flex items-baseline border-b-2 border-black pb-6">
                  <span className="text-5xl font-black">RM 25</span>
                  <span className="ml-2 font-mono text-gray-500">/hari</span>
                </div>
                <div className="mb-6 font-mono text-xs text-gray-500 uppercase font-bold tracking-wide">
                  Apa yang anda dapat:
                </div>
                <ul className="mb-8 space-y-4 font-bold text-sm">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> WiFi Laju (Nilai RM10)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Meja Selesa (Nilai RM15)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Elektrik & Aircond (Nilai RM10)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Unlimited Kopi/Teh (Nilai RM15)</li>
                </ul>
                <div className="bg-gray-100 p-2 mb-6 text-center text-xs font-mono font-bold border border-gray-300">
                  TOTAL VALUE: RM50+ <br/> ANDA BAYAR: RM25 SAHAJA.
                </div>
                <Button variant="outline" className="w-full uppercase font-black">Beli Pas Harian</Button>
              </div>

              {/* Monthly Pass - The Hero Offer */}
              <div className="relative border-2 border-black bg-neo-accent p-8 shadow-neo-lg text-white transform scale-105 z-10">
                <div className="absolute top-0 right-0 -mt-5 mr-4 border-2 border-black bg-neo-bg px-4 py-1 text-sm font-bold text-black shadow-neo uppercase animate-bounce">
                  Paling Berbaloi!
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase">Pas Bulanan (Pro)</h3>
                  <p className="mt-2 text-white/80 font-mono text-sm">Untuk mereka yang serius nak bina empire.</p>
                </div>
                <div className="mb-6 flex items-baseline border-b-2 border-white/30 pb-6">
                  <span className="text-5xl font-black">RM 350</span>
                  <span className="ml-2 font-mono text-white/80">/bulan</span>
                </div>
                
                <div className="mb-6 font-mono text-xs text-white/70 uppercase font-bold tracking-wide">
                  Value Stack (Nilai Sebenar):
                </div>
                <ul className="mb-8 space-y-3 font-bold text-sm">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Akses Kunci 24/7 (Priceless)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Dedicated Desk (Nilai RM300)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> High Speed Internet (Nilai RM200)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Bilik Meeting 5 Jam (Nilai RM250)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Networking Event (Nilai RM500)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18}/> Alamat Business (Nilai RM50/bulan)</li>
                </ul>
                
                <div className="bg-black/20 p-2 mb-6 text-center text-xs font-mono font-bold border border-white/20">
                   TOTAL VALUE: RM1,300+ <br/>
                   HARGA ANDA: RM350. (JIMAT 70%!)
                </div>

                <Button className="w-full bg-neo-bg text-black border-2 border-black shadow-neo hover:bg-white uppercase font-black">
                  AMBIL OFFER INI SEKARANG
                </Button>
                <p className="text-center text-[10px] mt-3 font-mono opacity-70">Jaminan 7 Hari Pulangan Wang jika tak puas hati.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location / Footer CTA */}
        <section id="location" className="bg-black py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-black uppercase">JUMPA DI KULIM</h2>
            <p className="mx-auto mb-10 max-w-xl text-gray-400 font-mono font-bold">
              Lokasi strategik. Dekat kedai makan. Internet laju. Apa lagi alasan anda?
            </p>
            <div className="flex justify-center">
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 font-bold hover:bg-neo-bg hover:text-black hover:border-black transition-all uppercase shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none translate-x-0 hover:translate-x-[2px] hover:translate-y-[2px]">
                  <MapPin size={20} />
                  <span>Google Maps</span>
               </a>
            </div>
            
            <div className="mt-20 border-t-2 border-white/20 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 font-mono">
                <p className="font-bold">&copy; 2024 KULIM CO-WORK.</p>
                <div className="flex gap-6 items-center">
                    <button 
                      onClick={() => setIsProposalOpen(true)}
                      className="text-neo-bg hover:text-white transition-colors uppercase font-black border-b-2 border-neo-bg hover:border-white"
                    >
                      UNTUK PELABUR (PITCH DECK)
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