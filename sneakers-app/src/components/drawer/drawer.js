import React from "react";
import DrawerItem from "../drawer-item";

function Drawer({selectedCards = [], onClickClose, onDeleteCard, purchasePrice, setPriceAfterAct, getReadablePrice}){

    function getTaxPrice(price){
        return Math.round(price * 0.05);
    }

    return (
        <div className='overlay'>
          <div className='drawer d-flex flex-column'>
            <div className="d-flex justify-content-between">
                <h2>Корзина</h2>
                <img className="close" onClick={onClickClose} alt="close" height={32} width={32} src="/img/close-cart.svg"></img>
            </div>
            {selectedCards.length > 0 ? (
            <>
                <div className="upper-part d-flex flex-column">
                    {selectedCards.map(object => (
                        <DrawerItem 
                            key={object.id}
                            getReadablePrice={getReadablePrice}
                            setPriceAfterAct={setPriceAfterAct}
                            onDelete={(obj) => onDeleteCard(obj)}
                            {...object}/>
                        ))}
                </div>
                <div className="bottom-part align-end">
                    <ul className="total-price">
                        <li className="d-flex mb-20">
                            <span>Итого:</span>
                            <div className=""></div>
                            <b>{getReadablePrice(purchasePrice)}</b>
                        </li>
                        <li className="d-flex mb-25">
                            <span>Налог 5%:</span>
                            <div className=""></div>
                            <b>{getReadablePrice(getTaxPrice(purchasePrice))}</b>
                        </li>
                        <li className="d-flex ">
                            <button className="d-flex offer-btn justify-content-center">Оформить заказ
                                <img  className="arrow" src="img/arrow.svg" alt="arrow" height={12} width={14}></img>
                            </button>
                        </li>   
                    </ul>
                </div>
            </>) : 
            (   <ul className="empty-list d-flex flex-column justify-content-center align-center">
                    <li>
                        <img src="img/empty-box.svg" height={120} width={120} alt="box"></img>
                    </li>
                    <li>
                        <h1>Корзина пустая</h1>
                    </li>
                    <li>
                        <span className="box-text">
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                        </span>
                    </li>
                    <li>
                        <button  onClick={onClickClose} className="d-flex justify-content-center">
                            Вернуться назад
                            <img alt="back-arrow" src="img/back-arrow.svg" height={12} width={14}></img>
                        </button>
                    </li>
                </ul> 
            )
        }           
  
          </div>
        </div>
    )
}

export default Drawer;