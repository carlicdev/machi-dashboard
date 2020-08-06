import React, { useState } from 'react';
import axios from 'axios';

const ClientForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [serverMsg, setServerMsg] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/clients/new-client', {
            name,
            email,
            phone, 
            address,
        }).then(result => {
            setServerMsg(result.data.msg);
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header text-center text-light bg-dark'>
                    <p className='card-title'>
                        Agregar cliente
                    </p>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Nombre</label>
                            <input type='text' className='form-control' name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                ></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Correo electrónico</label>
                            <input type='email' className='form-control' name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Teléfono</label>
                            <input type='number' className='form-control' name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                ></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='address'>Dirección</label>
                            <textarea type='text' className='form-control' name='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                ></textarea>
                        </div>
                        {
                            serverMsg && (
                                <div className='alert alert-warning alert-dismissable fade show' role='alert'>
                                    {serverMsg}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>                                
                            )
                        }
                        <div className='text-center mx-auto mt-2'>
                            <button type='submit' className='btn btn-dark px-4'>
                                CREAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ClientForm;
