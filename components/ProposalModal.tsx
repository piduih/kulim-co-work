import React from 'react';
import { X, Download, TrendingUp, Users, Cpu } from 'lucide-react';
import { Button } from './Button';

interface ProposalModalProps {
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border-4 border-black bg-white shadow-neo-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b-4 border-black bg-neo-bg px-6 py-4">
          <div>
            <h2 className="text-2xl font-black uppercase text-black">GRAND_SLAM_OFFER.pdf</h2>
            <p className="font-mono text-xs font-bold text-black/70">CONFIDENTIAL // INVESTOR DECK</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => window.print()} className="hidden sm:flex border-2 border-black shadow-neo-sm bg-white hover:bg-gray-50">
              <Download size={16} className="mr-2" /> CETAK
            </Button>
            <button 
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center border-2 border-black bg-red-500 text-white shadow-neo-sm hover:bg-red-600 transition-colors"
            >
              <X size={24} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans bg-white">
          <div className="mx-auto max-w-3xl space-y-12">
            
            {/* Executive Summary */}
            <section className="border-2 border-black p-6 shadow-neo-sm">
              <h3 className="flex items-center gap-3 text-2xl font-black uppercase text-black mb-4">
                <TrendingUp className="text-black" /> The Hook (Ringkasan)
              </h3>
              <p className="text-black font-medium leading-relaxed">
                **Kulim Co-Work** bukan sekadar pejabat sewa. Ia adalah **Ecosystem**. 
                Kami menyelesaikan masalah "Isolation" dan "Low Productivity" yang dihadapi oleh remote workers di Kulim Hi-Tech Park.
                Model kami? Low Overhead (AI Managed) + High Value Offer.
              </p>
            </section>

            {/* The Opportunity */}
            <div className="grid gap-8 md:grid-cols-2">
              <section className="bg-gray-100 p-6 border-2 border-black">
                <h4 className="font-black uppercase text-black mb-2 border-b-2 border-black inline-block">Masalah (The Pain)</h4>
                <p className="text-sm font-medium text-black mt-2">
                  1. Internet rumah slow. <br/>
                  2. Kedai kopi bising & tak selesa. <br/>
                  3. Sewa ofis tradisional mahal & kontrak leceh (2 tahun+).
                </p>
              </section>
              <section className="bg-neo-bg p-6 border-2 border-black">
                <h4 className="font-black uppercase text-black mb-2 border-b-2 border-black inline-block">Solusi Kami (The Gain)</h4>
                <p className="text-sm font-medium text-black mt-2">
                  1. Enterprise Grade WiFi (300Mbps). <br/>
                  2. Pay-Per-Use (Harian/Bulanan). <br/>
                  3. **Jaminan Wang Dikembalikan** jika WiFi slow.
                </p>
              </section>
            </div>

            {/* Operational Strategy */}
            <section>
              <h3 className="flex items-center gap-3 text-xl font-black uppercase text-black mb-4">
                <Cpu className="text-black" /> Unfair Advantage (AI)
              </h3>
              <p className="text-black mb-4 font-medium">
                Kos operasi kami rendah sebab kami guna **"Kai"** (Gemini 2.5 Flash) sebagai Community Manager.
              </p>
              <ul className="space-y-2 font-mono text-sm border-l-4 border-black pl-4">
                <li><span className="font-bold">&gt;</span> Servis 24/7 tanpa cuti sakit.</li>
                <li><span className="font-bold">&gt;</span> Automasi Jualan & Customer Service.</li>
                <li><span className="font-bold">&gt;</span> Margin keuntungan lebih tinggi dari pesaing.</li>
              </ul>
            </section>

            {/* Target Market */}
            <section>
              <h3 className="flex items-center gap-3 text-xl font-black uppercase text-black mb-4">
                <Users className="text-black" /> Siapa Bayar Kami?
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 border-2 border-black text-center shadow-neo-sm bg-white">
                  <div className="font-bold uppercase">Remote Devs</div>
                  <div className="text-xs font-mono mt-2">Spillover Penang/KL.</div>
                </div>
                <div className="p-4 border-2 border-black text-center shadow-neo-sm bg-white">
                  <div className="font-bold uppercase">Tech Giants</div>
                  <div className="text-xs font-mono mt-2">Staff Infineon/Intel.</div>
                </div>
                <div className="p-4 border-2 border-black text-center shadow-neo-sm bg-white">
                  <div className="font-bold uppercase">Digital Marketer</div>
                  <div className="text-xs font-mono mt-2">Perlukan speed.</div>
                </div>
              </div>
            </section>

            {/* Financial Model */}
            <section className="bg-black text-white p-8 border-2 border-black shadow-neo">
              <h3 className="text-xl font-black uppercase mb-6 border-b-2 border-white pb-2 inline-block">The Math (Duit Masuk)</h3>
              <div className="space-y-6 font-mono">
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                  <div>
                    <span className="block font-bold text-lg">Daily Pass (RM 25)</span>
                    <span className="text-gray-400 text-xs">Customer Acquisition (Front End).</span>
                  </div>
                  <span className="text-neo-bg">Volume Game</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                  <div>
                    <span className="block font-bold text-lg">Monthly (RM 350)</span>
                    <span className="text-gray-400 text-xs">Recurring Revenue (MRR - Back End).</span>
                  </div>
                  <span className="text-neo-bg">Cash Cow</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-lg">Upsells</span>
                    <span className="text-gray-400 text-xs">Virtual Office, Event Space.</span>
                  </div>
                  <span className="text-neo-bg">Profit Maximizer</span>
                </div>
              </div>
            </section>

            {/* Footer of Modal */}
            <div className="text-center pt-8 text-xs font-mono text-gray-500 border-t-2 border-black">
              <p>DOKUMEN INI ADALAH RAHSIA SULIT • {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};