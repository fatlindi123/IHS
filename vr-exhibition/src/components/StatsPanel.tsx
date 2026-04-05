'use client'

// Temporarily disabled due to missing React dependencies
// Will be restored once Node.js and npm are installed

// import { motion } from 'framer-motion'
// import { TrendingUp, Users, Heart, Brain, DollarSign, Shield } from 'lucide-react'
import { NCDStat } from '../types'

interface StatsPanelProps {
  stats: NCDStat[]
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'global impact':
      return '📈'
    case 'cardiovascular':
      return '❤️'
    case 'metabolic':
      return '👥'
    case 'mental health':
      return '🧠'
    case 'economic':
      return '💰'
    case 'prevention':
      return '🛡️'
    default:
      return '📊'
  }
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'global impact':
      return 'from-red-500 to-red-600'
    case 'cardiovascular':
      return 'from-pink-500 to-pink-600'
    case 'metabolic':
      return 'from-orange-500 to-orange-600'
    case 'mental health':
      return 'from-purple-500 to-purple-600'
    case 'economic':
      return 'from-green-500 to-green-600'
    case 'prevention':
      return 'from-blue-500 to-blue-600'
    default:
      return 'from-gray-500 to-gray-600'
  }
}

export default function StatsPanel({ stats }: StatsPanelProps) {
  // Temporary fallback - returns HTML string until React is installed
  const htmlContent = `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <h2 style="font-size: 24px; font-weight: bold; color: white; margin-bottom: 8px;">NCD Statistics & Facts</h2>
        <p style="color: #9ca3af;">Understanding the global impact of Non-Communicable Diseases</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        ${stats.map(stat => {
          const iconEmoji = getCategoryIcon(stat.category)
          const colorClass = getCategoryColor(stat.category)
          return `
            <div style="background: #1f2937; border-radius: 12px; padding: 24px; border: 1px solid #374151; transition: border-color 0.2s ease;">
              <div style="display: flex; align-items: flex-start; gap: 16px;">
                <div style="width: 48px; height: 48px; border-radius: 8px; background: linear-gradient(to right, #ef4444, #dc2626); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="font-size: 20px;">${iconEmoji}</span>
                </div>

                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white;">${stat.title}</h3>
                    <span style="padding: 4px 8px; border-radius: 9999px; font-size: 12px; font-weight: 500; background: linear-gradient(to right, #ef4444, #dc2626); color: white;">
                      ${stat.category}
                    </span>
                  </div>

                  <div style="font-size: 30px; font-weight: bold; color: white; margin-bottom: 8px;">${stat.value}</div>
                  <p style="color: #d1d5db; font-size: 14px; line-height: 1.5;">${stat.description}</p>
                </div>
              </div>
            </div>
          `
        }).join('')}
      </div>

      <div style="background: linear-gradient(to right, #2563eb, #7c3aed); border-radius: 12px; padding: 24px; text-align: center;">
        <h3 style="font-size: 20px; font-weight: bold; color: white; margin-bottom: 8px;">Take Action Today</h3>
        <p style="color: #bfdbfe; margin-bottom: 16px;">
          Prevention and early detection can save millions of lives. Explore our VR experiences to learn more.
        </p>
        <button style="background: white; color: #2563eb; padding: 8px 24px; border-radius: 8px; font-weight: 600; border: none; cursor: pointer; transition: background-color 0.2s ease;">
          Learn More About Prevention
        </button>
      </div>
    </div>
  `

  // Return HTML as dangerouslySetInnerHTML when React is available
  return {
    __html: htmlContent
  } as any
}