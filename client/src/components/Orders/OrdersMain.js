import React from 'react';
import OrderForm from '../Forms/OrderForm';
import ProductList from '../Products/ProductList';

const OrdersMain = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <h1>Hi from orders main</h1>
                <ProductList />
            </div>
            <div className='col-lg-3'>
                <OrderForm />
            </div>
        </div>
    )
}

export default OrdersMain;
