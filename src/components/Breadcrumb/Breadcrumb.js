import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const Breadcrumb = ({ title, description }) => {
    return (
        <div className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center">
                        <div className="breadcrumb-text">
                            <p>{description}</p>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Breadcrumb;