import Img1 from "../../../assets/images/phone1.png";
import Img2 from "../../../assets/images/phone2.png";
import Img3 from "../../../assets/images/phone3.png";
import Img4 from "../../../assets/images/phone4.png";
import Img5 from "../../../assets/images/phone5.png";
import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import "../../../styles/Selection.scss";
import { useNavigate } from "react-router-dom";

const Selection = () => {
  const mockData = [
    {
      id: 1,
      imageUrl: Img1,
      title: "Телефон Xiaomi Redmi ",
      price: "10 000 ₽",
      city: "Москва"
    },
    {
      id: 2,
      imageUrl: Img2,
      title: "Ipnon 12 mini ",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 3,
      imageUrl: Img3,
      title: "Смартфон HUAWEI",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 4,
      imageUrl: Img4,
      title: "Samsung Galaxy ",
      price: "9990 ₽",
      city: "Москва"
    },
    {
      id: 5,
      imageUrl: Img5,
      title: "Смартфон Samsung ",
      price: "20 000 ₽",
      city: "Москва"
    }
  ];

  const navigate = useNavigate();

  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <h2 className='selection-cards-text'>Подборка для вас</h2>
          <SeeAll path='/phones' />
        </div>
        <Cards mockData={mockData} />
      </div>
    </div>
  );
};

export default Selection;
