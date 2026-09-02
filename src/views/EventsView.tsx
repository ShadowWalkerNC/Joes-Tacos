import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/menuData';
import { TESTIMONIALS } from '../data/truckData';
import { Truck, Utensils, Flame, CheckCircle, Quote } from 'lucide-react';

export const EventsView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '50 - 100',
    service: 'truck-takeover',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const calculateEstimate = (guestTier: string, service: string) => {
    let perPerson = 20;
    if (service === 'truck-takeover') perPerson = 24;
    if (service === 'taco-bar') perPerson = 19;
    if (service === 'late-night') perPerson = 16;

    let count = 75;
    if (guestTier === 'Less than 50') count = 40;
    if (guestTier === '50 - 100') count = 75;
    if (guestTier === '100 - 200') count = 150;
    if (guestTier === '200+') count = 250;

    return count * perPerson;
  };

  const handleGuestChange = (val: string) => {
    setFormData((prev) => ({ ...prev, guests: val }));
  };

  const handleServiceChange = (val: string) => {
    setFormData((prev) => ({ ...prev, service: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-12 pb-24 gap-12 max-w-5xl mx-auto min-h-screen text-[#f1f5f9] bg-[#111418]">
      {/* 1. Header */}
      <div className="flex flex-col gap-2 pt-8 text-center">
        <span className="text-xs font-bold text-[#dc2626] uppercase tracking-widest">
          Catering & Private Gigs
        </span>
        <h1 className="font-['Montserrat'] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          Bring the<br />
          <span className="text-[#fbbf24]">Heat</span>
        </h1>
        <p className="font-['Work_Sans'] text-sm sm:text-base text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
          Taco Joe caters events of all sizes. From backyard throwdowns to brewery rallies and wedding takeovers.
        </p>
      </div>

      {/* 2. Hero Event Photo with #TACOJOEEVENTS Sticker */}
      <div
        className="w-full aspect-[4/3] sm:aspect-[21/9] bg-[#181c22] border-2 border-white relative overflow-hidden bg-cover bg-center shadow-[6px_6px_0px_#000000]"
        style={{ backgroundImage: `url('${BRAND_ASSETS.eventsHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-[#111418]/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
          <div className="bg-[#111418] border border-white p-3 inline-block shadow-[3px_3px_0px_#000]">
            <span className="font-['Montserrat'] font-black text-xs sm:text-sm text-[#fbbf24] uppercase tracking-wider block">
              #TACOJOEEVENTS
            </span>
          </div>
        </div>
      </div>

      {/* 3. Services Grid */}
      <div className="flex flex-col gap-6">
        <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-black uppercase text-center border-b-4 border-[#dc2626] pb-2 inline-block mx-auto text-white">
          Catering Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Service 1: Truck Takeover */}
          <div className="bg-[#181c22] border border-[#374151] p-6 flex flex-col gap-3 items-center text-center shadow-[4px_4px_0px_#000000] hover:border-[#dc2626] transition-all">
            <div className="w-16 h-16 bg-[#111418] border-2 border-[#dc2626] flex items-center justify-center text-[#fbbf24] shadow-[4px_4px_0_0_#000000]">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="font-['Montserrat'] font-black text-lg sm:text-xl uppercase mt-2 text-white">
              Truck Takeover
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              The full Taco Joe experience. We roll up in the rig, fire the flat-top, and serve hot street tacos directly out of the window.
            </p>
            <span className="text-[11px] font-bold text-[#fbbf24] uppercase mt-auto">
              Starting at $24/person
            </span>
          </div>

          {/* Service 2: Taco Bar */}
          <div className="bg-[#181c22] border border-[#374151] p-6 flex flex-col gap-3 items-center text-center shadow-[4px_4px_0px_#000000] hover:border-[#dc2626] transition-all">
            <div className="w-16 h-16 bg-[#111418] border-2 border-[#fbbf24] flex items-center justify-center text-[#fbbf24] shadow-[4px_4px_0_0_#000000]">
              <Utensils className="w-8 h-8" />
            </div>
            <h3 className="font-['Montserrat'] font-black text-lg sm:text-xl uppercase mt-2 text-white">
              Taco Bar Setup
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              Chafing dishes, warm double corn tortillas, slow-cooked meats, fresh salsas, chips & homemade guac for indoor venues.
            </p>
            <span className="text-[11px] font-bold text-[#fbbf24] uppercase mt-auto">
              Starting at $19/person
            </span>
          </div>

          {/* Service 3: Late Night Drop */}
          <div className="bg-[#181c22] border border-[#374151] p-6 flex flex-col gap-3 items-center text-center shadow-[4px_4px_0px_#000000] hover:border-[#dc2626] transition-all">
            <div className="w-16 h-16 bg-[#111418] border-2 border-[#dc2626] flex items-center justify-center text-[#dc2626] shadow-[4px_4px_0_0_#000000]">
              <Flame className="w-8 h-8 fill-current" />
            </div>
            <h3 className="font-['Montserrat'] font-black text-lg sm:text-xl uppercase mt-2 text-white">
              Late Night Drop
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              Wedding after-parties & late night gigs. 100+ piping hot foil-wrapped burritos and street tacos dropped right on schedule.
            </p>
            <span className="text-[11px] font-bold text-[#fbbf24] uppercase mt-auto">
              Starting at $16/person
            </span>
          </div>
        </div>
      </div>

      {/* 4. Word on the Street Testimonial */}
      <div className="bg-[#181c22] border-2 border-white p-6 sm:p-8 relative mt-4 shadow-[6px_6px_0px_#000000]">
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white px-3 py-1 font-['Montserrat'] font-black text-[10px] uppercase tracking-widest border border-white">
          Word on the Street
        </div>
        <div className="flex flex-col items-center text-center gap-3 pt-2">
          <Quote className="w-10 h-10 text-[#fbbf24]" />
          <p className="font-['Work_Sans'] text-base sm:text-xl text-[#f1f5f9] italic max-w-2xl leading-relaxed">
            "{TESTIMONIALS[0].quote}"
          </p>
          <span className="font-['Montserrat'] font-bold text-xs sm:text-sm text-[#fbbf24] uppercase tracking-wider">
            — {TESTIMONIALS[0].author}, {TESTIMONIALS[0].location}
          </span>
        </div>
      </div>

      {/* 5. Request a Quote Form */}
      <div className="flex flex-col gap-6 pt-4 border-t border-[#374151]">
        <div className="text-center">
          <span className="text-[11px] font-bold text-[#dc2626] uppercase tracking-widest">
            Fast Response Within 24h
          </span>
          <h2 className="font-['Montserrat'] text-2xl sm:text-4xl font-black uppercase text-white mt-0.5">
            Request a Quote
          </h2>
        </div>

        {submitted ? (
          <div className="bg-[#181c22] border-2 border-green-500 p-8 text-center space-y-4 shadow-[6px_6px_0px_#000]">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto animate-bounce" />
            <h3 className="font-['Montserrat'] text-2xl font-black uppercase text-white">
              Inquiry Received!
            </h3>
            <p className="text-sm text-[#cbd5e1] max-w-md mx-auto">
              Thanks <strong>{formData.name}</strong>! We’ve received your event details for{' '}
              <strong>{formData.date || 'your upcoming date'}</strong> with ~{formData.guests} guests.
              The Taco Joe crew will check truck availability and email you an exact breakdown within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  date: '',
                  guests: '50 - 100',
                  service: 'truck-takeover',
                  details: ''
                });
              }}
              className="mt-2 bg-[#dc2626] text-white px-6 py-2.5 font-bold uppercase text-xs border border-white shadow-[2px_2px_0px_#ffffff]"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full bg-[#181c22] border border-[#374151] p-6 sm:p-8 shadow-[6px_6px_0px_#000000]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-['Montserrat'] text-xs font-bold uppercase text-white" htmlFor="name">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-[#111418] border border-[#374151] p-3 text-xs text-white focus:outline-none focus:border-[#fbbf24] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-['Montserrat'] text-xs font-bold uppercase text-white" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="bg-[#111418] border border-[#374151] p-3 text-xs text-white focus:outline-none focus:border-[#fbbf24] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-['Montserrat'] text-xs font-bold uppercase text-white" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(207) 555-0199"
                  className="bg-[#111418] border border-[#374151] p-3 text-xs text-white focus:outline-none focus:border-[#fbbf24] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-['Montserrat'] text-xs font-bold uppercase text-white" htmlFor="date">
                  Event Date *
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-[#111418] border border-[#374151] p-3 text-xs text-white focus:outline-none focus:border-[#fbbf24] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-['Montserrat'] text-xs font-bold uppercase text-white" htmlFor="service">
                  Catering Style
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="bg-[#111418] border border-[#374151] p-3 text-xs text-white focus:outline-none focus:border-[#fbbf24] transition-all"
                >
                  <option value="truck-takeover">Truck Takeover (Full Rig Onsite)</option>
                  <option value="taco-bar">Taco Bar Buffet Setup</option>
                  <option value="late-night">Late Night Burrito & Taco Drop</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-['Montserrat'] text-xs font-bold uppercase text-white" htmlFor="guests">
                  Estimated Guests
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => handleGuestChange(e.target.value)}
                  className="bg-[#111418] border border-[#374151] p-3 text-xs text-white focus:outline-none focus:border-[#fbbf24] transition-all"
                >
                  <option value="Less than 50">Less than 50 guests</option>
                  <option value="50 - 100">50 - 100 guests</option>
                  <option value="100 - 200">100 - 200 guests</option>
                  <option value="200+">200+ guests (Festival Scale)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['Montserrat'] text-xs font-bold uppercase text-white" htmlFor="details">
                Event Details & Location
              </label>
              <textarea
                id="details"
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us about the gig (venue address, event type, timeline)..."
                className="bg-[#111418] border border-[#374151] p-3 text-xs text-white focus:outline-none focus:border-[#fbbf24] transition-all resize-none"
              />
            </div>

            {/* Quick Estimate calculator pill */}
            <div className="bg-[#111418] p-3 border border-[#374151] flex items-center justify-between text-xs">
              <span className="text-[#94a3b8]">Estimated base package for {formData.guests}:</span>
              <span className="font-['Montserrat'] font-black text-[#fbbf24] text-sm">
                ~${calculateEstimate(formData.guests, formData.service).toLocaleString()}
              </span>
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#dc2626] text-white font-['Montserrat'] font-black uppercase text-sm py-4 border border-white hover:bg-[#b91c1c] transition-colors shadow-[4px_4px_0_0_#ffffff] active:translate-y-1"
            >
              Send Catering Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
