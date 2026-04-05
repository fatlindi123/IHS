'use client'

// Temporarily disabled JSX due to missing React dependencies
// Will be restored once Node.js and npm are installed

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Users, Eye, TrendingUp, Award } from 'lucide-react'
import { AnalyticsData } from '../types'

interface AnalyticsPanelProps {
  analytics: AnalyticsData
}

export default function AnalyticsPanel({ analytics }: AnalyticsPanelProps) {
  // Temporary fallback - returns HTML string until React is installed
  const totalVisitors = analytics.totalVisitors.toLocaleString()
  const totalExhibitions = analytics.totalExhibitions
  const totalVisits = analytics.popularExhibitions.reduce((sum, ex) => sum + ex.visits, 0).toLocaleString()

  // Create HTML content as string
  const htmlContent = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h2 style="color: #1f2937; margin-bottom: 10px;">Analytics Dashboard</h2>
      <p style="color: #6b7280; margin-bottom: 20px;">Monitor visitor engagement and exhibition performance</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #6b7280; font-size: 14px;">Total Visitors</p>
          <p style="font-size: 24px; font-weight: bold; color: #1f2937;">${totalVisitors}</p>
          <p style="color: #059669; font-size: 14px;">+12% from last month</p>
        </div>

        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #6b7280; font-size: 14px;">Active Exhibitions</p>
          <p style="font-size: 24px; font-weight: bold; color: #1f2937;">${totalExhibitions}</p>
          <p style="color: #059669; font-size: 14px;">+2 from last month</p>
        </div>

        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #6b7280; font-size: 14px;">Total Visits</p>
          <p style="font-size: 24px; font-weight: bold; color: #1f2937;">${totalVisits}</p>
          <p style="color: #059669; font-size: 14px;">+18% from last month</p>
        </div>

        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #6b7280; font-size: 14px;">Completion Rate</p>
          <p style="font-size: 24px; font-weight: bold; color: #1f2937;">73%</p>
          <p style="color: #059669; font-size: 14px;">+5% from last month</p>
        </div>
      </div>

      <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 30px;">
        <h3 style="color: #1f2937; margin-bottom: 20px;">Most Popular Exhibitions</h3>
        ${analytics.popularExhibitions.map((exhibition, index) => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: #f9fafb; border-radius: 8px; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 32px; height: 32px; background: linear-gradient(to right, #3b82f6, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px;">
                ${index + 1}
              </div>
              <div>
                <h4 style="font-weight: 600; color: #1f2937;">${exhibition.title}</h4>
                <p style="font-size: 14px; color: #6b7280;">${exhibition.visits} visits</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h3 style="color: #1f2937; margin-bottom: 20px;">Recent Activity</h3>
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f0fdf4; border-radius: 8px; margin-bottom: 12px;">
          <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></div>
          <div>
            <p style="font-size: 14px; font-weight: 500; color: #1f2937;">New visitor completed Diabetes Journey</p>
            <p style="font-size: 12px; color: #6b7280;">2 minutes ago</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #eff6ff; border-radius: 8px; margin-bottom: 12px;">
          <div style="width: 8px; height: 8px; background: #3b82f6; border-radius: 50%;"></div>
          <div>
            <p style="font-size: 14px; font-weight: 500; color: #1f2937;">Heart Health VR reached 400 visits</p>
            <p style="font-size: 12px; color: #6b7280;">15 minutes ago</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #faf5ff; border-radius: 8px;">
          <div style="width: 8px; height: 8px; background: #8b5cf6; border-radius: 50%;"></div>
          <div>
            <p style="font-size: 14px; font-weight: 500; color: #1f2937;">Mental Health Oasis activated</p>
            <p style="font-size: 12px; color: #6b7280;">1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  `

  // Return HTML as dangerouslySetInnerHTML when React is available
  // For now, we'll return a placeholder
  return {
    __html: htmlContent
  } as any
}