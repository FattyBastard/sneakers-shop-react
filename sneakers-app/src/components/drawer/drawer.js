import React from "react";

function Drawer(props){
    return (
        <div className='overlay'>
          <div className='drawer'>
            <img onClick={props.onClickClose} alt="close" height={32} width={32} src="/img/close-cart.svg"></img>
          </div>
        </div>
    )
}

export default Drawer;