import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        if (existingItem.cartQuantity >= product.quantity) {
          alert("No more stock available!");
          return previousCart;
        }

        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity + 1
              }
            : item
        );
      }

      if (product.quantity <= 0) {
        alert("Product is out of stock!");
        return previousCart;
      }

      return [
        ...previousCart,
        {
          ...product,
          cartQuantity: 1
        }
      ];
    });
  }

  function increaseQuantity(id) {
    setCart((previousCart) =>
      previousCart.map((item) => {
        if (item.id === id && item.cartQuantity < item.quantity) {
          return {
            ...item,
            cartQuantity: item.cartQuantity + 1
          };
        }

        return item;
      })
    );
  }

  function decreaseQuantity(id) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                cartQuantity: item.cartQuantity - 1
              }
            : item
        )
        .filter((item) => item.cartQuantity > 0)
    );
  }

  function removeItem(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

return (
  <BrowserRouter>
    <Navbar cartCount={cartCount} />

    <main className="main-content">
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </main>

    <Footer />
  </BrowserRouter>
);
}

export default App;