import { useState, useMemo } from "react";
import productsData from "../data/products";
import ProductList from "../components/ProductList";

function Home({ addToCart }) {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category))
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [searchText, category]);

  return (
    <div className="page-container">
      <section className="hero">
        <p className="hero-label">WELCOME TO SHOPSMART</p>

        <h1>Find What You Need.</h1>

        <p>
          Discover useful products for your home, office, and studies.
        </p>
      </section>

      <section className="inventory-section">
        <div className="section-heading">
          <div>
            <h2>Our Products</h2>
            <p>Browse our available inventory.</p>
          </div>

          <span>{filteredProducts.length} Products</span>
        </div>

        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />
      </section>
    </div>
  );
}

export default Home;