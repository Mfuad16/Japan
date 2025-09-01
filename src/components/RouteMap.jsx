import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Clock, Star } from 'lucide-react'

const RouteMap = () => {
  const routes = [
    {
      from: 'Tokyo',
      to: 'Mount Fuji',
      transport: 'Private Car',
      duration: '2.5 hours',
      highlights: ['Scenic Drive', 'Mountain Views'],
      color: 'from-pink-500 to-orange-500'
    },
    {
      from: 'Tokyo',
      to: 'Osaka',
      transport: 'Shinkansen',
      duration: '2.5 hours',
      highlights: ['Bullet Train', 'Speed 320km/h'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      from: 'Osaka',
      to: 'Kyoto',
      transport: 'Local Train',
      duration: '1 hour',
      highlights: ['Keihan Line', 'Local Experience'],
      color: 'from-emerald-500 to-green-500'
    },
    {
      from: 'Kyoto',
      to: 'Hiroshima',
      transport: 'Shinkansen',
      duration: '1.5 hours',
      highlights: ['Bullet Train', 'Countryside Views'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      from: 'Hiroshima',
      to: 'Tokyo',
      transport: 'Shinkansen',
      duration: '4 hours',
      highlights: ['Final Journey', 'Return Trip'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const cities = [
    { 
      name: 'Tokyo', 
      days: 3, 
      emoji: '🗼',
      description: 'Modern metropolis with traditional heart',
      position: { x: 80, y: 20 }
    },
    { 
      name: 'Mount Fuji', 
      days: 1, 
      emoji: '🗻',
      description: 'Sacred mountain and scenic beauty',
      position: { x: 70, y: 40 }
    },
    { 
      name: 'Osaka', 
      days: 1, 
      emoji: '🏰',
      description: 'Culinary capital and entertainment hub',
      position: { x: 40, y: 60 }
    },
    { 
      name: 'Kyoto', 
      days: 1, 
      emoji: '⛩️',
      description: 'Ancient temples and cultural treasures',
      position: { x: 45, y: 45 }
    },
    { 
      name: 'Hiroshima', 
      days: 1, 
      emoji: '🕊️',
      description: 'Peace memorial and island beauty',
      position: { x: 20, y: 70 }
    }
  ]

  return (
    <div className="space-y-8">
      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border-2 border-slate-200 overflow-hidden"
        style={{ height: '500px' }}
      >
        <div className="absolute inset-0 bg-pattern opacity-30" />
        
        <div className="relative h-full">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            🗾 Your Japan Journey Route
          </h3>
          
          {/* Cities */}
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="absolute group cursor-pointer"
              style={{ 
                left: `${city.position.x}%`, 
                top: `${city.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="relative">
                <motion.div
                  className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-blue-500 flex items-center justify-center text-2xl hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {city.emoji}
                </motion.div>
                
                {/* City Info Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-slate-800 text-white p-3 rounded-lg shadow-lg whitespace-nowrap">
                    <div className="font-semibold">{city.name}</div>
                    <div className="text-xs opacity-90">{city.days} day{city.days > 1 ? 's' : ''}</div>
                    <div className="text-xs opacity-75 mt-1">{city.description}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Route Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
              </marker>
            </defs>
            {/* Simplified route lines */}
            <motion.path
              d="M 80% 20% Q 75% 30% 70% 40%"
              stroke="#64748b"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Transportation Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {routes.map((route, index) => (
          <motion.div
            key={`${route.from}-${route.to}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${route.color}`} />
                <span className="font-semibold text-slate-800">{route.from}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <span className="font-semibold text-slate-800">{route.to}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{route.duration}</span>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate-700">Via {route.transport}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {route.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-white text-slate-600 rounded-md border border-slate-200"
                  >
                    <Star className="w-3 h-3" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RouteMap