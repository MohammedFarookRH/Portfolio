
import React from 'react';

const Education = () => {
  const education = [
    {
      year: '2022 - 2026',
      degree: 'B.Tech - Information Technology',
      institution: 'NANDHA ENGINEERING COLLEGE',
      grade: 'CGPA: 9.0 / 10',
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2021 - 2022 HSC (12th)',
      degree: 'Higher Secondary Certificate',
      institution: 'ARULNERI THIRUPPANI MANDRAM HIGHER SECONDARY SCHOOL',
      grade: 'Marks: 518 / 600 | Percentage: 89%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2019 - 2020 SSLC (10th)',
      degree: 'Secondary School Leaving Certificate',
      institution: 'ARULNERI THIRUPPANI MANDRAM HIGHER SECONDARY SCHOOL',
      grade: 'Marks: 455 / 500 | Percentage: 91%',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const certifications = [
    'MERN Full Stack Developer Certification',
    'Python Developer Certification'
  ];

  const internship = {
    title: 'MERN Stack Internship',
    company: 'NURTURE INFOTECH (ISO Certified)',
    description: 'Completed a hands-on MERN Stack internship where I developed a full-featured web application with authentication, CRUD functionality, and seamless API integration.'
  };

  return (
    <div className="min-h-screen relative pt-20">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Education & Certifications</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            <div className="space-y-6 relative">
<div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" style={{ left: '8px' }}></div>              {education.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  <div className={`absolute left-2 w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} -translate-x-1/2`}></div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                    <div className={`inline-block bg-gradient-to-r ${edu.color} text-white px-3 py-1 rounded-full text-sm mb-3`}>
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-[1.11em] text-blue-400 mb-2">{edu.institution}</p>
                    <p className="text-[1.1em] text-gray-300">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Internship */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-[1.6em] text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-[1.1em] text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-[1.6em] text-2xl font-bold text-white mb-4">Internship</h3>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-[1.15em] text-lg font-semibold text-white">{internship.title}</h4>
                <p className="text-[1.15em] text-blue-400 mb-2">{internship.company}</p>
                <p className="text-[1.1em] text-gray-300 text-sm leading-relaxed">{internship.description}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6">
              <h3 className="text-[1.6em] font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-white">
                <div className="text-[1.1em] flex items-center space-x-2">
                  <span>📞</span>
                  <span>+91 8838919004</span>
                </div>
                <div className="text-[1.08em] flex items-center space-x-2">
                  <span>📧</span>
                  <span>rhmohammedfarook@gmail.com</span>
                </div>
                <div className="text-[1.1em] flex items-center space-x-2">
                  <span>📍</span>
                  <span>Erode, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
