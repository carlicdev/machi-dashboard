import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { MachiContext } from '../../context/context';

const BarChart = () => {
    const { salesByProduct } = useContext(MachiContext);

    const getLabels = () => {
            let labels = [];
            salesByProduct.map(i => {
                labels.push(i.product);
            });
            return labels;
        }
    
    const getData = () => {
            let data = [];
            salesByProduct.map(i => {
                data.push(i.sales);
            });
            return data;
        }

    return (
        <div className='card text-center my-5'>
            <div className='card-header bg-dark text-light'>
                <h1>Ventas por producto</h1>
            </div>
            <div className='card-body'>
                <Bar 
                data={{
                    labels: getLabels(),
                    datasets: [{
                        label: 'Ventas por producto',
                        backgroundColor: 'bg-primary',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: getData()
                    }]
                }}
                width={100}
                height={500}
                options={{
                    maintainAspectRatio: false
                }}
                />
            </div>
        </div>
    )
}

export default BarChart;
