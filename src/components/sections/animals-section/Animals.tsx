import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import { IPhoneProps } from "../../../types/types";
import "../../../styles/animals-section.scss";
import { useTranslation } from "react-i18next";

const Animals = ({ animals, language }: IPhoneProps) => {
  const { t } = useTranslation();
  return (
    <div className='selection animals-section'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>{t("animals")}</h2>
            <LogoTextSvg />
          </div>
          <SeeAll path='/animals' />
        </div>
        <Cards mockData={animals} language={language} />
      </div>
    </div>
  );
};

export default Animals;
