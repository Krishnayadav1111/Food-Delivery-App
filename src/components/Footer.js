import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () =>{

    const {user} = useContext(UserContext);


    return( <div><h4>Footer</h4>
    <h4 className="font-bold h-7">{user.name}</h4></div>
        
    )
}
export default Footer;