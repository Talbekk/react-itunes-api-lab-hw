import React from 'react'
import { render } from '@testing-library/react'
import ChartItem from './ChartItem'
import './ChartList.css';

const ChartList = ({chart}) => {
    const chartNodes = chart.map(item =>{
        return (
    <ChartItem title={item["im:name"].label} key={item.id}>{item["im:artist"].label}</ChartItem>
        )
    })

    return(
        <div className="chart-list">
            <ol>
                {chartNodes}
            </ol>
        </div>
    )
}
export default ChartList;