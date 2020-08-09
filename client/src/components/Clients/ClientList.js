import React, { useContext } from 'react';
import { MachiContext } from '../../context/context';
import Client from '../Clients/Client';

const ClientList = () => {
    const { clients } = useContext(MachiContext);

    return (
        <div className='card text-center p-0 my-5'>
            <div className='card-header bg-dark text-light'>
                <h1>Directorio de clientes</h1>
            </div>
            <div className='card-body'>
                <div className='d-flex flex-wrap p-5'>
                    {
                        clients.map(client => {
                            return <Client key={client._id} client={client} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ClientList
