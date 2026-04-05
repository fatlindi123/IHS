'use client'

// Temporarily disabled due to missing React dependencies
// Will be restored once Node.js and npm are installed

// import { motion } from 'framer-motion'
// import { Play, Eye } from 'lucide-react'
import { Exhibition } from '../types'

interface ExhibitionCardProps {
  exhibition: Exhibition
  onEnterVR: (exhibition: Exhibition) => void
  isVisited?: boolean
}

export default function ExhibitionCard({ exhibition, onEnterVR, isVisited = false }: ExhibitionCardProps) {
  // Temporary fallback - returns HTML string until React is installed
  const htmlContent = `
    <div style="background: #1f2937; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #374151; transition: all 0.3s ease;">
      <div style="position: relative; height: 192px; overflow: hidden;">
        <img
          src="${exhibition.thumbnail}"
          alt="${exhibition.title}"
          style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
          onmouseover="this.style.transform='scale(1.1)'"
          onmouseout="this.style.transform='scale(1)'"
        />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>

        <div style="position: absolute; top: 16px; right: 16px; display: flex; gap: 8px;">
          ${isVisited ? '<span style="background: #10b981; color: white; padding: 4px 8px; border-radius: 9999px; font-size: 12px; font-weight: 500; display: flex; align-items: center; gap: 4px;"><span>👁️</span>Visited</span>' : ''}
          ${!exhibition.isActive ? '<span style="background: #ef4444; color: white; padding: 4px 8px; border-radius: 9999px; font-size: 12px; font-weight: 500;">Inactive</span>' : ''}
        </div>

        <div style="position: absolute; top: 16px; left: 16px;">
          <span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 500;">
            ${exhibition.category}
          </span>
        </div>
      </div>

      <div style="padding: 24px;">
        <h3 style="font-size: 20px; font-weight: bold; color: white; margin-bottom: 8px;">${exhibition.title}</h3>
        <p style="color: #d1d5db; font-size: 14px; line-height: 1.5; margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
          ${exhibition.description}
        </p>

        <button
          onclick="window.enterVR('${exhibition.id}')"
          ${!exhibition.isActive ? 'disabled' : ''}
          style="width: 100%; padding: 12px 16px; border-radius: 8px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; border: none; cursor: ${exhibition.isActive ? 'pointer' : 'not-allowed'}; ${exhibition.isActive ? 'background: linear-gradient(to right, #3b82f6, #8b5cf6); color: white;' : 'background: #4b5563; color: #9ca3af;'} transition: all 0.2s ease;"
        >
          <span style="font-size: 18px;">▶️</span>
          ${exhibition.isActive ? 'Enter VR Experience' : 'Coming Soon'}
        </button>
      </div>
    </div>
  `

  // Return HTML as dangerouslySetInnerHTML when React is available
  return {
    __html: htmlContent
  } as any
}