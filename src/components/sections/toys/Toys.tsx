import Cards from "../../card/components/Cards";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import SeeAll from "../../see-all/SeeAll";
import { IToys } from "../../../types/types";
import "../../../styles/Technique.scss";

const Toys = ({ toys }: IToys) => {
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>Игрушки от</h2>
            <LogoTextSvg />
          </div>
          <SeeAll path='/toys' />
        </div>
        <Cards mockData={toys} />
      </div>
    </div>
  );
};

export default Toys;
