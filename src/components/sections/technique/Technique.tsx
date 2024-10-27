import Cards from "../../card/components/Cards";
import { IProduct } from "../../products/components/ProductsTopProducts";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import "../../../styles/Technique.scss";
import SeeAll from "../../see-all/SeeAll";

interface ITeqhniques {
  techniques: IProduct[];
}

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
