import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import ItemList from './ItemList';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getProducts = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products');
        getDocs(getProducts)
          .then((result) => {
            const prodId = result.docs.map((item) => {
              return { ...item.data(), id: item.id };
            });
            setProducts(prodId);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [categoryId]);

    return (
        <>
        <Breadcrumb title="Descubrir  nuestros productos" description="Te invitamos a" />
        <div className="product-section mt-100 mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">	
                            <h3><span className="orange-text">Nuestros</span> Productos</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    { loading ? 
                    <div className="loader">
                        <div className="loader-inner">
                            <div className="circle"></div>
                        </div>
                    </div> :
                    <ItemList products={products} /> }
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default ItemListContainer;