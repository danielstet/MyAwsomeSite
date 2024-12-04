import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./ProductPage.css";
import productContent from "../content/productContent";

const ProductPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleSection = (section) => {
    setOpenSection((prevState) => (prevState === section ? null : section));
  };

  const {
    productName,
    productDescription,
    images,
    details,
    sizes,
    price,
    wishlistIcons,
    arrows,
  } = productContent;

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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h1 className="product-name">{productName}</h1>
        <p className="product-description">{productDescription}</p>

        {/* Product Details */}
        <div className="product-details">
          {details.map((detail) => (
            <div key={detail.id}>
              <button
                className="dropdown-header"
                onClick={() => toggleSection(detail.id)}
              >
                <span className="dropdown-left">
                  <span className="icon">
                    <img src={detail.icon} alt={`${detail.title} Icon`} />
                  </span>
                  <span className="title">{detail.title}</span>
                </span>
                <span className="arrow">
                  <img
                    src={openSection === detail.id ? arrows.up : arrows.down}
                    alt="Toggle Arrow"
                  />
                </span>
              </button>
              {openSection === detail.id && (
                <div
                  className="dropdown-content"
                  dangerouslySetInnerHTML={{ __html: detail.content }}
                />
              )}
            </div>
          ))}
        </div>

     
        <div className="product-sizes">
          <div className="size-buttons">
            {sizes.map((size) => (
              <button key={size} className="size-option">
                {size}
              </button>
            ))}
            <button
              className={`bookmark ${isBookmarked ? "active" : ""}`}
              onClick={toggleBookmark}
            >
              <img
                src={isBookmarked ? wishlistIcons.active : wishlistIcons.default}
                alt="Wishlist"
                className="bookmark-icon"
              />
            </button>
          </div>
          <div className="add-to-cart-container">
  <button className="add-to-cart">
    Add to Cart
    <span className="price">{price}</span>
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;