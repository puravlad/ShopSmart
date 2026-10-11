import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="page-container">
        <h2>Product not found!</h2>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="details-card">
        <img src={product.image} alt={product.name} />

        <div>
          <p className="category">{product.category}</p>

          <h1>{product.name}</h1>

          <h2>₹{product.price.toLocaleString("en-IN")}</h2>

          <p>{product.description}</p>

          <p>Available Stock: {product.quantity}</p>

          <button
            onClick={() => addToCart(product)}
            disabled={product.quantity === 0}
          >
            Add to Cart
          </button>

          <br />

          <Link to="/products" className="back-link">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;