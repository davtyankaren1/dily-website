import ServicesIntroducing from "./components/ServicesIntroducing";
import SliderService from "./components/SliderService";
import WeRecomment from "./components/WeRecomment";
import Malfunctions from "./components/Malfunctions";
import KnowMoreInfo from "./components/KnowMoreInfo";
import "../../styles/ServicesServiceComponent.scss";

const ServicesServiceComponent = () => {
  return (
    <div className='services-service-component'>
      <div className='services-service-component__inner'>
        <SliderService />
        <ServicesIntroducing />
        <WeRecomment />
        <Malfunctions />
        <KnowMoreInfo />
      </div>
    </div>
  );
};

export default ServicesServiceComponent;
