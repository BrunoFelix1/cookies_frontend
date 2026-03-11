import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [active, setActive] = useState<string>("home");

  const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, Math.round(startPosition + distance * ease));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      setActive(targetId);
      smoothScrollTo(offsetPosition, 900);
    }
  };

  useEffect(() => {
    const ids = ["home", "about", "cookies", "gallery", "contact"];
    const sections: Element[] = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActive(id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const handleLogoClick = () => {
    setActive("home");
    smoothScrollTo(0, 900);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="/logo_invertida.png"
            alt="Cookie Shop logo"
            onClick={handleLogoClick}
          />
        </div>
        <nav className="nav">
          <a
            href="#home"
            className={`nav-link ${active === "home" ? "active" : ""}`}
            onClick={handleNavClick}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${active === "about" ? "active" : ""}`}
            onClick={handleNavClick}
          >
            Sobre
          </a>
          <a
            href="#cookies"
            className={`nav-link ${active === "cookies" ? "active" : ""}`}
            onClick={handleNavClick}
          >
            Cookies
          </a>
          <a
            href="#gallery"
            className={`nav-link ${active === "gallery" ? "active" : ""}`}
            onClick={handleNavClick}
          >
            Galeria
          </a>
          <a
            href="#contact"
            className={`nav-link ${active === "contact" ? "active" : ""}`}
            onClick={handleNavClick}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
