import YinYangIcon from '../styles/images/yin-yang.png';
import IpfsIcon from '../styles/images/ipfs-powered.svg';

export default () => (
  <section id="footer">
    <a className="mx-1" href="https://en.wikipedia.org/wiki/Yin_and_yang" title="Yin/Yang" target="_blank">
      <img src={YinYangIcon} alt="Yin/Yang"/>
    </a>
    <a className="footer-ipfs mx-1" href="https://ipfs.io/" title="Powered by IPFS" target="_blank">
      <img src={IpfsIcon} alt="Powered by IPFS"/>
    </a>
  </section>
);