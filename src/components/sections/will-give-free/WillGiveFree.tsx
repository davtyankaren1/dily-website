import GiveFree1 from "../../../assets/images/give_free1.png";
import GiveFree2 from "../../../assets/images/give_free2.png";
import GiveFree3 from "../../../assets/images/give_free3.png";
import GiveFree4 from "../../../assets/images/give_free4.png";
import GiveFree5 from "../../../assets/images/give_free5.png";
import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import "../../../styles/WillGiveFree.scss";

const WillGiveFree = () => {
  const mockData = [
    {
      id: 1,
      imageUrl: GiveFree1,
      title: "Телефон Xiaomi Redmi ",
      price: "10 000 ₽",
      city: "Москва"
    },
    {
      id: 2,
      imageUrl: GiveFree2,
      title: "Ipnon 12 mini ",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 3,
      imageUrl: GiveFree3,
      title: "Смартфон HUAWEI",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 4,
      imageUrl: GiveFree4,
      title: "Samsung Galaxy ",
      price: "9990 ₽",
      city: "Москва"
    },
    {
      id: 5,
      imageUrl: GiveFree5,
      title: "Смартфон Samsung ",
      price: "20 000 ₽",
      city: "Москва"
    }
  ];

  return (
    <div className='give-free'>
      <div className='container'>
        <div className='give-free-cards-title'>
          <h2 className='give-free-cards-text'>Отдам даром</h2>
          <SeeAll path='/will-give-free' />
        </div>
        <Cards mockData={mockData} />
      </div>
    </div>
  );
};

export default WillGiveFree;
