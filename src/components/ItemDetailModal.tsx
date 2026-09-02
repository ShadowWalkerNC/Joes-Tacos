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
    item.options?.salsas?.[0] || 'Salsa Roja (Medium)'
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
      <div className="relative w-full max-w-lg bg-[#201f1f] border-2 border-[#ffb3b1] text-[#e5e2e1] shadow-[8px_8px_0px_#ff535b] max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header with Close */}
        <div className="flex items-center justify-between p-4 border-b border-[#353534] bg-[#1c1b1b]">
          <div className="flex items-center gap-2">
            <span className="font-['Montserrat'] text-xs font-black uppercase text-[#ff535b] bg-[#ff535b]/15 px-2 py-0.5 border border-[#ff535b]/30">
              {item.category.toUpperCase()}
            </span>
            {item.isBestSeller && (
              <span className="bg-[#ff535b] text-white text-[10px] font-bold px-2 py-0.5 uppercase shadow-[2px_2px_0px_#000]">
                Best Seller
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center border border-[#ab8987]/30 hover:bg-[#ff535b] hover:text-white transition-colors text-[#e5e2e1]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 space-y-5">
          {/* Item Image */}
          <div className="relative w-full h-48 sm:h-56 border border-[#ab8987]/30 bg-[#131313] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute bottom-2 right-2 bg-[#131313]/90 border border-[#ffb3b1] px-3 py-1 font-['Montserrat'] font-black text-lg text-[#ffb3b1]">
              ${item.price.toFixed(2)}
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-['Montserrat'] text-2xl font-black uppercase text-[#e5e2e1]">
                {item.name}
              </h2>
              {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                <div className="flex items-center text-[#ff535b]" title={`Spice level: ${item.spicyLevel}`}>
                  {Array.from({ length: item.spicyLevel }).map((_, i) => (
                    <Flame key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-[#ab8987] mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Protein Choice (if any) */}
          {item.options?.proteinChoices && (
            <div className="space-y-2 border-t border-[#353534] pt-4">
              <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#ffb3b1] block">
                Choose Protein / Filling
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.proteinChoices.map((protein) => {
                  const isSelected = selectedProtein?.id === protein.id;
                  return (
                    <button
                      key={protein.id}
                      type="button"
                      onClick={() => setSelectedProtein(protein)}
                      className={`p-2.5 text-xs font-bold text-left border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#ff535b] text-white border-[#e5e2e1] shadow-[2px_2px_0px_#e5e2e1]'
                          : 'bg-[#1c1b1b] text-[#e5e2e1] border-[#ab8987]/30 hover:border-[#ffb3b1]'
                      }`}
                    >
                      <span>{protein.name}</span>
                      {protein.price > 0 && <span>+${protein.price.toFixed(2)}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Salsa Choice (if any) */}
          {item.options?.salsas && (
            <div className="space-y-2 border-t border-[#353534] pt-4">
              <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#ffb3b1] block">
                Select House Salsa
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.salsas.map((salsa) => {
                  const isSelected = selectedSalsa === salsa;
                  return (
                    <button
                      key={salsa}
                      type="button"
                      onClick={() => setSelectedSalsa(salsa)}
                      className={`p-2.5 text-xs font-bold text-left border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#ff535b] text-white border-[#e5e2e1] shadow-[2px_2px_0px_#e5e2e1]'
                          : 'bg-[#1c1b1b] text-[#e5e2e1] border-[#ab8987]/30 hover:border-[#ffb3b1]'
                      }`}
                    >
                      <span>{salsa}</span>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add-Ons */}
          {item.options?.addOns && item.options.addOns.length > 0 && (
            <div className="space-y-2 border-t border-[#353534] pt-4">
              <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#ffb3b1] block">
                Loaded Add-Ons & Extras
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.addOns.map((addOn) => {
                  const isSelected = selectedAddOns.some((a) => a.id === addOn.id);
                  return (
                    <button
                      key={addOn.id}
                      type="button"
                      onClick={() => toggleAddOn(addOn)}
                      className={`p-2.5 text-xs font-bold text-left border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-[#2a2a2a] text-[#ffb3b1] border-[#ff535b] shadow-[2px_2px_0px_#ff535b]'
                          : 'bg-[#1c1b1b] text-[#e5e2e1] border-[#ab8987]/30 hover:border-[#ffb3b1]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 border flex items-center justify-center ${
                            isSelected ? 'bg-[#ff535b] border-[#ff535b] text-white' : 'border-[#ab8987]'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span>{addOn.name}</span>
                      </div>
                      <span>+${addOn.price.toFixed(2)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="border-t border-[#353534] pt-4">
            <label className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-[#ffb3b1] block mb-1.5">
              Special Instructions
            </label>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. No raw onions, salsa on the side, extra lime wedges..."
              className="w-full bg-[#1c1b1b] border border-[#ab8987]/40 p-2.5 text-xs text-[#e5e2e1] focus:outline-none focus:border-[#ff535b]"
            />
          </div>
        </div>

        {/* Footer with Quantity & Add Button */}
        <div className="p-4 bg-[#1c1b1b] border-t border-[#353534] flex items-center gap-3">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-[#ab8987]/40 bg-[#131313]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-10 flex items-center justify-center text-[#e5e2e1] hover:bg-[#201f1f] transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-sm text-[#e5e2e1]">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-10 flex items-center justify-center text-[#e5e2e1] hover:bg-[#201f1f] transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-[#ff535b] text-white font-['Montserrat'] font-black uppercase text-sm py-3 px-4 border border-[#e5e2e1] shadow-[4px_4px_0px_0px_#ffffff] hover:bg-[#bb152c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-between"
          >
            <span>Add to Rig Order</span>
            <span>${totalPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
