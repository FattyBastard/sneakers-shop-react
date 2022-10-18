import React from "react";
import DrawerItem from "../drawer-item";

function Drawer({selectedCards, onClickClose, onDeleteCard}){
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
                                onDelete={(obj) => onDeleteCard(obj)}/>
                ))}
                
            </div>
            <div className="bottom-part">

            </div>
            
          </div>
        </div>
    )
}

export default Drawer;