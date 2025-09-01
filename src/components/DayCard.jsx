import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Clock, Star, Wifi, Bath, Tv } from 'lucide-react'
import { formatPrice } from '../data/itineraryData'
import ActivityList from './ActivityList'

const getColorClasses = (color) => {
  const colors = {
    tokyo: 'from-pink-500 to-orange-500',
    osaka: 'from-yellow-500 to-amber-500', 
    kyoto: 'from-emerald-500 to-green-500',
    hiroshima: 'from-indigo-500 to-purple-500',
    fuji: 'from-purple-500 to-pink-500'
  }
  return colors[color] || 'from-blue-500 to-indigo-500'
}

const DayCard = ({ day, index, currency, isSelected, onSelect }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group"
    >
      <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300`}>
        {/* Gradient accent bar */}
        <div className={`h-1 sm:h-2 bg-gradient-to-r ${getColorClasses(day.color)}`} />
        
        {/* Header */}
        <div 
          className="p-4 sm:p-6 cursor-pointer"
          onClick={onSelect}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 sm:gap-4 mb-3">
                <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${getColorClasses(day.color)} text-white font-bold text-base sm:text-lg shadow-lg`}>
                  {day.day}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-tight">
                    {day.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-slate-600 text-xs sm:text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="truncate">{day.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      {day.area}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{day.description}</p>
            </div>
            
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:ml-6 sm:text-right">
              <div className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r ${getColorClasses(day.color)} text-white font-semibold shadow-lg text-sm sm:text-base`}>
                {formatPrice(day.totalCost, 'JPY', currency)}
                {day.groupCost && <span className="ml-1 text-xs opacity-90">group</span>}
              </div>
              <motion.div
                className="text-slate-400"
                animate={{ rotate: isSelected ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mt-4">
            {day.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isSelected ? "visible" : "hidden"}
          className="overflow-hidden"
        >
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-100">
            {/* Activities */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Daily Schedule
              </h4>
              <ActivityList activities={day.activities} currency={currency} />
            </div>

            {/* Accommodation */}
            {day.accommodation && (
              <div className="mt-6 sm:mt-8">
                <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Accommodation
                </h4>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h5 className="text-base sm:text-lg font-bold text-slate-800">{day.accommodation.name}</h5>
                      <p className="text-slate-600 text-xs sm:text-sm">{day.accommodation.type}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center text-yellow-500">
                          {[...Array(Math.floor(day.accommodation.rating))].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-600 font-medium">{day.accommodation.rating}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-emerald-600">
                        {formatPrice(day.accommodation.price, 'JPY', currency)}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500">per night</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {day.accommodation.features.map((feature, idx) => {
                      const getIcon = (feature) => {
                        if (feature.toLowerCase().includes('wifi')) return <Wifi className="w-3 h-3" />
                        if (feature.toLowerCase().includes('bath')) return <Bath className="w-3 h-3" />
                        if (feature.toLowerCase().includes('tv')) return <Tv className="w-3 h-3" />
                        return <span className="w-3 h-3 text-emerald-500">✓</span>
                      }
                      
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200"
                        >
                          {getIcon(feature)}
                          <span className="truncate">{feature}</span>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DayCard