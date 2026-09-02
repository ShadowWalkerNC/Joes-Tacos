import React, { useState } from 'react';
import { CartItem } from '../types';
import { LIVE_TRUCK_STATUS, WEEKLY_ROUTE } from '../data/truckData';
import { X, Trash2, Plus, Minus, Clock, MapPin, CheckCircle2, Flame, ShoppingBag, ArrowRight } from 'lucide-react';

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
        <div className="w-screen max-w-md bg-[#1c1b1b] border-l-2 border-[#ffb3b1] text-[#e5e2e1] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 bg-[#131313] border-b border-[#353534] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#ff535b]" />
              <h2 className="font-['Montserrat'] font-black uppercase text-lg text-[#e5e2e1]">
                Your Rig Order
              </h2>
              <span className="text-xs bg-[#ff535b] text-white px-2 py-0.5 font-bold rounded-full">
                {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="w-8 h-8 flex items-center justify-center border border-[#ab8987]/30 hover:bg-[#ff535b] hover:text-white transition-colors text-[#e5e2e1]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Live Order Screen if checked out */}
          {activeOrder ? (
            <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-6 text-center">
                <div className="inline-flex p-4 bg-[#ff535b]/10 border-2 border-[#ff535b] rounded-full text-[#ff535b] animate-bounce">
                  <Flame className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb3b1]">
                    Order Confirmed!
                  </span>
                  <h3 className="font-['Montserrat'] text-3xl font-black text-[#e5e2e1] mt-1">
                    #{activeOrder.orderId}
                  </h3>
                  <p className="text-xs text-[#ab8987] mt-1">
                    Show this screen or your name at the Taco Joe pickup window.
                  </p>
                </div>

                {/* Progress Status Tracker */}
                <div className="bg-[#201f1f] border border-[#ab8987]/30 p-4 space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeOrder.status === 'received' || activeOrder.status === 'cooking' || activeOrder.status === 'ready'
                          ? 'bg-[#ff535b] text-white'
                          : 'bg-[#353534] text-[#ab8987]'
                      }`}
                    >
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase text-[#e5e2e1]">1. Order Sent to Truck</p>
                      <p className="text-[11px] text-[#ab8987]">Received on our kitchen display</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeOrder.status === 'cooking' || activeOrder.status === 'ready'
                          ? 'bg-[#ff535b] text-white animate-pulse'
                          : 'bg-[#353534] text-[#ab8987]'
                      }`}
                    >
                      2
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase text-[#e5e2e1]">2. Sizzling on the Flat Top</p>
                      <p className="text-[11px] text-[#ab8987]">Fresh tortillas warmed & meat seasoned</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        activeOrder.status === 'ready'
                          ? 'bg-green-500 text-black font-black animate-bounce'
                          : 'bg-[#353534] text-[#ab8987]'
                      }`}
                    >
                      3
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase text-[#e5e2e1]">
                        {activeOrder.status === 'ready' ? '🔥 READY FOR PICKUP!' : '3. Ready at Window'}
                      </p>
                      <p className="text-[11px] text-[#ab8987]">
                        {activeOrder.status === 'ready'
                          ? 'Come to the front window with order #' + activeOrder.orderId
                          : 'Boxed up with lime & fresh salsas'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pickup details box */}
                <div className="bg-[#131313] p-3 border border-[#353534] text-left text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#ffb3b1] font-bold">
                    <MapPin className="w-3.5 h-3.5" /> {activeOrder.pickupLocation}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#ab8987]">
                    <Clock className="w-3.5 h-3.5" /> Estimated time: {activeOrder.pickupTime}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#353534] text-[#e5e2e1] font-bold">
                    <span>Total Paid</span>
                    <span>${activeOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDismissOrder}
                className="w-full bg-[#ff535b] text-white font-['Montserrat'] font-black uppercase py-3 border border-[#e5e2e1] shadow-[3px_3px_0px_#ffffff] hover:bg-[#bb152c]"
              >
                Done & Start New Order
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart View */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#201f1f] border-2 border-[#ab8987]/30 flex items-center justify-center text-[#ab8987]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-['Montserrat'] text-xl font-bold uppercase text-[#e5e2e1]">
                Your Bag is Empty
              </h3>
              <p className="text-xs text-[#ab8987] max-w-xs">
                Check out the street tacos, burritos, and loaded sides to load up your order.
              </p>
              <button
                onClick={onClose}
                className="bg-[#ff535b] text-white font-['Montserrat'] font-bold uppercase text-xs px-6 py-3 border border-[#e5e2e1] shadow-[3px_3px_0px_#ffffff] hover:bg-[#bb152c]"
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
                    className="bg-[#201f1f] border border-[#ab8987]/30 p-3 flex gap-3 relative group"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 object-cover border border-[#ab8987]/20 shrink-0 grayscale group-hover:grayscale-0 transition-all"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-['Montserrat'] font-bold text-xs uppercase text-[#e5e2e1] truncate">
                          {cartItem.item.name}
                        </h4>
                        <span className="font-['Montserrat'] font-bold text-xs text-[#ffb3b1] shrink-0">
                          ${cartItem.totalPrice.toFixed(2)}
                        </span>
                      </div>

                      {/* Options summary */}
                      <div className="text-[11px] text-[#ab8987] space-y-0.5 mt-0.5">
                        {cartItem.selectedOptions?.salsa && (
                          <p>• {cartItem.selectedOptions.salsa}</p>
                        )}
                        {cartItem.selectedOptions?.protein && (
                          <p>• {cartItem.selectedOptions.protein.name}</p>
                        )}
                        {cartItem.selectedOptions?.addOns?.map((a) => (
                          <p key={a.id}>+ {a.name}</p>
                        ))}
                        {cartItem.selectedOptions?.specialInstructions && (
                          <p className="italic text-[#ffb3b1]">
                            "{cartItem.selectedOptions.specialInstructions}"
                          </p>
                        )}
                      </div>

                      {/* Quantity buttons & remove */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#353534]">
                        <div className="flex items-center border border-[#ab8987]/40 bg-[#131313]">
                          <button
                            onClick={() =>
                              onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center text-[#e5e2e1] hover:bg-[#201f1f]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#e5e2e1]">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center text-[#e5e2e1] hover:bg-[#201f1f]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(cartItem.cartItemId)}
                          aria-label="Remove item"
                          className="text-[#ab8987] hover:text-[#ff535b] transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pickup Location & Timing */}
                <div className="bg-[#131313] border border-[#ab8987]/30 p-3.5 space-y-3">
                  <div>
                    <label className="font-['Montserrat'] text-[11px] font-bold uppercase text-[#ffb3b1] block mb-1">
                      Truck Pickup Location
                    </label>
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full bg-[#201f1f] border border-[#ab8987]/40 p-2 text-xs text-[#e5e2e1] focus:outline-none focus:border-[#ff535b]"
                    >
                      <option value="Rockland Harbor Park">
                        Rockland Harbor Park (Live Today 11am-8pm)
                      </option>
                      <option value="Oxbow Brewery (Newcastle)">
                        Oxbow Brewery (Newcastle) - Friday
                      </option>
                      <option value="Camden Snow Bowl">
                        Camden Snow Bowl - Saturday
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="font-['Montserrat'] text-[11px] font-bold uppercase text-[#ffb3b1] block mb-1">
                      Pickup Window Time
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full bg-[#201f1f] border border-[#ab8987]/40 p-2 text-xs text-[#e5e2e1] focus:outline-none focus:border-[#ff535b]"
                    >
                      <option value="ASAP (~12-15 mins)">ASAP (~12-15 mins)</option>
                      <option value="In 30 minutes">In 30 minutes</option>
                      <option value="In 45 minutes">In 45 minutes</option>
                      <option value="In 1 hour">In 1 hour</option>
                    </select>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="bg-[#131313] border border-[#ab8987]/30 p-3.5 space-y-2">
                  <label className="font-['Montserrat'] text-[11px] font-bold uppercase text-[#ffb3b1] block">
                    Contact for Pickup SMS
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="bg-[#201f1f] border border-[#ab8987]/40 p-2 text-xs text-[#e5e2e1] focus:outline-none focus:border-[#ff535b]"
                    />
                    <input
                      type="tel"
                      placeholder="Cell Phone *"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="bg-[#201f1f] border border-[#ab8987]/40 p-2 text-xs text-[#e5e2e1] focus:outline-none focus:border-[#ff535b]"
                    />
                  </div>
                </div>

                {/* Promo Code */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo Code (try TACOVIP)"
                    className="flex-1 bg-[#131313] border border-[#ab8987]/40 p-2 text-xs uppercase text-[#e5e2e1] focus:outline-none focus:border-[#ff535b]"
                  />
                  <button
                    type="submit"
                    className="bg-[#201f1f] text-[#ffb3b1] hover:text-white border border-[#ab8987]/40 hover:border-[#ff535b] px-3 text-xs font-bold uppercase transition-colors"
                  >
                    Apply
                  </button>
                </form>
                {promoMessage && (
                  <p className="text-[11px] font-bold text-[#ffb3b1]">{promoMessage}</p>
                )}

                {/* Tip Selection */}
                <div className="space-y-1.5 pt-1">
                  <label className="font-['Montserrat'] text-[11px] font-bold uppercase text-[#ab8987] block">
                    Tip the Truck Crew
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[10, 15, 18, 20].map((tip) => (
                      <button
                        key={tip}
                        type="button"
                        onClick={() => setTipPercent(tip)}
                        className={`py-1.5 text-xs font-bold border transition-all ${
                          tipPercent === tip
                            ? 'bg-[#ff535b] text-white border-[#e5e2e1]'
                            : 'bg-[#131313] text-[#c6c6c7] border-[#ab8987]/30 hover:border-[#ffb3b1]'
                        }`}
                      >
                        {tip}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Checkout Calculation & Action */}
              <div className="p-4 bg-[#131313] border-t-2 border-[#ff535b] space-y-3">
                <div className="space-y-1 text-xs text-[#ab8987]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-[#e5e2e1] font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#ffb3b1]">
                      <span>VIP Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Maine Prepared Meal Tax (8%)</span>
                    <span className="text-[#e5e2e1]">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Crew Tip ({tipPercent}%)</span>
                    <span className="text-[#e5e2e1]">${tipAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-['Montserrat'] font-black text-[#e5e2e1] pt-1.5 border-t border-[#353534]">
                    <span>Total</span>
                    <span className="text-[#ffb3b1] text-base">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isSubmitting}
                  className="w-full bg-[#ff535b] text-white font-['Montserrat'] font-black uppercase text-sm py-3.5 border border-[#e5e2e1] shadow-[4px_4px_0px_#ffffff] hover:bg-[#bb152c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting to Truck...</span>
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
