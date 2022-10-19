import React, {useState, useEffect} from 'react';
import './App.scss';
import "macro-css";
import Header from '../header';
import Card from '../card';
import Drawer from '../drawer';

function App() {
  const [cartPanel, setCartPanel] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [purchasePrice, setPurchasePrice] = React.useState(0);
  const [inputValue, setInputValue] = React.useState('');

  const onUpdateInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const onClickCart = () => {
    setCartPanel(!cartPanel);
  }

  const onDeleteCard = (id) => {
    setSelectedCards(prev => prev.filter(item => item.id !== id));
  }

  const onAddCard = (object) => {
    setSelectedCards(prev => [...prev, object]);
  }

  React.useEffect(() => {
    fetch("http://localhost:8000/cards")
    .then(result => result.json())
      .then(json => setCards(json));
  },[]);

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
        <Header 
                purchasePrice={getReadablePrice(purchasePrice)}
                onClickCart={onClickCart}/>
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
            {cards.filter(card => card.info.toLowerCase().includes(inputValue.toLowerCase())).map((object, index) => (
              <Card img={object.img}
                    key={object.id}
                    id={object.id}
                    info={object.info}
                    price={object.price}
                    getReadablePrice={getReadablePrice}
                    setPriceAfterAct={setPriceAfterAct}
                    onDeleteCard={onDeleteCard}
                    onAddCard={(obj) => onAddCard(obj)}/>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
