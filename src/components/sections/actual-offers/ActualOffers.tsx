import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import "../../../styles/ActualOffers.scss";

const ActualOffers = ({ techniques }: any) => {
  console.log(techniques, "techniques");
  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <h2 className='selection-cards-text'>Техника</h2>
          <SeeAll path='/techniques' />
        </div>
        <Cards mockData={techniques} />
      </div>
    </div>
  );
};

export default ActualOffers;
