"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type SkillGroupFrontmatter } from "@/lib/types";
import { SkillBadge } from "./SkillBadge";

type SkillsSectionProps = {
  skillGroups: SkillGroupFrontmatter[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  if (!skillGroups || skillGroups.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillGroups.map((group) => (
        <Card
          key={group.slug}
          className="flex flex-col h-full border transition-colors hover:border-primary/30"
        >
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}