import React from 'react'
import ProductForm from '../Forms/ProductForm'
import ProductList from './ProductList'

const ProductMain = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <ProductList />
            </div>
            <div className='col-lg-3'>
                <ProductForm />
            </div>
        </div>
    )
}

export default ProductMain
