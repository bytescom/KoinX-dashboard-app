import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Tokenomics() {
  const data = {
    labels: ['Crowdsale investors', 'Foundation'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [80, 20],
        backgroundColor: ['#3b82f6', '#facc15'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };


  return (
      <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md md:p-8">
        <h1 className="text-2xl font-semibold mb-4">Tokenomics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Initial Distribution</h2>
            <Pie data={data} options={options} />
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                <p className="text-gray-700">Crowdsale investors: 80%</p>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <p className="text-gray-700">Foundation: 20%</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
              ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
              bibendum amet enim sit eget leo amet. At metus orci augue fusce
              eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh
              sodales massa habitasse urna felis augue. Gravida aliquam
              fermentum augue eu. 
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
              ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
              bibendum amet enim sit eget leo amet. At metus orci augue fusce
              eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh
              sodales massa habitasse urna felis augue. Gravida aliquam
              fermentum augue eu.</p>
          </div>
        </div>
      </div>
  );
}

export default Tokenomics;
