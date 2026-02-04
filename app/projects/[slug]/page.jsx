import { notFound } from "next/navigation";
import { projects } from "../../data/projects.js";
import ProjectSlugClient from "./ProjectSlugClient.jsx";

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params; // Next siger params er Promise

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectSlugClient project={project} />;
}
