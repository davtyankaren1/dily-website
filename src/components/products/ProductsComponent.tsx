import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";
import {
  fetchPhones,
  fetchNotebooks,
  fetchTechniques,
  fetchToys
} from "../../redux/feature/ProductsSlice";
import { useDebounce } from "./components/useDebounce";
import ProductsTopProducts from "./components/ProductsTopProducts";
import Loading from "../loading/Loading";
import { Range, getTrackBackground } from "react-range";
import { Button } from "../customs";
import TextFieldAlternative from "../texts/TextFieldAlternative";
import { FaFemale, FaGenderless, FaMale } from "react-icons/fa";
import "../../styles/ProductsComponent.scss";

const MIN_PRICE = 0;
const MAX_PRICE = 50000;
const ITEMS_PER_PAGE = 7;

const ProductsComponent = () => {
  const [isListView2, setIsListView2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const [priceRange, setPriceRange] = useState<number[]>([
    MIN_PRICE,
    MAX_PRICE
  ]);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const phones = useAppSelector((state) => state.products.phones);
  const notebooks = useAppSelector((state) => state.products.notebooks);
  const techniques = useAppSelector((state) => state.products.techniques);
  const toys = useAppSelector((state) => state.products.toys);
  const isLoading = useAppSelector((state) => state.products.isLoading);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const path = location.pathname;

  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const debouncedMinPrice = useDebounce(priceRange[0].toString(), 500);
  const debouncedMaxPrice = useDebounce(priceRange[1].toString(), 500);

  useEffect(() => {
    const fetchData = () => {
      const params = {
        search: debouncedSearchQuery,
        limit: ITEMS_PER_PAGE,
        offset: (currentPage - 1) * ITEMS_PER_PAGE,
        gender: ""
      };

      if (path.includes("/phones")) {
        dispatch(fetchPhones(params));
      }
      if (path.includes("/toys")) {
        if (selectedGender) {
          params.gender = selectedGender;
        }
        dispatch(fetchToys(params));
      }
      if (path.includes("/notebooks")) {
        dispatch(fetchNotebooks(params));
      } else if (path.includes("/techniques")) {
        dispatch(fetchTechniques(params));
      }
    };

    fetchData();
  }, [debouncedSearchQuery, dispatch, path, currentPage, selectedGender]);

  useEffect(() => {
    if (isFiltersApplied) {
      const params = {
        search: debouncedSearchQuery,
        minPrice: debouncedMinPrice,
        maxPrice: debouncedMaxPrice,
        limit: ITEMS_PER_PAGE,
        offset: (currentPage - 1) * ITEMS_PER_PAGE
      };

      if (path.includes("/phones")) {
        dispatch(fetchPhones(params));
      }
      if (path.includes("/notebooks")) {
        dispatch(fetchNotebooks(params));
      }
      if (path.includes("/techniques")) {
        dispatch(fetchTechniques(params));
      }
      if (path.includes("/toys")) {
        dispatch(fetchToys(params));
      }
    }
  }, [
    isFiltersApplied,
    debouncedSearchQuery,
    debouncedMinPrice,
    debouncedMaxPrice,
    dispatch,
    path,
    currentPage
  ]);

  const currentData: any = path.includes("/phones")
    ? phones
    : path.includes("/notebooks")
    ? notebooks
    : path.includes("/techniques")
    ? techniques
    : path.includes("/toys")
    ? toys
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
      return { text: "Дом и Сад", path: "/home-and-yard" };
    }
    if (path.includes("/toys")) {
      return { text: "Игрушки", path: "/toys" };
    }
    return { text: "", path: "" };
  };

  const handleSearchSubmit = () => {
    setIsFiltersApplied(true);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(
      MIN_PRICE,
      Math.min(Number(e.target.value), priceRange[1])
    );
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(
      MAX_PRICE,
      Math.max(Number(e.target.value), priceRange[0])
    );
    setPriceRange([priceRange[0], value]);
  };

  const { text } = getHeaderText();

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      window.scrollTo(0, 0);
      return nextPage;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const prevPageNumber = Math.max(prevPage - 1, 1);
      window.scrollTo(0, 0);
      return prevPageNumber;
    });
  };

  const disableNextButton = currentData.length < ITEMS_PER_PAGE;

  return (
    <div className='phones'>
      <div className='container'>
        <div className='phones_inner'>
          <div className='phone-filter'>
            <div className='filter-component'>
              <TextFieldAlternative text='Филтрация' />

              <label>Search</label>
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search for products'
              />

              <label>
                Price Range: {priceRange[0]} - {priceRange[1]}
              </label>

              <div
                style={{ display: "flex", gap: "5px", marginBottom: "10px" }}
              >
                <input
                  type='number'
                  value={priceRange[0]}
                  onChange={handleMinPriceChange}
                  placeholder='Min Price'
                />
                <input
                  type='number'
                  value={priceRange[1]}
                  onChange={handleMaxPriceChange}
                  placeholder='Max Price'
                />
              </div>

              <div className='range-slider-container'>
                <Range
                  values={priceRange}
                  step={1}
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  onChange={(values) => setPriceRange(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        background: getTrackBackground({
                          values: priceRange,
                          colors: ["#ccc", "#00c65e", "#ccc"],
                          min: MIN_PRICE,
                          max: MAX_PRICE
                        })
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "15px",
                        width: "15px",
                        backgroundColor: "#00c65e",
                        borderRadius: "50%",
                        outline: "none"
                      }}
                    />
                  )}
                />
              </div>

              <Button onClick={handleSearchSubmit}>Apply Filters</Button>

              {path.includes("/toys") && (
                <div className='gender-filter'>
                  <div className='gender-options'>
                    <div
                      className={`gender-option male ${
                        selectedGender === "male" ? "active" : ""
                      }`}
                      onClick={() => setSelectedGender("male")}
                    >
                      <FaMale className='gender-icon' />
                      <span>Male</span>
                      {selectedGender === "male" && (
                        <span className='checked-icon'>✔</span>
                      )}
                    </div>
                    <div
                      className={`gender-option female ${
                        selectedGender === "female" ? "active" : ""
                      }`}
                      onClick={() => setSelectedGender("female")}
                    >
                      <FaFemale className='gender-icon' />
                      <span>Female</span>
                      {selectedGender === "female" && (
                        <span className='checked-icon'>✔</span>
                      )}
                    </div>
                    <div
                      className={`gender-option unisex ${
                        selectedGender === "unisex" ? "active" : ""
                      }`}
                      onClick={() => setSelectedGender("unisex")}
                    >
                      <FaGenderless className='gender-icon' />
                      <span>Unisex</span>
                      {selectedGender === "unisex" && (
                        <span className='checked-icon'>✔</span>
                      )}
                    </div>
                    <div
                      className={`gender-option all ${
                        selectedGender === null ? "active" : ""
                      }`}
                      onClick={() => setSelectedGender(null)}
                    >
                      <span>All</span>
                      {selectedGender === null && (
                        <span className='checked-icon'>✔</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {isLoading ? (
              <Loading />
            ) : currentData.length === 0 ? (
              <div>No Items Found</div>
            ) : (
              <div className='phone-content-container'>
                <ProductsTopProducts
                  setIsListView2={setIsListView2}
                  isListView2={isListView2}
                  currentData={currentData}
                  text={text}
                />
                <div className='pagination-controls'>
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className='pagination-button'
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={disableNextButton}
                    className='pagination-button'
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
