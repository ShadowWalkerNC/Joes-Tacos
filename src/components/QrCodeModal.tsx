import React from 'react';
import { X, QrCode, Share2, Copy, Check, Instagram } from 'lucide-react';
import { BRAND_ASSETS } from '../data/menuData';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-[#201f1f] border-2 border-[#ffb3b1] text-[#e5e2e1] shadow-[8px_8px_0px_#ff535b] p-6 text-center space-y-5">
        <div className="flex items-center justify-between border-b border-[#353534] pb-3">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-[#ff535b]" />
            <h3 className="font-['Montserrat'] font-black uppercase text-sm text-[#e5e2e1]">
              Truck Window QR
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center border border-[#ab8987]/30 hover:bg-[#ff535b] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QR Code Frame */}
        <div className="bg-white p-5 inline-block border-4 border-[#131313] shadow-[4px_4px_0px_#ff535b]">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
              window.location.href
            )}&bgcolor=ffffff&color=131313`}
            alt="Taco Joe QR Code"
            className="w-44 h-44 object-contain mx-auto"
          />
          <p className="text-black font-['Montserrat'] font-black text-xs uppercase mt-2">
            SCAN FOR MENU & ORDER
          </p>
        </div>

        <p className="text-xs text-[#ab8987]">
          Point your phone camera to open the live menu, truck schedule, and skip the line ordering.
        </p>

        <div className="flex gap-2">
          <button
            onClick={handleCopyLink}
            className="flex-1 bg-[#131313] border border-[#ab8987]/40 text-[#e5e2e1] hover:text-[#ffb3b1] hover:border-[#ff535b] py-2.5 px-3 text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Copy Web Link'}</span>
          </button>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff535b] text-white py-2.5 px-3 text-xs font-bold uppercase flex items-center justify-center gap-1.5 hover:bg-[#bb152c] transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@tacojoe</span>
          </a>
        </div>
      </div>
    </div>
  );
};
