import { ScheduleDay, SpecialEvent, Testimonial } from '../types';

export const LIVE_TRUCK_STATUS = {
  isOpen: true,
  currentLocationName: 'Rockport Harbor / Commercial St',
  streetAddress: '34 Commercial St, Rockport, ME 04856',
  nearDetail: 'Rockport Harbor Waterfront & Sea Hag Cider',
  todayHours: '11:00 AM – 7:30 PM',
  statusMessage: 'Fresh Carnitas & Carne Asada on the plancha! Grab tacos before sellout.',
  estimatedWaitMinutes: 5,
  phone: '(207) 555-TACO',
  facebook: 'https://www.facebook.com/profile.php?id=100088337054895',
  facebookHandle: '@TACOJOE_OFFICIAL',
  instagram: '@tacojoe_official',
  website: 'www.tacojoe.me',
  owner: 'Joseph Simko (ServSafe Certified)',
  lat: 44.1862,
  lng: -69.0764
};

export const WEEKLY_ROUTE: ScheduleDay[] = [
  {
    id: 'thursday',
    dayName: 'Thursday',
    isToday: true,
    timeRange: '11:00 AM – 7:30 PM',
    locationName: '34 Commercial St, Rockport',
    address: '34 Commercial St, Rockport, ME 04856',
    notes: 'Rockport Harbor village & Sea Hag Cider',
    lat: 44.1862,
    lng: -69.0764,
    status: 'open'
  },
  {
    id: 'friday',
    dayName: 'Friday',
    isToday: false,
    timeRange: '11:30 AM – 7:00 PM',
    locationName: 'Owls Head Transportation Museum',
    address: '117 Museum St, Owls Head, ME 04854',
    notes: 'Museum grounds & outdoor seating',
    lat: 44.0622,
    lng: -69.0984,
    status: 'upcoming'
  },
  {
    id: 'saturday',
    dayName: 'Saturday',
    isToday: false,
    timeRange: '12:00 PM – Sellout',
    locationName: 'Rockland Harbor Park & Planet Fitness',
    address: 'Harbor Walk / Main St, Rockland, ME',
    notes: 'Overlooking Penobscot Bay & ferry terminal',
    lat: 44.1037,
    lng: -69.1098,
    status: 'upcoming'
  },
  {
    id: 'sunday',
    dayName: 'Sunday',
    isToday: false,
    timeRange: '11:30 AM – 5:00 PM',
    locationName: 'Waldoboro Route 1',
    address: '760 Atlantic Highway, Waldoboro, ME',
    notes: 'Route 1 Atlantic Hwy roadside stop',
    lat: 44.0956,
    lng: -69.3789,
    status: 'upcoming'
  },
  {
    id: 'tuesday',
    dayName: 'Tuesday',
    isToday: false,
    timeRange: '11:00 AM – 6:30 PM',
    locationName: '34 Commercial St, Rockport',
    address: '34 Commercial St, Rockport, ME 04856',
    notes: 'Taco Tuesday special pricing!',
    lat: 44.1862,
    lng: -69.0764,
    status: 'upcoming'
  }
];

export const SPECIAL_EVENTS: SpecialEvent[] = [
  {
    id: 'rockport-donut',
    month: 'JUL',
    day: '18',
    title: 'Rockport Donut & Food Truck Fest',
    location: 'Rockport Harbor Park, Rockport, ME',
    time: '10:00 AM – 6:00 PM',
    description: 'Serving hot street tacos and burritos alongside local craft food & live music.'
  },
  {
    id: 'camden-art-walk',
    month: 'AUG',
    day: '15',
    title: 'Camden Art Walk & Street Fare',
    location: 'Camden Harbor Landing, ME',
    time: '11:00 AM – 8:00 PM',
    description: 'Pairing fresh street food with local artisan galleries and harbor views.'
  },
  {
    id: 'owls-head-rally',
    month: 'SEP',
    day: '06',
    title: 'Owls Head Vintage Wheels & Tacos',
    location: '117 Museum St, Owls Head, ME',
    time: '10:00 AM – 4:00 PM',
    description: 'Outdoor food truck rally at the vintage transportation museum.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Best tacos in Midcoast Maine! The Carne Asada and pork carnitas with corn salsa are unmatched.',
    author: 'Local Midcoast Regular',
    location: 'Rockport, ME',
    rating: 5
  },
  {
    quote: 'Real authentic Mexican street tacos right here in Maine. The 12" carnivore burrito is enormous and packed with flavor.',
    author: 'Mark T.',
    location: 'Owls Head, ME',
    rating: 5
  },
  {
    quote: 'Joe catered our outdoor event with the rig. Quick, friendly, hot food, and everyone raved about the smash burgers and tacos.',
    author: 'Amanda K.',
    location: 'Rockland, ME',
    rating: 5
  }
];
