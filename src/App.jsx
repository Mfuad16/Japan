import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Star, 
  Clock, 
  DollarSign, 
  Plane, 
  Train, 
  Camera,
  Mountain,
  Building2,
  Utensils,
  Wifi,
  Bath,
  Tv
} from 'lucide-react'
import DayCard from './components/DayCard'
import TabNavigation from './components/TabNavigation'
import BudgetSummary from './components/BudgetSummary'
import RouteMap from './components/RouteMap'
import { itineraryData } from './data/itineraryData'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('itinerary')
  const [currency, setCurrency] = useState('JPY')
  const [selectedDay, setSelectedDay] = useState(null)

  const tabs = [
    { id: 'itinerary', label: 'Itinerary', icon: Calendar },
    { id: 'route', label: 'Route', icon: MapPin },
    { id: 'budget', label: 'Budget', icon: DollarSign }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'itinerary':
        return (
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {itineraryData.map((day, index) => (
              <DayCard
                key={day.id}
                day={day}
                index={index}
                currency={currency}
                isSelected={selectedDay === day.id}
                onSelect={() => setSelectedDay(selectedDay === day.id ? null : day.id)}
              />
            ))}
          </motion.div>
        )
      case 'route':
        return <RouteMap />
      case 'budget':
        return <BudgetSummary currency={currency} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-6xl">🗾</div>
            <div>
              <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Japan Adventure
              </h1>
              <p className="text-xl text-slate-600 font-medium">8-Day Cultural Journey</p>
            </div>
          </motion.div>
          <motion.p 
            className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Experience the perfect blend of ancient traditions and cutting-edge modernity across 
            Tokyo → Osaka → Kyoto → Hiroshima
          </motion.p>
        </motion.header>

        {/* Navigation */}
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content */}
        <motion.main 
          className="mt-8"
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderTabContent()}
        </motion.main>

        {/* Currency Toggle */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <button
            onClick={() => setCurrency(prev => prev === 'JPY' ? 'INR' : 'JPY')}
            className="bg-white shadow-lg rounded-full p-4 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <span className="text-sm font-bold text-slate-700">
              {currency === 'JPY' ? '¥ → ₹' : '₹ → ¥'}
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default App