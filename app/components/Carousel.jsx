"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import "../style/carousel.css";

export default function Carousel({ images = [], title = "Project images" }) {
  const safeImages = useMemo(
    () =>
      images
        .filter(Boolean)
        .map((img) =>
          typeof img === "string" ? { src: img, fit: "cover" } : img,
        )
        .filter((img) => img?.src),
    [images],
  );

  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);

  const count = safeImages.length;
  if (!count) return null;

  const scrollToIndex = (i) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const slides = viewport.querySelectorAll("[data-slide]");
    const slide = slides[i];
    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setIndex(i);
  };

  const prev = () => scrollToIndex((index - 1 + count) % count);
  const next = () => scrollToIndex((index + 1) % count);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, count]);

  // Når viewport ændrer størrelse → recenter aktiv slide
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const ro = new ResizeObserver(() => {
      scrollToIndex(index);
    });
    ro.observe(viewport);

    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section className="wideSlider" aria-label={title}>
      <div className="wideViewportWrap">
        <div className="wideViewport" ref={viewportRef}>
          {safeImages.map((img, i) => {
            const fit = img.fit ?? "cover";

            return (
              <button
                key={img.src + i}
                type="button"
                className={`wideSlide ${i === index ? "isActive" : ""}`}
                onClick={() => scrollToIndex(i)}
                data-slide
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
              >
                <div className="wideMedia">
                  {/* Blurred background layer (altid cover) */}
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="bgBlur"
                    quality={60}
                    sizes="(max-width: 700px) 92vw, (max-width: 1100px) 80vw, 980px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />

                  {/* Foreground layer (cover eller contain) */}
                  <Image
                    src={img.src}
                    alt={`${title} ${i + 1} of ${count}`}
                    fill
                    quality={90}
                    priority={i === 0}
                    sizes="(max-width: 700px) 92vw, (max-width: 1100px) 80vw, 980px"
                    className={fit === "contain" ? "fgContain" : "fgCover"}
                    style={{
                      objectFit: fit,
                      objectPosition: fit === "contain" ? "center" : "top",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {count > 1 && (
          <>
            <button
              className="wideNav left"
              onClick={prev}
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>
            <button
              className="wideNav right"
              onClick={next}
              aria-label="Next image"
              type="button"
            >
              ›
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="wideDots" aria-label="Choose image">
          {safeImages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`wideDot ${i === index ? "active" : ""}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </section>
  );
}
