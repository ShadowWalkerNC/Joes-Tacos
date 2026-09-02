export type PageView = 'home' | 'menu' | 'find-us' | 'events' | 'about';

export type MenuCategory = 'all' | 'tacos' | 'burritos' | 'bowls' | 'quesadillas' | 'sandwiches' | 'sides' | 'kids' | 'drinks';

export interface MenuItemOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'tacos' | 'burritos' | 'bowls' | 'quesadillas' | 'sandwiches' | 'sides' | 'kids' | 'drinks';
  price: number;
  description: string;
  image: string;
  tags: string[]; // 'Beef', 'Pork', 'Chicken', 'Vegan', 'Vegetarian', 'Kids', 'Drink', 'Best Seller'
  isBestSeller?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  options?: {
    salsas?: string[];
    proteinChoices?: MenuItemOption[];
    addOns?: MenuItemOption[];
  };
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  selectedOptions?: {
    salsa?: string;
    protein?: MenuItemOption;
    addOns?: MenuItemOption[];
    specialInstructions?: string;
  };
  totalPrice: number;
}

export interface ScheduleDay {
  id: string;
  dayName: string;
  isToday?: boolean;
  timeRange: string;
  locationName: string;
  address: string;
  notes: string;
  lat: number;
  lng: number;
  status: 'open' | 'upcoming' | 'closed';
}

export interface SpecialEvent {
  id: string;
  month: string;
  day: string;
  title: string;
  location: string;
  time: string;
  description: string;
}

export interface CateringQuote {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  serviceType: 'truck-takeover' | 'taco-bar' | 'late-night';
  details: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}
