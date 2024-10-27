import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import { IProduct } from "../../products/components/ProductsTopProducts";
import "../../../styles/Notebooks-section.scss";

interface IOfferFromDilyProps {
  notebooks: IProduct[];
}

const Notebooks = ({ notebooks }: IOfferFromDilyProps) => {
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

export default Notebooks;