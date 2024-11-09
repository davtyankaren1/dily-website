// import { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { useLocation } from "react-router-dom";
// import {
//   fetchPhones,
//   fetchNotebooks,
//   fetchTechniques,
//   fetchHomeAndYard,
//   fetchToys
// } from "../../redux/feature/ProductsSlice";
// import { useDebounce } from "./components/useDebounce";
// import ProductsTopProducts from "./components/ProductsTopProducts";
// import { IProduct } from "../../types/types";
// import Loading from "../loading/Loading";

// const ProductsComponent = () => {
//   const [isListView2, setIsListView2] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [minPrice, setMinPrice] = useState<string | undefined>("");
//   const [maxPrice, setMaxPrice] = useState<string | undefined>("");
//   const [isFiltersApplied, setIsFiltersApplied] = useState(false);

//   const { phones, notebooks, techniques, homeandyard, toys, isLoading } =
//     useAppSelector(
//       (state: {
//         products: {
//           phones: IProduct[];
//           notebooks: IProduct[];
//           techniques: IProduct[];
//           homeandyard: IProduct[];
//           toys: IProduct[];
//         };
//       }) => state.products
//     );

//   const dispatch = useAppDispatch();
//   const location = useLocation();
//   const path = location.pathname;

//   const debouncedSearchQuery = useDebounce(searchQuery, 500);
//   const debouncedMinPrice = useDebounce(minPrice, 500);
//   const debouncedMaxPrice = useDebounce(maxPrice, 500);

//   useEffect(() => {
//     const fetchData = () => {
//       const params = {
//         search: debouncedSearchQuery
//       };

//       if (path.includes("/phones")) {
//         dispatch(fetchPhones(params));
//       } else if (path.includes("/techniques")) {
//         dispatch(fetchTechniques(params));
//       }
//     };

//     fetchData();
//   }, [debouncedSearchQuery, dispatch, path]);

//   useEffect(() => {
//     if (isFiltersApplied) {
//       if (path.includes("/phones")) {
//         dispatch(
//           fetchPhones({
//             search: debouncedSearchQuery,
//             minPrice: debouncedMinPrice,
//             maxPrice: debouncedMaxPrice
//           })
//         );
//       }
//       if (path.includes("/notebooks")) {
//         dispatch(fetchNotebooks());
//       }
//       if (path.includes("/techniques")) {
//         dispatch(fetchTechniques());
//       }
//       if (path.includes("/home-and-yard")) {
//         dispatch(fetchHomeAndYard());
//       }
//       if (path.includes("/toys")) {
//         dispatch(fetchToys());
//       }
//     }
//   }, [
//     isFiltersApplied,
//     debouncedSearchQuery,
//     debouncedMinPrice,
//     debouncedMaxPrice,
//     dispatch,
//     path
//   ]);

//   const currentData: IProduct[] = path.includes("/phones")
//     ? phones
//     : path.includes("/notebooks")
//     ? notebooks
//     : path.includes("/techniques")
//     ? techniques
//     : path.includes("/home-and-yard")
//     ? homeandyard
//     : path.includes("/toys")
//     ? toys
//     : [];

//   const getHeaderText = () => {
//     if (path.includes("/phones")) {
//       return { text: "Телефоны", path: "/phones" };
//     }
//     if (path.includes("/notebooks")) {
//       return { text: "Ноутбуки", path: "/notebooks" };
//     }
//     if (path.includes("/techniques")) {
//       return { text: "Техника", path: "/techniques" };
//     }
//     if (path.includes("/home-and-yard")) {
//       return { text: "Дом и Сад", path: "/home-and-yard" };
//     }
//     if (path.includes("/toys")) {
//       return { text: "Игрушки", path: "/toys" };
//     }
//     return { text: "", path: "" };
//   };

//   const handleSearchSubmit = () => {
//     setIsFiltersApplied(true);
//   };

//   const { text } = getHeaderText();

