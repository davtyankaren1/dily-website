import dontmiss from "../../../assets/images/dontmiss.png";
import "../../../styles/DontMiss.scss";
import DailySale from "./componets/daily-sale/DailySale";
import { Button } from "../../customs";
import { useTranslation } from "react-i18next";

const DontMiss = () => {
  const { t } = useTranslation();

  return (
    <div className='dont-miss-cards'>
      <div className='container'>
        <div className='dont-miss_inner'>
          <div className='dont-miss-card'>
            <div className='dont-miss-card-texts'>
              <h2>{t("dontmiss")}</h2>
              <span>{t("the_cheapest_for_your_home")}</span>
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
