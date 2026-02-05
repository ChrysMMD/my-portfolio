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
            Jeg er en nysgerrig og kreativ multimediedesigner med en stor
            kærlighed til både design, ux og frontend. Jeg trives i krydsfeltet
            mellem det visuelle og det tekniske, hvor jeg kan omsætte idéer til
            brugervenlige, æstetiske og gennemarbejdede digitale løsninger.{" "}
          </p>

          <p>
            Jeg går op i hvordan mennesker oplever det, jeg skaber. For mig
            handler godt design ikke kun om at se flot ud, men om at føles
            rigtigt og give mening for brugeren.{" "}
          </p>

          <p>
            Jeg er motiveret af at lære nyt, eksperimentere og udvikle mig – og
            jeg elsker at arbejde med projekter, hvor kreativitet og teknologi
            mødes.
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
