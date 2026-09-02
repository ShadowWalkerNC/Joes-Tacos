import React, { useState, useMemo, useRef } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { Flame, Search, Filter, CheckCircle2, ExternalLink, Sparkles, X, ChevronRight } from 'lucide-react';

interface MenuViewProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ onSelectItem, onQuickAdd }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const categories: { id: MenuCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Items', icon: '🌮' },
    { id: 'tacos', label: 'Street Tacos', icon: '🌮' },
    { id: 'burritos', label: '12" Burritos', icon: '🌯' },
    { id: 'bowls', label: 'Burrito Bowls', icon: '🥗' },
    { id: 'quesadillas', label: '12" Quesadillas', icon: '🧀' },
    { id: 'sandwiches', label: 'Grill & Wraps', icon: '🍔' },
    { id: 'sides', label: 'Chips & Salsas', icon: '🥑' },
    { id: 'kids', label: 'Kids Meals ($8)', icon: '🍟' },
    { id: 'drinks', label: 'Cold Drinks', icon: '🥤' },
  ];

  const filterTags = ['All', 'Best Seller', 'Beef', 'Pork', 'Chicken', 'Vegan', 'Vegetarian', 'Kids'];

  const handleCategoryClick = (catId: MenuCategory) => {
    setSelectedCategory(catId);
    // Reset tag filter if it conflicts with category
    if (selectedTag && selectedTag !== 'All') {
      setSelectedTag(null);
    }
    // Smooth scroll down to the menu content
    if (menuContentRef.current) {
      menuContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTagClick = (tag: string) => {
    if (tag === 'All') {
      setSelectedTag(null);
    } else {
      setSelectedTag(selectedTag === tag ? null : tag);
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Tag filter
      if (selectedTag && selectedTag !== 'All') {
        if (selectedTag === 'Best Seller' && !item.isBestSeller) return false;
        if (selectedTag !== 'Best Seller' && !item.tags.includes(selectedTag)) return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some((t) => t.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-[#111418] text-[#f1f5f9] min-h-screen">
      
      {/* Top Banner & Header */}
      <div className="bg-[#181c22] border-b border-[#374151] px-4 sm:px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold text-[#fbbf24] uppercase tracking-widest flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#dc2626] fill-current" />
                  Taco Joe Rig Official Menu
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#1f242c] text-[#94a3b8] border border-[#374151] px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-green-500" /> Midcoast Maine
                </span>
              </div>
              <h1 className="font-['Montserrat'] text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
                Truck Menu & Combos
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100088337054895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1f242c] border border-[#475569] text-xs font-bold text-[#f1f5f9] hover:text-white hover:border-[#fbbf24] transition-all shadow-[2px_2px_0px_#000000]"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#fbbf24]" />
                <span>Facebook @TACOJOE_OFFICIAL</span>
              </a>
            </div>
          </div>

          {/* Pricing Highlight Notice */}
          <div className="bg-[#1f242c] border-l-4 border-[#dc2626] p-3.5 text-xs sm:text-sm text-[#cbd5e1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-[2px_2px_0px_#000000]">
            <div>
              <strong className="text-white uppercase font-['Montserrat']">Taco Combos:</strong> Single <span className="text-[#fbbf24] font-bold">$7</span> | Two <span className="text-[#fbbf24] font-bold">$13</span> | Three <span className="text-[#fbbf24] font-bold">$18</span> &nbsp;•&nbsp; <strong className="text-white uppercase font-['Montserrat']">Kids Meals:</strong> <span className="text-[#fbbf24] font-bold">$8</span> with French Fries
            </div>
            <span className="text-[11px] font-bold text-[#94a3b8] uppercase">
              All dishes made fresh to order
            </span>
          </div>

          {/* Live Search Input */}
          <div className="relative mt-1">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#94a3b8] absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tacos, burritos, quesadillas, smash burgers, kids meals..."
                className="w-full bg-[#111418] border-2 border-[#374151] focus:border-[#dc2626] pl-10 pr-10 py-3 text-sm text-white placeholder-[#64748b] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-1 text-[#94a3b8] hover:text-white"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* STICKY Category Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#181c22]/98 backdrop-blur-md border-b-2 border-[#374151] px-4 sm:px-8 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto flex flex-col gap-2">
          
          {/* Category Tabs Scroll List */}
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? MENU_ITEMS.length
                  : MENU_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`snap-start shrink-0 px-3.5 sm:px-4 py-2 font-['Work_Sans'] font-bold text-xs uppercase transition-all flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-[#dc2626] text-white border-white shadow-[2px_2px_0px_#ffffff]'
                      : 'bg-[#111418] text-[#cbd5e1] border-[#374151] hover:border-[#fbbf24] hover:text-white shadow-[2px_2px_0px_#000000]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive ? 'bg-black/30 text-white' : 'bg-[#1f242c] text-[#94a3b8]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Filter Tag Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar text-xs">
            <span className="text-[10px] font-bold text-[#94a3b8] uppercase shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {filterTags.map((tag) => {
              const isTagActive = (tag === 'All' && !selectedTag) || selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase border transition-all shrink-0 ${
                    isTagActive
                      ? 'bg-[#fbbf24] text-[#111418] border-[#fbbf24] font-black'
                      : 'bg-[#1f242c] text-[#94a3b8] border-[#374151] hover:border-[#cbd5e1] hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Content Area */}
      <div ref={menuContentRef} className="px-4 sm:px-8 py-8 max-w-6xl mx-auto w-full flex-1">
        
        {/* Active Filter Title & Count */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#374151]">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#dc2626] fill-current" />
            <h2 className="font-['Montserrat'] text-xl sm:text-2xl font-black uppercase text-white">
              {selectedCategory === 'all'
                ? 'All Menu Items'
                : categories.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <span className="text-xs font-bold text-[#94a3b8]">
              ({filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'})
            </span>
          </div>

          {(selectedCategory !== 'all' || selectedTag || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#fbbf24] hover:underline uppercase flex items-center gap-1"
            >
              <span>View All Menu</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#181c22] border border-[#374151] p-8">
            <p className="text-base text-[#cbd5e1] font-bold mb-2">
              No menu items match your search or filter.
            </p>
            <p className="text-xs text-[#94a3b8] mb-4">
              Try adjusting your category, tag filters, or search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#dc2626] text-white text-xs font-bold uppercase shadow-[2px_2px_0px_#ffffff] hover:bg-[#b91c1c] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Grid of Menu Items */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-[#374151] bg-[#181c22] hover:border-[#dc2626] flex gap-3 sm:gap-4 p-3.5 sm:p-4 relative shadow-[3px_3px_0px_#000000] hover:shadow-[3px_3px_0px_#dc2626] transition-all group"
              >
                {/* Item Thumbnail (Natural, Clean, Vibrant - NO Filters) */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 border border-[#374151] bg-[#111418] relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {item.isBestSeller && (
                    <span className="absolute top-0 left-0 bg-[#dc2626] text-white text-[9px] font-bold uppercase px-1.5 py-0.5 shadow-sm">
                      ★ Top Pick
                    </span>
                  )}
                </div>

                {/* Item Details */}
                <div className="flex flex-col flex-1 justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h3
                        onClick={() => onSelectItem(item)}
                        className="font-['Montserrat'] font-bold text-base sm:text-lg uppercase text-white cursor-pointer hover:text-[#fbbf24] transition-colors leading-tight"
                      >
                        {item.name}
                      </h3>
                      <span className="font-['Montserrat'] font-black text-base sm:text-lg text-[#fbbf24] shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="font-['Work_Sans'] text-xs sm:text-sm text-[#cbd5e1] line-clamp-2 mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2a313b]">
                    {/* Tags */}
                    <div className="flex gap-1 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-['Work_Sans'] font-bold uppercase border ${
                            tag === 'Spicy'
                              ? 'border-[#dc2626] text-[#ef4444]'
                              : tag === 'Kids'
                              ? 'border-yellow-500/80 text-yellow-400'
                              : tag === 'Vegan' || tag === 'Vegetarian'
                              ? 'border-green-500/60 text-green-400'
                              : 'border-[#475569] text-[#94a3b8]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Quick Add Button */}
                    <button
                      onClick={() => onQuickAdd(item)}
                      className="border border-[#475569] bg-[#111418] hover:bg-[#dc2626] hover:border-white text-white px-3.5 py-1 font-['Work_Sans'] font-bold text-xs uppercase shadow-[2px_2px_0px_#000000] active:translate-y-[1px] active:translate-x-[1px] transition-all"
                    >
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
