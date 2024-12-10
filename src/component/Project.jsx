import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'Streaming App',
    description: 'A React-based movie app featuring dynamic routing, API integration, and a sleek UI',
    link: 'https://steaming-app-react.vercel.app/',
    image: 'stream.png'
  },
   {
    title: 'real-estate-website',
    description: 'Developed a fully responsive Real Estate websiteusing React, Tailwind CSS, and Firebase.',
    link: 'https://real-estate-website-c4nm.vercel.app/',
    image: 'realestae.png'
  },
  {
    title: 'WeatherWeb',
    description: 'Developed a real-time weather application usingHTML, CSS, and JavaScript.',
    link: 'https://madhusmita-masanta.github.io/WeatherWeb/',
    image: 'web.png'
  },
  {
    title: 'Todo List',
    description: 'Developed a fully responsive Todo List',
    link: 'https://madhusmita-masanta.github.io/Brainwave_Matrix_Intern/',
    image: 'todolist.png'
  },
  
];
const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className=" bg-white-900 shadow-md rounded-lg p-6 m-4 w-full md:w-1/4 lg:w-1/4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out" data-aos="zoom-in">
      <img className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110" src={image} alt={title} />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href={link} className="mt-4 inline-block text-blue-500 hover:text-blue-700">View Project</a>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center ">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
