import React, {useState, useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Link, Route, Switch, Routes} from "react-router-dom";
import { ReactDOM } from 'react';

import Header from '../header';
import Card from '../card';
import Drawer from '../drawer';
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import AppContext from '../context';
import Purchases from '../../pages/Purchases';

import './App.scss';
import "macro-css";

function App() {
  const [cartPanel, setCartPanel] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [favoriteCards, setFavoriteCards] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const totalPrice = selectedCards.reduce((acc, cur) => parseInt(acc) + parseInt(cur.price) , 0);


  const onUpdateInputValue = (event) => {
    setInputValue(event.target.value);
  }
  const onClickFavorite = async (obj) => {
    try {
      if (favoriteCards.find(item => item.id === obj.id)){
        await axios.delete(`http://localhost:8000/favoriteCards/${obj.id}`);
        setFavoriteCards(prev => prev.filter(item => item.id !== obj.id));
      }else{
        await axios.post(`http://localhost:8000/favoriteCards`, obj);
        setFavoriteCards(prev => [...prev, obj]);
      }
    } catch (error) {
      alert("Не удалось добавить фовариты");
    }
  }

  const onClickAdd = async (obj) => {
    try {
      if (selectedCards.find(item => item.id === obj.id)){
        await axios.delete(`http://localhost:8000/selectedCards/${obj.id}`);
        setSelectedCards(prev => prev.filter(item => item.id !== obj.id));
      }else{
        await axios.post(`http://localhost:8000/selectedCards`, obj);
        setSelectedCards(prev => [...prev, obj]);
      }
    } catch (error) {
      alert("Не удалось добавть товар в корзину");
    }
  }

  const onClickCart = () => {
    setCartPanel(!cartPanel);
  }

  const onDeleteCard = async (obj) => {
    await axios.delete(`http://localhost:8000/selectedCards/${obj.id}`);
    setSelectedCards(prev => prev.filter(item => item.id !== obj.id));
  }

  const isAddedToCart = (id) => {
    return selectedCards.some(item => item.id === id);
  }

  const isFavorite = (id) => {
    return favoriteCards.some(item => item.id === id);
  }

  React.useEffect(() => {

    async function getData(url){
      return await axios.get(url)
    }
    try {
      getData("http://localhost:8000/selectedCards")
      .then(res => {
        setSelectedCards(res.data)});
      getData("http://localhost:8000/favoriteCards")
        .then(res => {
          setFavoriteCards(res.data)});
      getData("http://localhost:8000/cards")
        .then(res => {
          setCards(res.data)});

    } catch (error) {
      alert("Не получилось загрузить данные");
    }  
    setIsLoaded(true);
  },[]);

  return (
      <AppContext.Provider value={ {cards, favoriteCards, selectedCards, setSelectedCards, isAddedToCart, totalPrice, isFavorite, cartPanel} }>
        <div className="app clear">
          <div className='app-mainblock'>
            {cartPanel ? 
              <Drawer                     
              onClickClose={onClickCart} 
              onDeleteCard={(obj) => onDeleteCard(obj)}/>
            : null}  
            <Header 
                    onClickCart={onClickCart}/>
            <Routes>
                <Route path="/" exact element={<Home inputValue={inputValue}
                                                     cards={cards}
                                                     onClickAdd={onClickAdd}
                                                     onClickFavorite={onClickFavorite}
                                                     onUpdateInputValue={onUpdateInputValue}
                                                     isLoaded={isLoaded}/>}/>
                <Route path="/favorites" exact element={<Favorites  
                                                     onClickAdd={onClickAdd}
                                                     onClickFavorite={onClickFavorite}                                                
                                                     favoriteCards={favoriteCards}
                                                     isLoaded={isLoaded}/>}/>
                <Route path="/purchases" exact element={<Purchases/>}/>
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
        
  );
}

export default App;