//   return (
//     <div className='phones'>
//       <div className='container'>
//         <div className='phones_inner'>
//           <div className='phone-filter'>
//             <div className='filter-component'>
//               <input
//                 type='text'
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder='Search for products'
//               />
//               <div style={{ display: "flex", gap: "5px" }}>
//                 <input
//                   type='number'
//                   value={minPrice}
//                   onChange={(e) => setMinPrice(e.target.value)}
//                   placeholder='Min Price'
//                 />
//                 <input
//                   type='number'
//                   value={maxPrice}
//                   onChange={(e) => setMaxPrice(e.target.value)}
//                   placeholder='Max Price'
//                 />
//               </div>

//               <button onClick={handleSearchSubmit}>Apply Filters</button>
//             </div>

//             {isLoading ? (
//               <Loading />
//             ) : (
//               <div className='phone-content-container'>
//                 <ProductsTopProducts
//                   setIsListView2={setIsListView2}
//                   isListView2={isListView2}
//                   currentData={currentData}
//                   text={text}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsComponent;

// ====================================================================>>>>>
// import { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { useLocation } from "react-router-dom";
// import {
//   fetchPhones,
//   fetchNotebooks,
//   fetchTechniques,
//   fetchHomeAndYard,
//   fetchToys
// } from "../../redux/feature/ProductsSlice";
// import { useDebounce } from "./components/useDebounce";
// import ProductsTopProducts from "./components/ProductsTopProducts";
// import { IProduct } from "../../types/types";
// import Loading from "../loading/Loading";
// import { Range, getTrackBackground } from "react-range";
// import { Button } from "../customs";

// const MIN_PRICE = 0;
// const MAX_PRICE = 50000;

// const ProductsComponent = () => {
//   const [isListView2, setIsListView2] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState<number[]>([
//     MIN_PRICE,
//     MAX_PRICE
//   ]);
//   const [isFiltersApplied, setIsFiltersApplied] = useState(false);

//   const { phones, notebooks, techniques, homeandyard, toys, isLoading } =
//     useAppSelector(
//       (state: {
//         products: {
//           phones: IProduct[];
//           notebooks: IProduct[];
//           techniques: IProduct[];
//           homeandyard: IProduct[];
//           toys: IProduct[];
//         };
//       }) => state.products
//     );

//   const dispatch = useAppDispatch();
//   const location = useLocation();
//   const path = location.pathname;

//   const debouncedSearchQuery = useDebounce(searchQuery, 500);
//   const debouncedMinPrice = useDebounce(priceRange[0].toString(), 500);
//   const debouncedMaxPrice = useDebounce(priceRange[1].toString(), 500);

//   useEffect(() => {
//     const fetchData = () => {
//       const params = {
//         search: debouncedSearchQuery
//       };

//       if (path.includes("/phones")) {
//         dispatch(fetchPhones(params));
//       } else if (path.includes("/techniques")) {
//         dispatch(fetchTechniques(params));
//       }
//     };

//     fetchData();
//   }, [debouncedSearchQuery, dispatch, path]);

//   useEffect(() => {
//     if (isFiltersApplied) {
//       if (path.includes("/phones")) {
//         dispatch(
//           fetchPhones({
//             search: debouncedSearchQuery,
//             minPrice: debouncedMinPrice,
//             maxPrice: debouncedMaxPrice
//           })
//         );
//       }
//       if (path.includes("/notebooks")) {
//         dispatch(fetchNotebooks());
//       }
//       if (path.includes("/techniques")) {
//         dispatch(fetchTechniques());
//       }
//       if (path.includes("/home-and-yard")) {
//         dispatch(fetchHomeAndYard());
//       }
//       if (path.includes("/toys")) {
//         dispatch(fetchToys());
//       }
//     }
//   }, [
//     isFiltersApplied,
//     debouncedSearchQuery,
//     debouncedMinPrice,
//     debouncedMaxPrice,
//     dispatch,
//     path
//   ]);

//   const currentData: IProduct[] = path.includes("/phones")
//     ? phones
//     : path.includes("/notebooks")
//     ? notebooks
//     : path.includes("/techniques")
//     ? techniques
//     : path.includes("/home-and-yard")
//     ? homeandyard
//     : path.includes("/toys")
//     ? toys
//     : [];

