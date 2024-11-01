import { useLocation } from "react-router-dom";

const BasketPage = () => {
  const location = useLocation();
  const { items } = location.state || { items: [] };

  return (
    <div className='basket-page'>
      <div className='container'>
        <h1>Basket Items</h1>
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>
    </div>
  );
};

export default BasketPage;
