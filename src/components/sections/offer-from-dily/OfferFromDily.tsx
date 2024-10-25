import Not1 from "../../../assets/images/notebook1.png";
import Not2 from "../../../assets/images/notebook2.png";
import Not3 from "../../../assets/images/notebook3.png";
import Not4 from "../../../assets/images/notebook4.png";
import Not5 from "../../../assets/images/notebook5.png";
import Cards from "../../card/components/Cards";
import SeeAll from "../../see-all/SeeAll";
import LogoTextSvg from "../../../assets/svgs/LogoTextSvg";
import "../../../styles/OfferFromDily.scss";

const OfferFromDily = () => {
  const mockData = [
    {
      id: 1,
      imageUrl: Not1,
      title: "Телефон Xiaomi Redmi ",
      price: "10 000 ₽",
      city: "Москва"
    },
    {
      id: 2,
      imageUrl: Not2,
      title: "Ipnon 12 mini ",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 3,
      imageUrl: Not3,
      title: "Смартфон HUAWEI",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 4,
      imageUrl: Not4,
      title: "Samsung Galaxy ",
      price: "9990 ₽",
      city: "Москва"
    },
    {
      id: 5,
      imageUrl: Not5,
      title: "Смартфон Samsung ",
      price: "20 000 ₽",
      city: "Москва"
    }
  ];

  return (
    <div className='selection'>
      <div className='container'>
        <div className='selection-cards-title'>
          <div className='selection-cards-title-with-text'>
            <h2 className='selection-cards-text'>Предложения от </h2>
            <LogoTextSvg />
          </div>
          <SeeAll />
        </div>
        <Cards mockData={mockData} />
      </div>
    </div>
  );
};

export default OfferFromDily;
