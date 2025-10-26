"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { TimelineCard } from "@/components/TimelineCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SkillBadge } from "@/components/SkillBadge";
import {
  type ProjectFrontmatter,
  type ExperienceFrontmatter,
  type EducationFrontmatter,
  type SkillGroupFrontmatter,
} from "@/lib/types";
import React, { useState, useEffect } from "react";

type HomePageClientProps = {
  featuredProjects: ProjectFrontmatter[];
  experienceItems: ExperienceFrontmatter[];
  educationItems: EducationFrontmatter[];
  skillGroups: SkillGroupFrontmatter[];
  experienceNodes: React.ReactNode[];
  educationNodes: React.ReactNode[];
  roles: string[];
};

const TEXT_ENTER_VARIANTS = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.1 + 0.3,
      ease: [0.215, 0.61, 0.355, 1],
      duration: 0.6,
    },
  }),
};

const SHAPE_ENTER_VARIANTS = {
  hidden: { scale: 0, opacity: 0, rotate: 0 },
  visible: {
    scale: 1,
    opacity: 0.6,
    rotate: 15,
    transition: {
      delay: 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      duration: 1.2,
    },
  },
};

const HERO_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const FADE_IN_UP_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};


export default function HomePageClient({
  featuredProjects,
  experienceItems,
  educationItems,
  skillGroups,
  experienceNodes,
  educationNodes,
  roles,
}: HomePageClientProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (roles && roles.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [roles]);

  return (
    <div>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={HERO_CONTAINER_VARIANTS}
        className="relative flex items-center min-h-screen py-20 md:py-32 overflow-hidden z-0"
      >
        <motion.div
          variants={SHAPE_ENTER_VARIANTS}
          className="absolute -top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl opacity-50 animate-blob mix-blend-multiply filter pointer-events-none z-0"
        ></motion.div>
        <motion.div
          variants={SHAPE_ENTER_VARIANTS}
          className="absolute -bottom-1/4 -left-1/4 w-[60vw] h-[60vw] bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000 mix-blend-multiply filter pointer-events-none z-0"
        ></motion.div>


        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
             variants={{
              visible: { transition: { staggerChildren: 0.1 } },
             }}
             className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          >
            <motion.div custom={0} variants={TEXT_ENTER_VARIANTS} className="mb-4 overflow-hidden">
              <Badge variant="outline" className="py-2 px-4 text-sm md:text-base">Available for Freelance</Badge>
            </motion.div>

            <motion.h1
              custom={1}
              variants={TEXT_ENTER_VARIANTS}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight overflow-hidden"
            >
              Hi, I'm Stanley.
              <br />
              <div className="inline-block relative h-[1.2em] overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    className="text-sky-500 dark:text-sky-400 inline-block"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {roles && roles.length > 0 ? roles[currentRoleIndex] : "Developer"}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            <motion.p
              custom={2}
              variants={TEXT_ENTER_VARIANTS}
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8"
            >
              I'm a tech enthusiast with a commitment to lifelong learning, currently studying Computer Science at Bina Nusantara (Binus) University. With around a year of professional experience, I thrive on exploring new technologies and solving complex problems. I also have a strong interest in Web3 and AI, and I’m passionate about tinkering and experimenting with these technologies to continuously expand my skill set.
            </motion.p>

            <motion.div
              custom={3}
              variants={TEXT_ENTER_VARIANTS}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" asChild className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white">
                <Link href="/projects">
                  Lihat Proyek Saya <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-400 dark:hover:text-sky-400 transition-colors">
                <Link href="#contact">Hubungi Saya</Link>
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={TEXT_ENTER_VARIANTS}
              className="flex gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://github.com/StanleyChristianDarmawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "icon", className: "hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-400 dark:hover:text-sky-400 transition-colors" })}
                >
                  <Github className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://www.linkedin.com/in/stanley-christian-darmawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "icon", className: "hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-400 dark:hover:text-sky-400 transition-colors" })}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="mb-16">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Experience
                </h1>
              </div>
              <div>
                <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold tracking-tight mb-8">
                  <Briefcase className="h-7 w-7 text-sky-500 dark:text-sky-400" />
                  Career
                </h3>
                <div className="flex flex-col gap-8">
                  {experienceItems && experienceItems.map((item, index) => (
                    <motion.div
                      key={item.slug + "-exp"}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={FADE_IN_UP_VARIANTS}
                    >
                      <TimelineCard
                        title={item.title}
                        subtitle={item.company}
                        date={item.date}
                        location={item.location}
                        employmentType={item.employmentType}
                        contentNode={experienceNodes[index]}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="h-20" />
              <div>
                <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold tracking-tight mb-8">
                  <GraduationCap className="h-7 w-7 text-sky-500 dark:text-sky-400" />
                  Education
                </h3>
                <div className="flex flex-col gap-8">
                  {educationItems && educationItems.map((item, index) => (
                    <motion.div
                      key={item.slug + "-edu"}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={FADE_IN_UP_VARIANTS}
                    >
                      <TimelineCard
                        title={item.degree}
                        subtitle={item.institution}
                        date={item.date}
                        location={item.location}
                        contentNode={educationNodes[index]}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 lg:sticky lg:top-28 h-full">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  TechStack
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                {skillGroups && skillGroups.map((group) => (
                  <Card
                    key={group.slug}
                    className="flex flex-col h-full border transition-all hover:border-sky-500/50 dark:hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-400/10"
                  >
                    <CardHeader>
                      <CardTitle>{group.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-3">
                        {group.skills && group.skills.map((skill) => (
                          <SkillBadge key={skill} name={skill} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 dark:bg-card">
         <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            Project
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
            some of my projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects && featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-400 dark:hover:text-sky-400 transition-colors">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Want to work together?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Send me a message. I'd love to hear your ideas.
          </p>
          <Button size="lg" asChild className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white">
            <Link href="mailto:stanleychristiandarmawan@gmail.com">
              Send Email
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}