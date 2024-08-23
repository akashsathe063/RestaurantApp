import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
const Body = () => {
  // state variable
  const [listOfRestaurant, setRestraunt] = useState([]);
  const [filterListOfRestaurant, setFilterRestraunt] = useState([]);
  //normal variable
  // let listOfRestaurant = [];
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9850084&lng=77.7115322&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestraunt(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestraunt(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //it is known as conditional rendering.
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer />
  // };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btnSearch"
            onClick={() => {
              console.log(searchText);
             const filterListOfRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
             setFilterRestraunt(filterListOfRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const listOfRestaurantt = listOfRestaurant.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            setFilterRestraunt(listOfRestaurantt);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
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
        {filterListOfRestaurant.map((restaurant) => (
         <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
