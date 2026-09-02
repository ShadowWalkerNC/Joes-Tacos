import { ScheduleDay, SpecialEvent, Testimonial } from '../types';

export const LIVE_TRUCK_STATUS = {
  isOpen: true,
  currentLocationName: 'Rockland Harbor Park',
  streetAddress: '123 Main St, Harbor Point, Rockland, ME',
  nearDetail: 'Near the Maine State Ferry Terminal',
  todayHours: '11:00 AM – 8:00 PM',
  statusMessage: 'Fresh batch of carnitas on the flat top! Lines moving fast.',
  estimatedWaitMinutes: 8,
  phone: '(207) 555-TACO',
  instagram: '@tacojoeofficial',
  lat: 44.1037,
  lng: -69.1098
};

export const WEEKLY_ROUTE: ScheduleDay[] = [
  {
    id: 'thursday',
    dayName: 'Thursday',
    isToday: true,
    timeRange: '11am - 8pm',
    locationName: 'Rockland Harbor Park',
    address: '123 Main St, Harbor Point, ME',
    notes: 'Near the ferry terminal & waterfront boardwalk',
    lat: 44.1037,
    lng: -69.1098,
    status: 'open'
  },
  {
    id: 'friday',
    dayName: 'Friday',
    isToday: false,
    timeRange: '4pm - 9pm',
    locationName: 'Oxbow Brewery',
    address: '274 Jones Woods Rd, Newcastle, ME',
    notes: 'Beer garden courtyard + live acoustic sets',
    lat: 44.0322,
    lng: -69.5367,
    status: 'upcoming'
  },
  {
    id: 'saturday',
    dayName: 'Saturday',
    isToday: false,
    timeRange: '12pm - Sellout',
    locationName: 'Camden Snow Bowl',
    address: '20 Barnestown Rd, Camden, ME',
    notes: 'Base lodge parking lot & trailside deck',
    lat: 44.2215,
    lng: -69.1009,
    status: 'upcoming'
  },
  {
    id: 'sunday',
    dayName: 'Sunday',
    isToday: false,
    timeRange: '11am - 4pm',
    locationName: 'Belfast Harbor Walk',
    address: '15 Front St, Belfast, ME',
    notes: 'Overlooking Penobscot Bay, picnic tables available',
    lat: 44.4259,
    lng: -69.0064,
    status: 'upcoming'
  },
  {
    id: 'tuesday',
    dayName: 'Tuesday',
    isToday: false,
    timeRange: '11:30am - 7pm',
    locationName: 'Thomaston Town Green',
    address: 'Main St & Wadsworth St, Thomaston, ME',
    notes: 'Taco Tuesday 3-for-$10 special all day!',
    lat: 44.0792,
    lng: -69.1814,
    status: 'upcoming'
  }
];

export const SPECIAL_EVENTS: SpecialEvent[] = [
  {
    id: 'lobster-fest',
    month: 'AUG',
    day: '12',
    title: 'Maine Lobster Festival',
    location: 'Rockland Harbor Park',
    time: '10:00 AM – 9:00 PM',
    description: 'Catch our signature Maine Lobster Street Tacos and grilled elotes right by the festival docks.'
  },
  {
    id: 'camden-windjammer',
    month: 'SEP',
    day: '05',
    title: 'Camden Windjammer Festival',
    location: 'Camden Public Landing',
    time: '11:00 AM – 8:00 PM',
    description: 'Schooner races, fireworks, and non-stop hot street tacos on the scenic harbor pier.'
  },
  {
    id: 'midcoast-beer-fest',
    month: 'SEP',
    day: '19',
    title: 'Midcoast Craft Brew & Street Food Rally',
    location: 'Boothbay Craft Center',
    time: '1:00 PM – 7:00 PM',
    description: 'Pairing our Birria Quesa-Tacos with 20+ Maine microbreweries.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Taco Joe saved my wedding. The food was loud, the service was fast, and nobody went home hungry.',
    author: 'Sarah & Mike',
    location: 'Portland, ME',
    rating: 5
  },
  {
    quote: 'Best al pastor north of Boston. That charred pineapple and smoky salsa verde is pure lightning.',
    author: 'Capt. Dave R.',
    location: 'Rockland Harbor',
    rating: 5
  },
  {
    quote: 'Hired them for our 150-person brewery anniversary. The truck rocked up, blasted tunes, and pumped out 400 tacos in 2 hours flawlessly.',
    author: 'Elena K.',
    location: 'Newcastle Brewery',
    rating: 5
  }
];
