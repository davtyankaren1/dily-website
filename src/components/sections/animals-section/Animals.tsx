import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import { IPhoneProps } from "../../../types/types";
import "../../../styles/animals-section.scss";

const Animals = ({ animals }: IPhoneProps) => {
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>Животные от</h2>
            <LogoTextSvg />
          </div>
          <SeeAll path='/animals' />
        </div>
        <Cards mockData={animals} />
      </div>
    </div>
  );
};

export default Animals;
