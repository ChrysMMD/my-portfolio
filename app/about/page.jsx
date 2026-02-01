"use client";

import { useEffect } from "react";
import Image from "next/image";
import "../style/about.css";

export default function About() {
  useEffect(() => {
    document.body.className = "theme-about";
    return () => (document.body.className = "");
  }, []);
  return (
    <>
      <section className="grid">
        <div className="billede">
          <Image
            src="/img/meBW.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="titel">
          <h1>Om mig</h1>
        </div>
        <div className="tekst">
          <p>
            Jeg er en kreativ frontend-udvikler med passion for design, struktur
            og brugervenlige løsninger.{" "}
          </p>

          <p>
            Jeg trives i mødet mellem det visuelle og det tekniske og elsker at
            forvandle idéer til intuitive og indbydende brugeroplevelser.{" "}
          </p>

          <p>
            Jeg er nysgerrig, detaljeorienteret og motiveres af at lære nyt. For
            mig handler frontend ikke kun om kode – men om mennesker.
          </p>
        </div>
        <div className="fakta">
          <p>
            <strong>KALDENAVNE:</strong> CHRIS, CHRYS, CHRYLLE
            <strong> STYRKER:</strong> OVERBLIK, STRUKTURERET, LÆREVILLIG,
            GÅPÅMOD, ANSVARLIG<strong> SVAGHEDER:</strong> OSTEPOPS{" "}
            <strong>HOBBYER:</strong> TRÆNING, TEGNING, GAMING, STORYTELLING
          </p>
        </div>
      </section>
    </>
  );
}
