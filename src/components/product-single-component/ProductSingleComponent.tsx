import HeartIconSvg from "../../assets/svgs/HeartIconSvg";
import { Button } from "../customs";
import DeliveryCar from "../../assets/svgs/DeliveryCar";
import ImageSlider from "../image-slider/ImageSlider";
import BreadCrumbs from "../breadcrumb/BreadCrumbs";
import Avatar from "../../assets/images/Avatar.png";
import RecomentProducts from "../sections/recoment-products/RecomentProducts";
import StarFilled from "../../assets/svgs/StarFilled";
import { IsingleProductProps } from "../../types/types";
import "../../styles/SinglePhone.scss";

const ProductSingleComponent = ({ product }: IsingleProductProps) => {
  const images = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://www.shutterstock.com/image-photo/chameleon-close-eye-portrait-reptile-600nw-2466925375.jpg",
    "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
  ];

  return (
    <div className='single-page'>
      <div className='container'>
        <div className='single-page-breadcrubmbs'>
          <BreadCrumbs />
        </div>
        <div className='single-page-inner'>
          <h2 className='single-page-inner-name'>{product.title}</h2>
          <div className='single-page-inner-content'>
            <div className='single-page-inner-content-left'>
              <div className='single-page-slider'>
                <ImageSlider
                  images={product.images ? product.images : images}
                />
              </div>
              <div className='product-title'>
                <span className='product-title-sub'>Описание товара</span>
                <span className='product-title-desc'>
                  Продаю IPhone XS, абсолютно новый, в комплекте идёт только
                  коробка и сам телефон, проверить сможете при встрече.
                </span>
              </div>

              <div className='product-character'>
                <div className='product-character__section'>
                  <h3 className='product-character__title'>
                    Основные характеристики
                  </h3>
                  <div className='product-character__characteristics'>
                    <div className='product-character__item'>
                      <span className='product-character__label'>
                        Диагональ:
                      </span>
                      <span className='product-character__value'>5 дюймов</span>
                    </div>
                    <div className='product-character__item'>
                      <span className='product-character__label'>
                        Год выпуска:
                      </span>
                      <span className='product-character__value'>2017</span>
                    </div>
                    <div className='product-character__item'>
                      <span className='product-character__label'>
                        Объем встроенной памяти:
                      </span>
                      <span className='product-character__value'>32 ГБ</span>
                    </div>
                    <div className='product-character__item'>
                      <span className='product-character__label'>
                        Количество сим-карт:
                      </span>
                      <span className='product-character__value'>3 ГБ</span>
                    </div>
                    <div className='product-character__item'>
                      <span className='product-character__label'>
                        Количество сим-карт:
                      </span>
                      <span className='product-character__value'>3 ГБ</span>
                    </div>
                    <div className='product-character__item'>
                      <span className='product-character__label'>
                        Объем оперативной памяти:
                      </span>
                      <span className='product-character__value'>3 ГБ</span>
                    </div>
                  </div>
                </div>

                <div className='product-info-card'>
                  <div className='product-info-card__section'>
                    <p>
                      <span>Категория:</span> Телефоны и аксессуары
                    </p>
                    <p>
                      <span>Подкатегория:</span> Смартфоны
                    </p>
                    <p>
                      <span>Состояние товара:</span> Хорошее
                    </p>
                  </div>
                  <hr className='product-info-card__divider' />
                  <div className='product-info-card__section'>
                    <p>
                      <span>В избранном:</span> 10
                    </p>
                    <p>
                      <span>Просмотры:</span> 130
                    </p>
                    <p>
                      <span>Размещено:</span> 12.06.2021
                    </p>
                  </div>
                </div>
              </div>
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

              <div className='single-page-inner-content-right-user-profile'>
                <div className='avatar-container'>
                  <img src={Avatar} alt='' width={56} height={56} />
                </div>

                <div className='user-info-container'>
                  <div className='user-header'>
                    <span className='user-name'>Алексей К.</span>
                    <div className='user-rating'>
                      <span className='rating-value'>5</span>
                      <div className='stars'>
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                      </div>
                    </div>
                  </div>
                  <div className='user-details'>
                    <span className='detail'>Частное лицо</span>
                    <span className='detail'>Москва</span>
                    <span className='detail'>на Dily.ru с 2020 года</span>
                  </div>

                  <div className='user-actions'>
                    <div className='user-rating-footer-div'>
                      <span>5 объявлений</span>
                      <button className='user-profile-rating_btn'>
                        Посмотреть
                      </button>
                    </div>
                    <button className='user-profile-rating_btn'>
                      Подписаться на продавца
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RecomentProducts />
      </div>
    </div>
  );
};

export default ProductSingleComponent;
