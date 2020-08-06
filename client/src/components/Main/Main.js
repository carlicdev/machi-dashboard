import React from 'react';
import ProductForm from '../Forms/ProductForm';
import ClientForm from '../Forms/ClientForm';
import OrderForm from '../Forms/OrderForm';

const Main = () => {
    return (
        <div className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            <h1>Hello from main</h1>
            <ProductForm />
            <ClientForm />
            <OrderForm />
        </div>
    )
}

export default Main
