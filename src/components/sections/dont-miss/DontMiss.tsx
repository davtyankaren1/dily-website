import dontmiss from "../../../assets/images/dontmiss.png";
import "../../../styles/DontMiss.scss";
import DailySale from "./componets/daily-sale/DailySale";
import { Button } from "../../customs";

const DontMiss = () => {
  return (
    <div className='dont-miss-cards'>
      <div className='container'>
        <div className='dont-miss_inner'>
          <div className='dont-miss-card'>
            <div className='dont-miss-card-texts'>
              <h2>НЕ УПУСТИ!</h2>
              <span>Самые выгодные предложения для вашего дома и сада</span>
              <div className='details_btn'>
                <Button
                  color={"#fff"}
                  bgColor={"#00c65e"}
                  children={"Подробнее"}
                />
              </div>
            </div>
            <img className='dont-miss-card-img' src={dontmiss} alt='' />
          </div>

          <div>
            <DailySale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;
