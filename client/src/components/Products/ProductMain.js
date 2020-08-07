import React from 'react'
import ProductForm from '../Forms/ProductForm'
import ProductList from './ProductList'

const ProductMain = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <div className='container text-center mx-auto mt-3'>
                    <p className='display-5'>Panel de productos</p>
                </div>
                <ProductList />
            </div>
            <div className='col-lg-3'>
                <ProductForm />
            </div>
        </div>
    )
}

export default ProductMain
