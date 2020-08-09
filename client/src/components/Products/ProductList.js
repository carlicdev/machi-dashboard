import React, { useContext } from 'react';
import { MachiContext } from '../../context/context';
import Product from './Product';

const ProductList = () => {
    const { products } = useContext(MachiContext);
    return (
        <div className='card text-center p-0 my-5'>
            <div className='card-header bg-dark text-light'>
                <h1>Lista de productos</h1>
            </div>
            <div className='card-body'>
                <div className='d-flex flex-wrap p-5'>
                    {
                        products.map(product => {
                            return <Product key={product._id} product={product} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList;
