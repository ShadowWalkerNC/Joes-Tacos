import React, { useState } from 'react';
import { X, Award, Flame, Check, Sparkles, QrCode } from 'lucide-react';
import { BRAND_ASSETS } from '../data/menuData';

interface VipLoyaltyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipLoyaltyModal: React.FC<VipLoyaltyModalProps> = ({ isOpen, onClose }) => {
  const [stamps, setStamps] = useState<number>(6); // Start with 6/10 stamps for fun interactive demo
  const [promoInput, setPromoInput] = useState('');
  const [stampNotice, setStampNotice] = useState('');

  if (!isOpen) return null;

  const handleAddStamp = (code?: string) => {
    if (stamps >= 10) {
      setStampNotice('🎉 You already have a FREE Taco reward ready to redeem at the truck window!');
      return;
    }
    setStamps((prev) => Math.min(10, prev + 1));
    setStampNotice('🔥 +1 Taco Stamp added! Keep biting.');
    setPromoInput('');
  };

  const handleRedeem = () => {
    if (stamps >= 10) {
      setStamps(0);
      setStampNotice('🌮 Free Taco redeemed! Enjoy your fresh street taco.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#201f1f] border-2 border-[#ffb3b1] text-[#e5e2e1] shadow-[8px_8px_0px_#ff535b] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#1c1b1b] border-b border-[#353534] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#ff535b]" />
            <h3 className="font-['Montserrat'] font-black uppercase text-sm text-[#e5e2e1]">
              Taco Joe Rig VIP Club
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

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Card Graphic */}
          <div className="bg-[#131313] border-2 border-[#e5e2e1] p-5 shadow-[4px_4px_0px_#ff535b] relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] bg-[#ff535b] text-white px-2 py-0.5 font-bold uppercase">
                  Digital Punch Card
                </span>
                <h4 className="font-['Montserrat'] text-xl font-black uppercase text-[#e5e2e1] mt-1">
                  10-Taco Stamp Rig
                </h4>
                <p className="text-[11px] text-[#ab8987]">Buy 9 Street Tacos, Get the 10th FREE!</p>
              </div>
              <img
                src={BRAND_ASSETS.logo}
                alt="Taco Joe"
                className="w-12 h-12 object-contain grayscale"
              />
            </div>

            {/* 10 Stamp Slots Grid */}
            <div className="grid grid-cols-5 gap-2.5 my-4">
              {Array.from({ length: 10 }).map((_, index) => {
                const isStamped = index < stamps;
                const isTenth = index === 9;
                return (
                  <div
                    key={index}
                    className={`aspect-square border flex flex-col items-center justify-center relative transition-all ${
                      isStamped
                        ? 'bg-[#ff535b] border-[#e5e2e1] text-white shadow-[2px_2px_0px_#000]'
                        : isTenth
                        ? 'bg-[#2a2a2a] border-[#ffb3b1] border-dashed text-[#ffb3b1]'
                        : 'bg-[#1c1b1b] border-[#353534] text-[#ab8987]'
                    }`}
                  >
                    {isStamped ? (
                      <Flame className="w-5 h-5 fill-current" />
                    ) : isTenth ? (
                      <span className="text-[10px] font-black uppercase font-['Montserrat']">
                        FREE🌮
                      </span>
                    ) : (
                      <span className="text-xs font-bold font-mono">{index + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-[#353534]">
              <span className="text-[#ffb3b1] font-bold">
                {stamps}/10 Stamps Earned
              </span>
              <span className="text-[#ab8987]">
                {10 - stamps === 0 ? 'Reward Unlocked!' : `${10 - stamps} more to free taco`}
              </span>
            </div>
          </div>

          {stampNotice && (
            <div className="p-3 bg-[#ff535b]/10 border border-[#ff535b] text-[#e5e2e1] text-xs font-bold text-center">
              {stampNotice}
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {stamps >= 10 ? (
              <button
                onClick={handleRedeem}
                className="w-full bg-[#ff535b] text-white font-['Montserrat'] font-black uppercase text-sm py-3.5 border border-[#e5e2e1] shadow-[4px_4px_0px_#ffffff] hover:bg-[#bb152c] animate-bounce"
              >
                🎉 Claim Free Taco at Window
              </button>
            ) : (
              <button
                onClick={() => handleAddStamp()}
                className="w-full bg-[#201f1f] text-[#ffb3b1] hover:text-white hover:bg-[#ff535b] font-['Montserrat'] font-bold uppercase text-xs py-3 border border-[#ab8987]/40 shadow-[3px_3px_0px_#ffb3b1] transition-all flex items-center justify-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                <span>Simulate Truck Window QR Stamp</span>
              </button>
            )}

            {/* Manual Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Enter Receipt Stamp Code"
                className="flex-1 bg-[#131313] border border-[#ab8987]/40 p-2 text-xs uppercase text-[#e5e2e1] focus:outline-none focus:border-[#ff535b]"
              />
              <button
                type="button"
                onClick={() => handleAddStamp(promoInput)}
                className="bg-[#353534] text-white px-4 text-xs font-bold uppercase hover:bg-[#ff535b] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="text-[11px] text-[#ab8987] leading-relaxed border-t border-[#353534] pt-3">
            💡 <strong>Pro Tip:</strong> Show this punch card screen to the cashier on the truck or enter your phone number during checkout to auto-collect stamps!
          </div>
        </div>
      </div>
    </div>
  );
};
