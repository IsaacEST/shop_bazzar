import React from 'react';
import { Link } from 'react-router-dom';

import '../main.css';

const Item = ({ id, title, price, image, stock, detail}) => {
    return (
        <div className="single-product-item">
            <div className="product-image">
            <Link to={`/item/${id}`}><img src={image} alt="" /></Link>
            </div>
            <h3>{title}</h3>
            <p className="product-price"><span>{detail}</span> $ {price} </p>
            <Link to={`/item/${id}`} className="cart-btn Link">Ver detalle</Link>
        </div>
    );
  };
  
  export default Item;