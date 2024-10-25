import SalesImg1 from "../../../assets/images/image.png";
import SalesImg2 from "../../../assets/images/A0r95y5Q598.jpg";
import "../../../styles/SalesSection.scss";

const SalesSection = () => {
  return (
    <div className='sales-section'>
      <div className='container'>
        <div className='sales__content'>
          <div className='sales__item'>
            <div className='sales__text'>
              <span className='sales__title'>Скидки от Dily.ru</span>
              <span className='sales__subtitle'>Горячие цены сезона</span>
            </div>
            <img
              className='sales__image'
              src={SalesImg1}
              alt='Скидки от Dily.ru'
            />
          </div>

          <div className='sales__item'>
            <div className='sales__text'>
              <span className='sales__subtitle'>
                Подборка товаров для идеального рабочего места
              </span>
            </div>
            <img
              className='sales__image sales__image--full'
              src={SalesImg2}
              alt='Подборка товаров'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSection;
