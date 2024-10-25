import { useState } from "react";

import TextFieldHeader from "../texts/TextFieldHeader";
import TextFieldTitle from "../texts/TextFieldTitle";

import Img1 from "../../assets/images/phone1.png";
import Img2 from "../../assets/images/phone2.png";
import Img3 from "../../assets/images/phone3.png";
import Img4 from "../../assets/images/phone4.png";
import Img5 from "../../assets/images/phone5.png";

import CardItem from "../card/CardItem";
import ArrowDownSvg from "../../assets/svgs/ArrowDownSvg";
import GridSvg from "../../assets/svgs/GridSvg";
import ListSvg from "../../assets/svgs/ListSvg";

import "../../styles/Phones.scss";

const Phones = () => {
  const [isListView, setIsListView] = useState(false);
  const [isListView2, setIsListView2] = useState(false);

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
    },
    {
      id: 6,
      imageUrl: Img1,
      title: "Телефон Xiaomi Redmi ",
      price: "10 000 ₽",
      city: "Москва"
    },
    {
      id: 7,
      imageUrl: Img2,
      title: "Ipnon 12 mini ",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 8,
      imageUrl: Img3,
      title: "Смартфон HUAWEI",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 9,
      imageUrl: Img4,
      title: "Samsung Galaxy ",
      price: "9990 ₽",
      city: "Москва"
    },
    {
      id: 10,
      imageUrl: Img5,
      title: "Смартфон Samsung ",
      price: "20 000 ₽",
      city: "Москва"
    },
    {
      id: 11,
      imageUrl: Img1,
      title: "Телефон Xiaomi Redmi ",
      price: "10 000 ₽",
      city: "Москва"
    },
    {
      id: 12,
      imageUrl: Img2,
      title: "Ipnon 12 mini ",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 13,
      imageUrl: Img3,
      title: "Смартфон HUAWEI",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 14,
      imageUrl: Img4,
      title: "Samsung Galaxy ",
      price: "9990 ₽",
      city: "Москва"
    },
    {
      id: 15,
      imageUrl: Img5,
      title: "Смартфон Samsung ",
      price: "20 000 ₽",
      city: "Москва"
    },
    {
      id: 16,
      imageUrl: Img1,
      title: "Телефон Xiaomi Redmi ",
      price: "10 000 ₽",
      city: "Москва"
    },
    {
      id: 17,
      imageUrl: Img2,
      title: "Ipnon 12 mini ",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 18,
      imageUrl: Img3,
      title: "Смартфон HUAWEI",
      price: "7990 ₽",
      city: "Москва"
    },
    {
      id: 19,
      imageUrl: Img4,
      title: "Samsung Galaxy ",
      price: "9990 ₽",
      city: "Москва"
    },
    {
      id: 20,
      imageUrl: Img5,
      title: "Смартфон Samsung ",
      price: "20 000 ₽",
      city: "Москва"
    }
  ];

  return (
    <div className='phones'>
      <div className='container'>
        <div className='phone-filter'>
          <div className='filter-component'></div>

          <div className='phone-content-container'>
            <div className='recent-added'>
              <div>
                <TextFieldHeader text='Телефоны и аксессуары' />
                <TextFieldTitle text='Недавние объявления' />
              </div>
              <div className='phones-content'>
                <div className='phones-content-header'>
                  <span>1200 объявлений</span>
                  <div className='phones-content-header-card-structures'>
                    <div className='phones-content-header-sorting'>
                      <span>Сортировать по</span>
                      <div className='phones-sorting-dropdown'>
                        <span>Новизне</span>
                        <ArrowDownSvg />
                      </div>
                    </div>

                    <div className='card-structure-variants'>
                      <div onClick={() => setIsListView(false)}>
                        <GridSvg selected={!isListView} />
                      </div>
                      <div onClick={() => setIsListView(true)}>
                        <ListSvg selected={isListView} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`phones-list ${isListView ? "list-variant" : ""}`}
                >
                  {mockData.splice(0, 4).map((item) => (
                    <div key={item.id} className='phones-list-item'>
                      <CardItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='top-products'>
              <div>
                <TextFieldTitle text='Топ товаров' />
              </div>
              <div className='phones-content'>
                <div className='phones-content-header'>
                  <span>1200 объявлений</span>
                  <div className='phones-content-header-card-structures'>
                    <div className='phones-content-header-sorting'>
                      <span>Сортировать по</span>
                      <div className='phones-sorting-dropdown'>
                        <span>Новизне</span>
                        <ArrowDownSvg />
                      </div>
                    </div>

                    <div className='card-structure-variants'>
                      <div onClick={() => setIsListView2(false)}>
                        <GridSvg selected={!isListView2} />
                      </div>
                      <div onClick={() => setIsListView2(true)}>
                        <ListSvg selected={isListView2} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`phones-list ${isListView2 ? "list-variant" : ""}`}
                >
                  {mockData.map((item) => (
                    <div key={item.id}>
                      <CardItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phones;
