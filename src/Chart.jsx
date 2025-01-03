// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Sample data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Chart1',
        data: [65, 59, 80, 51, 56, 55, 70],
        fill: false,
        backgroundColor: 'rgb(8, 253, 0)',
        borderColor: 'rgb(8, 253, 0)',
        tension: 0.1, 
      },
      {
        label: 'Chart2',
        data: [45, 79, 20, 41, 20, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Chart3',
        data: [91, 21, 54, 91, 76, 35, 40],
        fill: false,
        backgroundColor: 'rgb(255, 0, 149)',
        borderColor: 'rgb(255, 0, 149)',
        tension: 0.1, 
      },
      {
        label: 'Chart4',
        data: [, 99, 10, 21, 16, 45, 40],
        fill: false,
        backgroundColor: 'rgb(204, 0, 255)',
        borderColor: 'rgb(204, 0, 255)',
        tension: 0.1, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datasets: {
        formatter:(value ,content) => {
            const total =content.Chart.data.dataset[0].data.reduce((acc, v)=> acc + v , 0);
            const percenteage =((value / total) * 100).toFixed(2)+ '%';
            return percenteage;
        }
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
    // animation: {
    //     tension: {
    //         duration: 1000,
    //         easing: 'linear',
    //         from: 1,
    //         to: 0,
    //         loop: true,

    //     },
    // },
      scales: {
        x: {
            grid: {
                color: 'rgba(255, 0, 0, 0.5)',
                lineWidth: 1,
            },
        },
        y: {
            grid: {
                color: 'rgba(240, 0, 0, 0.5)',
                lineWidth: 1,
            },
        
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;