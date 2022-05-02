import {Link} from "react-router-dom";


export const Navbar = ()=> {
    return(
        <div className="navbar">
            <Link className="navbarHome" to={"/"}>Home</Link>
            <Link className="navLoginSignUp" to={"/login"}>Login</Link>
        </div>
    )
}