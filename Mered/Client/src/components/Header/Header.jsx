import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
// @ts-ignore
import Bag from "../../assets/bag-shopping-solid.svg";
// @ts-ignore
import Bars from "../../assets/bars-solid.svg"
// @ts-ignore
import Logo from "../../assets/logo nepolny.svg"
import { logoutUser } from '../../firebase/authThunks'
import { useDispatch } from 'react-redux';

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isBagMenuHidden, setIsBagMenuHidden] = useState(true);

  const dispatch = useDispatch();

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
          <p onClick={() =>{
            // @ts-ignore
            dispatch(logoutUser())
          }}  id='NavsLink'>Sign out</p>
        </nav>
      )}
    </>
  )
}

export default Header