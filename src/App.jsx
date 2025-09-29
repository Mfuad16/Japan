import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import TabNavigation from './components/TabNavigation';
import ItineraryCard from './components/ItineraryCard';

const itineraryData = [
  {
    id: 1,
    title: "Tokyo Arrival & Evening Introduction",
    date: "September 25, 2025",
    location: "Tokyo",
    description: "Gentle arrival day with cultural introduction",
    cost: "¥13,000",
    costLabel: "group",
    tags: ["Arrival Day", "Private Transfer", "Late Evening"],
    activities: [
      { time: "14:00", type: "transport", title: "Narita Airport Transfer", description: "Private transfer to hotel", cost: "¥3,500" },
      { time: "16:30", type: "stay", title: "Hotel Check-in", description: "APA Hotel Shibuya" },
      { time: "19:00", type: "attraction", title: "Shibuya Crossing", description: "World's busiest crossing", cost: "Free" },
      { time: "20:30", type: "food", title: "Welcome Dinner", description: "Traditional izakaya", cost: "¥4,200" }
    ]
  },
  {
    id: 2,
    title: "Tokyo Skytree & Modern Culture",
    date: "September 26, 2025",
    location: "Tokyo",
    description: "Iconic views and youth culture exploration",
    cost: "¥12,500",
    costLabel: "",
    tags: ["Tokyo Skytree", "Solamachi", "Modern Tokyo", "Youth Culture"],
    activities: [
      { time: "09:00", type: "food", title: "Hotel Breakfast", description: "Japanese breakfast buffet", cost: "¥1,800" },
      { time: "10:30", type: "transport", title: "Train to Skytree", description: "JR Yamanote to Kinshicho", cost: "¥160" },
      { time: "11:00", type: "attraction", title: "Tokyo Skytree", description: "634m tower with panoramic views", cost: "¥2,100" },
      { time: "14:00", type: "attraction", title: "Solamachi Shopping", description: "Modern shopping complex", cost: "¥3,000" },
      { time: "16:00", type: "attraction", title: "Harajuku District", description: "Youth fashion and culture", cost: "Free" },
      { time: "18:30", type: "food", title: "Ramen Dinner", description: "Famous ramen shop", cost: "¥1,200" }
    ]
  },
  {
    id: 3,
    title: "Tokyo Disneyland Magic",
    date: "September 27, 2025",
    location: "Tokyo Disney",
    description: "Full day at the magical kingdom",
    cost: "¥19,000",
    costLabel: "",
    tags: ["Disney Magic", "Theme Park", "Full Day", "Entertainment"],
    activities: [
      { time: "08:00", type: "transport", title: "Train to Disney", description: "JR Keiyo Line to Maihama", cost: "¥220" },
      { time: "09:00", type: "attraction", title: "Tokyo Disneyland Entry", description: "1-day passport", cost: "¥8,700" },
      { time: "12:00", type: "food", title: "Disney Lunch", description: "Character dining experience", cost: "¥3,500" },
      { time: "15:00", type: "attraction", title: "Disney Attractions", description: "Rides and shows", cost: "Included" },
      { time: "19:00", type: "food", title: "Disney Dinner", description: "Park restaurant", cost: "¥2,800" },
      { time: "21:00", type: "attraction", title: "Disney Parade & Fireworks", description: "Evening spectacular", cost: "Included" }
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('itinerary');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          {/* Japan Map Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🗾</span>
            </div>
          </div>
          
          {/* Title with Gradient */}
          <h1 className="text-5xl font-bold mb-2">
            Japan <span className="text-gradient">Adventure</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl text-gray-600 mb-4">8-Day Cultural Journey</h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-2">
            Experience the perfect blend of ancient traditions and cutting-edge modernity
          </p>
          <p className="text-gray-500">
            across Tokyo → Osaka → Kyoto → Hiroshima
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {activeTab === 'itinerary' && (
          <div className="space-y-6">
            {itineraryData.map((day) => (
              <ItineraryCard key={day.id} day={day} />
            ))}
          </div>
        )}

        {activeTab === 'route' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">8-Day Japan Route</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1-3</div>
                <div className="flex-1">
                  <h3 className="font-semibold">Tokyo</h3>
                  <p className="text-gray-600 text-sm">Modern culture, Skytree, Disneyland</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4-5</div>
                <div className="flex-1">
                  <h3 className="font-semibold">Osaka</h3>
                  <p className="text-gray-600 text-sm">Food capital, castle, Universal Studios</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">6-7</div>
                <div className="flex-1">
                  <h3 className="font-semibold">Kyoto</h3>
                  <p className="text-gray-600 text-sm">Traditional temples, bamboo forest</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">8</div>
                <div className="flex-1">
                  <h3 className="font-semibold">Hiroshima</h3>
                  <p className="text-gray-600 text-sm">Peace Memorial, Miyajima Island</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Trip Budget</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Total Cost</h3>
                <p className="text-3xl font-bold text-blue-600">¥320,000</p>
                <p className="text-sm text-blue-600">≈ $2,200 USD</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Per Day Average</h3>
                <p className="text-3xl font-bold text-green-600">¥40,000</p>
                <p className="text-sm text-green-600">≈ $275 USD</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {itineraryData.map((day, index) => (
                <div key={day.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Day {index + 1} - {day.location}</span>
                    <p className="text-sm text-gray-600">{day.title}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold">{day.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;