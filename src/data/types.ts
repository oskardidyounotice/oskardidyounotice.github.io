export interface CaseStudy {
  id: number
  title: string
  description: string
  tags: string[]
  logo: string
  bgColor: string
  content: {
    overview: string
    challenge: string
    solution: string
    results: string
    images: {
      main: string
      process?: string[]
      final?: string[]
    }
  }
}

export interface HeroProps {
  name: string
  tagline: string
  email: string
  linkedIn: string
} 