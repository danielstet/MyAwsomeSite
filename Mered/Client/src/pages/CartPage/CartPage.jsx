import React, { useState } from "react";
import "./CartPage.css";

// Импортируем локальные изображения из папки assets
import tShirt1 from "../../assets/1.jpg";
import tShirt2 from "../../assets/2.jpg";
import tShirt3 from "../../assets/3.webp";
import tShirt4 from "../../assets/4.webp";

const CartPage = () => {
  // Пример данных в корзине
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      shop: "MERED",
      name: "Mered Antiterror T-Shirt",
      price: 150,
      size: "S",
      quantity: 2,
      itemNumber: "NB230909",
    },
    {
      id: 2,
      shop: "MERED",
      name: "Mered Antiterror T-Shirt",
      price: 150,
      size: "S",
      quantity: 1,
      itemNumber: "NB230900",
    },
    {
      id: 3,
      shop: "CLOTURES",
      name: "CLOTURES noLimits T-Shirt",
      price: 150,
      size: "S",
      quantity: 1,
      itemNumber: "NB231000",
    },
  ]);

  // Удаление товара
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Группируем товары по shop
  const groupedByShop = cartItems.reduce((acc, item) => {
    if (!acc[item.shop]) {
      acc[item.shop] = [];
    }
    acc[item.shop].push(item);
    return acc;
  }, {});

  // Подсчитываем сумму по списку товаров
  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Допустим, считаем единую доставку для каждого бренда
  const shippingCostPerShop = 50.99;

  // Общий подсчет для всех товаров
  const allItemsTotal = calculateTotal(cartItems);
  // Сумма доставок для каждого бренда
  const totalShipping = Object.keys(groupedByShop).length * shippingCostPerShop;
  const grandTotal = allItemsTotal + totalShipping;

  // Сопоставим ID товара и нужную картинку
  const imageMap = {
    1: tShirt1,
    2: tShirt2,
    3: tShirt3,
    4: tShirt4,
  };

  return (
    <div className="page-container">
      {/* Основной контент */}
      <div className="main-content">
        <div className="left-column">
          {/* Перебираем все бренды (shop) */}
          {Object.keys(groupedByShop).map((shopName) => {
            const items = groupedByShop[shopName];
            const itemsTotal = calculateTotal(items);

            return (
              <div key={shopName} className="cart-section">
                <h2 className="shop-title">{shopName}</h2>
                {items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img
                      src={imageMap[item.id] || tShirt1}
                      alt={item.name}
                      className="cart-image"
                    />
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <p>Size: {item.size}</p>
                      <p>Price: ₪{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Item#: {item.itemNumber}</p>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* Итог по данному бренду */}
                <div className="brand-checkout">
                  <div className="brand-total-line">
                    <span>Items:</span>
                    <span>₪{itemsTotal}</span>
                  </div>
                  <div className="brand-total-line">
                    <span>Estimated shipping:</span>
                    <span>₪{shippingCostPerShop.toFixed(2)}</span>
                  </div>
                  <div className="brand-total-line">
                    <span>Total:</span>
                    <span>₪{(itemsTotal + shippingCostPerShop).toFixed(2)}</span>
                  </div>
                  <button className="checkout-brand-btn">
                    Checkout {items.length} Items
                  </button>
                </div>
              </div>
            );
          })}

          {/* Общий «Checkout All» */}
          <div className="all-checkout">
            <div className="all-checkout-line">
              <span>Items:</span>
              <span>₪{allItemsTotal}</span>
            </div>
            <div className="all-checkout-line">
              <span>Estimated shipping:</span>
              <span>₪{totalShipping.toFixed(2)}</span>
            </div>
            <div className="all-checkout-line">
              <span>Total:</span>
              <span>₪{grandTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-all-btn">Checkout All</button>
          </div>
        </div>

        {/* Правая колонка — опциональные элементы: инфоблок, баннеры, и т.п. */}
        <div className="right-column">
          <div className="info-box">
            <ul>
              <li>30 Day Return Policy</li>
              <li>Shipping Policy</li>
              <li>Samp policy: this image i own your soul bitch</li>
            </ul>
          </div>
          <div className="ad-box">
            <img
              src="https://via.placeholder.com/200x100?text=Orange+Ad"
              alt="Orange Ad"
            />
            <img
              src="https://via.placeholder.com/200x100?text=Vulkan"
              alt="Vulkan Ad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
