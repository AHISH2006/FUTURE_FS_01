import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

function SkillBar({ name, percentage, gradientClass }) {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(percentage);
          }, 300);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage, isVisible]);

  return (
    <div ref={ref} className="skill-item">
      <div className="skill-label">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-track">
        <div
          className={`skill-fill ${gradientClass}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      colorClass: "title-primary",
      skills: [
        { name: "HTML/CSS", percentage: 90, gradientClass: "grad-primary" },
        { name: "JavaScript", percentage: 85, gradientClass: "grad-primary" },
        { name: "React", percentage: 80, gradientClass: "grad-primary" },
      ]
    },
    {
      title: "Backend Development",
      colorClass: "title-secondary",
      skills: [
        { name: "Node.js", percentage: 75, gradientClass: "grad-secondary" },
        { name: "Python", percentage: 65, gradientClass: "grad-secondary" },
        { name: "Database", percentage: 70, gradientClass: "grad-secondary" },
      ]
    },
    {
      title: "Design & Tools",
      colorClass: "title-accent",
      skills: [
        { name: "UI/UX Design", percentage: 80, gradientClass: "grad-accent" },
        { name: "Figma", percentage: 85, gradientClass: "grad-accent" },
        { name: "Git/GitHub", percentage: 90, gradientClass: "grad-accent" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>My <span className="gradient-text">Skills</span></h2>
        <p>
          A comprehensive skill set developed through academic learning,
          personal projects, and continuous exploration of emerging technologies.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="skills-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`skills-title ${category.colorClass}`}>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  gradientClass={skill.gradientClass}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
