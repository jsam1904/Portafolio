export type ProjectStatus = 'completed' | 'in-progress' | 'archived'

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  repoUrl: string
  demoUrl?: string
  imageUrl?: string
  status: ProjectStatus
  featured?: boolean
}
