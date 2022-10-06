import React from "react"
import "../assets/main.css";
import "../App.css"
import "../assets/main.css"



function MyPrincipal(props) {
    return (
        <div className="main">
            <div className="IMG">
                <img  className="img"src={props.image}/>
                <span>
                   <h3> {props.name}</h3>
                    <p> {props.EmailAdress}  </p>
                     <p> {props.PhoneNumber} </p>
            
                 </span>
             </div>
             
        </div>
    );
}
export default MyPrincipal;