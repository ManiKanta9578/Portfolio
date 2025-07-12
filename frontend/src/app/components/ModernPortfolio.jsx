'use client'
import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Zap, Users, Award, Calendar, MapPin, Building2, Sun, Moon } from 'lucide-react'

export default function ModernPortfolio() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  // Skills data
  const skills = [
    { name: 'React.js', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', level: 80, color: 'from-emerald-400 to-emerald-600' },
    { name: 'TypeScript', level: 75, color: 'from-blue-500 to-blue-700' }
  ]

  // Experience data
  const experiences = [
    {
      title: 'Software Developer',
      company: 'ZingHR',
      period: 'July 2023 - Present',
      location: 'Mumbai, Maharashtra',
      description: 'Developed dynamic UIs for core HRMS modules using React.js, Next.js, and Redux. Improved app performance by 30% with SSR optimization.',
      highlights: ['30% performance improvement', '40% reduction in API hits', '25% boost in sprint efficiency']
    },
    {
      title: 'Software Developer',
      company: 'Primus Global Technologies Pvt Ltd',
      period: 'Aug 2021 - Jun 2022',
      location: 'Bengaluru, Karnataka',
      description: 'Contributed to MERN-based SaaS platform for Satellite Imagery Booking with secure payments and JWT authentication.',
      highlights: ['Full-stack development', 'JWT authentication', 'E-commerce features']
    },
    {
      title: 'Web Development Trainee',
      company: 'AlmaBetter Edutech Pvt Ltd',
      period: 'Jul 2020 - Jul 2021',
      location: 'Bengaluru, Karnataka',
      description: 'Optimized database queries and back-end processes, leading to 30% reduction in API response time.',
      highlights: ['30% faster API response', '50% security improvement', '40% performance enhancement']
    }
  ]

  // Projects data
  const projects = [
    {
      title: "Advanced Todo App (Full-Stack)",
      description: "Production-grade task manager with offline support, JWT auth, and state-time travel",
      tech: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Node.js/Express", "MongoDB", "NextAuth.js", "PWA"],
      highlights: [
        "Implemented undo/redo functionality with useReducer + Immer",
        "Offline-first design with IndexedDB sync",
        "JWT authentication with secure cookie storage",
        "Animations with Framer Motion"
      ],
      github: "https://github.com/ManiKanta9578/advanced-todo-app.git",
      demo: "https://advanced-todo-app-ebon.vercel.app/",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: 'HRMS Dashboard',
      description: 'Comprehensive HR management system with employee tracking, payroll, and analytics.',
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/250',
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Satellite Imagery Platform',
      description: 'SaaS platform for booking and purchasing satellite imagery with advanced search filters.',
      tech: ['MERN Stack', 'JWT', 'Payment Gateway'],
      image: '/api/placeholder/400/250',
      color: 'from-blue-400 to-cyan-400'
    },
  ]

  // Stats data
  const stats = [
    { label: 'Years Experience', value: '4+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Happy Clients', value: '10+', icon: Users },
    { label: 'Awards', value: '3', icon: Award }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 65
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(id)
    }
  }

  const handleDownloadCV = () => {
    const cvUrl = '/images/Manikanta_Kotni_CV.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Manikanta_Kotni_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDemoClick = (demoUrl) => {
    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  const NavBar = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b h-16 ${isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm`}>
              MK
            </div>
            <span className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Manikanta
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ scale: 1.05 }}
                className={`px-2 py-2 text-sm font-medium transition-colors ${activeSection === item.id
                  ? 'text-blue-500'
                  : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
              }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'} `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden border-t ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            }`}
        >
          <div className="px-2 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-2 text-sm font-medium rounded-lg ${activeSection === item.id
                  ? 'bg-blue-500 text-white'
                  : isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                  setIsMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )

  const HeroSection = () => {
    const heroRef = useRef(null)
    const isInView = useInView(heroRef, { once: true })

    return (
      <section
        id="home"
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center px-2"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 md:mb-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'
                  } flex items-center justify-center`}>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    MK
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Manikanta Kotni
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
            >
              Full-Stack Developer & React Specialist
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
            >
              4+ years of experience building scalable web applications using the MERN stack.
              Strong expertise in React, Next.js, and Node.js with a focus on performance optimization.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow text-sm md:text-base"
              >
                <Mail size={18} />
                <span>Get In Touch</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className={`px-6 py-2 md:px-8 md:py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-500 hover:text-white transition-colors text-sm md:text-base ${isDarkMode ? 'hover:bg-blue-500' : 'hover:bg-blue-500'
                  }`}
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        </motion.div>
      </section>
    )
  }

  const AboutSection = () => {
    const aboutRef = useRef(null)
    const isInView = useInView(aboutRef, { once: true })

    return (
      <section
        id="about"
        ref={aboutRef}
        className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
            >
              About Me
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div variants={itemVariants}>
                <div className={`p-6 md:p-8 rounded-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'
                  } shadow-lg`}>
                  <p className={`text-base md:text-lg leading-relaxed mb-4 md:mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    Experienced Full-stack developer with 4+ years of experience building scalable web applications.
                    Strong expertise in React, Next.js, and Node.js, with a focus on performance optimization,
                    real-time features, and clean architecture.
                  </p>
                  <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    Proven track record of delivering production-ready solutions for high-profile clients like SBI and Reliance.
                    Experienced in building RESTful APIs, secure authentication flows, and integrating frontend with backend logic.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="space-y-4 md:space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="space-y-1 md:space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                          {skill.name}
                        </span>
                        <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full bg-gray-200 rounded-full h-1.5 md:h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className={`text-center p-4 md:p-6 rounded-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'
                    } shadow-lg`}
                >
                  <stat.icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'
                    }`} />
                  <div className={`text-xl md:text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  const ExperienceSection = () => {
    const expRef = useRef(null)
    const isInView = useInView(expRef, { once: true })

    return (
      <section
        id="experience"
        ref={expRef}
        className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'
          }`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
            >
              Experience
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 md:p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                    } shadow-lg border-l-4 border-blue-500`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 md:mb-4">
                    <div>
                      <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-1 md:space-x-2 mt-1">
                        <Building2 className={`w-3 h-3 md:w-4 md:h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'
                          }`} />
                        <span className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-blue-400' : 'text-blue-500'
                          }`}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-0 lg:text-right">
                      <div className="flex items-center space-x-1 md:space-x-2">
                        <Calendar className={`w-3 h-3 md:w-4 md:h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                        <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 md:space-x-2 mt-1">
                        <MapPin className={`w-3 h-3 md:w-4 md:h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                        <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={`mb-3 md:mb-4 text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                          }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  const ProjectsSection = () => {
    const projectsRef = useRef(null)
    const isInView = useInView(projectsRef, { once: true })

    return (
      <section
        id="projects"
        ref={projectsRef}
        className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`rounded-xl overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'
                    }`}
                >
                  <div className={`h-40 md:h-48 bg-gradient-to-br ${project.color} relative`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <Code className="w-12 h-12 md:w-16 md:h-16 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      {project.title}
                    </h3>
                    <p className={`mb-3 md:mb-4 text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3 md:space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDemoClick(project.demo)}
                        className="flex items-center space-x-1 md:space-x-2 text-blue-500 hover:text-blue-600 transition-colors text-sm md:text-base"
                      >
                        <ExternalLink size={14} className="md:w-4 md:h-4" />
                        <span>Live Demo</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDemoClick(project.github)}
                        className="flex items-center space-x-1 md:space-x-2 text-gray-500 hover:text-gray-600 transition-colors text-sm md:text-base"
                      >
                        <Github size={14} className="md:w-4 md:h-4" />
                        <span>Code</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  const ContactSection = () => {
    const contactRef = useRef(null)
    const isInView = useInView(contactRef, { once: true })

    return (
      <section
        id="contact"
        ref={contactRef}
        className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'
          }`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
            >
              Let's Work Together
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg mb-8 md:mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
            >
              I'm always open to discussing new opportunities and interesting projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:manikanta9578@gmail.com"
                className="flex items-center justify-center space-x-2 px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow text-sm md:text-base"
              >
                <Mail size={18} />
                <span>Send Email</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/mani-kanta-kotni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-2 md:px-8 md:py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors text-sm md:text-base"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  const ScrollProgress = () => (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <ScrollProgress />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}