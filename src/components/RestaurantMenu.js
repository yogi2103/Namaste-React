import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const params = useParams();

    const [restaurant, SetRestaurant]=useState(null);

    useEffect(() =>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data= await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=${params.id}`);
        const json= await data.json();
        SetRestaurant(json.data);
        console.log(json);  
    }


    
   return !restaurant? <Shimmer/>: <div className="menu">
        <div>
            <h1>Restaurant id:{params.id}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars </h3>
            <h3>{restaurant?.costForTwoMsg}  </h3>
        </div> 
        <div>
            <h1>Menu</h1>
             <ul>
            {Object.values(restaurant?.menu?.items).map((item)=> (
              <li key={item.id}>
                {item.name} 
            </li>)
            ) } 
            </ul>
        </div>
   </div>
}

export default RestaurantMenu;