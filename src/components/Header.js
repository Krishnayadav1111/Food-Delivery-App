
// import "../../index.css"
import { Link } from "react-router-dom";
import { useState ,useContext } from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title = () => (
    <a href="/">
    <img className="h-28 p-2" alt="logo" src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0" />

    </a>
);




const Header = () => {
const [isLoggedIn,setIsLoggedIn] = useState(false);


const isOnline= useOnline();

const {user} = useContext(UserContext);

const cartItems = useSelector(store=> store.cart.items);
console.log(cartItems);


    return(
        <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-blue-50 md:bg-yellow-300 "> 
            <Title/>
            <div className="" >
                <ul className="flex py-10" >
                <Link to="/">
                    <li className="px-2" >Home</li>
                    </Link>
                    <Link to="/about">
                    <li className="px-2">About</li>
                    </Link>
                    <li className="px-2"><Link to="/contact">Contact </Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart </Link></li>
                    <Link to = "/cart"><li className="px-2">Cart- {cartItems.length} items</li></Link>
                </ul>
            </div>

           <h1>{ isOnline ?  "online" : "offline" }</h1> 
           <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
            {isLoggedIn?<button onClick={() => setIsLoggedIn(false)}>Login</button> :<button onClick={() => setIsLoggedIn(true)}>LogOut</button>}
            
            
        </div>
    );
}

export default Header;