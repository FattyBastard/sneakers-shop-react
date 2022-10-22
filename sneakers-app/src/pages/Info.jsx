import React from "react";
import Drawer from "../components/drawer";
import Card from "../components/card";

function Info({img, header, description, onClickClose}){
    return (
        <ul className="empty-list d-flex flex-column justify-content-center align-center">
            <li>
                <img src={img} height={120} width={120} alt="box"></img>
            </li>
            <li>
                <h1>{header}</h1>
            </li>
            <li>
                <span className="box-text">
                    {description}
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

export default Info;