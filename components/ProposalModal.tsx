import React from 'react';
import { X, Download, TrendingUp, Users, Cpu, MapPin } from 'lucide-react';
import { Button } from './Button';

interface ProposalModalProps {
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-brand-50 px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Business Proposal</h2>
            <p className="text-sm text-brand-600">Kulim Co-Work Strategic Overview</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => window.print()} className="hidden sm:flex">
              <Download size={16} className="mr-2" /> Print PDF
            </Button>
            <button 
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans">
          <div className="mx-auto max-w-3xl space-y-12">
            
            {/* Executive Summary */}
            <section>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                <TrendingUp className="text-brand-600" /> Executive Summary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Kulim Co-Work</strong> aims to establish the premier flexible workspace ecosystem in Kulim, Kedah. 
                Capitalizing on the overflow from the <strong>Kulim Hi-Tech Park</strong> and the growing remote-work culture 
                in semi-urban Malaysia, we provide an enterprise-grade environment with low operational overhead through AI automation.
              </p>
            </section>

            {/* The Opportunity */}
            <div className="grid gap-8 md:grid-cols-2">
              <section className="rounded-xl bg-gray-50 p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">The Problem</h4>
                <p className="text-sm text-gray-600">
                  Tech professionals and students in Kulim currently lack dedicated workspaces. 
                  Cafes offer unreliable WiFi and noise, while traditional offices require expensive long-term leases 
                  unsuitable for the gig economy.
                </p>
              </section>
              <section className="rounded-xl bg-brand-50 p-6 border border-brand-100">
                <h4 className="font-bold text-gray-900 mb-2">The Solution</h4>
                <p className="text-sm text-gray-600">
                  A hybrid workspace model offering high-speed Unifi connectivity (300Mbps), 
                  ergonomic infrastructure, and flexible "pay-as-you-go" pricing. 
                  Positioned as the "Third Place" between home and the office.
                </p>
              </section>
            </div>

            {/* Operational Strategy */}
            <section>
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4">
                <Cpu className="text-brand-600" /> AI-First Operations
              </h3>
              <p className="text-gray-600 mb-4">
                Unlike traditional coworking spaces burdened by heavy staffing costs, Kulim Co-Work leverages <strong>"Kai"</strong>, 
                our proprietary AI Community Manager trained on Gemini 2.5 Flash.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>24/7 Availability:</strong> Instant responses to pricing, scheduling, and amenity queries.</li>
                <li><strong>Cost Reduction:</strong> Reduces the need for full-time front-desk staff by 60%.</li>
                <li><strong>Scalability:</strong> The digital infrastructure is ready to replicate in other Tier-2 cities (e.g., Sungai Petani, Batu Kawan).</li>
              </ul>
            </section>

            {/* Target Market */}
            <section>
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4">
                <Users className="text-brand-600" /> Target Market
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="font-bold text-gray-900">Remote Devs</div>
                  <div className="text-xs text-gray-500 mt-1">Spillover from Penang/KL returning to hometowns.</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="font-bold text-gray-900">Hi-Tech Park Engineers</div>
                  <div className="text-xs text-gray-500 mt-1">Looking for off-site deep work locations.</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="font-bold text-gray-900">Students</div>
                  <div className="text-xs text-gray-500 mt-1">Polytechnic & UniKL students needing reliable internet.</div>
                </div>
              </div>
            </section>

            {/* Financial Model */}
            <section className="bg-gray-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Revenue Model</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                  <div>
                    <span className="block font-bold text-lg">Daily Pass (RM 25)</span>
                    <span className="text-gray-400 text-sm">High volume, low friction. Cash flow engine.</span>
                  </div>
                  <span className="text-brand-300 font-mono">~30% Rev</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                  <div>
                    <span className="block font-bold text-lg">Monthly Membership (RM 350)</span>
                    <span className="text-gray-400 text-sm">Recurring revenue (MRR). High LTV retention.</span>
                  </div>
                  <span className="text-brand-300 font-mono">~60% Rev</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-lg">Virtual Office / Add-ons</span>
                    <span className="text-gray-400 text-sm">Mail handling, locker rentals, event space.</span>
                  </div>
                  <span className="text-brand-300 font-mono">~10% Rev</span>
                </div>
              </div>
            </section>

            {/* Footer of Modal */}
            <div className="text-center pt-8 text-sm text-gray-400 border-t border-gray-100">
              <p>Generated by Kulim Co-Work Strategic Planning • {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};