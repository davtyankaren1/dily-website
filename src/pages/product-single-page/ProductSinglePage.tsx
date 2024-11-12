import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductSingleComponent from "../../components/product-single-component/ProductSingleComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProductById } from "../../redux/feature/ProductsSlice";
import "../../styles/ProductSinglePage.scss";

const ProductSinglePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { selectedProduct, isLoading, isError } = useAppSelector(
    (state) => state.products
  );

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (id) {
      const category = path.includes("phones")
        ? "phones"
        : path.includes("notebooks")
        ? "notebooks"
        : path.includes("techniques")
        ? "techniques"
        : path.includes("toys")
        ? "toys"
        : path.includes("home-and-yard")
        ? "home-and-yard"
        : path.includes("animals")
        ? "animals"
        : null;

      if (category) {
        dispatch(fetchProductById({ id, category }));
      }
    }
  }, [dispatch, id, path]);

  if (isLoading)
    return (
      <div className='loading-container'>
        <div className='loading-text'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'
            width={80}
            height={80}
          />
        </div>
      </div>
    );
  if (isError) return <div>Error loading product: {isError}</div>;

  return (
    <div className='single-product-page'>
      {selectedProduct && <ProductSingleComponent product={selectedProduct} />}
    </div>
  );
};

export default ProductSinglePage;
