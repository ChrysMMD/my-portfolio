"use client";

import { useState } from "react";
import Image from "next/image";
import "../style/card.css";
import ImageLightbox from "../components/ImageLightbox.jsx";

export default function ProjectCard({ title, excerpt, imageSrc }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="projectCard projectCardBtn"
        onClick={() => setOpen(true)}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="cardImg"
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 40vw"
        />

        <div className="cardOverlay">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardText">{excerpt}</p>
          <span className="cardCta">Show full image →</span>
        </div>
      </button>

      {open && (
        <ImageLightbox
          src={imageSrc}
          alt={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
