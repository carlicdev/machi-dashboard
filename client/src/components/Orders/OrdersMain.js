import React from 'react';
import OrderForm from '../Forms/OrderForm';
import ProductList from '../Products/ProductList';
import OrderList from './OrderList';

const OrdersMain = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <div className='container text-center mx-auto mt-3'>
                    <p className='display-5'>Panel de pedidos</p>
                </div>
                <OrderList />
            </div>
            <div className='col-lg-3'>
                <OrderForm />
            </div>
        </div>
    )
}

export default OrdersMain;
