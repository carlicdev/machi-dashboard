import React, { useContext } from 'react';
import { FaUser, FaWhatsapp, FaRegAddressCard } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { MachiContext } from '../../context/context';

const Client = ({client}) => {
    const { deleteClient } = useContext(MachiContext);
    return (
        <div className='card m-2 mx-auto text-center'style={{width: '20rem'}}>
            <div className='card-header'>
                <FaUser className='d-inline mx-1' size={20} />
                <h6 className='d-inline mx-1'>{client.name}</h6>
            </div>
            <div className='card-body'>
                <FaWhatsapp size={25}/> 
                <p className='card-text'>{client.phone}</p>
                <GoMail size={25}/> 
                <p className='card-text'>{client.email}</p>
                <FaRegAddressCard size={25}/> 
                <p className='card-text'>{client.address}</p>
            </div>
            <div className='container'>
                <button className='btn btn-info d-inline m-2'>Editar</button>
                <button className='btn btn-danger d-inline m-2'
                onClick={(e) => deleteClient(e, client._id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Client
