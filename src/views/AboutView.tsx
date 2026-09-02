import React from 'react';
import { BRAND_ASSETS } from '../data/menuData';
import { PageView } from '../types';
import { ExternalLink, CheckCircle2, MapPin, Utensils } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-12 py-8 max-w-5xl mx-auto min-h-screen text-[#f1f5f9] bg-[#111418] space-y-16">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex justify-center items-center gap-2">
          <span className="text-xs font-bold text-[#dc2626] uppercase tracking-widest">
            Midcoast Maine Street Tacos
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#181c22] text-[#fbbf24] border border-[#374151] px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-green-400" /> ServSafe Certified
          </span>
        </div>
        <h1 className="font-['Montserrat'] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          Tiny Truck.<br />
          <span className="text-[#fbbf24]">Big Flavor.</span>
        </h1>
        <p className="font-['Work_Sans'] text-base text-[#cbd5e1] max-w-xl mx-auto leading-relaxed">
          Crafting authentic street tacos, 12" burritos, quesadillas, and grilled smash burgers along the coast of Midcoast Maine.
        </p>
      </div>

      {/* Main Story & Truck Visual */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-black uppercase text-[#dc2626]">
            About Taco Joe & The Rig
          </h2>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            Operated by pitmaster Joseph Simko, <strong>Taco Joe</strong> is dedicated to serving authentic Mexican street fare across Midcoast Maine. From fresh-pressed double corn tortillas loaded with juicy Carne Asada and pork carnitas to huge 12-inch loaded burritos and cheesy quesadillas.
          </p>
          <p className="text-sm text-[#94a3b8] leading-relaxed">
            Catch the rig stationed at our favorite local stops including <strong>34 Commercial St in Rockport Harbor</strong> and <strong>117 Museum St at the Owls Head Transportation Museum</strong>, as well as community festivals and private catering events throughout the season.
          </p>

          <div className="bg-[#181c22] border-l-4 border-[#dc2626] p-4 space-y-1">
            <p className="font-['Montserrat'] font-bold text-xs uppercase text-white">
              The Taco Joe Quality Standard:
            </p>
            <p className="text-xs text-[#94a3b8] italic">
              "Fire-grilled meats, fresh scratch-made pico de gallo and sweet corn salsa, and signature avocado ranch on every order."
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100088337054895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#dc2626] text-white text-xs font-bold uppercase shadow-[2px_2px_0px_#fff] hover:bg-[#b91c1c] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Follow on Facebook
            </a>
            <span className="text-xs text-[#94a3b8] font-bold">@TACOJOE_OFFICIAL</span>
          </div>
        </div>

        <div className="border-4 border-[#111418] bg-[#181c22] p-3 shadow-[8px_8px_0px_#dc2626]">
          <img
            src={BRAND_ASSETS.tacoSpread}
            alt="Taco Joe Street Tacos"
            className="w-full h-auto object-cover rounded-none"
          />
        </div>
      </div>

      {/* Real Locations & Info */}
      <div className="bg-[#181c22] border-2 border-white p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="text-center max-w-md mx-auto">
          <span className="text-[11px] font-bold text-[#fbbf24] uppercase tracking-widest">
            Regular Stops
          </span>
          <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-black uppercase mt-1 text-white">
            Midcoast Maine Locations
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#111418] border border-[#374151] p-5 space-y-2">
            <div className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626] text-[#dc2626] flex items-center justify-center font-black">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-['Montserrat'] font-bold text-sm uppercase text-white">
              Rockport Harbor
            </h4>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              34 Commercial St, Rockport, ME 04856. Right by the waterfront & Sea Hag Cider.
            </p>
          </div>

          <div className="bg-[#111418] border border-[#374151] p-5 space-y-2">
            <div className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626] text-[#dc2626] flex items-center justify-center font-black">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-['Montserrat'] font-bold text-sm uppercase text-white">
              Owls Head Museum
            </h4>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              117 Museum St, Owls Head, ME 04854. Outdoor seating at the transportation museum grounds.
            </p>
          </div>

          <div className="bg-[#111418] border border-[#374151] p-5 space-y-2">
            <div className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626] text-[#dc2626] flex items-center justify-center font-black">
              <Utensils className="w-5 h-5" />
            </div>
            <h4 className="font-['Montserrat'] font-bold text-sm uppercase text-white">
              Rockland & Rallies
            </h4>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Rockland Harbor, Main St & special weekend food truck rallies throughout the Midcoast area.
            </p>
          </div>
        </div>
      </div>

      {/* Unfiltered Photo Gallery Grid */}
      <div className="space-y-4">
        <h3 className="font-['Montserrat'] text-xl font-bold uppercase text-center text-[#fbbf24]">
          Fresh From The Truck
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <img
            src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80"
            alt="Carne Asada Tacos"
            className="w-full h-36 sm:h-44 object-cover border border-[#374151] shadow-[3px_3px_0px_#000000]"
          />
          <img
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
            alt="Pork Carnitas Tacos"
            className="w-full h-36 sm:h-44 object-cover border border-[#374151] shadow-[3px_3px_0px_#000000]"
          />
          <img
            src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
            alt="12 Inch Burrito"
            className="w-full h-36 sm:h-44 object-cover border border-[#374151] shadow-[3px_3px_0px_#000000]"
          />
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
            alt="Smash Burger and Fries"
            className="w-full h-36 sm:h-44 object-cover border border-[#374151] shadow-[3px_3px_0px_#000000]"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-6 space-y-4">
        <h3 className="font-['Montserrat'] text-2xl font-black uppercase text-white">
          Ready to Eat?
        </h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onNavigate('menu')}
            className="bg-[#dc2626] text-white px-8 py-3.5 font-['Montserrat'] font-black uppercase text-xs border border-white shadow-[4px_4px_0px_#ffffff] hover:bg-[#b91c1c] transition-all"
          >
            Order Menu Online
          </button>
          <button
            onClick={() => onNavigate('find-us')}
            className="bg-[#181c22] text-white px-8 py-3.5 font-['Montserrat'] font-bold uppercase text-xs border border-[#374151] hover:border-[#fbbf24] transition-all"
          >
            View Truck Locations
          </button>
        </div>
      </div>
    </div>
  );
};
