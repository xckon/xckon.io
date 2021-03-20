import JsLoverImage from '../styles/images/js-lover.png';
import BlockainImage from '../styles/images/blockchain.png';
import FarmImage from '../styles/images/farm.png';

const ServicesSection = () => (
  <section id="services">
    <div className="container">
      
      {/* <!-- section title --> */}
      <h2 className="section-title wow fadeInUp">Hobbies</h2>

      <div className="spacer" data-height="60"></div>
      
      <div className="row">
        <div className="col-md-4">
          {/* <!-- service box --> */}
          <div className="service-box rounded data-background padding-30 text-center text-light shadow-blue" data-color="#6C6CE5">
            <img src={JsLoverImage} alt="JS/TS" />
            <h3 className="mb-3 mt-0">JS/TS</h3>
            <p className="mb-0">Love web technologies. Specially JavaScript, TypesCript... Frontend and Backend.</p>
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="30"></div>
        </div>

        <div className="col-md-4">
          {/* <!-- service box --> */}
          <div className="service-box rounded data-background padding-30 text-center shadow-yellow" data-color="#F9D74C">
            <img src={BlockainImage} alt="Crypto Enthusiast" />
            <h3 className="mb-3 mt-0">Crypto Enthusiast</h3>
            <p className="mb-0">Learning Solidity & Web3. Contributing to BTC with my self-hosted node.</p>
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="30"></div>
        </div>

        <div className="col-md-4">
          {/* <!-- service box --> */}
          <div className="service-box rounded data-background padding-30 text-center text-light shadow-pink" data-color="#F97B8B">
            <img src={FarmImage} alt="Gardener" />
            <h3 className="mb-3 mt-0">Gardener</h3>
            <p className="mb-0">Love Gardening, experimenting with hidroponic vegetables and fruits. Serial Composter.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default ServicesSection;