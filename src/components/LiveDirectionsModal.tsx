import React from 'react';
import { X, Navigation, MapPin, ExternalLink, Compass, Car, Footprints } from 'lucide-react';
import { BRAND_ASSETS } from '../data/menuData';

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#201f1f] border-2 border-[#ffb3b1] text-[#e5e2e1] shadow-[8px_8px_0px_#ff535b] p-6 space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#353534] pb-3">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#ff535b]" />
            <h3 className="font-['Montserrat'] font-black uppercase text-sm text-[#e5e2e1]">
              Navigate to Rig
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center border border-[#ab8987]/30 hover:bg-[#ff535b] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Location Box */}
        <div className="bg-[#131313] border border-[#ab8987]/30 p-4 space-y-2">
          <span className="text-[10px] bg-[#ff535b] text-white px-2 py-0.5 font-bold uppercase rounded">
            Target Destination
          </span>
          <h4 className="font-['Montserrat'] font-black text-lg uppercase text-[#e5e2e1]">
            {locationName}
          </h4>
          <p className="text-xs text-[#e4bebc] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#ff535b] shrink-0" />
            <span>{address}</span>
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#353534] text-[11px] text-[#ab8987]">
            <div className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#ffb3b1]" />
              <span>Drive: ~4-8 mins</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Footprints className="w-3.5 h-3.5 text-[#ffb3b1]" />
              <span>Walk: ~12 mins from ferry</span>
            </div>
          </div>
        </div>

        {/* Navigation App Direct Launchers */}
        <div className="space-y-2">
          <label className="font-['Montserrat'] text-xs font-bold uppercase text-[#ffb3b1] block">
            Open in Navigation App
          </label>
          <div className="grid grid-cols-1 gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff535b] text-white font-['Montserrat'] font-black uppercase text-xs p-3 border border-[#e5e2e1] shadow-[3px_3px_0px_#ffffff] hover:bg-[#bb152c] transition-all flex items-center justify-between"
            >
              <span>Open Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1c1b1b] text-[#e5e2e1] hover:text-[#ffb3b1] hover:border-[#ff535b] font-['Montserrat'] font-bold uppercase text-xs p-3 border border-[#ab8987]/40 transition-all flex items-center justify-between"
            >
              <span>Open Apple Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1c1b1b] text-[#e5e2e1] hover:text-[#ffb3b1] hover:border-[#ff535b] font-['Montserrat'] font-bold uppercase text-xs p-3 border border-[#ab8987]/40 transition-all flex items-center justify-between"
            >
              <span>Open Waze</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-[11px] text-[#ab8987] bg-[#131313] p-3 border border-[#353534]">
          🅿️ <strong>Parking Note:</strong> Free public parking available right in front of the Harbor Point dock and adjacent public launch lot.
        </div>
      </div>
    </div>
  );
};
