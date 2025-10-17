// Configuration API centralisée
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

// Helper pour construire les URLs d'API
export const apiUrl = (endpoint: string) => `${API_BASE_URL}${endpoint}`