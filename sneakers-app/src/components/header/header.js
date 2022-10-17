import React from "react";

function Header(props) {
    return (
        <header className="app-header d-flex justify-content-between pr-50">
          <div className='left-part d-flex'>
            <img className='header-logo' alt="logo" src='../img/logo.svg'></img>
            <div className='flex-column'>
              <h6>REACT SNEAKERS</h6>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className='right-part d-flex align-items-center'>
            <li className='mr-30'>
              <a>
                <img alt="cart" src='../img/cart.svg' className='mr-10'></img>
              </a>
              <span>1205 руб.</span>
            </li>
            <li className='mr-30'>
              <a>
                <img alt="heart" src='../img/heart.svg'></img>
              </a>
            </li>
            <li className=''>
              <a>
                <img alt="profile" src='../img/profile.svg'></img>
              </a>
            </li>
          </ul>
        </header>
    )
}

export default Header;