import { motion } from 'framer-motion';
import '../styles/About.css';
import anuImg from '../assets/ME.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>
              About <span className="highlight">Me</span>
            </h2>
            <p>
              I’m a highly motivated and detail-oriented 3rd year B.Tech student in Artificial Intelligence and Data Science at Suguna College of Engineering.  
              Skilled in frontend and mobile development with React.js, React Native, HTML, CSS, and JavaScript.
            </p>
            <p>
              I love building user-friendly and responsive applications, working with APIs, and exploring new technologies. I’m currently learning backend development with Node.js and Express to become a full-stack developer.
            </p>
            <div className="tags">
              <span className="tag">Problem Solver</span>
              <span className="tag">Creative Thinker</span>
              <span className="tag">Team Player</span>
            </div>
          </motion.div>

          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src= {anuImg}
              alt="Anu Ahish - Profile"
              className="about-image"
            />
            <div className="circle circle-top"></div>
            <div className="circle circle-bottom"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
