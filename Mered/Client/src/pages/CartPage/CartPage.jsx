import React, { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mered Antiterror T-Shirt",
      price: 150,
      size: "S",
      quantity: 2,
      shop: "MERED",
    },
    {
      id: 2,
      name: "CLOTURES noLimits T-Shirt",
      price: 150,
      size: "S",
      quantity: 1,
      shop: "CLOTURES",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const shippingCost = 50.99;

  return (
    <div className="cart-page">
      {cartItems.map((shop) => (
        <div key={shop.shop} className="cart-section">
          <h2>{shop.shop}</h2>
          {cartItems
            .filter((item) => item.shop === shop.shop)
            .map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={`https://via.placeholder.com/100`} // Замените на URL ваших изображений
                  alt={item.name}
                />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Price: ₪{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
        </div>
      ))}
      <div className="checkout-section">
        <div>
          <p>Items: ₪{calculateTotal(cartItems)}</p>
          <p>Estimated Shipping: ₪{shippingCost}</p>
          <p>Total: ₪{(calculateTotal(cartItems) + shippingCost).toFixed(2)}</p>
        </div>
        <button className="checkout-button">Checkout All</button>
      </div>
    </div>
  );
};

export default CartPage;
