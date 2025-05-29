import { useEffect, useState } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['MERN Stack Developer', 'Full Stack Engineer', 'Web Developer', 'Software Developer'];

  useEffect(() => {
    const role = roles[currentIndex % roles.length];
    let index = 0;
    const interval = setInterval(() => {
      if (index <= role.length) {
        setDisplayText(role.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="min-h-screen relative flex items-center justify-center overflow-hidden mt-[70px] md:mt-0 p-[10px]"
      id="home"
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[1.5em] text-gray-300 font-light">Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MOHAMMED
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                FAROOK R
              </span>
              <br />
              <span className="text-gray-400 text-3xl lg:text-4xl font-normal">
                DEVELOPER
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-red-400 font-medium">
              I'm a {displayText}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              A passionate developer focused on creating innovative solutions with a strong foundation in full-stack technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full text-[1.2em] text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Download Resume
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Contact Me
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-400 px-8 py-3 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/mohammedfarookr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/MohammedFarookRH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:rhmohammedfarook@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Content - Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center w-80 h-80">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 w-80 h-80 rounded-full border-2 border-purple-500/30 animate-spin" style={{ animationDuration: '20s' }}></div>

            {/* Avatar image centered in the circle */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 flex items-center justify-center z-10">
              <img
                src="/photo/farookk.png"
                alt="Mohammed Farook R"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>

            {/* Floating elements around avatar */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-0 w-4 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-0 w-4 h-4 border border-purple-400 rotate-45 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;