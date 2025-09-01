export const itineraryData = [
  {
    id: 1,
    day: 1,
    date: 'September 25, 2025',
    area: 'Tokyo',
    title: 'Tokyo Arrival & Evening Introduction',
    description: 'Gentle arrival day with cultural introduction',
    activities: [
      { time: '20:30', activity: 'Flight arrival', cost: 0, type: 'transport' },
      { time: '21:00', activity: 'Private car pickup from airport', cost: 15000, type: 'transport', group: true },
      { time: '22:30', activity: 'Check-in and settle at accommodation', cost: 0, type: 'stay' },
      { time: '23:00', activity: 'Late evening convenience store exploration', cost: 500, type: 'food' }
    ],
    totalCost: 13000,
    groupCost: true,
    highlights: ['Arrival Day', 'Private Transfer', 'Late Evening'],
    accommodation: {
      name: 'APA Hotel Shibuya Dogenzaka',
      type: 'Budget Business Hotel',
      rating: 4.1,
      price: 7000,
      features: ['Shibuya Location', 'Free WiFi', 'Large LCD TV'],
      image: '🏨'
    },
    color: 'tokyo'
  },
  {
    id: 2,
    day: 2,
    date: 'September 26, 2025',
    area: 'Tokyo',
    title: 'Tokyo Skytree & Modern Culture',
    description: 'Iconic views and youth culture exploration',
    activities: [
      { time: '09:00', activity: 'Early start from accommodation', cost: 0, type: 'start' },
      { time: '09:30', activity: 'Metro to Tokyo Skytree', cost: 300, type: 'transport' },
      { time: '10:00', activity: 'Tokyo Skytree Tembo Deck + Galleria', cost: 8500, type: 'attraction' },
      { time: '13:00', activity: 'Tokyo Solamachi shopping complex', cost: 0, type: 'shopping' },
      { time: '15:00', activity: 'Metro to Shibuya Crossing', cost: 200, type: 'transport' },
      { time: '16:00', activity: 'Harajuku Youth Culture - Takeshita Street', cost: 0, type: 'culture' },
      { time: '19:00', activity: 'Authentic Ramen dinner', cost: 1500, type: 'food' }
    ],
    totalCost: 12500,
    highlights: ['Tokyo Skytree', 'Solamachi', 'Modern Tokyo', 'Youth Culture'],
    color: 'tokyo'
  },
  {
    id: 3,
    day: 3,
    date: 'September 27, 2025',
    area: 'Tokyo Disney',
    title: 'Tokyo Disneyland Magic',
    description: 'Full day of Disney enchantment',
    activities: [
      { time: '08:00', activity: 'Early departure from accommodation', cost: 0, type: 'start' },
      { time: '08:45', activity: 'JR Keiyo Line to Maihama Station', cost: 220, type: 'transport' },
      { time: '09:00', activity: 'Disney 1-Day Pass', cost: 14000, type: 'attraction' },
      { time: '10:00', activity: 'Beauty & The Beast - New flagship attraction', cost: 0, type: 'ride' },
      { time: '14:00', activity: 'Space Mountain + Pirates of Caribbean', cost: 0, type: 'ride' },
      { time: '17:00', activity: 'Haunted Mansion with seasonal themes', cost: 0, type: 'ride' },
      { time: '20:00', activity: 'Disney Parade & Evening Fireworks', cost: 0, type: 'show' },
      { time: '22:00', activity: 'Return via JR Keiyo Line', cost: 220, type: 'transport' }
    ],
    totalCost: 19000,
    highlights: ['Disney Magic', 'New Attractions', 'Full Day Experience'],
    color: 'tokyo'
  },
  {
    id: 4,
    day: 4,
    date: 'September 28, 2025',
    area: 'Mount Fuji',
    title: 'Mount Fuji Adventure Day',
    description: 'Sacred mountain and traditional villages',
    activities: [
      { time: '07:00', activity: 'Very early departure', cost: 0, type: 'start' },
      { time: '09:30', activity: 'Chureito Pagoda - Iconic Mount Fuji photography', cost: 0, type: 'photo' },
      { time: '11:00', activity: 'Oshino Hakkai Village - Traditional village', cost: 0, type: 'culture' },
      { time: '13:00', activity: 'Kawaguchi Lake Region exploration & lunch', cost: 2000, type: 'food' },
      { time: '15:00', activity: 'Lake Kawaguchi scenic cruise', cost: 930, type: 'attraction' },
      { time: '17:00', activity: 'Private car return to Tokyo', cost: 8333, type: 'transport', group: true },
      { time: '19:30', activity: 'Evening arrival back in Tokyo', cost: 0, type: 'arrival' }
    ],
    totalCost: 8333,
    groupCost: true,
    highlights: ['Mount Fuji', 'Private Transport', 'Photo Spots', 'Traditional Village'],
    color: 'fuji'
  },
  {
    id: 5,
    day: 5,
    date: 'September 29, 2025',
    area: 'Osaka',
    title: 'Osaka Castle & Universal Studios',
    description: 'History meets modern entertainment',
    activities: [
      { time: '08:00', activity: 'Shinkansen to Osaka', cost: 13320, type: 'transport' },
      { time: '11:00', activity: 'Osaka Castle & Museum', cost: 5600, type: 'attraction' },
      { time: '13:00', activity: 'Lunch at Osaka Castle Park', cost: 1500, type: 'food' },
      { time: '14:30', activity: 'Transfer to Universal Studios Japan', cost: 160, type: 'transport' },
      { time: '15:00', activity: 'Universal Studios 1-Day Pass', cost: 13801, type: 'attraction' },
      { time: '22:00', activity: 'Return to accommodation', cost: 400, type: 'transport' }
    ],
    totalCost: 35000,
    highlights: ['Osaka Castle', 'Universal Studios', 'Harry Potter', 'Nintendo World'],
    accommodation: {
      name: 'APA Hotel Namba-Shinsaibashi',
      type: 'Budget Business Hotel',
      rating: 4.0,
      price: 6500,
      features: ['Namba Station Access', 'Public Bath', 'Free WiFi'],
      image: '🏨'
    },
    color: 'osaka'
  },
  {
    id: 6,
    day: 6,
    date: 'September 30, 2025',
    area: 'Kyoto',
    title: 'Golden Pavilion & Bamboo Grove',
    description: 'Ancient temples and natural beauty',
    activities: [
      { time: '08:00', activity: 'Keihan Main Line to Kyoto', cost: 400, type: 'transport' },
      { time: '09:30', activity: 'Kinkaku-ji Golden Pavilion', cost: 5500, type: 'attraction' },
      { time: '11:30', activity: 'Bus to Arashiyama', cost: 230, type: 'transport' },
      { time: '12:00', activity: 'Arashiyama Bamboo Grove', cost: 0, type: 'nature' },
      { time: '13:30', activity: 'Traditional Kyoto lunch in Arashiyama', cost: 2500, type: 'food' },
      { time: '15:00', activity: 'JR to Nara', cost: 720, type: 'transport' },
      { time: '16:00', activity: 'Nara Deer Park & Todai-ji Temple', cost: 0, type: 'attraction' },
      { time: '18:00', activity: 'Fushimi Inari Shrine visit', cost: 0, type: 'culture' },
      { time: '20:00', activity: 'Return transport to accommodation', cost: 500, type: 'transport' }
    ],
    totalCost: 13500,
    highlights: ['Golden Pavilion', 'Bamboo Grove', 'Nara Deer Park', 'Fushimi Inari'],
    color: 'kyoto'
  },
  {
    id: 7,
    day: 7,
    date: 'October 1, 2025',
    area: 'Hiroshima',
    title: 'Peace Memorial & Miyajima Island',
    description: 'Historical reflection and scenic beauty',
    activities: [
      { time: '07:30', activity: 'Shinkansen to Hiroshima', cost: 10080, type: 'transport' },
      { time: '09:00', activity: 'Peace Memorial Park & Museum', cost: 200, type: 'culture' },
      { time: '12:00', activity: 'Ferry to Miyajima Island', cost: 360, type: 'transport' },
      { time: '13:00', activity: 'Itsukushima Shrine & Torii Gate', cost: 300, type: 'attraction' },
      { time: '15:00', activity: 'Traditional lunch on Miyajima', cost: 2000, type: 'food' },
      { time: '17:00', activity: 'Return ferry and accommodation check-in', cost: 360, type: 'transport' }
    ],
    totalCost: 15000,
    highlights: ['Peace Memorial', 'Atomic History', 'Miyajima Island', 'Overnight Stay'],
    accommodation: {
      name: 'APA Hotel Hiroshima-Ekimae',
      type: 'Budget Business Hotel',
      rating: 4.2,
      price: 8000,
      features: ['4 min from Station', 'Public Bath', 'Free WiFi'],
      image: '🏨'
    },
    color: 'hiroshima'
  },
  {
    id: 8,
    day: 8,
    date: 'October 2, 2025',
    area: 'Tokyo',
    title: 'teamLab & Tokyo Bay Farewell',
    description: 'Digital art and departure preparations',
    activities: [
      { time: '08:00', activity: 'Shinkansen return to Tokyo', cost: 10080, type: 'transport' },
      { time: '11:00', activity: 'teamLab Planets digital art experience', cost: 7000, type: 'attraction' },
      { time: '14:00', activity: 'Tsukiji Outer Market food exploration', cost: 2000, type: 'food' },
      { time: '16:00', activity: 'Tokyo Bay waterfront walk', cost: 0, type: 'sightseeing' },
      { time: '18:00', activity: 'Private car to airport', cost: 15000, type: 'transport', group: true },
      { time: '20:00', activity: 'Flight departure preparations', cost: 0, type: 'departure' }
    ],
    totalCost: 14000,
    highlights: ['teamLab Planets', 'Fish Market', 'Tokyo Bay', 'Departure Day'],
    color: 'tokyo'
  }
]

export const currencyRates = {
  JPY_INR: 0.56,
  INR_JPY: 1.79
}

export const formatPrice = (amount, currency, targetCurrency) => {
  if (!amount) return '¥0'
  
  let convertedAmount = amount
  if (currency !== targetCurrency) {
    if (currency === 'JPY' && targetCurrency === 'INR') {
      convertedAmount = amount * currencyRates.JPY_INR
    } else if (currency === 'INR' && targetCurrency === 'JPY') {
      convertedAmount = amount * currencyRates.INR_JPY
    }
  }
  
  const rounded = Math.round(convertedAmount)
  
  if (targetCurrency === 'JPY') {
    return `¥${rounded.toLocaleString('en-JP')}`
  } else if (targetCurrency === 'INR') {
    return `₹${rounded.toLocaleString('en-IN')}`
  }
  
  return `${rounded}`
}