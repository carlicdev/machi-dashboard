import React, { useContext } from 'react';
import { MachiContext } from '../../context/context';
import Product from './Product';

const ProductList = () => {
    const { products } = useContext(MachiContext);
    return (
        <div className='d-flex flex-wrap p-5'>
            {
                products.map(product => {
                    return <Product key={product._id} product={product} />
                })
            }
        </div>
    )
}

export default ProductList;
