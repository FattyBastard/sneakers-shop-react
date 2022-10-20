import React from "react";
import Drawer from "../components/drawer";
import Card from "../components/card";

function Favorites({ getReadablePrice, setPriceAfterAct, onClickAdd, onClickFavorite,  setFavoriteCards, favoriteCards=[]}){
    return (
        
    <div className='pl-45 pr-50 pt-50'>
        <div className='d-flex justify-content-between align-center pb-40'>
            <h4 className='fw-bold '>Мои закладки</h4>
        </div>
        <div className='d-flex justify-between flex-wrap'>
        {favoriteCards.map((object) => (
            <Card 
                key={object.id}
                getReadablePrice={getReadablePrice}
                setPriceAfterAct={setPriceAfterAct}
                onClickAdd={onClickAdd}
                onClickFavorite={onClickFavorite}
                setFavoriteCards={setFavoriteCards}
                {...object}/>
        ))}
        </div> 
    </div>
    )
}

export default Favorites;