import React, { useState } from 'react';
import { CartItem } from '../types';
import { LIVE_TRUCK_STATUS } from '../data/truckData';
import { X, Trash2, Plus, Minus, Clock, MapPin, Flame, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (orderId: string, total: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced
}) => {
  const [pickupLocation, setPickupLocation] = useState(LIVE_TRUCK_STATUS.currentLocationName);
  const [pickupTime, setPickupTime] = useState('ASAP (~12-15 mins)');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [tipPercent, setTipPercent] = useState(18);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeOrder, setActiveOrder] = useState<{
    orderId: string;
    status: 'received' | 'cooking' | 'ready';
    total: number;
    pickupTime: string;
    pickupLocation: string;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const taxableSubtotal = Math.max(0, subtotal - discountAmount);
  const tax = taxableSubtotal * 0.08; // Maine 8% prepared food tax
  const tipAmount = (taxableSubtotal * tipPercent) / 100;
  const total = taxableSubtotal + tax + tipAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'TACOVIP' || code === 'TINYTRUCK') {
      setDiscountPercent(15);
      setPromoMessage('15% Rig VIP discount applied!');
    } else if (code === 'MAINE10') {
      setDiscountPercent(10);
      setPromoMessage('10% Local Maine discount applied!');
    } else {
      setPromoMessage('Invalid promo code. Try "TACOVIP"');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = 'TJ-' + Math.floor(1000 + Math.random() * 9000);
      const newOrder = {
        orderId: generatedId,
        status: 'received' as const,
        total: total,
        pickupTime: pickupTime,
        pickupLocation: pickupLocation
      };
      setActiveOrder(newOrder);
      setIsSubmitting(false);
      onOrderPlaced(generatedId, total);

      // Simulate status progressions
      setTimeout(() => {
        setActiveOrder((prev) => (prev ? { ...prev, status: 'cooking' } : null));
      }, 4000);

      setTimeout(() => {
        setActiveOrder((prev) => (prev ? { ...prev, status: 'ready' } : null));
      }, 10000);
    }, 1200);
  };

  const handleDismissOrder = () => {
    setActiveOrder(null);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#181c22] border-l-2 border-white text-[#f1f5f9] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 bg-[#111418] border-b border-[#374151] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#dc2626]" />
              <h2 className="font-['Montserrat'] font-black uppercase text-lg text-white">
                Your Rig Order
              </h2>
              <span className="text-xs bg-[#dc2626] text-white px-2 py-0.5 font-bold rounded-full">
                {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="w-8 h-8 flex items-center justify-center border border-[#374151] hover:bg-[#dc2626] hover:text-white transition-colors text-[#f1f5f9]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Live Order Screen if checked out */}
          {activeOrder ? (
            <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-6 text-center">
                <div className="inline-flex p-4 bg-[#dc2626]/10 border-2 border-[#dc2626] rounded-full text-[#dc2626] animate-bounce">
                  <Flame className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#fbbf24]">
                    Order Confirmed!
                  </span>
                  <h3 className="font-['Montserrat'] text-3xl font-black text-white mt-1">
                    #{activeOrder.orderId}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mt-1">
                    Show this screen or your name at the Taco Joe pickup window.
                  </p>
                </div>

                {/* Progress Status Tracker */}
                <div className="bg-[#1f242c] border border-[#374151] p-4 space-y-4 text-left shadow-[2px_2px_0px_#000000]">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeOrder.status === 'received' || activeOrder.status === 'cooking' || activeOrder.status === 'ready'
                          ? 'bg-[#dc2626] text-white'
                          : 'bg-[#374151] text-[#94a3b8]'
                      }`}
                    >
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase text-white">1. Order Sent to Truck</p>
                      <p className="text-[11px] text-[#94a3b8]">Received on kitchen ticket</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeOrder.status === 'cooking' || activeOrder.status === 'ready'
                          ? 'bg-[#fbbf24] text-[#111418] font-black animate-pulse'
                          : 'bg-[#374151] text-[#94a3b8]'
                      }`}
                    >
                      2
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase text-white">2. Sizzling on the Flat Top</p>
                      <p className="text-[11px] text-[#94a3b8]">Fresh tortillas warmed & meat grilled</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeOrder.status === 'ready'
                          ? 'bg-green-500 text-black font-black animate-bounce'
                          : 'bg-[#374151] text-[#94a3b8]'
                      }`}
                    >
                      3
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase text-white">
                        {activeOrder.status === 'ready' ? '🔥 READY FOR PICKUP!' : '3. Ready at Window'}
                      </p>
                      <p className="text-[11px] text-[#94a3b8]">
                        {activeOrder.status === 'ready'
                          ? 'Come to front window with order #' + activeOrder.orderId
                          : 'Boxed up with lime & fresh salsas'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pickup details box */}
                <div className="bg-[#111418] p-3 border border-[#374151] text-left text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#fbbf24] font-bold">
                    <MapPin className="w-3.5 h-3.5" /> {activeOrder.pickupLocation}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#94a3b8]">
                    <Clock className="w-3.5 h-3.5" /> Estimated time: {activeOrder.pickupTime}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#374151] text-white font-bold">
                    <span>Total Paid</span>
                    <span className="text-[#fbbf24] font-mono">${activeOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDismissOrder}
                className="w-full bg-[#dc2626] text-white font-['Montserrat'] font-black uppercase py-3 border border-white shadow-[3px_3px_0px_#ffffff] hover:bg-[#b91c1c]"
              >
                Done & Start New Order
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart View */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1f242c] border-2 border-[#374151] flex items-center justify-center text-[#94a3b8]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-['Montserrat'] text-xl font-bold uppercase text-white">
                Your Bag is Empty
              </h3>
              <p className="text-xs text-[#94a3b8] max-w-xs">
                Check out the street tacos, burritos, quesadillas, and smash burgers to load up your order.
              </p>
              <button
                onClick={onClose}
                className="bg-[#dc2626] text-white font-['Montserrat'] font-bold uppercase text-xs px-6 py-3 border border-white shadow-[3px_3px_0px_#ffffff] hover:bg-[#b91c1c]"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            /* Active Cart Items & Checkout Form */
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cartItems.map((cartItem) => (
                  <div
                    key={cartItem.cartItemId}
                    className="bg-[#1f242c] border border-[#374151] p-3 flex gap-3 relative group"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 object-cover border border-[#374151] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className="font-['Montserrat'] font-bold text-xs uppercase text-white truncate">
                          {cartItem.item.name}
                        </h4>
                        <span className="font-mono text-xs font-bold text-[#fbbf24]">
                          ${cartItem.totalPrice.toFixed(2)}
                        </span>
                      </div>

                      {/* Customization notes */}
                      <div className="text-[11px] text-[#94a3b8] mt-0.5 space-y-0.5">
                        {cartItem.selectedOptions.protein && (
                          <p>• {cartItem.selectedOptions.protein.name}</p>
                        )}
                        {cartItem.selectedOptions.salsa && (
                          <p>• {cartItem.selectedOptions.salsa}</p>
                        )}
                        {cartItem.selectedOptions.addOns?.map((a) => (
                          <p key={a.id}>• + {a.name}</p>
                        ))}
                        {cartItem.selectedOptions.specialInstructions && (
                          <p className="italic text-[#fbbf24]">
                            "{cartItem.selectedOptions.specialInstructions}"
                          </p>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#374151]">
                        <div className="flex items-center border border-[#374151] bg-[#111418]">
                          <button
                            onClick={() =>
                              onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)
                            }
                            className="p-1 hover:bg-[#374151] text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold">{cartItem.quantity}</span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)
                            }
                            className="p-1 hover:bg-[#374151] text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(cartItem.cartItemId)}
                          className="text-[#ef4444] hover:text-white p-1 text-[11px] flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (e.g. TACOVIP)"
                      className="flex-1 bg-[#111418] border border-[#374151] px-3 py-1.5 text-xs text-white uppercase placeholder-[#64748b] focus:border-[#fbbf24] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#1f242c] border border-[#374151] hover:border-white text-xs font-bold uppercase px-3 py-1.5 text-white"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className="text-[11px] text-[#fbbf24] font-bold mt-1">{promoMessage}</p>
                  )}
                </form>

                {/* Tip Selection */}
                <div className="space-y-1.5 pt-2 border-t border-[#374151]">
                  <label className="text-[11px] font-bold uppercase text-[#94a3b8] flex justify-between">
                    <span>Crew Tip</span>
                    <span className="text-[#fbbf24] font-mono">${tipAmount.toFixed(2)}</span>
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[10, 15, 18, 20].map((percent) => (
                      <button
                        key={percent}
                        type="button"
                        onClick={() => setTipPercent(percent)}
                        className={`py-1 text-xs font-bold border transition-all ${
                          tipPercent === percent
                            ? 'bg-[#dc2626] border-white text-white'
                            : 'bg-[#111418] border-[#374151] text-[#94a3b8] hover:text-white'
                        }`}
                      >
                        {percent}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pickup details form */}
                <div className="space-y-2 pt-2 border-t border-[#374151]">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#94a3b8] block mb-1">
                      Pickup Truck Location
                    </label>
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full bg-[#111418] border border-[#374151] p-2 text-xs text-white focus:border-[#fbbf24] focus:outline-none"
                    >
                      <option value="Rockport Harbor (34 Commercial St, Rockport ME)">
                        Rockport Harbor (34 Commercial St)
                      </option>
                      <option value="Owls Head Museum (117 Museum St, Owls Head ME)">
                        Owls Head Museum (117 Museum St)
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-[#94a3b8] block mb-0.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Joe Taco"
                        className="w-full bg-[#111418] border border-[#374151] p-1.5 text-xs text-white focus:border-[#fbbf24] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-[#94a3b8] block mb-0.5">
                        Cell Phone (SMS Alert)
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(207) 555-0199"
                        className="w-full bg-[#111418] border border-[#374151] p-1.5 text-xs text-white focus:border-[#fbbf24] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary & Pay Button */}
              <div className="p-4 bg-[#111418] border-t-2 border-[#374151] space-y-3">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#fbbf24] font-bold">
                      <span>Discount ({discountPercent}%)</span>
                      <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Maine Tax (8%)</span>
                    <span className="font-mono">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Tip ({tipPercent}%)</span>
                    <span className="font-mono">${tipAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-white pt-1 border-t border-[#374151]">
                    <span>Total</span>
                    <span className="font-mono text-[#fbbf24]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isSubmitting || cartItems.length === 0}
                  className="w-full py-3.5 bg-[#dc2626] text-white font-['Montserrat'] font-black uppercase text-sm border border-white shadow-[3px_3px_0px_#ffffff] hover:bg-[#b91c1c] active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending to Kitchen...</span>
                  ) : (
                    <>
                      <span>Place Rig Pickup Order</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
