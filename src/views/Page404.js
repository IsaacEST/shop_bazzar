import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/main.css';

const Page404 = () => {
	return (
        <div className="hero-area hero-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center">
                        <div className="hero-text mt-180 mb-180">
                            <div className="hero-text-tablecell error-text">
                                <i><FontAwesomeIcon icon={faSadCry} /></i>
								<h1>Oops!</h1>
								<p>La página que solicitaste no se encuentra.</p>
								<Link className="boxed-btn Link" to="/">Volver al inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Page404;