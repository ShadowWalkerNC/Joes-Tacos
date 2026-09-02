import React from 'react';
import { BRAND_ASSETS, MENU_ITEMS } from '../data/menuData';
import { PageView } from '../types';
import { Flame, Award, Heart, Sparkles, MapPin, ChevronRight, Check } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full px-4 sm:px-12 py-8 max-w-5xl mx-auto min-h-screen text-[#e5e2e1] space-y-16">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-[#ff535b] uppercase tracking-widest">
          The Legend & The Rig
        </span>
        <h1 className="font-['Montserrat'] text-4xl sm:text-6xl font-black uppercase tracking-tight">
          No Rules.<br />
          <span className="text-[#ffb3b1]">Just Tacos.</span>
        </h1>
        <p className="font-['Work_Sans'] text-base text-[#e4bebc] max-w-xl mx-auto leading-relaxed">
          Crafting loud street flavors along the rugged coast of Midcoast Maine since 2018.
        </p>
      </div>

      {/* Main Story & Truck Visual */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-black uppercase text-[#ff535b]">
            From A Rusty Flat Top to Midcoast Icon
          </h2>
          <p className="text-sm text-[#e4bebc] leading-relaxed">
            Taco Joe started when two line cooks got fed up with generic tourist clam shacks and bland food. We dragged a vintage trailer into an abandoned Rockland shipyard, swapped in a 48-inch steel plancha, and started grinding our own chili pastes and adobos.
          </p>
          <p className="text-sm text-[#ab8987] leading-relaxed">
            People told us Maine wasn't ready for habanero salsa macha and wood-roasted al pastor with charred pineapple. They were wrong. On day one, the line stretched down Harbor Park and wrapped around the block. We sold out in 90 minutes.
          </p>

          <div className="bg-[#1c1b1b] border-l-4 border-[#ff535b] p-4 space-y-1">
            <p className="font-['Montserrat'] font-bold text-xs uppercase text-[#e5e2e1]">
              The Taco Joe Guarantee:
            </p>
            <p className="text-xs text-[#ab8987] italic">
              "Never frozen meat, double corn tortillas griddled in lard or olive oil, salsas made every single sunrise."
            </p>
          </div>
        </div>

        <div className="border-4 border-[#131313] bg-[#201f1f] p-3 shadow-[8px_8px_0px_#ff535b]">
          <img
            src={BRAND_ASSETS.truckBrandingArt}
            alt="Taco Joe Truck Art"
            className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      {/* Sourcing & Maine Roots */}
      <div className="bg-[#1c1b1b] border-2 border-[#e5e2e1] p-6 sm:p-10 shadow-[6px_6px_0px_#ff535b] space-y-6">
        <div className="text-center max-w-md mx-auto">
          <span className="text-[11px] font-bold text-[#ff535b] uppercase tracking-widest">
            Local Pride
          </span>
          <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-black uppercase mt-1">
            Rooted in Midcoast Maine
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#131313] border border-[#ab8987]/30 p-5 space-y-2">
            <div className="w-10 h-10 bg-[#ff535b]/10 border border-[#ff535b] text-[#ff535b] flex items-center justify-center font-black">
              01
            </div>
            <h4 className="font-['Montserrat'] font-bold text-sm uppercase text-[#e5e2e1]">
              Gulf of Maine Fish & Lobster
            </h4>
            <p className="text-xs text-[#ab8987] leading-relaxed">
              Cod and lobster sourced right off the docks of Rockland and Owls Head harbors every morning.
            </p>
          </div>

          <div className="bg-[#131313] border border-[#ab8987]/30 p-5 space-y-2">
            <div className="w-10 h-10 bg-[#ff535b]/10 border border-[#ff535b] text-[#ff535b] flex items-center justify-center font-black">
              02
            </div>
            <h4 className="font-['Montserrat'] font-bold text-sm uppercase text-[#e5e2e1]">
              Authentic Nixtamal Tortillas
            </h4>
            <p className="text-xs text-[#ab8987] leading-relaxed">
              Traditional yellow and white corn tortillas, pressed fresh and double-layered to hold heavy fillings.
            </p>
          </div>

          <div className="bg-[#131313] border border-[#ab8987]/30 p-5 space-y-2">
            <div className="w-10 h-10 bg-[#ff535b]/10 border border-[#ff535b] text-[#ff535b] flex items-center justify-center font-black">
              03
            </div>
            <h4 className="font-['Montserrat'] font-bold text-sm uppercase text-[#e5e2e1]">
              Scratch-Made Salsas
            </h4>
            <p className="text-xs text-[#ab8987] leading-relaxed">
              Charred tomatillos, fire-roasted chiles, garlic confit, and fresh Mexican herbs simmered daily.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery Strip */}
      <div className="space-y-4">
        <h3 className="font-['Montserrat'] text-xl font-bold uppercase text-center text-[#ffb3b1]">
          Life on the Rig
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <img
            src={BRAND_ASSETS.chefCooking}
            alt="Chef on flat top"
            className="w-full h-36 sm:h-44 object-cover grayscale hover:grayscale-0 transition-all border border-[#ab8987]/30 shadow-[3px_3px_0px_#201f1f]"
          />
          <img
            src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80"
            alt="Fresh street tacos"
            className="w-full h-36 sm:h-44 object-cover grayscale hover:grayscale-0 transition-all border border-[#ab8987]/30 shadow-[3px_3px_0px_#201f1f]"
          />
          <img
            src={BRAND_ASSETS.eventsHero}
            alt="Festival crowd"
            className="w-full h-36 sm:h-44 object-cover grayscale hover:grayscale-0 transition-all border border-[#ab8987]/30 shadow-[3px_3px_0px_#201f1f]"
          />
          <img
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
            alt="Birria taco plate"
            className="w-full h-36 sm:h-44 object-cover grayscale hover:grayscale-0 transition-all border border-[#ab8987]/30 shadow-[3px_3px_0px_#201f1f]"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-6 space-y-4">
        <h3 className="font-['Montserrat'] text-2xl font-black uppercase text-[#e5e2e1]">
          Hungry Yet? Catch Us on the Route
        </h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onNavigate('menu')}
            className="bg-[#ff535b] text-white px-8 py-3.5 font-['Montserrat'] font-black uppercase text-xs border border-[#e5e2e1] shadow-[4px_4px_0px_#ffffff] hover:bg-[#bb152c] transition-all"
          >
            Order Menu Online
          </button>
          <button
            onClick={() => onNavigate('find-us')}
            className="bg-[#201f1f] text-[#e5e2e1] px-8 py-3.5 font-['Montserrat'] font-bold uppercase text-xs border border-[#ab8987]/40 hover:border-[#ffb3b1] transition-all"
          >
            View Truck Map
          </button>
        </div>
      </div>
    </div>
  );
};
