import React from 'react';
import ResumePDF from './Kevin_Lagat.pdf';
import DownloadIcon from '../images/download.png';

const Resume = () => {
  const handleDownload = () => {
    // Download the PDF
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Kevin_Lagat_Resume.pdf';
    link.click();
  };

  return (
    <div className="bg-gray-900 text-white min-h-60 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p className="text-gray-300 text-sm mb-6">
        Click the button below to download my resume. 
      </p>
      <button
        onClick={handleDownload}
        className="flex items-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        <img
          src={DownloadIcon}
          alt="Download Icon"
          className="w-6 h-6 mr-2"
        />
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
