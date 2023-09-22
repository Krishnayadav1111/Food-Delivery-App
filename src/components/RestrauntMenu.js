import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
    const params = useParams();
    // how to read a dynamic URL params
    const {resId} =params;
    console.log(params);
   const restaurant = useRestaurant(resId);
   console.log(restaurant);


   const dispatch = useDispatch();
// Dispatching the action
   const addFoodItem = (item) =>{
dispatch(addItem(item));
   }

    
    
return !restaurant ? ( <Shimmer/> ) : (

  
        <div className="flex">
            <div className="p-5">
            <h1>Restaurant id:{resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
            </div>
            <div>
            
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name} - <button className="p-1 bg-green-300" onClick={() =>{ addFoodItem(item) }}>Add</button></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default RestaurantMenu;