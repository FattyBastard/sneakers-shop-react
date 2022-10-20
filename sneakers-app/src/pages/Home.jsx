import React from "react";
import Drawer from "../components/drawer";
import Card from "../components/card";

function Home({cards, inputValue, getReadablePrice, setPriceAfterAct, onClickAdd, onClickFavorite, onUpdateInputValue, selectedCards, favoriteCards=[]}){

    return (
        
    <div className='pl-45 pr-50 pt-50'>
        <div className='d-flex justify-content-between align-center pb-40'>
        <h4 className='fw-bold '>Все кроссовки</h4>
        <div className='search-field d-flex align-center'>
            <img alt="search" src="img/search.svg" height={15} width={15}></img>
            <input onChange={(event) => onUpdateInputValue(event)} className='input-search' alt="search" name='search' placeholder='Поиск...'>
            </input>
        </div>
        </div>
        <div className='d-flex justify-between flex-wrap'>
        {cards.filter(card => card.info.toLowerCase().includes(inputValue.toLowerCase())).map((object, index) => {
            let add = false;
            let favorite = false;
            if (selectedCards.find(item => item.id === object.id)){
                console.log("+");
                add = true;
            }
            if (favoriteCards.find(item => item.id === object.id)){
                favorite = true;
            } 
            return (
                <Card 
                    addCart={add}
                    favorite={favorite}
                    key={object.id}
                    getReadablePrice={getReadablePrice}
                    setPriceAfterAct={setPriceAfterAct}
                    onClickAdd={onClickAdd}
                    onClickFavorite={onClickFavorite}
                    {...object}/>
            ) 
        })}
        </div> 
    </div>
    )
}

export default Home;