import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  Palette,
  Database,
  Globe,
  Server,
  Shield,
  ExternalLink,
  Sparkles,
  Rocket,
  Heart,
  Coffee,
  Star,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileimg from "./images/profile-pic.png";
import img1 from "./images/game.jpg";
import img2 from "./images/face.jpg";
import img3 from "./images/steg.jpg";
import img4 from "./images/imge4.png";
import img5 from "./images/connect4.png";

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Header/Navigation */}
      <nav className="fixed w-full z-40 bg-zinc-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-display font-bold gradient-text"
            >
              &lt;kunaalPortfolio /&gt;
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <NavLink href="#home">🏠 Home</NavLink>
              <NavLink href="#about">👋 About</NavLink>
              <NavLink href="#skills">⚡ Skills</NavLink>
              <NavLink href="#projects">🚀 Projects</NavLink>
              <NavLink href="#contact">📬 Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section with Profile */}
      <section
        id="home"
        className="min-h-screen bg-black flex items-center justify-center pt-20 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            style={{ opacity, scale }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="relative">
                <motion.div
                  className="w-96 h-96 mx-auto overflow-hidden rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 shadow-2xl shadow-purple-500/25 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-spin-slow"></div>
                  <div className="absolute inset-1 rounded-full bg-black"></div>
                  <img
                    src={profileimg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full relative z-10"
                  />
                </motion.div>

                {/* Floating elements around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left order-1 md:order-2"
            >
              <div className="mb-4 flex items-center justify-center md:justify-start space-x-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-display font-medium">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">
                <span className="block">Kunaal Sai</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Kadarla
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
                I'm a recent Computer Science graduate (AIML, CBIT – 2025) with
                a strong interest in building practical, impactful technology.
                I've worked on a range of projects, including a medical image
                segmentation system using deep learning, a face detection model
                with real-time accuracy, and a full-stack web app for game
                discovery. These experiences have helped me become confident
                with tools like Python, JavaScript, React, and various backend
                and automation technologies. I'm passionate about writing clean,
                efficient code and constantly learning new things. Currently,
                I'm exploring opportunities in software development, data
                engineering, or related roles where I can contribute to
                real-world products, solve meaningful problems, and grow as a
                developer. ✨
              </p>

              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <motion.a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-purple-500/25 text-white"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Let's Connect</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* About Section with New Taglines */}
      {/* <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-display mb-4 block">
              🌟 ABOUT ME
            </span>
            <h2 className="text-4xl font-display font-bold mb-4">
              Turning Ideas Into Reality
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-zinc-800/50 rounded-xl">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Problem Solver
                </h3>
                <p className="text-zinc-400">
                  Turning complex challenges into elegant solutions
                </p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Innovation Driven
                </h3>
                <p className="text-zinc-400">
                  Always exploring new technologies and approaches
                </p>
              </div>
              <div className="p-6 bg-zinc-800/50 rounded-xl">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Team Player
                </h3>
                <p className="text-zinc-400">
                  Collaborating to achieve exceptional results
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      
      {/* Experience Section */}
      <section id="about" className="py-20   border-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 mb-6"
              >
                <span className="text-2xl">💼</span>
                <span className="text-zinc-300 text-sm font-medium tracking-wide">
                  PROFESSIONAL EXPERIENCE
                </span>
              </motion.div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                My Journey in Tech
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Building innovative solutions and gaining valuable experience
                across different technologies and domains.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 hidden md:block"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {/* First Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="md:flex md:items-center md:space-x-8"
                >
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300 group hover:bg-zinc-800/30">
                      <div className="flex items-center space-x-3 mb-4 md:justify-end">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div className="md:text-right">
                          <h3 className="text-xl font-bold text-white">
                            Full Stack Engineer
                          </h3>
                          <p className="text-purple-400 font-medium">Thirdi.</p>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4 md:text-right">
                        May 2025 - June 2025
                      </p>
                      <p className="text-zinc-300 leading-relaxed md:text-right">
                        Designed and developed responsive and interactive user
                        interfaces using HTML, CSS, and JavaScript to create
                        engaging user experiences. Worked on seamless
                        integration of APIs with the frontend for enhanced
                        functionality.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                          HTML/CSS
                        </span>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                          JavaScript
                        </span>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                          API Integration
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 bg-purple-500 rounded-full border-4 border-black relative z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="md:w-1/2"></div>
                </motion.div>

                {/* Second Experience */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="md:flex md:items-center md:space-x-8"
                >
                  <div className="md:w-1/2"></div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full border-4 border-black relative z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-300 group hover:bg-zinc-800/30">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            Full Stack (MERN) Developer
                          </h3>
                          <p className="text-blue-400 font-medium">
                            ApplyMyJob.
                          </p>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm mb-4">
                        March 2025 - May 2025
                      </p>
                      <p className="text-zinc-300 leading-relaxed">
                        Designed and developed complete frontend UI pages using
                        HTML, CSS, and JavaScript, focusing on responsive and
                        interactive user experiences. Also worked with Selenium
                        to automate key tasks and user flows.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                          MERN Stack
                        </span>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                          React.js
                        </span>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                          Selenium
                        </span>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                          Automation
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Stats or Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 inline-block">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">2+</div>
                    <div className="text-zinc-400 text-sm">Companies</div>
                  </div>
                  <div className="w-px h-8 bg-zinc-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">4+</div>
                    <div className="text-zinc-400 text-sm">Months</div>
                  </div>
                  <div className="w-px h-8 bg-zinc-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">5+</div>
                    <div className="text-zinc-400 text-sm">Technologies</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl animate-pulse">⚡</span>
              <span className="text-purple-400 font-display font-medium tracking-wider">
                SKILLS & EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              My Technical{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A collection of technologies I've mastered throughout my journey
              as a developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code />}
              title="Frontend Development"
              skills={[
                { name: "React Js", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML & CSS", level: 95 },
                { name: "Tailwind CSS", level: 95 },
              ]}
            />
            <SkillCard
              icon={<Server />}
              title="Backend Development"
              skills={[
                { name: "Node.js", level: 88 },
                { name: "Python", level: 82 },
                { name: "Django", level: 85 },
              ]}
            />
            <SkillCard
              icon={<Database />}
              title="Database"
              skills={[
                { name: "SQL", level: 90 },
                { name: "MySQL", level: 85 },
              ]}
            />
            <SkillCard
              icon={<Shield />}
              title="Programming Languages"
              skills={[
                { name: "Python", level: 88 },
                { name: "C++", level: 90 },
                { name: "JavaScript", level: 85 },
              ]}
            />
            <SkillCard
              icon={<Palette />}
              title="Tools"
              skills={[
                { name: "Git", level: 85 },
                { name: "VS Code", level: 90 },
                { name: "GitHub", level: 82 },
              ]}
            />
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-black relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl animate-bounce">🚀</span>
              <span className="text-purple-400 font-display font-medium tracking-wider">
                FEATURED WORK
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Latest{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore some of my recent work and personal projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Medical Image Segmentation on ACDC using DUCK Net"
              description="Designed and implemented advanced DUCK-Net variants (Transformer, ASSP, Mamba) for segmenting cardiac structures from MRI scans using the ACDC dataset. Enhanced model accuracy with residual down-sampling and custom convolution modules, achieving strong results across Dice, Jaccard, and Recall metrics."
              image={img4}
              tags={["Python", "DUCK-Net", "Jupyter Notebook"]}
              githubUrl="https://www.kaggle.com/code/kunaalsai/image-segmentation-ducknet"
            />

            <ProjectCard
              title="Game-Hub"
              description="A frontend web application built with React and JavaScript for discovering and filtering games across Android, iOS, and PC. Integrated RAWG API for real-time game data and a personalized recommendation engine, enhancing user engagement and experience."
              image={img1}
              tags={["React", "JavaScript", "Tailwind CSS"]}
              githubUrl="https://github.com/kunaalsai007/Game-Hub"
            />

            <ProjectCard
              title="Face Detection Model"
              description="A deep face detection model using VGG16 with Labelme for annotation and Albumentation for data augmentation. Built a dual-task architecture with Keras Functional API, optimizing accuracy with a custom loss function for real-time detection."
              image={img2}
              tags={["Python", "TensorFlow", "Keras"]}
              githubUrl="https://github.com/kunaalsai007/Face-Detection"
            />

            <ProjectCard
              title="Image Steganography"
              description="A Python-based image steganography tool with Tkinter using the LSB algorithm to securely embed text in images. Built an intuitive GUI for seamless encoding and decoding, ensuring minimal image distortion and enhanced user experience."
              image={img3}
              tags={["Python", "Tkinter", "Security"]}
              githubUrl="https://github.com/kunaalsai007/ImageSteganography"
            />

            <ProjectCard
              title="Connect4"
              description="A classic two-player connection game implemented using HTML, CSS, and JavaScript. Players choose a color and take turns dropping discs into a grid. The goal is to connect four discs of the same color vertically, horizontally, or diagonally before the opponent does."
              image={img5}
              tags={["JavaScript", "HTML", "CSS"]}
              githubUrl="https://github.com/kunaalsai007/Connect4-Game"
            />
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-purple-300 text-sm font-medium">
                  AVAILABLE FOR WORK
                </span>
              </motion.div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                I'm passionate about creating innovative solutions. Whether you
                have a project in mind or just want to connect, I'd love to hear
                from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Email Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Email Me
                    </h3>
                    <p className="text-zinc-400">Quick response guaranteed</p>
                  </div>
                </div>
                <motion.a
                  href="mailto:kunaalsai@gmail.com"
                  className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>kunaalsai@gmail.com</span>
                  <span>→</span>
                </motion.a>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      LinkedIn
                    </h3>
                    <p className="text-zinc-400">Professional networking</p>
                  </div>
                </div>
                <motion.a
                  href="https://linkedin.com/in/kunaal27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Connect with me</span>
                  <span>→</span>
                </motion.a>
              </motion.div>

              {/* GitHub Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gray-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">GitHub</h3>
                    <p className="text-zinc-400">Explore my projects</p>
                  </div>
                </div>
                <motion.a
                  href="https://github.com/kunaal27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-gray-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>View my repositories</span>
                  <span>→</span>
                </motion.a>
              </motion.div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8"
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Coffee className="w-6 h-6 text-amber-400" />
                  <span className="text-lg text-zinc-300">Coffee Chat?</span>
                </div>
                <p className="text-zinc-400 mb-6">
                  I believe the best projects start with great conversations.
                  Let's discuss your ideas over a virtual coffee!
                </p>
                <motion.a
                  href="mailto:kunaalsai@gmail.com?subject=Let's%20Connect!"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-5 h-5" />
                  <span>Start a Conversation</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-black border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-zinc-300 mb-4">Kunaal's Portfolio</p>
          <p className="flex items-center justify-center space-x-2 text-zinc-400 mb-6">
            <span>Crafted with</span>
            <Heart className="w-5 h-5 text-purple-500 animate-pulse" />
            <span>using React, Tailwind & Passion</span>
          </p>
          <motion.a
            href="https://kunaal27.github.io/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore My Work</span>
            <span>→</span>
          </motion.a>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      className="text-zinc-400 hover:text-white transition-colors relative group font-medium"
      whileHover={{ scale: 1.05 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full" />
    </motion.a>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors group relative"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.a>
  );
}

function SkillCard({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: number }[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <motion.div
        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 text-white"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-display font-bold mb-6 text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-gray-300 flex items-center space-x-2"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium flex items-center space-x-2 shadow-lg hover:shadow-purple-500/25 transition-shadow"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </motion.a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-purple-100 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-gray-300 hover:bg-gray-700/60 hover:border-purple-500/30 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default App;
