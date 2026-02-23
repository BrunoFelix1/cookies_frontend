import "./FeaturedCookies.css";

const cookies = [
  { name: "Chocolate Chip", id: 1 },
  { name: "Oatmeal Raisin", id: 2 },
  { name: "Sugar Cookie", id: 3 },
  { name: "Peanut Butter", id: 4 },
];

export default function FeaturedCookies() {
  return (
    <section className="featured-cookies" id="cookies">
      <div className="featured-cookies-container">
        <h2 className="section-title">Featured Cookies</h2>
        <div className="cookies-grid">
          {cookies.map((cookie) => (
            <div key={cookie.id} className="cookie-card">
              <div className="cookie-image">
                {/* Placeholder para imagem do cookie */}
              </div>
              <h3 className="cookie-name">{cookie.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
