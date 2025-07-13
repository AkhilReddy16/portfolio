import Skills from '../skills/skills';
import './about.css';

function About() {
  return (
    <div id="about" className="paddsection">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="div-img-bg">
              <div className="about-img">
                <img src="/portfolio/about.jpg" className="img-responsive" alt="me" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-descr">
              <p className="p-heading" style={{ textAlign: 'justify' }}>
                Im a Full Stack Developer, based out of United States who loves clean, simple & unique code.
              </p>
              <p className="separator" style={{ textAlign: 'justify' }}>
                I am an open-minded individual who firmly believes that having ambition is admirable. I value positive thinking and am always prepared to confront difficult situations, which helps me to develop my strength of character. Whether working independently or collaboratively, I am focused and efficient in my approach. In essence, I am someone who values open-mindedness and strives for excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  );
}

export default About;