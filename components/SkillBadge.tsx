"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Atom,
  Braces,
  Database,
  GitBranch,
  Container,
  Layers,
  FileCode,
  Wind,
  Pyramid,
  Package,
  Server,
  DatabaseZap,
  Component,
  Square,
  Code,
} from "lucide-react";
import React from "react";

type IconType = React.ComponentType<{ className?: string }>;

const ICON_MAP: Record<string, IconType> = {
  react: Atom,
  "next.js": Layers,
  typescript: FileCode,
  javascript: Braces,
  "tailwind css": Wind,
  "framer motion": Component,
  zustand: Square,
  "node.js": Package,
  express: Server,
  python: Pyramid,
  postgresql: Database,
  mongodb: Database,
  firebase: DatabaseZap,
  git: GitBranch,
  docker: Container,
};

const badgeVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.1,
    y: -3,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

export function SkillBadge({ name }: { name: string }) {
  const Icon = ICON_MAP[name.toLowerCase()] || Code;

  return (
    <motion.div variants={badgeVariants} initial="initial" whileHover="hover">
      <Badge
        variant="secondary"
        className="flex items-center gap-2 px-3 py-1.5 text-base rounded-lg cursor-pointer border-transparent transition-colors hover:border-primary/50"
      >
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-medium">{name}</span>
      </Badge>
    </motion.div>
  );
}
