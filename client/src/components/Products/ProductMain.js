import React from 'react'
import ProductForm from '../Forms/ProductForm'
import ProductList from './ProductList'
import Chart from '../Chart/Chart'
import BarChart from '../Chart/BarChart'

const ProductMain = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <div className='container text-center mx-auto mt-3'>
                    <p className='display-5'>Panel de productos</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Chart />
                    </div>
                    <div className='col-lg-6'>
                        <BarChart />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 pt-5'>
                <ProductForm />
            </div>
                <ProductList />
        </div>
    )
}

export default ProductMain
