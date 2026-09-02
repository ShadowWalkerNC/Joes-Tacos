import React, { useState } from 'react';
import { PageView } from '../types';
import { BRAND_ASSETS } from '../data/menuData';
import { LIVE_TRUCK_STATUS } from '../data/truckData';
import { Menu, X, ShoppingBag, Award, MapPin, Phone, Flame } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenLoyalty: () => void;
  onOpenQr: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenLoyalty,
  onOpenQr
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#111418]/95 backdrop-blur-xl border-b border-[#374151] pt-safe">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-8 flex items-center justify-between">
          
          {/* Left: Hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="w-10 h-10 flex items-center justify-center text-[#f1f5f9] hover:text-[#fbbf24] transition-colors border border-transparent hover:border-[#374151] rounded"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 group text-left focus:outline-none"
            >
              <img
                src={BRAND_ASSETS.logo}
                alt="Taco Joe Logo"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-['Montserrat'] text-xl font-black text-white uppercase tracking-tight leading-none group-hover:text-[#fbbf24] transition-colors">
                  Taco Joe
                </span>
                <span className="text-[10px] text-[#fbbf24] font-bold uppercase tracking-widest leading-tight">
                  Midcoast Maine
                </span>
              </div>
            </button>
          </div>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'menu', label: 'Menu' },
              { id: 'find-us', label: 'Find Us' },
              { id: 'events', label: 'Catering & Events' },
              { id: 'about', label: 'Our Story' }
            ].map((tab) => {
              const isActive = currentPage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleNav(tab.id as PageView)}
                  className={`px-3.5 py-1.5 font-['Work_Sans'] text-xs uppercase tracking-wider font-bold transition-all border ${
                    isActive
                      ? 'bg-[#dc2626] text-white border-white shadow-[2px_2px_0px_#ffffff]'
                      : 'bg-transparent text-[#cbd5e1] border-transparent hover:text-white hover:bg-[#1f242c] hover:border-[#374151]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Live Indicator Pill */}
            <button
              onClick={() => handleNav('find-us')}
              className="hidden lg:flex items-center gap-2 bg-[#181c22] border border-[#374151] px-3 py-1.5 rounded text-xs font-bold text-white hover:border-[#dc2626] transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-green-400">Open Now</span>
            </button>

            {/* VIP Loyalty Punch Card Button */}
            <button
              onClick={onOpenLoyalty}
              title="Taco Joe Punch Card VIP"
              className="w-10 h-10 border border-[#374151] bg-[#181c22] text-[#fbbf24] hover:text-white hover:bg-[#1f242c] hover:border-[#fbbf24] flex items-center justify-center transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <Award className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="View Cart"
              className="relative h-10 px-3.5 border border-white bg-[#dc2626] text-white flex items-center gap-2 font-bold uppercase text-xs shadow-[3px_3px_0px_0px_#ffffff] hover:bg-[#b91c1c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order</span>
              {cartCount > 0 && (
                <span className="bg-white text-[#111418] font-black text-[11px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111418] border-b-2 border-[#dc2626] px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="bg-[#181c22] p-3 border border-[#374151] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <div>
                  <p className="text-xs font-bold text-white uppercase">Rig Status: OPEN</p>
                  <p className="text-[11px] text-[#94a3b8]">{LIVE_TRUCK_STATUS.currentLocationName}</p>
                </div>
              </div>
              <button
                onClick={() => handleNav('find-us')}
                className="text-[11px] bg-[#dc2626] text-white px-2.5 py-1 font-bold uppercase"
              >
                Track
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNav('home')}
                className={`p-3 text-left font-bold text-xs uppercase border ${
                  currentPage === 'home'
                    ? 'bg-[#dc2626] text-white border-white'
                    : 'bg-[#181c22] text-[#cbd5e1] border-[#374151]'
                }`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => handleNav('menu')}
                className={`p-3 text-left font-bold text-xs uppercase border ${
                  currentPage === 'menu'
                    ? 'bg-[#dc2626] text-white border-white'
                    : 'bg-[#181c22] text-[#cbd5e1] border-[#374151]'
                }`}
              >
                🌮 Menu & Order
              </button>
              <button
                onClick={() => handleNav('find-us')}
                className={`p-3 text-left font-bold text-xs uppercase border ${
                  currentPage === 'find-us'
                    ? 'bg-[#dc2626] text-white border-white'
                    : 'bg-[#181c22] text-[#cbd5e1] border-[#374151]'
                }`}
              >
                🚚 Track Truck
              </button>
              <button
                onClick={() => handleNav('events')}
                className={`p-3 text-left font-bold text-xs uppercase border ${
                  currentPage === 'events'
                    ? 'bg-[#dc2626] text-white border-white'
                    : 'bg-[#181c22] text-[#cbd5e1] border-[#374151]'
                }`}
              >
                🔥 Catering & Gigs
              </button>
              <button
                onClick={() => handleNav('about')}
                className={`p-3 text-left font-bold text-xs uppercase border col-span-2 ${
                  currentPage === 'about'
                    ? 'bg-[#dc2626] text-white border-white'
                    : 'bg-[#181c22] text-[#cbd5e1] border-[#374151]'
                }`}
              >
                ⭐ Our Story
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#374151] text-xs text-[#94a3b8]">
              <a href="tel:2075558226" className="flex items-center gap-1 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#dc2626]" /> (207) 555-TACO
              </a>
              <button onClick={onOpenLoyalty} className="flex items-center gap-1 text-[#fbbf24] font-bold">
                <Award className="w-3.5 h-3.5" /> VIP Stamp Card
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
