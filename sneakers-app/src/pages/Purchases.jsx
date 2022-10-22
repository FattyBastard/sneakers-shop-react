import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import PurchaseItem from "./PurchaseItem";
import Drawer from "../components/drawer";
import Card from "../components/card";
import AppContext from "../components/context";



function Purchases(){

    const [orders, setOrders] = React.useState([]);
    const {selectedCards} = React.useContext(AppContext);

    

    React.useEffect(() => {

        const getPurchaseData = async() =>{
            try {
                const {data} = await axios.get("http://localhost:8000/orders");
                setOrders(data);
            } catch (error) {
                alert("Не удалось получить данные о покупках..");
            }
        }
        getPurchaseData();
    },[])

    return (
        
    <div className='pl-45 pr-50 pt-50'>
        <div className='d-flex align-center pb-40'>
            <Link to="/">
                <img  src="img/grey-arrow.svg" alt="arrow" height={35} width={35}></img>
            </Link>
            <h4 className='ml-20 fw-bold '>Мои покупки</h4>
        </div>
        <div className='purchase-area d-flex flex-column flex-wrap'>
        {orders.map((object, index) => {
                
                return (<PurchaseItem id={object.id}
                                      key={index}
                                      listItems={object.items}/>);
            })
        }
        </div> 
    </div>
    )
}

export default Purchases;