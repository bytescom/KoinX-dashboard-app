import React from "react";

// let suppose the data is given
const teamMembers = [
  {
    name: "John Smith",
    designation: "Designation here",
    image: "./teamimg.svg", // Replace with actual image URL
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequatur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    image: "./teamimg.svg", // Replace with actual image URL
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequatur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "John Smith",
    designation: "Designation here",
    image: "./teamimg.svg", // Replace with actual image URL
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consequatur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];

const Team = () => {
  return (
    <section className="h-full w-full bg-white p-6 rounded-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold">Team</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>

        {/* Team Members */}
        <div className="mt-8 space-y-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-blue-100 p-6 shadow-md rounded-lg flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-28 rounded-lg object-cover" />
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-gray-500 text-xs">{member.designation}</p>
              </div>
              <div className="w-[85%]">
                <p className="text-gray-600 mt-4">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
