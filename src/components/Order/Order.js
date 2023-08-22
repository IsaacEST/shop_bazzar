import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const initialState = {
	name: '',
	email: '',
	address: '',
    phone: '',
    note: '',
};

const Order = () => {
    const { cart, getTotal, clearCart } = useContext(CartContext);
    const [inputText, setInputText] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const time = Date.now();
    const today = new Date(time);

    const onInputChange = (e) => {
        setInputText({ ...inputText, [e.target.name]: e.target.value });
    };
    
    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const newOrder = {
            buyer: {
              name: inputText.name,
              email: inputText.email,
              phone: inputText.phone,
              address: inputText.address,
            },
            items: cart.map((product) => ({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: product.quantity,
            })),
            date: today.toLocaleDateString(),
            total: getTotal() + 150,
            status: 'Generada'
        };
        const docRef = await addDoc(collection(db, 'orders'), {	newOrder, });
        setLoading(false);
        toast.success(`Pedido generado! 
        Nos pondremos en contacto para coordinar el pago. 
        N° de compra ${docRef.id}`, {
			theme: "light",
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		setInputText(initialState);
        clearCart();
    };

    return (
        <>
        <Breadcrumb title="Orden de Compra" description="Horneamos todos los días" />
        { loading ? 
        <div className="loader">
            <div className="loader-inner">
                <div className="circle"></div>
            </div>
        </div> : cart.length ? (
        <div className="checkout-section mt-100 mb-100">
            <form type="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="card single-accordion accordion-item">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0 accordion-header">
                                                <button className="btn btn-link accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Datos de facturación
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <div className="billing-address-form">
                                                    
                                                        <p><input type="text" placeholder="Nombre" name="name" value={inputText.name} onChange={onInputChange} required/></p>
                                                        <p><input type="email" placeholder="Email" name="email" value={inputText.email} onChange={onInputChange} required/></p>
                                                        <p><input type="text" placeholder="Dirección" name="address" value={inputText.address} onChange={onInputChange} required/></p>
                                                        <p><input type="number" placeholder="Telefono" name="phone" value={inputText.phone} onChange={onInputChange} required/></p>
                                                        <p><textarea name="note" id="bill" cols="30" rows="10" placeholder="Notas" value={inputText.note} onChange={onInputChange}></textarea></p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card single-accordion accordion-item">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0 accordion-header">
                                                <button className="btn btn-link accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Detalle de la compra
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="card-body accordion-body">
                                                <div className="card-details">
                                                    <table className="order-details">
                                                        <thead>
                                                            <tr>
                                                                <th>Producto</th>                                                           
                                                                <th>Precio</th>
                                                                <th>Cantidad</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="order-details-body">
                                                        { (cart.map(product => {
                                                            return(
                                                                <tr key={product.id}> 
                                                                    <td>{product.title} ({product.detail})</td>
                                                                    <td>${product.price}</td>
                                                                    <td>{product.quantity}</td>
                                                                    <td>${product.quantity * product.price}</td>
                                                                </tr>
                                                            );
                                                        }))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="order-details-wrap">
                                <table className="order-details">
                                    <thead>
                                        <tr>
                                            <th>Detalle de su pedido</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody className="checkout-details">
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>${getTotal()}</td>
                                        </tr>
                                        <tr>
                                            <td>Envío</td>
                                            <td>$150</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>${getTotal() + 150}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="submit" className="cart-btn btn-order boxed-btn">Realizar compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
        : 
        <div className="more-products mt-80">
            <div className="container">
			    <div className="row">
				    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h1>Su carrito está vacio por lo tanto no puede realizar su orden de compra</h1>
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
  
export default Order;