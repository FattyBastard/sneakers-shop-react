import React from "react";
import Card from "../components/card";
import AppContext from "../components/context";



function PurchaseItem({id, listItems}){
    return (
        <div className="purchase-item">
            <div className='d-flex align-center pb-40'>
                <h4 className="ml-30 fw-bold">
                    {`Покупка №${id}`}
                </h4>
            </div>
            <div className='purchase-area d-flex flex-wrap'>
                {listItems.map((object, index) => (
                     <Card 
                        key={index}
                        showInPurchase={true}
                        isLoaded={true}
                    {...object}/>
                ))} 
            </div>
        </div> 
    )  
}

export default PurchaseItem;