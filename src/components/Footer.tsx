import React from 'react';
import { PageView } from '../types';
import { QrCode, Camera, ExternalLink, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenQr: () => void;
  onOpenLoyalty: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQr, onOpenLoyalty }) => {
  return (
    <footer className="mt-16 px-4 sm:px-8 py-12 bg-[#181c22] border-t-2 border-[#374151] flex flex-col gap-6 items-center text-center pb-24 md:pb-12 text-[#f1f5f9]">
      {/* Icon Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onOpenQr}
          title="Scan Truck QR Code"
          aria-label="Scan Truck QR Code"
          className="w-12 h-12 bg-[#111418] border border-[#374151] text-[#fbbf24] hover:text-white hover:bg-[#dc2626] hover:border-white transition-all flex items-center justify-center shadow-[2px_2px_0px_#000000]"
        >
          <QrCode className="w-6 h-6" />
        </button>
        <button
          onClick={onOpenLoyalty}
          title="Taco Joe Stamp Card & VIP"
          aria-label="Taco Joe Stamp Card & VIP"
          className="w-12 h-12 bg-[#111418] border border-[#374151] text-[#fbbf24] hover:text-white hover:bg-[#dc2626] hover:border-white transition-all flex items-center justify-center shadow-[2px_2px_0px_#000000]"
        >
          <Award className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Quick Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-[#cbd5e1]">
        <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#fbbf24]">
          Home
        </button>
        <button onClick={() => { onNavigate('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#fbbf24]">
          Menu
        </button>
        <button onClick={() => { onNavigate('find-us'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#fbbf24]">
          Find Us
        </button>
        <button onClick={() => { onNavigate('events'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#fbbf24]">
          Catering
        </button>
        <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#fbbf24]">
          Our Story
        </button>
      </div>

      {/* Contact & Social Section */}
      <div className="flex flex-col gap-1.5 items-center">
        <p className="font-['Montserrat'] font-black text-[#fbbf24] uppercase tracking-widest text-sm">
          TACO JOE • MIDCOAST MAINE
        </p>
        <p className="text-[#cbd5e1] text-xs sm:text-sm">
          34 Commercial St, Rockport, ME • 117 Museum St, Owls Head, ME
        </p>
        <div className="flex items-center justify-center gap-4 text-xs pt-1">
          <a
            href="https://www.facebook.com/profile.php?id=100088337054895"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fbbf24] hover:text-white hover:underline flex items-center gap-1 font-bold"
          >
            Facebook @TACOJOE_OFFICIAL <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-[#475569]">•</span>
          <span className="text-[#94a3b8]">Joseph Simko, ServSafe Certified</span>
        </div>
      </div>

      {/* Bottom Tagline & Copyright */}
      <div className="pt-4 border-t border-[#2a313b] w-full max-w-md">
        <p className="text-[#94a3b8] uppercase tracking-widest text-[11px]">
          © {new Date().getFullYear()} Taco Joe • All Rights Reserved
        </p>
        <p className="text-[10px] text-[#64748b] mt-1">
          Tiny Truck. Big Flavor. Fire-grilled authentic street tacos & burritos in Midcoast Maine.
        </p>
      </div>
    </footer>
  );
};
