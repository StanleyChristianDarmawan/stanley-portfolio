export type ProjectFrontmatter = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  url?: string;
};

export type ExperienceFrontmatter = {
  slug: string;
  title: string;
  company: string;
  location: string;
  date: string;
  employmentType?: string;
  [key: string]: any;
};

export type EducationFrontmatter = {
  slug: string;
  institution: string;
  degree: string;
  date: string;
  order: number;
  content: string;
};

export type SkillGroupFrontmatter = {
  slug: string;
  title: string;
  skills: string[];
  content: string;
  [key: string]: any;
};
