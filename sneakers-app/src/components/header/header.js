import React from "react";
import {Link} from "react-router-dom";
import AppContext from "../context";

function Header({onClickCart}) {

    const {totalPrice} = React.useContext(AppContext);

    return (
        <header className="app-header d-flex justify-content-between pr-50">
          <Link to="/">
            <div className='left-part d-flex'>
              <img className='header-logo' alt="logo" src='../img/logo.svg'></img>
              <div className='flex-column'>
                <h6>REACT SNEAKERS</h6>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>
          <ul className='right-part d-flex align-items-center'>
            <li onClick={onClickCart} className='mr-30 links'>
              <a>
                <img alt="cart" src='../img/cart.svg' className='mr-10'></img>
              </a>
              <span>{`${totalPrice} руб.`}</span>
            </li>
            <li className='mr-30 links'>
              <Link to="/favorites">
                <img alt="heart" src='../img/heart.svg'></img>
              </Link>
            </li>
            <li className='links'>
              <Link to="/purchases">
                <img alt="profile" src='../img/profile.svg'></img>
              </Link>
            </li>
          </ul>
        </header>
    )
}

export default Header;