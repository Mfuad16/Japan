import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Clock, Car, Camera, Utensils, Bed } from 'lucide-react';

const ItineraryCard = ({ day }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'transport': return Car;
      case 'attraction': return Camera;
      case 'food': return Utensils;
      case 'stay': return Bed;
      default: return Clock;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'transport': return 'bg-blue-500';
      case 'attraction': return 'bg-green-500';
      case 'food': return 'bg-orange-500';
      case 'stay': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCostColor = (cost) => {
    const amount = parseInt(cost.replace(/[^0-9]/g, ''));
    if (amount >= 15000) return 'bg-red-500';
    if (amount >= 10000) return 'bg-orange-500';
    return 'bg-pink-500';
  };

  return (
    <div className="gradient-border">
      <div className="gradient-border-content p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            {/* Day Number Circle */}
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
              {day.id}
            </div>
            
            {/* Title and Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {day.title}
              </h3>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{day.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span>{day.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {day.description}
              </p>
            </div>
          </div>
          
          {/* Cost Badge */}
          <div className={`${getCostColor(day.cost)} text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1`}>
            <span>{day.cost}</span>
            {day.costLabel && <span className="text-xs opacity-75">{day.costLabel}</span>}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {day.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm font-medium"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} />
              <span>Show less</span>
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              <span>Show details</span>
            </>
          )}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="space-y-4">
              {day.activities.map((activity, index) => {
                const ActivityIcon = getActivityIcon(activity.type);
                return (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Time */}
                    <div className="w-16 text-sm text-gray-500 font-medium flex-shrink-0">
                      {activity.time}
                    </div>
                    
                    {/* Activity Icon */}
                    <div className={`w-8 h-8 ${getActivityColor(activity.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <ActivityIcon size={14} className="text-white" />
                    </div>
                    
                    {/* Activity Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">
                            {activity.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {activity.description}
                          </p>
                        </div>
                        {activity.cost && (
                          <span className="text-sm text-gray-500 font-medium ml-4">
                            {activity.cost}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryCard;