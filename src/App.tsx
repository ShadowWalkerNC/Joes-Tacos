import React, { useState, useEffect } from 'react';
import { PageView, MenuItem, CartItem, MenuItemOption } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { ItemDetailModal } from './components/ItemDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { VipLoyaltyModal } from './components/VipLoyaltyModal';
import { QrCodeModal } from './components/QrCodeModal';
import { LiveDirectionsModal } from './components/LiveDirectionsModal';
import { HomeView } from './views/HomeView';
import { MenuView } from './views/MenuView';
import { FindUsView } from './views/FindUsView';
import { EventsView } from './views/EventsView';
import { AboutView } from './views/AboutView';
import { Flame } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tacojoe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoyaltyOpen, setIsLoyaltyOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [directionsModal, setDirectionsModal] = useState<{
    isOpen: boolean;
    locationName: string;
    address: string;
  }>({
    isOpen: false,
    locationName: '',
    address: ''
  });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('tacojoe_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add customized item from ItemDetailModal
  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    options: {
      salsa?: string;
      protein?: MenuItemOption;
      addOns?: MenuItemOption[];
      specialInstructions?: string;
    }
  ) => {
    const addOnsPrice = options.addOns?.reduce((sum, a) => sum + a.price, 0) || 0;
    const proteinPrice = options.protein?.price || 0;
    const unitPrice = item.price + proteinPrice + addOnsPrice;
    const totalPrice = unitPrice * quantity;

    const cartItemId = `${item.id}-${options.salsa || ''}-${options.protein?.id || ''}-${
      options.addOns?.map((a) => a.id).join('-') || ''
    }-${options.specialInstructions || ''}-${Date.now()}`;

    const newCartItem: CartItem = {
      cartItemId,
      item,
      quantity,
      selectedOptions: options,
      totalPrice
    };

    setCartItems((prev) => [...prev, newCartItem]);
    showToast(`Added ${quantity}x ${item.name} to your Rig Order!`);
  };

  // Quick add from card (uses defaults)
  const handleQuickAdd = (item: MenuItem) => {
    if (item.options?.proteinChoices || item.options?.addOns) {
      setSelectedItemForModal(item);
    } else {
      const cartItemId = `${item.id}-${Date.now()}`;
      const newCartItem: CartItem = {
        cartItemId,
        item,
        quantity: 1,
        selectedOptions: {},
        totalPrice: item.price
      };
      setCartItems((prev) => [...prev, newCartItem]);
      showToast(`Added 1x ${item.name} to your bag!`);
    }
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          const unitPrice = item.totalPrice / item.quantity;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: unitPrice * newQuantity
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderPlaced = (orderId: string, _total: number) => {
    showToast(`🔥 Rig Order #${orderId} sent to the truck!`);
  };

  const handleOpenDirections = (locationName: string, address: string) => {
    setDirectionsModal({
      isOpen: true,
      locationName,
      address
    });
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="bg-[#111418] min-h-screen text-[#f1f5f9] flex flex-col font-['Work_Sans']">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-[#dc2626] text-white px-4 py-3 border-2 border-white shadow-[4px_4px_0px_#000000] font-['Work_Sans'] font-bold text-xs uppercase flex items-center gap-2 animate-in slide-in-from-top-3 duration-200">
          <Flame className="w-4 h-4 fill-current shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLoyalty={() => setIsLoyaltyOpen(true)}
        onOpenQr={() => setIsQrOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-16 bg-[#111418]">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={setCurrentPage}
            onSelectItem={setSelectedItemForModal}
            onQuickAdd={handleQuickAdd}
          />
        )}

        {currentPage === 'menu' && (
          <MenuView
            onSelectItem={setSelectedItemForModal}
            onQuickAdd={handleQuickAdd}
          />
        )}

        {currentPage === 'find-us' && (
          <FindUsView onOpenDirections={handleOpenDirections} />
        )}

        {currentPage === 'events' && <EventsView />}

        {currentPage === 'about' && <AboutView onNavigate={setCurrentPage} />}

        {/* Global Footer */}
        <Footer
          onNavigate={setCurrentPage}
          onOpenQr={() => setIsQrOpen(true)}
          onOpenLoyalty={() => setIsLoyaltyOpen(true)}
        />
      </main>

      {/* Mobile Fixed Bottom Tab Bar */}
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Customization Modal */}
      <ItemDetailModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* VIP Loyalty Stamp Card Modal */}
      <VipLoyaltyModal
        isOpen={isLoyaltyOpen}
        onClose={() => setIsLoyaltyOpen(false)}
      />

      {/* QR Code Modal */}
      <QrCodeModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />

      {/* Live Directions Navigation Modal */}
      <LiveDirectionsModal
        isOpen={directionsModal.isOpen}
        onClose={() =>
          setDirectionsModal({ isOpen: false, locationName: '', address: '' })
        }
        locationName={directionsModal.locationName}
        address={directionsModal.address}
      />
    </div>
  );
}
