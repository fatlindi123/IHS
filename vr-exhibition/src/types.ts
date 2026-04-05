// Types for VR Exhibition NCDs

export interface Exhibition {
  id: string
  title: string
  description: string
  thumbnail: string
  vrLink: string
  category: string
  isActive: boolean
  createdAt: string
}

export interface NCDStat {
  id: string
  title: string
  value: string
  description: string
  category: string
}

export interface UserProgress {
  exhibitionId: string
  completed: boolean
  visitedAt: string
}

export interface AnalyticsData {
  totalVisitors: number
  totalExhibitions: number
  popularExhibitions: { id: string; title: string; visits: number }[]
}