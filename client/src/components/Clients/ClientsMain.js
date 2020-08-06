import React from 'react';
import ClientForm from '../Forms/ClientForm';
import ProductList from '../Products/ProductList';
import ClientList from './ClientList';

const ClientsMain = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <h1>Hi from clients main</h1>
                <ClientList />
            </div>
            <div className='col-lg-3'>
                <ClientForm />
            </div>
        </div>
    )
}

export default ClientsMain;
