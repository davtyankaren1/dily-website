import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import "../../../styles/OfferFromDily.scss";

const OfferFromDily = ({ notebooks }: any) => {
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>Нотбукы от</h2>
            <LogoTextSvg />
          </div>
          <SeeAll path='/notebooks' />
        </div>
        <Cards mockData={notebooks} />
      </div>
    </div>
  );
};

export default OfferFromDily;
