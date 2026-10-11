import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p className="empty-message">No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
