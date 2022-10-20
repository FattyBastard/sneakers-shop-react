import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.scss';
import "macro-css";
import Header from '../header';
import Card from '../card';
import Drawer from '../drawer';
import {BrowserRouter as Router, Link, Route, Switch, Routes} from "react-router-dom";
import { ReactDOM } from 'react';
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';

function App() {
  const [cartPanel, setCartPanel] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [favoriteCards, setFavoriteCards] = React.useState([]);
  const [purchasePrice, setPurchasePrice] = React.useState(0);
  const [inputValue, setInputValue] = React.useState('');

  const onUpdateInputValue = (event) => {
    setInputValue(event.target.value);
  }
  const onClickFavorite = async (obj) => {
    console.log(obj);
    if (favoriteCards.find(item => item.id === obj.id)){
      await axios.delete(`http://localhost:8000/favoriteCards/${obj.id}`);
      setFavoriteCards(prev => prev.filter(item => item.id !== obj.id));
    }else{
      await axios.post(`http://localhost:8000/favoriteCards`, obj);
      setFavoriteCards(prev => [...prev, obj]);
    }
  }

  const onClickAdd = async (obj) => {
    if (selectedCards.find(item => item.id === obj.id)){
      await axios.delete(`http://localhost:8000/selectedCards/${obj.id}`);
      setSelectedCards(prev => prev.filter(item => item.id !== obj.id));
    }else{
      await axios.post(`http://localhost:8000/selectedCards`, obj);
      setSelectedCards(prev => [...prev, obj]);
    }
  }

  const onClickCart = () => {
    setCartPanel(!cartPanel);
  }

  const onDeleteCard = async (id) => {
    await axios.delete(`http://localhost:8000/selectedCards/${id}`);
    setSelectedCards(prev => prev.filter(item => item.id !== id));
  }

  // const onAddCard = async (object) => {
  //   await axios.post("http://localhost:8000/selectedCards", object);
  //   setSelectedCards(prev => [...prev, object]);
  // }

  React.useEffect(() => {
    axios.get("http://localhost:8000/cards")
    .then(res => {
      setCards(res.data)
    });

    axios.get("http://localhost:8000/selectedCards")
      .then(res => {
        setSelectedCards(res.data)
      });

    axios.get("http://localhost:8000/favoriteCards")
    .then(res => {
      setFavoriteCards(res.data)
    });

  },[]);

  // React.useEffect(() => {
  //   getSumPrice(selectedCards);
  // }, [selectedCards])

function getSumPrice(selectedCards){
  const sum = selectedCards.reduce((accumulator, currentValue) => {
      return accumulator += parseInt(currentValue.price);
  },0)
  
  setPurchasePrice(sum);
}


  const getReadablePrice = (price) => {
    return (price + ' руб.')
  }

  const setPriceAfterAct = (price) => {
    const newPrice = purchasePrice + parseInt(price);
    setPurchasePrice(newPrice);
  }
  

  return (
      
        <div className="app clear">
          <div className='app-mainblock'>
            {cartPanel ? <Drawer                      
                                  purchasePrice={purchasePrice}
                                  setPriceAfterAct={setPriceAfterAct}
                                  getReadablePrice={getReadablePrice}
                                  selectedCards={selectedCards}
                                  onClickClose={onClickCart} 
                                  onDeleteCard={(obj) => onDeleteCard(obj)}/>: null}
            <Header purchasePrice={getReadablePrice(purchasePrice)}
                    onClickCart={onClickCart}/>
            <Routes>
                <Route path="/" exact element={<Home inputValue={inputValue}
                                                     cards={cards}
                                                     getReadablePrice={getReadablePrice}
                                                     setPriceAfterAct={setPriceAfterAct}
                                                    //  onDeleteCard={onDeleteCard}
                                                    //  onAddCard={onAddCard}
                                                     onClickAdd={onClickAdd}
                                                     onClickFavorite={onClickFavorite}
                                                     onUpdateInputValue={onUpdateInputValue}
                                                     setFavoriteCards={setFavoriteCards}
                                                     favoriteCards={favoriteCards}/>}/>
                <Route path="/favorites" exact element={<Favorites getReadablePrice={getReadablePrice}
                                                     setPriceAfterAct={setPriceAfterAct}
                                                    //  onDeleteCard={onDeleteCard}
                                                    //  onAddCard={onAddCard}    
                                                     onClickAdd={onClickAdd}
                                                     onClickFavorite={onClickFavorite}                                                
                                                     setFavoriteCards={setFavoriteCards}
                                                     favoriteCards={favoriteCards}/>}/>
            </Routes>
          </div>
      </div>
  );
}

export default App;
