"use client";

import { useEffect } from "react";
import Image from "next/image";
import "../style/lightbox.css";

export default function ImageLightbox({ src, alt = "", onClose }) {
  useEffect(() => {
    // lås scroll når lightbox er åben
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!src) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <button
        className="lbClose"
        type="button"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* stop klik inde på billedet fra at lukke */}
      <div className="lbInner" onMouseDown={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
