// import { useState } from "react";

// const Tabs = () => {
//     const [activeTab, setActiveTab] = useState("Overview");

//     const tabs = [
//         "Overview",
//         "Fundamentals",
//         "News Insights",
//         "Sentiments",
//         "Tokenomics",
//         "Team",
//         "Technicals",
//     ];

//     return (
//         <div className="flex gap-5 border-b border-gray-400 bg-[#D3E0E6] scroll-auto">
//             {tabs.map((tab) => (
//                 <button
//                     key={tab}
//                     className={`text-lg font-medium px-2 ${activeTab === tab
//                             ? "text-blue-600 border-b-2 border-blue-600"
//                             : "text-gray-500 hover:text-gray-700"
//                         }`}
//                     onClick={() => setActiveTab(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Tabs;


import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        "Overview",
        "Fundamentals",
        "News Insights",
        "Sentiments",
        "Tokenomics",
        "Team",
        "Technicals",
    ];

    return (
        <div className="flex flex-wrap p-4 lg:p-4 md:p-1 gap-3 md:gap-5 border-b border-gray-400 bg-[#D3E0E6] overflow-x-auto">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`text-sm md:text-lg font-medium px-2 py-1 whitespace-nowrap ${
                        activeTab === tab
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;

