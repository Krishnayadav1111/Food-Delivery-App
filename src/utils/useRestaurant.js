import { useState ,useEffect} from "react"
import { MENU_DATA } from "../mocks/data";

const useRestaurant = () => {
const [restaurant,setRestaurant] = useState(null);


useEffect(() =>{
    getRestrauntInfo()

},[]);
   async function getRestrauntInfo(){
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&menuId=326440")

    // const json = await data.json();
    // console.log(json.data);
    setRestaurant(MENU_DATA.data);
   }
return restaurant;

};

export default useRestaurant;