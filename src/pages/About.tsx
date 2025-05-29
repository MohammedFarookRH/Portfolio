import React from 'react';

const About = () => {
  const quickFacts = [
    { text: 'MERN Stack Specialist', color: 'bg-blue-600' },
    { text: 'ISO Certified Training', color: 'bg-purple-600' },
    { text: 'Full-Stack Development', color: 'bg-blue-600' },
    { text: 'Agile Methodology', color: 'bg-purple-600' }
  ];

  const languages = ['English', 'Tamil', 'Urdu', 'Hindi'];

  return (
    <section id="about" className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 transition-colors duration-300">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-[1.6rem] font-semibold text-white mb-4 transition-colors duration-300">Professional Summary</h3>
            <p className=" text-[1.03rem] text-gray-200 leading-relaxed transition-colors duration-300 text-justify">
              Certified MERN Full Stack Developer with hands-on training from NURTURE INFOTECH (ISO Certified). 
              Skilled in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p className="text-[1.03rem] text-gray-200 leading-relaxed transition-colors duration-300 text-justify">
              Proficient in front-end and back-end development with strong knowledge of RESTful APIs and MVC 
              architecture. Experienced in Python, C, Java, data analysis using Pandas, NumPy, Power BI, and MySQL.
            </p>
            <p className="text-[1.03rem] text-gray-200 leading-relaxed transition-colors duration-300 text-justify">
              Familiar with version control and deployment using Git, Netlify. Passionate about writing clean, 
              scalable code and solving real-world problems in Agile/DevOps environments.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl transition-colors duration-300">
              <h4 className="text-xl font-semibold text-white mb-4 transition-colors duration-300">Quick Facts</h4>
              <ul className="space-y-3">
                {quickFacts.map((fact, idx) => (
                  <li className="flex items-center" key={fact.text}>
                    <span className={`w-2 h-2 ${fact.color} rounded-full mr-3`}></span>
                    <span className="text-gray-200 transition-colors duration-300">{fact.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-xl transition-colors duration-300">
              <h4 className="text-xl font-semibold text-white mb-4 transition-colors duration-300">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-gray-200 shadow-sm transition-colors duration-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;