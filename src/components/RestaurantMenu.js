import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [restMenu, setRestMenu] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();
    console.log(json);
    setRestMenu(json);
  };

 if( restMenu === null )
return <Shimmer />

  const { name, cuisines,costForTwoMessage  } = restMenu?.data?.cards[2]?.card?.card?.info ;
  const {itemCards} = restMenu?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (
     <div className="menu">  
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) =>(<li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"RS "}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
