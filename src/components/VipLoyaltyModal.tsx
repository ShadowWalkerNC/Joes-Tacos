import React, { useState } from 'react';
import { X, Award, Flame, Check, Sparkles, QrCode } from 'lucide-react';
import { BRAND_ASSETS } from '../data/menuData';

interface VipLoyaltyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipLoyaltyModal: React.FC<VipLoyaltyModalProps> = ({ isOpen, onClose }) => {
  const [stamps, setStamps] = useState<number>(6);
  const [promoInput, setPromoInput] = useState('');
  const [stampNotice, setStampNotice] = useState('');

  if (!isOpen) return null;

  const handleAddStamp = () => {
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
      <div className="relative w-full max-w-md bg-[#181c22] border-2 border-white text-[#f1f5f9] shadow-[8px_8px_0px_#000000] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#111418] border-b border-[#374151] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#fbbf24]" />
            <h3 className="font-['Montserrat'] font-black uppercase text-sm text-white">
              Taco Joe Rig VIP Club
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center border border-[#374151] hover:bg-[#dc2626] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Card Graphic */}
          <div className="bg-[#111418] border-2 border-white p-5 shadow-[4px_4px_0px_#000000] relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] bg-[#dc2626] text-white px-2 py-0.5 font-bold uppercase">
                  Digital Punch Card
                </span>
                <h4 className="font-['Montserrat'] text-xl font-black uppercase text-white mt-1">
                  10-Taco Stamp Rig
                </h4>
                <p className="text-[11px] text-[#94a3b8]">Buy 9 Street Tacos, Get the 10th FREE!</p>
              </div>
              <img
                src={BRAND_ASSETS.logo}
                alt="Taco Joe"
                className="w-12 h-12 object-contain"
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
                        ? 'bg-[#dc2626] border-white text-white shadow-[2px_2px_0px_#000]'
                        : isTenth
                        ? 'bg-[#1f242c] border-[#fbbf24] border-dashed text-[#fbbf24]'
                        : 'bg-[#181c22] border-[#374151] text-[#64748b]'
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

            <div className="flex items-center justify-between text-xs pt-2 border-t border-[#374151]">
              <span className="font-bold text-[#fbbf24]">{stamps}/10 Stamps Earned</span>
              <span className="text-[11px] text-[#94a3b8]">
                {10 - stamps > 0 ? `${10 - stamps} more for a free taco` : 'Reward Unlocked!'}
              </span>
            </div>
          </div>

          {stampNotice && (
            <div className="p-3 bg-[#111418] border border-[#fbbf24] text-xs font-bold text-[#fbbf24] text-center animate-in fade-in">
              {stampNotice}
            </div>
          )}

          {/* Action buttons */}
          <div className="space-y-3">
            {stamps >= 10 ? (
              <button
                onClick={handleRedeem}
                className="w-full py-3.5 bg-green-600 text-white font-['Montserrat'] font-black uppercase text-sm border border-white shadow-[3px_3px_0px_#ffffff] hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Free Taco at Window</span>
              </button>
            ) : (
              <button
                onClick={handleAddStamp}
                className="w-full py-3 bg-[#dc2626] text-white font-['Montserrat'] font-black uppercase text-xs border border-white shadow-[3px_3px_0px_#ffffff] hover:bg-[#b91c1c] transition-all flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 fill-current" />
                <span>Simulate Window QR Stamp (+1)</span>
              </button>
            )}

            <div className="bg-[#111418] p-3 border border-[#374151] text-xs text-[#94a3b8] flex items-center gap-3">
              <QrCode className="w-8 h-8 text-[#fbbf24] shrink-0" />
              <p className="leading-snug">
                Scan the QR sticker taped to the Taco Joe truck side window every time you pick up an order to earn stamps automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
