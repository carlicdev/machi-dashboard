import React from 'react';
import Moment from 'react-moment';
import { FaUser, FaStickyNote } from 'react-icons/fa';

const handleTotal = (ord) => {
    let tempTotal = 0;
    ord.forEach(i => {
        let itemPrice = i.price;
        tempTotal = tempTotal + itemPrice;
    })
    return tempTotal;
}


const Order = ({order}) => {
    const { deliveryDay } = order;
    const bg = order.status === 'pending' ? 'bg-danger' : 'bg-success';
    return (
        <div className='card m-2 mx-auto text-center'style={{width: '20rem'}}>
            <div className={`card-header text-white ${bg}`}>
                <p className='card-title'>
                    <Moment format='DD/MM/YYYY'>
                        {deliveryDay}
                    </Moment>
                </p>
            </div>
            <div className='card-body'>
                <FaUser />
                <h6 className='card-title'>{order.client.name}</h6>
                <FaStickyNote />
                {
                    order.order.map(i => {
                    return <p key={order.order.indexOf(i)}>{i.name}</p>
                    })
                }
            </div>
            <div className='card-footer'>
                <p className='card-text'>Total: ${handleTotal(order.order)}</p>
            </div>
        </div>
    )
}

export default Order
