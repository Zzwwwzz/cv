export interface ExperienceItem { title: string; company: string; period: string; highlight: string; }
export interface ProjectItem { name: string; description: string; tags: string[]; }
export interface EducationItem { school: string; degree: string; period: string; }
export interface Profile {
  name: string; role: string; location: string; email: string; phone: string;
   linkedin: string; summary: string;
  skills: string[]; experience: ExperienceItem[]; projects: ProjectItem[]; education: EducationItem[];
}