import React from 'react'
import { motion } from 'framer-motion'

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isActive 
                  ? 'text-white shadow-lg' 
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default TabNavigation