//   const getHeaderText = () => {
//     if (path.includes("/phones")) {
//       return { text: "Телефоны", path: "/phones" };
//     }
//     if (path.includes("/notebooks")) {
//       return { text: "Ноутбуки", path: "/notebooks" };
//     }
//     if (path.includes("/techniques")) {
//       return { text: "Техника", path: "/techniques" };
//     }
//     if (path.includes("/home-and-yard")) {
//       return { text: "Дом и Сад", path: "/home-and-yard" };
//     }
//     if (path.includes("/toys")) {
//       return { text: "Игрушки", path: "/toys" };
//     }
//     return { text: "", path: "" };
//   };

//   const handleSearchSubmit = () => {
//     setIsFiltersApplied(true);
//   };

//   const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.max(
//       MIN_PRICE,
//       Math.min(Number(e.target.value), priceRange[1])
//     );
//     setPriceRange([value, priceRange[1]]);
//   };

//   const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.min(
//       MAX_PRICE,
//       Math.max(Number(e.target.value), priceRange[0])
//     );
//     setPriceRange([priceRange[0], value]);
//   };

//   const { text } = getHeaderText();

//   return (
//     <div className='phones'>
//       <div className='container'>
//         <div className='phones_inner'>
//           <div className='phone-filter'>
//             <div className='filter-component'>
//               <label>Search</label>
//               <input
//                 type='text'
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder='Search for products'
//               />

//               <label>
//                 Price Range: {priceRange[0]} - {priceRange[1]}
//               </label>

//               <div
//                 style={{ display: "flex", gap: "5px", marginBottom: "10px" }}
//               >
//                 <input
//                   type='number'
//                   value={priceRange[0]}
//                   onChange={handleMinPriceChange}
//                   placeholder='Min Price'
//                 />
//                 <input
//                   type='number'
//                   value={priceRange[1]}
//                   onChange={handleMaxPriceChange}
//                   placeholder='Max Price'
//                 />
//               </div>

//               <div className='range-slider-container'>
//                 <Range
//                   values={priceRange}
//                   step={1}
//                   min={MIN_PRICE}
//                   max={MAX_PRICE}
//                   onChange={(values) => setPriceRange(values)}
//                   renderTrack={({ props, children }) => (
//                     <div
//                       {...props}
//                       style={{
//                         ...props.style,
//                         height: "6px",
//                         background: getTrackBackground({
//                           values: priceRange,
//                           colors: ["#ccc", "#00c65e", "#ccc"],
//                           min: MIN_PRICE,
//                           max: MAX_PRICE
//                         })
//                       }}
//                     >
//                       {children}
//                     </div>
//                   )}
//                   renderThumb={({ props }) => (
//                     <div
//                       {...props}
//                       style={{
//                         ...props.style,
//                         height: "15px",
//                         width: "15px",
//                         backgroundColor: "#00c65e",
//                         borderRadius: "50%",
//                         outline: "none"
//                       }}
//                     />
//                   )}
//                 />
//               </div>

//               <Button onClick={handleSearchSubmit}>Apply Filters</Button>
//             </div>

//             {isLoading ? (
//               <Loading />
//             ) : (
//               <div className='phone-content-container'>
//                 <ProductsTopProducts
//                   setIsListView2={setIsListView2}
//                   isListView2={isListView2}
//                   currentData={currentData}
//                   text={text}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsComponent;

// import { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { useLocation } from "react-router-dom";
// import {
//   fetchPhones,
//   fetchNotebooks,
//   fetchTechniques,
//   fetchHomeAndYard,
//   fetchToys
// } from "../../redux/feature/ProductsSlice";
// import { useDebounce } from "./components/useDebounce";
// import ProductsTopProducts from "./components/ProductsTopProducts";
// import { IProduct } from "../../types/types";
// import Loading from "../loading/Loading";
// import { Range, getTrackBackground } from "react-range";
// import { Button } from "../customs";

