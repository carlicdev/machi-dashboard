import React, { useState } from 'react'

const OrderForm = () => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [order, setOrder] = useState('');


    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header text-center bg-dark text-light '>
                    <p className='card-title'>
                        Agregar orden
                    </p>
                </div>
                <div className='card-body'>
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
                        <label htmlFor='order'>Orden</label>
                        <textarea type='text' className='form-control' name='order'
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                            ></textarea>
                    </div>
                    <div className='text-center mx-auto mt-2'>
                            <button type='submit' className='btn btn-dark px-4'>
                                CREAR
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderForm;