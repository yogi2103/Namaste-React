import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  //use state (variablename, functionforupdating)

  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);

  const [searchInput, setSearchInput] = useState(""); //react variable(state variable)

  useEffect(()=>{
    //API call
    getRestaurants();  
  },[searchInput])

 async function getRestaurants(){
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  console.log(json);  
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)   //optional chaining
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)   //optional chaining
 } 

  // const searchClicked = false;

  const [searchClicked, setSearchClicked] = useState("false");
  console.log("Body rendering")

  const online=useOnline();
  if(!online)
    return <h1> 🔴 Offline, Please check your internet connection!</h1>

  return allrestaurants?.length ===0 ? ( <Shimmer/> ): (
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
            const data = filterData(searchInput, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        { filteredrestaurants.length ===0 && allrestaurants.length>0 ?
        <h1>No restaurant found!!!</h1>:
        filteredrestaurants.map((restaurant) => {
          return (
           <Link to={`restaurant/${restaurant.data.id}`}> <RestaurantCard {...restaurant.data} key={restaurant.data.id} /> </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