// const MIN_PRICE = 0;
// const MAX_PRICE = 50000;
// const ITEMS_PER_PAGE = 10; // Items per page

// const ProductsComponent = () => {
//   const [isListView2, setIsListView2] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState<number[]>([
//     MIN_PRICE,
//     MAX_PRICE
//   ]);
//   const [isFiltersApplied, setIsFiltersApplied] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); // Track current page

//   const { phones, notebooks, techniques, homeandyard, toys, isLoading } =
//     useAppSelector(
//       (state: {
//         products: {
//           phones: IProduct[];
//           notebooks: IProduct[];
//           techniques: IProduct[];
//           homeandyard: IProduct[];
//           toys: IProduct[];
//         };
//       }) => state.products
//     );

//   const dispatch = useAppDispatch();
//   const location = useLocation();
//   const path = location.pathname;

//   const debouncedSearchQuery = useDebounce(searchQuery, 500);
//   const debouncedMinPrice = useDebounce(priceRange[0].toString(), 500);
//   const debouncedMaxPrice = useDebounce(priceRange[1].toString(), 500);

//   useEffect(() => {
//     const fetchData = () => {
//       const params = {
//         search: debouncedSearchQuery,
//         limit: ITEMS_PER_PAGE,
//         offset: (currentPage - 1) * ITEMS_PER_PAGE
//       };

//       if (path.includes("/phones")) {
//         dispatch(fetchPhones(params));
//       } else if (path.includes("/techniques")) {
//         dispatch(fetchTechniques(params));
//       }
//     };

//     fetchData();
//   }, [debouncedSearchQuery, dispatch, path, currentPage]);

//   useEffect(() => {
//     if (isFiltersApplied) {
//       const params = {
//         search: debouncedSearchQuery,
//         minPrice: debouncedMinPrice,
//         maxPrice: debouncedMaxPrice,
//         limit: ITEMS_PER_PAGE,
//         offset: (currentPage - 1) * ITEMS_PER_PAGE
//       };

//       if (path.includes("/phones")) {
//         dispatch(fetchPhones(params));
//       }
//       if (path.includes("/notebooks")) {
//         dispatch(fetchNotebooks(params));
//       }
//       if (path.includes("/techniques")) {
//         dispatch(fetchTechniques(params));
//       }
//       if (path.includes("/home-and-yard")) {
//         dispatch(fetchHomeAndYard(params));
//       }
//       if (path.includes("/toys")) {
//         dispatch(fetchToys(params));
//       }
//     }
//   }, [
//     isFiltersApplied,
//     debouncedSearchQuery,
//     debouncedMinPrice,
//     debouncedMaxPrice,
//     dispatch,
//     path,
//     currentPage
//   ]);

//   const currentData: IProduct[] = path.includes("/phones")
//     ? phones
//     : path.includes("/notebooks")
//     ? notebooks
//     : path.includes("/techniques")
//     ? techniques
//     : path.includes("/home-and-yard")
//     ? homeandyard
//     : path.includes("/toys")
//     ? toys
//     : [];

//   const getHeaderText = () => {
//     if (path.includes("/phones")) {
//       return { text: "Телефоны", path: "/phones" };
//     }
//     if (path.includes("/notebooks")) {
//       return { text: "Ноутбуки", path: "/notebooks" };
//     }
//     if (path.includes("/techniques")) {
//       return { text: "Техника", path: "/techniques" };
//     }
//     if (path.includes("/home-and-yard")) {
//       return { text: "Дом и Сад", path: "/home-and-yard" };
//     }
//     if (path.includes("/toys")) {
//       return { text: "Игрушки", path: "/toys" };
//     }
//     return { text: "", path: "" };
//   };

//   const handleSearchSubmit = () => {
//     setIsFiltersApplied(true);
//   };

//   const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.max(
//       MIN_PRICE,
//       Math.min(Number(e.target.value), priceRange[1])
//     );
//     setPriceRange([value, priceRange[1]]);
//   };

