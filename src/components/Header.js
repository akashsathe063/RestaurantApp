import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect} from "react";

const Header = ()=>{
    useEffect(() =>{
        console.log("akash")
    },[])
    const [btnNameReact,setBtnNameReact] = useState("Login");
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = {LOGO_URL}/>
            </div>
<div className = "nav-items">
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    <button className="login" onClick={ () =>{ btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}}>{btnNameReact}</button>
</ul>
</div>
        </div>
    )
}

export default Header;