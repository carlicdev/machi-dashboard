import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [serverMsg, setServerMsg] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/products/new-product', {
            name,
            price,
        }).then(response => {
            setName('');
            setPrice('');
            setServerMsg(response.data.msg)
        }).catch(err => console.log(err));
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header text-center text-light bg-dark'>
                    <p className='card-title'>
                        Agregar Producto
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
                            <label htmlFor='price'>Precio</label>
                            <input type='number' className='form-control' name='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            ></input>
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

export default ProductForm;
