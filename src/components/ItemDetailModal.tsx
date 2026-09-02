import React, { useState } from 'react';
import { MenuItem, MenuItemOption } from '../types';
import { X, Flame, Plus, Minus, Check } from 'lucide-react';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    options: {
      salsa?: string;
      protein?: MenuItemOption;
      addOns?: MenuItemOption[];
      specialInstructions?: string;
    }
  ) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSalsa, setSelectedSalsa] = useState<string>(
    item.options?.salsas?.[0] || 'Avocado Ranch'
  );
  const [selectedProtein, setSelectedProtein] = useState<MenuItemOption | undefined>(
    item.options?.proteinChoices?.[0]
  );
  const [selectedAddOns, setSelectedAddOns] = useState<MenuItemOption[]>([]);
  const [instructions, setInstructions] = useState('');

  const toggleAddOn = (addOn: MenuItemOption) => {
    if (selectedAddOns.some((a) => a.id === addOn.id)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a.id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const proteinExtra = selectedProtein?.price || 0;
  const singlePrice = item.price + proteinExtra + addOnsTotal;
  const totalPrice = singlePrice * quantity;

  const handleAdd = () => {
    onAddToCart(item, quantity, {
      salsa: item.options?.salsas ? selectedSalsa : undefined,
      protein: selectedProtein,
      addOns: selectedAddOns.length > 0 ? selectedAddOns : undefined,
      specialInstructions: instructions.trim() || undefined
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#181c22] border-2 border-white text-[#f1f5f9] shadow-[8px_8px_0px_#000000] max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header with Close */}
        <div className="flex items-center justify-between p-4 border-b border-[#374151] bg-[#111418]">
          <div className="flex items-center gap-2">
            <span className="font-['Montserrat'] text-xs font-black uppercase text-[#fbbf24] bg-[#1f242c] px-2 py-0.5 border border-[#374151]">
              {item.category.toUpperCase()}
            </span>
            {item.isBestSeller && (
              <span className="bg-[#dc2626] text-white text-[10px] font-bold px-2 py-0.5 uppercase shadow-[2px_2px_0px_#000]">
                Best Seller
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center border border-[#374151] hover:bg-[#dc2626] hover:text-white transition-colors text-[#f1f5f9]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 space-y-5">
          {/* Item Image */}
          <div className="relative w-full h-48 sm:h-56 border border-[#374151] bg-[#111418] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-2 right-2 bg-[#111418]/90 border border-[#fbbf24] px-3 py-1 font-['Montserrat'] font-black text-lg text-[#fbbf24]">
              ${item.price.toFixed(2)}
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-['Montserrat'] text-2xl font-black uppercase text-white">
                {item.name}
              </h2>
              {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                <div className="flex items-center text-[#ef4444]" title={`Spice level: ${item.spicyLevel}`}>
                  {Array.from({ length: item.spicyLevel }).map((_, i) => (
                    <Flame key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-[#cbd5e1] mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Protein Choice (if any) */}
          {item.options?.proteinChoices && (
            <div className="space-y-2 border-t border-[#374151] pt-4">
              <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#fbbf24] block">
                Choose Portion / Protein
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.proteinChoices.map((choice) => {
                  const isSelected = selectedProtein?.id === choice.id;
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => setSelectedProtein(choice)}
                      className={`p-3 text-left border flex justify-between items-center transition-all ${
                        isSelected
                          ? 'border-[#dc2626] bg-[#dc2626]/20 text-white font-bold shadow-[2px_2px_0px_#dc2626]'
                          : 'border-[#374151] bg-[#111418] text-[#cbd5e1] hover:border-[#94a3b8]'
                      }`}
                    >
                      <span className="text-xs uppercase font-medium">{choice.name}</span>
                      {choice.price > 0 && (
                        <span className="text-xs font-mono text-[#fbbf24]">
                          +${choice.price.toFixed(2)}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Salsa & Sauce Choice */}
          {item.options?.salsas && (
            <div className="space-y-2 border-t border-[#374151] pt-4">
              <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#fbbf24] block">
                Choose Salsa / Sauce
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.salsas.map((salsa) => {
                  const isSelected = selectedSalsa === salsa;
                  return (
                    <button
                      key={salsa}
                      type="button"
                      onClick={() => setSelectedSalsa(salsa)}
                      className={`p-2.5 text-left border flex items-center justify-between text-xs transition-all ${
                        isSelected
                          ? 'border-[#fbbf24] bg-[#fbbf24]/10 text-white font-bold shadow-[2px_2px_0px_#fbbf24]'
                          : 'border-[#374151] bg-[#111418] text-[#cbd5e1] hover:border-[#94a3b8]'
                      }`}
                    >
                      <span>{salsa}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#fbbf24]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Optional Add-Ons */}
          {item.options?.addOns && (
            <div className="space-y-2 border-t border-[#374151] pt-4">
              <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#fbbf24] block">
                Extra Add-Ons
              </label>
              <div className="space-y-1.5">
                {item.options.addOns.map((addon) => {
                  const isChecked = selectedAddOns.some((a) => a.id === addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon)}
                      className={`w-full p-2.5 text-left border flex items-center justify-between text-xs transition-all ${
                        isChecked
                          ? 'border-[#dc2626] bg-[#dc2626]/10 text-white font-bold'
                          : 'border-[#374151] bg-[#111418] text-[#cbd5e1] hover:border-[#94a3b8]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 border flex items-center justify-center ${
                            isChecked
                              ? 'border-[#dc2626] bg-[#dc2626] text-white'
                              : 'border-[#475569] bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono text-[#fbbf24]">+${addon.price.toFixed(2)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-1.5 border-t border-[#374151] pt-4">
            <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#cbd5e1] block">
              Special Instructions for Pitmaster Joe
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Extra crispy, sauce on the side, no onions..."
              rows={2}
              className="w-full bg-[#111418] border border-[#374151] p-2.5 text-xs text-white placeholder-[#64748b] focus:border-[#fbbf24] focus:outline-none"
            />
          </div>
        </div>

        {/* Footer with Quantity & Add to Cart Button */}
        <div className="p-4 border-t border-[#374151] bg-[#111418] flex items-center justify-between gap-4">
          <div className="flex items-center border border-[#374151] bg-[#181c22]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 flex items-center justify-center text-[#f1f5f9] hover:bg-[#374151] active:bg-[#dc2626] transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center font-['Montserrat'] font-bold text-sm text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 flex items-center justify-center text-[#f1f5f9] hover:bg-[#374151] active:bg-[#dc2626] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 py-3 bg-[#dc2626] text-white font-['Montserrat'] font-black uppercase text-xs sm:text-sm border border-white shadow-[3px_3px_0px_#ffffff] hover:bg-[#b91c1c] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2"
          >
            <span>Add to Order</span>
            <span>•</span>
            <span className="font-mono">${totalPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
