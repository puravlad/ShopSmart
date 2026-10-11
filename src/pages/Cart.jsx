import CartItem from "../components/CartItem";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  return (
    <div className="page-container">
      <h1>My Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Total: ₹{totalPrice.toLocaleString("en-IN")}
            </h2>

            <button
              className="checkout-button"
              onClick={() => alert("Checkout feature coming soon!")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;