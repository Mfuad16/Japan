import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react'
import { itineraryData, formatPrice } from '../data/itineraryData'

const BudgetSummary = ({ currency }) => {
  const totalCost = itineraryData.reduce((sum, day) => sum + day.totalCost, 0)
  const perPersonCost = Math.round(totalCost / 2)
  const perDayCost = Math.round(totalCost / 8)

  const budgetItems = [
    {
      label: 'Total Budget',
      amount: totalCost,
      icon: DollarSign,
      color: 'from-blue-500 to-indigo-600',
      description: 'Complete trip cost for 2 people'
    },
    {
      label: 'Per Person',
      amount: perPersonCost,
      icon: Users,
      color: 'from-emerald-500 to-green-600',
      description: 'Individual cost breakdown'
    },
    {
      label: 'Per Day',
      amount: perDayCost,
      icon: Calendar,
      color: 'from-purple-500 to-pink-600',
      description: 'Daily average spending'
    }
  ]

  const categoryBreakdown = [
    { name: 'Attractions', amount: 95000, percentage: 35 },
    { name: 'Transportation', amount: 68000, percentage: 25 },
    { name: 'Accommodation', amount: 54000, percentage: 20 },
    { name: 'Food & Dining', amount: 40000, percentage: 15 },
    { name: 'Miscellaneous', amount: 13000, percentage: 5 }
  ]

  return (
    <div className="space-y-8">
      {/* Budget Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {budgetItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-slate-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-800">{item.label}</h3>
                    <div className="text-3xl font-bold text-slate-900">
                      {formatPrice(item.amount, 'JPY', currency)}
                    </div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Category Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          Budget Breakdown
        </h3>
        
        <div className="space-y-4">
          {categoryBreakdown.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-700">{category.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">{category.percentage}%</span>
                  <span className="font-semibold text-slate-800">
                    {formatPrice(category.amount, 'JPY', currency)}
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${category.percentage}%` }}
                  transition={{ 
                    delay: 0.7 + index * 0.1, 
                    duration: 0.8, 
                    ease: "easeOut" 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Included Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
      >
        <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
          What's Included
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'All Shinkansen bullet train tickets',
            'All attraction entrance fees & tickets',
            'Airport pickup & drop-off (private car)',
            'Mount Fuji private car tour',
            'All local transportation (metro, JR, buses)',
            'Budget APA Hotels (7 nights total)'
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-emerald-200"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <span className="text-slate-700 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default BudgetSummary