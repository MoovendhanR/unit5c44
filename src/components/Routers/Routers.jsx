import {Routes,Route}from "react-router-dom";
import {Home} from "../Home";
import{Login} from "../Login";
import {Logout} from "../Logout";
import { NewOrder } from "../NewOrder";
import { Orders } from "../Orders";
import {Navbar} from "../Navbar";

export const Routers=()=>{
    return(
        <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/neworder" element={<NewOrder/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        </Routes>
        
        </>
    )
}
