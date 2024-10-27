import TextFieldTitle from "../../texts/TextFieldTitle";
import ArrowDownSvg from "../../../assets/svgs/ArrowDownSvg";
import GridSvg from "../../../assets/svgs/GridSvg";
import ListSvg from "../../../assets/svgs/ListSvg";
import CardItem from "../../card/CardItem";
import { HeaderProps, IProductsTopProducts } from "../../../types/types";
import "../../../styles/ProductsComponent.scss";

const ProductsTopProducts = ({
  currentData,
  isListView2,
  setIsListView2
}: IProductsTopProducts) => {
  return (
    <div className='top-products'>
      <div>
        <TextFieldTitle text='Топ товаров' />
      </div>
      <div className='phones-content'>
        <Header
          currentData={currentData}
          isListView2={isListView2}
          setIsListView2={setIsListView2}
        />
        <div
          className={`phones-list ${
            isListView2 ? "list-variant" : "grid-variant"
          }`}
        >
          {currentData.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = ({ currentData, isListView2, setIsListView2 }: HeaderProps) => (
  <div className='phones-content-header'>
    <span>{currentData.length} объявлений</span>
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
);

export default ProductsTopProducts;
