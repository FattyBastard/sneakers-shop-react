import React, {Component} from "react";

export default class Card extends Component{

    render(){

        const {img, info, price} = this.props;
        return (
            <div className='app-card d-flex flex-column'>
              <img alt="image" height={112} width={133} src={img}></img> 
              <p className="description">{info}</p>
              <div className='d-flex align-items-center justify-content-between'>
                <div className=''>
                  <p className='header-price'>ЦЕНА:</p>
                  <p className='price'>{price}</p>
                </div>
                <img alt="add"  height={32} width={32} src='../img/add-card.svg'></img>
              </div> 
            </div>
        )
    }
}