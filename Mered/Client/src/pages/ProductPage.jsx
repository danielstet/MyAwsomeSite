import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./ProductPage.css";
import WishlistIcon from "../assets/WishlistBlack.svg";
import WishlistIconWhite from "../assets/WishlistWhite.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";

const ProductPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleSection = (section) => {
    setOpenSection((prevState) => (prevState === section ? null : section));
  };

  return (
    <div className="product-page">
      {/* Swiper Image Gallery */}
      <div className="image-gallery">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={photo1} alt="Product Front" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} alt="Product Back" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} alt="Product Side" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} alt="Product Detail" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h1 className="product-name">MERED Antiterror Hoodie (Red Logo)</h1>
        <p className="product-description">
          The anti/terror hoodie by MERED is a manifesto against fear and
          injustice. Created amidst an anxious present, it reflects the reality
          of the modern world.
        </p>

        {/* Dropdown Sections */}
        <div className="product-details">
        <div>
    <button
      className="dropdown-header"
      onClick={() => toggleSection("artist")}
    >
      <span className="dropdown-left">
        <span className="icon">👤</span>
        <span className="title">Artist</span>
      </span>
      <span className="arrow">{openSection === "artist" ? "▲" : "▼"}</span>
    </button>
    {openSection === "artist" && (
      <div className="dropdown-content">Daniel Stetsyuk</div>
    )}
  </div>

  <div>
    <button
      className="dropdown-header"
      onClick={() => toggleSection("material")}
    >
      <span className="dropdown-left">
        <span className="icon">✂️</span>
        <span className="title">Material</span>
      </span>
      <span className="arrow">
        {openSection === "material" ? "▲" : "▼"}
      </span>
    </button>
    {openSection === "material" && (
      <div className="dropdown-content">Cotton</div>
    )}
  </div>

  <div>
    <button
      className="dropdown-header"
      onClick={() => toggleSection("fit")}
    >
      <span className="dropdown-left">
        <span className="icon">📏</span>
        <span className="title">Fit: What’s my size?</span>
      </span>
      <span className="arrow">{openSection === "fit" ? "▲" : "▼"}</span>
    </button>
    {openSection === "fit" && (
      <div className="dropdown-content">Check size chart</div>
    )}
  </div>

  <div>
    <button
      className="dropdown-header"
      onClick={() => toggleSection("delivery")}
    >
      <span className="dropdown-left">
        <span className="icon">📦</span>
        <span className="title">Delivery Information</span>
      </span>
      <span className="arrow">
        {openSection === "delivery" ? "▲" : "▼"}
      </span>
    </button>
    {openSection === "delivery" && (
      <div className="dropdown-content">30 Days Return Policy</div>
    )}
  </div>

  <div>
    <button
      className="dropdown-header"
      onClick={() => toggleSection("taxes")}
    >
      <span className="dropdown-left">
        <span className="icon">💵</span>
        <span className="title">Customs & Import Taxes</span>
      </span>
      <span className="arrow">{openSection === "taxes" ? "▲" : "▼"}</span>
    </button>
    {openSection === "taxes" && (
      <div className="dropdown-content">Covered</div>
    )}
  </div>
        </div>

        {/* Size Selection */}
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
    </div>
  );
};

export default ProductPage;