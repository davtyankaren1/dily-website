import CardItem from "../CardItem";
import "../../../styles/Cards.scss";
import { ICards } from "../../../types/types";

const Cards = ({ mockData }: ICards) => {
  return (
    <div className='cards-items'>
      <div className=''>
        <div className='cards-list_inner'>
          {mockData.map((item) => {
            return <CardItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
