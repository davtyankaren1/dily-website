import "../../../styles/SalesSection.scss";

const SalesSection = ({
  firstBannerFirstText,
  firstBannerSecondText,
  secondBannerFirstText,
  secondBannerSecondText,
  salesBannerImg1,
  salesBannerImg2
}: any) => {
  return (
    <div className='sales-section'>
      <div className='container'>
        <div className='sales__content'>
          <div className='sales__item'>
            <div className='sales__text'>
              <span className='sales__title'>{firstBannerFirstText}</span>
              <span className='sales__subtitle'>{firstBannerSecondText}</span>
            </div>
            <img className='sales__image' src={salesBannerImg1} />
          </div>

          <div className='sales__item'>
            <div className='sales__text'>
              <span className='sales__title'>{secondBannerFirstText}</span>
              <span className='sales__subtitle'>{secondBannerSecondText}</span>
            </div>
            <img
              className='sales__image sales__image--full'
              src={salesBannerImg2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSection;
