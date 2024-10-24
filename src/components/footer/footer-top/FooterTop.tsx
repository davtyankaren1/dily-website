import HeaderLogoSvg from "../../../assets/svgs/HeaderLogoSvg";
import LocationSvg from "../../../assets/svgs/LocationSvg";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import FacebookIconSvg from "../../../assets/svgs/socials/FacebookIconSvg";
import InstagramSvg from "../../../assets/svgs/socials/InstagramSvg";
import VkSvg from "../../../assets/svgs/socials/VkSvg";
import "../../../styles/FooterTop.scss";

const FooterTop = () => {
  return (
    <div className='footer-top'>
      <div className='container'>
        <div className='footer-top__inner'>
          <div className='footer-location-address'>
            <div>
              <HeaderLogoSvg />
            </div>
            <div className='footer-top-city'>
              <LocationSvg />
              <a href=''>Москва</a>
              <ArrowDownSvg />
            </div>
          </div>
          <div className='footer-contacts'>
            <span>Присоединяйтесь к нам </span>

            <div style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
              <div className='icon-circle'>
                <FacebookIconSvg />
              </div>
              <div className='icon-circle'>
                <InstagramSvg />
              </div>
              <div className='icon-circle'>
                <VkSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
