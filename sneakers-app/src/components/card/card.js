import React, {Component, useState} from "react";

function Card({img, info, price, onClickAdd, onClickFavorite, setPriceAfterAct,  getReadablePrice, id}){

  const [like, setLike] = React.useState(false);
  const [add, setAddItem] = React.useState(false);

  const onClickBuy = () => {
    onClickAdd({id, img, info, price});
    setAddItem(!add);
  }
  const onClickLike = () => {
    onClickFavorite({id, img, info, price});
    setLike(!like);
  }

  return (
    <div key={id} className='app-card d-flex flex-column'>
      <div className="favorite">
        <img alt="like" height={32} width={32} onClick={() => onClickLike()} src={like ? "../img/liked-card.svg" : "../img/like-card.svg"}></img>
      </div>
      <img alt="image" height={112} width={133} src={img}></img> 
      <p className="description">{info}</p>
      <div className='d-flex align-items-center justify-content-between'>
        <div className=''>
          <p className='header-price'>ЦЕНА:</p>
          <p className='price'>{getReadablePrice(price)}</p>
        </div>
        <img onClick={() => onClickBuy()} alt="add"  height={32} width={32} src={add ? '../img/added-card.svg' : '../img/plus-card.svg'}></img>
      </div> 
    </div>
)
}

export default Card;

        
        
    
