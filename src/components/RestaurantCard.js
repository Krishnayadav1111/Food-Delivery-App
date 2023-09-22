// import {useContext} from "react";
// import UserContext from "../utils/UserContext.js";


const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString, }) => {
  // const {user} = useContext(UserContext);
    return (
      <div className="w-56 p-2 m-2 shadow-lg rounded-md ">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}  </h4>
        {/* <h5 className="p-10 font-bold text-red-900">{user.name}</h5> */}
      </div>
    );
  };

  export default RestaurantCard;