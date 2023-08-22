import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faMoneyBillAlt, faBriefcase, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css';

const About = () => {
	return (
        <>
        <Breadcrumb title="Nosotros" description="Horneamos todos los días" />
        <div className="feature-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="featured-text">
                            <h2 className="pb-3">Acerca de <span className="orange-text">shop Bazzar</span></h2>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                            <i><FontAwesomeIcon icon={faShippingFast} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Entrega a domicilio</h3>
                                            <p>Entregas a todo el país para ofrecerles una amplia variedad de productos para deleitarse.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                            <i><FontAwesomeIcon icon={faMoneyBillAlt} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Mejor precio</h3>
                                            <p>Nos esforzamos a diario para que disfrutes los productos más ricos y saludables.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                            <i><FontAwesomeIcon icon={faBriefcase} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Caja personalizada</h3>
                                            <p>En nuestras recetas empleamos ingredientes y materia prima de máxima calidad.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="list-box d-flex">
                                        <div className="list-icon">
                                            <i><FontAwesomeIcon icon={faSyncAlt} /></i>
                                        </div>
                                        <div className="content">
                                            <h3>Reembolso rápido</h3>
                                            <p>Porque sabemos que nada es más rico que un dulce postre.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
	);
};

export default About;