import { useEffect, useState,useContext } from "react";
// import "../../index.css";
import { restaurantList } from "./Restauranlist";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
 const {user,setUser} =useContext(UserContext);

  useEffect(() => {
    setAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }, [searchText]);

  const isOnline = useOnline(); // useOline is custom hook to check online/ offline state
  console.log(isOnline);


  if(!isOnline) {
    return <h1> offline,please check your internet connection!! </h1>
  }
  
  // early return
  if (!allRestaurants) return null;
  if (filteredRestaurants?.length === 0)
    return <h1>No restaurant match Your Search !!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-100 my-5 rounded-lg">
        <input
          type="text"
          className="searh-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button className="p-2 m-2 bg-purple-500 hover:bg-gray-500 rounded-lg "
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the restaurants
            setFilteredRestaurants(data);
          }}
          
        >
          Search
        </button>
        <input value={user.name}  onChange={ (e)=>{
          setUser({
            ...user,
            name: e.target.value,
            
          })
        }}></input>
        <input value={user.email}  onChange={ (e)=>{
          setUser({
            ...user,
            email: e.target.value,
            
          })
        }}></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
