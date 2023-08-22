import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-toastify';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const initialState = {
	name: '',
	email: '',
    phone: '',
    subject: '',
    message: '',
};

const Contact = () => {
    const [inputText, setInputText] = useState(initialState);

    const onInputChange = (e) => {
        setInputText({ ...inputText, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        toast.success(`Hola, ${inputText.name}. El mensaje se ha enviado exitosamente! 
        Pronto recibira una respuesta al mail ${inputText.email}`, {
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
    };

	return (
        <>
        <Breadcrumb title="Contacto" description="Horneamos todos los días" />
        <div className="contact-from-section mt-100 mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="form-title">
                            <h2>¿Tienes alguna pregunta?</h2>
                            <p>Envíanos un mensaje o tambien te esperamos de Lunes a Sabados de 10 a 18hs</p>
                        </div>
                        <div id="form_status"></div>
                        <div className="contact-form">
                            <form type="POST" id="dp-contact" onSubmit={onSubmit}>
                                <p>
                                    <input type="text" placeholder="Nombre" name="name" id="name" value={inputText.name} onChange={onInputChange} required />
                                    <input type="email" placeholder="Email" name="email" id="email" value={inputText.email} onChange={onInputChange} required />
                                </p>
                                <p><textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje" value={inputText.message} onChange={onInputChange} required ></textarea></p>
                                <p><input type="submit" value="Enviar" /></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-form-wrap">
                            <div className="contact-form-box">
                                <h4><i><FontAwesomeIcon icon="" /></i> Horario</h4>
                                <p>LUN - SAB: 10 a 18 HRS <br /> DOM: Cerrado</p>
                            </div>
                            <div className="contact-form-box">
                                <h4><i><FontAwesomeIcon icon="" /></i> Contacto</h4>
                                <p>Telefono: +54 9 5897 9395  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
	);
};

export default Contact;
