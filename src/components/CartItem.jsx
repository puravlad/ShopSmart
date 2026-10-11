function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>Price: ₹{item.price.toLocaleString("en-IN")}</p>

        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>

          <span>{item.cartQuantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
            disabled={item.cartQuantity >= item.quantity}
          >
            +
          </button>
        </div>

        <p>
          Subtotal: ₹
          {(item.price * item.cartQuantity).toLocaleString("en-IN")}
        </p>

        <button
          className="remove-button"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;