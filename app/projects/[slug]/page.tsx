import { notFound } from "next/navigation";
import { getProjectData, getAllProjectsData } from "@/lib/content";
import { type ProjectFrontmatter } from "@/lib/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  if (!slug) return {};

  try {
    const { frontmatter } = (await getProjectData(slug)) as {
      frontmatter: ProjectFrontmatter;
    };
    if (!frontmatter) {
      return {
        title: "Project Not Found",
      };
    }
    return {
      title: `${frontmatter.title} | Stanley`,
      description: frontmatter.description,
    };
  } catch (error) {
    return {
      title: "Project Not Found",
    };
  }
}

export async function generateStaticParams() {
  const projects = getAllProjectsData() as ProjectFrontmatter[];
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = params;
  if (!slug) notFound();

  let data;
  try {
    data = (await getProjectData(slug)) as {
      frontmatter: ProjectFrontmatter;
      content: string;
    };
  } catch (error) {
    notFound();
  }

  const { frontmatter, content } = data;

  const placeholderImg =
    "https://placehold.co/1200x600/212121/989898?text=Project";

  return (
    <div className="fade-in">
      <div className="container mx-auto max-w-4xl px-4 md:px-8 py-12">
        <Button variant="outline" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Proyek
          </Link>
        </Button>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {fronttransform.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags?.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-12 border">
          <Image
            src={frontmatter.image || placeholderImg}
            alt={frontmatter.title || "Gambar Proyek"}
            fill
            className="object-cover"
            priority
          />
        </div>

        <article
          className="prose prose-lg dark:prose-invert max-w-none
                      prose-headings:font-bold prose-headings:tracking-tight
                      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                      prose-img:rounded-md prose-img:border"
        >
          <MDXRemote source={content} />
        </article>

        {frontmatter.url && (
          <div className="text-center mt-12 pt-8 border-t">
            <Button asChild size="lg">
              <Link href={frontmatter.url} target="_blank" rel="noopener noreferrer">
                View Live Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}