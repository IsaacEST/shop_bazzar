import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(CartContext);

	return (
        <>
        <Breadcrumb title="Carrito" description="Horneamos todos los días" />
        { cart.length ? (
            <div className="cart-section mt-100 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-remove"></th>
                                            <th className="product-image">Imagen</th>
                                            <th className="product-name">Producto</th>
                                            <th className="product-price">Precio</th>
                                            <th className="product-quantity">Cantidad</th>
                                            <th className="product-price">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { cart ? (cart.map(product => {
                                        return(
                                            <tr className="table-body-row" key={product.id}>
                                                <td className="product-remove"><i onClick={()=>removeItem(product.id)}><FontAwesomeIcon icon={faWindowClose} /></i></td>
                                                <td className="product-image"><img src={product.image} alt="" /></td>
                                                <td className="product-name">{product.title} ({product.detail})</td>
                                                <td className="product-price">${product.price}</td>
                                                <td className="product-quantity">{product.quantity}</td>
                                                <td className="product-price">${product.quantity * product.price}</td>
                                            </tr>
                                            );
                                        }))
                                        :   <div className="loader">
                                                <div className="loader-inner">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="total-section">
                                <table className="total-table">
                                    <thead className="total-table-head">
                                        <tr className="table-total-row">
                                            <th>Total</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="total-data">
                                            <td><strong>Subtotal: </strong></td>
                                            <td>${getTotal()}</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Envio: </strong></td>
                                            <td>$150</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total: </strong></td>
                                            <td>${getTotal() + 150}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <button type="button" className="cart-btn" onClick={clearCart}>Vaciar carrito</button>
                                    <Link className='boxed-btn black Link' to="/checkout">Finalizar compra</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        : 
        <div className="more-products mt-80">
            <div className="container">
			    <div className="row">
				    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h1>No hay productos en el carrito</h1>
                            <Link className="boxed-btn Link" to="/">Volver al inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
	);
};

export default Cart;