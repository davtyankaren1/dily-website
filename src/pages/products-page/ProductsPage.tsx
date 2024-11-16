import ProductsComponent from "../../components/products/ProductsComponent";

const ProductsPage = ({ language }) => {
  return (
    <div>
      <ProductsComponent language={language} />
    </div>
  );
};

export default ProductsPage;
