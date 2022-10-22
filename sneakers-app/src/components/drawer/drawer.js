import React from "react";
import DrawerItem from "../drawer-item";
import Info from "../../pages/Info";
import AppContext from "../context";
import { useCart } from "../../hooks/useCart";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClickClose, onDeleteCard}){

    const [orderCompete, setOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const {selectedCards, setSelectedCards, totalPrice} = useCart();

    const onOrderClicked = async () => {
        try {
            const {data} = await axios.post("http://localhost:8000/orders", {"items" : selectedCards});
            setOrderId(data.id);
            for (let index = 0; index < selectedCards.length; index++) {
                const element = selectedCards[index];

                await axios.delete(`http://localhost:8000/selectedCards/${element.id}`)
                await delay(1000);
            }
            setSelectedCards([]);
            setOrderComplete(true);
        } catch (error) {
            alert("Не удалось оформить заказ");
        }
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
                    {selectedCards.map((object,index) => (
                        <DrawerItem 
                            key={index}
                            onDelete={(obj) => onDeleteCard(obj)}
                            {...object}/>
                        ))}
                </div>
                <div className="bottom-part align-end">
                    <ul className="total-price">
                        <li className="d-flex mb-20">
                            <span>Итого:</span>
                            <div className=""></div>
                            <b>{`${totalPrice} руб.`}</b>
                        </li>
                        <li className="d-flex mb-25">
                            <span>Налог 5%:</span>
                            <div className=""></div>
                            <b>{`${Math.round((totalPrice * 0.05))} руб.`}</b>
                        </li>
                        <li className="d-flex ">
                            <button onClick={() => onOrderClicked()} className="d-flex offer-btn justify-content-center">Оформить заказ
                                <img  className="arrow" src="img/arrow.svg" alt="arrow" height={12} width={14}></img>
                            </button>
                        </li>   
                    </ul>
                </div>
            </>) : <Info img={orderCompete ? "img/order-complete.svg" : "img/empty-box.svg"}
                         header={orderCompete ? "Заказ оформлен!" : "Корзина пустая"}
                         description={orderCompete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                         onClickClose={onClickClose}/>
        }           
  
          </div>
        </div>
    )
}

export default Drawer;