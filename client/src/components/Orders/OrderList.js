import React, { useContext } from 'react'
import { MachiContext } from '../../context/context'
import Order from './Order';

const OrderList = () => {
    const { orders } = useContext(MachiContext);
    const sortedOrders = orders.sort((a,b) => {
        let dayA = a.deliveryDay.substring(0, 8).split('-').join('');
        let dayB = b.deliveryDay.substring(0, 8).split('-').join('');
        return dayA - dayB
    });
    console.log(sortedOrders);
    return (
        <div className='card text-center p-0 my-5'>
            <div className='card-header bg-dark text-light'>
                <h1>Lista de pedidos</h1>
            </div>
            <div className='card-body'>
                <div className='d-flex flex-wrap p-5'>
                    {
                        sortedOrders.map(order => {
                            return <Order key={order._id} order={order} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderList
