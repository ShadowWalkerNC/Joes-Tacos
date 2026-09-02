// Source: Google Maps Platform Code Assist
import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { LIVE_TRUCK_STATUS, WEEKLY_ROUTE } from '../data/truckData';
import { MapPin, Navigation, ExternalLink, Layers, Compass, CheckCircle2 } from 'lucide-react';

interface GoogleTruckMapProps {
  onOpenDirections?: (location: string, address: string) => void;
  selectedLocationId?: string;
  className?: string;
  height?: string;
}

export const GoogleTruckMap: React.FC<GoogleTruckMapProps> = ({
  onOpenDirections,
  selectedLocationId: initialSelectedId,
  className = '',
  height = '460px'
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  
  // All active stops
  const stops = [
    {
      id: 'live-rockport',
      name: 'Rockport Harbor (Live Rig)',
      address: LIVE_TRUCK_STATUS.streetAddress,
      lat: LIVE_TRUCK_STATUS.lat,
      lng: LIVE_TRUCK_STATUS.lng,
      isLive: true,
      hours: LIVE_TRUCK_STATUS.todayHours,
      note: LIVE_TRUCK_STATUS.nearDetail,
      day: 'Today / Live'
    },
    ...WEEKLY_ROUTE.filter(r => r.lat && r.lng && r.address !== LIVE_TRUCK_STATUS.streetAddress).map(r => ({
      id: r.id,
      name: r.locationName,
      address: r.address,
      lat: r.lat!,
      lng: r.lng!,
      isLive: false,
      hours: r.timeRange,
      note: r.notes,
      day: r.dayName
    }))
  ];

  const [activeStop, setActiveStop] = useState(stops[0]);
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(stops[0].id);
  const [mapMode, setMapMode] = useState<'roadmap' | 'satellite'>('roadmap');

  const handleSelectStop = (stop: typeof stops[0]) => {
    setActiveStop(stop);
    setSelectedMarkerId(stop.id);
  };

  // Google Maps Embed Query
  const embedQuery = encodeURIComponent(`${activeStop.name}, ${activeStop.address}`);
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeStop.lat + ',' + activeStop.lng
  )}&z=15&output=embed&hl=en`;

  return (
    <div className={`relative flex flex-col w-full bg-[#181c22] border-2 border-white shadow-[6px_6px_0px_#000000] overflow-hidden ${className}`}>
      {/* Top Location Selector Tabs */}
      <div className="bg-[#111418] border-b border-[#374151] p-2 sm:p-3 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-black uppercase text-[#94a3b8] px-2 py-1 tracking-wider hidden sm:inline">
            Stops:
          </span>
          {stops.map((stop) => {
            const isSelected = activeStop.id === stop.id;
            return (
              <button
                key={stop.id}
                onClick={() => handleSelectStop(stop)}
                className={`px-2.5 py-1.5 text-[11px] font-['Montserrat'] font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                  isSelected
                    ? stop.isLive
                      ? 'bg-[#dc2626] text-white border-white shadow-[2px_2px_0px_#000]'
                      : 'bg-[#fbbf24] text-black border-white shadow-[2px_2px_0px_#000]'
                    : 'bg-[#181c22] text-[#cbd5e1] border-[#374151] hover:border-white'
                }`}
              >
                {stop.isLive && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                )}
                <span>{stop.isLive ? '🔴 Live: Rockport' : stop.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(activeStop.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-[10px] font-bold uppercase bg-[#181c22] text-[#fbbf24] border border-[#374151] hover:border-[#fbbf24] flex items-center gap-1 transition-colors"
            title="Open in full Google Maps app"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">Open in Google Maps</span>
          </a>
        </div>
      </div>

      {/* Main Map Canvas Area */}
      <div className="relative w-full overflow-hidden" style={{ height }}>
        {apiKey ? (
          <APIProvider apiKey={apiKey}>
            <Map
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              mapId="DEMO_MAP_ID"
              style={{ width: '100%', height: '100%' }}
              center={{ lat: activeStop.lat, lng: activeStop.lng }}
              zoom={14}
              mapTypeId={mapMode}
              gestureHandling="greedy"
              disableDefaultUI={false}
            >
              {stops.map((stop) => (
                <AdvancedMarker
                  key={stop.id}
                  position={{ lat: stop.lat, lng: stop.lng }}
                  onClick={() => handleSelectStop(stop)}
                >
                  <Pin
                    background={stop.isLive ? '#dc2626' : '#fbbf24'}
                    borderColor="#ffffff"
                    glyphColor="#ffffff"
                    scale={stop.isLive ? 1.3 : 1.1}
                  />
                </AdvancedMarker>
              ))}

              {selectedMarkerId && (
                <InfoWindow
                  position={{ lat: activeStop.lat, lng: activeStop.lng }}
                  onCloseClick={() => setSelectedMarkerId(null)}
                >
                  <div className="p-2 text-black max-w-xs font-['Work_Sans']">
                    <div className="flex items-center gap-1">
                      {activeStop.isLive && (
                        <span className="bg-red-600 text-white text-[9px] font-bold uppercase px-1.5 py-0.5 rounded">
                          Live Rig
                        </span>
                      )}
                      <h4 className="font-['Montserrat'] font-black text-xs uppercase text-neutral-900">
                        {activeStop.name}
                      </h4>
                    </div>
                    <p className="text-[11px] text-neutral-600 mt-1">{activeStop.address}</p>
                    <p className="text-[11px] font-bold text-neutral-800 mt-0.5">{activeStop.hours}</p>
                    <button
                      onClick={() => onOpenDirections?.(activeStop.name, activeStop.address)}
                      className="mt-2 w-full bg-red-600 text-white text-[10px] font-bold uppercase py-1 px-2 rounded hover:bg-red-700"
                    >
                      Directions
                    </button>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* High quality interactive Google Maps embed with full pan/zoom & exact satellite/street terrain */
          <div className="relative w-full h-full bg-[#111418]">
            <iframe
              title={`Google Map for ${activeStop.name}`}
              src={embedUrl}
              className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.98]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

        {/* Floating Quick Action Overlay Badge */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md bg-[#181c22]/95 backdrop-blur-md border-2 border-white p-3.5 shadow-[4px_4px_0px_#000000] z-20">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[9px] font-black uppercase px-2 py-0.5 font-['Montserrat'] ${
                    activeStop.isLive
                      ? 'bg-[#dc2626] text-white animate-pulse'
                      : 'bg-[#fbbf24] text-black'
                  }`}
                >
                  {activeStop.isLive ? '🔥 Rig Onsite Now' : `${activeStop.day} Stop`}
                </span>
                <span className="text-[10px] text-[#94a3b8] font-mono">{activeStop.hours}</span>
              </div>
              <h4 className="font-['Montserrat'] font-black text-sm uppercase text-white leading-tight">
                {activeStop.name}
              </h4>
              <p className="text-[11px] text-[#cbd5e1] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#dc2626] shrink-0" />
                <span className="truncate">{activeStop.address}</span>
              </p>
            </div>

            <div className="flex flex-col gap-1.5 shrink-0">
              <button
                onClick={() => onOpenDirections?.(activeStop.name, activeStop.address)}
                className="bg-[#dc2626] text-white px-3 py-2 font-['Montserrat'] font-bold text-[10px] uppercase border border-white hover:bg-[#b91c1c] transition-colors flex items-center justify-center gap-1 shadow-[2px_2px_0px_#000]"
              >
                <Navigation className="w-3 h-3" />
                <span>Navigate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="bg-[#111418] border-t border-[#374151] px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-[#94a3b8]">
          <Compass className="w-4 h-4 text-[#fbbf24]" />
          <span>Coordinates: <strong className="text-white font-mono">{activeStop.lat.toFixed(4)}° N, {Math.abs(activeStop.lng).toFixed(4)}° W</strong></span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-[#cbd5e1] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
            Active GPS Tracking
          </span>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(activeStop.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fbbf24] hover:underline font-bold flex items-center gap-1"
          >
            Open in Google Maps App <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
