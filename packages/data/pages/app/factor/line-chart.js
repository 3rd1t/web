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
          }
        ]}
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
            },
            scales: {
              xAxes: [{
                 gridLines: {
                    display: false
                 }
              }],
              yAxes: [{
                 gridLines: {
                    display: false
                 }
              }]
            }
          }}
        />
      </div>
    )
  }
}


export default LineChart

/*
import React from 'react'
import { Line } from 'react-chartjs-2'
import { chartData } from "./builder1"


class LineChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: ['Factor Model'],
        datasets: [1, 4, 6, 9, 4]
      }
    }
  }

  
  getData = canvas => {
    const data = this.state.data
    if (data.datasets) {
      const colors = ['#319795', '#805ad5']
      data.datasets.forEach((set, i) => {
        set.backgroundColour = this.setGradientColor(canvas, colors[i])
        set.borderColor = 'white'
        set.borderWidth = 2
      })
    }
    return data
  }
  

  render() {
    return (
      <div style={{ position: "relative", width: 1000, height: 800}}>
        <Line
          options={{
            responsive: true
            }}
            data={this.state.getData}
        />
      </div>
    )}
}

export default LineChart
*/