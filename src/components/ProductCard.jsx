import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <p className="category">{product.category}</p>

        <h3>{product.name}</h3>

        <h3>
          ₹{product.price.toLocaleString("en-IN")}
        </h3>

        <p>Available: {product.quantity}</p>

        <div className="product-actions">
          <Link
            to={`/products/${product.id}`}
            className="details-button"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            disabled={product.quantity === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
