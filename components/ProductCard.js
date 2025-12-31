export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <span className="wishlist">♡</span>
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">
          Sign in or Create an account to see pricing
        </p>
      </div>
    </article>
  );
}
