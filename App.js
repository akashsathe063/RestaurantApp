import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"namaste react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//  const HeadingJsx = () => (<h1 id = "heading" className = "head" tabIndex = "5">Namaste React by using jsx..</h1>)

//  const element = <h2>This is a react element...</h2>

//  //React functional Component
//  const HeadingComponent = () => {
//     return (
//         <div>
//             <HeadingJsx/>
//     <h1>Namaste React functionala component ak..</h1>
//     {element}
//     </div>
// )
//  }
const Header = ()=>{
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
            </div>
<div className = "nav-items">
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
</ul>
</div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    console.log(props)
    const {resData} = props
    return (
        <div className = "res-card">
            <img className = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/"+resData.info.cloudinaryImageId}/>
             <h3>{resData.info.name}</h3>
             <h4>{resData.info.cuisines.join(", ")}</h4>
             <h4>4.3 stars</h4>
             <h4>38 min</h4>
        </div>
    )
}

const restList =  [
    {
    "info": {
    "id": "912754",
    "name": "Urban Cafe",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
    "locality": "SOUTH CIVIL LINE",
    "areaName": "Chhindwara City",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Snacks",
    "Pizzas",
    "Pastas",
    "Fast Food",
    "Burgers",
    "Cafe"
    ],
    "veg": true,
    "parentId": "1330",
    "avgRatingString": "NEW",
    "sla": {
    "deliveryTime": 52,
    "lastMileTravel": 11.4,
    "serviceability": "SERVICEABLE",
    "slaString": "50-55 mins",
    "lastMileTravelString": "11.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/urban-cafe-south-civil-line-chhindwara-city-chhindwara-912754",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "769851",
    "name": "Healthy Bites",
    "cloudinaryImageId": "4dfbe240cf1a2be01e6f2805c75c4279",
    "locality": "Collectrate Road",
    "areaName": "Chhindwara City",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Salads"
    ],
    "veg": true,
    "parentId": "3143",
    "avgRatingString": "--",
    "sla": {
    "deliveryTime": 46,
    "lastMileTravel": 11.3,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "11.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 22:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/healthy-bites-collectrate-road-chhindwara-city-chhindwara-769851",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "150602",
    "name": "Raimens Cafe 79",
    "cloudinaryImageId": "eohdm5sdnq6e2u46xeux",
    "locality": "Teacher's Colony",
    "areaName": "VIP Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Bakery",
    "Pizzas",
    "Snacks",
    "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "164782",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 50,
    "lastMileTravel": 12.5,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "12.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/raimens-cafe-79-teachers-colony-vip-road-chhindwara-150602",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "151649",
    "name": "Hotel Sai Nath & Sai Restaurant",
    "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
    "locality": "railway station",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Chinese",
    "Beverages",
    "Fast Food",
    "Desserts"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "101802",
    "avgRatingString": "4.2",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 50,
    "lastMileTravel": 10,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "10.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "FREE ITEM"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-chhindwara-151649",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "195429",
    "name": "Sanju Ka Dhaba",
    "cloudinaryImageId": "hjao7sorzggaeqito6au",
    "locality": "Vishnu Nagar",
    "areaName": "Prasia Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Chinese"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "177443",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 55,
    "lastMileTravel": 14,
    "serviceability": "SERVICEABLE",
    "slaString": "55-60 mins",
    "lastMileTravelString": "14.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 22:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/sanju-ka-dhaba-vishnu-nagar-prasia-road-chhindwara-195429",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "150586",
    "name": "Accord International",
    "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
    "locality": "Parasia Road",
    "areaName": "Vishnu Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Continental",
    "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "26828",
    "avgRatingString": "4.3",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 60,
    "lastMileTravel": 14.3,
    "serviceability": "SERVICEABLE",
    "slaString": "55-60 mins",
    "lastMileTravelString": "14.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "subHeader": "UPTO ₹45"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/accord-international-parasia-road-vishnu-nagar-chhindwara-150586",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "150597",
    "name": "Scoops Fast Food And Ice Cream",
    "cloudinaryImageId": "fm3rs3g6z7ibfhesmxnu",
    "locality": "Irrigation Colony",
    "areaName": "Khajri Road",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Bakery",
    "Ice Cream",
    "Snacks",
    "Beverages"
    ],
    "avgRating": 4.1,
    "veg": true,
    "parentId": "179482",
    "avgRatingString": "4.1",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 59,
    "lastMileTravel": 11.4,
    "serviceability": "SERVICEABLE",
    "slaString": "55-60 mins",
    "lastMileTravelString": "11.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "subHeader": "UPTO ₹45"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-chhindwara-150597",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "234875",
    "name": "Adil Hotel",
    "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    "locality": "Rautha Wada",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Tandoor"
    ],
    "avgRating": 4.4,
    "parentId": "27123",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 46,
    "lastMileTravel": 12.6,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "12.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-13 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹349",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-763899ca-eda5-4785-b889-a6711707b268"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]

const Body = () =>{
    return (
        <div className = "body">
              <div className = "search">Search</div>
              <div className = "res-container">
               {/* <RestaurantCard resName = "Meghana Foods" cuisine = "Biriyani, North Indian, Asian"/>
               <RestaurantCard resName = "KFC" cuisine = "Burger, Fast Food"/> */}
               <RestaurantCard resData = {restList[0]}/>
               <RestaurantCard resData = {restList[1]}/>
               <RestaurantCard resData = {restList[2]}/>
               <RestaurantCard resData = {restList[3]}/>
               <RestaurantCard resData = {restList[4]}/>
               <RestaurantCard resData = {restList[5]}/>
               <RestaurantCard resData = {restList[6]}/>
               <RestaurantCard resData = {restList[7]}/>
             </div>
        </div>
    )
}
const Applayout = () =>{
    return ( 
    <div className = "app">
      <Header/>
      <Body/>
    </div>)
}
 const root = ReactDOM.createRoot(document.getElementById("root")); 
 root.render(<Applayout/>);
 