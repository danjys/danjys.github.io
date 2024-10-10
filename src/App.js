// App.jsx
import React from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 z-50">
      <ul className="flex justify-center space-x-8">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-lg hover:text-blue-400 transition-colors"
            >
              {section.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform the scroll progress to animate the SVG
  const y = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 text-white pt-20"
    >
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>

      {/* Animated SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-32 h-32 text-white"
        style={{ marginBottom: '2rem' }}
        style={{ y, opacity }}  // Linked to scrollYProgress
      >
        <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
      </motion.svg>

      {/* Add more content below */}
    </motion.section>
  );
};

const projects = [
  {
    name: 'Project One',
    description: 'A cool project using React and Node.js.',
    link: 'https://github.com/user/project-one',
  },
  {
    name: 'Project Two',
    description: 'A mobile app built with Flutter.',
    link: 'https://github.com/user/project-two',
  },
  {
    name: 'Project Three',
    description: 'A data visualization project with D3.js.',
    link: 'https://github.com/user/project-three',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt={project.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {project.name}
            </h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              View Project
            </a>
          </motion.div>
          
          ))}
        </div>
      </div>
    </section>
  );
};


const Contact = () => (
  <motion.section
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold">Get in Touch</h2>
  </motion.section>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
