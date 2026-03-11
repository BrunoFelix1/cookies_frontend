import "./OrderNow.css";

export default function OrderNow() {
  return (
    <section className="order-now">
      <div className="order-now-container">
        <span className="order-eyebrow">
          Feito com amor, entregue com cuidado
        </span>
        <h2 className="order-title">Pronto para experimentar?</h2>
        <p className="order-subtitle">
          Encomende agora e receba cookies artesanais fresquinhos na sua porta.
        </p>
        <a target="_blank" rel="noopener noreferrer" className="order-button">
          Fazer Pedido
        </a>
      </div>
    </section>
  );
}
