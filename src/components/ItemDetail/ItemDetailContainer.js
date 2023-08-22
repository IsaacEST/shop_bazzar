import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {  
      const getItem = doc(db, 'products', id);
      getDoc(getItem)
        .then((result) => {
          const itemId = { id: result.id, ...result.data() };
          setItems(itemId);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);

    return (
      <>
      <Breadcrumb title="Elaborados con el mejor material del mercado" description="Los productos más utiles" />
      { loading ? 
      <div className="loader">
        <div className="loader-inner">
            <div className="circle"></div>
        </div>
      </div> : <ItemDetail item={item} /> }
      </>
    );
  };
  
  export default ItemDetailContainer;