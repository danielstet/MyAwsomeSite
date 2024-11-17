import React, { useState } from 'react';
import "./Header.css"
import Bag from "../../assets/bag-shopping-solid.svg";
import Bars from "../../assets/bars-solid.svg"
import Logo from "../../assets/logo nepolny.svg"

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isBagMenuHidden, setIsBagMenuHidden] = useState(true);

  return (
    <>
      <div id='header'>
        <div id="DropDownMenu" onClick={() => {
          setIsMenuHidden(!isMenuHidden);
        }}>
          <img src={Bars} alt="Menu Bars Icon" width={30} height={30}/>
        </div>
        <img src={Logo} alt="Shopping Bag Icon" width={120}/>
        <img src={Bag} alt="Shopping Bag Icon" width={30} height={30} onClick={() => {
          setIsBagMenuHidden(!isBagMenuHidden);
        }}/>
      </div>

      <div id='MenuContent' hidden={isMenuHidden}>
            <p id='Type'>Browse for Item</p>
            <p id='Type'>T-shirts/Shirts</p>
            <p id='Type'>Outwear</p>
            <p id='Type'>Accessories</p>
      </div>
      <div id='BagMenuContent' hidden={isBagMenuHidden}>
            <p id='Type'>Shopping Cart</p>
            <p id='Type'>Wishlist</p>
            <p id='Type'>Account Information</p>
            <p id='Type'>Sign out</p>
      </div>
    </>
  )
}

export default Header