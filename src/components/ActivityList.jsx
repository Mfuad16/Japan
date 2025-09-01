import React from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, 
  DollarSign, 
  Plane, 
  Train, 
  Camera, 
  Utensils, 
  Building2, 
  Mountain,
  TreePine,
  Ticket,
  MapPin
} from 'lucide-react'
import { formatPrice } from '../data/itineraryData'

const getActivityIcon = (type) => {
  const icons = {
    transport: <Train className="w-4 h-4" />,
    flight: <Plane className="w-4 h-4" />,
    attraction: <Ticket className="w-4 h-4" />,
    food: <Utensils className="w-4 h-4" />,
    culture: <Building2 className="w-4 h-4" />,
    nature: <TreePine className="w-4 h-4" />,
    photo: <Camera className="w-4 h-4" />,
    sightseeing: <MapPin className="w-4 h-4" />,
    start: <Clock className="w-4 h-4" />,
    stay: <Building2 className="w-4 h-4" />,
    shopping: <Building2 className="w-4 h-4" />,
    ride: <Ticket className="w-4 h-4" />,
    show: <Camera className="w-4 h-4" />,
    arrival: <Plane className="w-4 h-4" />,
    departure: <Plane className="w-4 h-4" />
  }
  return icons[type] || <Clock className="w-4 h-4" />
}

const getActivityColor = (type) => {
  const colors = {
    transport: 'bg-blue-50 text-blue-700 border-blue-200',
    flight: 'bg-sky-50 text-sky-700 border-sky-200',
    attraction: 'bg-purple-50 text-purple-700 border-purple-200',
    food: 'bg-orange-50 text-orange-700 border-orange-200',
    culture: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    nature: 'bg-green-50 text-green-700 border-green-200',
    photo: 'bg-pink-50 text-pink-700 border-pink-200',
    sightseeing: 'bg-teal-50 text-teal-700 border-teal-200',
    start: 'bg-slate-50 text-slate-700 border-slate-200',
    stay: 'bg-amber-50 text-amber-700 border-amber-200',
    shopping: 'bg-rose-50 text-rose-700 border-rose-200',
    ride: 'bg-violet-50 text-violet-700 border-violet-200',
    show: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    arrival: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    departure: 'bg-red-50 text-red-700 border-red-200'
  }
  return colors[type] || 'bg-slate-50 text-slate-700 border-slate-200'
}

const ActivityList = ({ activities, currency }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div 
      className="space-y-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {activities.map((activity, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="group relative"
        >
          <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-300">
            {/* Time badge */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Clock className="w-3 h-3 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">{activity.time}</span>
              </div>
            </div>

            {/* Activity content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                    <span className="capitalize">{activity.type}</span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {activity.activity}
                  </p>
                </div>
                
                {/* Cost */}
                {activity.cost > 0 && (
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-sm font-semibold">
                        {formatPrice(activity.cost, 'JPY', currency)}
                        {activity.group && <span className="ml-1 text-xs opacity-75">group</span>}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Connector line */}
          {idx < activities.length - 1 && (
            <div className="ml-10 w-px h-4 bg-gradient-to-b from-slate-300 to-transparent" />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ActivityList