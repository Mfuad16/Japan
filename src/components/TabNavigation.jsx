import React from 'react'
import { motion } from 'framer-motion'

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-6 sm:mb-8 px-2 sm:px-0">
      <div className="flex sm:inline-flex bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg border border-slate-200 w-full sm:w-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex-1 sm:flex-none ${
                isActive 
                  ? 'text-white shadow-lg' 
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-1 sm:gap-2">
                <Icon className="w-4 h-4" />
                <span className="text-sm sm:text-base">{tab.label}</span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default TabNavigation