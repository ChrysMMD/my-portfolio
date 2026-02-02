"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import "../style/carousel.css";

export default function Carousel({ images = [], title = "Project images" }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  if (!safeImages.length) return null;

  const prev = () =>
    setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  const next = () => setIndex((i) => (i + 1) % safeImages.length);

  return (
    <div className="carousel" aria-label={title}>
      <div className="carouselFrame">
        <Image
          src={safeImages[index]}
          alt={`${title} ${index + 1} of ${safeImages.length}`}
          fill
          priority={index === 0}
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 80vw, 900px"
        />

        <button
          className="carouselBtn prev"
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          className="carouselBtn next"
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="carouselDots" role="tablist" aria-label="Choose image">
        {safeImages.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
