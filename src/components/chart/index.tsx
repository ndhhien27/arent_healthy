import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LineProps {
  options?: ChartOptions<'line'>;
  data?: ChartData<'line'>;
}

function Chart({ data: dataProp, options }: LineProps) {
  const labels = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
      },
    ],
  };

  return (
    <Line
      options={{
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: '#FFFFFF',
              tickColor: '#FFFFFF',
            },
            ticks: {
              color: '#FFFFFF',
            },
          },
          y: {
            display: false,
          },
        },
        ...options,
      }}
      data={dataProp || data}
    />
  );
}

export default Chart;
