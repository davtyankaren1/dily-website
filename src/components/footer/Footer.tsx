import FooterBottom from "./footer-bottom/FooterBottom";
import FooterTop from "./footer-top/FooterTop";
import FooterWhite from "./footer-white/FooterWhite";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <FooterTop />
      <FooterBottom />
      <FooterWhite />
    </footer>
  );
};

export default Footer;
