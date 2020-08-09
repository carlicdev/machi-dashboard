import React, { useContext } from 'react';
import { MachiContext } from '../../context/context'

const SelectOrder = (props) => {
    const { products } = useContext(MachiContext);;
    return (
        <div className='form-group'>
            <label htmlFor={props.name}>{props.title}</label>
            <select className='form-control' name={props.name}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                >
                    <option value={false}>-</option>
                    {
                        products.map(p => {
                        return <option key={p._id} value={p._id}>
                                    {p.name}
                                </option>
                        })
                    }
                </select>
        </div>
    )
}

export default SelectOrder;
