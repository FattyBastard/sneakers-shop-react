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


  React.useEffect(() => {
    fetch("http://localhost:8000/cards")
    .then(result => result.json())
      .then(json => setCards(json));
  },[]);


  const onClickCart = () => {
    setCartPanel(!cartPanel)
  }

  const onDeleteCard = (id) => {
    
    setSelectedCards(prev => prev.filter(item => item.id !== id));
  }

  const onAddCard = (object) => {
    // console.log(object.id);
    setSelectedCards(prev => [...prev, object]);
  }

  // console.log(selectedCards);

  return (
    
    <div className="app clear">
      <div className='app-mainblock'>
        {cartPanel ? <Drawer 
                        selectedCards={selectedCards}
                        onClickClose={onClickCart} 
                        onDeleteCard={(obj) => onDeleteCard(obj)}/>: null}
        <Header onClickCart={onClickCart}/>
        <div className='pl-45 pr-50 pt-50'>
          <h4 className='fw-bold pb-40'>Все кроссовки</h4>
          <div className='d-flex justify-between flex-wrap'>
            {cards.map((object, index) => (
              <Card img={object.img}
                    info={object.info}
                    price={object.price}
                    onAddCard={(obj) => onAddCard(obj)}
                    id={index + 1}/>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
