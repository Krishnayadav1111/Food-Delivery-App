// import {useContext} from "react";
// import UserContext from "../utils/UserContext.js";


const FoodItems = ({ name, cloudinaryImageId, description,price,}) => {
  // const {user} = useContext(UserContext);

  console.log(name);
    return (
      <div className="w-56 p-2 m-2 shadow-lg rounded-md bg-pink-200">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{description}</h3>
        <h4> Rupees {price/100}  </h4>
        {/* <h5 className="p-10 font-bold text-red-900">{user.name}</h5> */}
      </div>
    );
  };

  export default FoodItems;