"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import "../style/lightbox.css";

export default function ImageLightbox({ src, alt = "", onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted || !src) return null;

  return createPortal(
    <div className="lb" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <button
        className="lbClose"
        type="button"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <div className="lbInner" onMouseDown={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>,
    document.body,
  );
}
