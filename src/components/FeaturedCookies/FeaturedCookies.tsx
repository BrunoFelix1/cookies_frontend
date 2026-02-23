import { useState } from "react";
import "./FeaturedCookies.css";

const cookies = [
  { name: "Cacau Duo", id: 1, img: "/cookies/cookie1.png" },
  { name: "Iced Cookie", id: 2, img: "/cookies/cookie2.png" },
  { name: "Cookie Nutella", id: 3, img: "/cookies/cookie3.png" },
  { name: "BuguQueijo", id: 4, img: "/cookies/cookie4.png" },
];

export default function FeaturedCookies() {
  const [current, setCurrent] = useState(0);
  const total = cookies.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="featured-cookies" id="cookies">
      <div className="featured-cookies-container">
        <div className="cookies-header">
          <span className="cookies-eyebrow">Artesanal &amp; Delicioso</span>
          <h2 className="section-title">Nossos Cookies</h2>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-btn prev"
            onClick={prev}
            aria-label="Anterior"
          >
            &#8249;
          </button>

          <div className="carousel-track">
            {cookies.map((cookie, idx) => {
              const offset = (((idx - current) % total) + total) % total;
              const pos =
                offset === 0
                  ? "center"
                  : offset === 1
                    ? "right"
                    : offset === total - 1
                      ? "left"
                      : "hidden";
              return (
                <div
                  key={cookie.id}
                  className={`cookie-card pos-${pos}`}
                  onClick={
                    pos === "right" ? next : pos === "left" ? prev : undefined
                  }
                >
                  <div className="cookie-image">
                    <img
                      src={cookie.img}
                      alt={cookie.name}
                      className="cookie-img"
                    />
                  </div>
                  <h3 className="cookie-name">{cookie.name}</h3>
                </div>
              );
            })}
          </div>

          <button
            className="carousel-btn next"
            onClick={next}
            aria-label="Próximo"
          >
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {cookies.map((_, idx) => (
            <button
              key={idx}
              className={`dot${idx === current ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir para cookie ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
