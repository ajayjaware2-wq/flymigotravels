export const SITE = {
  name: 'Flymigo Travels',
  established: '2020',
  location: 'Navi Mumbai',
  phone: '+91 9321414441',
  phoneRaw: '919321414441',
  email: 'flymigotravels@gmail.com',
  whatsapp: '919321414441',
  instagram: 'https://instagram.com/flymigotravels',
  mapsQuery: 'Navi Mumbai, Maharashtra, India',
  tagline: 'Travel Your Way, We\u2019ll Plan the Rest.',
  headline: 'Explore the World,\nYour Way.',
};

const px = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export type Service = {
  title: string;
  desc: string;
  icon: string;
  tag?: string;
};

export const services: Service[] = [
  {
    title: 'Domestic Tours',
    desc: 'Handcrafted holidays across India \u2014 from the snow of Kashmir to the backwaters of Kerala.',
    icon: 'Map',
    tag: 'India',
  },
  {
    title: 'International Tours',
    desc: 'Seamless international itineraries with visas, stays and transfers fully managed.',
    icon: 'Plane',
    tag: 'Worldwide',
  },
  {
    title: 'Honeymoon Packages',
    desc: 'Romantic escapes to private villas, overwater suites and candlelit beaches.',
    icon: 'Heart',
    tag: 'Romantic',
  },
  {
    title: 'Luxury Villas',
    desc: 'Private pool villas and beachfront estates for an exclusive, uninterrupted escape.',
    icon: 'Palmtree',
    tag: 'Stays',
  },
  {
    title: 'Hotel Bookings',
    desc: 'Curated stays from 5-star resorts to boutique hideaways \u2014 at the best available rates.',
    icon: 'BedDouble',
    tag: 'Stays',
  },
  {
    title: 'Car Rentals',
    desc: 'Comfortable sedans, SUVs and chauffeured rides for every leg of your journey.',
    icon: 'Car',
    tag: 'Transfers',
  },
  {
    title: 'Bus Rentals',
    desc: 'Tempo travellers and luxury buses for group tours, weddings and corporate trips.',
    icon: 'Bus',
    tag: 'Group',
  },
  {
    title: 'Corporate Tours',
    desc: 'MICE, offsites and team retreats planned end-to-end with zero operational overhead.',
    icon: 'Briefcase',
    tag: 'Business',
  },
  {
    title: 'Customized Holidays',
    desc: 'Every detail built around your budget and wishes \u2014 because no two trips are alike.',
    icon: 'Sparkles',
    tag: 'Bespoke',
  },
];

export type Destination = {
  name: string;
  country: string;
  image: string;
  tag: string;
  days: string;
  from: string;
};

export const destinations: Destination[] = [
  {
    name: 'Goa',
    country: 'India',
    image: px('28654126'),
    tag: 'Beaches & Nights',
    days: '4\u20136 Days',
    from: '\u20B914,999',
  },
  {
    name: 'Manali',
    country: 'India',
    image: px('16104060'),
    tag: 'Snow & Adventure',
    days: '5\u20137 Days',
    from: '\u20B918,999',
  },
  {
    name: 'Kashmir',
    country: 'India',
    image: px('13827306'),
    tag: 'Paradise on Earth',
    days: '5\u20137 Days',
    from: '\u20B922,999',
  },
  {
    name: 'Kerala',
    country: 'India',
    image: px('417074'),
    tag: 'Backwaters & Ayurveda',
    days: '6\u20138 Days',
    from: '\u20B924,999',
  },
  {
    name: 'Rajasthan',
    country: 'India',
    image: px('11750442'),
    tag: 'Royalty & Forts',
    days: '7\u20139 Days',
    from: '\u20B926,999',
  },
  {
    name: 'Dubai',
    country: 'UAE',
    image: px('3787882'),
    tag: 'City of Gold',
    days: '4\u20136 Days',
    from: '\u20B949,999',
  },
  {
    name: 'Thailand',
    country: 'Thailand',
    image: px('1929611'),
    tag: 'Temples & Beaches',
    days: '5\u20137 Days',
    from: '\u20B932,999',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    image: px('36965361'),
    tag: 'Island of Gods',
    days: '6\u20138 Days',
    from: '\u20B942,999',
  },
  {
    name: 'Maldives',
    country: 'Maldives',
    image: px('1287460'),
    tag: 'Overwater Luxury',
    days: '4\u20136 Days',
    from: '\u20B989,999',
  },
  {
    name: 'Europe',
    country: 'Multi-country',
    image: px('29087405'),
    tag: 'Grand Tour',
    days: '10\u201314 Days',
    from: '\u20B91,49,999',
  },
];

export type Package = {
  title: string;
  destination: string;
  image: string;
  nights: number;
  price: string;
  inclusions: string[];
  badge?: string;
  rating: number;
};

