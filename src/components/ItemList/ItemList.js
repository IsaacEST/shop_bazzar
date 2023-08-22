import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        products.map((product) => {
            return (
                <div className="col-lg-4 col-md-6 text-center" key={product.id}>
                    <Item
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        stock={product.stock}
                        detail={product.detail}                  
                    />
                </div>
            );
        })
    );
  };
  
  export default ItemList;