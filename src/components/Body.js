import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  const filtereddata = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
  return filtereddata;
}

const Body = () => {
  //use state (variablename, functionforupdating)

  const [restaurants, setRestaurants] = useState(restaurantList);

  const [searchInput, setSearchInput] = useState(); //react variable(state variable)

  // const searchClicked = false;

  const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <h1>{searchClicked}</h1>
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            //update the state (show the restaurant list matching with the searched string/query)
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
