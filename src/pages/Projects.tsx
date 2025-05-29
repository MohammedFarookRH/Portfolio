import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Web Application (MERN Stack)",
      description: "Built a fully functional shopping site with authentication, cart, and order features using MERN stack. Deployed responsive front-end with React.js and managed backend APIs and database using Node.js, Express.js, and MongoDB.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: [
        "User Authentication & Authorization",
        "Shopping Cart Functionality",
        "Order Management System",
        "Responsive Design",
        "RESTful API Integration"
      ]
    },
    {
      title: "Expense Tracker App (HTML, CSS, JavaScript, MySQL)",
      description: "Developed a responsive app to track and categorize expenses with user login and local storage. Implemented MySQL database for persistent data management and CRUD operations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "MySQL"],
      features: [
        "Expense Categorization",
        "User Authentication",
        "Local Storage Integration",
        "Data Visualization",
        "CRUD Operations"
      ]
    },
    {
      title: "Restaurant Website with Food Ordering System (MERN Stack)",
      description: "Created a restaurant site with real-time ordering, admin dashboard, and dynamic menu features. Used React for UI and Node.js/Express.js with MongoDB for backend and data handling.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Real-time Ordering System",
        "Admin Dashboard",
        "Dynamic Menu Management",
        "Order Tracking",
        "User Reviews & Ratings"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 transition-colors duration-300">Project Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300">{project.title}</h3>
                  <p className="text-[1.17em] text-gray-300 mb-6 leading-relaxed transition-colors duration-300">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 transition-colors duration-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-[1.4em] font-semibold text-white mb-4 transition-colors duration-300">Key Features:</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-[1.1em] text-gray-300 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
