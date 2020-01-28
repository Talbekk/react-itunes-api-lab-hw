import React from 'react';

const ChartItem = (props) => 
    <div className = "chart-item">     
        <li>
            <p>{props.title}</p>
            <p>{props.children}</p>
        </li>
    </div>


export default ChartItem;