import HeartIconSvg from "../../assets/svgs/HeartIconSvg";
import { Button } from "../customs";
import DeliveryCar from "../../assets/svgs/DeliveryCar";
import ImageSlider from "../image-slider/ImageSlider";
import BreadCrumbs from "../breadcrumb/BreadCrumbs";
import Avatar from "../../assets/images/Avatar.png";
import RecomentProducts from "../sections/recoment-products/RecomentProducts";
import StarFilled from "../../assets/svgs/StarFilled";
import { IsingleProductProps, IProduct } from "../../types/types";
import { useNavigate } from "react-router-dom";
import "../../styles/SinglePhone.scss";

const defaultImages = [
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://www.shutterstock.com/image-photo/chameleon-close-eye-portrait-reptile-600nw-2466925375.jpg",
  "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
];

interface IProductCharacteristicsProps {
  product: IProduct;
}

const ProductCharacteristics: React.FC<IProductCharacteristicsProps> = ({
  product
}) => {
  const characteristics = {
    toys: [
      { label: "Целевая аудитория:", value: product.targetGender },
      { label: "Количество:", value: product.quantity },
      { label: "Размещено:", value: product.date },
      { label: "Категория:", value: product.category },
      { label: "Создан:", value: product.city }
    ],
    phones: [
      { label: "Диагональ:", value: product.diagonal },
      { label: "Год выпуска:", value: product.date },
      { label: "Memory", value: product.memory },
      { label: "Категория:", value: product.category },
      { label: "Количество:", value: product.quantity },
      { label: "Создан:", value: product.city }
    ],
    notebooks: [
      { label: "Диагональ:", value: product.diagonal },
      { label: "Год выпуска:", value: product.date },
      { label: "Memory", value: product.memory },
      { label: "Категория:", value: product.category },
      { label: "Количество:", value: product.quantity },
      { label: "Создан:", value: product.city }
    ],
    techniques: [
      { label: "Диагональ:", value: product.guarantee },
      { label: "Год выпуска:", value: product.date },
      { label: "Категория:", value: product.category },
      { label: "Количество:", value: product.quantity },
      { label: "Создан:", value: product.city }
    ],
    "home-and-yard": [
      { label: "Количество:", value: product.quantity },
      { label: "Размещено:", value: product.date },
      { label: "Категория:", value: product.category },
      { label: "Создан:", value: product.city }
    ]
  };

  return (
    <div className='product-character__characteristics'>
      {characteristics[product.category]?.map(({ label, value }: any) => (
        <div className='product-character__item' key={label}>
          <span className='product-character__label'>{label}</span>
          <span className='product-character__value'>{value}</span>
        </div>
      ))}
    </div>
  );
};

const ProductSingleComponent: React.FC<IsingleProductProps> = ({ product }) => {
  const navigate = useNavigate("/");

  return (
    <div className='single-page'>
      <div className='container'>
        <BreadCrumbs />
        <div className='single-page-inner'>
          <h2 className='single-page-inner-name'>{product.title}</h2>
          <div className='single-page-inner-content'>
            <div className='single-page-inner-content-left'>
              <ImageSlider images={product.images || defaultImages} />
              <div className='product-title'>
                <span className='product-title-sub'>Описание товара</span>
                <span className='product-title-desc'>
                  {product.description || "Никогда не было"}
                </span>
              </div>
              <div className='product-character'>
                <h3 className='product-character__title'>
                  Основные характеристики
                </h3>
                <ProductCharacteristics product={product} />
              </div>
            </div>

            <div className='single-page-inner-content-right'>
              <div className='single-page-inner-content-right-price'>
                <div className='right-content-price'>
                  <div className='right-content-price-texts'>
                    <span>Цена</span>
                    <span className='single-item-price'>{product.price}</span>
                  </div>
                  <div className='right-content-price-add-fav'>
                    <span>Добавить в избранное</span>
                    <HeartIconSvg />
                  </div>
                </div>

                <div className='single-page-inner-content-right-delivery'>
                  <Button onClick={() => navigate("/login-with-pass")}>
                    Купить
                  </Button>
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
                        {[...Array(5)].map((_, index) => (
                          <StarFilled key={index} />
                        ))}
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
