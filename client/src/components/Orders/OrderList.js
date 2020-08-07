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
        <div className='d-flex flex-wrap p-5'>
            {
                sortedOrders.map(order => {
                    return <Order key={order._id} order={order} />
                })
            }
        </div>
    )
}

export default OrderList
