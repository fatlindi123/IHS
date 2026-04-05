'use client'

// Temporarily disabled due to missing React dependencies
// Will be restored once Node.js and npm are installed

import { UserProgress } from '../types'
import { mockExhibitions } from '../data'

interface ProgressPanelProps {
  userProgress: UserProgress[]
}

export default function ProgressPanel({ userProgress }: ProgressPanelProps) {
  const totalExhibitions = mockExhibitions.length
  const completedExhibitions = userProgress.filter(p => p.completed).length
  const progressPercentage = (completedExhibitions / totalExhibitions) * 100

  const getExhibitionTitle = (id: string) => {
    return mockExhibitions.find(e => e.id === id)?.title || 'Unknown Exhibition'
  }

  // Temporary fallback - returns HTML string until React is installed
  const htmlContent = `
    <div style="background: #1f2937; border-radius: 12px; padding: 24px; border: 1px solid #374151;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <div style="width: 40px; height: 40px; background: linear-gradient(to right, #10b981, #3b82f6); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <span style="font-size: 20px;">🎯</span>
        </div>
        <div>
          <h2 style="font-size: 20px; font-weight: bold; color: white;">Your Progress</h2>
          <p style="color: #9ca3af; font-size: 14px;">Track your VR exhibition journey</p>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="color: #d1d5db;">Overall Progress</span>
          <span style="color: white; font-weight: 600;">${completedExhibitions}/${totalExhibitions}</span>
        </div>
        <div style="width: 100%; background: #374151; border-radius: 9999px; height: 12px;">
          <div style="width: ${progressPercentage}%; background: linear-gradient(to right, #10b981, #3b82f6); height: 12px; border-radius: 9999px;"></div>
        </div>
        <div style="text-align: center; margin-top: 8px;">
          <span style="font-size: 24px; font-weight: bold; color: white;">${Math.round(progressPercentage)}%</span>
          <span style="color: #9ca3af; margin-left: 4px;">Complete</span>
        </div>
      </div>

      ${progressPercentage === 100 ? `
        <div style="background: linear-gradient(to right, #eab308, #ea580c); border-radius: 12px; padding: 16px; text-align: center; margin-bottom: 24px;">
          <div style="font-size: 32px; margin-bottom: 8px;">🏆</div>
          <h3 style="color: white; font-weight: bold;">🎉 Exhibition Master!</h3>
          <p style="color: #fef3c7; font-size: 14px;">You've completed all VR experiences!</p>
        </div>
      ` : ''}

      <div style="display: flex; flex-direction: column; gap: 12px;">
        <h3 style="font-size: 18px; font-weight: 600; color: white; margin-bottom: 16px;">Exhibition Checklist</h3>

        ${mockExhibitions.map((exhibition, index) => {
          const progress = userProgress.find(p => p.exhibitionId === exhibition.id)
          const isCompleted = progress?.completed || false

          return `
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; border: 1px solid #4b5563; ${isCompleted ? 'background: rgba(16, 185, 129, 0.1); border-color: #10b981;' : 'background: rgba(55, 65, 81, 0.5);'}">
              <div style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; ${isCompleted ? 'background: #10b981;' : 'background: #4b5563;'}">
                ${isCompleted ? '<span style="color: white; font-size: 12px;">✓</span>' : '<span style="color: #9ca3af; font-size: 12px;">○</span>'}
              </div>

              <div style="flex: 1;">
                <h4 style="font-weight: 500; ${isCompleted ? 'color: #34d399;' : 'color: #d1d5db;'}">
                  ${exhibition.title}
                </h4>
                ${progress ? `
                  <p style="font-size: 12px; color: #6b7280;">
                    ${isCompleted ? 'Completed' : 'Visited'} on ${new Date(progress.visitedAt).toLocaleDateString()}
                  </p>
                ` : ''}
              </div>

              ${!exhibition.isActive ? '<span style="font-size: 12px; background: #dc2626; color: white; padding: 4px 8px; border-radius: 9999px;">Inactive</span>' : ''}
            </div>
          `
        }).join('')}
      </div>

      <div style="margin-top: 24px; padding: 16px; background: rgba(55, 65, 81, 0.5); border-radius: 8px;">
        <h4 style="color: white; font-weight: 600; margin-bottom: 8px;">Next Steps</h4>
        <ul style="color: #d1d5db; font-size: 14px; list-style: none; padding: 0; margin: 0;">
          <li>• Complete remaining exhibitions</li>
          <li>• Share your experience with others</li>
          <li>• Learn about NCD prevention</li>
        </ul>
      </div>
    </div>
  `

  // Return HTML as dangerouslySetInnerHTML when React is available
  return {
    __html: htmlContent
  } as any
}