import React, { useState } from "react";
import "./ProductPage.css";
import WishlistIcon from "../assets/WishlistBlack.svg";     
import WishlistIconWhite from "../assets/WishlistWhite.svg"; 

const ProductPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false); 

  
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <div className="product-page">
      {/* Галерея изображений */}
      

      {/* Информация о товаре */}
      <div className="product-info">
        <h1 className="product-name">MERED Antiterror Hoodie (Red Logo)</h1>
        <p className="product-description">
          The anti/terror hoodie by MERED is a manifesto against fear and
          injustice. Created amidst an anxious present, it reflects the reality
          of the modern world.
        </p>

        <ul className="product-details">
          <li><strong>Artist:</strong> Daniel Stetsyuk</li>
          <li><strong>Material:</strong> Cotton</li>
          <li><strong>Fit:</strong> Check size chart</li>
          <li><strong>Delivery:</strong> 30 Days Return Policy</li>
          <li><strong>Customs & Import Taxes:</strong> Covered</li>
        </ul>

        {/* Блок выбора размера */}
        <div className="product-sizes">
          <div className="size-buttons">
            <button className="size-option">S</button>
            <button className="size-option">M</button>
            <button className="size-option">L</button>
            <button className="size-option">XL</button>
            <button className="size-option">2XL</button>
            <button className="size-option">3XL</button>
            <button
              className={`bookmark ${isBookmarked ? "active" : ""}`}
              onClick={toggleBookmark}
            >
              <img
                src={isBookmarked ? WishlistIconWhite : WishlistIcon}
                alt="Wishlist"
                className="bookmark-icon"
              />
            </button>
          </div>
          <div className="add-to-cart-container">
            <button className="add-to-cart">Add to Cart</button>
            <span className="price">350₪</span>
          </div>
        </div>
      </div>
      <div className="image-gallery">
        <div className="swiper-slide">
          <img src="path_to_image_1" alt="Product Front" />
        </div>
        <div className="swiper-slide">
          <img src="path_to_image_2" alt="Product Back" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;