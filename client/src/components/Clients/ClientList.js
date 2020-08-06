import React, { useContext } from 'react';
import { MachiContext } from '../../context/context';
import Client from '../Clients/Client';

const ClientList = () => {
    const { clients } = useContext(MachiContext);

    return (
        <div className='d-flex flex-wrap p-5'>
            {
                clients.map(client => {
                    return <Client key={client._id} client={client} />
                })
            }
        </div>
    )
}

export default ClientList
