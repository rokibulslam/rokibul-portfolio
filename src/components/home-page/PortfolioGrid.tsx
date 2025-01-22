"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  coverImage: string;
  technologies: string[];
  liveSite: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Project 1",
    coverImage: "/placeholder.svg",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveSite: "https://example.com",
    githubLink: "https://github.com/example/project1",
  },
  {
    id: "2",
    title: "Project 2",
    coverImage: "/placeholder.svg",
    technologies: ["Vue.js", "Nuxt.js", "SCSS"],
    liveSite: "https://example.com",
    githubLink: "https://github.com/example/project2",
  },
];

const PortfolioGrid = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-0">
              <Image
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href={project.liveSite}>Live Site</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={project.githubLink}>GitHub</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
