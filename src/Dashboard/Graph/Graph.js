import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import '../../css/Graph.css';

function chartData() {
    return {
        labels: ['2018.10.25', '2018.10.26', '2018.10.27', '2018.10.28', '2018.10.29', '2018.10.30', '2018.10.31'],
        datasets: [
            {
                label: 'PM2008 Cubic',
                borderColor: '#66a6ff',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'DHT-11',
                borderColor: '#89F7FE',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                data: [76, 40, 30, 70, 25, 38, 90]
            },
            {
                label: 'Temperature Sensor',
                borderColor: '#ff9328',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                data: [37, 80, 25, 38, 10, 60, 8]
            }
        ]
    }
}

const options = {
    scaleShowGridLines: false,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: false,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: false,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: false,
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}


class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: chartData()
        }
    }
    render() {
        return(
            <div className="Graph">
                <h2><span>센서 그래프</span> Sensor Graph</h2>
                <Line
                    data={this.state.data}
                    options={options}
                    width="780"
                    height="250"
                />
            </div>
        );
    }
}

export default Graph;