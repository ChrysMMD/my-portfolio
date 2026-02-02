import { notFound } from "next/navigation";
import { projects } from "../../data/projects.js";
import "../../style/project-slug.css";
import Carousel from "../../components/Carousel.jsx";

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="projectPage">
      {/* TOP: “hero”/mockup area */}
      <section className="hero">
        <div className="heroInner">
          <Carousel images={project.images} title={project.title} />
        </div>
      </section>

      {/* TITLE area (som i dit screenshot) */}
      <section className="titleBlock">
        <div className="titleInner">
          <h1 className="bigTitle">{project.title}</h1>
          <p className="subtitle">{project.subtitle}</p>
        </div>
      </section>

      {/* TEXT area (2 kolonner som dit layout) */}
      <section className="content">
        <div className="contentInner">
          <p className="intro">{project.intro}</p>

          <div className="twoCols">
            <p>{project.bodyLeft}</p>
            <p>{project.bodyRight}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
