import React, { useContext} from 'react';
import { MachiContext } from '../../context/context';

const Product = ({product}) => {
    const { deleteProduct } = useContext(MachiContext)
    return (
        <div className='card m-2 mx-auto text-center'style={{width: '20rem'}}>
            <div className='card-header'>
                <h6 className='card-title'>{product.name}</h6>
            </div>
            <div className='card-body'>
                <p className='card-text'>Precio: $<span className='text-muted'>{product.price}</span></p>
            </div>
            <div className='container'>
            <button className='btn btn-info d-inline m-2'>Editar</button>
            <button className='btn btn-danger d-inline m-2'
                onClick={(e) => deleteProduct(e, product._id)}
            >
                Eliminar
            </button>
            </div>
        </div>
    )
}

export default Product;
