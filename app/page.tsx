import {
  getAllProjectsData,
  getAllExperienceData,
  getAllEducationData,
  getAllSkillGroupsData,
  getRolesData,
} from "@/lib/content";
import {
  type ProjectFrontmatter,
  type ExperienceFrontmatter,
  type EducationFrontmatter,
  type SkillGroupFrontmatter,
} from "@/lib/types";
import HomePageClient from "@/components/HomePageClient";
import { MDXRemote } from "next-mdx-remote/rsc";

const MdxContent = ({ content }: { content: string }) => (
  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
    <MDXRemote source={content} />
  </div>
);

const SkillMdxContent = ({ content }: { content: string }) => (
  <div className="prose prose-lg dark:prose-invert max-w-none prose-ul:list-none prose-ul:p-0 prose-li:mb-2 prose-li:flex prose-li:items-center">
    <MDXRemote source={content} />
  </div>
);

export default async function HomePage() {
  const allProjects = getAllProjectsData() as ProjectFrontmatter[];
  const experienceItems = getAllExperienceData() as ExperienceFrontmatter[];
  const educationItems = getAllEducationData() as EducationFrontmatter[];
  const skillGroups = getAllSkillGroupsData() as SkillGroupFrontmatter[];
  const roles = getRolesData();

  const featuredProjects = allProjects.slice(0, 3);

  const experienceNodes = experienceItems.map((item) => (
    <MdxContent key={`${item.slug}-exp-content`} content={item.content} />
  ));
  const educationNodes = educationItems.map((item) => (
    <MdxContent key={`${item.slug}-edu-content`} content={item.content} />
  ));

  return (
    <HomePageClient
      featuredProjects={featuredProjects}
      experienceItems={experienceItems}
      educationItems={educationItems}
      skillGroups={skillGroups}
      experienceNodes={experienceNodes}
      educationNodes={educationNodes}
      roles={roles}
    />
  );
}