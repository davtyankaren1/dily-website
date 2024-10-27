import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductSingleComponent from "../../components/product-single-component/ProductSingleComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProductById } from "../../redux/feature/ProductsSlice";

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
        : "techniques";
      dispatch(fetchProductById({ id, category }));
    }
  }, [dispatch, id, path]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product: {isError}</div>;
  if (!selectedProduct) return <div>Product not found</div>;

  return (
    <div>
      <ProductSingleComponent product={selectedProduct} />
    </div>
  );
};

export default ProductSinglePage;
