"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink, Moon, Sun, Code, Trophy, User, Briefcase, MessageCircle, Star, Calendar, Users, Award, Zap, Database, Server, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  const roles = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Competitive Programmer'];
  const typewriterRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentRole]);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Copy email function
  const copyEmail = () => {
    navigator.clipboard.writeText('kaykobadhossaintanjil01@gmail.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Download CV function
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Kaykobad_Hossain_Tanjil_Resume.pdf'; 
    link.download = 'Kaykobad_Hossain_Tanjil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  // Skills data
  const skills = [
    { name: 'JavaScript', level: 90, icon: '🟨', category: 'Frontend' },
    { name: 'Go', level: 85, icon: '🐹', category: 'Backend' },
    { name: 'React.js', level: 88, icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', level: 82, icon: '🟢', category: 'Backend' },
    { name: 'MongoDB', level: 80, icon: '🍃', category: 'Database' },
    { name: 'Docker', level: 75, icon: '🐳', category: 'Tools' },
    { name: 'C++', level: 92, icon: '🔷', category: 'Languages' },
    { name: 'Next.js', level: 85, icon: '▲', category: 'Frontend' }
  ];

  // Projects data
  const projects = [
    {
      title: 'Car Rental Website',
      description: 'Full-stack web application with authentication & cloud storage. Features JWT authentication, custom middleware security, and integrated cloud storage using Multer & ImageKit.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'ImageKit'],
      github: 'https://github.com/shahariat39/WEB-350',
      live: '#',
      image: '🚗',
      stats: { endpoints: '20+', features: 'Authentication & Storage' }
    },
    {
      title: 'Golang E-Commerce API',
      description: 'Scalable e-commerce backend with containerization. Built with Go/Gin framework featuring 15+ endpoints, MongoDB data modeling, and Docker containerization.',
      tech: ['Go', 'Gin', 'MongoDB', 'Docker', 'JWT'],
      github: 'https://github.com/kaykobadhossain/GOLANG-E-COMMERCE',
      live: '#',
      image: '🛒',
      stats: { endpoints: '15+', architecture: 'Microservices Ready' }
    },
    {
      title: 'Go-React CRUD App',
      description: 'Modern full-stack application with optimistic updates. Features responsive design, light/dark mode, and data caching with TanStack Query.',
      tech: ['Go', 'React', 'TypeScript', 'ChakraUI', 'TanStack Query'],
      github: 'https://github.com/kaykobadhossain/GO-REACT-MONGODB-CRUD/',
      live: '#',
      image: '⚡',
      stats: { features: 'Real-time Updates', ui: 'Responsive Design' }
    },
    {
      title: 'Snake Game (C++ & SFML)',
      description: 'Classic arcade game with modern game state management. Features 4-state game system, persistent high-score system, and progressive difficulty.',
      tech: ['C++', 'SFML', 'Game Dev', 'File I/O'],
      github: 'https://github.com/kaykobadhossain/SNAKE-GAME',
      live: '#',
      image: '🐍',
      stats: { states: '4 Game States', features: 'Persistent Scores' }
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: 'TOP-5 at LU CSE CARNIVAL-2023',
      description: 'Hackathon Competition',
      icon: '🏆',
      date: '2023',
      link: 'https://github.com/Arnob-sen/AniHelp'
    },
    {
      title: '600+ Problems Solved',
      description: 'Across competitive programming platforms',
      icon: '💻',
      date: 'Ongoing'
    },
    {
      title: 'Codeforces MAX Rating',
      description: '1131 Rating Achievement',
      icon: '⭐',
      date: '2024'
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          Email copied to clipboard! 📧
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kaykobad
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={downloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={`py-16 min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 ${ isDark ? ' dark:from-gray-900 dark:to-gray-800' : 'bg-white'}`}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kaykobad</span>
              </h1>
              <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-10">
                <span className="text-blue-600 dark:text-blue-400">{typedText}</span>
                <span className="animate-pulse">|</span>
              </div>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate Software Engineering student at SUST with expertise in full-stack development and competitive programming. 
                I love building scalable applications and solving complex problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-xl flex items-center gap-2"
              >
                <Briefcase size={20} />
                View My Work
              </button>
              <button
                onClick={copyEmail}
                className={`px-8 py-4 rounded-lg hover:scale-105 transform transition-all duration-300 border-2 border-blue-600 hover:shadow-lg flex items-center gap-2 ${isDark ? 'text-blue-400 hover:bg-blue-600 hover:text-white' : 'text-blue-600 hover:bg-blue-600 hover:text-white'}`}
              >
                <Mail size={20} />
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '600+', label: 'Problems Solved' },
                { number: '4', label: 'Major Projects' },
                { number: '1131', label: 'CF Max Rating' },
                { number: '2024', label: 'Expected Graduation' }
              ].map((stat, index) => (
                <div key={index} className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                  <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I&apos;m a passionate Software Engineering student at Shahjalal University of Science & Technology, 
                currently in my 4th year with a CGPA of 3.21. My journey in tech is driven by curiosity and 
                the desire to create impactful solutions.
              </p>
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                With 600+ problems solved across competitive programming platforms and experience in full-stack 
                development, I enjoy tackling challenges that push my limits and expand my knowledge.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} hover:scale-105 transition-all duration-300`}>
                  <MapPin className="text-blue-600 mb-2" size={24} />
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</div>
                  <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sylhet, Bangladesh</div>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} hover:scale-105 transition-all duration-300`}>
                  <Calendar className="text-blue-600 mb-2" size={24} />
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Experience</div>
                  <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>3+ Years Coding</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Facts</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'} hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{achievement.icon}</span>
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{achievement.title}</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{achievement.description}</p>
                      <span className="text-blue-600 text-xs">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-2 cursor-pointer ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-blue-50'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
                    <span className="text-xs text-blue-600">{skill.category}</span>
                  </div>
                </div>
                <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `80%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 transform cursor-pointer ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-50'}`}>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{project.image}</span>
                    <div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-blue-600 text-white rounded">{project.stats.endpoints || project.stats.features}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience/Activities Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Leadership & <span className="text-blue-600">Activities</span>
          </h2>
          
          <div className="space-y-8">
            <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-lg">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Treasurer</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Narsingdi Student&apos;s Association, SUST</p>
                  <span className="text-blue-600 text-sm">July 2024 – Present</span>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-600 text-white rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Programming Contest Organizer</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>SUST SWE Technovent 2023</p>
                  <span className="text-purple-600 text-sm">Coordinated 200+ participants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let&apos;s Connect!</h3>
              <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology!
              </p>
              
              <div className="space-y-4">
                <div className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={copyEmail}>
                  <Mail className="text-blue-600" size={24} />
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>kaykobadhossaintanjil01@gmail.com</span>
                </div>
                
                <div className={`flex items-center gap-4 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <Phone className="text-blue-600" size={24} />
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>+8801927363593</span>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/kaykobadhossain" className="p-3 bg-gray-800 text-white rounded-lg hover:scale-110 transition-all duration-300">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/kaykobad-hossain-tanjil/" className="p-3 bg-blue-600 text-white rounded-lg hover:scale-110 transition-all duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="p-3 bg-purple-600 text-white rounded-lg hover:scale-110 transition-all duration-300">
                    <Globe size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <form className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 rounded-lg transition-all duration-300 focus:scale-105 ${isDark ? 'bg-gray-600 text-white border-gray-600' : 'bg-white border-gray-300'} border focus:border-blue-600 focus:outline-none`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={`w-full p-3 rounded-lg transition-all duration-300 focus:scale-105 ${isDark ? 'bg-gray-600 text-white border-gray-600' : 'bg-white border-gray-300'} border focus:border-blue-600 focus:outline-none`}
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 text-center ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
        <div className="max-w-6xl mx-auto px-4">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Kaykobad Hossain Tanjil.
          </p>
          <div className="mt-4">
            <button
              onClick={downloadCV}
              className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;