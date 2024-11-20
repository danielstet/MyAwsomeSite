import React from 'react';
import './Item.css'

/**
 * A component representing an individual product item.
 * 
 * @param {Object} props - The props for the component.
 * @param {string} props.ProductImage - The URL of the product's image.
 * @param {string} props.ProductName - The name of the product (must be a string).
 * @param {number} props.ProductPrice - The price of the product (must be an integer).
 * @returns {JSX.Element} The rendered Item component.
 */

const Item = ({ ProductImage, ProductName, ProductPrice }) => {
  return (
    <div id="Item">
        <img id="ItemImage" alt="" src={ProductImage} width={150} height={150}></img>
        <p id="ItemName" >{ProductName}</p>
        <p id="ItemPrice">{ProductPrice} NIS</p>
    </div>
  )
}

export default Item