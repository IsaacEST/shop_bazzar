import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const addProduct = (num) => {
        setQuantity(quantity + num);
    };
 
    return (
        <>
        <div className="count-container__contador">
            <button className="count-container__button" onClick={() => addProduct(-1)} disabled={quantity === initial}>-</button>
            <span className="count-container__qty">{quantity}</span>
            <button className="count-container__button" onClick={() => addProduct(+1)} disabled={quantity === initial}>+</button>
        </div>
        <button type="button" className="cart-btn" onClick={() => onAdd(quantity)} disabled={stock === 0}><FontAwesomeIcon icon={faCartShopping} /> Añadir</button>
        </>
    );
  };
  
  export default ItemCount;
