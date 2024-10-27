import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import { IProduct } from "../../products/components/ProductsTopProducts";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import "../../../styles/Phones-section.scss";

interface IPhoneProps {
  phones: IProduct[];
}

const Phones = ({ phones }: IPhoneProps) => {
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>Телефоны от</h2>
            <LogoTextSvg />
          </div>
          <SeeAll path='/phones' />
        </div>
        <Cards mockData={phones} />
      </div>
    </div>
  );
};

export default Phones;
