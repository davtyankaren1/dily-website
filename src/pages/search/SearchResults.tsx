import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CardItem from "../../components/card/CardItem";

import { Button } from "../../components/customs";
import "../../styles/SearchResults.scss";

const SearchResults = () => {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchquery = params.get("searchquery");

    if (searchquery) {
      axios
        .get(`http://localhost:8081/search?searchquery=${searchquery}`)
        .then((response) => {
          const correctedResults = Object.fromEntries(
            Object.entries(response.data).map(([table, items]) => [
              table,
              items.map((item) => ({
                ...item,
                images:
                  typeof item.images === "string"
                    ? JSON.parse(item.images)
                    : item.images
              }))
            ])
          );
          setResults(correctedResults);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch search results");
          setLoading(false);
        });
    }
  }, [location.search]);

  // Clear search input and navigate back to the board page
  const handleNavigate = () => {
    navigate("/board"); // Navigate to the board page
  };

  // Handle back navigation when no results
  const handleNoResults = () => {
    navigate("/board");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const hasResults = Object.values(results).some((items) => items.length > 0);

  return (
    <div className='search-results'>
      <div className='container'>
        <div className='search-result__inner'>
          {hasResults ? (
            Object.keys(results).map(
              (table) =>
                results[table].length > 0 && (
                  <div key={table} className='search-results__table'>
                    <div className='card-items-container'>
                      {results[table].map((item) => (
                        <CardItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                )
            )
          ) : (
            <div className='search_not-found'>
              <div className='search_not-found-content'>
                <p>No results found for "{location.search.split("=")[1]}"</p>
                <Button onClick={handleNoResults} children='Back to board' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