export const packages: Package[] = [
  {
    title: 'Maldives Overwater Escape',
    destination: 'Maldives',
    image: px('1287460'),
    nights: 4,
    price: '\u20B989,999',
    inclusions: ['Overwater villa', 'All meals', 'Speedboat transfers', 'Sunset cruise'],
    badge: 'Bestseller',
    rating: 4.9,
  },
  {
    title: 'Dubai Desert & Skyline',
    destination: 'Dubai, UAE',
    image: px('3787882'),
    nights: 5,
    price: '\u20B949,999',
    inclusions: ['4-star hotel', 'Desert safari', 'Burj Khalifa', 'Dhow cruise'],
    badge: 'Popular',
    rating: 4.8,
  },
  {
    title: 'Bali Bliss Honeymoon',
    destination: 'Bali, Indonesia',
    image: px('36965361'),
    nights: 6,
    price: '\u20B942,999',
    inclusions: ['Private pool villa', 'Spa for two', 'Rice terrace tour', 'Candlelight dinner'],
    badge: 'Honeymoon',
    rating: 4.9,
  },
  {
    title: 'Kashmir Valley Retreat',
    destination: 'Srinagar, India',
    image: px('13827306'),
    nights: 6,
    price: '\u20B922,999',
    inclusions: ['Houseboat stay', 'Shikara ride', 'Gulmarg gondola', 'All meals'],
    rating: 4.7,
  },
  {
    title: 'Kerala Backwater Symphony',
    destination: 'Alleppey, India',
    image: px('417074'),
    nights: 7,
    price: '\u20B924,999',
    inclusions: ['Houseboat cruise', 'Munnar tea gardens', 'Ayurveda massage', 'Kathakali show'],
    rating: 4.8,
  },
  {
    title: 'Europe Grand Tour',
    destination: 'Paris, Switzerland, Italy',
    image: px('29087405'),
    nights: 11,
    price: '\u20B91,49,999',
    inclusions: ['Schengen visa', 'Euro rail', '4-star hotels', 'Guided city tours'],
    badge: 'Premium',
    rating: 4.9,
  },
];

export type Villa = {
  name: string;
  location: string;
  image: string;
  price: string;
  beds: number;
  guests: number;
  tag: string;
};

export const villas: Villa[] = [
  {
    name: 'Misty Hills Estate',
    location: 'Lonavala, Maharashtra',
    image: px('8082312'),
    price: '\u20B918,000',
    beds: 4,
    guests: 10,
    tag: 'Private Pool',
  },
  {
    name: 'Riverfront Forest Villa',
    location: 'Karjat, Maharashtra',
    image: px('4913326'),
    price: '\u20B914,000',
    beds: 3,
    guests: 8,
    tag: 'Nature Retreat',
  },
  {
    name: 'Valley View Farmhouse',
    location: 'Igatpuri, Maharashtra',
    image: px('6875523'),
    price: '\u20B912,000',
    beds: 3,
    guests: 7,
    tag: 'Scenic View',
  },
  {
    name: 'Urban Luxury Penthouse',
    location: 'Mumbai, Maharashtra',
    image: px('2476632'),
    price: '\u20B925,000',
    beds: 4,
    guests: 8,
    tag: 'City View',
  },
];

export type Vehicle = {
  name: string;
  seats: string;
  image: string;
  price: string;
  type: string;
};

export const vehicles: Vehicle[] = [
  {
    name: 'Mercedes-Benz Sedan',
    seats: '4 Seater',
    image: px('31458555'),
    price: '\u20B94,500/day',
    type: 'Luxury Car',
  },
  {
    name: 'Premium SUV',
    seats: '6 Seater',
    image: px('170811'),
    price: '\u20B95,500/day',
    type: 'SUV',
  },
  {
    name: 'Tempo Traveller',
    seats: '12 Seater',
    image: px('7349013'),
    price: '\u20B96,500/day',
    type: 'Group Travel',
  },
];

export type Review = {
  name: string;
  location: string;
  text: string;
  rating: number;
  trip: string;
  initial: string;
};

export const reviews: Review[] = [
  {
    name: 'Aarav & Diya Mehta',
    location: 'Mumbai',
    text: 'Flymigo planned our Maldives honeymoon to perfection. The overwater villa, the surprise candlelight dinner, every single transfer \u2014 flawless. It felt like a dream we didn\u2019t have to manage.',
    rating: 5,
    trip: 'Maldives Honeymoon',
    initial: 'A',
  },
  {
    name: 'Rohan Sharma',
    location: 'Pune',
    text: 'Booked a 9-day Europe tour for my parents. Visa assistance, hotels, guides \u2014 everything was sorted. They came back with nothing but smiles. Worth every rupee.',
    rating: 5,
    trip: 'Europe Grand Tour',
    initial: 'R',
  },
  {
    name: 'Sneha Iyer',
    location: 'Navi Mumbai',
    text: 'Our corporate offsite for 40 people was handled end to end \u2014 bus, stay, activities, meals. Zero stress for our team. Flymigo truly understands professional travel.',
    rating: 5,
    trip: 'Corporate Offsite',
    initial: 'S',
  },
  {
    name: 'Karan Malhotra',
    location: 'Delhi',
    text: 'Customized a Bali trip around my budget and still got a private pool villa. Transparent pricing, no hidden costs. This is how travel should be planned.',
    rating: 5,
    trip: 'Bali Holiday',
    initial: 'K',
  },
  {
    name: 'Priya Nair',
    location: 'Bengaluru',
    text: 'Kashmir in winter was magical. The houseboat on Dal Lake, the snow in Gulmarg \u2014 Flymigo curated experiences we wouldn\u2019t have found on our own.',
    rating: 5,
    trip: 'Kashmir Winter',
    initial: 'P',
  },
  {
    name: 'Vikram Rao',
    location: 'Hyderabad',
    text: 'Rented a Mercedes for a 5-day Goa road trip. Spotless car, professional driver, flexible schedule. The luxury car rental was a class apart.',
    rating: 5,
    trip: 'Goa Road Trip',
    initial: 'V',
  },
];

