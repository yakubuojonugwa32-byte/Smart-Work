export interface Skill {
  name: string;
  percentage: number;
  category: 'electrical' | 'software' | 'civil' | 'computing';
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'civil' | 'embedded' | 'all';
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
  tags: string[];
}
