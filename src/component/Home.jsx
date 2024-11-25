import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation

function Home() {
  const handleDownloadResume = () => {
    // Your resume PDF file
    window.open('/Madhusmita Masanta (2).pdf', '_blank');
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundColor: '#070b1c',
          boxShadow: '0px 0px 50px 20px rgba(160,166,214,0.2) inset', // Glowing background effect

        }}
      >
        {/* Social media icons in the top-right corner */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <a
            href="https://github.com/Madhusmita-Masanta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.instagram.com/mooniephilee__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/madhusmita-masanta-ab44902b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Centered content with image on the left */}
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center">
          {/* Image box */}
          <div className="md:mr-10 mb-10 md:mb-0 relative">
            <img
              src="./portofolio.jpeg"
              alt="Portfolio"
              className="w-64 h-64 rounded-full object-cover shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
              
            />
            {/* Glowing ring around image */}
            <div
              className="absolute inset-0 rounded-full opacity-75 animate-pulse"
             
            ></div>
          </div>

          {/* Text content */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-sans text-2xl  mb-4 text-white">I'm Madhusmita Masanta</h2>

            {/* Typing animation for job title */}
            <h2 className="text-1xl font-semibold text-white">
              <TypeAnimation
                sequence={[
                  "I'm a Frontend Developer",
                  2000, 
                  "I build responsive websites", 
                  2000, 
                  "I love creating UI/UX designs", 
                  2000,
                  "I'm a React Developer", 
                  2000, 
                  '', 
                  1000, 
                ]}
                wrapper="span"
                speed={50} // Speed of typing
                repeat={Infinity} // Loop indefinitely
              />
            </h2>

            {/* Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="mt-6 px-4 py-2 bg-[#f27e49] text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              style={{ cursor: 'pointer' }}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* SVG Wave at the bottom */}
        <div className="relative" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#f3f4f6"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Home;
