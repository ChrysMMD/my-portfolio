"use client";

import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import "../../style/project-slug.css";

export default function ProjectSlugClient({ project }) {
  useEffect(() => {
    document.body.className = "theme-case";
    return () => (document.body.className = "");
  }, []);

  return (
    <section className="project_grid">
      <div className="carousel">
        <Carousel images={project.images} title={project.title} aspect="16/9" />
      </div>

      <div className="text_container">
        <h1 className="bigTitle">{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>

        <div className="twoCols">
          <p>{project.bodyLeft}</p>
          <p>{project.bodyRight}</p>
        </div>
      </div>
    </section>
  );
}
