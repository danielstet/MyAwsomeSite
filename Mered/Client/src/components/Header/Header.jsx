import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div id="DropDownMenu" onClick={() => setIsMenuHidden(!isMenuHidden)}>
          <img src={Bars} alt="Menu Bars Icon" width={30} height={30} style={{ cursor: 'pointer' }} />
        </div>
        <img src={Logo} alt="Shopping Bag Icon" width={120}/>
        <img src={Bag} alt="Shopping Bag Icon" width={30} height={30} onClick={() => {
          setIsBagMenuHidden(!isBagMenuHidden);
        }} style={{ cursor: 'pointer' }} />
      </div>
      {!isMenuHidden && (
        <nav id='MenuContent'>
          <Link to="/"  id='NavsLink'>Browse for Item</Link>
          <Link to="/about"  id='NavsLink'>T-shirts/Shirts</Link>
          <Link to="/contact"  id='NavsLink'>Outwear</Link>
          <Link to="/"  id='NavsLink'>Accessories</Link>
        </nav>
      )}
      {!isBagMenuHidden && (
        <nav id='BagMenuContent'>
          <Link to="/"  id='NavsLink'>Shopping Cart</Link>
          <Link to="/about"  id='NavsLink'>Wishlist</Link>
          <Link to="/contact"  id='NavsLink'>Account Information</Link>
          <Link to="/"  id='NavsLink'>Sign out</Link>
        </nav>
      )}
    </>
  )
}

export default Header