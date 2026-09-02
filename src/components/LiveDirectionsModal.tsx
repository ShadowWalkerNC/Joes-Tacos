import React from 'react';
import { X, Navigation, MapPin, ExternalLink, Car, Footprints } from 'lucide-react';

interface LiveDirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationName: string;
  address: string;
}

export const LiveDirectionsModal: React.FC<LiveDirectionsModalProps> = ({
  isOpen,
  onClose,
  locationName,
  address
}) => {
  if (!isOpen) return null;

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    locationName + ' ' + address
  )}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(
    locationName + ' ' + address
  )}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    locationName + ' ' + address
  )}`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=15&output=embed&hl=en`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#181c22] border-2 border-white text-[#f1f5f9] shadow-[8px_8px_0px_#000000] p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#374151] pb-3">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#fbbf24]" />
            <h3 className="font-['Montserrat'] font-black uppercase text-sm text-white">
              Navigate to Taco Joe Rig
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center border border-[#374151] hover:bg-[#dc2626] hover:text-white transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Google Map Preview */}
        <div className="w-full h-44 border border-[#374151] overflow-hidden relative shadow-[2px_2px_0px_#000]">
          <iframe
            title={`Map for ${locationName}`}
            src={embedUrl}
            className="w-full h-full border-0 filter contrast-[1.05]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Location Box */}
        <div className="bg-[#111418] border border-[#374151] p-4 space-y-2">
          <span className="text-[10px] bg-[#dc2626] text-white px-2 py-0.5 font-bold uppercase rounded">
            Target Destination
          </span>
          <h4 className="font-['Montserrat'] font-black text-lg uppercase text-white">
            {locationName}
          </h4>
          <p className="text-xs text-[#cbd5e1] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
            <span>{address}</span>
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#374151] text-[11px] text-[#94a3b8]">
            <div className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>Drive: ~4-8 mins</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Footprints className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>Walk: Waterfront stop</span>
            </div>
          </div>
        </div>

        {/* Navigation App Direct Launchers */}
        <div className="space-y-2">
          <label className="font-['Montserrat'] text-xs font-bold uppercase text-[#cbd5e1] block">
            Open in Navigation App
          </label>
          <div className="grid grid-cols-1 gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#dc2626] text-white font-['Montserrat'] font-black uppercase text-xs p-3 border border-white shadow-[3px_3px_0px_#ffffff] hover:bg-[#b91c1c] transition-all flex items-center justify-between"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111418] text-white hover:text-[#fbbf24] hover:border-[#fbbf24] font-['Montserrat'] font-bold uppercase text-xs p-2.5 border border-[#374151] transition-all flex items-center justify-between"
              >
                <span>Apple Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111418] text-white hover:text-[#fbbf24] hover:border-[#fbbf24] font-['Montserrat'] font-bold uppercase text-xs p-2.5 border border-[#374151] transition-all flex items-center justify-between"
              >
                <span>Waze</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
