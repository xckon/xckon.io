import SelfImage from '../styles/images/eze.gif';

const Intro = () => (
  <div className="intro">
    {/* <!-- avatar image --> */}
    <div>
      <img src={SelfImage} alt="xckon" className="mb-4 w-25 rounded-circle"/>
    </div>

    {/* <!-- info --> */}
    <h1 className="mb-2 mt-0">Ezequiel Falduto</h1>
    <span>I'm a <span className="text-rotating">Software Engineer, Back-End developer,  Front-End developer, Professional Googler, Crypto Enthusiast, Hobbyist Gardener</span></span>

    {/* <!-- social icons --> */}
    <ul className="social-icons light list-inline mb-0 mt-4">
      <li className="list-inline-item"><a href="https://www.linkedin.com/in/efalduto/"><i className="fab fa-linkedin"></i></a></li>
      <li className="list-inline-item"><a href="https://twitter.com/xcKon"><i className="fab fa-twitter"></i></a></li>
    </ul>

    {/* <!-- buttons --> */}
    {/* <div className="mt-4">
      <a href="#contact" className="btn btn-default">Hire me</a>
    </div> */}
  </div>
);

export default Intro;