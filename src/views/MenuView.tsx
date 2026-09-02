import React, { useState, useMemo } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { Flame, Search, Filter, Plus, Check, Sparkles } from 'lucide-react';

interface MenuViewProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ onSelectItem, onQuickAdd }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'tacos', label: 'Street Tacos' },
    { id: 'burritos', label: 'Mission Burritos' },
    { id: 'sides', label: 'Sides & Extras' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'specials', label: 'Specials & Combos' },
  ];

  const filterTags = ['All', 'Spicy', 'Beef', 'Pork', 'Seafood', 'Vegetarian', 'Best Seller'];

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
    <div className="flex flex-col w-full bg-[#131313] text-[#e5e2e1] min-h-screen">
      {/* Top Header & Filters */}
      <div className="px-4 sm:px-12 py-8 flex flex-col gap-4 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#ffb3b1] uppercase tracking-widest block">
              Fire-Grilled Street Fare
            </span>
            <h1 className="font-['Montserrat'] text-3xl sm:text-4xl font-black uppercase text-[#e5e2e1]">
              Menu
            </h1>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTag(selectedTag ? null : 'Spicy')}
              aria-label="Filter menu"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${
                selectedTag
                  ? 'bg-[#ff535b] text-white border-white shadow-[2px_2px_0px_#ffffff]'
                  : 'bg-[#131313] text-[#e5e2e1] border-[#ab8987]/50 shadow-[2px_2px_0px_0px_rgba(255,179,177,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]'
              }`}
            >
              <Filter className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search menu"
              className={`w-10 h-10 border flex items-center justify-center transition-all ${
                showSearch
                  ? 'bg-[#ff535b] text-white border-white shadow-[2px_2px_0px_#ffffff]'
                  : 'bg-[#131313] text-[#e5e2e1] border-[#ab8987]/50 shadow-[2px_2px_0px_0px_rgba(255,179,177,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Bar Input (toggled) */}
        {showSearch && (
          <div className="relative animate-in fade-in duration-200">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tacos, burritos, salsas, ingredients..."
              className="w-full bg-[#201f1f] border-2 border-[#ff535b] p-3 text-sm text-[#e5e2e1] focus:outline-none shadow-[4px_4px_0px_#000]"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-xs text-[#ab8987] hover:text-white uppercase font-bold"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {/* Category Pills (Horizontal Scroll on Mobile) */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`snap-start shrink-0 border px-4 py-2 font-['Work_Sans'] font-bold text-xs uppercase transition-all ${
                  isActive
                    ? 'border-[#e5e2e1] bg-[#ff535b] text-white shadow-[2px_2px_0px_0px_rgba(229,226,225,1)]'
                    : 'border-[#ab8987]/40 bg-[#131313] text-[#e5e2e1] shadow-[2px_2px_0px_0px_rgba(255,179,177,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] hover:border-[#ffb3b1]'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Quick Tag Pills */}
        <div className="flex gap-1.5 flex-wrap pt-1">
          {filterTags.map((tag) => {
            const isTagActive = (tag === 'All' && !selectedTag) || selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === 'All' ? null : tag)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase border transition-all ${
                  isTagActive
                    ? 'bg-[#ffb3b1] text-[#131313] border-[#ffb3b1]'
                    : 'bg-[#201f1f] text-[#ab8987] border-[#353534] hover:border-[#ab8987]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Items Section */}
      <div className="px-4 sm:px-12 pb-16 max-w-6xl mx-auto w-full border-t-2 border-dashed border-[#5b403f] pt-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <Flame className="w-6 h-6 text-[#ff535b] fill-current" />
          <h2 className="font-['Montserrat'] text-2xl font-black uppercase text-[#e5e2e1]">
            {selectedCategory === 'all'
              ? 'All Rig Menu Items'
              : categories.find((c) => c.id === selectedCategory)?.label}
          </h2>
          <span className="text-xs text-[#ab8987] font-bold">
            ({filteredItems.length} available)
          </span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-[#201f1f] border border-[#353534] p-8">
            <p className="text-sm text-[#ab8987]">No items found matching your filter or search.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#ff535b] uppercase underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-[#e5e2e1]/80 bg-[#201f1f] flex gap-3 sm:gap-4 p-3.5 sm:p-4 relative shadow-[4px_4px_0px_0px_rgba(255,179,177,1)] hover:border-[#ff535b] transition-all group"
              >
                {/* Item Thumbnail */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 border border-[#e5e2e1]/40 bg-[#131313] relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-[#ff535b] mix-blend-color opacity-30 group-hover:opacity-0 transition-opacity"></div>
                  {item.isBestSeller && (
                    <span className="absolute top-0 left-0 bg-[#ff535b] text-white text-[9px] font-bold uppercase px-1.5 py-0.5">
                      ★ Top
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h3
                        onClick={() => onSelectItem(item)}
                        className="font-['Montserrat'] font-bold text-base sm:text-lg uppercase text-[#e5e2e1] cursor-pointer hover:text-[#ffb3b1] transition-colors leading-tight"
                      >
                        {item.name}
                      </h3>
                      <span className="font-['Montserrat'] font-bold text-base sm:text-lg text-[#ffb3b1] shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="font-['Work_Sans'] text-xs sm:text-sm text-[#e4bebc] line-clamp-2 mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#353534]">
                    {/* Tags */}
                    <div className="flex gap-1 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-['Work_Sans'] font-bold uppercase border ${
                            tag === 'Spicy'
                              ? 'border-[#ff535b] text-[#ff535b]'
                              : 'border-[#ab8987]/40 text-[#ab8987]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Add to order action */}
                    <button
                      onClick={() => onQuickAdd(item)}
                      className="border border-[#e5e2e1] bg-[#131313] hover:bg-[#ff535b] text-[#e5e2e1] hover:text-white px-3.5 py-1 font-['Work_Sans'] font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(255,179,177,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all"
                    >
                      Add
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
