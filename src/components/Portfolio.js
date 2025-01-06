import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope,FaWhatsappSquare } from 'react-icons/fa';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import ContactMe from './ContactMe';
import MenuIcon from '../images/menu.png';
import ProfileImage from '../images/profile.png';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  
  const phoneNumber = "+254708962221";
  const whatsappLink = `https://wa.me/${phoneNumber}`;







  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 bg-black border-b border-gray-700 z-50 flex justify-between items-center px-6 py-4">
          <div className="text-lg font-bold">Kevin Lagat</div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/skills" className="hover:text-gray-400">Skills</Link>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
            <Link to="/resume" className="hover:text-gray-400">Resume</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact Me</Link>
          </nav>
          <div className="md:hidden bg-gray-300">
            <img
              src={MenuIcon}
              alt="Menu"
              className="w-8 h-8 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </header>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="fixed top-16 right-0 bg-gray-800 text-white w-48 shadow-lg rounded-lg z-50">
            <Link
              to="/skills"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
        <div style={{ height: '20vh' }}>
       {/* Content that will be inside the div (optional) */}
        </div>

        {/* Main Content */}
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-8">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Kevin Lagat</h1>
            <p className="text-gray-400 text-md md:text-x0.5 mb-6">
            Innovative software developer passionate about crafting elegant, efficient solutions using emerging technologies.
            Driven to create impactful products that solve real-world problems by pushing technological boundaries..
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-col items-center lg:items-end mt-6 lg:mt-0">
            <img
              src={ProfileImage}
              alt="Developer"
              className="w-48 h-48 object-cover shadow-lg "
            />
            <p
              className="text-gray-400 text-sm italic mt-2"
              style={{ fontFamily: 'Harlow Solid Italic' }}
            >
              Software Dev
            </p>
          </div>
        </section>

        {/* Routes */}
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black py-6">
          <div className="text-center">
            <div className="flex justify-center space-x-4 text-2xl mb-4">
              <a href="https://github.com/lag-art" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kevin-lagat-4996a0278/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/dev_lagart/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="mailto:kevinlagart@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaEnvelope />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"className="hover:text-gray-400">
                <FaWhatsappSquare />
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2025 Kevin Lagat. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default Portfolio;

