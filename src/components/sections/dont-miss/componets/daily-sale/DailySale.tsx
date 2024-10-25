import Phone1 from "../../../../../assets/images/phone1.png";
import { Button } from "../../../../customs";

import "../../../../../styles/DailySale.scss";

const DailySale = () => {
  return (
    <div className='daily-sales'>
      <div className='container'>
        <div className='daily-sales__inner'>
          <h2>СКИДКА ДНЯ</h2>
          <div className='daily-sale-card'>
            <img src={Phone1} alt='tech1' />
            <div className='daily-sales-card-info'>
              <span className='daily-sale-product-name'>
                Телефон Xiaomi Redmi
              </span>
              <div className='daly-sale-prices-div'>
                <span className='daily-sale-city-deteled-price'>70 000 ₽</span>
                <span className='daily-sale-city-actual-price'>10 000 ₽</span>
              </div>
              <div className='daily-sale-city'>
                <span>Москва</span>
                <img
                  src='https://r2.erweima.ai/imgcompressed/compressed_7e7ebdee8467db610601243d63d51b71.webp'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        <div className='buy-btn'>
          <Button children='Купить' bgColor={"#fff"} color={"#00c65e"} />
        </div>
      </div>
    </div>
  );
};

export default DailySale;