//   const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.min(
//       MAX_PRICE,
//       Math.max(Number(e.target.value), priceRange[0])
//     );
//     setPriceRange([priceRange[0], value]);
//   };

//   const { text } = getHeaderText();

//   // Pagination logic
//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Prevent going to a negative page
//   };

//   return (
//     <div className='phones'>
//       <div className='container'>
//         <div className='phones_inner'>
//           <div className='phone-filter'>
//             <div className='filter-component'>
//               <label>Search</label>
//               <input
//                 type='text'
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder='Search for products'
//               />

//               <label>
//                 Price Range: {priceRange[0]} - {priceRange[1]}
//               </label>

//               <div
//                 style={{ display: "flex", gap: "5px", marginBottom: "10px" }}
//               >
//                 <input
//                   type='number'
//                   value={priceRange[0]}
//                   onChange={handleMinPriceChange}
//                   placeholder='Min Price'
//                 />
//                 <input
//                   type='number'
//                   value={priceRange[1]}
//                   onChange={handleMaxPriceChange}
//                   placeholder='Max Price'
//                 />
//               </div>

//               <div className='range-slider-container'>
//                 <Range
//                   values={priceRange}
//                   step={1}
//                   min={MIN_PRICE}
//                   max={MAX_PRICE}
//                   onChange={(values) => setPriceRange(values)}
//                   renderTrack={({ props, children }) => (
//                     <div
//                       {...props}
//                       style={{
//                         ...props.style,
//                         height: "6px",
//                         background: getTrackBackground({
//                           values: priceRange,
//                           colors: ["#ccc", "#00c65e", "#ccc"],
//                           min: MIN_PRICE,
//                           max: MAX_PRICE
//                         })
//                       }}
//                     >
//                       {children}
//                     </div>
//                   )}
//                   renderThumb={({ props }) => (
//                     <div
//                       {...props}
//                       style={{
//                         ...props.style,
//                         height: "15px",
//                         width: "15px",
//                         backgroundColor: "#00c65e",
//                         borderRadius: "50%",
//                         outline: "none"
//                       }}
//                     />
//                   )}
//                 />
//               </div>

//               <Button onClick={handleSearchSubmit}>Apply Filters</Button>
//             </div>

//             {isLoading ? (
//               <Loading />
//             ) : (
//               <div className='phone-content-container'>
//                 <ProductsTopProducts
//                   setIsListView2={setIsListView2}
//                   isListView2={isListView2}
//                   currentData={currentData}
//                   text={text}
//                 />
//                 <div className='pagination-controls'>
//                   <Button onClick={handlePrevPage} disabled={currentPage === 1}>
//                     Previous
//                   </Button>
//                   <Button onClick={handleNextPage}>Next</Button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsComponent;

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLocation } from "react-router-dom";
import {
  fetchPhones,
  fetchNotebooks,
  fetchTechniques,
  fetchHomeAndYard,
  fetchToys
} from "../../redux/feature/ProductsSlice";
import { useDebounce } from "./components/useDebounce";
import ProductsTopProducts from "./components/ProductsTopProducts";
import { IProduct } from "../../types/types";
import Loading from "../loading/Loading";
import { Range, getTrackBackground } from "react-range";
import { Button } from "../customs";
import TextFieldAlternative from "../texts/TextFieldAlternative";

const MIN_PRICE = 0;
const MAX_PRICE = 50000;
const ITEMS_PER_PAGE = 7;

// const ProductsComponent = () => {
//   const [isListView2, setIsListView2] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState<number[]>([
//     MIN_PRICE,
//     MAX_PRICE
//   ]);
//   const [isFiltersApplied, setIsFiltersApplied] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   const { phones, notebooks, techniques, homeandyard, toys, isLoading } =
//     useAppSelector(
//       (state: {
//         products: {
//           phones: IProduct[];
//           notebooks: IProduct[];
//           techniques: IProduct[];
//           homeandyard: IProduct[];
//           toys: IProduct[];
//         };
//       }) => state.products
//     );

