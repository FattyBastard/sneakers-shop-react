import React, {useState, useEffect} from 'react';
import './App.scss';
import "macro-css";
import Header from '../header';
import Card from '../card';
import Drawer from '../drawer';

function App() {
  const [cartPanel, setCartPanel] = React.useState(false);
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    fetch("http://localhost:8000/cards")
    .then(result => result.json())
      .then(json => setCards(json));
  },[]);


  const onClickCart = () => {
    setCartPanel(!cartPanel)
  }

  return (
    
    <div className="app clear">
      <div className='app-mainblock'>
        {cartPanel ? <Drawer onClickClose={onClickCart} />: null}
        <Header onClickCart={onClickCart}/>
        <div className='pl-45 pr-50 pt-50'>
          <h4 className='fw-bold pb-40'>Все кроссовки</h4>
          <div className='d-flex justify-between flex-wrap'>
            {cards.map(object => (
              <Card img={object.img}
                    info={object.info}
                    price={object.price}/>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
