import React from 'react';
import { PageView } from '../types';
import { QrCode, Camera, Phone, MapPin, Instagram, Sparkles, Flame } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenQr: () => void;
  onOpenLoyalty: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQr, onOpenLoyalty }) => {
  return (
    <footer className="mt-16 px-4 sm:px-8 py-12 bg-[#1c1b1b] border-t border-[#ffb3b1]/20 flex flex-col gap-6 items-center text-center pb-24 md:pb-12">
      {/* Icon Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onOpenQr}
          title="Scan Truck QR Code"
          aria-label="Scan Truck QR Code"
          className="w-12 h-12 bg-[#201f1f] border border-[#ffb3b1]/40 text-[#ffb3b1] hover:text-white hover:bg-[#ff535b] hover:border-white transition-all flex items-center justify-center shadow-[2px_2px_0px_#ffb3b1]"
        >
          <QrCode className="w-6 h-6" />
        </button>
        <button
          onClick={onOpenLoyalty}
          title="Taco Joe Camera & Loyalty"
          aria-label="Taco Joe Camera & Loyalty"
          className="w-12 h-12 bg-[#201f1f] border border-[#ffb3b1]/40 text-[#ffb3b1] hover:text-white hover:bg-[#ff535b] hover:border-white transition-all flex items-center justify-center shadow-[2px_2px_0px_#ffb3b1]"
        >
          <Camera className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Quick Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-[#c6c6c7]">
        <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#ffb3b1]">
          Home
        </button>
        <button onClick={() => { onNavigate('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#ffb3b1]">
          Menu
        </button>
        <button onClick={() => { onNavigate('find-us'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#ffb3b1]">
          Find Us
        </button>
        <button onClick={() => { onNavigate('events'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#ffb3b1]">
          Catering
        </button>
        <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#ffb3b1]">
          Our Story
        </button>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-1.5">
        <p className="font-['Montserrat'] font-bold text-[#ffb3b1] uppercase tracking-widest text-sm">
          CONTACT US
        </p>
        <p className="text-[#e5e2e1] text-sm">
          Midcoast Maine | <a href="tel:2075558226" className="text-[#ff535b] hover:underline font-bold">(207) 555-TACO</a>
        </p>
        <p className="text-xs text-[#ab8987] flex items-center justify-center gap-1">
          <Instagram className="w-3.5 h-3.5 text-[#ffb3b1]" /> @tacojoeofficial
        </p>
      </div>

      {/* Bottom Tagline & Copyright */}
      <div className="pt-4 border-t border-[#353534] w-full max-w-md">
        <p className="text-[#e5e2e1]/60 uppercase tracking-widest text-[11px]">
          © {new Date().getFullYear()} Taco Joe. Keep it Fresh.
        </p>
        <p className="text-[10px] text-[#ab8987] mt-1">
          Tiny Truck. Big Flavor. Fire-grilled street tacos crafted with Maine attitude.
        </p>
      </div>
    </footer>
  );
};
