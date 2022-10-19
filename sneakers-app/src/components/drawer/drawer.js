import React from "react";
import DrawerItem from "../drawer-item";




function Drawer({selectedCards = [], onClickClose, onDeleteCard, purchasePrice, setPriceAfterAct, getReadablePrice}){

    // function getSumPrice(selectedCards){
    //     const sum = selectedCards.reduce((accumulator, currentValue) => {
    //         return accumulator += parseInt(currentValue.price);
    //     },0)
        
    //     return sum;
    // }

    function getTaxPrice(price){
        console.log(price);
        return Math.round(price * 0.05);
    }

    return (
        <div className='overlay'>
          <div className='drawer'>
            <div className="d-flex justify-content-between">
                <h2>Корзина</h2>
                <img className="" onClick={onClickClose} alt="close" height={32} width={32} src="/img/close-cart.svg"></img>
            </div>
            <div className="upper-part d-flex flex-column">
                {selectedCards.map(object => (
                    <DrawerItem 
                                id={object.id}
                                img={object.img}
                                info={object.info}
                                price={object.price}
                                getReadablePrice={getReadablePrice}
                                setPriceAfterAct={setPriceAfterAct}
                                onDelete={(obj) => onDeleteCard(obj)}/>
                ))}
                
            </div>
                
            <div className="bottom-part">
                <ul className="total-price">
                    <li className="d-flex ">
                        <span>Итого:</span>
                        <div></div>
                        <b>{getReadablePrice(purchasePrice)}</b>
                    </li>
                    <li className="d-flex ">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>{getReadablePrice(getTaxPrice(purchasePrice))}</b>
                    </li>
                </ul>
            </div>
            
        
            {/* <div className="bottom-part d-flex">
                <div className="d-flex flex-column justify-content-center">
                    <div className="full-price d-flex">
                        <p>Итого:</p>
                        <div></div>
                        <span>21 498 руб.</span>
                    </div>
                    <div className="full-price d-flex">
                        <p>Налог 5%:</p>
                        <div></div>
                        <span>1074 руб.</span>
                    </div>
                    <button className="accept-order">
                        Оформить заказ
                        <img alt="arrow" src="" height={12} width={14} ></img>
                    </button>
                </div>
            </div> */}
            
            
          </div>
        </div>
    )
}

export default Drawer;