import Link from "next/link";
import { Ghost, Skull, Code2, Mail, Brain, Database, Server, Network, Cpu, LineChart, Zap, Code, GitBranch, Cloud, Lock, ArrowRight, HomeIcon, MessageSquare, Eye, Mic } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Creepy Eyes Background */}
      <div className="creepy-eyes">
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="eye"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-sm z-50 border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-creepster text-red-500 hover-glow">NecroCode</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <Link href="#about" className="text-zinc-300 hover:text-red-500 px-3 py-2 text-sm font-vt323 transition-colors hover-float">
                About
              </Link>
              <Link href="#skills" className="text-zinc-300 hover:text-red-500 px-3 py-2 text-sm font-vt323 transition-colors hover-float">
                Skills
              </Link>
              <Link href="#projects" className="text-zinc-300 hover:text-red-500 px-3 py-2 text-sm font-vt323 transition-colors hover-float">
                Projects
              </Link>
              <Link href="#contact" className="text-zinc-300 hover:text-red-500 px-3 py-2 text-sm font-vt323 transition-colors hover-float">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-creepster tracking-tight text-red-500 animate-glow">
              Welcome to My <span className="text-zinc-100">Digital Necromancy</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-300 max-w-3xl mx-auto font-vt323">
              A software necromancer specializing in AI/ML and fullstack development, breathing life into machines through code
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-red-600 text-zinc-100 px-6 py-3 text-sm font-vt323 hover:bg-red-700 transition-colors flex items-center gap-2 hover-float animate-pulse-red"
              >
                <Ghost className="w-4 h-4 animate-float" />
                View My Work
          </a>
          <a
                href="#contact"
                className="rounded-full border border-red-900/30 px-6 py-3 text-sm font-vt323 hover:bg-red-900/20 transition-colors flex items-center gap-2 hover-float"
              >
                <Skull className="w-4 h-4 animate-shake" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-creepster text-red-500 text-center mb-12 hover-glow">About Me</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-zinc-300 font-vt323">
              I am NecroCode, a software necromancer who breathes life into machines through artificial intelligence and web development.
              With 5 years of experience in the digital realm, I specialize in creating intelligent systems that bridge the gap between
              the living and the digital.
            </p>
            <p className="text-lg text-zinc-300 font-vt323">
              My journey began in the depths of machine learning, where I learned to train neural networks to see beyond human perception.
              Today, I combine my expertise in AI/ML with fullstack development to create applications that not only think but also
              understand and adapt to their environment.
            </p>
            <p className="text-lg text-zinc-300 font-vt323">
              When I'm not conjuring AI models or crafting web applications, I'm exploring the intersection of technology and the supernatural,
              finding ways to make the digital world more alive and responsive.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-creepster text-red-500 text-center mb-12 hover-glow">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* AI/ML Skills */}
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Brain className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Deep Learning</h3>
              <p className="text-sm text-zinc-400 mt-2">TensorFlow, PyTorch, Keras</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Network className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Neural Networks</h3>
              <p className="text-sm text-zinc-400 mt-2">CNN, RNN, GANs, Transformers</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <LineChart className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Machine Learning</h3>
              <p className="text-sm text-zinc-400 mt-2">Scikit-learn, XGBoost, LightGBM</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Cpu className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Computer Vision</h3>
              <p className="text-sm text-zinc-400 mt-2">OpenCV, YOLO, DETR</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Zap className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">NLP</h3>
              <p className="text-sm text-zinc-400 mt-2">BERT, GPT, NLTK, SpaCy</p>
            </div>

            {/* Frontend Skills */}
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Code2 className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Frontend Core</h3>
              <p className="text-sm text-zinc-400 mt-2">React, Next.js, TypeScript</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Code className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Frontend Tools</h3>
              <p className="text-sm text-zinc-400 mt-2">TailwindCSS, Redux, Jest</p>
            </div>

            {/* Backend Skills */}
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Server className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Backend Core</h3>
              <p className="text-sm text-zinc-400 mt-2">Django, Python, FastAPI</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Database className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Database</h3>
              <p className="text-sm text-zinc-400 mt-2">PostgreSQL, MongoDB, Redis</p>
            </div>

            {/* DevOps & Tools */}
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <GitBranch className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Version Control</h3>
              <p className="text-sm text-zinc-400 mt-2">Git, GitHub, GitLab</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Cloud className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Cloud & DevOps</h3>
              <p className="text-sm text-zinc-400 mt-2">AWS, Docker, Kubernetes</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-colors hover-float">
              <Lock className="w-8 h-8 mx-auto mb-2 text-red-500 animate-float" />
              <h3 className="font-vt323 text-zinc-300">Security</h3>
              <p className="text-sm text-zinc-400 mt-2">OAuth, JWT, SSL/TLS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-12 font-creepster text-red-500 animate-glow">
            <Skull className="inline-block mr-2 animate-shake" />
            Haunted Projects
          </h2>
          
          {/* Horizontal Scrolling Projects */}
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide animate-scroll">
              {/* Project 1 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Neural Necromancer</h3>
                  <div className="icon-glitch">
                    <Brain className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">An AI-powered horror game where players interact with undead characters controlled by advanced neural networks.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Unity</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 2 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Haunted House AI</h3>
                  <div className="icon-glitch">
                    <HomeIcon className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">Smart home automation system with spooky AI features, including ghost detection and supernatural event prediction.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">IoT</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 3 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Cryptic Chat</h3>
                  <div className="icon-glitch">
                    <MessageSquare className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">Real-time chat application with encrypted messages and AI-powered content moderation.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Django</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">WebSocket</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 4 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Phantom Vision</h3>
                  <div className="icon-glitch">
                    <Eye className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">Computer vision system for detecting and analyzing supernatural phenomena in real-time video feeds.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">TensorFlow</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 5 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Ethereal Echo</h3>
                  <div className="icon-glitch">
                    <Mic className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">AI-powered voice assistant that responds with spooky sound effects and horror-themed responses.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Audio Processing</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 6 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <h3 className="text-2xl font-bold mb-4 text-red-400 font-creepster">Spectral Analytics</h3>
                <p className="text-gray-300 mb-4">Advanced data analysis system for paranormal investigation, using ML to predict supernatural occurrences.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">ML</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 7 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <h3 className="text-2xl font-bold mb-4 text-red-400 font-creepster">Ethereal Network</h3>
                <p className="text-gray-300 mb-4">Distributed system for paranormal research with real-time monitoring and secure data transmission.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Go</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">gRPC</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Kubernetes</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 8 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <h3 className="text-2xl font-bold mb-4 text-red-400 font-creepster">Shadow Sentry</h3>
                <p className="text-gray-300 mb-4">AI-powered security system that uses computer vision to detect and track suspicious movements in darkness.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">YOLO</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 9 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <h3 className="text-2xl font-bold mb-4 text-red-400 font-creepster">Cryptic Compiler</h3>
                <p className="text-gray-300 mb-4">A programming language compiler that generates code with eerie variable names and spooky comments.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Rust</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">LLVM</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">NLP</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>

              {/* Project 10 */}
              <div className="flex-none w-[400px] bg-red-950/50 backdrop-blur-sm rounded-lg p-6 border border-red-800/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                <h3 className="text-2xl font-bold mb-4 text-red-400 font-creepster">Haunted Database</h3>
                <p className="text-gray-300 mb-4">A distributed database system that stores and retrieves data with supernatural encryption methods.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Rust</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm">Encryption</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  View Project <ArrowRight className="ml-2 animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-creepster text-red-500 text-center mb-12 hover-glow">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-vt323 text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-zinc-900/50 backdrop-blur-sm border-red-900/30 text-zinc-100 shadow-sm focus:border-red-500 focus:ring-red-500 font-vt323 hover-float"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-vt323 text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-zinc-900/50 backdrop-blur-sm border-red-900/30 text-zinc-100 shadow-sm focus:border-red-500 focus:ring-red-500 font-vt323 hover-float"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-red-600 text-zinc-100 px-6 py-3 text-sm font-vt323 hover:bg-red-700 transition-colors flex items-center justify-center gap-2 hover-float animate-pulse-red"
              >
                <Mail className="w-4 h-4 animate-float" />
                Send Message
              </button>
            </form>
          </div>
    </div>
      </section>
    </>
  );
}