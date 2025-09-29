import React from 'react';
import { Calendar, MapPin, DollarSign } from 'lucide-react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'route', label: 'Route', icon: MapPin },
    { id: 'budget', label: 'Budget', icon: DollarSign }
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-center space-x-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }
                `}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;