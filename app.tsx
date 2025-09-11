import { useState } from 'react';
import { Calendar, MapPin, Clock, Camera, Utensils, Users, Train, Mountain, ChevronDown, ChevronUp, Home, Plane, Star, Globe, Building2, Navigation, Info, ExternalLink } from 'lucide-react';

type Currency = 'JPY' | 'INR';

interface ScheduleItem {
  time: string;
  type: string;
  activity: string;
  icon: string;
  location?: string;
  details?: string;
  previousLocation?: string | null;
  price?: string;
  priceType?: string;
  note?: string;
}

const JapanAdventureItinerary = () => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [currency, setCurrency] = useState<Currency>('JPY');

  const paymentStatus = {
    paid: {
      percentage: 91,
      total: { jpy: "¥323,001", inr: "₹192,549" },
      items: [
        { name: "Tokyo Accommodation (Airbnb)", amount: { jpy: "¥66,000", inr: "₹39,336" }, date: "Paid" },
        { name: "Osaka Hotel (2 nights)", amount: { jpy: "¥46,000", inr: "₹27,416" }, date: "Paid" },
        { name: "Hiroshima Hotel (1 night)", amount: { jpy: "¥23,000", inr: "₹13,708" }, date: "Paid" },
        { name: "Shinkansen NOZOMI 11 (Tokyo-Osaka)", amount: { jpy: "¥42,960", inr: "₹25,604" }, date: "Paid - Reservation #2000" },
        { name: "Domestic Flight (Hiroshima-Tokyo)", amount: { jpy: "¥43,375", inr: "₹25,851" }, date: "Paid" },
        { name: "Mount Fuji Private Tour", amount: { jpy: "¥75,000", inr: "₹44,700" }, date: "Paid" },
        { name: "Universal Studios Japan Studio Pass", amount: { jpy: "¥33,000", inr: "₹19,668" }, date: "Paid - Sept 29, 2025" },
        { name: "Limited Express AONIYOSHI (Osaka-Kyoto)", amount: { jpy: "¥3,000", inr: "₹1,788" }, date: "Paid - Sept 30, 2025" },
        { name: "Private Car Transfer (Airport-Tokyo)", amount: { jpy: "¥16,000", inr: "₹9,536" }, date: "Paid - Sept 25, 2025" }
      ]
    },
    unpaid: {
      total: { jpy: "¥23,834", inr: "₹14,165" },
      items: [
        { name: "Tokyo Disneyland Tickets", amount: { jpy: "¥25,200", inr: "₹15,019" }, date: "Need to book" },
        { name: "teamLab Planets Tickets", amount: { jpy: "¥9,600", inr: "₹5,722" }, date: "Need to book" },
        { name: "Additional Transportation", amount: { jpy: "¥8,034", inr: "₹4,788" }, date: "Pay on arrival" }
      ]
    }
  };

  // Currency conversion rate (1 JPY = 0.596 INR approximately)
  const convertPrice = (jpyPrice: string): string => {
    if (currency === 'INR') {
      const numPrice = parseInt(jpyPrice.replace(/[¥,]/g, ''));
      return `₹${Math.round(numPrice * 0.596).toLocaleString()}`;
    }
    return jpyPrice;
  };

  // Google Maps navigation function
  const openGoogleMaps = (fromLocation: string, toLocation: string): void => {
    const encodedFrom = encodeURIComponent(fromLocation);
    const encodedTo = encodeURIComponent(toLocation);
    const url = `https://www.google.com/maps/dir/${encodedFrom}/${encodedTo}`;
    window.open(url, '_blank');
  };

  const itineraryData = [
    {
      day: 1,
      title: "Tokyo Arrival & Evening Introduction",
      date: "September 25, 2025",
      location: "Tokyo",
      description: "Evening arrival and gentle introduction to Tokyo",
      price: "¥18,000",
      priceType: "",
      gradient: "from-slate-700 to-slate-800",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      tags: ["Arrival Day", "Private Transfer", "Evening Exploration"],
      accommodation: {
        name: "Airbnb Apartment",
        location: "Katsushika District",
        checkIn: "After 4:00 PM",
        checkOut: "Sept 29, Before 11:00 PM",
        cost: "¥66,000",
        nights: 4,
        rating: 4.8,
        amenities: ["WiFi", "Kitchen", "Washing Machine", "3 Beds"],
        address: "Katsushika, Tokyo",
        coordinates: "Katsushika District, Tokyo, Japan"
      },
      travel: {
        arrival: "Haneda/Narita Airport → Katsushika",
        method: "Private Car Transfer",
        duration: "60-90 minutes",
        cost: "¥15,000 for group",
        instructions: "Professional driver will meet you at arrivals with name board. Comfortable vehicle for 3 people with luggage."
      },
      schedule: [
        { 
          time: "20:00", 
          type: "start", 
          activity: "Flight arrival at Haneda/Narita Airport", 
          icon: "✈️", 
          location: "Haneda Airport, Tokyo, Japan",
          details: "International flight arrival, collect baggage and go through customs. Look for driver with name board.",
          previousLocation: null
        },
        { 
          time: "20:30", 
          type: "transport", 
          activity: "Private car transfer to accommodation", 
          icon: "🚗", 
          price: "¥15,000", 
          location: "Katsushika District, Tokyo, Japan",
          details: "Professional driver service with comfortable vehicle. Direct transfer to Airbnb apartment.",
          previousLocation: "Haneda Airport, Tokyo, Japan"
        },
        { 
          time: "21:30", 
          type: "hotel", 
          activity: "Check-in to Airbnb (Katsushika)", 
          icon: "🏠", 
          location: "Katsushika District, Tokyo, Japan",
          details: "Meet host for key collection. Apartment has 3 beds, kitchen, and washing facilities.",
          previousLocation: "Katsushika District, Tokyo, Japan"
        },
        { 
          time: "22:30", 
          type: "food", 
          activity: "Late dinner at halal restaurant", 
          icon: "🍱", 
          price: "¥3,000", 
          location: "Halal Wagyu One, Asakusa, Tokyo, Japan",
          details: "Halal-certified restaurant 15 mins from accommodation. Try halal wagyu and Japanese curry.",
          previousLocation: "Katsushika District, Tokyo, Japan"
        }
      ],
      tips: [
        "Download Google Translate app with camera feature",
        "Halal food apps: Halal Gourmet Japan, HalalTrip",
        "Exchange some cash at airport - many places don't accept cards"
      ]
    },
    {
      day: 2,
      title: "Tokyo Skytree & Modern Culture",
      date: "September 26, 2025",
      location: "Tokyo",
      description: "Iconic views and youth culture exploration",
      price: "¥18,500",
      priceType: "",
      gradient: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      tags: ["Tokyo Skytree", "Asakusa", "Modern Tokyo", "Halal Food"],
      travel: {
        route: "Katsushika → Asakusa → Tokyo Skytree → Shibuya",
        method: "JR Lines + Tokyo Metro",
        duration: "Full day with train travel",
        totalCost: "¥800 per person",
        instructions: "Use IC card for all train travel. Stay on JR lines when possible with JR Pass."
      },
      schedule: [
        { 
          time: "09:00", 
          type: "culture", 
          activity: "Senso-ji Temple visit", 
          icon: "⛩️", 
          location: "Senso-ji Temple, Asakusa, Tokyo, Japan",
          details: "Tokyo's oldest temple (645 AD). Walk through Nakamise Shopping Street. Respect dress code.",
          previousLocation: "Katsushika District, Tokyo, Japan"
        },
        { 
          time: "11:00", 
          type: "attraction", 
          activity: "Tokyo Skytree observation deck", 
          icon: "🗼", 
          price: "¥3,100", 
          location: "Tokyo Skytree, Sumida, Tokyo, Japan",
          details: "Book timed entry tickets. 350m & 450m observation decks. Clear Mt. Fuji views on sunny days.",
          previousLocation: "Senso-ji Temple, Asakusa, Tokyo, Japan"
        },
        { 
          time: "13:00", 
          type: "food", 
          activity: "Halal lunch at Solamachi", 
          icon: "🍜", 
          price: "¥2,500", 
          location: "Tokyo Skytree Town, Sumida, Tokyo, Japan",
          details: "Visit Halal-certified restaurants in Solamachi complex. Try halal ramen or sushi.",
          previousLocation: "Tokyo Skytree, Sumida, Tokyo, Japan"
        },
        { 
          time: "15:00", 
          type: "culture", 
          activity: "Harajuku fashion district", 
          icon: "🎨", 
          location: "Harajuku, Shibuya, Tokyo, Japan",
          details: "Takeshita Street for youth culture. Omotesando for high fashion. People watching.",
          previousLocation: "Tokyo Skytree Town, Sumida, Tokyo, Japan"
        },
        { 
          time: "17:00", 
          type: "culture", 
          activity: "Shibuya Crossing experience", 
          icon: "🌃", 
          location: "Shibuya Crossing, Tokyo, Japan",
          details: "World's busiest pedestrian crossing. Visit Shibuya Sky observation deck for aerial view.",
          previousLocation: "Harajuku, Shibuya, Tokyo, Japan"
        },
        { 
          time: "19:00", 
          type: "food", 
          activity: "Halal dinner in Shibuya", 
          icon: "🍱", 
          price: "¥4,000", 
          location: "Shibuya District, Tokyo, Japan",
          details: "Multiple halal options: Nabezo (halal shabu-shabu), Turkish kebabs, Indian restaurants.",
          previousLocation: "Shibuya Crossing, Tokyo, Japan"
        }
      ],
      tips: [
        "Download Tokyo Metro app for navigation",
        "Many temples require modest dress - cover shoulders and knees",
        "Shibuya Sky has great sunset views around 6 PM"
      ]
    },
    {
      day: 3,
      title: "Tokyo Disneyland Magic",
      date: "September 27, 2025",
      location: "Tokyo Disney",
      description: "Full day magical experience at Tokyo Disneyland",
      price: "¥25,000",
      priceType: "",
      gradient: "from-indigo-700 to-indigo-800",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      tags: ["Disney Magic", "Theme Park", "Family Fun", "Special Dietary"],
      travel: {
        route: "Katsushika → Maihama Station",
        method: "JR Keiyo Line",
        duration: "45 minutes",
        cost: "¥350 per person",
        instructions: "Take JR Keiyo Line direct to Maihama Station. Disney Resort Line monorail to park entrance."
      },
      schedule: [
        { 
          time: "07:30", 
          type: "transport", 
          activity: "Travel to Tokyo Disneyland", 
          icon: "🚅", 
          price: "¥350", 
          location: "Maihama Station, Chiba, Japan",
          details: "JR Keiyo Line to Maihama Station, then Disney Resort Line monorail (¥260) to park.",
          previousLocation: "Katsushika District, Tokyo, Japan"
        },
        { 
          time: "08:30", 
          type: "start", 
          activity: "Park opening & rope drop", 
          icon: "🎢", 
          location: "Tokyo Disneyland, Chiba, Japan",
          details: "Arrive 30 mins before opening. Use Disney Premier Access for popular rides.",
          previousLocation: "Maihama Station, Chiba, Japan"
        },
        { 
          time: "09:00", 
          type: "attraction", 
          activity: "Disney attractions tour", 
          icon: "🎢", 
          price: "¥8,400", 
          location: "Tokyo Disneyland, Chiba, Japan",
          details: "Priority: Beauty & Beast, Splash Mountain, Space Mountain. Use Disney app for wait times.",
          previousLocation: "Tokyo Disneyland, Chiba, Japan"
        },
        { 
          time: "12:30", 
          type: "food", 
          activity: "Halal lunch at park", 
          icon: "🍔", 
          price: "¥3,500", 
          location: "Queen of Hearts Banquet Hall, Tokyo Disneyland, Japan",
          details: "Disney offers Muslim-friendly meals on request. Contact Guest Relations for special dietary needs.",
          previousLocation: "Tokyo Disneyland, Chiba, Japan"
        },
        { 
          time: "18:00", 
          type: "attraction", 
          activity: "Electrical Parade & fireworks", 
          icon: "✨", 
          location: "Tokyo Disneyland Main Street, Chiba, Japan",
          details: "Best viewing spots: Central Plaza or Main Street. Parade starts at 7 PM, fireworks at 8:30 PM.",
          previousLocation: "Queen of Hearts Banquet Hall, Tokyo Disneyland, Japan"
        },
        { 
          time: "21:00", 
          type: "transport", 
          activity: "Return to accommodation", 
          icon: "🚇", 
          location: "Katsushika District, Tokyo, Japan",
          details: "Trains run until midnight. Keep IC card handy for quick exit.",
          previousLocation: "Tokyo Disneyland Main Street, Chiba, Japan"
        }
      ],
      tips: [
        "⚠️ TICKETS NOT YET BOOKED - Need to purchase (¥25,200 for 3 people)",
        "Download official Tokyo Disney Resort app",
        "Contact Guest Relations for halal meal options in advance",
        "Park stays open until 10 PM - enjoy night illuminations"
      ]
    },
    {
      day: 4,
      title: "Mount Fuji Sacred Journey",
      date: "September 28, 2025",
      location: "Mount Fuji Region",
      description: "Sacred mountain photography and traditional villages",
      price: "¥75,000",
      priceType: "total for group",
      gradient: "from-emerald-700 to-emerald-800",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      tags: ["Mount Fuji", "Private Car", "Photography", "Traditional Culture"],
      travel: {
        route: "Tokyo → Fujiyoshida → Kawaguchi Lake → Tokyo",
        method: "Private Car with Driver",
        duration: "10-hour tour",
        totalCost: "¥65,000 + ¥10,000 guide/entry fees",
        instructions: "Professional driver picks up from accommodation. English-speaking guide included."
      },
      schedule: [
        { 
          time: "07:00", 
          type: "start", 
          activity: "Private car pickup", 
          icon: "🚗", 
          location: "Katsushika District, Tokyo, Japan",
          details: "Professional driver with clean, comfortable vehicle. English-speaking guide included.",
          price: "¥65,000",
          priceType: "group total",
          previousLocation: "Katsushika District, Tokyo, Japan"
        },
        { 
          time: "09:30", 
          type: "photo", 
          activity: "Chureito Pagoda - Iconic Mt. Fuji shot", 
          icon: "📸", 
          location: "Chureito Pagoda, Fujiyoshida, Yamanashi, Japan",
          details: "398 steps to pagoda. Best Mt. Fuji photo spot. Clear morning views. Entry: ¥500/person.",
          previousLocation: "Katsushika District, Tokyo, Japan"
        },
        { 
          time: "11:30", 
          type: "culture", 
          activity: "Oshino Hakkai Village exploration", 
          icon: "🏘️", 
          location: "Oshino Hakkai, Oshino, Yamanashi, Japan",
          details: "8 sacred ponds from Mt. Fuji snowmelt. Traditional thatched houses. Try local spring water.",
          previousLocation: "Chureito Pagoda, Fujiyoshida, Yamanashi, Japan"
        },
        { 
          time: "13:00", 
          type: "food", 
          activity: "Halal lunch by Lake Kawaguchi", 
          icon: "🍱", 
          price: "¥3,000", 
          location: "Lake Kawaguchi, Fujikawaguchiko, Yamanashi, Japan",
          details: "Restaurant with halal options and lake views. Try Hoto noodles (confirm vegetarian/halal prep).",
          previousLocation: "Oshino Hakkai, Oshino, Yamanashi, Japan"
        },
        { 
          time: "15:00", 
          type: "attraction", 
          activity: "Lake Kawaguchi scenic cruise", 
          icon: "⛵", 
          price: "¥1,000", 
          location: "Lake Kawaguchi, Fujikawaguchiko, Yamanashi, Japan",
          details: "20-minute boat ride with Mt. Fuji reflections. Best afternoon lighting for photos.",
          previousLocation: "Lake Kawaguchi, Fujikawaguchiko, Yamanashi, Japan"
        },
        { 
          time: "16:30", 
          type: "culture", 
          activity: "Mt. Fuji 5th Station visit", 
          icon: "🗻", 
          location: "Mount Fuji 5th Station, Yamanashi, Japan",
          details: "Halfway up Mt. Fuji (2,300m). Souvenir shops, shrine, and mountain views. Bring warm clothes.",
          previousLocation: "Lake Kawaguchi, Fujikawaguchiko, Yamanashi, Japan"
        },
        { 
          time: "18:30", 
          type: "transport", 
          activity: "Return journey to Tokyo", 
          icon: "🚗", 
          location: "Katsushika District, Tokyo, Japan",
          details: "2.5-hour drive back. Rest in comfortable vehicle. Traffic may be heavy on weekends.",
          previousLocation: "Mount Fuji 5th Station, Yamanashi, Japan"
        }
      ],
      tips: [
        "Weather dependent - Mt. Fuji visible only 40% of days",
        "Bring warm clothes for 5th Station (10°C cooler)",
        "Best photos in early morning with clear skies"
      ]
    },
    {
      day: 5,
      title: "Osaka & Universal Studios",
      date: "September 29, 2025",
      location: "Osaka",
      description: "Travel to Osaka and magical Universal Studios experience",
      price: "¥78,000",
      priceType: "",
      gradient: "from-amber-700 to-amber-800",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      tags: ["Travel Day", "Shinkansen", "Universal Studios", "Theme Park"],
      accommodation: {
        name: "Hotel in Kita District",
        location: "Kita, Osaka",
        checkIn: "After 3:00 PM",
        checkOut: "Oct 1, Before 10:00 AM",
        cost: "¥46,000",
        nights: 2,
        rating: 4.6,
        amenities: ["Halal Breakfast", "WiFi", "Concierge", "Near Station"],
        address: "Kita District, Osaka",
        coordinates: "Kita District, Osaka, Japan"
      },
      travel: {
        route: "Tokyo → Osaka",
        method: "Shinkansen (Bullet Train)",
        duration: "3 hours",
        cost: "¥13,320 per person",
        instructions: "JR Pass covers Hikari trains. Reserve seats in advance. Non-smoking cars recommended."
      },
      schedule: [
        { 
          time: "10:00", 
          type: "transport", 
          activity: "Check out from Tokyo Airbnb", 
          icon: "🏠", 
          location: "Katsushika District, Tokyo, Japan",
          details: "Pack bags, check apartment condition, return keys to host. Keep luggage manageable.",
          note: "Before 11:00 PM checkout deadline",
          previousLocation: "Katsushika District, Tokyo, Japan"
        },
        { 
          time: "07:30", 
          type: "transport", 
          activity: "NOZOMI 11 Shinkansen to Osaka", 
          icon: "🚅", 
          price: "¥42,960", 
          location: "Shin-Osaka Station, Osaka, Japan",
          details: "NOZOMI 11 departure 7:30 Tokyo, arrival 10:00 Shin-Osaka. Reserved seats: Car 15, Seats 9-A, 9-B, 9-C. Fastest service (2.5 hrs).",
          note: "PAID - Reservation #2000",
          previousLocation: "Tokyo Station, Tokyo, Japan"
        },
        { 
          time: "15:00", 
          type: "hotel", 
          activity: "Hotel check-in in Kita District", 
          icon: "🏨", 
          location: "Kita District, Osaka, Japan",
          details: "Modern hotel with halal breakfast options. Store luggage if room not ready.",
          note: "After 3:00 PM check-in",
          previousLocation: "Shin-Osaka Station, Osaka, Japan"
        },
        { 
          time: "11:30", 
          type: "attraction", 
          activity: "Universal Studios Japan full day experience", 
          icon: "🎢", 
          price: "¥33,000", 
          location: "Universal Studios Japan, Osaka, Japan",
          details: "World-class theme park with Harry Potter, Nintendo World, and movie-themed attractions. Express passes recommended.",
          previousLocation: "Kita District, Osaka, Japan"
        },
        { 
          time: "20:00", 
          type: "food", 
          activity: "Halal dinner in Dotonbori", 
          icon: "🍜", 
          price: "¥4,500", 
          location: "Dotonbori, Osaka, Japan",
          details: "Famous food district with halal options: Ganko Sushi (halal menu), Turkish restaurants.",
          previousLocation: "Universal Studios Japan, Osaka, Japan"
        }
      ],
      tips: [
        "JR Pass must be exchanged before first use",
        "Universal Studios Express Pass highly recommended to skip lines",
        "Download Universal Studios Japan app for wait times",
        "Harry Potter area and Nintendo World are must-visit attractions"
      ]
    },
    {
      day: 6,
      title: "Kyoto Cultural Immersion",
      date: "September 30, 2025",
      location: "Kyoto",
      description: "Ancient temples, bamboo groves, and traditional culture",
      price: "¥25,000",
      priceType: "",
      gradient: "from-teal-700 to-teal-800",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      tags: ["Golden Pavilion", "Bamboo Grove", "Traditional Kyoto", "UNESCO Sites"],
      travel: {
        route: "Osaka-Namba → Kyoto (day trip)",
        method: "Kintetsu Limited Express AONIYOSHI",
        duration: "1 hour 24 minutes each way",
        cost: "¥3,000 for 3 people (one way)",
        instructions: "Premium Limited Express service from Osaka-Namba to Kyoto. Reserved salon seats with discount. Return via regular trains."
      },
      schedule: [
        { 
          time: "09:10", 
          type: "transport", 
          activity: "Limited Express AONIYOSHI to Kyoto", 
          icon: "🚅", 
          price: "¥3,000", 
          location: "Kyoto Station, Kyoto, Japan",
          details: "Kintetsu Limited Express from Osaka-Namba to Kyoto. Departure 09:10, Arrival 10:34. Premium Salon seats with KEIHANNA AONIYOSHI Discount.",
          note: "PAID - Reserved Salon seats",
          previousLocation: "Osaka-Namba Station, Osaka, Japan"
        },
        { 
          time: "11:00", 
          type: "culture", 
          activity: "Kinkaku-ji Golden Pavilion", 
          icon: "⛩️", 
          price: "¥400", 
          location: "Kinkaku-ji Temple, Kyoto, Japan",
          details: "UNESCO World Heritage site. Gold-leafed pavilion over pond. Best photos from designated spots. Early visit recommended.",
          previousLocation: "Kyoto Station, Kyoto, Japan"
        },
        { 
          time: "11:30", 
          type: "nature", 
          activity: "Arashiyama Bamboo Grove", 
          icon: "🎋", 
          location: "Arashiyama Bamboo Grove, Kyoto, Japan",
          details: "Famous bamboo forest with filtered sunlight. 500m walking path. Very popular - early morning best.",
          previousLocation: "Kinkaku-ji Temple, Kyoto, Japan"
        },
        { 
          time: "13:00", 
          type: "food", 
          activity: "Halal lunch in Kyoto", 
          icon: "🍱", 
          price: "¥3,000", 
          location: "Kyoto City Center, Kyoto, Japan",
          details: "Visit Ganko Sushi Kyoto branch (halal certified) or try traditional Buddhist vegetarian cuisine (shojin ryori).",
          previousLocation: "Arashiyama Bamboo Grove, Kyoto, Japan"
        },
        { 
          time: "15:00", 
          type: "culture", 
          activity: "Fushimi Inari Shrine", 
          icon: "⛩️", 
          location: "Fushimi Inari Shrine, Kyoto, Japan",
          details: "Famous for thousands of orange torii gates up the mountain. 2-hour hike to summit. Stunning photos.",
          previousLocation: "Kyoto City Center, Kyoto, Japan"
        },
        { 
          time: "18:00", 
          type: "culture", 
          activity: "Gion District evening walk", 
          icon: "🎭", 
          location: "Gion District, Kyoto, Japan",
          details: "Historic geisha district. Traditional wooden buildings. Possible geisha spotting around 6-7 PM.",
          previousLocation: "Fushimi Inari Shrine, Kyoto, Japan"
        },
        { 
          time: "19:30", 
          type: "transport", 
          activity: "Return to Osaka", 
          icon: "🚅", 
          price: "¥560", 
          location: "Kita District, Osaka, Japan",
          details: "Return train to Osaka. Rest after full day of walking. Trains run until midnight.",
          previousLocation: "Gion District, Kyoto, Japan"
        }
      ],
      tips: [
        "Wear comfortable walking shoes - lots of temple steps",
        "Respect photography rules at temples",
        "Kyoto City Bus Day Pass (¥600) saves money for multiple temples"
      ]
    },
    {
      day: 7,
      title: "Hiroshima Peace & Miyajima",
      date: "October 1, 2025",
      location: "Hiroshima",
      description: "Historical reflection and iconic floating torii",
      price: "¥28,000",
      priceType: "",
      gradient: "from-slate-700 to-slate-800",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      tags: ["Peace Memorial", "Miyajima Island", "UNESCO Heritage", "Historical"],
      accommodation: {
        name: "Royal Park Hotel Hiroshima Riverside",
        location: "Hiroshima City Center",
        checkIn: "After 3:00 PM",
        checkOut: "Oct 2, 11:00 AM",
        cost: "¥23,000",
        nights: 1,
        rating: 4.7,
        amenities: ["Riverside Views", "Halal Options", "Concierge", "Premium Location"],
        address: "Naka-ku, Hiroshima",
        coordinates: "Royal Park Hotel Hiroshima Riverside, Hiroshima, Japan"
      },
      travel: {
        route: "Osaka → Hiroshima → Miyajima",
        method: "Shinkansen + Ferry",
        duration: "1.5 hours to Hiroshima + 30 min ferry",
        cost: "¥10,590 Shinkansen + ¥180 ferry",
        instructions: "Shinkansen to Hiroshima, then local train and ferry to Miyajima Island."
      },
      schedule: [
        { 
          time: "09:00", 
          type: "transport", 
          activity: "Check out from Osaka hotel", 
          icon: "🏨", 
          location: "Kita District, Osaka, Japan",
          details: "Efficient checkout. Store luggage at station if needed. Take all belongings.",
          note: "Before 10:00 AM checkout",
          previousLocation: "Kita District, Osaka, Japan"
        },
        { 
          time: "10:30", 
          type: "transport", 
          activity: "Shinkansen to Hiroshima", 
          icon: "🚅", 
          price: "¥10,590", 
          location: "Hiroshima Station, Hiroshima, Japan",
          details: "1.5-hour journey on Sakura or Hikari. Beautiful countryside views. Mount fuji on clear days.",
          previousLocation: "Shin-Osaka Station, Osaka, Japan"
        },
        { 
          time: "12:30", 
          type: "culture", 
          activity: "Peace Memorial Park & Museum", 
          icon: "🕊️", 
          price: "¥200", 
          location: "Hiroshima Peace Memorial Park, Hiroshima, Japan",
          details: "Moving museum about atomic bombing. A-Bomb Dome (UNESCO site). Allow 2-3 hours. Respectful behavior required.",
          previousLocation: "Hiroshima Station, Hiroshima, Japan"
        },
        { 
          time: "15:30", 
          type: "hotel", 
          activity: "Hotel check-in", 
          icon: "🏨", 
          location: "Royal Park Hotel Hiroshima Riverside, Hiroshima, Japan",
          details: "Luxury hotel with river views. Halal dining options available. Store luggage and refresh.",
          note: "After 3:00 PM check-in",
          previousLocation: "Hiroshima Peace Memorial Park, Hiroshima, Japan"
        },
        { 
          time: "16:30", 
          type: "transport", 
          activity: "Ferry to Miyajima Island", 
          icon: "⛴️", 
          price: "¥180", 
          location: "Miyajima Island, Hiroshima, Japan",
          details: "Local train to Miyajimaguchi, then 10-minute ferry. Beautiful approach to island.",
          previousLocation: "Royal Park Hotel Hiroshima Riverside, Hiroshima, Japan"
        },
        { 
          time: "17:30", 
          type: "culture", 
          activity: "Itsukushima Shrine & Floating Torii", 
          icon: "⛩️", 
          price: "¥300", 
          location: "Itsukushima Shrine, Miyajima Island, Japan",
          details: "Famous floating torii gate. One of Japan's three scenic views. Best at high tide during sunset.",
          previousLocation: "Miyajima Island, Hiroshima, Japan"
        },
        { 
          time: "19:00", 
          type: "food", 
          activity: "Island dinner with halal options", 
          icon: "🦌", 
          price: "¥4,000", 
          location: "Miyajima Island, Hiroshima, Japan",
          details: "Local specialties: oysters (if halal), maple leaf tempura. Some restaurants offer halal alternatives.",
          previousLocation: "Itsukushima Shrine, Miyajima Island, Japan"
        }
      ],
      tips: [
        "Peace Memorial Museum is emotionally intense - take time",
        "Check tide times for best torii gate photos",
        "Watch out for friendly deer on Miyajima - don't feed them"
      ]
    },
    {
      day: 8,
      title: "Tokyo Return & Farewell",
      date: "October 2, 2025",
      location: "Tokyo",
      description: "TeamLab digital art experience and departure",
      price: "¥55,000",
      priceType: "",
      gradient: "from-gray-700 to-gray-800",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      tags: ["teamLab Planets", "Digital Art", "Tokyo Bay", "Departure"],
      travel: {
        route: "Hiroshima → Tokyo → Airport",
        method: "Flight + Private Car",
        duration: "1.5-hour flight + airport transfer",
        cost: "¥43,375 flight + ¥15,000 transfer",
        instructions: "Morning flight to Haneda, then teamLab visit, private transfer to airport for departure."
      },
      schedule: [
        { 
          time: "08:00", 
          type: "transport", 
          activity: "Flight to Tokyo Haneda", 
          icon: "✈️", 
          price: "¥43,375", 
          location: "Haneda Airport, Tokyo, Japan",
          details: "JAL256 domestic flight (12:10-13:25). Check baggage allowance. Arrive airport 1 hour early.",
          note: "Flight JAL256 booked for 3 people",
          previousLocation: "Royal Park Hotel Hiroshima Riverside, Hiroshima, Japan"
        },
        { 
          time: "14:00", 
          type: "attraction", 
          activity: "teamLab Planets digital art", 
          icon: "🎨", 
          price: "¥3,200", 
          location: "teamLab Planets, Toyosu, Tokyo, Japan",
          details: "Immersive digital art experience. Wear comfortable clothes (may get wet). Advance booking required. 2-3 hours.",
          previousLocation: "Haneda Airport, Tokyo, Japan"
        },
        { 
          time: "17:00", 
          type: "food", 
          activity: "Final halal meal at Tsukiji", 
          icon: "🐟", 
          price: "¥3,000", 
          location: "Tsukiji Outer Market, Tokyo, Japan",
          details: "Famous fish market area. Some halal sushi options available. Try halal-certified seafood dishes.",
          previousLocation: "teamLab Planets, Toyosu, Tokyo, Japan"
        },
        { 
          time: "18:30", 
          type: "sightseeing", 
          activity: "Tokyo Bay sunset walk", 
          icon: "🌊", 
          location: "Tokyo Bay, Tokyo, Japan",
          details: "Beautiful bay views with city skyline. Great final photos of Tokyo. Relaxing end to trip.",
          previousLocation: "Tsukiji Outer Market, Tokyo, Japan"
        },
        { 
          time: "20:00", 
          type: "transport", 
          activity: "Private transfer to airport", 
          icon: "🚗", 
          price: "¥15,000", 
          location: "Haneda Airport, Tokyo, Japan",
          details: "Comfortable private car for 3 people with luggage. 1-hour journey depending on traffic.",
          priceType: "group total",
          previousLocation: "Tokyo Bay, Tokyo, Japan"
        },
        { 
          time: "22:00", 
          type: "departure", 
          activity: "International departure preparations", 
          icon: "🛫", 
          location: "Haneda Airport, Tokyo, Japan",
          details: "Check-in for international flight. Tax-free shopping. Final souvenir purchases.",
          previousLocation: "Tokyo Bay, Tokyo, Japan"
        }
      ],
      tips: [
        "teamLab tickets sell out quickly - book in advance",
        "Keep receipts for tax-free shopping at airport",
        "Allow extra time for airport procedures"
      ]
    }
  ];

  const budgetData = {
    total: { jpy: "¥293,875", inr: "₹175,149" },
    perPerson: { jpy: "¥97,958", inr: "₹58,383" },
    perDay: { jpy: "¥36,734", inr: "₹21,893" },
    breakdown: [
      { category: "Transportation", percentage: 38, amount: { jpy: "¥180,000", inr: "₹107,280" }, color: "bg-blue-600" },
      { category: "Accommodation", percentage: 28, amount: { jpy: "¥135,000", inr: "₹80,460" }, color: "bg-emerald-600" },
      { category: "Attractions & Experiences", percentage: 22, amount: { jpy: "¥85,000", inr: "₹50,660" }, color: "bg-indigo-600" },
      { category: "Food & Dining", percentage: 10, amount: { jpy: "¥55,000", inr: "₹32,780" }, color: "bg-amber-600" },
      { category: "Miscellaneous", percentage: 2, amount: { jpy: "¥18,875", inr: "₹11,249" }, color: "bg-gray-600" }
    ]
  };

  const journeyStats = [
    { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Cities Visited", value: "4", color: "bg-slate-600" },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Group Size", value: "3", color: "bg-blue-600" },
    { icon: <Train className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Train Rides", value: "8", color: "bg-emerald-600" },
    { icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Photo Spots", value: "15+", color: "bg-amber-600" },
    { icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Halal Meals", value: "16", color: "bg-teal-600" },
    { icon: <Mountain className="w-5 h-5 sm:w-6 sm:h-6" />, label: "UNESCO Sites", value: "6", color: "bg-indigo-600" }
  ];

  const toggleDay = (day: number): void => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'photo': return <Camera className="w-4 h-4 text-amber-700" />;
      case 'culture': return <Building2 className="w-4 h-4 text-blue-700" />;
      case 'food': return <Utensils className="w-4 h-4 text-orange-700" />;
      case 'attraction': return <Star className="w-4 h-4 text-indigo-700" />;
      case 'transport': return <Train className="w-4 h-4 text-slate-700" />;
      case 'hotel': return <Home className="w-4 h-4 text-emerald-700" />;
      case 'nature': return <Mountain className="w-4 h-4 text-teal-700" />;
      case 'sightseeing': return <MapPin className="w-4 h-4 text-blue-700" />;
      case 'departure': return <Plane className="w-4 h-4 text-gray-700" />;
      default: return <Clock className="w-4 h-4 text-gray-700" />;
    }
  };

  const getActivityColor = (type: string): string => {
    switch (type) {
      case 'photo': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'culture': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'food': return 'bg-orange-50 text-orange-800 border-orange-200';
      case 'attraction': return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      case 'transport': return 'bg-slate-50 text-slate-800 border-slate-200';
      case 'hotel': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'nature': return 'bg-teal-50 text-teal-800 border-teal-200';
      case 'sightseeing': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'departure': return 'bg-gray-50 text-gray-800 border-gray-200';
      default: return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Currency Toggle */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-1">
          <button
            onClick={() => setCurrency(currency === 'JPY' ? 'INR' : 'JPY')}
            className="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold text-sm hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Globe className="w-4 h-4" />
            <span className="tracking-wide">{currency}</span>
          </button>
        </div>
      </div>

      {/* Modern Hero Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 px-4 py-8 sm:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            {/* Modern Icon */}
            <div className="relative mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform duration-500">
                <span className="text-2xl sm:text-3xl transform -rotate-6">🗾</span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Modern Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight mb-3">
              Japan Adventure
            </h1>
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-xl">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium text-sm sm:text-base">8-Day Cultural Journey for 3</span>
            </div>
          </div>
          
          {/* Description Cards */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
              <p className="text-white/80 text-sm sm:text-base font-medium">Comprehensive halal dining guide</p>
            </div>
            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
              <p className="text-white/80 text-sm sm:text-base font-medium">Detailed directions & bookings</p>
            </div>
          </div>
          
          {/* Route Display */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-300 mb-8">
            {['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima'].map((city, index) => (
              <div key={city} className="flex items-center">
                <span className="text-xs sm:text-sm font-semibold px-2 py-1 bg-white/10 rounded-lg">{city}</span>
                {index < 3 && <span className="mx-2 text-blue-300">→</span>}
              </div>
            ))}
          </div>
          
          {/* Modern Navigation */}
          <div className="flex flex-row justify-center gap-1 sm:gap-2 px-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1.5 border border-white/20 shadow-xl">
              {[
                { id: 'itinerary', icon: Calendar, label: 'Itinerary', color: 'from-blue-500 to-blue-600' },
                { id: 'journey', icon: MapPin, label: 'Journey', color: 'from-emerald-500 to-emerald-600' },
                { id: 'budget', icon: Globe, label: 'Budget', color: 'from-purple-500 to-purple-600' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-sm group overflow-hidden ${
                    activeTab === tab.id 
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105` 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                  )}
                  <tab.icon className={`w-4 h-4 transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <span className="hidden sm:inline relative z-10">{tab.label}</span>
                  <span className="sm:hidden text-xs relative z-10">{tab.label.slice(0, 3)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Content Area */}
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 lg:py-12">
          {/* Detailed Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {itineraryData.map((day) => (
                <div key={day.day} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
                  {/* Modern Gradient Header */}
                  <div className={`h-1 bg-gradient-to-r ${day.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                  <div className="cursor-pointer group/header" onClick={() => toggleDay(day.day)}>
                    {/* Modern Day Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      {/* Day Number Badge */}
                      <div className="relative">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${day.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover/header:shadow-xl transition-all duration-300 transform group-hover/header:scale-110`}>
                          {day.day}
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-md opacity-0 group-hover/header:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="min-w-0 flex-1">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-2 group-hover/header:text-blue-600 transition-colors duration-300">{day.title}</h3>
                        
                        {/* Meta Info Cards */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <div className="flex items-center space-x-1.5 bg-gray-50 rounded-full px-3 py-1 border">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span className="text-xs font-medium text-gray-600">{day.date}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 bg-blue-50 rounded-full px-3 py-1 border border-blue-200">
                            <MapPin className="w-3 h-3 text-blue-500" />
                            <span className="text-xs font-medium text-blue-600">{day.location}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                    
                    {/* Modern Price and Action Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        {/* Price Badge */}
                        <div className={`inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${day.gradient} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                          <span>{convertPrice(day.price)}</span>
                          {day.priceType && <span className="text-xs opacity-80 ml-1">{day.priceType}</span>}
                        </div>
                      </div>
                      
                      {/* Expand Button */}
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:flex items-center space-x-1 text-xs text-gray-500">
                          <div className={`w-2 h-2 rounded-full ${expandedDay === day.day ? 'bg-blue-400 animate-pulse' : 'bg-gray-300'}`}></div>
                          <span>{expandedDay === day.day ? 'Expanded' : 'Tap to expand'}</span>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                          {expandedDay === day.day ? 
                            <ChevronUp className="w-4 h-4 text-gray-600" /> : 
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Modern Tags */}
                  <div className="flex flex-wrap gap-2 px-4 pb-4">
                    {day.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-700 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${day.gradient} mr-2`}></div>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Accommodation Information */}
                  {day.accommodation && (
                    <div className="mt-4 p-4 sm:p-5 bg-white rounded-lg border border-emerald-200 shadow-sm">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex items-start space-x-3 flex-1">
                          <Home className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-emerald-800 text-lg leading-tight">{day.accommodation.name}</h4>
                            <p className="text-emerald-700 text-sm mt-1">{day.accommodation.location}</p>
                            <div className="flex items-center space-x-3 mt-2">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium text-gray-600">{day.accommodation.rating}</span>
                              </div>
                              <span className="px-2 py-1 bg-emerald-200 text-emerald-800 rounded-full text-xs font-bold">
                                {day.accommodation.nights} night{day.accommodation.nights > 1 ? 's' : ''}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white px-4 py-3 rounded-lg border border-emerald-300 shadow-sm">
                          <span className="text-xl font-bold text-emerald-700">{convertPrice(day.accommodation.cost)}</span>
                          <p className="text-xs text-emerald-600 mt-1">total for group</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        <div className="bg-white p-3 rounded-lg border border-emerald-200 shadow-sm">
                          <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">Check-in</span>
                          <p className="font-semibold text-emerald-700 mt-1">{day.accommodation.checkIn}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-emerald-200 shadow-sm">
                          <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">Check-out</span>
                          <p className="font-semibold text-emerald-700 mt-1">{day.accommodation.checkOut}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border border-emerald-200 shadow-sm mt-3">
                        <span className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-2 block">Amenities</span>
                        <div className="flex flex-wrap gap-2">
                          {day.accommodation.amenities.map((amenity, idx) => (
                            <span key={idx} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}


                  {/* Detailed Schedule */}
                  {expandedDay === day.day && (
                    <div className="mt-5 pt-5 border-t border-gray-200">
                      <div className="flex items-center space-x-2 mb-5">
                        <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">Detailed Schedule</h4>
                      </div>
                      <div className="space-y-4">
                        {day.schedule.map((item: any, index: number) => (
                          <div key={index} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow-md transition-all duration-200">
                            {/* Activity Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-start space-x-3 flex-1">
                                <div className="flex items-center space-x-2 text-gray-600 min-w-0">
                                  <Clock className="w-5 h-5 flex-shrink-0" />
                                  <span className="font-bold text-lg">{item.time}</span>
                                </div>
                                <div className={`p-2 rounded-lg border-2 ${getActivityColor(item.type)} shadow-sm`}>
                                  {getActivityIcon(item.type)}
                                </div>
                              </div>
                              {item.price && (
                                <div className="text-right ml-4">
                                  <span className="text-emerald-600 font-bold text-lg">{convertPrice(item.price)}</span>
                                  {(item as ScheduleItem).priceType && <span className="text-xs text-gray-500 block">{(item as ScheduleItem).priceType}</span>}
                                </div>
                              )}
                            </div>
                            
                            {/* Activity Content */}
                            <div className="pl-2">
                              <h5 className="text-gray-900 font-bold text-lg mb-2">{item.activity}</h5>
                              
                              {item.location && (
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center space-x-2 text-gray-600">
                                    <MapPin className="w-4 h-4 flex-shrink-0" />
                                    <span className="font-medium">{item.location}</span>
                                  </div>
                                  
                                  {/* Google Maps Navigation Button */}
                                  {item.previousLocation && (
                                    <button
                                      onClick={() => openGoogleMaps(item.previousLocation, item.location)}
                                      className="flex items-center space-x-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors duration-200 shadow-sm"
                                    >
                                      <Navigation className="w-3 h-3" />
                                      <span>Navigate</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </button>
                                  )}
                                </div>
                              )}
                              
                              {item.details && (
                                <div className="bg-white p-3 rounded-lg border border-gray-200 mb-3 shadow-sm">
                                  <p className="text-gray-700 text-sm leading-relaxed">{item.details}</p>
                                </div>
                              )}
                              
                              {(item as ScheduleItem).note && (
                                <div className="bg-blue-50 border border-blue-200 p-2 rounded-lg mb-2">
                                  <p className="text-blue-700 italic text-sm font-medium">{(item as ScheduleItem).note}</p>
                                </div>
                              )}
                              
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getActivityColor(item.type)}`}>
                                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Travel Information - Subtle Section */}
                      {day.travel && (
                        <details className="mt-4 group">
                          <summary className="cursor-pointer p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
                            <div className="flex items-center space-x-2">
                              <Navigation className="w-4 h-4 text-gray-600 group-open:text-blue-600 transition-colors" />
                              <h5 className="font-medium text-gray-700 group-open:text-blue-700 text-sm">Travel Information</h5>
                              <span className="text-xs text-gray-500 ml-auto">Click to expand</span>
                            </div>
                          </summary>
                          <div className="mt-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                              <div className="space-y-2">
                                <div>
                                  <span className="text-gray-600 font-medium text-xs uppercase tracking-wide">Route:</span>
                                  <p className="text-gray-800 mt-0.5">{day.travel.route}</p>
                                </div>
                                <div>
                                  <span className="text-gray-600 font-medium text-xs uppercase tracking-wide">Method:</span>
                                  <p className="text-gray-800 mt-0.5">{day.travel.method}</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div>
                                  <span className="text-gray-600 font-medium text-xs uppercase tracking-wide">Duration:</span>
                                  <p className="text-gray-800 mt-0.5">{day.travel.duration}</p>
                                </div>
                                <div>
                                  <span className="text-gray-600 font-medium text-xs uppercase tracking-wide">Cost:</span>
                                  <p className="text-gray-800 mt-0.5">{day.travel.cost || day.travel.totalCost}</p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 p-3 bg-gray-50 rounded-md">
                              <span className="text-gray-600 font-medium text-xs uppercase tracking-wide">Instructions:</span>
                              <p className="text-gray-700 text-sm mt-1 leading-relaxed">{day.travel.instructions}</p>
                            </div>
                          </div>
                        </details>
                      )}
                      
                      {/* Daily Tips */}
                      {day.tips && (
                        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200 shadow-sm">
                          <div className="flex items-center space-x-2 mb-3">
                            <Info className="w-4 h-4 text-amber-600" />
                            <h5 className="font-medium text-amber-800 text-sm">Pro Tips</h5>
                          </div>
                          <ul className="space-y-2">
                            {day.tips.map((tip, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <span className="text-amber-600 mt-1 flex-shrink-0">💡</span>
                                <span className="text-gray-700 leading-relaxed">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Journey Overview Tab */}
        {activeTab === 'journey' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center mb-6 sm:mb-8 px-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Journey Overview</h3>
              <p className="text-gray-600 text-sm sm:text-base">Meticulously planned 8-day adventure for 3 Muslim travelers with halal dining</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {journeyStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-lg flex items-center justify-center text-white mx-auto mb-2 sm:mb-3`}>
                    {stat.icon}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Travel Overview Map */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Travel Route Overview</h4>
              <div className="space-y-4">
                {[
                  { from: "International Airport", to: "Tokyo", method: "Private Car", duration: "90 min", day: "Day 1" },
                  { from: "Tokyo", to: "Mount Fuji", method: "Private Car", duration: "2.5 hours", day: "Day 4" },
                  { from: "Tokyo", to: "Osaka", method: "Shinkansen", duration: "3 hours", day: "Day 5" },
                  { from: "Osaka", to: "Kyoto", method: "Rapid Train", duration: "45 min", day: "Day 6" },
                  { from: "Osaka", to: "Hiroshima", method: "Shinkansen", duration: "1.5 hours", day: "Day 7" },
                  { from: "Hiroshima", to: "Tokyo", method: "Domestic Flight", duration: "1.5 hours", day: "Day 8" },
                ].map((route, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="bg-slate-600 text-white px-2 py-1 rounded text-sm font-bold">
                        {route.day}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{route.from} → {route.to}</p>
                        <p className="text-sm text-gray-600">{route.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{route.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Budget Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">{currency === 'JPY' ? '¥' : '₹'}</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Total Budget</h3>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{budgetData.total[currency.toLowerCase() as keyof typeof budgetData.total]}</p>
                <p className="text-gray-500 text-xs sm:text-sm">Complete trip cost for 3 people</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Per Person</h3>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{budgetData.perPerson[currency.toLowerCase() as keyof typeof budgetData.perPerson]}</p>
                <p className="text-gray-500 text-xs sm:text-sm">Individual cost breakdown</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Per Day</h3>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{budgetData.perDay[currency.toLowerCase() as keyof typeof budgetData.perDay]}</p>
                <p className="text-gray-500 text-xs sm:text-sm">Daily average spending</p>
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Budget Breakdown</h3>
              <div className="space-y-6">
                {budgetData.breakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 space-y-1 sm:space-y-0">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{item.category}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500 font-medium">{item.percentage}%</span>
                        <span className="font-bold text-gray-900 text-lg">{item.amount[currency.toLowerCase() as keyof typeof item.amount]}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Progress Section */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border-2 border-slate-200 shadow-lg">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 flex items-center space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-600 rounded-md sm:rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">¥</span>
                </div>
                <span>Payment Progress</span>
              </h3>
              
              {/* Overall Progress */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-xl sm:text-2xl font-bold text-slate-600">{paymentStatus.paid.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-slate-600 to-slate-700 h-3 sm:h-4 rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${paymentStatus.paid.percentage}%` }}
                  ></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 sm:mt-3 text-xs sm:text-sm space-y-1 sm:space-y-0">
                  <span className="text-slate-600 font-medium">
                    ✅ Paid: {paymentStatus.paid.total[currency.toLowerCase() as keyof typeof paymentStatus.paid.total]}
                  </span>
                  <span className="text-amber-600 font-medium">
                    ⏳ Remaining: {paymentStatus.unpaid.total[currency.toLowerCase() as keyof typeof paymentStatus.unpaid.total]}
                  </span>
                </div>
              </div>

              {/* Paid Items */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-sm sm:text-md font-bold text-slate-700 mb-2 sm:mb-3 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-slate-500 rounded-full"></span>
                  <span>Paid Items</span>
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {paymentStatus.paid.items.map((item: any, index: number) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-lg p-2.5 sm:p-3 flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-sm space-y-1 sm:space-y-0">
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 text-sm sm:text-base leading-tight">{item.name}</p>
                        <p className="text-xs text-slate-600 mt-0.5">{item.date}</p>
                      </div>
                      <span className="font-bold text-slate-700 text-sm sm:text-base self-start sm:self-center">{item.amount[currency.toLowerCase() as keyof typeof item.amount]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unpaid Items */}
              <div>
                <h4 className="text-sm sm:text-md font-bold text-amber-800 mb-2 sm:mb-3 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-500 rounded-full"></span>
                  <span>Pending Payments</span>
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {paymentStatus.unpaid.items.map((item: any, index: number) => (
                    <div key={index} className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 sm:p-3 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
                      <div className="flex-1">
                        <p className="font-medium text-amber-800 text-sm sm:text-base leading-tight">{item.name}</p>
                        <p className="text-xs text-amber-600 mt-0.5">{item.date}</p>
                      </div>
                      <span className="font-bold text-amber-700 text-sm sm:text-base self-start sm:self-center">{item.amount[currency.toLowerCase() as keyof typeof item.amount]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Accommodation Costs */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 sm:p-6 border-2 border-emerald-200 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                <Home className="w-6 h-6 text-emerald-600" />
                <span>Accommodation Breakdown</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { city: "Tokyo", nights: 4, name: "Airbnb Apartment Katsushika", cost: "¥66,000", rating: 4.8 },
                  { city: "Osaka", nights: 2, name: "Hotel in Kita District", cost: "¥46,000", rating: 4.6 },
                  { city: "Hiroshima", nights: 1, name: "Royal Park Hotel Riverside", cost: "¥23,000", rating: 4.7 }
                ].map((hotel, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border-2 border-emerald-200 shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{hotel.city} ({hotel.nights} night{hotel.nights > 1 ? 's' : ''})</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-tight">{hotel.name}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-xs sm:text-sm font-medium">{hotel.rating}</span>
                      </div>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                        Halal-friendly
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-emerald-600">{convertPrice(hotel.cost)}</p>
                    <p className="text-xs text-gray-500">for all 3 people</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JapanAdventureItinerary;