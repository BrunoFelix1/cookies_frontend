import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="our-story" id="about">
      <div className="our-story-container">
        <div className="story-content">
          <span className="story-eyebrow">Nossa História</span>
          <h2 className="story-title">Feitos com carinho, desde o início</h2>
          <p className="story-text">
            Somos uma padaria apaixonada pelo que fazemos, assando e entregando
            cookies de qualidade há mais de 15 anos. A felicidade sempre foi
            nossa marca registrada e continua sendo um dos muitos motivos pelos
            quais nossos clientes amam e confiam nos nossos produtos.
          </p>
          <p className="story-text">
            Acreditamos na qualidade e no uso dos ingredientes mais frescos e
            naturais possíveis, para oferecer uma experiência única a cada
            mordida.
          </p>
          <button className="story-button">Saiba Mais →</button>
        </div>
        <div className="story-image-wrapper">
          <img
            src="/chefcooking.jpg"
            alt="Chef Bugududa"
            className="story-image"
          />
        </div>
      </div>
    </section>
  );
}
