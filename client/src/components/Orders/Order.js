import React from 'react';
import Moment from 'react-moment';

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
                <p className='card-text'>{order.client.name}</p>
                {
                    order.order.map(i => {
                    return <p key={order.order.indexOf(i)} className='card-text'>{i.name}</p>
                    })
                }
            </div>
            <div className='card-footer'>
                <p className='card-text'>Total: ${order.total}</p>
            </div>
        </div>
    )
}

export default Order
