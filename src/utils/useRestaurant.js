import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) =>{

    const [restaurant, SetRestaurant]=useState(null);

    //get data from API
    useEffect(() =>{
        console.log("useEffect in restaurant");
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data= await fetch(FETCH_MENU_URL+ resId.id);
        const json= await data.json();
        SetRestaurant(json.data);
        console.log(json);  
    }

    //return the restaurant data
    return restaurant;

}

export default useRestaurant;