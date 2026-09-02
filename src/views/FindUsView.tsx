import React, { useState } from 'react';
import { LIVE_TRUCK_STATUS, WEEKLY_ROUTE, SPECIAL_EVENTS } from '../data/truckData';
import { GoogleTruckMap } from '../components/GoogleTruckMap';
import { ScheduleDay } from '../types';
import { Navigation, Route, Calendar, Bell, ArrowRight, Check, ExternalLink } from 'lucide-react';

interface FindUsViewProps {
  onOpenDirections: (location: string, address: string) => void;
}

export const FindUsView: React.FC<FindUsViewProps> = ({ onOpenDirections }) => {
  const [phoneAlert, setPhoneAlert] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneAlert.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#111418] text-[#f1f5f9] min-h-screen pb-12">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="px-4 sm:px-12 py-8">
          <span className="text-[11px] font-bold text-[#fbbf24] uppercase tracking-widest block mb-1">
            Midcoast Rig GPS Tracker
          </span>
          <h1 className="font-['Montserrat'] text-3xl sm:text-5xl font-black text-white uppercase mb-2">
            Track Us Down
          </h1>
          <p className="font-['Work_Sans'] text-sm sm:text-base text-[#cbd5e1] max-w-md leading-relaxed">
            Fresh tortillas wait for no one. Find the rig in Rockport, Owls Head, or Belfast before the carnitas sell out.
          </p>
        </div>

        {/* Live Interactive Google Map Container */}
        <div className="px-4 sm:px-12 mb-10 w-full">
          <GoogleTruckMap
            onOpenDirections={onOpenDirections}
            height="460px"
          />
        </div>

        {/* Weekly Route Section */}
        <div className="px-4 sm:px-12 mb-12">
          <div className="flex items-center justify-between mb-6 border-b-2 border-[#374151] pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#fbbf24]">
                Weekly Schedule
              </span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-black text-white uppercase">
                The Route
              </h2>
            </div>
            <Route className="w-8 h-8 text-[#dc2626] rotate-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WEEKLY_ROUTE.map((day) => (
              <div key={day.id} className="relative group">
                <div className="relative bg-[#181c22] border border-[#374151] p-4 flex flex-col justify-between h-full gap-3 shadow-[3px_3px_0px_#000000] hover:border-[#fbbf24] transition-all">
                  <div className="flex justify-between items-start border-b border-[#374151] pb-2.5">
                    <div className="flex items-center gap-2">
                      {day.isToday && (
                        <span className="font-['Work_Sans'] font-bold text-[10px] text-white bg-[#dc2626] px-2 py-0.5 uppercase shadow-[1px_1px_0px_#000]">
                          Today
                        </span>
                      )}
                      <h3 className="font-['Montserrat'] font-bold text-lg uppercase text-white">
                        {day.dayName}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#fbbf24] font-bold">
                      {day.timeRange}
                    </span>
                  </div>

                  <div>
                    <p className="font-['Montserrat'] text-sm font-bold text-white uppercase">
                      {day.locationName}
                    </p>
                    <p className="text-xs text-[#cbd5e1] mt-0.5">{day.address}</p>
                    <p className="text-[11px] text-[#94a3b8] italic mt-1">{day.notes}</p>
                  </div>

                  <div className="pt-2 border-t border-[#374151] flex items-center justify-between">
                    <span className="text-[10px] text-[#94a3b8] font-bold uppercase">
                      {day.isToday ? '🔥 Open right now' : 'Scheduled Stop'}
                    </span>
                    <button
                      onClick={() => onOpenDirections(day.locationName, day.address)}
                      className="w-8 h-8 border border-[#374151] flex items-center justify-center text-white hover:bg-[#dc2626] hover:text-white hover:border-white transition-colors"
                      title="Navigate"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Festivals */}
        <div className="bg-[#181c22] px-4 sm:px-12 py-12 border-t-2 border-b-2 border-[#374151] relative overflow-hidden">
          <Calendar className="absolute -right-6 -top-6 w-40 h-40 text-[#111418] opacity-60 rotate-[-15deg] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#fbbf24]">
              Summer & Fall Rallies
            </span>
            <h2 className="font-['Montserrat'] text-2xl sm:text-4xl font-black text-white uppercase mb-2">
              Special Events & Rallies
            </h2>
            <p className="text-sm text-[#cbd5e1] mb-6">
              Catch the truck outside its normal schedule for rallies, festivals, and live music.
            </p>

            <ul className="flex flex-col border border-[#374151] bg-[#111418] divide-y divide-[#374151]">
              {SPECIAL_EVENTS.map((event) => (
                <li
                  key={event.id}
                  onClick={() => onOpenDirections(event.title, event.location + ', Maine')}
                  className="p-4 sm:p-5 flex items-center gap-4 hover:bg-[#1f242c] transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col items-center justify-center bg-[#dc2626] text-white w-14 h-14 shrink-0 shadow-[2px_2px_0px_#000000]">
                    <span className="font-['Montserrat'] font-black uppercase text-[11px] leading-none">
                      {event.month}
                    </span>
                    <span className="font-['Montserrat'] font-black text-xl leading-none mt-1">
                      {event.day}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Montserrat'] font-bold text-sm sm:text-base text-white uppercase group-hover:text-[#fbbf24] transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs text-[#cbd5e1] mt-0.5">{event.location} • {event.time}</p>
                    <p className="text-[11px] text-[#94a3b8] mt-1 line-clamp-1">{event.description}</p>
                  </div>

                  <span className="w-8 h-8 border border-[#374151] flex items-center justify-center text-[#fbbf24] group-hover:bg-[#dc2626] group-hover:text-white transition-all shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SMS Truck Location Alert Box */}
        <div className="px-4 sm:px-12 mt-12">
          <div className="bg-[#181c22] border-2 border-[#374151] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_#000000]">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#fbbf24]" />
                <h3 className="font-['Montserrat'] text-xl font-black uppercase text-white">
                  Live Rig SMS Alerts
                </h3>
              </div>
              <p className="text-xs text-[#cbd5e1] max-w-md">
                Get a text when the truck fires up the grill in your town or when daily specials drop.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-[#111418] border border-green-500 px-4 py-3 text-xs font-bold text-green-400 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>You're on the Rig VIP radar! We'll text you when we roll up.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                <input
                  type="tel"
                  required
                  value={phoneAlert}
                  onChange={(e) => setPhoneAlert(e.target.value)}
                  placeholder="Enter Cell # (e.g. 207-555-0199)"
                  className="bg-[#111418] border border-[#374151] p-2.5 text-xs text-white focus:outline-none focus:border-[#fbbf24] w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="bg-[#dc2626] text-white px-5 py-2.5 font-['Montserrat'] font-bold text-xs uppercase border border-white shadow-[2px_2px_0px_#ffffff] hover:bg-[#b91c1c] transition-all shrink-0"
                >
                  Join Radar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
