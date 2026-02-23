import "./Gallery.css";

export default function Gallery() {
  const galleryItems = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="gallery-eyebrow">Nossa Coleção</span>
          <h2 className="section-title">Galeria</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item} className="gallery-item">
              {/* Placeholder para imagem da galeria */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
