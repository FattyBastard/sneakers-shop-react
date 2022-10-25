import React from "react";
import Drawer from "../components/drawer";
import Card from "../components/card";
import {Link} from "react-router-dom";

function Favorites({onClickAdd, onClickFavorite, favoriteCards=[], isLoaded}){

    return (
        
    <div className='pl-45 pr-50 pt-50'>
        <div className='d-flex align-center pb-40'>
            <Link to="/">
                <img  src="img/grey-arrow.svg" alt="arrow" height={35} width={35}></img>
            </Link>
            <h4 className='ml-20 fw-bold '>Мои закладки</h4>
        </div>
        <div className='d-flex flex-wrap'>
        {favoriteCards.map((object, index) => {
            
            return (
                <Card 
                key={index}
                onClickAdd={onClickAdd}
                onClickFavorite={onClickFavorite}
                isLoaded={isLoaded}
                {...object}/>
            ) 
        })}
        </div> 
    </div>
    )
}

export default Favorites;