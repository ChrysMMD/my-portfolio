import Link from "next/link";
import Image from "next/image";
import "../style/card.css";
import { projects } from "../data/projects.js";

export default function ProjectCard({ slug, title, excerpt, imageSrc }) {
  return (
    <Link href={`/projects/${slug}`} className="projectCard">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="cardImg"
        style={{ objectFit: "cover", objectPosition: "top" }}
        sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 40vw"
      />

      <div className="cardOverlay">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardText">{excerpt}</p>
        <span className="cardCta">Se projekt →</span>
      </div>
    </Link>
  );
}
