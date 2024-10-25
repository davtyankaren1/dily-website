import Tech1 from "../../../assets/images/tech1.png";
import Tech2 from "../../../assets/images/tech2.png";
import Tech3 from "../../../assets/images/tech3.png";
import Tech4 from "../../../assets/images/tech4.png";
import Tech5 from "../../../assets/images/tech5.png";
import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import "../../../styles/ActualOffers.scss";

const ActualOffers = () => {
  const mockData = [
    {
      id: 1,
      imageUrl: Tech1,
      title: "Телефон Xiaomi Redmi ",
      price: "10 000 ₽",
      city: "Москва"
    },
    {
      id: 2,
      imageUrl: Tech2,
      title: "Ipnon 12 mini ",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 3,
      imageUrl: Tech3,
      title: "Смартфон HUAWEI",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 4,
      imageUrl: Tech4,
      title: "Samsung Galaxy ",
      price: "9990 ₽",
      city: "Москва"
    },
    {
      id: 5,
      imageUrl: Tech5,
      title: "Смартфон Samsung ",
      price: "20 000 ₽",
      city: "Москва"
    }
  ];

  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <h2 className='selection-cards-text'>Актуальные предложения</h2>
          <SeeAll />
        </div>
        <Cards mockData={mockData} />
      </div>
    </div>
  );
};

export default ActualOffers;
