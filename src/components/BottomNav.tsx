import React from 'react';
import { PageView } from '../types';
import { Home, UtensilsCrossed, Truck, Users } from 'lucide-react';

interface BottomNavProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home' as PageView, label: 'Home', icon: Home },
    { id: 'menu' as PageView, label: 'Menu', icon: UtensilsCrossed },
    { id: 'find-us' as PageView, label: 'Find Us', icon: Truck },
    { id: 'events' as PageView, label: 'Events', icon: Users },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#353534]/95 backdrop-blur-xl border-t border-[#ffb3b1]/20 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-all ${
                isActive
                  ? 'text-[#ff535b] bg-[#ff535b]/15 border-t-2 border-[#ff535b]'
                  : 'text-[#c6c6c7] hover:text-[#e5e2e1] border-t-2 border-transparent'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-['Work_Sans'] font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
