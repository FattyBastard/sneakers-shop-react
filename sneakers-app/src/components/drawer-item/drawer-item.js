import React from "react";

function DrawerItem({id, img, info, price, onDelete}){

    return (
        <div key={id} className="d-flex drawer-item align-center">
            <img label="sneaker" height={70} width={70} src={img}></img>
            <div className="d-flex flex-column">
                <p>
                    {info}
                </p>
                <span>{price}</span>
            </div>
            <img onClick={() => onDelete(id)} alt="close" height={32} width={32} src="/img/close-cart.svg"></img>
        </div>
    )
}

export default DrawerItem;