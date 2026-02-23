import "./Hero.css";
import { useState, useEffect, useRef, useCallback } from "react";

const CAROUSEL_IMAGES = [
  {
    src: "/cookiesOnTable.jpg",
    alt: "Delicious cookies on a table",
    eyebrow: "Artesanal & Fresquinho",
    title: "Cookies Artesanais",
    tagline: "Uma mordida de felicidade",
    description:
      "Preparados diariamente com ingredientes selecionados e muito carinho, cada cookie é uma experiência única.",
  },
  {
    src: "/Focaccia.jpg",
    alt: "Focaccia artesanal",
    eyebrow: "Receita Tradicional",
    title: "Focaccia Artesanal",
    tagline: "Crocante por fora, macia por dentro",
    description:
      "Feita com azeite premium e temperos selecionados, nossa focaccia tem textura macia e sabor incomparável.",
  },
  {
    src: "/cafeComCookie.png",
    alt: "Café delicioso",
    eyebrow: "Seleção Especial",
    title: "Cafés Especiais",
    tagline: "O ritual perfeito para o seu dia",
    description:
      "Grãos de origem única, torrados artesanalmente para entregar o melhor sabor em cada xícara.",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection("left");
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length,
      );
    }, 7000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const goTo = (nextIndex: number, dir: "left" | "right") => {
    setDirection(dir);
    setCurrentImageIndex(nextIndex);
    startInterval();
  };

  const handlePrev = () => {
    goTo(
      (currentImageIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length,
      "right",
    );
  };

  const handleNext = () => {
    goTo((currentImageIndex + 1) % CAROUSEL_IMAGES.length, "left");
  };

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <img
          key={`img-${currentImageIndex}-${direction}`}
          className="hero-image"
          src={CAROUSEL_IMAGES[currentImageIndex].src}
          alt={CAROUSEL_IMAGES[currentImageIndex].alt}
          data-direction={direction}
        />
        <div className="hero-overlay"></div>
        <button
          className="hero-arrow hero-arrow-prev"
          onClick={handlePrev}
          aria-label="Anterior"
        >
          &#8249;
        </button>
        <button
          className="hero-arrow hero-arrow-next"
          onClick={handleNext}
          aria-label="Próximo"
        >
          &#8250;
        </button>
        <div
          className="hero-content"
          key={`${currentImageIndex}-${direction}`}
          data-direction={direction}
        >
          <span className="hero-eyebrow">
            {CAROUSEL_IMAGES[currentImageIndex].eyebrow}
          </span>
          <h1 className="hero-title">
            {CAROUSEL_IMAGES[currentImageIndex].title}
          </h1>
          <p className="hero-tagline">
            {CAROUSEL_IMAGES[currentImageIndex].tagline}
          </p>
          <p className="hero-description">
            {CAROUSEL_IMAGES[currentImageIndex].description}
          </p>
          <button className="hero-cta" onClick={scrollToOrder}>
            Peça Agora
            <span className="hero-cta-arrow">→</span>
          </button>
        </div>
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
      </div>
    </section>
  );
}
