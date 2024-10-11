import { motion } from 'framer-motion';

const projects = [
    {
      name: 'JARVIS-Style AI Assistant with Advanced Voice Control and Facial Recognition',
      description: 'Full stack development : Engineered a JARVIS-like AI assistant using Python, HTML/JavaScript, and Eel.js to create a seamless connection between a powerful backend and an interactive frontend. This AI system mimics Tony Stark\'s iconic assistant, offering intelligent automation, real-time responses, and advanced security protocols ',
      link: 'https://github.com/danjys/jarvis',
    },
    {
      name: 'Airbnb',
      description: 'A mobile app built with Flutter.',
      link: 'https://github.com/user/project-two',
    },
    {
      name: 'Robinhood',
      description: 'A trading app.',
      link: 'https://github.com/user/project-three',
    },
    {
      name: 'Coinbase',
      description: 'Blockchain app.',
      link: 'https://github.com/user/project-three',
    },
    {
      name: 'Netflix',
      description: 'Blockchain app.',
      link: 'https://github.com/user/project-three',
    }
    // Add more projects here
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 bg-gray-100 py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Projects
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

  export default Projects;