//   const dispatch = useAppDispatch();
//   const location = useLocation();
//   const path = location.pathname;

//   const debouncedSearchQuery = useDebounce(searchQuery, 500);
//   const debouncedMinPrice = useDebounce(priceRange[0].toString(), 500);
//   const debouncedMaxPrice = useDebounce(priceRange[1].toString(), 500);

//   useEffect(() => {
//     const fetchData = () => {
//       const params = {
//         search: debouncedSearchQuery,
//         limit: ITEMS_PER_PAGE,
//         offset: (currentPage - 1) * ITEMS_PER_PAGE
//       };

//       if (path.includes("/phones")) {
//         dispatch(fetchPhones(params));
//       } else if (path.includes("/techniques")) {
//         dispatch(fetchTechniques(params));
//       }
//     };

//     fetchData();
//   }, [debouncedSearchQuery, dispatch, path, currentPage]);

//   useEffect(() => {
//     if (isFiltersApplied) {
//       const params = {
//         search: debouncedSearchQuery,
//         minPrice: debouncedMinPrice,
//         maxPrice: debouncedMaxPrice,
//         limit: ITEMS_PER_PAGE,
//         offset: (currentPage - 1) * ITEMS_PER_PAGE
//       };

//       if (path.includes("/phones")) {
//         dispatch(fetchPhones(params));
//       }
//       if (path.includes("/notebooks")) {
//         dispatch(fetchNotebooks(params));
//       }
//       if (path.includes("/techniques")) {
//         dispatch(fetchTechniques(params));
//       }
//       if (path.includes("/home-and-yard")) {
//         dispatch(fetchHomeAndYard(params));
//       }
//       if (path.includes("/toys")) {
//         dispatch(fetchToys(params));
//       }
//     }
//   }, [
//     isFiltersApplied,
//     debouncedSearchQuery,
//     debouncedMinPrice,
//     debouncedMaxPrice,
//     dispatch,
//     path,
//     currentPage
//   ]);

//   const currentData: IProduct[] = path.includes("/phones")
//     ? phones
//     : path.includes("/notebooks")
//     ? notebooks
//     : path.includes("/techniques")
//     ? techniques
//     : path.includes("/home-and-yard")
//     ? homeandyard
//     : path.includes("/toys")
//     ? toys
//     : [];

//   const getHeaderText = () => {
//     if (path.includes("/phones")) {
//       return { text: "Телефоны", path: "/phones" };
//     }
//     if (path.includes("/notebooks")) {
//       return { text: "Ноутбуки", path: "/notebooks" };
//     }
//     if (path.includes("/techniques")) {
//       return { text: "Техника", path: "/techniques" };
//     }
//     if (path.includes("/home-and-yard")) {
//       return { text: "Дом и Сад", path: "/home-and-yard" };
//     }
//     if (path.includes("/toys")) {
//       return { text: "Игрушки", path: "/toys" };
//     }
//     return { text: "", path: "" };
//   };

//   const handleSearchSubmit = () => {
//     setIsFiltersApplied(true);
//   };

//   const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.max(
//       MIN_PRICE,
//       Math.min(Number(e.target.value), priceRange[1])
//     );
//     setPriceRange([value, priceRange[1]]);
//   };

//   const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = Math.min(
//       MAX_PRICE,
//       Math.max(Number(e.target.value), priceRange[0])
//     );
//     setPriceRange([priceRange[0], value]);
//   };

