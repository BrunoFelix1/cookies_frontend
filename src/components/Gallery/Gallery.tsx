import "./Gallery.css";

export default function Gallery() {
  const galleryItems = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>
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
