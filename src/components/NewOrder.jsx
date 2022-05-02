import axios from "axios";
import {useState} from "react";



export const NewOrder = () => {
    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
   const [data,setData] =useState({
       problem:"",
       owner_name:"",
       brand:"",
       cost:"",
       status:""
   })
const handleChange=(event)=>{
    console.log(event.target.value);
    const {id,value} = event.target
    setData({...data,[id]:value});
}
const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/orders",data).then((res)=>{
        console.log("data added");
    })
}

console.log(data)


    return (
      <div>
        <div className="form" >
          <input
          onChange={(e)=>{handleChange(e)}}
            className="new-problem"
            type="text"
            name="problem"
            placeholder="Enter problem"
          />
          {/* This input is readonly, it's coming from redux */}
          <input
          onChange={(e)=>{handleChange(e)}}

            className="owner-name"
            type="text"
            name="owner_name"
            placeholder="yourname"
            readOnly
          />
          <input
            onChange={(e)=>{handleChange(e)}}
            className="brand"
            type="text"
            name="brand"
            placeholder="Enter brand name"

          />
          {/* Create new problem, show it in below form immediately */}
          <button className="submit" onSubmit={(e)=>{handleSubmit(e)}}>submit</button>
        </div>
  
        <div className="pastOrders">
          {/* this button filters the data below. */}
          {/* it's just a toggle of redux state something like `showUnfinished`  */}
          <button className="filter">
            {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          </button>
  
          {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
          <div className="past-orders">
            <span className="id"></span>. <span className="problem"></span>{" "}
            <span className="cost">
              {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
            </span>
            <p className="status">Status: </p>
            <hr />
          </div>
        </div>
      </div>
    )
        { data.map((el)=>{
            return(     
           <tr className="orders-row">
             <td className="id">{el.id}</td>
             <td className="problem">{el.problem}</td>
             <td className="owner">{el.owner_name}</td>
             <td className="status">{el.status}</td>
             <td className="cost">{el.cost}</td>
             <td className="change-status">
               {/* Show select dropdown only if status is Not Accepted */}
               <select className="changeStatus" name="changeStatus">
                 <option value="Pending">Pending</option>
                 <option value="In Progress">In Progress</option>
                 <option value="Done">Done</option>
                 <option value="Not Accepted">Not Accepted</option>
               </select>
             </td>
             <td className="accept">
               {/* Show this button only if status is Not Accepted */}
               {/* on change make request to update it in db, and show changed status in table */}
               <button>Accept</button>
             </td>
           </tr>
            );
          })}
    
  };