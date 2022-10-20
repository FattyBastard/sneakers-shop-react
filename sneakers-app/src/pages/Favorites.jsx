import React from "react";
import Drawer from "../components/drawer";
import Card from "../components/card";

function Favorites({ getReadablePrice, setPriceAfterAct, onClickAdd, onClickFavorite, selectedCards, favoriteCards=[]}){
    return (
        
    <div className='pl-45 pr-50 pt-50'>
        <div className='d-flex justify-content-between align-center pb-40'>
            <h4 className='fw-bold '>Мои закладки</h4>
        </div>
        <div className='d-flex justify-between flex-wrap'>
        {favoriteCards.map((object, index) => {
            let add = false;
            let favorite = true;
            if (selectedCards.find(item => item.id === object.id)){
                console.log("+");
                add = true;
            }
            return (
                <Card 
                key={object.id}
                getReadablePrice={getReadablePrice}
                setPriceAfterAct={setPriceAfterAct}
                onClickAdd={onClickAdd}
                onClickFavorite={onClickFavorite}
                addCart={add}
                favorite={favorite}
                {...object}/>
            ) 
        })}
        </div> 
    </div>
    )
}

export default Favorites;