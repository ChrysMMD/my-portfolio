"use client";

import { useEffect } from "react";
import Image from "next/image";
import "../style/project.css";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  useEffect(() => {
    document.body.className = "theme-projects";
    return () => (document.body.className = "");
  }, []);
  return (
    <>
      <section className="grid-projects">
        <div className="titel-project">
          <h1>Projekter</h1>
        </div>
        <div className="project-container">
          <section className="card-container">
            {" "}
            {projects.map((p) => (
              <ProjectCard
                key={p.slug}
                title={p.title}
                excerpt={p.excerpt}
                imageSrc={p.imageSrc}
              />
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
