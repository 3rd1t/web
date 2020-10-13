import React from 'react'
import { Line } from 'react-chartjs-2'
import { chartData } from "./builder1"


class LineChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Market',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#AAF6FE',
            borderColor: '#1a202c',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [15.1, 2.1, 16, 32.4, 13.7, 1.4, 12, 21.8, -4.4, 31.5, 11]
          }, {
          label: 'Size',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#AAF6FE',
            borderColor: '#e53e3e',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.3, 12, 19, 21, 23, 26, 19, 31, 28, 24, 7]
          }, {
          label: 'Value',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#AAF6FE',
            borderColor: '#38a169',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 3.7, 14.5, 16, 19, 20, 18, 22, 26, 24, 39]
          }, {
            label: 'Momentum',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#AAF6FE',
            borderColor: '#667eea',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [21, 11, 13, 19, 17, 9, 27, 29, 32, 36, 28]
          }
        ]
      }
    }
  }


  render() {
    return (
      <div className="LineChart">
        <Line
          data={this.state.chartData}
          width={1000}
          height={500}
          options={{
            title:{
              display:true,
              fontSize:24,
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
      </div>
    )
  }
}


export default LineChart
