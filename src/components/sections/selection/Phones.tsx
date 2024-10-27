import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import "../../../styles/Selection.scss";

const Phones = ({ phones }: any) => {
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <h2 className='selection-cards-text'>Телефоны</h2>
          <SeeAll path='/phones' />
        </div>
        <Cards mockData={phones} />
      </div>
    </div>
  );
};

export default Phones;
