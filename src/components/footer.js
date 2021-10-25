import React from "react";
import "./footer.css";
import logo from "../images/object1908573876.png"
import footerImg from "../images/6888456.png"
import { BrowserRouter as Router, NavLink, Route, Switch, Link } from "react-router-dom";



function Footer() {
  return (
    <div class="" className="main-footer" bg="secondary" style={{
        borderradius:"15px 50px",
        bordercolor:"#030e12",
        padding:"20px", 
        width:"100%",
        height:"150px"}} >
          
      <div className="container">
      
          
      
        <div className="row">
          {/* Column1 */}
          <div className="col">
          <Link to ="/home">
          <a className="navbar-brand" href="www.musikladan.se">
            <img src={logo} className="logo" alt={"logo"} style={{ 
        width: "20vw",
        minWidth: "200px",
        marginLeft: "-80px",
        marginRight: "auto",
        marginTop: "40px",
        marginBottom: "5px"
        }} />
          </a>
          </Link>
          
          </div>
          <div className="col">
            <h1 className="list-unstyled">
              
              <a href="http://maps.google.com/?q=Flöjtvägen 6, 756 54 Uppsala, Sverige"> Flöjtvägen 6, 756 54 Uppsala, Sverige   <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-map-maps-locations-those-icons-lineal-those-icons-2.png"/>            </a>
              <a></a>
              <a href="tel:+46 18 40 46 30">+46 18 40 46 30</a>
            </h1>
          </div>
          
          
          
          
          <div className="col"></div>
          {/* Column3 */}
          <div className="col">
            <h1 className="list-unstyled">
            
              <a href="tel:+46 18 40 46 86">Sjukanmälan görs till <img src="https://img.icons8.com/material-outlined/24/000000/phone.png"/>018-40 46 86</a>
              
            </h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Webmaster: Karl Frödin | <a href="mailto: karl.frodin@gmail.com">karl.frodin@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;