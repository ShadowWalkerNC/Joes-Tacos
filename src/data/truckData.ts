import { ScheduleDay, SpecialEvent, Testimonial } from '../types';

export const LIVE_TRUCK_STATUS = {
  isOpen: true,
  currentLocationName: '34 Commercial St (Sea Hag Cider lot)',
  streetAddress: '34 Commercial St, Rockport, ME 04856',
  nearDetail: 'Rockport Harbor Waterfront & Sea Hag Cider Lot',
  todayHours: '11:00 AM – 7:00 PM',
  statusMessage: 'Fresh Carnitas, Carne Asada & scratch-made Guacamole on the truck today!',
  estimatedWaitMinutes: 5,
  facebook: 'https://www.facebook.com/profile.php?id=100088337054895',
  facebookHandle: '@TACOJOE_OFFICIAL',
  instagram: '@tacojoe_official',
  owner: 'Chef Joseph Simko (ServSafe Certified)',
  lat: 44.1862,
  lng: -69.0764
};

export const WEEKLY_ROUTE: ScheduleDay[] = [
  {
    id: 'rockport-commercial',
    dayName: 'Thursday – Sunday',
    isToday: true,
    timeRange: '11:00 AM – 7:00 PM',
    locationName: '34 Commercial St, Rockport',
    address: '34 Commercial St, Rockport, ME 04856',
    notes: 'Rockport Harbor village & Sea Hag Cider parking lot',
    lat: 44.1862,
    lng: -69.0764,
    status: 'open'
  },
  {
    id: 'country-inn-rockport',
    dayName: 'Scheduled Days & Rallies',
    isToday: false,
    timeRange: '11:30 AM – 7:00 PM',
    locationName: 'The Country Inn at Camden Rockport',
    address: '8 Country Inn Way, Rockport, ME 04856',
    notes: 'The Country Inn parking lot off Route 1',
    lat: 44.1952,
    lng: -69.0745,
    status: 'upcoming'
  },
  {
    id: 'owls-head-museum',
    dayName: 'Weekend Museum Shows & Events',
    isToday: false,
    timeRange: '10:30 AM – 4:30 PM',
    locationName: 'Owls Head Transportation Museum',
    address: '117 Museum St, Owls Head, ME 04854',
    notes: 'Outdoor grounds during vintage transportation shows',
    lat: 44.0622,
    lng: -69.0984,
    status: 'upcoming'
  },
  {
    id: 'farmers-market-belfast',
    dayName: 'Saturday Market',
    isToday: false,
    timeRange: '9:00 AM – 2:00 PM',
    locationName: 'United Farmers Market of Maine',
    address: '18 Spring St, Belfast, ME 04915',
    notes: 'Local market rally & community food festival',
    lat: 44.4262,
    lng: -69.0062,
    status: 'upcoming'
  }
];

export const SPECIAL_EVENTS: SpecialEvent[] = [
  {
    id: 'camden-art-walk',
    month: 'JUL',
    day: '17',
    title: 'Camden Art Walk & Food Truck Night',
    location: 'Camden Harbor / Main St, Camden, ME',
    time: '4:00 PM – 8:00 PM',
    description: 'Serving hot street tacos and burritos during the monthly Camden Art Walk.'
  },
  {
    id: 'owls-head-rally',
    month: 'AUG',
    day: '22',
    title: 'Antique Truck & Tractor Show (Owls Head)',
    location: '117 Museum St, Owls Head, ME',
    time: '10:00 AM – 4:00 PM',
    description: 'Serving the full food truck lineup at the Owls Head Transportation Museum.'
  },
  {
    id: 'union-fair',
    month: 'SEP',
    day: '05',
    title: 'The Union Fair / Midcoast Fair Days',
    location: 'Union Fairgrounds, Union, ME',
    time: '11:00 AM – 8:00 PM',
    description: 'Mexican street food at the historic annual Union Fairgrounds.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Best tacos in Midcoast Maine! The Carne Asada, pork carnitas, and freshly made guacamole are incredible.',
    author: 'Midcoast Local',
    location: 'Rockport, ME',
    rating: 5
  },
  {
    quote: 'Authentic Mexican street fare right at Rockport Harbor. The 12-inch loaded burrito and sweet corn salsa hit the spot every time.',
    author: 'Dave M.',
    location: 'Owls Head, ME',
    rating: 5
  },
  {
    quote: 'Joe catered our community gathering with the truck. Super fast service, delicious double-tortilla street tacos, and everyone loved it.',
    author: 'Sarah B.',
    location: 'Camden, ME',
    rating: 5
  }
];
