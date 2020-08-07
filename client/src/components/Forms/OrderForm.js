import React, { useState } from 'react';
import axios from 'axios';


const OrderForm = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [order1, setOrder1] = useState('');
    const [order2, setOrder2] = useState('');
    const [order3, setOrder3] = useState('');
    const [order4, setOrder4] = useState('');
    const [order5, setOrder5] = useState('');
    const [serverMsg, setServerMsg] = useState('');

    const handleOrder = () => {
        let tempOrder = [];
        if (!order2.length){
            tempOrder = [order1];
        } else if (!order3.length) {
            tempOrder = [order1, order2]
        } else if (!order4.length) {
            tempOrder = [order1, order2, order3]
        } else if (!order5.length) {
            tempOrder = [order1, order2, order3, order4]
        } else {
            tempOrder = [order1, order2, order3, order4, order5]
        }
        return tempOrder;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/orders/new-order', {
            client: name,
            year,
            month,
            day,
            order: handleOrder()
        })
        .then(result => {
            setServerMsg(result.data.msg);
            setName('');
            setYear('');
            setMonth('');
            setDay('');
            setOrder1(['']);
            setOrder2(['']);
            setOrder3(['']);
            setOrder4(['']);
            setOrder5(['']);
            setCount(0);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header text-center bg-dark text-light '>
                    <p className='card-title'>
                        Agregar pedido
                    </p>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Nombre del cliente</label>
                            <input type='text' className='form-control' name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                ></input>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='year'>Año</label>
                                    <select className='form-control' name='year'
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                    >
                                        <option value={''}>-</option>
                                        <option value={2020}>2020</option>
                                        <option value={2021}>2021</option>
                                        <option value={2022}>2022</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='month'>Mes</label>
                                    <select className='form-control' name='month'
                                        value={month}
                                        onChange={(e) => setMonth(e.target.value)}
                                    >
                                        <option value={''}>-</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='form-group'>
                                    <label htmlFor='day'>Dia</label>
                                    <select className='form-control' name='day'
                                        value={day}
                                        onChange={(e) => setDay(e.target.value)}
                                    >
                                        <option value={''}>-</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                        <option value={13}>13</option>
                                        <option value={14}>14</option>
                                        <option value={15}>15</option>
                                        <option value={16}>16</option>
                                        <option value={17}>17</option>
                                        <option value={18}>18</option>
                                        <option value={19}>19</option>
                                        <option value={20}>20</option>
                                        <option value={21}>21</option>
                                        <option value={22}>22</option>
                                        <option value={23}>23</option>
                                        <option value={24}>24</option>
                                        <option value={25}>25</option>
                                        <option value={26}>26</option>
                                        <option value={27}>27</option>
                                        <option value={28}>28</option>
                                        <option value={29}>29</option>
                                        <option value={30}>30</option>
                                        <option value={31}>31</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='order1'>Orden1</label>
                            <input type='text' className='form-control' name='order1'
                                value={order1}
                                onChange={(e) => setOrder1(e.target.value)}
                                ></input>
                        </div>
                        {
                            count >= 2 && (
                        <div className='form-group'>
                            <label htmlFor='order2'>Orden2</label>
                            <input type='text' className='form-control' name='order2'
                                value={order2}
                                onChange={(e) => setOrder2(e.target.value)}
                                ></input>
                        </div>
                            )
                        }
                        {
                            count >= 3 && (
                        <div className='form-group'>
                            <label htmlFor='order3'>Orden3</label>
                            <input type='text' className='form-control' name='order3'
                                value={order3}
                                onChange={(e) => setOrder3(e.target.value)}
                                ></input>
                        </div>
                            )
                        }
                        {
                            count >= 4 && (
                        <div className='form-group'>
                            <label htmlFor='order4'>Orden4</label>
                            <input type='text' className='form-control' name='order4'
                                value={order4}
                                onChange={(e) => setOrder4(e.target.value)}
                                ></input>
                        </div>
                            )
                        }
                        {
                            count >= 5 && (
                        <div className='form-group'>
                            <label htmlFor='order5'>Orden5</label>
                            <input type='text' className='form-control' name='order5'
                                value={order5}
                                onChange={(e) => setOrder5(e.target.value)}
                                ></input>
                        </div>
                            )
                        }
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
                        <div className='d-flex'>
                            <button type='button' className='btn btn-danger mt-2'
                                onClick={(e) => setCount(count - 1)}
                            >
                                -
                            </button>

                            <div className='text-center mx-auto mt-2'>
                                    <button type='submit' className='btn btn-dark px-4'>
                                        CREAR
                                    </button>
                            </div>
                            <button type='button' className='btn btn-success mt-2'
                                onClick={(e) => setCount(count + 1)}
                            >
                                +
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrderForm;