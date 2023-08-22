import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const Hero = ({ greeting }) => {
    return (
        <div className="hero-area hero-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center mt-180 mb-180">
                        <div className="hero-text">
                            <div className="hero-text-tablecell">
                                <p className="subtitle">Te invitamos a</p>
                                <h1>{greeting}</h1>
                                <div className="hero-btns">
                                    <a href="/" className="boxed-btn">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Hero;