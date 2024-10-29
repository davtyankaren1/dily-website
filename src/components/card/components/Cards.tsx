import CardItem from "../CardItem";
import { ICards } from "../../../types/types";
import "../../../styles/Cards.scss";

const Cards = ({ mockData }: ICards) => {
  return (
    <div className='cards-items'>
      <div className=''>
        <div className='cards-list_inner'>
          {mockData.slice(0, 5).map((item) => {
            return <CardItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
