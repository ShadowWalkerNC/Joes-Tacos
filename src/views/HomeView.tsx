import React from 'react';
import { PageView, MenuItem } from '../types';
import { MENU_ITEMS, BRAND_ASSETS } from '../data/menuData';
import { LIVE_TRUCK_STATUS } from '../data/truckData';
import { ArrowRight, MapPin, Store, Flame, Navigation, Check, Award, ChevronRight, Phone } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageView) => void;
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectItem, onQuickAdd }) => {
  const featuredItems = MENU_ITEMS.slice(0, 3); // Carne Asada, Al Pastor, Baja Fish

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] bg-[#131313] flex flex-col justify-end p-4 sm:p-12 overflow-hidden border-b border-[#353534]">
        {/* Background Image with Dark Scrim */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${BRAND_ASSETS.heroBg}')` }}
        >
          {/* Gradient Scrim for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/85 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-3">
          <span className="inline-flex px-3.5 py-1 bg-[#ff535b] text-white font-['Work_Sans'] font-bold text-xs uppercase rounded-full w-fit tracking-wider shadow-[2px_2px_0px_#000000]">
            Now Serving
          </span>

          <h1 className="font-['Montserrat'] text-4xl sm:text-6xl lg:text-7xl font-black text-[#e5e2e1] uppercase tracking-tight leading-[1.05] mb-1">
            Tiny Truck.<br />
            <span className="text-[#ffb3b1]">Big Flavor.</span>
          </h1>

          <p className="font-['Work_Sans'] text-base sm:text-lg text-[#e4bebc] max-w-lg mb-4 leading-relaxed">
            Authentic street tacos crafted with attitude. Serving up Midcoast Maine daily.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-[#131313] text-[#e5e2e1] border-b-4 border-[#ff535b] border-t border-l border-r border-[#353534] font-['Work_Sans'] font-bold text-xs uppercase px-8 py-4 text-center hover:bg-[#ff535b] hover:text-white transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_rgba(255,83,91,0.4)] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <span>View Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('find-us')}
              className="bg-[#201f1f] text-[#e5e2e1] border border-[#ab8987]/30 font-['Work_Sans'] font-bold text-xs uppercase px-8 py-4 text-center hover:bg-[#2a2a2a] hover:border-[#ffb3b1] transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#131313] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <MapPin className="w-4 h-4 text-[#ff535b]" />
              <span>Find Us Today</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Live Status Block */}
      <section className="w-full bg-[#2a2a2a] border-b border-[#ab8987]/20 py-6 px-4 sm:px-12" id="location">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-14 h-14 rounded-full bg-[#201f1f] flex items-center justify-center border-2 border-[#ff535b] shrink-0 relative animate-pulse shadow-[2px_2px_0px_#ffb3b1]">
              <Store className="w-7 h-7 text-[#ffb3b1]" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#ff535b] rounded-full border-2 border-[#2a2a2a]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="font-['Montserrat'] text-xl font-black text-[#e5e2e1] uppercase leading-tight">
                  Live Status: OPEN
                </h2>
                <span className="bg-green-500/20 text-green-400 border border-green-500/40 text-[10px] font-bold px-2 py-0.5 uppercase rounded-full">
                  Serving Now
                </span>
              </div>
              <p className="text-sm text-[#e4bebc] flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff535b] shrink-0" />
                <span>{LIVE_TRUCK_STATUS.streetAddress}</span>
              </p>
              <p className="font-['Work_Sans'] text-xs font-bold text-[#ab8987] uppercase mt-0.5">
                Closes at 8:00 PM • {LIVE_TRUCK_STATUS.nearDetail}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => onNavigate('find-us')}
              className="w-full sm:w-auto bg-[#131313] text-[#e5e2e1] border border-[#ab8987]/50 font-['Work_Sans'] font-bold px-5 py-2.5 uppercase hover:border-[#ff535b] hover:text-[#ffb3b1] transition-all flex items-center justify-center gap-2 text-xs shadow-[2px_2px_0px_#000]"
            >
              <Navigation className="w-3.5 h-3.5 text-[#ff535b]" />
              <span>Get Directions</span>
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto bg-[#ff535b] text-white border border-[#e5e2e1] font-['Work_Sans'] font-bold px-5 py-2.5 uppercase hover:bg-[#bb152c] transition-all flex items-center justify-center gap-2 text-xs shadow-[2px_2px_0px_#ffffff]"
            >
              <span>Order Ahead</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Featured Staples (Menu) */}
      <section className="w-full bg-[#131313] py-12 px-4 sm:px-12 relative" id="menu">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8 border-b-4 border-[#201f1f] pb-4">
            <div>
              <span className="text-[11px] font-bold text-[#ffb3b1] uppercase tracking-widest block mb-1">
                Rig Classics
              </span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-4xl font-black text-[#e5e2e1] uppercase tracking-tight">
                Featured Staples
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="hidden sm:flex font-['Work_Sans'] font-bold text-xs text-[#ffb3b1] uppercase items-center gap-1.5 hover:text-[#ff535b] transition-colors border border-[#ffb3b1]/30 px-3 py-1.5 bg-[#201f1f]"
            >
              <span>Full Menu ({MENU_ITEMS.length} Items)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <article
                key={item.id}
                className="bg-[#201f1f] border border-[#ab8987]/30 p-5 flex flex-col gap-3 hover:border-[#ff535b] transition-all group relative shadow-[4px_4px_0px_#1c1b1b] hover:shadow-[4px_4px_0px_#ff535b]"
              >
                {item.isBestSeller && (
                  <div className="absolute top-0 right-0 bg-[#ff535b] text-white font-['Work_Sans'] font-bold text-[10px] uppercase px-2.5 py-1 transform translate-x-2 -translate-y-2 rotate-3 shadow-[2px_2px_0px_#000]">
                    Best Seller
                  </div>
                )}

                {/* Photo thumbnail */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="w-full h-40 bg-[#131313] border border-[#353534] overflow-hidden cursor-pointer relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-[#ff535b]/10 mix-blend-color opacity-20"></div>
                </div>

                <div className="flex justify-between items-start border-b border-[#ab8987]/20 pb-2 border-dashed">
                  <h3
                    onClick={() => onSelectItem(item)}
                    className="font-['Montserrat'] text-xl font-bold text-[#e5e2e1] uppercase leading-none cursor-pointer group-hover:text-[#ffb3b1] transition-colors"
                  >
                    {item.name}
                  </h3>
                  <span className="font-['Montserrat'] text-xl font-black text-[#ffb3b1]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-xs text-[#e4bebc] min-h-[3rem] leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#353534]">
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] font-['Work_Sans'] font-bold uppercase rounded-full border ${
                          tag === 'Spicy'
                            ? 'border-[#ff535b]/50 text-[#ff535b]'
                            : 'border-[#ab8987]/30 text-[#ab8987]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onQuickAdd(item)}
                    className="bg-[#131313] hover:bg-[#ff535b] text-[#e5e2e1] hover:text-white border border-[#ab8987]/40 px-3 py-1 font-['Work_Sans'] font-bold text-xs uppercase transition-all shadow-[2px_2px_0px_#ffb3b1] active:translate-x-[1px] active:translate-y-[1px]"
                  >
                    Add
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <button
              onClick={() => onNavigate('menu')}
              className="w-full bg-[#131313] text-[#e5e2e1] border-b-2 border-[#ff535b] border-t border-l border-r border-[#353534] font-['Work_Sans'] font-bold px-6 py-4 uppercase text-center hover:bg-[#ff535b] hover:text-white transition-colors flex items-center justify-center gap-2 text-xs shadow-[3px_3px_0px_#ff535b]"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. The Taco Joe Story Section */}
      <section className="w-full bg-[#0e0e0e] py-16 px-4 sm:px-12 border-t border-[#ab8987]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ff535b]">
              Born in Maine
            </span>
            <h2 className="font-['Montserrat'] text-3xl sm:text-5xl font-black text-[#e5e2e1] uppercase tracking-tight leading-none">
              No Rules.<br />
              <span className="text-[#ffb3b1]">Just Tacos.</span>
            </h2>
            <div className="w-16 h-1 bg-[#ff535b] mb-2"></div>
            
            <p className="text-sm sm:text-base text-[#e4bebc] leading-relaxed">
              We started with a rusty truck, a borrowed flat top, and a simple idea: Maine deserves better street food. No pretentious menus, no coastal pastel decor—just high-heat cooking, loud music, and flavors that punch you in the mouth.
            </p>
            
            <p className="text-xs sm:text-sm text-[#ab8987] leading-relaxed">
              Every morning we prep fresh ingredients, slow-roast our pork shoulder, make our fiery salsas from scratch, and serve until we sell out. That's the Taco Joe promise.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <img
                src={BRAND_ASSETS.chefCooking}
                alt="Chef chopping on plancha"
                className="w-44 h-28 object-cover grayscale border border-[#ab8987]/30 shadow-[3px_3px_0px_#ffb3b1]"
              />
              <div className="text-xs space-y-1">
                <p className="font-bold text-[#e5e2e1] uppercase">Fire-Grilled Daily</p>
                <p className="text-[#ab8987]">100% Corn Tortillas</p>
                <p className="text-[#ffb3b1] font-bold">Local Maine Ingredients</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#ffb3b1] hover:text-[#ff535b] border-b border-[#ff535b] pb-0.5"
              >
                <span>Read Full Story & Meet The Rig</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center">
            {/* Main Image Container with bold brutalist framing */}
            <div className="relative z-10 border-4 border-[#131313] bg-[#201f1f] p-3 shadow-[8px_8px_0px_#ff535b] max-w-sm sm:max-w-md">
              <img
                src={BRAND_ASSETS.truckBrandingArt}
                alt="Taco Joe Branding"
                className="w-full h-auto object-cover grayscale contrast-125 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-500"
              />
            </div>
            {/* Decorative background accent elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#ff535b]/10 rounded-full blur-xl z-0 pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#201f1f] border border-[#ab8987]/20 z-0 transform rotate-6 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 5. Catering Quick Promo Banner */}
      <section className="w-full bg-[#1c1b1b] border-t-2 border-b-2 border-[#ff535b] py-10 px-4 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block p-2 bg-[#ff535b]/10 border border-[#ff535b] rounded-full text-[#ff535b]">
            <Flame className="w-6 h-6" />
          </span>
          <h2 className="font-['Montserrat'] text-2xl sm:text-4xl font-black uppercase text-[#e5e2e1]">
            Need the Rig at Your Next Event?
          </h2>
          <p className="text-xs sm:text-sm text-[#ab8987] max-w-md mx-auto">
            From backyard parties to brewery rallies and oceanfront weddings. We roll up and serve hot tacos fresh on the spot.
          </p>
          <button
            onClick={() => onNavigate('events')}
            className="bg-[#ff535b] text-white font-['Montserrat'] font-black uppercase text-xs sm:text-sm py-3.5 px-8 border border-[#e5e2e1] shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#bb152c] transition-all"
          >
            Get a Catering Quote
          </button>
        </div>
      </section>
    </div>
  );
};
