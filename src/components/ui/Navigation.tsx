"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import CONFIG from "@/lib/config";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = [
        "experience",
        "enjoy",
        "details",
        "investment",
        "who",
        "faq",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "experience", label: "Experience" },
    { id: "enjoy", label: "What You'll Enjoy" },
    { id: "details", label: "Details" },
    { id: "investment", label: "Investment" },
    { id: "who", label: "Who It's For" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? "nav--scrolled" : ""}`}>
      <div className="container">
        <div className="nav__inner">
          <div className="nav__brand">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav__logo"
            >
              Ghana Valentine's 2026
            </button>
          </div>

          <div className="nav__links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav__link ${activeSection === link.id ? "nav__link--active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="nav__cta">
            <Button
              href={CONFIG.PAYMENT_URL}
              variant="primary"
              trackLocation="nav"
            >
              Reserve Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
