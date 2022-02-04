import React from 'react';
import { useCart } from "react-use-cart";
import Cart from './Cart';
import { Link } from "react-router-dom";



const Nav = () => {
  const { totalUniqueItems } = useCart();


  
  return(
    <div className="hero">
   
   <header className=' mt-5'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid ms-5 me-4 ">
    <Link className="navbar-brand ms-4" to="/" >Sneakers</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-5">
          <Link className="nav-link ms-3 p-2" aria-current="page" to="/collection">Collection</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-2 ms-3" to="/men">Men</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link p-2 ms-3" to="/women">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-2 ms-3" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-2 ms-3" to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="d-flex">
      <i 
      data-bs-toggle="modal" data-bs-target="#exampleModal"
      className="fas fa-shopping-cart p-2 mt-2"/>
      <span className="cart-num mt-2" >{ totalUniqueItems}</span> 
      <img src="./images/man.png" alt="user" className='img-fluid avatar mt-1 ms-4' />
      </div>

      <Cart/>
    </div>
  </div>
</nav>
<hr className=" navline"/>
   </header>
   <div className="herobg p-5">
   <h1 className='hero-text'><big>Sneakers</big> Shoe Boutique</h1>
   <h4 className='hero-sub'>When the shoes get lighter, the moves get tighter......</h4>
   </div>
   </div>
  )}

export default Nav;
