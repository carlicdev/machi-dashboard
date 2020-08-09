import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { MachiContext } from '../../context/context';

const Chart = () => {
    const { salesByProduct } = useContext(MachiContext);

    const getLabels = () => {
        let tempLabels = [];
        salesByProduct.map(i => {
            tempLabels.push(i.product)
        });
        return tempLabels;
    }

    const getData = () => {
        let tempData = [];
        salesByProduct.map(i => {
            tempData.push(i.percent)
        })
        return tempData;
    }

    const getBackgroundColors = () => {
        let tempColors = [];
        salesByProduct.map(i => {
            tempColors.push(i.color)
        })
        return tempColors;
    }


    const labels = getLabels()
    const dataGet = getData()
    const myColors = getBackgroundColors()
    return (
        <div className='card text-center my-5'>
            <div className='card-header bg-dark text-white'>
                <h1>Preferencia del producto</h1>
            </div>
            <div className='card-body'>
                <Pie data={{
                    datasets: [{
                        data: dataGet,
                        backgroundColor: myColors,
                    }],
                    labels: labels
                }} 
                width={100}
                height={75}
                />
            </div>
        </div>
    )
}

export default Chart
