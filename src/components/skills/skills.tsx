import './skills.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
  { icon: 'devicon-mysql-original colored', label: 'mysql' },
  { icon: 'devicon-postgresql-plain colored', label: 'postgresql' },
  { icon: 'devicon-mongodb-plain colored', label: 'mongodb' },
  { icon: 'devicon-apachespark-plain-wordmark colored', label: 'spark' },
  { icon: 'devicon-spring-original colored', label: 'spring' },
  { icon: 'devicon-maven-plain colored', label: 'maven' },
  { icon: 'devicon-redis-plain colored', label: 'redis' },
  { icon: 'devicon-apachekafka-original colored', label: 'kafka' },
  { icon: 'devicon-amazonwebservices-plain-wordmark colored', label: 'aws' },
  { icon: 'devicon-hadoop-plain colored', label: 'hadoop' },
];

function Skills() {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title text-center">
          <h2>My Skills</h2>
        </div>
      </div>
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
            2560: { slidesPerView: 6 }
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {skills.map((skill, idx) => (
            <SwiperSlide key={idx}>
              <div className="services-block">
                <i className={skill.icon}></i>
                <span>{skill.label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;