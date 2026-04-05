'use client'

// Temporarily disabled due to missing React dependencies
// Will be restored once Node.js and npm are installed

// import { motion } from 'framer-motion'
// import { Edit, Trash2, Eye, Plus, ToggleLeft, ToggleRight } from 'lucide-react'
import { Exhibition } from '../types'

interface AdminTableProps {
  exhibitions: Exhibition[]
  onEdit: (exhibition: Exhibition) => void
  onDelete: (id: string) => void
  onToggleActive: (id: string) => void
  onAddNew: () => void
}

export default function AdminTable({
  exhibitions,
  onEdit,
  onDelete,
  onToggleActive,
  onAddNew
}: AdminTableProps) {
  // Temporary fallback - returns HTML string until React is installed
  const htmlContent = `
    <div style="background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
      <div style="background: #f9fafb; padding: 24px; border-bottom: 1px solid #e5e7eb;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h2 style="font-size: 20px; font-weight: bold; color: #1f2937;">Exhibition Management</h2>
          <button
            onclick="window.addNewExhibition()"
            style="background: #2563eb; color: white; padding: 8px 16px; border-radius: 8px; font-weight: 500; display: flex; align-items: center; gap: 8px; border: none; cursor: pointer;"
          >
            ➕ Add New Exhibition
          </button>
        </div>
      </div>

      <div style="overflow-x: auto;">
        <table style="width: 100%;">
          <thead style="background: #f9fafb;">
            <tr>
              <th style="padding: 12px 24px; text-align: left; font-size: 12px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Exhibition</th>
              <th style="padding: 12px 24px; text-align: left; font-size: 12px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Category</th>
              <th style="padding: 12px 24px; text-align: left; font-size: 12px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Status</th>
              <th style="padding: 12px 24px; text-align: left; font-size: 12px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Visits</th>
              <th style="padding: 12px 24px; text-align: right; font-size: 12px; font-weight: 500; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Actions</th>
            </tr>
          </thead>
          <tbody style="background: white;">
            ${exhibitions.length === 0 ? `
              <tr>
                <td colspan="5" style="padding: 48px; text-align: center; color: #6b7280;">
                  <div style="font-size: 48px; margin-bottom: 16px;">📭</div>
                  <p style="font-size: 18px; font-weight: 500; margin-bottom: 8px;">No exhibitions found</p>
                  <p style="font-size: 14px;">Get started by adding your first VR exhibition</p>
                </td>
              </tr>
            ` : exhibitions.map(exhibition => `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 16px 24px;">
                  <div style="display: flex; align-items: center;">
                    <div style="flex-shrink: 0; width: 48px; height: 48px; background: #e5e7eb; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                      🖼️
                    </div>
                    <div style="margin-left: 16px;">
                      <div style="font-size: 14px; font-weight: 500; color: #1f2937;">${exhibition.title}</div>
                      <div style="font-size: 14px; color: #6b7280; max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${exhibition.description}</div>
                    </div>
                  </div>
                </td>
                <td style="padding: 16px 24px;">
                  <span style="display: inline-flex; padding: 4px 8px; font-size: 12px; font-weight: 600; border-radius: 9999px; background: #dbeafe; color: #1e40af;">
                    ${exhibition.category}
                  </span>
                </td>
                <td style="padding: 16px 24px;">
                  <button
                    onclick="window.toggleExhibition('${exhibition.id}')"
                    style="display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: 500; ${exhibition.isActive ? 'background: #dcfce7; color: #166534;' : 'background: #fee2e2; color: #dc2626;'} border: none; cursor: pointer;"
                  >
                    ${exhibition.isActive ? '✅ Active' : '❌ Inactive'}
                  </button>
                </td>
                <td style="padding: 16px 24px; font-size: 14px; color: #6b7280;">
                  0
                </td>
                <td style="padding: 16px 24px; text-align: right;">
                  <div style="display: flex; justify-content: flex-end; gap: 8px;">
                    <button
                      onclick="window.editExhibition('${exhibition.id}')"
                      style="padding: 6px; border-radius: 6px; background: #f3f4f6; border: none; cursor: pointer; color: #6b7280;"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      onclick="window.deleteExhibition('${exhibition.id}')"
                      style="padding: 6px; border-radius: 6px; background: #fee2e2; border: none; cursor: pointer; color: #dc2626;"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `

  // Return HTML as dangerouslySetInnerHTML when React is available
  return {
    __html: htmlContent
  } as any
}