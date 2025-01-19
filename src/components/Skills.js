import React from 'react';
import JavascriptImage from '../images/javascript.jpeg';
import MongoImage from '../images/mongo.jpeg';
import ReactImage from '../images/react.jpeg';
import NodeImage from '../images/node.jpeg';
import PythonImage from '../images/python.jpeg';
import ChatImage from '../images/chat.jpeg';
import HtmlImage from '../images/html.jpeg';
import MachineImage from '../images/machine.jpeg';

const skillsData = [
  {
    name: 'JavaScript',
    description:
      'Creating dynamic user interfaces, handle user input, and manipulate the Document Object Model (DOM) to enhance website interactivity.',
    image: JavascriptImage,
  },
  {
    name: 'MongoDB',
    description:
      'Store and manage large volumes of unstructured or semi-structured data, building scalable and high-performance applications.',
    image: MongoImage,
  },
  {
    name: 'React JS',
    description:
      'Create reusable UI components, manage application state, and handle user interactions efficiently.',
    image: ReactImage,
  },
  {
    name: 'Node JS',
    description:
      'Build fast and scalable server-side applications, APIs, and real-time applications.',
    image: NodeImage,
  },
  {
    name: 'Python',
    description:
      'Leverage Python for a variety of programming needs including data analysis, backend development, and machine learning.',
    image: PythonImage,
  },
  {
    name: 'Prompt Engineering',
    description:
      'Craft instructions for AI models, generating creative text formats and intelligent solutions.',
    image: ChatImage,
  },
  {
    name: 'HTML5',
    description:
      'Create the structure and content of webpages, incorporating interactive elements with JavaScript.',
    image: HtmlImage,
  },
  {
    name: 'Machine Learning',
    description:
      'Craft compelling data visualizations and interactive dashboards using machine learning techniques.',
    image: MachineImage,
  },
];

const Skills = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-8 px-4">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="rounded-full w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
