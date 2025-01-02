import React from 'react';
import trendyImage from '../images/trendy.png';
import futuristicImage from '../images/futuristic.png';

const Projects = () => {
  return (
    <section className="bg-gray-800 text-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>

      {/* Project 1 */}
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 bg-black">Trendy Nails Spot</h3>
          <p className="text-lg text-gray-100 mb-6">
            I developed this appointment booking site for Trendy Nails Spot nail salon, focusing on a clean and user-friendly design. I used React to create a dynamic and interactive experience, allowing users to easily select a technician, date, and time. The clear layout, with distinct sections for booking details and technician selection, makes the process intuitive and efficient, enhancing the overall user experience.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={trendyImage}
            alt="Trendy Nails Spot"
            className="w-full max-w-md object-cover rounded-lg shadow-lg animate-bounce-and-resize"
          />
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            src={futuristicImage}
            alt="Futuristic Travel Company"
            className="w-full max-w-md object-cover rounded-lg shadow-lg animate-bounce-and-resize"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-x1 font-semibold mb-4 bg-black">Futuristic Travel Company</h3>
          <p className="text-lg text-gray-100">
            I developed this website for a futuristic travel company, aiming for a clean and modern aesthetic. I used React to create a responsive layout with clear calls to action. The prominent use of blue and the inclusion of various car brand logos subtly reinforce the theme of advanced transportation and a wide selection of vehicles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
