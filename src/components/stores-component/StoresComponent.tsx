import Slider from "../sections/find-slider/Slider";
import PopularStores from "../popular-stores/PopularStores";
import { mockData } from "../popular-stores/mockData";
import allStoresData from "./mockData";
import HomeDescription from "../description/HomeDescription";
import SalesSection from "../sections/sales-section/SalesSection";
import "../../styles/StoresComponent.scss";

const StoresComponent = () => {
  return (
    <div className='stores-component'>
      <div className='container'>
        <div className='stores-component__inner'>
          <Slider />
          <PopularStores mockData={mockData} />
          <SalesSection
            firstBannerFirstText='Магазины'
            firstBannerSecondText='Легко откройте свой интернет-магазин'
            secondBannerFirstText='Подключить тариф'
            secondBannerSecondText='Разнообразные опции для вашего бизнеса'
          />
          <PopularStores mockData={allStoresData} />
          <HomeDescription />
        </div>
      </div>
    </div>
  );
};

export default StoresComponent;
