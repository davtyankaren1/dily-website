import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";
import {
  fetchHomeAndYard,
  fetchNotebooks,
  fetchPhones,
  fetchTechniques
} from "../../redux/feature/ProductsSlice";
import TextFieldHeader from "../texts/TextFieldHeader";
import TextFieldTitle from "../texts/TextFieldTitle";
import ArrowDownSvg from "../../assets/svgs/ArrowDownSvg";
import GridSvg from "../../assets/svgs/GridSvg";
import ListSvg from "../../assets/svgs/ListSvg";
import CardItem from "../card/CardItem";
import ProductsTopProducts from "./components/ProductsTopProducts";
import { IProduct } from "../../types/types";

const ProductsComponent = () => {
  const [isListView, setIsListView] = useState(false);
  const [isListView2, setIsListView2] = useState(false);

  const { phones, notebooks, techniques, homeandyard } = useAppSelector(
    (state: {
      products: {
        phones: IProduct[];
        notebooks: IProduct[];
        techniques: IProduct[];
        homeandyard: IProduct[];
      };
    }) => state.products
  );

  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path.includes("/phones")) {
      dispatch(fetchPhones());
    }
    if (path.includes("/notebooks")) {
      dispatch(fetchNotebooks());
    }
    if (path.includes("/techniques")) {
      dispatch(fetchTechniques());
    }
    if (path.includes("/home-and-yard")) {
      dispatch(fetchHomeAndYard());
    }
  }, [dispatch, path]);

  const currentData: IProduct[] = path.includes("/phones")
    ? phones
    : path.includes("/notebooks")
    ? notebooks
    : path.includes("/techniques")
    ? techniques
    : path.includes("/home-and-yard")
    ? homeandyard
    : [];

  const getHeaderText = () => {
    if (path.includes("/phones")) {
      return { text: "Телефоны", path: "/phones" };
    }
    if (path.includes("/notebooks")) {
      return { text: "Ноутбуки", path: "/notebooks" };
    }
    if (path.includes("/techniques")) {
      return { text: "Техника", path: "/techniques" };
    }
    if (path.includes("/home-and-yard")) {
      return { text: "Homeandyard", path: "/home-and-yard" };
    }
    return { text: "", path: "" };
  };

  const { text } = getHeaderText();

  return (
    <div className='phones'>
      <div className='container'>
        <div className='phones_inner'>
          <div className='phone-filter'>
            <div className='filter-component'></div>
            <div className='phone-content-container'>
              <div className='recent-added'>
                <div>
                  <TextFieldHeader text={text} />
                  <TextFieldTitle text='Недавние объявления' />
                </div>
                <div className='phones-content'>
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
                    className={`phones-list ${
                      isListView ? "list-variant" : ""
                    }`}
                  >
                    {currentData.slice(0, 4).map((item) => (
                      <div key={item.id} className='phones-list-item'>
                        <CardItem item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ProductsTopProducts
                currentData={currentData}
                isListView2={isListView2}
                setIsListView2={setIsListView2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
