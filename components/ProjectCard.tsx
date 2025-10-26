"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { type ProjectFrontmatter } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectFrontmatter;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, image, slug } = project;
  
  const placeholderImg =
    "https://placehold.co/600x400/212121/989898?text=Project";
    
  const [imgSrc, setImgSrc] = useState(image || placeholderImg);

  return (
    <Card className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-black/40 hover:border-primary/30">
      <Link href={`/projects/${slug}`} className="block">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={imgSrc}
              alt={title || "Project Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              onError={() => {
                setImgSrc(placeholderImg);
              }}
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/0 transition-all duration-300" />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title || "Judul Proyek"}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description || "Deskripsi singkat proyek..."}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 flex flex-wrap gap-2">
          {tags?.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Link>
      <Button
        size="icon"
        variant="outline"
        className="absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform scale-75 group-hover:scale-100"
        asChild
      >
        <Link href={`/projects/${slug}`}>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Button>
    </Card>
  );
}