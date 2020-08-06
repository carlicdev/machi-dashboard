import React, { useState } from 'react';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    return (
        <div className='col-md-4'>
            <div className='card'>
                <div className='card-header text-center text-light bg-dark'>
                    <p className='card-title'>
                        Agregar Producto
                    </p>
                </div>
                <div className='card-body'>
                    <form>
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
