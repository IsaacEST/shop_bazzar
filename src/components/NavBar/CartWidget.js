import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const { itemQuantity } = useContext(CartContext);

    return (
        <div className="header-icons">
            <FontAwesomeIcon icon={faCartShopping} />
            { itemQuantity === 0 ? (
                <div className="qty-display"></div>
            ) : (
                <div className="qty-display">{itemQuantity()}</div>
            )}
        </div>
    );
  };
  
  export default CartWidget;
