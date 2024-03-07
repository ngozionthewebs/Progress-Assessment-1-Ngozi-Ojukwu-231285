// bar.js
import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Code to manipulate the chart using the ref
    // This might include setting up options, updating data, etc.
  }, []); // Empty dependency array ensures the effect runs only once

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Bar Chart Example',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default BarChart;
