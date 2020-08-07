import React, { useContext } from 'react'
import { MachiContext } from '../../context/context'
import Order from './Order';

const OrderList = () => {
    const { orders } = useContext(MachiContext);
    return (
        <div className='d-flex flex-wrap p-5'>
            {
                orders.map(order => {
                    return <Order key={order._id} order={order} />
                })
            }
        </div>
    )
}

export default OrderList
