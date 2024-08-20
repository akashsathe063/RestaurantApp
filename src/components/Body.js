import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData.js";
import {useState} from "react";
const Body = () =>{
// state variable
let [listOfRestaurant,setRestraunt] = useState(restList);
    //normal variable
    // let listOfRestaurant = [];
    return (
        <div className = "body">
              <div className = "filter">
                <button className = "filter-btn" onClick = { () => {
                   const listOfRestaurant = restList.filter((rest) => rest.info.avgRating > 4.2);
                   setRestraunt(listOfRestaurant)
                }}>Top Rated Restaurants</button>
              </div>
              <div className = "res-container">   
               {/* <RestaurantCard resName = "Meghana Foods" cuisine = "Biriyani, North Indian, Asian"/>
               <RestaurantCard resName = "KFC" cuisine = "Burger, Fast Food"/> */}
               {/* <RestaurantCard resData = {restList[0]}/>
               <RestaurantCard resData = {restList[1]}/>
               <RestaurantCard resData = {restList[2]}/>
               <RestaurantCard resData = {restList[3]}/>
               <RestaurantCard resData = {restList[4]}/>
               <RestaurantCard resData = {restList[5]}/>
               <RestaurantCard resData = {restList[6]}/>
               <RestaurantCard resData = {restList[7]}/> */}
               {
                listOfRestaurant.map(restaurant =>( <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>) )
               }
             </div>
        </div>
    )
}

export default Body;