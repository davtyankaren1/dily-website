import CardItem from "../CardItem";
import { IProduct } from "../../products/components/ProductsTopProducts";
import "../../../styles/Cards.scss";

export interface ICards {
  mockData: IProduct[];
}

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
