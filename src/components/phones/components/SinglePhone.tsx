import React from "react";
import "../../../styles/SinglePhone.scss";
import HeartIconSvg from "../../../assets/svgs/HeartIconSvg";
import { Button } from "../../customs";
import DeliveryCar from "../../../assets/svgs/DeliveryCar";
import ImageSlider from "../../image-slider/ImageSlider";

const SinglePhone = () => {
  const images = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg", // Replace these URLs with your images
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://www.shutterstock.com/image-photo/chameleon-close-eye-portrait-reptile-600nw-2466925375.jpg",
    "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
  ];

  return (
    <div className='single-page'>
      <div className='container'>
        <div className='single-page-inner'>
          <div className='single-page-inner-content'>
            <div className='single-page-inner-content-left'>
              <div className='single-page-slider'>
                <ImageSlider images={images} />
              </div>
              <div className='product-title'>
                <span className='product-title-sub'>Описание товара</span>
                <span className='product-title-desc'>
                  Продаю IPhone XS, абсолютно новый, в комплекте идёт только
                  коробка и сам телефон, проверить сможете при встрече.
                </span>
              </div>
              <div className='products-charachter'></div>
            </div>

            <div className='single-page-inner-content-right'>
              <div className='single-page-inner-content-right-price'>
                <div className='right-content-price'>
                  <div className='right-content-price-texts'>
                    <span>Цена</span>
                    <span className='single-item-price'>30 000р</span>
                  </div>
                  <div className='right-content-price-add-fav'>
                    <span>Добавить в избранное</span>
                    <HeartIconSvg />
                  </div>
                </div>

                <div className='single-page-inner-content-right-delivery'>
                  <Button children='Купить' />
                  <div className='single-page-delivery-icon'>
                    <DeliveryCar />
                    <span>Доставка</span>
                  </div>
                </div>
              </div>
              <div className='single-page-inner-content-right-user-profile'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePhone;
