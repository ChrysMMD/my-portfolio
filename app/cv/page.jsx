"use client";

import { useEffect } from "react";
import Image from "next/image";
import "../style/cv.css";

export default function Home() {
  useEffect(() => {
    document.body.className = "theme-cv";
    return () => (document.body.className = "");
  }, []);

  return (
    <>
      <div className="grid">
        <div className="cv-header">
          <Image
            src="/img/cv.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="content-grid">
          <div className="left">
            <div className="units">
              <div className="number">
                <p>2011</p>
                <p>nu</p>
              </div>
              <div className="text-box">
                <h3>digital designer</h3>
                <p>
                  <strong>Freelance</strong>
                </p>
                <ul>
                  <li>Branding</li>
                  <li>Web design</li>
                  <li>Logo design</li>
                  <li>
                    Digital materials (brochures, business cards, images, etc.)
                  </li>
                </ul>
              </div>
            </div>

            <div className="units">
              <div className="number">
                <p>2015</p>
                <p>2023</p>
              </div>
              <div className="text-box">
                <h3>Eventkoordinator</h3>
                <p>
                  <strong>Voluntere</strong>
                </p>
                <ul>
                  <li>Logistics planning</li>
                  <li>Communication &amp; meeting scheduling</li>
                  <li>Concept development</li>
                  <li>Member management</li>
                  <li>Administrative tasks</li>
                </ul>
              </div>
            </div>

            <div className="units">
              <div className="number">
                <p>2022</p>
                <p>2023</p>
              </div>
              <div className="text-box">
                <h3>SoMe-Manager</h3>
                <p>
                  <strong>Vidar-regimentet (voluntere)</strong>
                </p>
                <ul>
                  <li>Setup of digital materials</li>
                  <li>Image editing</li>
                  <li>Planning Facebook posts</li>
                  <li>Copywriting</li>
                </ul>
              </div>
            </div>

            <div className="units">
              <div className="number">
                <p>2022</p>
                <p>2023</p>
              </div>
              <div className="text-box">
                <h3>Eventmanager</h3>
                <p>
                  <strong>Voluntere</strong>
                </p>
                <ul>
                  <li>
                    I independently organized and ran a large, successful
                    live-action role-playing event in Holte with 40
                    participants. I was responsible for booking and selecting
                    the location, recruiting and managing staff, setting up the
                    event, developing the story, creating materials for
                    character creation and world-building, planning and managing
                    NPCs, producing player information materials, scheduling,
                    and overall event coordination.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="container">
              <div>
                <h2>Skills</h2>
                <ul className="skills-list">
                  <li>Design</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>Next / React</li>
                  <li>Photoshop</li>
                  <li>Figma</li>
                  <li>Branding</li>
                  <li>SoMe</li>
                  <li>Project management</li>
                  <li>Writing</li>
                  <li>UX / UI</li>
                  <li>WordPress (Elementor)</li>
                </ul>
              </div>
              <div>
                <h2>Languages</h2>
                <ul class="skills-list">
                  <li>Danish (main)</li>
                  <li>English</li>
                </ul>
              </div>
              <div>
                <h2>Education</h2>
                <p>
                  <strong>Multimediedesigner</strong>
                </p>
                <p>Erhvervsakademiet København </p>
                <p>2023 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
