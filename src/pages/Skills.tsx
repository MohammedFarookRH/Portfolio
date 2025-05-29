import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical Skills');
  const [inView, setInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const technicalSkills = {
    'Frontend Development': [
      { name: 'React.js', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ],
    'Backend Development': [
      { name: 'Node.js', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Python', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
    ],
    'Data Visualization': [
      { name: 'Power BI', level: 90, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg' },
      { name: 'Numpy', level: 90 , icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tableau.svg' },
      { name: 'MS Excel', level: 95, icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg' }
    ],
    'Programming Languages': [
      { name: 'Java', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C', level: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' }
    ],
    'Tools & Platforms': [
      { name: 'Git', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'VS Code', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Netlify', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' }
    ]
  };

  const softSkills = [
    'Agile Methodology',
    'Responsive Design',
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Critical Thinking'
  ];

  return (
    // ...existing code...
    <div className="min-h-screen relative pt-20 bg-gray-900">
      <div className="container mx-auto px-6 py-12 relative z-10" ref={skillsRef}>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Technical Skills</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {['Technical Skills', 'Soft Skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'Technical Skills' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div
                key={category}
                className="rounded-xl p-6 border border-gray-700/60 bg-gradient-to-br from-blue-900/20 to-purple-900/20 shadow-lg backdrop-blur-md transition-all duration-300"
                style={{
                  // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  // border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                  {category}
                </h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 flex items-center">
                          <img src={skill.icon} alt={skill.name} className="w-10 h-8 mr-2" />
                          {skill.name}
                        </span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#232946] rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl p-8 border border-gray-700/60 bg-gradient-to-br from-[#232946]/80 to-[#1a1a2e]/80 shadow-lg backdrop-blur-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Soft Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-center">
                    <span className="text-white font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;