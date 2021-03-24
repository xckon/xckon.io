import { RESUME_URL } from '../constants';
import RealImage from '../styles/images/eze.png';

const AboutSection = () => (
  <section id="about" className="pt-0">
    <div className="container">
      
      {/* <!-- section title --> */}
      <h2 className="section-title wow fadeInUp">About Me</h2>

      <div className="spacer" data-height="60"></div>
      
      <div className="row">

        <div className="col-md-3">
          <div className="text-center text-md-left avatar-image">
            {/* <!-- avatar image --> */}
            <img src={RealImage} alt="Ezequiel Falduto" />
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="30"></div>
        </div>

        <div className="col-md-9 triangle-left-md triangle-top-sm">
          <div className="rounded bg-dark shadow-light padding-30">
            <div className="row">
              <div className="col-md-6">
                {/* <!-- about text --> */}
                <p>
                  <i className="fas fa-hand-spock"></i> I'm Ezequiel. Developer with over +10 years of experience.
                  I <i className="far fa-heart"></i> architecture, code and JavaScript. I'm a crypto enthusiast and hobbiest balcony/hidroponic gardener.
                </p>
                <div className="mt-3">
                  <a href={RESUME_URL} target="_blank" className="btn btn-default">Download CV</a>
                </div>
                <div className="spacer d-md-none d-lg-none" data-height="30"></div>
              </div>
              <div className="col-md-6">
                {/* <!-- skill item --> */}
                <div className="skill-item">
                  <div className="skill-info clearfix">
                    <h4 className="float-left mb-3 mt-0">Backend</h4>
                    <span className="float-right">60%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar data-background" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={60} data-color="#6C6CE5">
                    </div>
                  </div>
                  <div className="spacer" data-height="20"></div>
                </div>

                {/* <!-- skill item --> */}
                <div className="skill-item">
                  <div className="skill-info clearfix">
                    <h4 className="float-left mb-3 mt-0">Frontend</h4>
                    <span className="float-right">40%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar data-background" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={40} data-color="#F9D74C">
                    </div>
                  </div>
                  <div className="spacer" data-height="20"></div>
                </div>

                {/* <!-- skill item --> */}
                <div className="skill-item">
                  <div className="skill-info clearfix">
                    <h4 className="float-left mb-3 mt-0">Environmentalist</h4>
                    <span className="float-right">100%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar data-background" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={100} data-color="#F97B8B">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- row end --> */}
    </div>
  </section>
);

export default AboutSection;