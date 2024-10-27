import Cards from "../../card/components/Cards";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import SeeAll from "../../see-all/SeeAll";
import { ITeqhniques } from "../../../types/types";
import "../../../styles/Technique.scss";

const Technique = ({ techniques }: ITeqhniques) => {
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>Техника от</h2>
            <LogoTextSvg />
          </div>
          <SeeAll path='/techniques' />
        </div>
        <Cards mockData={techniques} />
      </div>
    </div>
  );
};

export default Technique;
