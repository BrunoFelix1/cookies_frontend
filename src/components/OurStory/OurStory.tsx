import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="our-story" id="about">
      <div className="our-story-container">
        <div className="story-content">
          <h2 className="story-title">Our Story</h2>
          <p className="story-text">
            We are passionate bakery, that has been baking and delivering
            quality cookies for over 15 years. Happiness has been our trademark
            since the beginning and promises to be one of many reasons why
            customers love and trust our product and food franchise.
          </p>
          <p className="story-text">
            We provide the best sweet crumbs possible. We believe in quality and
            using only the GREENEST INGREDIENTS possible to provide fresh and
            natural food.
          </p>
          <button className="story-button">Saiba Mais</button>
        </div>
        <img
          src="/chefcooking.jpg"
          alt="Chef Bugududa"
          className="story-image"
        />
      </div>
    </section>
  );
}
