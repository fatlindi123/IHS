import { Exhibition, NCDStat, UserProgress, AnalyticsData } from './types'

// Mock data for exhibitions
export const mockExhibitions: Exhibition[] = [
  {
    id: '1',
    title: 'Diabetes Journey',
    description: 'Explore the impact of diabetes on daily life through immersive VR experiences.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    vrLink: 'https://example.com/vr/diabetes',
    category: 'Metabolic',
    isActive: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Heart Health VR',
    description: 'Understand cardiovascular diseases through interactive 3D visualizations.',
    thumbnail: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    vrLink: 'https://example.com/vr/heart',
    category: 'Cardiovascular',
    isActive: true,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Mental Health Oasis',
    description: 'Experience the challenges and solutions for mental health awareness.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    vrLink: 'https://example.com/vr/mental-health',
    category: 'Mental Health',
    isActive: true,
    createdAt: '2024-01-25'
  },
  {
    id: '4',
    title: 'Cancer Awareness',
    description: 'Learn about cancer prevention and treatment through VR storytelling.',
    thumbnail: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    vrLink: 'https://example.com/vr/cancer',
    category: 'Oncology',
    isActive: false,
    createdAt: '2024-02-01'
  }
]

// Mock data for NCD statistics
export const mockNCDStats: NCDStat[] = [
  {
    id: '1',
    title: 'Global Deaths',
    value: '41 million',
    description: 'NCDs cause 41 million deaths each year, equivalent to 71% of all deaths globally.',
    category: 'Global Impact'
  },
  {
    id: '2',
    title: 'Cardiovascular Diseases',
    value: '17.9 million',
    description: 'Heart attacks and strokes account for nearly 80% of NCD deaths.',
    category: 'Cardiovascular'
  },
  {
    id: '3',
    title: 'Diabetes Cases',
    value: '422 million',
    description: 'Over 422 million adults live with diabetes worldwide.',
    category: 'Metabolic'
  },
  {
    id: '4',
    title: 'Mental Health',
    value: '1 in 4',
    description: '1 in 4 people will experience mental health issues in their lifetime.',
    category: 'Mental Health'
  },
  {
    id: '5',
    title: 'Economic Impact',
    value: '$47 trillion',
    description: 'NCDs cost the global economy $47 trillion between 2011-2030.',
    category: 'Economic'
  },
  {
    id: '6',
    title: 'Prevention Success',
    value: '80%',
    description: 'Up to 80% of premature heart disease and stroke can be prevented.',
    category: 'Prevention'
  }
]

// Mock user progress data
export const mockUserProgress: UserProgress[] = [
  { exhibitionId: '1', completed: true, visitedAt: '2024-03-15' },
  { exhibitionId: '2', completed: false, visitedAt: '2024-03-20' },
  { exhibitionId: '3', completed: true, visitedAt: '2024-03-18' }
]

// Mock analytics data
export const mockAnalytics: AnalyticsData = {
  totalVisitors: 1250,
  totalExhibitions: 4,
  popularExhibitions: [
    { id: '1', title: 'Diabetes Journey', visits: 450 },
    { id: '2', title: 'Heart Health VR', visits: 380 },
    { id: '3', title: 'Mental Health Oasis', visits: 320 },
    { id: '4', title: 'Cancer Awareness', visits: 100 }
  ]
}