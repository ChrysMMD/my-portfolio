"use client";

import "../style/menu.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Luk menu når man skifter side
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC luk + scroll lock
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <nav className="menu" aria-label="Main navigation">
        {/* Desktop menu */}
        <ul className="menu__list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About me</Link>
          </li>
          <li>
            <Link href="/portfolio">Projects</Link>
          </li>
          <li>
            <Link href="/cv">CV</Link>
          </li>
        </ul>

        {/* Burger (mobil) */}
        <button
          className={`burger ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </button>
      </nav>

      {/* Mobil menu overlay + panel */}
      <div className={`mobile ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile__overlay" onClick={() => setOpen(false)} />

        <div
          className="mobile__panel"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <ul className="mobile__list">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                About me
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/cv" onClick={() => setOpen(false)}>
                CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
