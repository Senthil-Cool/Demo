import React from 'react';

// Sample team member data
const teamMembers = [
  {
    name: 'Sourabh Purwar',

    designation: 'Co-Founder',

    profileLink: '#',
    imageSrc: '/images/sourabh.svg', // Replace with the actual image path
  },
  {
    name: 'Amit Kumar',

    designation: 'Co-Founder',

    profileLink: '#',
    imageSrc: '/images/amit.svg', // Replace with the actual image path
  },
  {
    name: 'Swapna Shenvi',

    designation: 'HR Manager',

    profileLink: '#',
    imageSrc: '/images/swapna.svg', // Replace with the actual image path
  },
  // {
  //   name: 'Mainak Chaudhuri',

  //   designation: 'SDE-1',

  //   profileLink: '#',
  //   imageSrc: '/images/sourabh.svg', // Replace with the actual image path
  // },
  // {
  //   name: 'Priyanka Panchal',

  //   designation: 'QA Engineer',

  //   profileLink: '#',
  //   imageSrc: '/images/sourabh.svg', // Replace with the actual image path
  // },
  // {
  //   name: 'Akshaya Vangari',

  //   designation: 'DevOps Trainee',

  //   profileLink: '#',
  //   imageSrc: '/images/sourabh.svg', // Replace with the actual image path
  // },
];

const Teams = () => {
  return (
    <div className=" p-8 !bg-black orange_dots" style={{ fontFamily: 'Roboto, sans-serif' }} id="team">
      <h2 className="text-center text-white text-2xl font-bold mb-10">
        The Team
      </h2>
      {/* Container for grid items */}
      <div className="flex flex-wrap gap-x-30 gap-y-10 md:gap-y-16 justify-center">
        {/* First row of team members */}
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-center space-x-4 lg:w-1/3 md:w-1/2 w-full ">
            {/* Image */}
            <img
              src={member.imageSrc}
              alt={member.name}
              className="h-20 w-20 rounded-full border-2 border-white"
            />

            {/* Text Content */}
            <div>
              <div className="text-white font-semibold">{member.name}</div>
              <div className="text-gray-400">{member.designation}</div>
              <a
                href={member.profileLink}
                className="text-yellow-500 hover:text-yellow-400"
              >
                RiseON Profile &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
