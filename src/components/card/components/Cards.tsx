import CardItem from "../CardItem";
import "../../../styles/Cards.scss";

const Cards = ({ mockData }: any) => {
  return (
    <div className='cards-items'>
      <div className=''>
        <div className='cards-list_inner'>
          {mockData.map((item: any) => {
            return <CardItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
