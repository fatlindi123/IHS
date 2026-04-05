'use client'

// Temporarily disabled JSX due to missing React dependencies
// Will be restored once Node.js and npm are installed

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//   LayoutDashboard,
//   BarChart3,
//   FileText,
//   Settings,
//   Menu,
//   X,
//   User,
//   LogOut
// } from 'lucide-react'
// import AdminTable from '../../components/AdminTable'
// import AnalyticsPanel from '../../components/AnalyticsPanel'
import { Exhibition } from '../../types'
import { mockExhibitions, mockAnalytics } from '../../data'

export default function AdminDashboard() {
  // Temporary fallback - HTML string until React is installed
  const htmlContent = `
    <div style="min-height: 100vh; background: #f9fafb; display: flex;">
      <!-- Sidebar -->
      <div style="width: 256px; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 0; display: flex; flex-direction: column;">
        <div style="background: linear-gradient(to right, #2563eb, #7c3aed); color: white; margin: 0; padding: 16px; text-align: center;">
          <h1 style="margin: 0; font-size: 16px; font-weight: bold;">Admin Panel</h1>
        </div>
        
        <nav style="margin-top: 32px; padding: 0 16px; flex: 1;">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <button style="width: 100%; text-align: left; padding: 12px 16px; border-radius: 8px; background: #dbeafe; color: #1e40af; border: none; border-right: 4px solid #1e40af; cursor: pointer; font-size: 14px; font-weight: 500;">📊 Dashboard</button>
            <button style="width: 100%; text-align: left; padding: 12px 16px; border-radius: 8px; background: transparent; color: #4b5563; border: none; cursor: pointer; font-size: 14px;">📈 Analytics</button>
            <button style="width: 100%; text-align: left; padding: 12px 16px; border-radius: 8px; background: transparent; color: #4b5563; border: none; cursor: pointer; font-size: 14px;">📄 Exhibitions</button>
            <button style="width: 100%; text-align: left; padding: 12px 16px; border-radius: 8px; background: transparent; color: #4b5563; border: none; cursor: pointer; font-size: 14px;">⚙️ Settings</button>
          </div>
        </nav>
        
        <!-- User Info -->
        <div style="border-top: 1px solid #e5e7eb; padding: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; background: linear-gradient(to right, #10b981, #3b82f6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">👤</div>
            <div style="flex: 1;">
              <p style="margin: 0; font-size: 14px; font-weight: 500; color: #1f2937;">Admin User</p>
              <p style="margin: 0; font-size: 12px; color: #6b7280;">Administrator</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main Content -->
      <div style="flex: 1; display: flex; flex-direction: column;">
        <!-- Top Bar -->
        <header style="background: white; border-bottom: 1px solid #e5e7eb; padding: 16px 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">Dashboard</h2>
            <div style="display: flex; align-items: center; gap: 16px;">
              <span style="font-size: 14px; color: #4b5563;">Welcome back, Admin!</span>
              <div style="width: 32px; height: 32px; background: linear-gradient(to right, #3b82f6, #7c3aed); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">👤</div>
            </div>
          </div>
        </header>
        
        <!-- Page Content -->
        <main style="flex: 1; padding: 24px;">
          <div style="margin-bottom: 32px;">
            <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: bold; color: #111827;">Admin Dashboard</h1>
            <p style="margin: 0; color: #4b5563; font-size: 14px;">Manage your VR exhibition content and monitor performance</p>
          </div>
          
          <!-- Stats Cards -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Total Visitors</p>
              <p style="margin: 0 0 8px 0; font-size: 24px; font-weight: bold; color: #1f2937;">${mockAnalytics.totalVisitors.toLocaleString()}</p>
              <p style="margin: 0; color: #059669; font-size: 14px;">+12% from last month</p>
            </div>
            
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Active Exhibitions</p>
              <p style="margin: 0 0 8px 0; font-size: 24px; font-weight: bold; color: #1f2937;">${mockAnalytics.totalExhibitions}</p>
              <p style="margin: 0; color: #059669; font-size: 14px;">+2 from last month</p>
            </div>
            
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Total Visits</p>
              <p style="margin: 0 0 8px 0; font-size: 24px; font-weight: bold; color: #1f2937;">${mockAnalytics.popularExhibitions.reduce((sum: number, ex: any) => sum + ex.visits, 0).toLocaleString()}</p>
              <p style="margin: 0; color: #059669; font-size: 14px;">+18% from last month</p>
            </div>
            
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Completion Rate</p>
              <p style="margin: 0 0 8px 0; font-size: 24px; font-weight: bold; color: #1f2937;">73%</p>
              <p style="margin: 0; color: #059669; font-size: 14px;">+5% from last month</p>
            </div>
          </div>
          
          <!-- Exhibitions Table -->
          <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">Exhibitions</h3>
              <button style="background: #3b82f6; color: white; padding: 8px 16px; border-radius: 8px; border: none; cursor: pointer; font-size: 14px; font-weight: 500;">+ Add New</button>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <th style="text-align: left; padding: 12px; font-weight: 600; color: #1f2937; font-size: 14px;">Title</th>
                  <th style="text-align: left; padding: 12px; font-weight: 600; color: #1f2937; font-size: 14px;">Category</th>
                  <th style="text-align: left; padding: 12px; font-weight: 600; color: #1f2937; font-size: 14px;">Status</th>
                  <th style="text-align: left; padding: 12px; font-weight: 600; color: #1f2937; font-size: 14px;">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${mockExhibitions.slice(0, 5).map((ex: Exhibition) => `
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px; color: #1f2937; font-size: 14px;">${ex.title}</td>
                    <td style="padding: 12px; color: #6b7280; font-size: 14px;">${ex.category}</td>
                    <td style="padding: 12px; font-size: 14px;">
                      <span style="background: ${ex.isActive ? '#d1fae5' : '#fee2e2'}; color: ${ex.isActive ? '#065f46' : '#991b1b'}; padding: 4px 12px; border-radius: 9999px; font-size: 12px;">
                        ${ex.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td style="padding: 12px; font-size: 14px;">
                      <button style="background: transparent; color: #3b82f6; border: none; cursor: pointer; margin-right: 12px; font-size: 12px;">Edit</button>
                      <button style="background: transparent; color: #ef4444; border: none; cursor: pointer; font-size: 12px;">Delete</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  `

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}