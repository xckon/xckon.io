import './styles/css/bootstrap.min.css';
import './styles/css/all.min.css';
import './styles/css/simple-line-icons.css';
import './styles/css/slick.css';
import './styles/css/animate.css';
import './styles/css/magnific-popup.css';
import './styles/css/style.css';

import Preloader from './components/Preloader'
import MobileHeader from './components/mobile/Header';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import StackSection from './components/StackSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Preloader />

      {/* <!-- mobile header --> */}
      <MobileHeader/>

      {/* <!-- desktop header --> */}
      <header className="desktop-header-2 d-flex align-items-start flex-column">
        
        {/* <!-- logo image --> */}
        <div className="site-logo"></div>
        
        {/* <!-- main menu --> */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li className="active"><a href="#home"><i className="icon-home"></i></a></li>
            <li><a href="#about"><i className="icon-user-following"></i></a></li>
            <li><a href="#hobbies"><i className="icon-bulb"></i></a></li>
            <li><a href="#stack"><i className="icon-rocket"></i></a></li>
          </ul>
        </nav>
        
        {/* <!-- site footer --> */}
        <div className="footer"></div>

      </header>

      {/* <!-- main layout --> */}
      <main className="content-2">
        
        {/* <!-- section home --> */}
        <HomeSection />

        {/* <!-- section about --> */}
        <AboutSection />
        
        {/* <!-- section services --> */}
        <ServicesSection />
        
        {/* <!-- section stack --> */}
        <StackSection />

        <Footer />
        
        <div className="spacer" data-height="96"></div>
      </main>

      {/* <!-- Go to top button --> */}
      <a id="return-to-top"><i className="fas fa-arrow-up"></i></a>
    </>
  );
}

export default App;
