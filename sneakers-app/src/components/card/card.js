import React, {Component, useState} from "react";

function Card({img, info, price}){

  const [like, setLike] = React.useState(false);
  const [add, setAddItem] = React.useState(false);

  const onClickPlus = () => {
    setAddItem(!add);
  }

  const onClickLike = () => {
    setLike(!like);
  }

  
  return (
    <div className='app-card d-flex flex-column'>
      <div className="favorite">
        <img alt="like" height={32} width={32} onClick={onClickLike} src={like ? "../img/liked-card.svg" : "../img/like-card.svg"}></img>
      </div>
      <img alt="image" height={112} width={133} src={img}></img> 
      <p className="description">{info}</p>
      <div className='d-flex align-items-center justify-content-between'>
        <div className=''>
          <p className='header-price'>ЦЕНА:</p>
          <p className='price'>{price}</p>
        </div>
        <img onClick={onClickPlus} alt="add"  height={32} width={32} src={add ? '../img/added-card.svg' : '../img/plus-card.svg'}></img>
      </div> 
    </div>
)
}

export default Card;

        
        
    
