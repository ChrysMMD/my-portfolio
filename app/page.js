"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.body.className = "theme-home";
    return () => (document.body.className = "");
  }, []);

  return (
    <div className="hero-text">
      <div className="hero-rail">
        <h1 className="hero-title">
          <span className="hero-line">PORT</span>
          <span className="hero-line">FOLIO</span>
        </h1>

        <h2 className="hero-subtitle">Frontend – Digital design – UX/UI</h2>

        <h3 className="hero-name">CHRYS</h3>
      </div>
    </div>
  );
}
