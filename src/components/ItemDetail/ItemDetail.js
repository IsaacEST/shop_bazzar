import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';

import WhatsApp from '../../WhatsAppButtonGreenSmall.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const ItemDetail = ({ item }) => {
	const [add, setAdd] = useState(false);
	const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
		setAdd(true);
		addItem(item, quantity)
		toast.success(`Agregaste ${quantity} ${item.title} (${item.detail})`, {
			theme: "light",
			position: "top-center",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
    };

    return (
		<>
        <div className="single-product mt-150 mb-150">
			<div className="container">
				<div className="row">
					<div className="col-md-5 img-fluid">
						<div className="single-product-img">
							<img className="mx-auto d-block" src={item.image} alt="" />
						</div>
					</div>
					<div className="col-md-7">
						<div className="single-product-content">
							<h3>{item.title}</h3>
							<p className="single-product-pricing"><span>{item.detail}</span>$ {item.price}</p>
							<p>{item.description}</p>
							<br></br>
							<div className="single-product-form">
								
									<a href={"https://wa.me/+5491158979395?text=Hola!%20Me%20interesa:%20"+ item.title} ><img alt="Chat on WhatsApp" src={WhatsApp} width="175"/></a>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
    );
  };
  
  export default ItemDetail;