//   const { text } = getHeaderText();

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => {
//       const nextPage = prevPage + 1;
//       window.scrollTo(0, 0);
//       return nextPage;
//     });
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => {
//       const prevPageNumber = Math.max(prevPage - 1, 1);
//       window.scrollTo(0, 0);
//       return prevPageNumber;
//     });
//   };

//   const disableNextButton = currentData.length < ITEMS_PER_PAGE;

//   return (
//     <div className='phones'>
//       <div className='container'>
//         <div className='phones_inner'>
//           <div className='phone-filter'>
//             <div className='filter-component'>
//               <TextFieldAlternative text='Филтрация' />

//               <label>Search</label>
//               <input
//                 type='text'
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder='Search for products'
//               />

//               <label>
//                 Price Range: {priceRange[0]} - {priceRange[1]}
//               </label>

//               <div
//                 style={{ display: "flex", gap: "5px", marginBottom: "10px" }}
//               >
//                 <input
//                   type='number'
//                   value={priceRange[0]}
//                   onChange={handleMinPriceChange}
//                   placeholder='Min Price'
//                 />
//                 <input
//                   type='number'
//                   value={priceRange[1]}
//                   onChange={handleMaxPriceChange}
//                   placeholder='Max Price'
//                 />
//               </div>

//               <div className='range-slider-container'>
//                 <Range
//                   values={priceRange}
//                   step={1}
//                   min={MIN_PRICE}
//                   max={MAX_PRICE}
//                   onChange={(values) => setPriceRange(values)}
//                   renderTrack={({ props, children }) => (
//                     <div
//                       {...props}
//                       style={{
//                         ...props.style,
//                         height: "6px",
//                         background: getTrackBackground({
//                           values: priceRange,
//                           colors: ["#ccc", "#00c65e", "#ccc"],
//                           min: MIN_PRICE,
//                           max: MAX_PRICE
//                         })
//                       }}
//                     >
//                       {children}
//                     </div>
//                   )}
//                   renderThumb={({ props }) => (
//                     <div
//                       {...props}
//                       style={{
//                         ...props.style,
//                         height: "15px",
//                         width: "15px",
//                         backgroundColor: "#00c65e",
//                         borderRadius: "50%",
//                         outline: "none"
//                       }}
//                     />
//                   )}
//                 />
//               </div>

//               <Button onClick={handleSearchSubmit}>Apply Filters</Button>
//             </div>

//             {isLoading ? (
//               <Loading />
//             ) : (
//               <div className='phone-content-container'>
//                 <ProductsTopProducts
//                   setIsListView2={setIsListView2}
//                   isListView2={isListView2}
//                   currentData={currentData}
//                   text={text}
//                 />
//                 {/* <div className='pagination-controls'>
//                   <Button onClick={handlePrevPage} disabled={currentPage === 1}>
//                     Previous
//                   </Button>
//                   <Button onClick={handleNextPage} disabled={disableNextButton}>
//                     Next
//                   </Button>
//                 </div> */}

//                 <div className='pagination-controls'>
//                   <button
//                     onClick={handlePrevPage}
//                     disabled={currentPage === 1}
//                     className='pagination-button'
//                   >
//                     Previous
//                   </button>
//                   <button
//                     onClick={handleNextPage}
//                     disabled={disableNextButton}
//                     className='pagination-button'
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProductsComponent = () => {
  const [isListView2, setIsListView2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([
    MIN_PRICE,
    MAX_PRICE
  ]);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { phones, notebooks, techniques, homeandyard, toys, isLoading } =
    useAppSelector(
      (state: {
        products: {
          phones: IProduct[];
          notebooks: IProduct[];
          techniques: IProduct[];
          homeandyard: IProduct[];
          toys: IProduct[];
        };
      }) => state.products
    );

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
        offset: (currentPage - 1) * ITEMS_PER_PAGE
      };

      if (path.includes("/phones")) {
        dispatch(fetchPhones(params));
      } else if (path.includes("/techniques")) {
        dispatch(fetchTechniques(params));
      }
    };

    fetchData();
  }, [debouncedSearchQuery, dispatch, path, currentPage]);

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
      if (path.includes("/home-and-yard")) {
        dispatch(fetchHomeAndYard(params));
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

  const currentData: IProduct[] = path.includes("/phones")
    ? phones
    : path.includes("/notebooks")
    ? notebooks
    : path.includes("/techniques")
    ? techniques
    : path.includes("/home-and-yard")
    ? homeandyard
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
            </div>

            {isLoading ? (
              <Loading />
            ) : currentData.length === 0 ? (
              <div>No Items Found</div> // This line shows when no products match
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