export type GalleryItem = {
  src: string;
  label: string;
  span: 'tall' | 'wide' | 'normal';
};

export const gallery: GalleryItem[] = [
  { src: px('1287460'), label: 'Maldives', span: 'tall' },
  { src: px('28654126'), label: 'Goa', span: 'normal' },
  { src: px('16104060'), label: 'Manali', span: 'wide' },
  { src: px('13827306'), label: 'Kashmir', span: 'normal' },
  { src: px('3787882'), label: 'Dubai', span: 'tall' },
  { src: px('1929611'), label: 'Thailand', span: 'normal' },
  { src: px('36965361'), label: 'Bali', span: 'wide' },
  { src: px('29087405'), label: 'Paris', span: 'normal' },
  { src: px('417074'), label: 'Kerala', span: 'normal' },
  { src: px('1363794'), label: 'Above the Clouds', span: 'tall' },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How does Flymigo plan a customized trip?',
    a: 'You share your dream destination, dates, budget and preferences through our inquiry form. Our travel experts design a personalized itinerary, you review and approve it, and then you travel stress-free while we handle every booking and detail.',
  },
  {
    q: 'Do you handle visas and passports?',
    a: 'Yes. We provide complete visa assistance and passport application support as part of our travel management, so your documentation is sorted before you fly.',
  },
  {
    q: 'Can I plan a trip on a limited budget?',
    a: 'Absolutely. Customization is our core. We design experiences around your budget \u2014 optimizing stays, transfers and activities without compromising the quality of your journey.',
  },
  {
    q: 'Do you offer travel insurance?',
    a: 'Yes, travel insurance is available for every domestic and international trip, covering medical, baggage and cancellation protections for complete peace of mind.',
  },
  {
    q: 'What car and bus rental options are available?',
    a: 'We offer sedans, SUVs, luxury cars, tempo travellers and buses with professional drivers \u2014 for airport transfers, local sightseeing, road trips and large group travel.',
  },
  {
    q: 'How do I get a quote for my trip?',
    a: 'Fill out the inquiry form on this page or message us on WhatsApp. You\u2019ll receive a tailored proposal with transparent pricing \u2014 usually within a few hours.',
  },
];

export type WhyItem = { title: string; desc: string; icon: string };

export const whyChooseUs: WhyItem[] = [
  {
    title: 'Customized Travel Experiences',
    desc: 'Every itinerary is built from scratch around your wishes \u2014 never off-the-shelf packages.',
    icon: 'Sparkles',
  },
  {
    title: 'Budget Friendly',
    desc: 'Smart planning that maximizes value at every price point, with no hidden charges.',
    icon: 'Wallet',
  },
  {
    title: 'Luxury Experiences',
    desc: 'Private villas, luxury cars and curated upgrades for those who want the extraordinary.',
    icon: 'Crown',
  },
  {
    title: 'Expert Tour Planning',
    desc: 'Five years of crafting journeys across India and 30+ international destinations.',
    icon: 'Compass',
  },
  {
    title: 'WhatsApp Support',
    desc: 'Real-time assistance before, during and after your trip \u2014 just a message away.',
    icon: 'MessageCircle',
  },
  {
    title: 'Trusted Since 2020',
    desc: 'Hundreds of happy travelers and a reputation built on delivered promises.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Professional Tour Management',
    desc: 'Dedicated coordinators who handle every operational detail so you simply enjoy.',
    icon: 'Briefcase',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Clear, itemized quotes with everything included \u2014 what you see is what you pay.',
    icon: 'BadgeCheck',
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell us your dream destination',
    desc: 'Share where you want to go, your dates and who\u2019s travelling. Any dream, any budget.',
    icon: 'MapPin',
  },
  {
    step: '02',
    title: 'We customize your itinerary',
    desc: 'Our experts craft a day-by-day plan with stays, transfers and experiences tailored to you.',
    icon: 'PenTool',
  },
  {
    step: '03',
    title: 'Approve your travel plan',
    desc: 'Review the proposal, tweak anything you like, and approve only when it feels perfect.',
    icon: 'CheckCircle',
  },
  {
    step: '04',
    title: 'Travel stress free',
    desc: 'We manage every booking and detail. You show up and live the journey.',
    icon: 'Plane',
  },
];

export const heroSlides = [
  px('1287460', 1920),
  px('16104060', 1920),
  px('3787882', 1920),
  px('36965361', 1920),
  px('13827306', 1920),
  px('29087405', 1920),
];
