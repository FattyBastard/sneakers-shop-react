import React, {Component, useState} from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Card(
  {img,
   info,
   price,
   onClickAdd,
   onClickFavorite,
   id,
   addCart,
   favorite,
   isLoaded=false,
   showInPurchase=false}){

  const [like, setLike] = React.useState(favorite);
  const {isAddedToCart} = React.useContext(AppContext);

  const onClickBuy = () => {
    onClickAdd({id, img, info, price});
  }
  const onClickLike = () => {
    onClickFavorite({id, img, info, price});
    setLike(!like);
  }

  return (
    <div key={id} className='app-card d-flex flex-column'>
      {isLoaded ? ( 
        <>
        {showInPurchase ? (
          null
        ) : (
        <div className="favorite">
          <img alt="like" height={32} width={32} onClick={() => onClickLike()} src={like ? "../img/liked-card.svg" : "../img/like-card.svg"}></img>
        </div>
        )}
          <img alt="image" height={112} width={133} src={img}></img> 
          <p className="description">{info}</p>
          <div className='d-flex align-items-center justify-content-between'>
            <div className=''>
              <p className='header-price'>ЦЕНА:</p>
              <p className='price'>{`${price} руб.`}</p>
            </div>
            {showInPurchase ? (
              null
            ) : (
              <img onClick={() => onClickBuy()} alt="add"  height={32} width={32} src={isAddedToCart(id) ? '../img/added-card.svg' : '../img/plus-card.svg'}></img>
            )}
          </div>
        </>
        ) : (<ContentLoader 
                    speed={2}
                    width={150}
                    height={205}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="106" rx="3" ry="3" width="150" height="15" /> 
                    <rect x="0" y="125" rx="3" ry="3" width="93" height="15" /> 
                    <rect x="0" y="162" rx="8" ry="8" width="80" height="24" /> 
                    <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>)
        }
    </div>
  )
}

export default Card;

        
        
    
