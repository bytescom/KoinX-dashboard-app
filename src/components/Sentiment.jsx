import React from "react";

// Reusable Card for Key Events
const KeyEventCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg flex gap-4 items-start shadow-sm ${bgColor}`}>
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
        <img src={icon} alt="Event Icon" className="w-6 h-6" />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Reusable Analyst Estimate Bar
const AnalystBar = ({ label, percentage, color }) => {
  return (
    <div className="flex items-center gap-4 mb-2">
      <span className="w-10 text-sm font-medium text-gray-700">{label}</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="w-10 text-sm font-medium text-gray-700">
        {percentage}%
      </span>
    </div>
  );
};

const Sentiment = () => {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
      {/* Sentiment Title */}
      <h2 className="text-2xl font-semibold mb-4">Sentiment</h2>

      {/* Key Events Section */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
          Key Events
          <span className="text-gray-400 text-sm"></span>
        </h3>
        <div className="grid grid-cols-1 overflow-clip md:grid-cols-2 gap-4">
          <KeyEventCard 
            icon="https://via.placeholder.com/32" // Replace with icon URL
            title="lorem23 Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis."
            description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum"
            bgColor="bg-blue-50"
          />
          <KeyEventCard
            icon="https://via.placeholder.com/32" // Replace with icon URL
            title="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.."
            description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum"
            bgColor="bg-green-50"
          />
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
          Analyst Estimates
          <span className="text-gray-400 text-sm">(i)</span>
        </h3>
        <div className="flex items-center gap-6 m-4">
          {/* Buy Percentage Circle */}
          <div className="relative z-0 flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
            <span className="text-lg font-semibold text-green-600">76%</span>
          </div>

          {/* Estimate Bars */}
          <div className="flex-1">
            <AnalystBar
              label="Buy"
              percentage={76}
              color="bg-green-600"
            />
            <AnalystBar
              label="Hold"
              percentage={8}
              color="bg-gray-400"
            />
            <AnalystBar
              label="Sell"
              percentage={16}
              color="bg-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
