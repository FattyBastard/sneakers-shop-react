import React from "react";
import Drawer from "../components/drawer";
import Card from "../components/card";

function Home({cards,
    inputValue,
    onClickAdd,
    onClickFavorite,
    onUpdateInputValue,
    isLoaded}){

    const renderItems = () => {
        const filteredItems = cards.filter(card => card.info.toLowerCase().includes(inputValue.toLowerCase()));

        return (isLoaded ? filteredItems : [...Array(10)]).map((object, index) => {
        
            return (        
                <Card 
                    key={index}
                    onClickAdd={onClickAdd}
                    onClickFavorite={onClickFavorite}
                    isLoaded={isLoaded}
                    {...object}/>
                    )
            }
        );
    
    }

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
        <div className='d-flex flex-wrap'>
        {
            renderItems()
        }
        </div> 
    </div>
    )
}

export default Home;