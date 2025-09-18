import { motion } from 'framer-motion';
import '../styles/Projects.css';

function ProjectCard({ title, description, image, technologies, techColors, github, live, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {technologies.map((tech, techIndex) => (
            <span key={tech} className={techColors[techIndex]}>
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Healthcare Website",
      description: "A static website for a healthcare company, showcasing services and patient resources.",
      image: "https://i.pinimg.com/1200x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
      technologies: ["Html", "CSS", "JavaScript"],
      techColors: ["tag-primary", "tag-secondary", "tag-accent"],
      
      live: "https://www.rehabionics.in/"
    },
    {
      title: "Automated CI/CD Pipeline with Jenkins & Docker",
      description: "AutoDeploy360 is a DevOps automation project that streamlines application deployment using CI/CD pipelines. It ensures faster releases, reduced errors, and improved collaboration by integrating Jenkins, Docker, and GitHub for efficient build, test, and deploy workflows.",
      image: "https://i.pinimg.com/736x/a0/99/9f/a0999feef82f75c2b17ccb47b34c1930.jpg",
      technologies: ["React.js", "GitHub", "Node.js", "Docker", "Jenkins"],
      techColors: ["tag-primary", "tag-secondary", "tag-accent","tag-secondary", "tag-primary"],
      github: "https://github.com/AHISH2006/NAAN-MUDHALVAN",

    },
     {
      title: "MERN Stack E-commerce Website",
      description: "A full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). The site features user authentication, a product catalog, a shopping cart, and a secure checkout process.",
      image: "https://i.pinimg.com/736x/26/3c/5a/263c5aeb4177dca61c5582b94bb688ba.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express","git","Postman"],
      techColors: ["tag-primary", "tag-secondary", "tag-accent","tag-primary", "tag-secondary", "tag-accent"],
      github: "https://github.com/AHISH2006/FUTURE_FS_01.git",
      live: "https://ahish-portfolio.vercel.app/"
     },
        
     {
      title: "Rebranding BMW Website",
      description: "This website, titled BMW - Sheer Driving Pleasure Redefined, is an AI-branded project that redefines the luxury automotive experience. It aims to showcase the future of BMW through its latest vehicles, cutting-edge technology, and an unparalleled driving experience. The design uses a luxury theme with an amber color palette. The project was automatically generated and is kept in sync with its deployment on v0.app.. The site features user authentication, a product catalog, a shopping cart, and a secure checkout process.",
      image: "https://i.pinimg.com/1200x/2d/f2/ad/2df2ad937d4b048d3cfad6a1957547c5.jpg",
      technologies: ["Next.js", " Tailwind CSS", "PostCSS","git","Vercel"],
      techColors: ["tag-primary", "tag-secondary", "tag-accent","tag-primary", "tag-secondary", "tag-accent"],
      github: "https://github.com/AHISH2006/FUTURE_FS_03.git",
      live: "https://v0-ai-branding-for-bmw.vercel.app/"
     }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Featured <span className="gradient-text">Projects</span></h2>
        <p>A showcase of my recent work, demonstrating problem-solving skills and technical expertise across various domains.</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>

      <motion.div
        className="projects-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        
      </motion.div>
    </section>
  );
}
