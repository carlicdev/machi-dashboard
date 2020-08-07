import React from 'react';
import ClientForm from '../Forms/ClientForm';
import ProductList from '../Products/ProductList';
import ClientList from './ClientList';

const ClientsMain = () => {
    return (
        <div className='row'>
            <div className='col-lg-9'>
                <div className='container text-center mx-auto mt-3'>
                    <p className='display-5'>Panel de clientes</p>
                </div>
                <ClientList />
            </div>
            <div className='col-lg-3'>
                <ClientForm />
            </div>
        </div>
    )
}

export default ClientsMain;
