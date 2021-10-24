import React from 'react';
import '../componentStyling/Chart.css';
import ChartBarComponent from './ChartBarComponent';

const ChartComponent = (props) => {
    const dataValues = props.dataItems.map(dataItem => dataItem.value);
    const max = Math.max(...dataValues);

    return (
        <div className='chart'>
            {props.dataItems.map(dataItem => (
                <ChartBarComponent
                    key={dataItem.label}
                    value={dataItem.value}
                    maxValue={max}
                    label={dataItem.label} />))}
        </div>
    )
}
export default ChartComponent;
