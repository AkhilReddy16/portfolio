import './skills.css';
import 'swiper/css';
import { useEffect, useRef } from 'react';

const skills = [
  { icon: 'devicon-java-plain-wordmark colored', label: 'Java' },
  { icon: 'devicon-python-plain colored', label: 'Python' },
  { icon: 'devicon-cplusplus-plain colored', label: 'C++' },
  { icon: 'devicon-r-plain colored', label: 'R' },
  { icon: 'devicon-html5-plain-wordmark colored', label: 'HTML5' },
  { icon: 'devicon-css3-plain colored', label: 'CSS' },
  { icon: 'devicon-javascript-plain colored', label: 'javaScript' },
  { icon: 'devicon-typescript-plain colored', label: 'typeScript' },
  { icon: 'devicon-angularjs-plain colored', label: 'Angular' },
  { icon: 'devicon-react-original colored', label: 'React' },
  { icon: 'devicon-oracle-original colored', label: 'Oracle' },
  { icon: 'devicon-mysql-original colored', label: 'mysql' },
  { icon: 'devicon-postgresql-plain colored', label: 'postgresql' },
  { icon: 'devicon-mongodb-plain colored', label: 'mongodb' },
  { icon: 'devicon-redis-plain colored', label: 'redis' },
  { icon: 'devicon-apachespark-plain-wordmark colored', label: 'spark' },
  { icon: 'devicon-hadoop-plain colored', label: 'Hadoop' },
  { icon: 'devicon-apachekafka-original colored', label: 'Kafka' },
  { icon: 'devicon-spring-original colored', label: 'Spring' },
  { icon: 'devicon-maven-plain colored', label: 'maven' },
  { icon: 'devicon-amazonwebservices-plain-wordmark colored', label: 'aws' },
  { icon: 'devicon-anaconda-original colored', label: 'Anaconda' },
  { icon: 'devicon-jenkins-line colored', label: 'jenkins' },
  { icon: 'devicon-docker-plain colored', label: 'docker' },
];
/*
function Skills() {
  useEffect(() => {
    const target = document.querySelector('.animation-trigger');

    const resetAnimation = () => {
      if (!target) return;
      target.classList.remove('animate');
      // Force reflow
      //void target.offsetWidth;
      target.classList.add('animate');
    };

    // Replay on hash change (nav click)
    const handleHashChange = () => {
      if (window.location.hash === '#skills') {
        resetAnimation();
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial load if already in hash
    if (window.location.hash === '#skills') resetAnimation();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <div id="skills" className="paddsection animation-trigger">
      <div className="container">
        <div className="section-title text-center">
          <h2>My Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skills-item" key={idx}>
              <i className={skill.icon}></i>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';
*/
function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate');
        } else {
          sectionRef.current?.classList.remove('animate');
        }
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      id="skills"
      className="paddsection animation-trigger"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2>My Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skills-item" key={idx}>
              <i className={skill.icon}></i>
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Skills;