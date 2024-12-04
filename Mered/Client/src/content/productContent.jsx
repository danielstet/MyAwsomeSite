import ArtistPhoto from "../assets/2.jpg";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";

import ArtistIcon from "../assets/icons/artist.svg";
import MaterialIcon from "../assets/icons/material.svg";
import FitIcon from "../assets/icons/fit.svg";
import DeliveryIcon from "../assets/icons/delivery.svg";
import TaxesIcon from "../assets/icons/taxes.svg";

import WishlistIcon from "../assets/WishlistBlack.svg";
import WishlistIconWhite from "../assets/WishlistWhite.svg";
import ArrowUpIcon from "../assets/icons/arrowup.svg";
import ArrowDownIcon from "../assets/icons/arrowdown.svg";

const productContent = {
  productName: "MERED Antiterror Hoodie (Red Logo)",
  productDescription: `
    The anti/terror hoodie by MERED is a manifesto against fear and injustice.
    Created amidst an anxious present, it reflects the reality of the modern world.
  `,
  images: [
    { src: photo1, alt: "Product Front" },
    { src: photo2, alt: "Product Back" },
    { src: photo3, alt: "Product Side" },
    { src: photo4, alt: "Product Detail" },
  ],
  details: [
    {
      id: "artist",
      title: "Artist",
      icon: ArtistIcon,
      content: `
        <div class="artist-info">
          <img src="${ArtistPhoto}" alt="Artist Photo" class="artist-photo" />
          <a href="/artist/daniel-stetsyuk" class="artist-name">Daniel Stetsyuk</a>
        </div>
      `,
    },
    {
      id: "material",
      title: "Material",
      icon: MaterialIcon,
      content: `
        <p><strong>Material:</strong> Cotton</p>
        <p><strong>Color:</strong> Black</p>
        <p><strong>Paint Application Type:</strong> Screen Printing</p>
      `,
    },
    {
      id: "fit",
      title: "Fit: What’s my size?",
      icon: FitIcon,
      content: "Check size chart",
    },
    {
      id: "delivery",
      title: "Delivery Information",
      icon: DeliveryIcon,
      content: "30 Days Return Policy",
    },
    {
      id: "taxes",
      title: "Customs & Import Taxes",
      icon: TaxesIcon,
      content: "Covered",
    },
  ],
  sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  price: "376₪",
  wishlistIcons: {
    default: WishlistIcon,
    active: WishlistIconWhite,
  },
  arrows: {
    up: ArrowUpIcon,
    down: ArrowDownIcon,
  },
};

export default productContent;