import Cards from "../../card/components/Cards";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import SeeAll from "../../see-all/SeeAll";
import { IHomeandYard } from "../../../types/types";
import "../../../styles/Technique.scss";

const HomeAndYard = ({ homeandyard }: IHomeandYard) => {
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>Дом и Сад от</h2>
            <LogoTextSvg />
          </div>
          <SeeAll path='/home-and-yard' />
        </div>
        <Cards mockData={homeandyard} />
      </div>
    </div>
  );
};

export default HomeAndYard;
