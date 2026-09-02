import React from 'react';
import { PageView, MenuItem } from '../types';
import { MENU_ITEMS, BRAND_ASSETS } from '../data/menuData';
import { LIVE_TRUCK_STATUS } from '../data/truckData';
import { ArrowRight, MapPin, Store, Flame, Navigation, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageView) => void;
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectItem, onQuickAdd }) => {
  // Top 3 real signature staples
  const featuredItems = MENU_ITEMS.filter((item) =>
    ['carne-asada-taco', 'carnivore-burrito', 'smash-burger'].includes(item.id)
  );

  return (
    <div className="flex flex-col w-full bg-[#111418] text-[#f1f5f9]">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[500px] sm:min-h-[560px] bg-[#111418] flex flex-col justify-end p-4 sm:p-12 overflow-hidden border-b-2 border-[#374151]">
        {/* Background Image with Clean Scrim */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${BRAND_ASSETS.heroBg}')` }}
        >
          {/* Gradient Scrim for high-contrast text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-[#111418]/85 to-[#111418]/45"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex px-3.5 py-1 bg-[#dc2626] text-white font-['Work_Sans'] font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_#000000]">
              Midcoast Maine Street Tacos
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#181c22]/90 text-[#fbbf24] border border-[#374151] px-2.5 py-0.5 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> ServSafe Certified Rig
            </span>
          </div>

          <h1 className="font-['Montserrat'] text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-1">
            Tiny Truck.<br />
            <span className="text-[#fbbf24]">Big Flavor.</span>
          </h1>

          <p className="font-['Work_Sans'] text-base sm:text-lg text-[#cbd5e1] max-w-xl mb-3 leading-relaxed">
            Freshly pressed corn tortillas, fire-grilled Carne Asada, slow-cooked pork carnitas, 12" loaded burritos, and signature smash burgers across Rockport, Owls Head & Midcoast Maine.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-[#dc2626] text-white font-['Work_Sans'] font-black text-xs uppercase px-8 py-4 text-center hover:bg-[#b91c1c] border border-white transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <span>View Full Menu & Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('find-us')}
              className="bg-[#181c22] text-white border border-[#374151] font-['Work_Sans'] font-bold text-xs uppercase px-8 py-4 text-center hover:bg-[#1f242c] hover:border-[#fbbf24] transition-all flex items-center justify-center gap-2 shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
            >
              <MapPin className="w-4 h-4 text-[#fbbf24]" />
              <span>Today's Truck Location</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Live Status Block */}
      <section className="w-full bg-[#181c22] border-b border-[#374151] py-6 px-4 sm:px-12" id="location">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-14 h-14 bg-[#111418] flex items-center justify-center border-2 border-[#dc2626] shrink-0 relative shadow-[2px_2px_0px_#000000]">
              <Store className="w-7 h-7 text-[#fbbf24]" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#181c22]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="font-['Montserrat'] text-xl font-black text-white uppercase leading-tight">
                  Truck Status: OPEN
                </h2>
                <span className="bg-green-500/20 text-green-400 border border-green-500/40 text-[10px] font-bold px-2 py-0.5 uppercase rounded-full">
                  Serving Now
                </span>
              </div>
              <p className="text-sm text-[#cbd5e1] flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <span>{LIVE_TRUCK_STATUS.streetAddress}</span>
              </p>
              <p className="font-['Work_Sans'] text-xs font-bold text-[#94a3b8] uppercase mt-0.5">
                Hours: {LIVE_TRUCK_STATUS.todayHours} • {LIVE_TRUCK_STATUS.nearDetail}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => onNavigate('find-us')}
              className="w-full sm:w-auto bg-[#111418] text-white border border-[#374151] font-['Work_Sans'] font-bold px-5 py-2.5 uppercase hover:border-[#fbbf24] hover:text-[#fbbf24] transition-all flex items-center justify-center gap-2 text-xs shadow-[2px_2px_0px_#000000]"
            >
              <Navigation className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>Get Directions</span>
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto bg-[#dc2626] text-white border border-white font-['Work_Sans'] font-bold px-5 py-2.5 uppercase hover:bg-[#b91c1c] transition-all flex items-center justify-center gap-2 text-xs shadow-[2px_2px_0px_#ffffff]"
            >
              <span>Order Ahead</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Featured Staples */}
      <section className="w-full bg-[#111418] py-12 px-4 sm:px-12 relative" id="menu">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8 border-b-2 border-[#374151] pb-4">
            <div>
              <span className="text-[11px] font-bold text-[#fbbf24] uppercase tracking-widest block mb-1">
                Rig Fan Favorites
              </span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Featured Specialties
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="hidden sm:flex font-['Work_Sans'] font-bold text-xs text-white uppercase items-center gap-1.5 hover:text-[#fbbf24] transition-colors border border-[#374151] px-3.5 py-1.5 bg-[#181c22] shadow-[2px_2px_0px_#000000]"
            >
              <span>Full Menu ({MENU_ITEMS.length} Items)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#fbbf24]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <article
                key={item.id}
                className="bg-[#181c22] border border-[#374151] p-5 flex flex-col gap-3 hover:border-[#dc2626] transition-all group relative shadow-[4px_4px_0px_#000000] hover:shadow-[4px_4px_0px_#dc2626]"
              >
                {item.isBestSeller && (
                  <div className="absolute top-0 right-0 bg-[#dc2626] text-white font-['Work_Sans'] font-bold text-[10px] uppercase px-2.5 py-1 transform translate-x-2 -translate-y-2 rotate-2 shadow-[2px_2px_0px_#000000]">
                    Best Seller
                  </div>
                )}

                {/* Photo thumbnail */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="w-full h-44 bg-[#111418] border border-[#374151] overflow-hidden cursor-pointer relative"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="flex justify-between items-start border-b border-[#374151] pb-2 border-dashed">
                  <h3
                    onClick={() => onSelectItem(item)}
                    className="font-['Montserrat'] text-lg font-bold text-white uppercase leading-tight cursor-pointer group-hover:text-[#fbbf24] transition-colors"
                  >
                    {item.name}
                  </h3>
                  <span className="font-['Montserrat'] text-lg font-black text-[#fbbf24]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-xs text-[#cbd5e1] min-h-[3rem] leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#374151]">
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] font-['Work_Sans'] font-bold uppercase rounded-full border ${
                          tag === 'Spicy'
                            ? 'border-[#dc2626] text-[#ef4444]'
                            : 'border-[#374151] text-[#94a3b8]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onQuickAdd(item)}
                    className="bg-[#111418] hover:bg-[#dc2626] text-white hover:text-white border border-[#374151] hover:border-white px-3.5 py-1.5 font-['Work_Sans'] font-bold text-xs uppercase transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
                  >
                    Add +
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <button
              onClick={() => onNavigate('menu')}
              className="w-full bg-[#dc2626] text-white border border-white font-['Work_Sans'] font-bold px-6 py-4 uppercase text-center hover:bg-[#b91c1c] transition-colors flex items-center justify-center gap-2 text-xs shadow-[3px_3px_0px_#000000]"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. The Real Taco Joe Story & Verified Details */}
      <section className="w-full bg-[#181c22] py-16 px-4 sm:px-12 border-t border-[#374151]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#dc2626]">
                Midcoast Maine
              </span>
              <span className="text-xs text-[#94a3b8]">• ServSafe Certified</span>
            </div>
            
            <h2 className="font-['Montserrat'] text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
              Real Tacos.<br />
              <span className="text-[#fbbf24]">Real Flavor.</span>
            </h2>
            <div className="w-16 h-1 bg-[#dc2626] mb-2"></div>
            
            <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              Taco Joe brings authentic Mexican street tacos, massive 12" burritos, cheesy quesadillas, and grilled smash burgers to Rockport, Owls Head, Rockland, and surrounding Midcoast Maine communities.
            </p>
            
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Operated by pitmaster Joseph Simko, every dish is grilled to order on our mobile flat-top with fresh pico de gallo, handmade sweet corn salsa, and signature avocado ranch.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="w-36 h-24 border border-[#374151] shadow-[3px_3px_0px_#000000] overflow-hidden bg-[#111418]">
                <img
                  src={BRAND_ASSETS.truckFoodPrep}
                  alt="Taco prep on grill"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs space-y-1">
                <p className="font-bold text-white uppercase">34 Commercial St, Rockport</p>
                <p className="text-[#94a3b8]">117 Museum St, Owls Head</p>
                <p className="text-[#fbbf24] font-bold">Facebook: @TACOJOE_OFFICIAL</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#fbbf24] hover:text-white border-b border-[#fbbf24] pb-0.5"
              >
                <span>Read Story & Background</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.facebook.com/profile.php?id=100088337054895&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-white hover:text-[#fbbf24]"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Facebook Photo Gallery</span>
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center">
            {/* Main Image Container */}
            <div className="relative z-10 border-4 border-[#111418] bg-[#181c22] p-3 shadow-[8px_8px_0px_#dc2626] max-w-sm sm:max-w-md w-full">
              <img
                src={BRAND_ASSETS.tacoSpread}
                alt="Fresh Taco Joe Street Tacos"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="mt-2 text-center text-xs font-bold text-[#fbbf24] uppercase tracking-wider">
                Handcrafted Street Tacos • Single $7 | Two $13 | Three $18
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Catering Quick Promo Banner */}
      <section className="w-full bg-[#111418] border-t-2 border-b-2 border-[#374151] py-12 px-4 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block p-2 bg-[#dc2626]/15 border border-[#dc2626] text-[#dc2626]">
            <Flame className="w-6 h-6 fill-current" />
          </span>
          <h2 className="font-['Montserrat'] text-2xl sm:text-4xl font-black uppercase text-white">
            Book Taco Joe For Your Event
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md mx-auto">
            Bring Midcoast Maine's favorite taco truck to your private party, wedding, brewery, or corporate gathering.
          </p>
          <button
            onClick={() => onNavigate('events')}
            className="bg-[#dc2626] text-white font-['Montserrat'] font-black uppercase text-xs sm:text-sm py-3.5 px-8 border border-white shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#b91c1c] transition-all"
          >
            Get a Catering Quote
          </button>
        </div>
      </section>
    </div>
  );
};
