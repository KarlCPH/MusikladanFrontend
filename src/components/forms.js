import React from "react";
import "../custom.scss"
import doc1 from "../documents/Anhållan om ledighet.pdf"
import doc2 from "../documents/anmalan-till-modersmalsundervisning_grundskolan.pdf"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import "../custom.scss"
import { Jumbotron, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../App.css"
import pdfIcon from "../images/pdf-icon.png"




function Forms() {
    return(
<Jumbotron>
    <div style={{
        position: "absolute",
        top:"0",
        bottom: "0",
        left: "0",
        right: "-500px",
        width: "100px",
        height: "750px",  
        margin: "auto"}}>
        <div>
            <div>
                <div className="row" />
                <a href={doc1}>
                    <img alt="pdfIcon" src={pdfIcon} width="70" height="70" />
                Anhållan om ledighet
                </a>
                <div className="col" />
                <a href={doc2}>
                    <img alt="pdfIcon" src={pdfIcon} width="70" height="70" />
                Anmälan till modersmålsundervisning
                </a>
            </div>
        </div>
    </div>
</Jumbotron>
    
    );
}

export default Forms;