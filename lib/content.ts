import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  type ProjectFrontmatter,
  type ExperienceFrontmatter,
  type EducationFrontmatter,
  type SkillGroupFrontmatter,
} from "./types";

const contentDirectory = path.join(process.cwd(), "content");

function _readContentDir(directory: string): any[] {
  const fullDirectoryPath = path.join(contentDirectory, directory);
  if (!fs.existsSync(fullDirectoryPath)) {
    console.warn(`Directory not found: ${fullDirectoryPath}`);
    return [];
  }

  const fileNames = fs.readdirSync(fullDirectoryPath);

  const allData = fileNames.map((fileName) => {
    if (!fileName.endsWith(".mdx")) {
      return null;
    }
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(fullDirectoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  });

  return allData
    .filter((data) => data !== null)
    .sort((a: any, b: any) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
}

export function getAllProjectsData(): ProjectFrontmatter[] {
  return _readContentDir("projects") as ProjectFrontmatter[];
}

export function getAllExperienceData(): ExperienceFrontmatter[] {
  return _readContentDir("experiences") as ExperienceFrontmatter[];
}

export function getAllEducationData(): EducationFrontmatter[] {
  return _readContentDir("educations") as EducationFrontmatter[];
}

export function getAllSkillGroupsData(): SkillGroupFrontmatter[] {
  const allContentData = _readContentDir("skills");

  const skillGroups = allContentData.map((data) => {
    const skills = data.content
      .split("\n")
      .map((s: string) => s.trim())
      .filter(Boolean);

    return {
      ...data,
      skills: skills,
    } as SkillGroupFrontmatter;
  });

  return skillGroups;
}

export function getRolesData(): string[] {
  const filePath = path.join(contentDirectory, "roles.mdx");
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContents); 
    
    const roles = content
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
      
    return roles;
  } catch (error) {
    console.error("failed to read roles.mdx:", error);
    return ["Software Engineer"]; 
  }
}

export async function getProjectData(slug: string) {
  const fullPath = path.join(contentDirectory, "projects", `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    frontmatter: data,
    content,
  };
}